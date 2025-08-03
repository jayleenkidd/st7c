import React from 'react';
import { Waves, Sun, Phone, Mail, MapPin, Palmtree, Fish, Umbrella, Camera } from 'lucide-react';

const ParadiseShores: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Waves className="w-10 h-10 text-coral-400" />
              <div>
                <h1 className="text-2xl font-bold">Paradise Shores</h1>
                <p className="text-cyan-200 text-sm">Tropical Beach Resort</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-cyan-100 hover:text-white transition-colors">Rooms</a>
              <a href="#" className="text-cyan-100 hover:text-white transition-colors">Activities</a>
              <a href="#" className="text-cyan-100 hover:text-white transition-colors">Dining</a>
              <a href="#" className="text-cyan-100 hover:text-white transition-colors">Spa</a>
            </nav>
            <button className="bg-coral-500 text-white px-6 py-2 rounded-full font-bold hover:bg-coral-600 transition-colors">
              Book Paradise
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tropical Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-coral-400">Escape</span> to
                <span className="block">Paradise</span>
              </h1>
              <p className="text-xl mb-8 text-cyan-100">
                Where crystal-clear waters meet pristine white sands. Your tropical adventure begins here.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-coral-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-coral-600 transition-colors flex items-center justify-center space-x-2">
                  <Sun className="w-6 h-6" />
                  <span>Explore Rooms</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-500 transition-colors">
                  Beach Activities
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-coral-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">Beach Adventures</h2>
            <p className="text-xl text-gray-600">Dive into endless possibilities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Fish className="w-8 h-8" />, name: 'Snorkeling', desc: 'Explore coral reefs' },
              { icon: <Waves className="w-8 h-8" />, name: 'Surfing', desc: 'Ride the perfect waves' },
              { icon: <Umbrella className="w-8 h-8" />, name: 'Beach Lounging', desc: 'Relax in paradise' },
              { icon: <Camera className="w-8 h-8" />, name: 'Sunset Tours', desc: 'Capture magical moments' }
            ].map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">Ocean View Suites</h2>
            <p className="text-xl text-gray-600">Wake up to paradise every morning</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Beachfront Villa', 
                price: '₹15,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Private Beach Access', 'Ocean View Terrace', 'Infinity Pool']
              },
              { 
                name: 'Coral Suite', 
                price: '₹12,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Panoramic Ocean View', 'Private Balcony', 'Coral Reef Access']
              },
              { 
                name: 'Tropical Retreat', 
                price: '₹9,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Garden View', 'Beach Access', 'Tropical Decor']
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-600 mb-4">{room.name}</h3>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-coral-400 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-coral-500">{room.price}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Perfect Weather Awaits</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <div className="text-lg font-bold mb-2">{day}</div>
                <Sun className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">28°C</div>
                <div className="text-sm text-cyan-200">Sunny</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="w-8 h-8 text-coral-400" />
                <h3 className="text-2xl font-bold">Paradise Shores</h3>
              </div>
              <p className="text-cyan-200">Your gateway to tropical paradise</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Paradise</h4>
              <div className="space-y-2 text-cyan-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 832 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@paradiseshores.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Calangute Beach, Goa</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Beach Life</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center">
                  <Palmtree className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center">
                  <Waves className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParadiseShores;