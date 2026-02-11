import { useEffect, useState, useRef } from 'react';
import { Activity, Users, MapPin, Heart } from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Activity,
      number: 40,
      suffix: '+',
      label: 'Medical Camps',
      description: 'Organized across Maharashtra',
    },
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Patients Served',
      description: 'Children received care',
    },
    {
      icon: Heart,
      number: 100,
      suffix: '+',
      label: 'Volunteers',
      description: 'Dedicated team members',
    },
    {
      icon: MapPin,
      number: 25,
      suffix: '+',
      label: 'Villages Reached',
      description: 'Communities impacted',
    },
  ];

  const Counter = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#1B8A5A] to-[#156B47] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Since March 2024, we've been making a difference in the lives of children
            across rural Maharashtra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter end={stat.number} duration={2000} />
                {stat.suffix}
              </div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-white/90">Free Healthcare Services</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">₹0</div>
            <p className="text-white/90">Cost to Families</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/90">Support Available</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-white mb-6">
            Together, we're building healthier communities
          </p>
          <a
            href="#help"
            className="inline-flex items-center bg-white text-[#1B8A5A] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-xl"
          >
            <Heart className="w-5 h-5 mr-2" />
            Join Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
