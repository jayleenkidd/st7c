import React from 'react';
import { Mountain, Phone, Mail, MapPin, Snowflake, SkipBack as Ski, Coffee, Wind, Thermometer, Camera } from 'lucide-react';

const AlpineLodge: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Mountain className="w-10 h-10 text-blue-300" />
              <div>
                <h1 className="text-2xl font-bold">Alpine Lodge</h1>
                <p className="text-blue-200 text-sm">Mountain Adventure Resort</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Rooms</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Skiing</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Adventure</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Wellness</a>
            </nav>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Book Adventure
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mountain Lodge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-blue-300">Mountain</span>
                <span className="block">Adventure</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Where peaks touch the sky and adventure knows no limits. Experience the thrill of alpine living.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Ski className="w-6 h-6" />
                  <span>Ski Packages</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                  Mountain Trails
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Conditions */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Mountain Conditions</h2>
            <p className="text-blue-200">Live updates from the peaks</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Thermometer className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">-5°C</div>
              <div className="text-blue-200 text-sm">Temperature</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Snowflake className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">Fresh</div>
              <div className="text-blue-200 text-sm">Powder Snow</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Wind className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">15 km/h</div>
              <div className="text-blue-200 text-sm">Wind Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Mountain className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">12/15</div>
              <div className="text-blue-200 text-sm">Trails Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Mountain Adventures</h2>
            <p className="text-xl text-gray-600">Thrills for every season</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Ski className="w-8 h-8" />, name: 'Alpine Skiing', desc: 'World-class slopes' },
              { icon: <Mountain className="w-8 h-8" />, name: 'Mountain Hiking', desc: 'Scenic trail adventures' },
              { icon: <Camera className="w-8 h-8" />, name: 'Photography Tours', desc: 'Capture alpine beauty' },
              { icon: <Coffee className="w-8 h-8" />, name: 'Cozy Fireside', desc: 'Warm mountain evenings' }
            ].map((activity, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Mountain Lodging</h2>
            <p className="text-xl text-gray-600">Cozy retreats with breathtaking views</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Summit Suite', 
                price: '₹16,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Panoramic Mountain Views', 'Fireplace', 'Ski Equipment Storage', 'Hot Tub Access']
              },
              { 
                name: 'Alpine Cabin', 
                price: '₹12,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Rustic Mountain Decor', 'Valley Views', 'Hiking Trail Access', 'Cozy Atmosphere']
              },
              { 
                name: 'Base Camp Room', 
                price: '₹8,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Mountain Views', 'Ski Lift Access', 'Gear Rental', 'Adventure Concierge']
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{room.name}</h3>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Snowflake className="w-3 h-3 text-blue-400" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-blue-600">{room.price}</span>
                    <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-800 hover:to-blue-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Mountain className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-bold">Alpine Lodge</h3>
              </div>
              <p className="text-blue-200">Adventure awaits at every altitude</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 177 345 6789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@alpinelodge.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Solang Valley, Manali</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Adventure Packages</h4>
              <div className="space-y-1 text-blue-200 text-sm">
                <div>🎿 Ski & Stay Packages</div>
                <div>🏔️ Mountain Trekking Tours</div>
                <div>📸 Photography Expeditions</div>
                <div>🧘 Wellness Retreats</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlpineLodge;