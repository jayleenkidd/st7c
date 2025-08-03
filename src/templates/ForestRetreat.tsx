import React from 'react';
import { TreePine, Phone, Mail, MapPin, Leaf, Bird, Mountain, Sun, Wind, Droplets } from 'lucide-react';

const ForestRetreat: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <TreePine className="w-10 h-10 text-green-300" />
              <div>
                <h1 className="text-2xl font-bold">Forest Retreat</h1>
                <p className="text-green-200 text-sm">Eco Wellness Resort</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-green-200 hover:text-white transition-colors">Cabins</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Wellness</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Activities</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Sustainability</a>
            </nav>
            <button className="bg-amber-400 text-green-900 px-6 py-2 rounded-full font-bold hover:bg-amber-300 transition-colors">
              Book Retreat
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Forest Cabin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-green-300">Reconnect</span> with
                <span className="block">Nature</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Sustainable luxury in the heart of pristine wilderness. Carbon-neutral accommodations for conscious travelers.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-amber-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition-colors flex items-center justify-center space-x-2">
                  <Leaf className="w-6 h-6" />
                  <span>Explore Cabins</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-900 transition-colors">
                  Wellness Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Sustainable Experiences</h2>
            <p className="text-xl text-gray-600">Harmony with nature in every detail</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8" />, name: 'Carbon Neutral', desc: 'Zero emission stay' },
              { icon: <Bird className="w-8 h-8" />, name: 'Wildlife Sanctuary', desc: 'Protected habitat' },
              { icon: <Mountain className="w-8 h-8" />, name: 'Hiking Trails', desc: 'Guided nature walks' },
              { icon: <Droplets className="w-8 h-8" />, name: 'Natural Springs', desc: 'Pure mountain water' }
            ].map((feature, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Eco Cabins</h2>
            <p className="text-xl text-gray-600">Sustainable luxury in pristine nature</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Treetop Villa', 
                price: '₹14,000', 
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Canopy Views', 'Solar Powered', 'Organic Breakfast', 'Bird Watching Deck']
              },
              { 
                name: 'Forest Lodge', 
                price: '₹10,000', 
                image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Fireplace', 'Hiking Access', 'Organic Garden', 'Meditation Space']
              },
              { 
                name: 'Riverside Cabin', 
                price: '₹8,000', 
                image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
                features: ['Stream Views', 'Eco Materials', 'Nature Sounds', 'Yoga Platform']
              }
            ].map((cabin, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={cabin.image} alt={cabin.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">{cabin.name}</h3>
                  <div className="space-y-2 mb-6">
                    {cabin.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-green-600">{cabin.price}</span>
                    <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-green-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Stats */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Our Environmental Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Renewable Energy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Species Protected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-green-100">Waste to Landfill</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <TreePine className="w-8 h-8 text-green-300" />
                <h3 className="text-2xl font-bold">Forest Retreat</h3>
              </div>
              <p className="text-green-200">Sustainable luxury in harmony with nature</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-green-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 177 234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>stay@forestretreat.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Manali, Himachal Pradesh</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Certifications</h4>
              <div className="space-y-1 text-green-200 text-sm">
                <div>🌿 LEED Platinum Certified</div>
                <div>🦋 Wildlife Conservation Partner</div>
                <div>♻️ Zero Waste Facility</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForestRetreat;