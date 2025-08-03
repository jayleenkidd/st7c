import React from 'react';
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Luxury Hotel Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/80 via-[#0A2463]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <Zap className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-medium">Innovative Software and Web Design for Exceptional Hotels</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none tracking-tight">
                <span className="text-[#FFD700] text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider block mb-2">STAYTECH</span>
                <span className="block text-white">Revolutionizing</span>
                <span className="block text-[#5FBDB0] bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] bg-clip-text text-transparent">Hospitality Technology</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-blue-100">
                No Advance Payment Needed - Try First, Pay Later!
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              StayTech is different. We're not just another IT company building websites—we are a dedicated hotel software development agency, founded by IIT graduates with a clear mission: to help hotels break free from OTA dependence and drive direct, commission-free bookings.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-[#0A2463] font-semibold rounded-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href="#templates" className="flex items-center">
                  Explore Our Designs
                </a>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                  ))}
                </div>
                <span className="text-sm text-blue-100 ml-2">5.0 (50+ Reviews)</span>
              </div>
              <div className="border-l border-white/20 pl-6">
                <span className="text-sm text-blue-100">Trusted by 200+ Hotels</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "No Dissatisfied Client",
                description: "Pay only after you've tried and tested your site"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "100+ Unique Designs",
                description: "Modern and attractive themes to choose from"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Complete Solution",
                description: "PMS, Booking Engine, SEO - We do it all"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/15"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center text-[#FFD700]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-[#FFD700]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#5FBDB0]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;