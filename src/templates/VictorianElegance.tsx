import React from 'react';
import { Crown, Phone, Mail, MapPin, Coffee, Book, Camera, Music, Utensils, Wifi } from 'lucide-react';

const VictorianElegance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cream-50 font-serif">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-cream-100 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Crown className="w-10 h-10 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-bold text-cream-100">Victorian Manor</h1>
                <p className="text-emerald-200 text-sm">Historic Elegance Hotel</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-emerald-200 hover:text-cream-100 transition-colors">Chambers</a>
              <a href="#" className="text-emerald-200 hover:text-cream-100 transition-colors">Dining</a>
              <a href="#" className="text-emerald-200 hover:text-cream-100 transition-colors">Heritage</a>
              <a href="#" className="text-emerald-200 hover:text-cream-100 transition-colors">Events</a>
            </nav>
            <button className="bg-yellow-400 text-emerald-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Reserve Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Victorian Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-cream-100">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
                Victorian
                <span className="block text-cream-100">Grandeur</span>
              </h1>
              <p className="text-xl mb-8 text-emerald-100">
                Step into an era of refined elegance where every detail tells a story of timeless sophistication.
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                  Explore Chambers
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-emerald-900 transition-colors">
                  Heritage Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Features */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Historic Amenities</h2>
            <p className="text-xl text-gray-600">Experience the finest Victorian traditions</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Coffee className="w-8 h-8" />, name: 'Afternoon Tea' },
              { icon: <Book className="w-8 h-8" />, name: 'Library Lounge' },
              { icon: <Camera className="w-8 h-8" />, name: 'Portrait Studio' },
              { icon: <Music className="w-8 h-8" />, name: 'Piano Recitals' },
              { icon: <Utensils className="w-8 h-8" />, name: 'Fine Dining' },
              { icon: <Wifi className="w-8 h-8" />, name: 'Modern Comforts' }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-800 to-emerald-700 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {amenity.icon}
                </div>
                <h3 className="font-bold text-emerald-800">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chambers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Historic Chambers</h2>
            <p className="text-xl text-gray-600">Each room preserves Victorian elegance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Royal Suite', price: '₹22,000', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { name: 'Noble Chamber', price: '₹16,000', image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { name: 'Heritage Room', price: '₹11,000', image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800' }
            ].map((room, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-emerald-100">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">{room.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-yellow-600">{room.price}</span>
                    <button className="bg-emerald-800 text-yellow-400 px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-cream-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Victorian Manor</h3>
              </div>
              <p className="text-emerald-200">Where history meets luxury</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-emerald-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 11 2345 6789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@victorianmanor.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Connaught Place, New Delhi</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Heritage</h4>
              <p className="text-emerald-200 text-sm">
                "Established 1887, preserving Victorian elegance for modern travelers."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VictorianElegance;