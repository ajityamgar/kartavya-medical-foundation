import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Campaigns', href: '#campaigns' },
  ];

  const supportLinks = [
    { name: 'Donate', href: '#help' },
    { name: 'Volunteer', href: '#help' },
    { name: 'Partner With Us', href: '#contact' },
    { name: 'Request a Camp', href: '#help' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-[#1B8A5A] p-2 rounded-full">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kartavya Medical Foundation</h3>
                <p className="text-sm text-gray-400">We are here because we care</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Dedicated to transforming child healthcare in rural Maharashtra through accessible
              medical camps and compassionate care. Together, we're building healthier communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#1B8A5A] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1B8A5A] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1B8A5A] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        <div className="bg-[#1B8A5A] py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm">
              © {new Date().getFullYear()} Kartavya Medical Foundation. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white hover:text-[#1B8A5A] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[#1B8A5A] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-[#1B8A5A] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
