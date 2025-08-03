import React from 'react';
import { Building, Phone, Mail, MapPin, Wifi, Coffee, Car, Users, Clock, Calendar, BarChart3, Shield } from 'lucide-react';

const MetroBusinessHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Building className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Metro Business Hub</h1>
                <p className="text-gray-500 text-sm">Executive Hotel</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Rooms</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Business Center</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Meetings</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Business Hotel"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Business
                <span className="block text-blue-200">Headquarters</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Streamlined accommodations for the modern business traveler. Efficiency meets comfort.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Check Availability
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Corporate Rates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Essentials</h2>
            <p className="text-xl text-gray-600">Everything you need for productive travel</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, name: 'Express Check-in', desc: '2-minute process' },
              { icon: <Wifi className="w-8 h-8" />, name: 'High-Speed WiFi', desc: '100 Mbps guaranteed' },
              { icon: <Coffee className="w-8 h-8" />, name: '24/7 Business Center', desc: 'Print, scan, work' },
              { icon: <Car className="w-8 h-8" />, name: 'Airport Shuttle', desc: 'Every 30 minutes' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Accommodations</h2>
            <p className="text-xl text-gray-600">Designed for productivity and rest</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Executive Suite', 
                price: '₹8,500', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Separate Work Area', 'Premium WiFi', 'Express Laundry', 'Airport Transfer']
              },
              { 
                name: 'Business Room', 
                price: '₹6,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Work Desk', 'High-Speed Internet', 'Coffee Machine', 'Late Checkout']
              },
              { 
                name: 'Standard Plus', 
                price: '₹4,500', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Comfortable Workspace', 'Free WiFi', 'Business Amenities', 'City View']
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{room.name}</h3>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meeting Facilities</h2>
            <p className="text-xl text-gray-600">Professional spaces for every occasion</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Meeting Room"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">State-of-the-Art Conference Rooms</h3>
              <p className="text-gray-600 leading-relaxed">
                Our meeting facilities are equipped with the latest technology to ensure your business 
                events run smoothly. From intimate boardroom discussions to large presentations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">5-50 Capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">AV Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Flexible Booking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Secure Environment</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Meeting Room
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Corporate Partnership Benefits</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Corporate Discount</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Concierge Service</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-gray-600">Airport Transfers</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Priority</div>
              <div className="text-gray-600">Booking & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Metro Business Hub</h3>
              </div>
              <p className="text-gray-400">Your partner in business travel excellence</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 22 1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@metrobusinesshub.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>BKC, Mumbai</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <div className="text-gray-400 space-y-1">
                <div>Front Desk: 24/7</div>
                <div>Business Center: 24/7</div>
                <div>Concierge: 6 AM - 11 PM</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MetroBusinessHub;