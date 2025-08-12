import React from 'react';
import { Shield, Eye, Smartphone, TrendingUp } from 'lucide-react';

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pay Only When Satisfied",
      description: "We build your complete website first, then you pay only after testing and approving everything. This isn't just a promise—it's how we've operated for 200+ successful projects.",
      color: "from-[#0A2463] to-[#5FBDB0]"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Hotel Industry Specialists",
      description: "Unlike generic web agencies, we exclusively serve hotels and understand your unique challenges—from OTA dependency to seasonal booking patterns and guest behavior optimization.",
      color: "from-[#5FBDB0] to-[#FFD700]"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Dedicated Project Manager",
      description: "Your dedicated project manager stays with you from concept to launch and beyond. No handoffs, no confusion—just one expert who knows your property inside and out.",
      color: "from-[#FFD700] to-[#0A2463]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Booking Conversion Results",
      description: "Our websites average 47% higher direct bookings than industry standard. We don't just build websites—we engineer booking machines with psychology-driven design.",
      color: "from-[#0A2463] to-[#5FBDB0]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Why Hotels Choose StayTech Over Other Agencies
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto mb-6">
            Most web agencies treat hotels like any other business. We don't. StayTech was founded specifically for the hospitality industry by IIT graduates who understand that your success depends on direct bookings, not just pretty websites.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            While others build generic websites, we engineer booking conversion systems. While others demand upfront payments, we prove our value first. While others hand you off between teams, we assign dedicated managers who become extensions of your hotel.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 max-w-4xl mx-auto border border-blue-100">
            <p className="text-lg font-semibold text-[#0A2463] mb-2">
              🏆 Recognized among the world's top 50 digital marketing agencies for hotels
            </p>
            <p className="text-gray-600">
              Our reputation isn't built on promises—it's built on 200+ successful hotel websites and measurable results that speak for themselves.
            </p>
          </div>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${usp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${usp.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {usp.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0A2463] mb-4 font-poppins">
                {usp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {usp.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Shield className="w-8 h-8 text-[#FFD700]" />
                <h3 className="text-2xl md:text-3xl font-bold font-poppins">The StayTech Difference</h3>
                <Shield className="w-8 h-8 text-[#FFD700]" />
              </div>
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We don't just build websites—we build your competitive advantage in the digital hospitality landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">200+</div>
                <div className="text-white font-semibold mb-1">Hotels Served</div>
                <div className="text-blue-200 text-sm">Across 15+ countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">47%</div>
                <div className="text-white font-semibold mb-1">Avg. Booking Increase</div>
                <div className="text-blue-200 text-sm">Within 6 months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">7</div>
                <div className="text-white font-semibold mb-1">Days Delivery</div>
                <div className="text-blue-200 text-sm">Average project time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">0%</div>
                <div className="text-white font-semibold mb-1">Upfront Payment</div>
                <div className="text-blue-200 text-sm">Pay only when satisfied</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                <strong>Every project delivered with consistent quality and punctuality.</strong> Our reputation for excellence isn't just marketing—it's the foundation of our business model.
              </p>
              <a href="#contact" className="inline-flex items-center bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 shadow-lg">
                Experience the StayTech Difference
                <TrendingUp className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;