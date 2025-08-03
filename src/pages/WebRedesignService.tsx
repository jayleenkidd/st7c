import React, { useEffect } from 'react';
import { ArrowLeft, Smartphone, Zap, RefreshCw, TrendingUp, Eye, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

interface WebRedesignServiceProps {
  onBack: () => void;
  onServiceSelect: (serviceId: string | null) => void;
}

const WebRedesignService: React.FC<WebRedesignServiceProps> = ({ onBack, onServiceSelect }) => {
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

  const reasons = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Outdated Design',
      description: 'Your current website looks dated and doesn\'t reflect your hotel\'s quality.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Not Mobile-Friendly',
      description: 'Poor mobile experience is costing you bookings from mobile users.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Slow Loading Speed',
      description: 'Slow websites have high bounce rates and poor Google rankings.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Low Conversion Rate',
      description: 'Visitors aren\'t converting into bookings due to poor user experience.'
    }
  ];

  const improvements = [
    'Modern, professional design that reflects your brand',
    'Mobile-first responsive design',
    'Improved page loading speed (under 3 seconds)',
    'Better user experience and navigation',
    'SEO optimization for better Google rankings',
    'Integrated booking system',
    'Enhanced security and SSL certificates',
    'Content management system for easy updates'
  ];

  const beforeAfter = [
    { before: 'Outdated design from 2015', after: 'Modern, contemporary design' },
    { before: 'Not mobile responsive', after: '100% mobile optimized' },
    { before: '8+ second load time', after: 'Under 3 second load time' },
    { before: 'No booking integration', after: 'Seamless booking engine' },
    { before: 'Poor Google rankings', after: 'SEO optimized structure' },
    { before: 'Hard to update content', after: 'Easy content management' }
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
              <RefreshCw className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins">Web Redesign Service</h1>
              <p className="text-xl text-blue-100">Transform your outdated website into a booking machine</p>
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
              Is Your Website Costing You Bookings?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              If your hotel website was built more than 3 years ago, it's likely hurting your 
              business more than helping. Outdated designs, poor mobile experience, and slow 
              loading speeds are driving potential guests to your competitors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our web redesign service transforms your existing website into a modern, 
              high-converting booking platform that reflects your hotel's true quality 
              and drives more direct reservations.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-800 mb-3">Signs You Need a Redesign:</h3>
              <div className="space-y-2">
                {[
                  'Website built before 2020',
                  'Not mobile-friendly',
                  'Slow loading speed',
                  'Low booking conversion rate',
                  'Outdated design and content',
                  'Poor Google rankings'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span className="text-red-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Website Redesign Process"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Reasons for Redesign */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Common Website Problems We Fix
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-lg flex items-center justify-center text-white mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Before vs After Redesign
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfter.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">Before</span>
                    <RefreshCw className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">After</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{item.before}</div>
                  <div className="text-sm font-medium text-[#0A2463]">{item.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improvements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            What You'll Get with Our Redesign
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {improvements.map((improvement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-[#5FBDB0]" />
                  <span className="text-gray-700">{improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Our Redesign Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Website Audit', desc: 'Analyze current site performance and issues' },
              { step: '02', title: 'Design Concepts', desc: 'Present modern design options' },
              { step: '03', title: 'Development', desc: 'Build new site with latest technology' },
              { step: '04', title: 'Launch & Migrate', desc: 'Seamless transition with no downtime' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready for a Modern Website?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Transform your outdated website into a booking powerhouse
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">₹18,000</div>
              <div className="text-blue-100">Complete redesign</div>
              <div className="text-sm text-blue-200">Or ₹999/month</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#FFD700] text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors">
                Start Redesign
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Free Website Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebRedesignService;