import React from 'react';
import { Globe, Calendar, TrendingUp, Smartphone, BarChart3, Settings } from 'lucide-react';

interface ServicesOverviewProps {
  onServiceSelect: (serviceId: string) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onServiceSelect }) => {
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
                onClick={() => onServiceSelect(service.id)}
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
          {/* Enhanced Header with Gradient Background */}
          <div className="relative mb-16 overflow-hidden">
            <div className="bg-gradient-to-br from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5FBDB0]/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
                  How We Work
                </h3>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                    At StayTech, we specialize in building high-performing websites tailored specifically for hotels and resorts. 
                    Our stage-by-stage approach ensures seamless collaboration, a strong technical foundation, and beautifully 
                    branded designs that increase direct bookings. From discovery to launch—and beyond—we manage every step 
                    of the process with the hospitality industry in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Every hotel is unique—and your website should reflect that. We begin by understanding your property\'s brand, target guests, and business goals. Our strategists and designers work with you to define key requirements, analyze booking behavior, and build a roadmap that ensures your website drives direct reservations and supports your revenue goals.',
                gradient: 'from-[#0A2463] to-[#5FBDB0]'
              },
              {
                step: '02',
                title: 'Design Plan Selection',
                description: 'Next, we help you choose the right design approach—Essence, Elevate, or Signature. Based on your selected plan and project requirements, we present 8–10 thoughtfully curated design concepts for you to choose from. This sets the creative direction and kickstarts your hotel website project with clarity.',
                gradient: 'from-[#5FBDB0] to-[#FFD700]'
              },
              {
                step: '03',
                title: 'Design & User Experience',
                description: 'Our creative team brings your brand to life with stunning visuals and smart UX design. From immersive imagery and brand-aligned color palettes to mobile-first layouts and compelling calls-to-action, we ensure your hotel\'s online presence is both engaging and easy to use—designed to convert lookers into bookers.',
                gradient: 'from-[#FFD700] to-[#0A2463]'
              },
              {
                step: '04',
                title: 'Development',
                description: 'Using best-in-class technology, our developers build your hotel website for speed, performance, and reliability. We integrate your preferred booking engine, ensure mobile responsiveness, and implement essential backend features like multi-language support, accessibility, and SEO optimization—so your site not only looks great, but performs flawlessly.',
                gradient: 'from-[#0A2463] to-[#5FBDB0]'
              },
              {
                step: '05',
                title: 'Quality Assurance & Testing',
                description: 'Before launch, our QA team runs thorough testing across devices and browsers. From booking flow and forms to visual and functional performance, we ensure your hotel website works seamlessly and provides a smooth, trustworthy experience for your guests.',
                gradient: 'from-[#5FBDB0] to-[#FFD700]'
              },
              {
                step: '06',
                title: 'Launch & Deployment',
                description: 'We coordinate the launch of your hotel website with care—managing hosting, domains, redirects, and optimization. You\'ll have the opportunity to review and test the site, and suggest any final changes. Only once you\'re fully satisfied with the result will payment be required.',
                gradient: 'from-[#FFD700] to-[#0A2463]'
              },
              {
                step: '07',
                title: 'Ongoing Support & Optimization',
                description: 'If you\'ve chosen one of our ongoing service plans, we continue to support your success post-launch. From regular content updates and performance monitoring to seasonal landing pages and conversion improvements, we help keep your hotel website fresh, secure, and aligned with your evolving business goals.',
                gradient: 'from-[#0A2463] to-[#5FBDB0]'
              }
            ].map((process, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${process.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${process.gradient} text-white font-bold text-xl rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold text-[#0A2463] mb-4 font-poppins">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4 font-poppins">
                Ready to Start Your Hotel Website Project?
              </h4>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss your hotel's unique needs and create a website that drives more direct bookings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 text-center">
                  Start Your Project
                </a>
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;