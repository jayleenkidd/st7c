import React from 'react';
import { Circle, Phone, Mail, MapPin, Wifi, Coffee, Car, Dumbbell } from 'lucide-react';

const MinimalistHaven: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Circle className="w-8 h-8 text-gray-900" />
              <h1 className="text-2xl font-light text-gray-900">Haven</h1>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Stay</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Dine</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Explore</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Contact</a>
            </nav>
            <button className="bg-gray-900 text-white px-8 py-2 rounded-none hover:bg-gray-800 transition-colors font-light">
              Reserve
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Minimalist Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 tracking-wider">
            SIMPLICITY
          </h1>
          <p className="text-xl font-light text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where less becomes more. Experience tranquility in its purest form.
          </p>
          <button className="bg-transparent border border-gray-900 text-gray-900 px-12 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300 font-light tracking-wide">
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extralight text-gray-900 mb-12 tracking-wide">Our Philosophy</h2>
          <p className="text-xl font-light text-gray-600 leading-relaxed mb-16">
            In a world of excess, we choose restraint. Every element in our space serves a purpose, 
            creating an environment where your mind can truly rest.
          </p>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="w-1 h-16 bg-gray-900 mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Mindful Design</h3>
              <p className="text-gray-600 font-light">Every detail carefully considered</p>
            </div>
            <div>
              <div className="w-1 h-16 bg-gray-900 mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Pure Materials</h3>
              <p className="text-gray-600 font-light">Natural textures and honest forms</p>
            </div>
            <div>
              <div className="w-1 h-16 bg-gray-900 mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Peaceful Spaces</h3>
              <p className="text-gray-600 font-light">Sanctuaries for modern living</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extralight text-gray-900 mb-4 tracking-wide">Accommodations</h2>
            <p className="text-xl font-light text-gray-600">Spaces designed for contemplation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Minimal Room"
                className="w-full h-96 object-cover"
              />
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Essential Suite</h3>
                <p className="text-gray-600 font-light mb-6">
                  40 sqm of carefully curated space featuring natural oak, linen textures, 
                  and floor-to-ceiling windows overlooking the zen garden.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-light text-gray-900">From ₹8,000</span>
                  <button className="border border-gray-900 text-gray-900 px-8 py-2 hover:bg-gray-900 hover:text-white transition-colors font-light">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <img
                src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Minimal Room"
                className="w-full h-96 object-cover"
              />
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Zen Pavilion</h3>
                <p className="text-gray-600 font-light mb-6">
                  60 sqm sanctuary with private meditation area, Japanese soaking tub, 
                  and unobstructed views of our minimalist landscape.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-light text-gray-900">From ₹12,000</span>
                  <button className="border border-gray-900 text-gray-900 px-8 py-2 hover:bg-gray-900 hover:text-white transition-colors font-light">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extralight text-gray-900 mb-4 tracking-wide">Essentials</h2>
            <p className="text-xl font-light text-gray-600">Everything you need, nothing you don't</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: <Wifi className="w-6 h-6" />, name: 'High-Speed WiFi' },
              { icon: <Coffee className="w-6 h-6" />, name: 'Artisan Coffee' },
              { icon: <Car className="w-6 h-6" />, name: 'Valet Service' },
              { icon: <Dumbbell className="w-6 h-6" />, name: 'Wellness Center' }
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 mx-auto mb-6 hover:border-gray-900 hover:text-gray-900 transition-colors">
                  {amenity.icon}
                </div>
                <h3 className="font-light text-gray-900">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Circle className="w-6 h-6" />
                <h3 className="text-xl font-light">Haven</h3>
              </div>
              <p className="text-gray-400 font-light">A sanctuary for the modern soul</p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 80 2345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>stay@haven.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Whitefield, Bangalore</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-light mb-6">Philosophy</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                "The ability to simplify means to eliminate the unnecessary so that the necessary may speak."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistHaven;