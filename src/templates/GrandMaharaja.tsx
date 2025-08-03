import React from 'react';
import { Crown, Phone, Mail, MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Waves } from 'lucide-react';

const GrandMaharaja: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50 font-serif">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-gold-400 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Crown className="w-10 h-10 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-bold text-yellow-400">The Grand Maharaja</h1>
                <p className="text-red-200 text-sm">Heritage Palace Hotel</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-red-200 hover:text-yellow-400 transition-colors">Rooms</a>
              <a href="#" className="text-red-200 hover:text-yellow-400 transition-colors">Dining</a>
              <a href="#" className="text-red-200 hover:text-yellow-400 transition-colors">Experiences</a>
              <a href="#" className="text-red-200 hover:text-yellow-400 transition-colors">Events</a>
            </nav>
            <button className="bg-yellow-400 text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Palace Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
                Royal Heritage
                <span className="block text-white">Awaits You</span>
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Experience the grandeur of Rajasthani royalty in our meticulously restored 18th-century palace.
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                  Explore Rooms
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-red-900 transition-colors">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Royal Amenities</h2>
            <p className="text-xl text-gray-600">Indulge in luxury fit for royalty</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, name: 'Royal WiFi' },
              { icon: <Car className="w-8 h-8" />, name: 'Valet Parking' },
              { icon: <Coffee className="w-8 h-8" />, name: 'Palace Dining' },
              { icon: <Dumbbell className="w-8 h-8" />, name: 'Royal Spa' },
              { icon: <Waves className="w-8 h-8" />, name: 'Heritage Pool' },
              { icon: <Users className="w-8 h-8" />, name: 'Concierge' }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {amenity.icon}
                </div>
                <h3 className="font-bold text-red-900">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Royal Suites</h2>
            <p className="text-xl text-gray-600">Each room tells a story of royal heritage</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Maharaja Suite', price: '₹25,000', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { name: 'Royal Chamber', price: '₹18,000', image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800' },
              { name: 'Heritage Room', price: '₹12,000', image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800' }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-900 mb-2">{room.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-yellow-600">{room.price}</span>
                    <button className="bg-red-900 text-yellow-400 px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
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
      <footer className="bg-red-900 text-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="w-8 h-8" />
                <h3 className="text-2xl font-bold">The Grand Maharaja</h3>
              </div>
              <p className="text-red-200">Experience royal heritage in the heart of Rajasthan</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-red-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 141 234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@grandmaharaja.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>City Palace Road, Jaipur</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center">f</div>
                <div className="w-10 h-10 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center">t</div>
                <div className="w-10 h-10 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center">i</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrandMaharaja;