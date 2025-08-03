import React from 'react';
import { Shield, Eye, Smartphone, TrendingUp } from 'lucide-react';

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pay Only When Satisfied",
      description: "No advance payment required. Pay only when you've tested and approved your website.",
      color: "from-[#0A2463] to-[#5FBDB0]"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Building Long-Term Relationships",
      description: "No long-term contracts; services ongoing you can cancel anytime if not satisfied.",
      color: "from-[#5FBDB0] to-[#FFD700]"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Dedicated Project Manager",
      description: "Every project gets a dedicated manager from start to successful launch.",
      color: "from-[#FFD700] to-[#0A2463]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Booking Conversion Experts",
      description: "Deep understanding of what drives direct hotel bookings online.",
      color: "from-[#0A2463] to-[#5FBDB0]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Why We're Different from Other Agencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not a typical IT company—we're hotel booking conversion specialists with proven expertise.
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
        <div className="mt-16 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Shield className="w-8 h-8 text-[#FFD700]" />
            <h3 className="text-2xl font-bold font-poppins">Hundreds of Successful Hotel Websites</h3>
            <Shield className="w-8 h-8 text-[#FFD700]" />
          </div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Delivered with consistent quality and punctuality. Our reputation for excellence 
            speaks for itself in the hospitality industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default USPSection;