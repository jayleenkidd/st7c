import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Calendar, TrendingUp, Smartphone, BarChart3, Settings, Star, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 'web-design',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      subtitle: 'Beautiful Hotel Websites',
      description: 'Custom-designed websites that convert visitors into guests',
      price: '₹18,000',
      features: ['Mobile Responsive', 'Fast Loading', 'SEO Optimized'],
      gradient: 'from-blue-600 to-purple-600',
      bgImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'booking-engine',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Booking Engine',
      subtitle: 'Direct Reservations',
      description: 'Integrated booking system with real-time availability',
      price: '₹36,000',
      features: ['Commission-Free', 'Real-time Sync', 'Secure Payments'],
      gradient: 'from-green-600 to-teal-600',
      bgImage: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'seo-optimization',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Optimization',
      subtitle: 'Google Rankings',
      description: 'Get found by more guests on Google search results',
      price: 'Included',
      features: ['Local SEO', 'Keyword Research', 'Google My Business'],
      gradient: 'from-orange-600 to-red-600',
      bgImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'web-redesign',
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Web Redesign',
      subtitle: 'Modernize Your Site',
      description: 'Transform outdated websites into booking machines',
      price: '₹18,000',
      features: ['Modern Design', 'Mobile-First', 'Speed Optimized'],
      gradient: 'from-purple-600 to-pink-600',
      bgImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics',
      subtitle: 'Data-Driven Insights',
      description: 'Track performance and optimize your revenue',
      price: 'Included',
      features: ['Revenue Tracking', 'Guest Insights', 'Performance Reports'],
      gradient: 'from-indigo-600 to-blue-600',
      bgImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'hotel-pms',
      icon: <Settings className="w-8 h-8" />,
      title: 'Hotel PMS',
      subtitle: 'Complete Management',
      description: 'All-in-one property management system',
      price: 'Custom',
      features: ['Room Management', 'Guest Communication', 'Revenue Management'],
      gradient: 'from-teal-600 to-green-600',
      bgImage: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentService = services[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentService.bgImage}
          alt={currentService.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-80 transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none tracking-tight text-white mb-4">
            <span className="text-[#FFD700] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider block mb-2">STAYTECH</span>
            <span className="block">Hotel Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-white/90 mb-6">
            Complete digital transformation for hotels
          </p>
        </div>

        {/* Service Card Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Service Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {currentService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">{currentService.title}</h2>
                    <p className="text-xl text-white/80">{currentService.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-white/90 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-3xl font-bold text-[#FFD700]">
                    {currentService.price}
                  </div>
                  <button className="group inline-flex items-center justify-center px-6 py-3 bg-[#FFD700] text-gray-900 font-semibold rounded-xl hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-[#FFD700] mb-2">200+</div>
                    <div className="text-white/80 text-sm">Hotels Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-[#FFD700] mb-2">5.0</div>
                    <div className="text-white/80 text-sm flex items-center justify-center">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      Rating
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-[#FFD700] mb-2">7</div>
                    <div className="text-white/80 text-sm">Days Delivery</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-[#FFD700] mb-2">15+</div>
                    <div className="text-white/80 text-sm">Countries</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Why Choose StayTech?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-white/90 text-sm">Pay only when satisfied</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-white/90 text-sm">Dedicated project manager</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-white/90 text-sm">Booking conversion experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#FFD700] scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#templates"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-gray-900 font-semibold rounded-xl hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Designs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute bottom-4 left-4 text-white/60 text-xs">
        {isAutoPlaying ? 'Auto-playing' : 'Manual control'}
      </div>
    </section>
  );
};

export default Hero;