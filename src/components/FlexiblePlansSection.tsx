import React from 'react';
import { Crown, Shield, Zap, Check, Code, Wrench, CreditCard } from 'lucide-react';

const FlexiblePlansSection: React.FC = () => {
  const plans = [
    {
      id: 'direct-control',
      icon: <Code className="w-8 h-8" />,
      title: 'Complete Ownership',
      subtitle: '"Direct Control Plan"',
      tagline: 'One-time payment. Full control.',
      description: 'We design and develop your custom hotel website, then hand over the code to you. You manage hosting, updates, and maintenance independently. Ideal for hotels with their own in-house team or those seeking total autonomy.',
      includes: [
        'Custom design & development',
        'One-time fee',
        'Full code ownership',
        'No ongoing payments'
      ],
      gradient: 'from-[#0A2463] to-[#5FBDB0]',
      bgGradient: 'from-blue-50 to-teal-50'
    },
    {
      id: 'harmony',
      icon: <Wrench className="w-8 h-8" />,
      title: 'Ongoing Support',
      subtitle: '"Harmony Plan"',
      tagline: 'You manage your business, we manage your website.',
      description: 'You pay an initial design and setup fee, followed by an annual plan covering hosting, domain, maintenance, and unlimited content updates. Perfect for hoteliers who want a modern site without the technical headaches.',
      includes: [
        'Custom design & development',
        'Initial setup fee',
        'Annual maintenance & hosting',
        'Unlimited content updates'
      ],
      gradient: 'from-[#5FBDB0] to-[#FFD700]',
      bgGradient: 'from-teal-50 to-yellow-50'
    },
    {
      id: 'zero-hassle',
      icon: <CreditCard className="w-8 h-8" />,
      title: 'All-Inclusive',
      subtitle: '"Zero Hassle Plan"',
      tagline: 'No upfront cost. Just one flat monthly fee.',
      description: 'This subscription plan covers everything—design, hosting, maintenance, updates—without any upfront fees. A great option for hotels wanting a professional site with zero hassle or large initial costs.',
      includes: [
        'No upfront website cost',
        'Custom design & development',
        'Hosting, domain & unlimited updates',
        'Cancel anytime'
      ],
      gradient: 'from-[#FFD700] to-[#0A2463]',
      bgGradient: 'from-yellow-50 to-blue-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-6">
            Flexible Web Design Plans Tailored for Hotels
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Our approach is shaped by experience: every hotel is unique, and so are its digital needs. 
              Some clients want full control over their website, while others prefer a hands-off experience 
              where we handle everything for them. That's why we offer flexible plans based on your level 
              of involvement, technical comfort, and business goals.
            </p>
            <p>
              We don't believe in forcing you into a one-size-fits-all package. Instead, we adapt our 
              services around what works best for you. Whether you want to own your site outright, have 
              ongoing support with regular updates, or prefer a simple monthly subscription with everything 
              included—we've got you covered.
            </p>
            <p>
              Many of our clients like to manage their own content updates; others don't have the time or 
              interest. Either way, we're here to support you. Be as involved as you want—or leave it all 
              to us. Just let us know what you need, and we'll take care of the rest.
            </p>
            <p className="font-medium text-[#0A2463]">
              To make things easy, we offer three clear ways to get your hotel online. Each plan is designed 
              to suit different levels of control, commitment, and budget—so you can choose the one that fits you best.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                {plan.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#0A2463] mb-2 font-poppins">
                  {plan.title}
                </h3>
                <h4 className="text-lg font-medium text-[#5FBDB0] mb-3">
                  {plan.subtitle}
                </h4>
                <p className="text-sm font-semibold text-[#FFD700] mb-4 italic">
                  {plan.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Includes */}
                <div className="space-y-3 mb-6">
                  <h5 className="font-semibold text-[#0A2463] text-sm">Includes:</h5>
                  {plan.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-[#5FBDB0] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Not Sure Which Plan is Right for You?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your hotel's specific needs and help you choose the perfect approach. 
              We're here to make your decision easy and your website successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 text-center">
                Schedule Free Consultation
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Compare All Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexiblePlansSection;