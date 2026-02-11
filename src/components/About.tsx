import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We lead with empathy and care for every individual we serve',
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on making quality healthcare accessible to all children',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building lasting relationships with the communities we serve',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest standard of medical care',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#1B8A5A]">Our Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in March 2024, Kartavya Medical Foundation is dedicated to transforming
            child healthcare in rural Maharashtra
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              We Are Here Because We Care
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every child in rural Maharashtra deserves access to quality healthcare, regardless
              of their family's economic situation. That's why we exist.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our dedicated medical camps, we bring experienced doctors, essential medicines,
              and preventive care directly to communities that need it most. We don't just treat
              illnesses—we build healthier futures.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 40 successful medical camps and 500+ patients served in our first year,
              we're just getting started. Supported by 100+ passionate volunteers, we're creating
              a movement of care and compassion that reaches further every day.
            </p>
            <div className="pt-4">
              <a
                href="#help"
                className="inline-flex items-center text-[#1B8A5A] font-semibold hover:text-[#156B47] transition-colors"
              >
                Join our mission
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7551663/pexels-photo-7551663.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Children receiving medical care"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1B8A5A] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-white/90">Of our camps focus on underserved rural communities</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1B8A5A]/5 to-[#1B8A5A]/10 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#1B8A5A] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
