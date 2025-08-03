import React, { useState, useEffect } from 'react';
import { Globe, Calendar, TrendingUp, Smartphone, BarChart3, Settings } from 'lucide-react';
import WebDesignService from '../pages/WebDesignService';
import BookingEngineService from '../pages/BookingEngineService';
import SEOService from '../pages/SEOService';
import WebRedesignService from '../pages/WebRedesignService';
import HotelPMSService from '../pages/HotelPMSService';
import AnalyticsService from '../pages/AnalyticsService';

const ServicesOverview: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const handleServiceNavigation = (event: CustomEvent) => {
      const serviceId = event.detail.serviceId;
      // Map service names to IDs
      const serviceMap: { [key: string]: string } = {
        'web-design': 'web-design',
        'booking-engine': 'booking-engine',
        'seo-optimization': 'seo-optimization',
        'web-redesign': 'web-redesign',
        'hotel-pms': 'hotel-pms',
        'analytics': 'analytics'
      };
      
      if (serviceMap[serviceId]) {
        setActiveService(serviceMap[serviceId]);
      }
    };

    window.addEventListener('navigateToService', handleServiceNavigation as EventListener);
    return () => {
      window.removeEventListener('navigateToService', handleServiceNavigation as EventListener);
    };
  }, []);

  const services = [
    {
      id: 'web-design',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Mobile-optimized, custom UI/UX designed specifically for hotel conversions.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized'],
      color: 'from-[#0A2463] to-[#5FBDB0]'
    },
    {
      id: 'booking-engine',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Booking Engine',
      description: 'Seamless integration with real-time availability and secure payment processing.',
      features: ['Real-time Sync', 'Multiple Payment Methods', 'Commission-free'],
      color: 'from-[#5FBDB0] to-[#FFD700]'
    },
    {
      id: 'seo-optimization',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Google rankings improvement with targeted keyword strategy and local SEO.',
      features: ['Keyword Research', 'Local SEO', 'Google My Business'],
      color: 'from-[#FFD700] to-[#0A2463]'
    },
    {
      id: 'web-redesign',
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Web Redesign',
      description: 'Modernize your existing website with latest design trends and technology.',
      features: ['Modern Design', 'Speed Optimization', 'Mobile-first'],
      color: 'from-[#0A2463] to-[#5FBDB0]'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics',
      description: 'Intelligent guest behavior tracking and performance insights.',
      features: ['Conversion Tracking', 'Guest Insights', 'Revenue Reports'],
      color: 'from-[#5FBDB0] to-[#FFD700]'
    },
    {
      id: 'hotel-pms',
      icon: <Settings className="w-8 h-8" />,
      title: 'Hotel PMS',
      description: 'All-in-one property management system with integrated dashboard.',
      features: ['Room Management', 'Guest Communication', 'Revenue Management'],
      color: 'from-[#FFD700] to-[#0A2463]'
    }
  ];

  const renderServicePage = () => {
    switch (activeService) {
      case 'web-design':
        return <WebDesignService onBack={() => setActiveService(null)} />;
      case 'booking-engine':
        return <BookingEngineService onBack={() => setActiveService(null)} />;
      case 'seo-optimization':
        return <SEOService onBack={() => setActiveService(null)} />;
      case 'web-redesign':
        return <WebRedesignService onBack={() => setActiveService(null)} />;
      case 'hotel-pms':
        return <HotelPMSService onBack={() => setActiveService(null)} />;
      case 'analytics':
        return <AnalyticsService onBack={() => setActiveService(null)} />;
      default:
        return null;
    }
  };

  if (activeService) {
    return (
      <div className="min-h-screen">
        {renderServicePage()}
      </div>
    );
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Complete Digital Solutions for Hotels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to establish a strong online presence and maximize your bookings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-bold text-[#0A2463] mb-4 font-poppins cursor-pointer hover:text-[#5FBDB0] transition-colors"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <button 
                onClick={() => setActiveService(service.id)}
                className="text-[#0A2463] font-medium hover:text-[#5FBDB0] transition-colors group-hover:underline cursor-pointer bg-transparent border-none p-0 relative z-10 hover:scale-105 transform transition-transform duration-200"
              >
                Learn More →
              </button>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] font-poppins mb-4">
              How We Work
            </h3>
            <p className="text-lg text-gray-600">
              A collaborative approach that ensures your complete satisfaction before payment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Design Concepts',
                description: 'We engage in detailed discussions to understand your hotel and present 5-10 thoughtfully selected design concepts to kickstart your project.'
              },
              {
                step: '02',
                title: 'Feedback & Refinement',
                description: 'We share the initial design for your feedback and make unlimited revisions until you are completely satisfied with the result.'
              },
              {
                step: '03',
                title: 'Test & Pay Only When Satisfied',
                description: 'You only pay when the website is ready, thoroughly tested, and you are fully satisfied. If not completely happy, no obligation to pay.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] text-white font-bold text-xl rounded-full mb-6">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-[#0A2463] mb-4 font-poppins">
                  {process.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;