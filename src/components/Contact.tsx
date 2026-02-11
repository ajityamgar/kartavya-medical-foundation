import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Maharashtra, India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7499474743'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ajit.operations@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#1B8A5A]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Want to partner with us? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1B8A5A]/5 to-[#1B8A5A]/10 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#1B8A5A] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
              <p className="text-lg text-gray-600 mb-6">
                While we primarily operate in rural areas through our medical camps, our
                administrative office in Maharashtra welcomes visitors by appointment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#1B8A5A]/10 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B8A5A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Main Office</p>
                    <p className="text-gray-600">Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#1B8A5A]/10 p-2 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1B8A5A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Saturday, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121360.08319143474!2d73.8107427!3d18.5240431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2efd3777d7c1d%3A0x7e6a97d8a8d8a8a8!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-[#1B8A5A]/5 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">For Urgent Medical Assistance</h4>
          <p className="text-lg text-gray-600 mb-6">
            If you need immediate medical help, please contact your nearest hospital or call emergency services.
            We organize planned medical camps and are not an emergency response service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:108"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: 108
            </a>
            <a
              href="tel:102"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ambulance: 102
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
