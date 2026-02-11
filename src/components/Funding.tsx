import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Package,
  Clock,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Funding = () => {
  const fundingOptions = [
    {
      icon: DollarSign,
      title: "Monthly Supporter",
      amount: "₹500/month",
      description: "Provide consistent support with a monthly contribution",
      popular: false,
    },
    {
      icon: Heart,
      title: "Camp Sponsor",
      amount: "₹10,000",
      description: "Sponsor an entire medical camp in a rural village",
      popular: true,
    },
    {
      icon: Package,
      title: "Medicine Kit",
      amount: "₹2,000",
      description: "Fund a complete medicine kit for one camp",
      popular: false,
    },
    {
      icon: Clock,
      title: "One-Time Donation",
      amount: "Any Amount",
      description: "Make a one-time contribution of your choice",
      popular: false,
    },
  ];

  const patientFunding = [
    {
      id: "aarav",
      image:
        "https://picsum.photos/id/1027/600/400",
      name: "Aarav",
      age: 7,
      location: "Pune",
      condition: "Heart Surgery",
      estimatedCost: "₹3,50,000",
      story:
        "Aarav is a bright 7-year-old from Pune with a congenital heart defect.",
    },
    {
      id: "meera",
      image:
        "https://picsum.photos/id/1005/600/400",
      name: "Meera",
      age: 9,
      location: "Nashik",
      condition: "Bone Marrow Treatment",
      estimatedCost: "₹5,00,000",
      story:
        "Nine-year-old Meera from Nashik is battling a serious blood disorder.",
    },
    {
      id: "rohan",
      image:
        "https://picsum.photos/id/1011/600/400",
      name: "Rohan",
      age: 5,
      location: "Aurangabad",
      condition: "Kidney Surgery",
      estimatedCost: "₹2,75,000",
      story:
        "Five-year-old Rohan needs kidney surgery to lead a normal life.",
    },
    {
      id: "saniya",
      image:
        "https://picsum.photos/id/1025/600/400",
      name: "Saniya",
      age: 11,
      location: "Mumbai",
      condition: "Spinal Treatment",
      estimatedCost: "₹4,25,000",
      story:
        "Saniya has a spinal condition that requires corrective surgery.",
    },
    {
      id: "vihaan",
      image:
        "https://picsum.photos/id/1031/600/400",
      name: "Vihaan",
      age: 6,
      location: "Nagpur",
      condition: "Liver Treatment",
      estimatedCost: "₹3,00,000",
      story:
        "Vihaan requires urgent liver treatment and continuous medical care.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? patientFunding.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === patientFunding.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="funding"
      className="relative pt-40 pb-24 bg-gradient-to-br from-[#1B8A5A]/5 via-white to-[#1B8A5A]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- Support Options ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ways to <span className="text-[#1B8A5A]">Support</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose how you would like to contribute and make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {fundingOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition ${
                option.popular ? "ring-2 ring-[#1B8A5A]" : ""
              }`}
            >
              <div className="bg-[#1B8A5A]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <option.icon className="w-7 h-7 text-[#1B8A5A]" />
              </div>

              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-2xl font-bold text-[#1B8A5A] mb-4">
                {option.amount}
              </p>
              <p className="text-gray-600 mb-6">{option.description}</p>

              <button className="w-full bg-[#1B8A5A] text-white py-3 rounded-full hover:bg-[#156B47] transition">
                Donate Now
              </button>
            </div>
          ))}
        </div>

        {/* ---------- Patient Carousel ---------- */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">
            Children Needing{" "}
            <span className="text-[#1B8A5A]">Your Support</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center mt-10">

          <button
            onClick={prevSlide}
            className="absolute left-2 z-30 bg-white shadow-lg p-3 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-[#1B8A5A]" />
          </button>

          <div className="relative w-full max-w-7xl h-[480px] flex items-center justify-center">

            {patientFunding.map((patient, index) => {
              const total = patientFunding.length;

              const pos0 = currentIndex;
              const pos1 = (currentIndex - 1 + total) % total;
              const pos2 = (currentIndex + 1) % total;
              const pos3 = (currentIndex - 2 + total) % total;
              const pos4 = (currentIndex + 2) % total;

              let positionClass = "opacity-0 scale-75";

              if (index === pos0)
                positionClass =
                  "translate-x-0 scale-105 opacity-100 z-30";
              else if (index === pos1)
                positionClass =
                  "-translate-x-[260px] scale-95 opacity-80 z-20";
              else if (index === pos2)
                positionClass =
                  "translate-x-[260px] scale-95 opacity-80 z-20";
              else if (index === pos3)
                positionClass =
                  "-translate-x-[480px] scale-85 opacity-50 z-10";
              else if (index === pos4)
                positionClass =
                  "translate-x-[480px] scale-85 opacity-50 z-10";

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out ${positionClass}`}
                >
                  <div
                    className={`bg-white rounded-3xl shadow-xl p-6 text-center w-[280px] ${
                      index === pos0 ? "ring-2 ring-[#1B8A5A]" : ""
                    }`}
                  >
                    <img
                      src={patient.image}
                      alt={patient.name}
                      className="w-28 h-28 object-cover rounded-xl mx-auto mb-3"
                    />

                    <h3 className="text-lg font-bold">
                      {patient.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {patient.age} yrs • {patient.location}
                    </p>

                    <p className="text-[#1B8A5A] font-semibold mt-2 text-sm">
                      {patient.condition}
                    </p>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500">
                        Estimated Cost
                      </p>
                      <p className="text-lg font-bold text-[#1B8A5A]">
                        {patient.estimatedCost}
                      </p>
                    </div>

                    <div className="flex gap-2 justify-center mt-4">
                      <button className="bg-[#1B8A5A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#156B47] transition">
                        Support
                      </button>

                      <Link
                        to={`/patient/${patient.id}`}
                        className="border border-[#1B8A5A] text-[#1B8A5A] px-4 py-2 rounded-full text-sm hover:bg-[#1B8A5A] hover:text-white transition"
                      >
                        Read More
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 z-30 bg-white shadow-lg p-3 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-[#1B8A5A]" />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {patientFunding.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index
                  ? "bg-[#1B8A5A]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Funding;
