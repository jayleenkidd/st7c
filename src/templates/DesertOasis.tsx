import React from 'react';
import { Sun, Phone, Mail, MapPin, Star, Compass, Camera, Coffee, Wind, Moon } from 'lucide-react';

const DesertOasis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-serif">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-800 to-yellow-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Sun className="w-10 h-10 text-yellow-300" />
              <div>
                <h1 className="text-2xl font-bold">Desert Oasis</h1>
                <p className="text-orange-200 text-sm">Luxury Desert Resort</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Tents</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Safari</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Stargazing</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Culture</a>
            </nav>
            <button className="bg-yellow-400 text-orange-800 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Book Desert
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Desert Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-yellow-400">Golden</span>
                <span className="block">Sands</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Where endless dunes meet starlit skies. Experience the magic of desert luxury and ancient traditions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2">
                  <Compass className="w-6 h-6" />
                  <span>Desert Safari</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-800 transition-colors">
                  Stargazing Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desert Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Desert Adventures</h2>
            <p className="text-xl text-gray-600">Immerse yourself in ancient desert culture</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Compass className="w-8 h-8" />, name: 'Camel Safari', desc: 'Traditional desert journey' },
              { icon: <Star className="w-8 h-8" />, name: 'Stargazing', desc: 'Celestial observations' },
              { icon: <Camera className="w-8 h-8" />, name: 'Dune Photography', desc: 'Capture golden moments' },
              { icon: <Coffee className="w-8 h-8" />, name: 'Bedouin Dining', desc: 'Authentic desert cuisine' }
            ].map((experience, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">{experience.name}</h3>
                <p className="text-gray-600">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Desert Pavilions</h2>
            <p className="text-xl text-gray-600">Luxury tents under the desert stars</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Royal Desert Tent', 
                price: '₹20,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Private Dune Views', 'Traditional Decor', 'Stargazing Deck', 'Camel Safari Included']
              },
              { 
                name: 'Nomad Suite', 
                price: '₹15,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Desert Panorama', 'Cultural Experiences', 'Bedouin Dining', 'Astronomy Guide']
              },
              { 
                name: 'Oasis Retreat', 
                price: '₹12,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Comfortable Tent', 'Desert Activities', 'Traditional Meals', 'Sunset Views']
              }
            ].map((tent, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={tent.image} alt={tent.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">{tent.name}</h3>
                  <div className="space-y-2 mb-6">
                    {tent.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-orange-600">{tent.price}</span>
                    <button className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-yellow-700 transition-colors">
                      Book Desert
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stargazing Schedule */}
      <section className="py-16 bg-gradient-to-r from-orange-800 to-yellow-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Tonight's Celestial Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Moon className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <div className="text-xl font-bold mb-2">New Moon</div>
              <div className="text-orange-200 text-sm">Perfect for stargazing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Star className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <div className="text-xl font-bold mb-2">Milky Way</div>
              <div className="text-orange-200 text-sm">Visible from 9 PM</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Compass className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <div className="text-xl font-bold mb-2">Mars Rising</div>
              <div className="text-orange-200 text-sm">Best viewing at 11 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Desert Oasis</h3>
              </div>
              <p className="text-orange-200">Where desert dreams come alive</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-orange-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 291 234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@desertoasis.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Thar Desert, Jaisalmer</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Desert Experiences</h4>
              <div className="space-y-1 text-orange-200 text-sm">
                <div>🐪 Camel Safari Adventures</div>
                <div>⭐ Stargazing Expeditions</div>
                <div>🎭 Cultural Performances</div>
                <div>🍽️ Traditional Desert Cuisine</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesertOasis;