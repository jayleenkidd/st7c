import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Smartphone, Zap, Eye, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

interface WebDesignServiceProps {
  onBack: () => void;
  onServiceSelect: (serviceId: string | null) => void;
}

const WebDesignService: React.FC<WebDesignServiceProps> = ({ onBack, onServiceSelect }) => {
  // Ensure scroll to top when component mounts
  useEffect(() => {
    // Force scroll to top with multiple methods and timing
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.pageYOffset = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Multiple delayed attempts
    const timeouts = [0, 1, 10, 50, 100, 200].map(delay =>
      setTimeout(scrollToTop, delay)
    );

    // Cleanup timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Design',
      description: 'Over 70% of hotel bookings happen on mobile. Our designs are optimized for mobile-first experience.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Loading',
      description: 'Optimized for speed with under 3-second load times to reduce bounce rates and improve conversions.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Conversion-Focused UI/UX',
      description: 'Every element is designed to guide visitors toward making a booking, not just looking pretty.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'SEO Optimized Structure',
      description: 'Built with clean code and SEO best practices to help your hotel rank higher on Google.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Concept Presentation',
      description: 'We present 5-10 carefully selected design concepts based on your hotel type, location, and target audience.'
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Once you select a concept, we develop the full design with unlimited revisions until you\'re satisfied.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your website with clean code, test across all devices, and ensure perfect functionality.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your website and provide ongoing support with hosting, maintenance, and updates.'
    }
  ];

  const benefits = [
    'Increase direct bookings by up to 40%',
    'Reduce dependency on OTA commissions',
    'Improve guest experience and satisfaction',
    'Better Google rankings and visibility',
    'Professional brand image and credibility',
    'Mobile-optimized for modern travelers'
  ];

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      <Header onServiceSelect={onServiceSelect} />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-all duration-200 hover:translate-x-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins">Web Design Service</h1>
              <p className="text-xl text-blue-100">Custom hotel websites that convert visitors into guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6 font-poppins">
              Why Hotel Website Design Matters
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Your hotel website is often the first impression potential guests have of your property. 
              At StayTech, we don't just create beautiful websites—we create booking machines that 
              turn visitors into confirmed reservations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As specialists in hotel website design, we understand the unique challenges of the 
              hospitality industry. Our designs are crafted specifically to showcase your property's 
              unique features while making the booking process seamless and intuitive.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">What's Included:</h3>
              <div className="space-y-2">
                {[
                  'Custom responsive website design',
                  '1-year hosting and maintenance',
                  'Unlimited updates in first year',
                  'SSL certificate and security',
                  'SEO optimization',
                  'Mobile-first approach'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Web Design Process"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Key Features of Our Hotel Websites
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Benefits You'll Experience
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Transform your hotel's online presence with a professional website
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">₹18,000</div>
              <div className="text-blue-100">One-time payment</div>
              <div className="text-sm text-blue-200">Or ₹999/month</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#FFD700] text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors">
                Start Your Project
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                View Templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;