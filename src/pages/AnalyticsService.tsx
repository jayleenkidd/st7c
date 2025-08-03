import React, { useEffect } from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Users, Eye, Target, PieChart, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

interface AnalyticsServiceProps {
  onBack: () => void;
  onServiceSelect: (serviceId: string | null) => void;
}

const AnalyticsService: React.FC<AnalyticsServiceProps> = ({ onBack, onServiceSelect }) => {
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
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Booking Analytics',
      description: 'Track conversion rates, booking sources, and revenue performance in real-time.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Guest Behavior Insights',
      description: 'Understand how guests interact with your website and booking process.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Optimization',
      description: 'Identify opportunities to increase revenue and improve pricing strategies.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Marketing Performance',
      description: 'Measure the effectiveness of your marketing campaigns and channels.'
    }
  ];

  const metrics = [
    'Website traffic and visitor behavior',
    'Booking conversion rates by source',
    'Revenue per available room (RevPAR)',
    'Average daily rate (ADR) trends',
    'Guest acquisition costs',
    'Channel performance comparison',
    'Seasonal booking patterns',
    'Guest satisfaction correlations'
  ];

  const reports = [
    { title: 'Daily Performance', description: 'Daily bookings, revenue, and occupancy rates' },
    { title: 'Weekly Trends', description: 'Week-over-week performance analysis' },
    { title: 'Monthly Reports', description: 'Comprehensive monthly business insights' },
    { title: 'Channel Analysis', description: 'Performance breakdown by booking channels' },
    { title: 'Guest Insights', description: 'Guest demographics and behavior patterns' },
    { title: 'Revenue Optimization', description: 'Pricing and revenue improvement recommendations' }
  ];

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      <Header onServiceSelect={onServiceSelect} />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] text-white py-8 mt-20">
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
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins text-[#0A2463]">Analytics Service</h1>
              <p className="text-xl text-[#0A2463]/80">Intelligent insights for data-driven hotel management</p>
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
              Make Data-Driven Decisions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Running a successful hotel requires more than intuition—it requires insights. 
              Our comprehensive analytics service provides you with detailed data about your 
              website performance, booking patterns, guest behavior, and revenue optimization 
              opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From understanding which marketing channels drive the most bookings to identifying 
              the optimal pricing strategies, our analytics dashboard gives you the intelligence 
              you need to maximize your hotel's profitability.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-800 mb-3">Analytics Package Includes:</h3>
              <div className="space-y-2">
                {[
                  'Comprehensive analytics dashboard',
                  'Real-time performance tracking',
                  'Custom reports and insights',
                  'Revenue optimization recommendations',
                  'Guest behavior analysis',
                  'Monthly performance reviews'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Powerful Analytics Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5FBDB0] to-[#FFD700] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Key Metrics We Track
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <PieChart className="w-5 h-5 text-[#5FBDB0]" />
                  <span className="text-gray-700">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
            Comprehensive Reporting Suite
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2463] mb-3">{report.title}</h3>
                <p className="text-gray-600">{report.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Impact */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white mb-20">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
            <h2 className="text-3xl font-bold mb-4 font-poppins">Measurable Business Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our analytics help hotels make informed decisions that directly impact their bottom line.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">25%</div>
              <h3 className="font-bold mb-2">Revenue Increase</h3>
              <p className="text-blue-100 text-sm">Average revenue improvement through data-driven decisions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">40%</div>
              <h3 className="font-bold mb-2">Better Conversion</h3>
              <p className="text-blue-100 text-sm">Improvement in booking conversion rates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">60%</div>
              <h3 className="font-bold mb-2">Time Savings</h3>
              <p className="text-blue-100 text-sm">Reduction in time spent on manual reporting</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins text-[#0A2463]">Ready for Data-Driven Success?</h2>
          <p className="text-xl text-[#0A2463]/80 mb-6">
            Start making informed decisions with comprehensive analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A2463] mb-2">Included in all packages</div>
              <div className="text-[#0A2463]/80">Basic analytics built-in</div>
              <div className="text-sm text-[#0A2463]/60">Advanced analytics available</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#0A2463] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A2463]/90 transition-colors">
                View Analytics Demo
              </button>
              <button className="bg-white/20 backdrop-blur-md text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-[#0A2463]/20">
                Get Custom Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsService;