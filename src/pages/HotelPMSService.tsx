import React, { useEffect } from 'react';
import { ArrowLeft, BarChart3, Users, Calendar, CreditCard, Bell, Settings, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

interface HotelPMSServiceProps {
  onBack: () => void;
  onServiceSelect: (serviceId: string | null) => void;
}

const HotelPMSService: React.FC<HotelPMSServiceProps> = ({ onBack, onServiceSelect }) => {
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
      icon: <Calendar className="w-6 h-6" />,
      title: 'Room Management',
      description: 'Real-time room inventory, availability, and housekeeping status tracking.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Guest Management',
      description: 'Complete guest profiles, preferences, and communication history.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Revenue Management',
      description: 'Dynamic pricing, rate management, and revenue optimization tools.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reports',
      description: 'Comprehensive reporting on occupancy, revenue, and performance metrics.'
    }
  ];

  const modules = [
    'Front Desk Operations',
    'Housekeeping Management',
    'Guest Communication',
    'Revenue Management',
    'Channel Manager Integration',
    'Payment Processing',
    'Reporting & Analytics',
    'Staff Management',
    'Maintenance Tracking',
    'Guest Feedback System'
  ];

  const benefits = [
    'Streamline daily operations',
    'Increase operational efficiency by 40%',
    'Reduce manual errors and paperwork',
    'Improve guest satisfaction scores',
    'Optimize revenue and pricing',
    'Better staff coordination',
    'Real-time business insights',
    'Automated guest communications'
  ];

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      <Header onServiceSelect={onServiceSelect} />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] text-white py-8 mt-20">
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
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins">Hotel PMS Service</h1>
              <p className="text-xl text-blue-100">Complete property management system for hotels</p>
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
              Streamline Your Hotel Operations
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Managing a hotel involves countless moving parts - from room assignments and 
              housekeeping to guest communications and revenue optimization. Our comprehensive 
              Hotel Property Management System (PMS) brings everything together in one 
              intuitive platform.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Designed specifically for hotels of all sizes, our PMS integrates seamlessly 
              with your website and booking engine, providing a complete solution for 
              modern hotel management.
            </p>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-purple-800 mb-3">PMS Features Include:</h3>
              <div className="space-y-2">
                {[
                  'Complete property management dashboard',
                  'Real-time room and inventory management',
                  'Guest communication and CRM',
                  'Revenue management and reporting',
                  'Staff management and task assignment',
                  'Integration with booking engine'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hotel Management Dashboard"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Core PMS Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#0A2463] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 font-poppins">
              Complete Management Modules
            </h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">{module}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 font-poppins">
              Benefits You'll Experience
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-[#5FBDB0]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Intelligent Dashboard Overview
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <Calendar className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
                <h3 className="font-bold text-[#0A2463] mb-2">Room Status</h3>
                <p className="text-gray-600 text-sm">Real-time room availability and housekeeping status</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <BarChart3 className="w-8 h-8 text-[#5FBDB0] mx-auto mb-4" />
                <h3 className="font-bold text-[#0A2463] mb-2">Revenue Analytics</h3>
                <p className="text-gray-600 text-sm">Daily, weekly, and monthly performance insights</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <Bell className="w-8 h-8 text-[#0A2463] mx-auto mb-4" />
                <h3 className="font-bold text-[#0A2463] mb-2">Smart Alerts</h3>
                <p className="text-gray-600 text-sm">Automated notifications for important events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white mb-20">
          <div className="text-center mb-8">
            <Settings className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
            <h2 className="text-3xl font-bold mb-4 font-poppins">Seamless Integration</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our PMS integrates perfectly with your website, booking engine, and existing systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-bold mb-2">Website Integration</h3>
              <p className="text-blue-100 text-sm">Direct connection with your hotel website and booking system</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Channel Manager</h3>
              <p className="text-blue-100 text-sm">Sync with OTAs and distribution channels automatically</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Payment Systems</h3>
              <p className="text-blue-100 text-sm">Integrated payment processing and financial reporting</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Streamline Operations?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Get a complete property management system tailored to your hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Custom</div>
              <div className="text-blue-100">Pricing based on requirements</div>
              <div className="text-sm text-blue-200">Complete solution package</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-white text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Custom Quote
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPMSService;