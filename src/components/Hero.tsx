import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Calendar, TrendingUp, Smartphone, BarChart3, Settings, Star, Shield, Zap, CheckCircle, Eye, CreditCard, RefreshCw, Users } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Stunning Mobile-First Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 top-0"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4992249/4992249-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/70 via-[#1e3a8a]/50 to-[#5FBDB0]/30 z-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5FBDB0]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight animate-fadeIn">
            <span className="block">Hotel Websites</span>
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              That Convert
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200 text-center">
            Professional hotel websites with integrated booking engines. 
            <span className="block mt-2 text-[#FFD700] font-semibold">Pay only when you're 100% satisfied!</span>
          </p>

          {/* Key Benefits - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto animate-fadeIn delay-300 justify-center">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
              <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
              <span className="text-white text-sm font-medium">7-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
              <Zap className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
              <span className="text-white text-sm font-medium">Mobile-First Design</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
              <Star className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
              <span className="text-white text-sm font-medium">5.0 Rating</span>
            </div>
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn delay-400 text-center">
            <a
              href="#templates"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-[#0A2463] font-bold rounded-xl hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View Hotel Designs</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <span>Free Consultation</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm animate-fadeIn delay-500 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>200+ Hotels Served</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>15+ Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>IIT Graduate Team</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-none tracking-tight text-[#0A2463] mb-6">
            <span className="text-[#FFD700] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider block mb-3">STAYTECH</span>
            <span className="block">Hospitality Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Complete digital transformation for hotels
          </p>
        </div>
      </div>

      {/* Service Carousel Section */}
      <div className="relative bg-gray-900/95 backdrop-blur-sm flex items-center justify-center overflow-hidden py-12 z-30">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Card Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-white space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {currentService.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-poppins">{currentService.title}</h2>
                      <p className="text-lg text-white/80">{currentService.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
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
                    <button className="group inline-flex items-center justify-center px-6 py-3 bg-[#FFD700] text-gray-900 font-semibold rounded-xl hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Content - Stats */}
                <div className="space-y-6">
                  {/* Service-specific content */}
                  {currentService.id === 'web-design' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">3s</div>
                          <div className="text-white/80 text-xs md:text-sm">Load Time</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">100%</div>
                          <div className="text-white/80 text-xs md:text-sm">Mobile Ready</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">40%</div>
                          <div className="text-white/80 text-xs md:text-sm">More Bookings</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">SEO</div>
                          <div className="text-white/80 text-xs md:text-sm">Optimized</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">Design Features</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Smartphone className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Mobile-first approach</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Conversion-focused UI</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Lightning fast loading</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'booking-engine' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">0%</div>
                          <div className="text-white/80 text-xs md:text-sm">Commission</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
                          <div className="text-white/80 text-xs md:text-sm">Real-time</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">60%</div>
                          <div className="text-white/80 text-xs md:text-sm">More Direct</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">PCI</div>
                          <div className="text-white/80 text-xs md:text-sm">Secure</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">Booking Benefits</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Real-time availability</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CreditCard className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Secure payments</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">No OTA commissions</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'seo-optimization' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">150%</div>
                          <div className="text-white/80 text-xs md:text-sm">Traffic Boost</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">Top 3</div>
                          <div className="text-white/80 text-xs md:text-sm">Rankings</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">300%</div>
                          <div className="text-white/80 text-xs md:text-sm">Local Visibility</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">GMB</div>
                          <div className="text-white/80 text-xs md:text-sm">Optimized</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">SEO Strategy</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Keyword optimization</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Local SEO focus</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Performance tracking</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'web-redesign' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">2024</div>
                          <div className="text-white/80 text-xs md:text-sm">Modern Design</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">3x</div>
                          <div className="text-white/80 text-xs md:text-sm">Faster Speed</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">50%</div>
                          <div className="text-white/80 text-xs md:text-sm">Better UX</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">A+</div>
                          <div className="text-white/80 text-xs md:text-sm">Performance</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">Redesign Focus</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RefreshCw className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Complete modernization</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Smartphone className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Mobile-first redesign</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Speed optimization</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'analytics' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">25%</div>
                          <div className="text-white/80 text-xs md:text-sm">Revenue Up</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">Real</div>
                          <div className="text-white/80 text-xs md:text-sm">Time Data</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">40%</div>
                          <div className="text-white/80 text-xs md:text-sm">Better ROI</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
                          <div className="text-white/80 text-xs md:text-sm">Monitoring</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">Analytics Power</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Revenue tracking</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Guest behavior insights</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Conversion optimization</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'hotel-pms' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">All-in</div>
                          <div className="text-white/80 text-xs md:text-sm">One System</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">40%</div>
                          <div className="text-white/80 text-xs md:text-sm">Efficiency</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">Cloud</div>
                          <div className="text-white/80 text-xs md:text-sm">Based</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20">
                          <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
                          <div className="text-white/80 text-xs md:text-sm">Support</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-3">PMS Features</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Settings className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Complete management</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Guest communication</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-white/90 text-sm">Room management</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
        </div>

        {/* Auto-play indicator */}
        <div className="absolute bottom-4 left-4 text-white/60 text-xs">
          {isAutoPlaying ? 'Auto-playing' : 'Manual control'}
        </div>
      </div>

    </section>
  );
};

export default Hero;