import React from 'react';
import { Sun, Phone, Mail, MapPin, Heart, Camera, Waves, FileLock as Cocktail, Umbrella, Music } from 'lucide-react';

const SunsetBeachResort: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Sun className="w-10 h-10 text-yellow-300" />
              <div>
                <h1 className="text-2xl font-bold">Sunset Beach Resort</h1>
                <p className="text-orange-200 text-sm">Romantic Beachfront Paradise</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Suites</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Romance</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Dining</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Weddings</a>
            </nav>
            <button className="bg-yellow-400 text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
              Book Romance
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sunset Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-pink-500/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-yellow-300">Endless</span>
                <span className="block">Sunsets</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Where every evening paints the sky in shades of love. Your romantic escape awaits.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-6 h-6" />
                  <span>Romantic Packages</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-colors">
                  Sunset Dining
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute top-20 right-20 w-16 h-16 text-pink-300/30 animate-bounce">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-32 left-16 w-12 h-12 text-yellow-300/30 animate-pulse">
          <Sun className="w-full h-full" />
        </div>
      </section>

      {/* Romantic Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Romantic Experiences</h2>
            <p className="text-xl text-gray-600">Create memories that last forever</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Camera className="w-8 h-8" />, name: 'Sunset Photography', desc: 'Professional couples shoot' },
              { icon: <Cocktail className="w-8 h-8" />, name: 'Beach Bar', desc: 'Signature sunset cocktails' },
              { icon: <Music className="w-8 h-8" />, name: 'Live Music', desc: 'Acoustic sunset sessions' },
              { icon: <Umbrella className="w-8 h-8" />, name: 'Private Cabanas', desc: 'Exclusive beach spots' }
            ].map((experience, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">{experience.name}</h3>
                <p className="text-gray-600">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suites */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Romantic Suites</h2>
            <p className="text-xl text-gray-600">Intimate spaces with breathtaking sunset views</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Honeymoon Villa', 
                price: '₹18,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Private Beach Access', 'Sunset Terrace', 'Couples Spa', 'Champagne Service']
              },
              { 
                name: 'Sunset Suite', 
                price: '₹13,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Ocean View Balcony', 'Romantic Decor', 'Beach Dining', 'Sunset Alarm']
              },
              { 
                name: 'Love Nest', 
                price: '₹10,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Cozy Interior', 'Beach Views', 'Romantic Lighting', 'Couples Activities']
              }
            ].map((suite, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={suite.image} alt={suite.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">{suite.name}</h3>
                  <div className="space-y-2 mb-6">
                    {suite.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Heart className="w-3 h-3 text-pink-400 fill-current" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-pink-500">{suite.price}</span>
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-pink-600 transition-colors">
                      Book Romance
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sunset Timer */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Today's Sunset</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Sun className="w-12 h-12 text-yellow-300" />
              <div className="text-4xl font-bold">7:32 PM</div>
            </div>
            <p className="text-lg text-orange-100 mb-4">
              Don't miss tonight's spectacular sunset from our beachfront terrace
            </p>
            <button className="bg-yellow-400 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
              Reserve Sunset Table
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="w-8 h-8 text-yellow-300" />
                <h3 className="text-2xl font-bold">Sunset Beach Resort</h3>
              </div>
              <p className="text-orange-200">Where love meets the horizon</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-orange-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 832 987 6543</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>romance@sunsetbeach.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Anjuna Beach, Goa</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Romance Packages</h4>
              <div className="space-y-1 text-orange-200 text-sm">
                <div>💕 Honeymoon Special</div>
                <div>🌅 Sunset Dinner Cruise</div>
                <div>💒 Beach Wedding Packages</div>
                <div>📸 Couples Photography</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SunsetBeachResort;