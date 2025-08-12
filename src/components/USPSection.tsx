import React from 'react';
import { Shield, Settings, Eye, TrendingUp, CheckCircle, Star, Sparkles } from 'lucide-react';

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pay Only When 100% Satisfied",
      subtitle: "Your Risk-Free Guarantee",
      description: "We believe in the quality of our work so much that we require no advance payment. You only pay once your website is fully built, tested, and you are 100% satisfied with the result. This commitment extends to unlimited revisions during the design phase, ensuring the final product perfectly aligns with your vision and business goals. This policy is a testament to our confidence in delivering exceptional results and building trust from day one.",
      color: "from-[#0A2463] to-[#5FBDB0]",
      bgPattern: "bg-gradient-to-br from-blue-50/50 to-teal-50/50",
      iconBg: "from-blue-600 to-teal-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Flexible Solutions & Payment Options",
      subtitle: "Tailored to Your Needs",
      description: "We understand that every hotel has unique requirements and budget considerations. That's why we offer complete flexibility in both our solutions and payment structures. Choose from static websites, dynamic sites with CMS, integrated booking engines, or complete PMS solutions. Payment-wise, select what works best for you: one-time payments for full ownership, annual plans for ongoing support, or monthly subscriptions with no long-term commitments. This flexibility ensures you get exactly what you need, when you need it, in a way that fits your business model.",
      color: "from-[#5FBDB0] to-[#FFD700]",
      bgPattern: "bg-gradient-to-br from-teal-50/50 to-yellow-50/50",
      iconBg: "from-teal-500 to-yellow-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Dedicated Project Manager: Your Single Point of Contact",
      subtitle: "Personalized Experience",
      description: "Every project at StayTech is assigned a dedicated project manager. This ensures a seamless and personalized experience from the initial consultation to successful launch and beyond. Your project manager acts as your single point of contact, understanding your unique needs, coordinating our expert teams, and keeping you informed every step of the way. This personalized attention guarantees smooth execution and timely delivery.",
      color: "from-[#FFD700] to-[#0A2463]",
      bgPattern: "bg-gradient-to-br from-yellow-50/50 to-blue-50/50",
      iconBg: "from-yellow-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Booking Conversion Experts",
      subtitle: "Driving Your Direct Revenue",
      description: "We are not generalist web developers; we are hotel booking conversion specialists. Our team possesses a deep understanding of the hospitality industry and what truly drives direct bookings online. We leverage this specialized expertise to design and develop websites that are not just visually appealing but are strategically optimized for high conversion rates, helping you maximize your revenue and reduce reliance on costly OTAs. Our track record includes hundreds of successful hotel websites and a reputation as a top 50 digital marketing agency for hotels worldwide.",
      color: "from-[#0A2463] to-[#5FBDB0]",
      bgPattern: "bg-gradient-to-br from-blue-50/50 to-teal-50/50",
      iconBg: "from-blue-600 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5FBDB0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span className="font-semibold">Why We're Truly Different</span>
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2463] font-poppins mb-6 leading-tight">
            Your Hotel's Success,
            <span className="block bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At StayTech, we're not just another IT company building websites. We are a specialized hotel software 
              development agency, founded by IIT graduates, with a singular mission: to empower hotels like yours to 
              break free from OTA dependence and significantly increase direct, commission-free bookings.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our unique approach is built on trust, expertise, and a commitment to your measurable success.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-[#FFD700] fill-current" />
              <span className="font-semibold text-gray-700">Here's what sets us apart:</span>
            </div>
          </div>
        </div>

        {/* Enhanced USP Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden ${usp.bgPattern}`}
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${usp.color} opacity-3`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#5FBDB0]/10 to-transparent rounded-full blur-xl"></div>
              </div>
              
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 rounded-full flex items-center justify-center text-[#0A2463] font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${usp.iconBg} rounded-2xl text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                {usp.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-3 font-poppins group-hover:text-[#5FBDB0] transition-colors duration-300">
                  {usp.title}
                </h3>
                <h4 className="text-lg font-semibold text-[#5FBDB0] mb-6 group-hover:text-[#FFD700] transition-colors duration-300">
                  {usp.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {usp.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/0 to-[#5FBDB0]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#5FBDB0]/5 transition-all duration-500 pointer-events-none"></div>
              
              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${usp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Banner */}
        <div className="relative">
          {/* Background with Pattern */}
          <div className="bg-gradient-to-r from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#5FBDB0]/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white font-poppins">
                  Hundreds of Successful Hotel Websites
                </h3>
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Delivered with consistent quality and punctuality. Our reputation for excellence 
                speaks for itself in the hospitality industry.
              </p>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: <CheckCircle className="w-6 h-6" />, number: '200+', label: 'Hotels Delivered' },
                  { icon: <Star className="w-6 h-6" />, number: '5.0', label: 'Average Rating' },
                  { icon: <TrendingUp className="w-6 h-6" />, number: '7', label: 'Days Delivery' },
                  { icon: <Shield className="w-6 h-6" />, number: '100%', label: 'Satisfaction Rate' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-center text-[#FFD700] mb-2">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-blue-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;