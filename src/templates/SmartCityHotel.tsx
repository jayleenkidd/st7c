import React from 'react';
import { Zap, Phone, Mail, MapPin, Smartphone, Wifi, Monitor, Shield, QrCode, Cpu } from 'lucide-react';

const SmartCityHotel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Zap className="w-10 h-10 text-green-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Smart City Hotel</h1>
                <p className="text-gray-400 text-sm">Future of Hospitality</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Smart Rooms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Technology</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">IoT Services</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Digital Hub</a>
            </nav>
            <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-green-300 transition-colors">
              Book Smart
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Smart City"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-green-400">Smart</span>
                <span className="block">Future</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Experience tomorrow's hospitality today. AI-powered comfort, IoT convenience, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 transition-colors flex items-center justify-center space-x-2">
                  <Smartphone className="w-6 h-6" />
                  <span>Smart Rooms</span>
                </button>
                <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-black transition-colors">
                  Digital Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-green-400/30 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-green-400/20 rounded-full animate-bounce"></div>
      </section>

      {/* Smart Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Smart Technology</h2>
            <p className="text-xl text-gray-400">Next-generation hotel experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile Key', desc: 'Keyless room access' },
              { icon: <Monitor className="w-8 h-8" />, name: 'Smart Controls', desc: 'Voice & app control' },
              { icon: <Wifi className="w-8 h-8" />, name: 'Ultra WiFi 6', desc: 'Gigabit connectivity' },
              { icon: <Shield className="w-8 h-8" />, name: 'Cyber Security', desc: 'Advanced protection' }
            ].map((feature, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6 text-center hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-black mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Rooms */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Smart Accommodations</h2>
            <p className="text-xl text-gray-400">Rooms that think ahead</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'AI Suite', 
                price: '₹12,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['AI Assistant', 'Automated Climate', 'Smart Lighting', 'IoT Integration']
              },
              { 
                name: 'Tech Room', 
                price: '₹9,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Voice Control', 'Smart TV Hub', 'Wireless Charging', 'Digital Concierge']
              },
              { 
                name: 'Connected Space', 
                price: '₹7,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Smart Devices', 'App Control', 'High-Speed WiFi', 'Tech Support']
              }
            ].map((room, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-400 transition-colors">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover opacity-80" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{room.name}</h3>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Zap className="w-3 h-3 text-green-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-green-400">{room.price}</span>
                    <button className="bg-green-400 text-black px-6 py-2 rounded-lg hover:bg-green-300 transition-colors font-bold">
                      Book Smart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Dashboard */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Real-Time IoT Monitoring</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <Cpu className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-sm">System Uptime</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <Monitor className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">1,247</div>
              <div className="text-sm">Connected Devices</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <QrCode className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Instant</div>
              <div className="text-sm">QR Check-in</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <Shield className="w-8 h-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">256-bit</div>
              <div className="text-sm">Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Smart City Hotel</h3>
              </div>
              <p className="text-gray-400">Tomorrow's hospitality, today</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 80 9876 5432</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>tech@smartcityhotel.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Electronic City, Bangalore</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Smart Features</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <div>📱 Mobile Key Access</div>
                <div>🤖 AI Room Assistant</div>
                <div>🌐 IoT Integration</div>
                <div>🔒 Biometric Security</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartCityHotel;