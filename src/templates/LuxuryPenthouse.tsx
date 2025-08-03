import React from 'react';
import { Crown, Phone, Mail, MapPin, Gem, Car, Plane, Utensils, Wifi, Shield } from 'lucide-react';

const LuxuryPenthouse: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Crown className="w-10 h-10 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">The Penthouse</h1>
                <p className="text-gray-400 text-sm">Ultra-Luxury Suites</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Suites</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Concierge</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Dining</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            </nav>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Reserve Suite
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Penthouse"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-yellow-400">Ultra</span>
                <span className="block">Luxury</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Where exclusivity meets perfection. Experience the pinnacle of luxury hospitality.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2">
                  <Gem className="w-6 h-6" />
                  <span>Exclusive Suites</span>
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors">
                  VIP Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Exclusive Services</h2>
            <p className="text-xl text-gray-400">Unparalleled luxury at your fingertips</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Plane className="w-8 h-8" />, name: 'Private Jet', desc: 'Helicopter transfers' },
              { icon: <Car className="w-8 h-8" />, name: 'Luxury Fleet', desc: 'Premium vehicles' },
              { icon: <Utensils className="w-8 h-8" />, name: 'Private Chef', desc: 'Michelin-starred cuisine' },
              { icon: <Shield className="w-8 h-8" />, name: 'VIP Security', desc: 'Discreet protection' }
            ].map((service, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suites */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Penthouse Suites</h2>
            <p className="text-xl text-gray-400">The epitome of luxury living</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Presidential Suite', 
                price: '₹1,50,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['City Skyline Views', 'Private Butler', 'Helicopter Pad Access', 'Michelin Dining']
              },
              { 
                name: 'Royal Penthouse', 
                price: '₹1,00,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Panoramic Views', 'Private Elevator', 'Luxury Amenities', 'VIP Concierge']
              },
              { 
                name: 'Executive Suite', 
                price: '₹75,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Premium Location', 'Business Center', 'Luxury Finishes', 'Personal Assistant']
              }
            ].map((suite, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition-colors">
                <img src={suite.image} alt={suite.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{suite.name}</h3>
                  <div className="space-y-2 mb-6">
                    {suite.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Gem className="w-3 h-3 text-yellow-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-yellow-400">{suite.price}</span>
                    <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-bold">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Stats */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Exclusive Membership Benefits</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm">Personal Concierge</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-sm">Michelin Restaurants</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Private</div>
              <div className="text-sm">Helicopter Access</div>
            </div>
            <div className="bg-black/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Unlimited</div>
              <div className="text-sm">Luxury Amenities</div>
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
                <Crown className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">The Penthouse</h3>
              </div>
              <p className="text-gray-400">Where luxury knows no limits</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 22 6789 0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>concierge@thepenthouse.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nariman Point, Mumbai</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">VIP Services</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <div>🚁 Private Helicopter</div>
                <div>👨‍🍳 Personal Chef Service</div>
                <div>🛡️ VIP Security Detail</div>
                <div>💎 Luxury Shopping Concierge</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryPenthouse;