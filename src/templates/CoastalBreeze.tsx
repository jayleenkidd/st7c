import React from 'react';
import { Anchor, Phone, Mail, MapPin, Fish, Sailboat, Lightbulb as Lighthouse, Waves, Wind, Camera } from 'lucide-react';

const CoastalBreeze: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Anchor className="w-10 h-10 text-teal-200" />
              <div>
                <h1 className="text-2xl font-bold">Coastal Breeze</h1>
                <p className="text-teal-200 text-sm">Seaside Boutique Hotel</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-teal-200 hover:text-white transition-colors">Rooms</a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">Marina</a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">Dining</a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">Activities</a>
            </nav>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-full font-bold hover:bg-teal-50 transition-colors">
              Book Ocean View
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Coastal View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-teal-300">Ocean</span>
                <span className="block">Serenity</span>
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Where gentle waves meet coastal charm. Experience the tranquil beauty of seaside living.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors flex items-center justify-center space-x-2">
                  <Waves className="w-6 h-6" />
                  <span>Ocean Rooms</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-colors">
                  Sailing Adventures
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-600 mb-4">Coastal Experiences</h2>
            <p className="text-xl text-gray-600">Embrace the rhythm of the sea</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Fish className="w-8 h-8" />, name: 'Deep Sea Fishing', desc: 'Charter boat adventures' },
              { icon: <Sailboat className="w-8 h-8" />, name: 'Sailing Lessons', desc: 'Learn from experts' },
              { icon: <Lighthouse className="w-8 h-8" />, name: 'Lighthouse Tours', desc: 'Historic coastal walks' },
              { icon: <Camera className="w-8 h-8" />, name: 'Coastal Photography', desc: 'Capture ocean beauty' }
            ].map((activity, index) => (
              <div key={index} className="bg-teal-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-600 mb-4">Seaside Rooms</h2>
            <p className="text-xl text-gray-600">Wake up to ocean views every morning</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Ocean Suite', 
                price: '₹14,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Panoramic Ocean Views', 'Private Balcony', 'Nautical Decor', 'Sailing Package']
              },
              { 
                name: 'Coastal Room', 
                price: '₹10,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Sea Breeze Balcony', 'Maritime Theme', 'Fishing Charter Access', 'Lighthouse Views']
              },
              { 
                name: 'Harbor View', 
                price: '₹8,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Marina Views', 'Coastal Comfort', 'Beach Access', 'Sailing Lessons']
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-600 mb-4">{room.name}</h3>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Anchor className="w-3 h-3 text-teal-400" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-blue-500">{room.price}</span>
                    <button className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-blue-600 transition-colors">
                      Book Ocean
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ocean Conditions */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Current Ocean Conditions</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Waves className="w-8 h-8 mx-auto mb-4 text-teal-200" />
              <div className="text-2xl font-bold mb-2">1.2m</div>
              <div className="text-teal-200 text-sm">Wave Height</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Wind className="w-8 h-8 mx-auto mb-4 text-teal-200" />
              <div className="text-2xl font-bold mb-2">12 knots</div>
              <div className="text-teal-200 text-sm">Wind Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Fish className="w-8 h-8 mx-auto mb-4 text-teal-200" />
              <div className="text-2xl font-bold mb-2">Excellent</div>
              <div className="text-teal-200 text-sm">Fishing Conditions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <Sailboat className="w-8 h-8 mx-auto mb-4 text-teal-200" />
              <div className="text-2xl font-bold mb-2">Perfect</div>
              <div className="text-teal-200 text-sm">Sailing Weather</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Anchor className="w-8 h-8 text-teal-300" />
                <h3 className="text-2xl font-bold">Coastal Breeze</h3>
              </div>
              <p className="text-teal-200">Where ocean meets tranquility</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-teal-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 484 234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@coastalbreeze.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Fort Kochi, Kerala</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Ocean Activities</h4>
              <div className="space-y-1 text-teal-200 text-sm">
                <div>🎣 Deep Sea Fishing</div>
                <div>⛵ Sailing Adventures</div>
                <div>🏮 Lighthouse Tours</div>
                <div>📸 Coastal Photography</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoastalBreeze;