import React from 'react';
import { Check, Star, Shield } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Website Design',
      price: '₹18,000',
      period: 'one-time',
      description: 'Bespoke hotel website design & development',
      features: [
        'Custom Hotel Website Design',
        '1-Year Hosting & Maintenance',
        'Unlimited Updates (Year 1)',
        'Mobile Responsive Design',
        'SEO Optimization',
        'SSL Certificate Included',
        'Year 2+: ₹3,600 annual maintenance',
        'Alternative: ₹999/month subscription'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Website + Booking',
      price: '₹36,000',
      period: 'one-time',
      description: 'Bespoke website design + integrated booking engine',
      features: [
        'Everything in Website Design',
        'Integrated Booking Engine',
        'Real-time Availability System',
        'Secure Payment Processing',
        'Commission-free Bookings',
        'Guest Management System',
        'Year 2+: ₹4,800 annual maintenance',
        'Alternative: ₹1,599/month subscription',
        'No Lock-in Period'
      ],
      popular: true,
      color: 'from-[#0A2463] to-[#5FBDB0]'
    },
    {
      name: 'Complete Solution',
      price: 'Custom',
      period: 'pricing',
      description: 'Custom website, PMS & intelligent analytics',
      features: [
        'Everything in Website + Booking',
        'Complete Property Management System',
        'Intelligent Analytics Dashboard',
        'Revenue Management Tools',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Advanced Reporting',
        'Multi-property Support',
        'Pricing Tailored to Requirements',
        'Enterprise-level Support'
      ],
      popular: false,
      color: 'from-[#FFD700] to-[#0A2463]'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No hidden costs, no monthly fees. Pay once, own forever.
          </p>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <Shield className="w-5 h-5" />
            <span className="font-medium">100% Money Back Guarantee</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular ? 'border-[#FFD700] ring-2 ring-[#FFD700]/20' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFD700] text-[#0A2463] px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-2 font-poppins">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#0A2463]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Surprises Guarantee */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <Shield className="w-12 h-12 mx-auto mb-6 text-[#FFD700]" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            Flexible Payment & No Contracts
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold mb-2">No Advance Payment</h4>
              <p className="text-blue-100 text-sm">
                Pay only when your website is ready and you're completely satisfied.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">No Long-term Contracts</h4>
              <p className="text-blue-100 text-sm">
                All monthly offerings with no hidden commitments. Cancel anytime.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Unlimited Revisions</h4>
              <p className="text-blue-100 text-sm">
                We make as many adjustments as needed until you're satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
            Choose a Partner You Can Count On
          </h3>
          <p className="text-gray-600 mb-6">
            Our clients stay with us because of quality, transparency, and results—not contractual obligations.
          </p>
          <button className="bg-[#FFD700] text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;