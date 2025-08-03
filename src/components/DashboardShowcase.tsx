import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  MapPin, 
  Star,
  Phone,
  Mail,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Settings,
  Filter,
  Download,
  RefreshCw,
  Bell,
  Search,
  ChevronUp,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Activity,
  CreditCard,
  Globe,
  Smartphone,
  Target
} from 'lucide-react';

const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'bookings', name: 'Bookings', icon: <Calendar className="w-4 h-4" /> },
    { id: 'guests', name: 'Guests', icon: <Users className="w-4 h-4" /> },
    { id: 'revenue', name: 'Revenue', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'rooms', name: 'Rooms', icon: <MapPin className="w-4 h-4" /> }
  ];

  const pmsTabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'housekeeping', name: 'Housekeeping', icon: <Settings className="w-4 h-4" /> },
    { id: 'maintenance', name: 'Maintenance', icon: <Settings className="w-4 h-4" /> },
    { id: 'staff', name: 'Staff', icon: <Users className="w-4 h-4" /> },
    { id: 'inventory', name: 'Inventory', icon: <MapPin className="w-4 h-4" /> }
  ];

  const analyticsTabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'performance', name: 'Performance', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'forecasting', name: 'Forecasting', icon: <Activity className="w-4 h-4" /> },
    { id: 'reports', name: 'Reports', icon: <PieChart className="w-4 h-4" /> },
    { id: 'insights', name: 'AI Insights', icon: <Activity className="w-4 h-4" /> }
  ];
  const recentBookings = [
    { id: '#BK001', guest: 'Rajesh Kumar', room: 'Deluxe Suite', checkin: 'Today', amount: '₹8,500', status: 'confirmed', channel: 'Direct' },
    { id: '#BK002', guest: 'Priya Sharma', room: 'Standard Room', checkin: 'Tomorrow', amount: '₹4,200', status: 'pending', channel: 'Website' },
    { id: '#BK003', guest: 'Amit Patel', room: 'Executive Room', checkin: 'Dec 28', amount: '₹6,800', status: 'confirmed', channel: 'Phone' },
    { id: '#BK004', guest: 'Sarah Johnson', room: 'Premium Suite', checkin: 'Dec 29', amount: '₹12,000', status: 'confirmed', channel: 'Direct' },
    { id: '#BK005', guest: 'Michael Chen', room: 'Standard Room', checkin: 'Dec 30', amount: '₹4,200', status: 'cancelled', channel: 'OTA' }
  ];

  const roomStatus = [
    { room: '101', type: 'Deluxe', status: 'occupied', guest: 'Kumar Family', checkout: 'Dec 26', revenue: '₹8,500' },
    { room: '102', type: 'Standard', status: 'cleaning', guest: '-', checkout: '-', revenue: '-' },
    { room: '103', type: 'Suite', status: 'available', guest: '-', checkout: '-', revenue: '-' },
    { room: '104', type: 'Executive', status: 'maintenance', guest: '-', checkout: '-', revenue: '-' },
    { room: '105', type: 'Deluxe', status: 'occupied', guest: 'Sharma Family', checkout: 'Dec 27', revenue: '₹8,500' },
    { room: '106', type: 'Standard', status: 'available', guest: '-', checkout: '-', revenue: '-' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      case 'occupied': return 'text-blue-600 bg-blue-50';
      case 'available': return 'text-green-600 bg-green-50';
      case 'cleaning': return 'text-yellow-600 bg-yellow-50';
      case 'maintenance': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'Direct': return 'text-green-600 bg-green-50';
      case 'Website': return 'text-blue-600 bg-blue-50';
      case 'Phone': return 'text-purple-600 bg-purple-50';
      case 'OTA': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  // Enhanced Booking Engine Dashboard
  const renderBookingEngineDashboard = () => (
    <div className="min-h-screen bg-white">
      {/* Enhanced Dashboard Header */}
      <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Booking Engine Dashboard</h3>
              <p className="text-blue-100 text-sm">Grand Palace Hotel • Live Booking Data</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Refresh</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
            <div className="relative">
              <Bell className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <button
              onClick={() => setSelectedDashboard(null)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-[#0A2463] text-[#0A2463]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Today's Revenue</p>
                    <p className="text-2xl font-bold text-blue-900">₹45,200</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+12.5%</span>
                    </div>
                  </div>
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-green-900">78%</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+5.2%</span>
                    </div>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">New Bookings</p>
                    <p className="text-2xl font-bold text-purple-900">23</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+8 today</span>
                    </div>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Avg. Daily Rate</p>
                    <p className="text-2xl font-bold text-orange-900">₹5,800</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                      <span className="text-red-600 text-sm">-2.1%</span>
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                    </select>
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-between px-4 py-4">
                  {[65, 45, 78, 52, 89, 67, 92].map((height, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div 
                        className="bg-gradient-to-t from-[#0A2463] to-[#5FBDB0] rounded-t-lg w-8 transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Sources */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Sources</h3>
                <div className="space-y-4">
                  {[
                    { source: 'Direct Website', percentage: 45, color: 'bg-green-500', bookings: 18 },
                    { source: 'Phone Bookings', percentage: 25, color: 'bg-blue-500', bookings: 10 },
                    { source: 'Walk-ins', percentage: 20, color: 'bg-purple-500', bookings: 8 },
                    { source: 'OTA Partners', percentage: 10, color: 'bg-orange-500', bookings: 4 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-sm font-medium text-gray-700">{item.source}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-8">{item.percentage}%</span>
                        <span className="text-xs text-gray-500 w-12">{item.bookings} bookings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Bookings */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                  <button className="text-[#0A2463] hover:text-[#5FBDB0] text-sm font-medium">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Booking ID</th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Guest</th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Room</th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Check-in</th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Amount</th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentBookings.slice(0, 4).map((booking, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-3 text-sm font-medium text-gray-900">{booking.id}</td>
                          <td className="py-3 text-sm text-gray-700">{booking.guest}</td>
                          <td className="py-3 text-sm text-gray-700">{booking.room}</td>
                          <td className="py-3 text-sm text-gray-700">{booking.checkin}</td>
                          <td className="py-3 text-sm font-semibold text-gray-900">{booking.amount}</td>
                          <td className="py-3">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-[#0A2463] text-white py-3 px-4 rounded-lg hover:bg-[#0A2463]/90 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>New Booking</span>
                  </button>
                  <button className="w-full bg-[#5FBDB0] text-white py-3 px-4 rounded-lg hover:bg-[#5FBDB0]/90 transition-colors flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Check-in Guest</span>
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Room Status</span>
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Generate Report</span>
                  </button>
                </div>

                {/* Alerts */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Alerts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 bg-yellow-50 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="text-xs text-yellow-800">Room 104 needs maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-800">Payment received for BK001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {/* Booking Filters */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Search bookings..." 
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Channels</option>
                  <option>Direct</option>
                  <option>Website</option>
                  <option>Phone</option>
                  <option>OTA</option>
                </select>
                <input 
                  type="date" 
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Booking Details</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Guest Info</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Room & Dates</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Channel</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Amount</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentBookings.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{booking.id}</div>
                            <div className="text-xs text-gray-500">Booked 2 hours ago</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{booking.guest}</div>
                            <div className="text-xs text-gray-500">+91 98765 43210</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{booking.room}</div>
                            <div className="text-xs text-gray-500">{booking.checkin} - Dec 28</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getChannelColor(booking.channel)}`}>
                            {booking.channel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{booking.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-[#0A2463] hover:text-[#5FBDB0] text-sm">View</button>
                            <button className="text-gray-500 hover:text-gray-700 text-sm">Edit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className="space-y-6">
            {/* Room Status Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900">12</div>
                  <div className="text-sm text-green-600">Available</div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">18</div>
                  <div className="text-sm text-blue-600">Occupied</div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-900">3</div>
                  <div className="text-sm text-yellow-600">Cleaning</div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-900">2</div>
                  <div className="text-sm text-red-600">Maintenance</div>
                </div>
              </div>
            </div>

            {/* Room Grid */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roomStatus.map((room, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="text-lg font-bold text-gray-900">Room {room.room}</div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(room.status)}`}>
                          {room.status}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium">{room.type}</span>
                      </div>
                      {room.guest !== '-' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Guest:</span>
                            <span className="font-medium">{room.guest}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Checkout:</span>
                            <span className="font-medium">{room.checkout}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Revenue:</span>
                            <span className="font-medium text-green-600">{room.revenue}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guests' && (
          <div className="space-y-6">
            {/* Guest Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Guests</p>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Repeat Guests</p>
                    <p className="text-2xl font-bold text-gray-900">342</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Avg. Rating</p>
                    <p className="text-2xl font-bold text-gray-900">4.8</p>
                  </div>
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Guest List */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Guests</h3>
              <div className="space-y-4">
                {[
                  { name: 'Rajesh Kumar', room: '101', checkin: 'Dec 25', checkout: 'Dec 27', status: 'checked-in', rating: 5 },
                  { name: 'Priya Sharma', room: '205', checkin: 'Dec 24', checkout: 'Dec 26', status: 'checked-out', rating: 4 },
                  { name: 'Amit Patel', room: '103', checkin: 'Dec 26', checkout: 'Dec 28', status: 'arriving', rating: null }
                ].map((guest, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{guest.name}</div>
                        <div className="text-sm text-gray-500">Room {guest.room} • {guest.checkin} - {guest.checkout}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {guest.rating && (
                        <div className="flex items-center space-x-1">
                          {[...Array(guest.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(guest.status)}`}>
                        {guest.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'revenue' && (
          <div className="space-y-6">
            {/* Revenue Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Today's Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₹45,200</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+12.5%</span>
                    </div>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">₹12,45,000</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+8.2%</span>
                    </div>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Average ADR</p>
                    <p className="text-2xl font-bold text-gray-900">₹5,800</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                      <span className="text-red-600 text-sm">-2.1%</span>
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">RevPAR</p>
                    <p className="text-2xl font-bold text-gray-900">₹4,524</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-sm">+5.7%</span>
                    </div>
                  </div>
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                  </select>
                </div>
              </div>
              <div className="h-80 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-between px-4 py-4">
                {[45, 52, 48, 61, 55, 67, 59, 72, 68, 75, 71, 78, 82, 79, 85, 88, 92, 89, 94, 91, 96, 93, 98, 95, 89, 92, 88, 91, 87, 90].map((height, index) => (
                  <div key={index} className="flex flex-col items-center space-y-1">
                    <div 
                      className="bg-gradient-to-t from-[#0A2463] to-[#5FBDB0] rounded-t-sm w-2 transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Hotel PMS Dashboard
  const renderPMSDashboard = () => (
    <div className="min-h-screen bg-white">
      {/* PMS Dashboard Header */}
      <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-[#0A2463]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A2463]">Hotel PMS Dashboard</h3>
              <p className="text-[#0A2463]/80 text-sm">Grand Palace Hotel • Property Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/10 hover:bg-white/20 text-[#0A2463] px-3 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Refresh</span>
            </button>
            <button
              onClick={() => setSelectedDashboard(null)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-8 px-6">
          {pmsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-[#5FBDB0] text-[#5FBDB0]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PMS Dashboard Content */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Available Rooms</p>
                  <p className="text-2xl font-bold text-green-900">12</p>
                </div>
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 text-sm font-medium">Maintenance Tasks</p>
                  <p className="text-2xl font-bold text-red-900">2</p>
                </div>
                <Settings className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Staff on Duty</p>
                  <p className="text-2xl font-bold text-blue-900">8</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 text-sm font-medium">Housekeeping</p>
                  <p className="text-2xl font-bold text-yellow-900">3</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Room Status Grid */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roomStatus.map((room, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-lg font-bold text-gray-900">Room {room.room}</div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(room.status)}`}>
                        {room.status}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{room.type}</span>
                    </div>
                    {room.guest !== '-' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Guest:</span>
                          <span className="font-medium">{room.guest}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Checkout:</span>
                          <span className="font-medium">{room.checkout}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Intelligent Analytics Dashboard
  const renderAnalyticsDashboard = () => (
    <div className="min-h-screen bg-white">
      {/* Analytics Dashboard Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Intelligent Analytics Dashboard</h3>
              <p className="text-blue-100 text-sm">Grand Palace Hotel • AI-Powered Insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Refresh</span>
            </button>
            <button
              onClick={() => setSelectedDashboard(null)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex space-x-8 px-6">
          {analyticsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-[#FFD700] text-[#FFD700]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Dashboard Content */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Revenue Growth</p>
                  <p className="text-2xl font-bold text-green-900">+12.5%</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 text-sm">vs last month</span>
                  </div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold text-blue-900">3.2%</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 text-sm">+0.3%</span>
                  </div>
                </div>
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 text-sm font-medium">Guest Satisfaction</p>
                  <p className="text-2xl font-bold text-yellow-900">4.8★</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 text-sm">+0.2</span>
                  </div>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Booking Velocity</p>
                  <p className="text-2xl font-bold text-purple-900">2.4/hr</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 text-sm">+15%</span>
                  </div>
                </div>
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Revenue Forecasting Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Forecasting (AI Powered)</h3>
              <div className="flex items-center space-x-2">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                  <option>Next 30 days</option>
                  <option>Next 3 months</option>
                  <option>Next 6 months</option>
                </select>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-lg flex items-end justify-between px-4 py-4">
              {[65, 68, 72, 75, 78, 82, 85, 88, 92, 89, 94, 91, 96, 93, 98, 95, 89, 92, 88, 91, 87, 90, 93, 96, 99, 95, 92, 89, 86, 83].map((height, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                  <div 
                    className="bg-gradient-to-t from-[#FFD700] to-[#0A2463] rounded-t-sm w-2 transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Revenue Optimization</h4>
                  <p className="text-sm text-blue-700">Increase weekend rates by 15% based on demand patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <Users className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900">Marketing Insight</h4>
                  <p className="text-sm text-green-700">Target business travelers on Tuesday-Thursday for higher conversion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <Star className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Guest Retention</h4>
                  <p className="text-sm text-yellow-700">Send personalized offers to guests who haven't booked in 6+ months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (selectedDashboard === 'booking-engine') {
    return renderBookingEngineDashboard();
  }

  if (selectedDashboard === 'pms') {
    return renderPMSDashboard();
  }

  if (selectedDashboard === 'analytics') {
    return renderAnalyticsDashboard();
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Complete Hotel Management Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your hotel operations in one intuitive dashboard. 
            Real-time insights, booking management, and revenue optimization.
          </p>
        </div>

        {/* Dashboard Previews */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Engine Dashboard */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-8 h-8" />
                <h3 className="text-xl font-bold">Booking Engine Dashboard</h3>
              </div>
              <p className="text-blue-100">Complete booking management with real-time availability</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Today's Bookings</span>
                  <span className="font-bold text-[#0A2463]">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-bold text-green-600">₹45,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Occupancy</span>
                  <span className="font-bold text-blue-600">78%</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDashboard('booking-engine')}
                className="w-full bg-[#0A2463] text-white py-3 rounded-lg hover:bg-[#0A2463]/90 transition-colors"
              >
                View Full Dashboard
              </button>
            </div>
          </div>

          {/* Hotel PMS Dashboard */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-8 h-8" />
                <h3 className="text-xl font-bold text-[#0A2463]">Hotel PMS Dashboard</h3>
              </div>
              <p className="text-[#0A2463]/80">Property management with staff coordination</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rooms Available</span>
                  <span className="font-bold text-green-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maintenance</span>
                  <span className="font-bold text-red-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Staff Tasks</span>
                  <span className="font-bold text-blue-600">8</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDashboard('pms')}
                className="w-full bg-[#5FBDB0] text-white py-3 rounded-lg hover:bg-[#5FBDB0]/90 transition-colors"
              >
                View PMS Dashboard
              </button>
            </div>
          </div>

          {/* Intelligent Analytics Dashboard */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#0A2463] p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-8 h-8" />
                <h3 className="text-xl font-bold">Intelligent Analytics</h3>
              </div>
              <p className="text-blue-100">AI-powered insights and revenue optimization</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Growth</span>
                  <span className="font-bold text-green-600">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-bold text-blue-600">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Guest Satisfaction</span>
                  <span className="font-bold text-yellow-600">4.8★</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDashboard('analytics')}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#0A2463] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Monitor your hotel's performance with live data updates, revenue tracking, and occupancy insights.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDB0] to-[#FFD700] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">Booking Management</h3>
            <p className="text-gray-600">
              Manage all bookings from multiple channels in one place with automated confirmations and updates.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#0A2463] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">Guest Experience</h3>
            <p className="text-gray-600">
              Track guest preferences, manage check-ins/outs, and maintain detailed guest profiles for personalized service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;