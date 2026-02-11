import { Heart, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-[#1B8A5A]/5 via-white to-[#1B8A5A]/10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[#1B8A5A]/10 text-[#1B8A5A] px-4 py-2 rounded-full text-sm font-semibold">
                Est. March 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Kartavya Medical Foundation
            </h1>

            <p className="text-2xl text-[#1B8A5A] font-semibold mb-4">We are here because we care</p>

            <p className="text-xl text-gray-600 leading-relaxed">
              Providing comprehensive medical care to underprivileged children and rural communities across Maharashtra.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#help"
                className="inline-flex items-center justify-center bg-[#1B8A5A] text-white px-8 py-4 rounded-full hover:bg-[#156B47] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Heart className="w-5 h-5 mr-2" />
                Request Help
              </a>
              <a
                href="#funding"
                className="inline-flex items-center justify-center border-2 border-[#1B8A5A] text-[#1B8A5A] px-8 py-4 rounded-full hover:bg-[#1B8A5A] hover:text-white transition-all duration-200 font-semibold text-lg"
              >
                Support a Child
              </a>
              <a
                href="#campaigns"
                className="inline-flex items-center justify-center border-2 border-[#1B8A5A] text-[#1B8A5A] px-8 py-4 rounded-full hover:bg-[#1B8A5A] hover:text-white transition-all duration-200 font-semibold text-lg"
              >
                View Campaigns
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B8A5A]">40+</div>
                <div className="text-sm text-gray-600 mt-1">Medical Camps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B8A5A]">500+</div>
                <div className="text-sm text-gray-600 mt-1">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B8A5A]">100+</div>
                <div className="text-sm text-gray-600 mt-1">Volunteers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical camp"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1B8A5A]/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-[#1B8A5A]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Community Impact</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Serving rural communities across Maharashtra
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#1B8A5A] p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-white" />
                <div>
                  <p className="font-semibold text-white">Maharashtra</p>
                  <p className="text-sm text-white/80">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
