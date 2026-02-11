import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      title: 'Rural Health Camp',
      location: 'Pune',
      date: '2024-02-15',
      time: '09:00 AM - 04:00 PM',
      beneficiaries: '120+ children',
      image: 'https://images.pexels.com/photos/6823564/pexels-photo-6823564.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive health checkups, vaccinations, and medicine distribution in rural Pune villages.',
      status: 'Completed',
    },
    {
      title: 'Child Vaccination Drive',
      location: 'Nashik',
      date: '2024-02-22',
      time: '10:00 AM - 03:00 PM',
      beneficiaries: '95+ children',
      image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Free vaccination camp ensuring all children receive essential immunizations.',
      status: 'Completed',
    },
    {
      title: 'Eye Check-up Camp',
      location: 'Kolhapur',
      date: '2024-03-01',
      time: '08:00 AM - 05:00 PM',
      beneficiaries: '110+ children',
      image: 'https://images.pexels.com/photos/6647022/pexels-photo-6647022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vision screening and free spectacles distribution for children with vision problems.',
      status: 'Completed',
    },
    {
      title: 'General Medical Camp',
      location: 'Solapur',
      date: '2024-03-10',
      time: '09:00 AM - 04:00 PM',
      beneficiaries: '130+ children',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'General health checkups, dental screening, and health counseling for children.',
      status: 'Scheduled',
    },
    {
      title: 'Women Health Awareness',
      location: 'Nagpur',
      date: '2024-03-15',
      time: '02:00 PM - 06:00 PM',
      beneficiaries: '150+ women & girls',
      image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Health awareness program focused on maternal and adolescent health awareness.',
      status: 'Scheduled',
    },
    {
      title: 'School Health Screening',
      location: 'Satara',
      date: '2024-03-22',
      time: '10:00 AM - 03:00 PM',
      beneficiaries: '200+ school children',
      image: 'https://images.pexels.com/photos/6823564/pexels-photo-6823564.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive health screening program for students in rural schools.',
      status: 'Scheduled',
    },
  ];

  return (
    <section id="campaigns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#1B8A5A]">Campaigns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of impact from our medical camps across Maharashtra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    campaign.status === 'Completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-[#1B8A5A] text-white'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {campaign.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 text-[#1B8A5A] mr-2 flex-shrink-0" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 text-[#1B8A5A] mr-2 flex-shrink-0" />
                    <span>{campaign.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 text-[#1B8A5A] mr-2 flex-shrink-0" />
                    <span>{campaign.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 text-[#1B8A5A] mr-2 flex-shrink-0" />
                    <span>{campaign.beneficiaries}</span>
                  </div>
                </div>

                <a
                  href="#help"
                  className="inline-flex items-center text-[#1B8A5A] font-semibold hover:text-[#156B47] transition-colors text-sm"
                >
                  Support
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            Want to bring a medical camp to your village?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking to expand our reach. Get in touch to organize a camp in your community.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#1B8A5A] text-white px-8 py-4 rounded-full hover:bg-[#156B47] transition-colors duration-200 font-semibold"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
