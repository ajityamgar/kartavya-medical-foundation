import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Campaigns", id: "campaigns" },
    { name: "Impact", id: "impact" },
    { name: "Help", id: "help" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const top =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const top =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("home")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-[#1B8A5A] p-2 rounded-full">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Kartavya Medical
              </h1>
              <p className="text-xs text-[#1B8A5A] font-medium">
                We are here because we care
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className="text-gray-700 hover:text-[#1B8A5A] font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation("help")}
              className="bg-[#1B8A5A] text-white px-6 py-2.5 rounded-full hover:bg-[#156B47] transition-colors duration-200 font-medium"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#1B8A5A]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className="block w-full text-left text-gray-700 hover:text-[#1B8A5A] font-medium"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation("help")}
              className="block w-full text-center bg-[#1B8A5A] text-white px-6 py-3 rounded-full"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
