import { Stethoscope, Pill, AlertCircle, Users, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Free Medical Camps',
      description: 'Regular medical camps in rural villages providing free healthcare services to children',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Pill,
      title: 'Medicine Distribution',
      description: 'Distribution of essential medicines and supplements at no cost to families',
      color: 'from-[#1B8A5A] to-[#156B47]',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Medical Aid',
      description: 'Immediate medical assistance for children facing critical health situations',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Users,
      title: 'Health Awareness Programs',
      description: 'Educational programs on hygiene, nutrition, and preventive healthcare for communities',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'Follow-up and Monitoring',
      description: 'Continuous care and monitoring of children to ensure lasting health improvement',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#1B8A5A]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet the unique needs of children
            in rural communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1B8A5A] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">All Services Provided Free of Cost</h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We believe healthcare is a right, not a privilege. Every service we provide is
            completely free for all families in need.
          </p>
          <a
            href="#help"
            className="inline-block bg-white text-[#1B8A5A] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Help Us Reach More Children
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
