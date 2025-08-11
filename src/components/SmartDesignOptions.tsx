import React from 'react';
import { Palette, Zap, Crown, ArrowRight } from 'lucide-react';

const SmartDesignOptions: React.FC = () => {
  const designOptions = [
    {
      id: 'essence',
      icon: <Palette className="w-8 h-8" />,
      title: 'Essence',
      subtitle: 'Stylish Template-Based Websites',
      description: 'Start with a professionally designed layout that\'s built to drive bookings. Choose the one that fits your style, then work with our team to personalize it—adjusting colors, fonts, images, content, pages, and features. It\'s a fast, affordable way to get a beautiful website that works hard for your business.',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      id: 'elevate',
      icon: <Zap className="w-8 h-8" />,
      title: 'Elevate',
      subtitle: 'Enhanced Hybrid Designs',
      description: 'Love a template but want to add your own twist? Elevate gives you the best of both worlds. Start with one of our Essence designs and customize it with extra pages, interactive features, content animation, and more time with our creative team. The result is a unique site that stands out and performs even better.',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      id: 'signature',
      icon: <Crown className="w-8 h-8" />,
      title: 'Signature',
      subtitle: 'Fully Custom Website Designs',
      description: 'Looking for a website that\'s uniquely tailored to your brand from the ground up? With Signature, our design team creates a one-of-a-kind site just for you—built entirely around your vision, goals, and guest experience. From layout to functionality, every element is thoughtfully crafted to deliver a seamless and memorable journey that inspires more direct bookings.',
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5FBDB0]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
            Smart Website Design Options
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              At StayTech, we know how to make your hotel's first impression count. With exclusive experience 
              in hospitality website design, we help you attract more guests and boost direct bookings through 
              websites that truly reflect your brand.
            </p>
            <p className="text-lg text-blue-200">
              Choose from three flexible options, based on what works best for your property and budget:
            </p>
          </div>
        </div>

        {/* Design Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {designOptions.map((option, index) => (
            <div
              key={option.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {option.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                {option.title}
              </h3>
              <h4 className="text-lg font-medium text-[#FFD700] mb-4">
                {option.subtitle}
              </h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                {option.description}
              </p>

              {/* Learn More Link */}
              <button className="group/btn inline-flex items-center space-x-2 text-[#FFD700] font-medium hover:text-white transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Decorative Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Ready to Make Your Website Shine?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              No matter which option you choose, StayTech is here to make your website shine—and 
              help you stay ahead in the competitive hospitality market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#templates" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 shadow-lg text-center">
                Explore Design Options
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDesignOptions;