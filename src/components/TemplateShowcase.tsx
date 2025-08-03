import React, { useState } from 'react';
import { ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react';
import GrandMaharaja from '../templates/GrandMaharaja';
import MinimalistHaven from '../templates/MinimalistHaven';
import ParadiseShores from '../templates/ParadiseShores';
import MetroBusinessHub from '../templates/MetroBusinessHub';
import VictorianElegance from '../templates/VictorianElegance';
import ForestRetreat from '../templates/ForestRetreat';
import SunsetBeachResort from '../templates/SunsetBeachResort';
import AlpineLodge from '../templates/AlpineLodge';
import DesertOasis from '../templates/DesertOasis';
import LuxuryPenthouse from '../templates/LuxuryPenthouse';
import CoastalBreeze from '../templates/CoastalBreeze';
import SmartCityHotel from '../templates/SmartCityHotel';

const TemplateShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'luxury', name: 'Luxury Hotels' },
    { id: 'boutique', name: 'Boutique Hotels' },
    { id: 'resort', name: 'Resorts' },
    { id: 'budget', name: 'Budget Hotels' }
  ];

  const templates = [
    {
      id: 1,
      name: 'The Grand Maharaja',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Opulent palace-inspired design with rich burgundy and gold accents, perfect for heritage luxury hotels',
      features: ['Royal Heritage Theme', 'Concierge Services Portal', 'Virtual Palace Tours', 'Multi-currency Booking'],
      colors: ['#8B0000', '#FFD700', '#2F1B14'],
      style: 'Classic Luxury with ornate details and regal typography'
    },
    {
      id: 2,
      name: 'Minimalist Haven',
      category: 'boutique',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean, minimalist design with white space and subtle animations for modern boutique hotels',
      features: ['Minimalist UI/UX', 'Instagram Feed Integration', 'Artist Collaboration Gallery', 'Local Culture Guide'],
      colors: ['#FFFFFF', '#2C2C2C', '#E8E8E8'],
      style: 'Ultra-modern minimalism with geometric elements'
    },
    {
      id: 3,
      name: 'Paradise Shores',
      category: 'resort',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vibrant tropical design with coral and turquoise themes, featuring immersive beach resort experience',
      features: ['Activity Booking System', 'Live Weather Widget', 'Beach Cam Integration', 'Water Sports Scheduler'],
      colors: ['#FF7F7F', '#40E0D0', '#FFE4B5'],
      style: 'Tropical paradise with flowing layouts and beach-inspired elements'
    },
    {
      id: 4,
      name: 'Metro Business Hub',
      category: 'budget',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional, efficient design with corporate blue and gray palette for business travelers',
      features: ['Express Check-in/out', 'Business Center Portal', 'Meeting Room Booking', 'Corporate Rates'],
      colors: ['#1E3A8A', '#6B7280', '#F3F4F6'],
      style: 'Corporate efficiency with clean lines and professional aesthetics'
    },
    {
      id: 5,
      name: 'Victorian Elegance',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Victorian-era inspired design with deep emerald and cream colors, perfect for historic properties',
      features: ['Historical Timeline', 'Vintage Photo Gallery', 'Tea Service Booking', 'Heritage Tours'],
      colors: ['#006A4E', '#F5F5DC', '#8B4513'],
      style: 'Victorian elegance with ornate borders and classic serif fonts'
    },
    {
      id: 6,
      name: 'Forest Retreat',
      category: 'boutique',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Earth-toned eco-friendly design with natural textures and sustainability focus',
      features: ['Carbon Footprint Tracker', 'Wildlife Spotting Guide', 'Organic Menu Display', 'Eco-Activity Booking'],
      colors: ['#228B22', '#8FBC8F', '#F5F5DC'],
      style: 'Natural organic design with wood textures and earth tones'
    },
    {
      id: 7,
      name: 'Sunset Beach Resort',
      category: 'resort',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm sunset-inspired design with orange and pink gradients for beachfront resorts',
      features: ['Sunset Timer Widget', 'Beach Activity Calendar', 'Tide Information', 'Romantic Dinner Booking'],
      colors: ['#FF6347', '#FFB6C1', '#FFA500'],
      style: 'Romantic beachfront with gradient overlays and flowing typography'
    },
    {
      id: 8,
      name: 'Alpine Lodge',
      category: 'boutique',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mountain-inspired design with deep blues and whites, perfect for ski resorts and mountain retreats',
      features: ['Ski Conditions Widget', 'Mountain Weather', 'Equipment Rental', 'Trail Maps Integration'],
      colors: ['#1E3A8A', '#FFFFFF', '#6B7280'],
      style: 'Mountain adventure with snow-inspired elements and bold typography'
    },
    {
      id: 9,
      name: 'Desert Oasis',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm desert-themed design with sand and terracotta colors for luxury desert resorts',
      features: ['Stargazing Schedule', 'Desert Safari Booking', 'Camel Ride Reservations', 'Astronomy Guide'],
      colors: ['#D2691E', '#F4A460', '#8B4513'],
      style: 'Desert luxury with warm earth tones and Arabian-inspired elements'
    },
    {
      id: 10,
      name: 'Smart City Hotel',
      category: 'budget',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tech-forward design with neon accents and dark theme for modern urban hotels',
      features: ['Smart Room Controls', 'Digital Concierge', 'Mobile Key Access', 'IoT Integration'],
      colors: ['#1F2937', '#10B981', '#3B82F6'],
      style: 'Futuristic tech with neon accents and sleek interfaces'
    },
    {
      id: 11,
      name: 'Coastal Breeze',
      category: 'boutique',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Light and airy coastal design with seafoam greens and ocean blues for seaside properties',
      features: ['Ocean View Cam', 'Fishing Charter Booking', 'Lighthouse Tours', 'Seafood Menu Highlights'],
      colors: ['#20B2AA', '#87CEEB', '#F0F8FF'],
      style: 'Coastal charm with wave-inspired layouts and nautical elements'
    },
    {
      id: 12,
      name: 'Luxury Penthouse',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ultra-modern luxury design with black and gold accents for high-end urban properties',
      features: ['Helicopter Transfer Booking', 'Private Chef Services', 'Luxury Car Rental', 'VIP Concierge'],
      colors: ['#000000', '#FFD700', '#C0C0C0'],
      style: 'Ultra-luxury with metallic accents and premium typography'
    }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  const renderTemplate = (templateId: string) => {
    switch (templateId) {
      case 'grand-maharaja':
        return <GrandMaharaja />;
      case 'minimalist-haven':
        return <MinimalistHaven />;
      case 'paradise-shores':
        return <ParadiseShores />;
      case 'metro-business-hub':
        return <MetroBusinessHub />;
      case 'victorian-elegance':
        return <VictorianElegance />;
      case 'forest-retreat':
        return <ForestRetreat />;
      case 'sunset-beach-resort':
        return <SunsetBeachResort />;
      case 'alpine-lodge':
        return <AlpineLodge />;
      case 'desert-oasis':
        return <DesertOasis />;
      case 'luxury-penthouse':
        return <LuxuryPenthouse />;
      case 'coastal-breeze':
        return <CoastalBreeze />;
      case 'smart-city-hotel':
        return <SmartCityHotel />;
      default:
        return null;
    }
  };

  if (selectedTemplate) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
          <h2 className="text-xl font-bold">Live Template Preview</h2>
          <button
            onClick={() => setSelectedTemplate(null)}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
        <div className="h-full overflow-auto">
          {renderTemplate(selectedTemplate)}
        </div>
      </div>
    );
  }

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Choose Your Perfect Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our collection of fully-built hotel websites. Each template is completely functional 
            and ready to customize for your property.
          </p>
          
          {/* Device Preview Toggle */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
            {[
              { id: 'desktop', icon: <Monitor className="w-4 h-4" />, name: 'Desktop' },
              { id: 'tablet', icon: <Tablet className="w-4 h-4" />, name: 'Tablet' },
              { id: 'mobile', icon: <Smartphone className="w-4 h-4" />, name: 'Mobile' }
            ].map((device) => (
              <button
                key={device.id}
                onClick={() => setPreviewDevice(device.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  previewDevice === device.id
                    ? 'bg-[#0A2463] text-white'
                    : 'text-gray-600 hover:text-[#0A2463]'
                }`}
              >
                {device.icon}
                <span className="text-sm font-medium">{device.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#0A2463] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Template Preview */}
              <div className="relative overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-[#0A2463] hover:bg-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">
                  {template.name}
                </h3>
                
                {/* Color Palette */}
                <div className="flex space-x-2 mb-3">
                  {template.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                {/* Style Description */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 font-medium">Design Style:</p>
                  <p className="text-sm text-gray-700">{template.style}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => {
                      const templateMap: { [key: number]: string } = {
                        1: 'grand-maharaja',
                        2: 'minimalist-haven',
                        3: 'paradise-shores',
                        4: 'metro-business-hub',
                        5: 'victorian-elegance',
                        6: 'forest-retreat',
                        7: 'sunset-beach-resort',
                        8: 'alpine-lodge',
                        9: 'desert-oasis',
                        10: 'smart-city-hotel',
                        11: 'coastal-breeze',
                        12: 'luxury-penthouse'
                      };
                      setSelectedTemplate(templateMap[template.id] || null);
                    }}
                    className="flex-1 bg-[#0A2463] text-white py-3 px-4 rounded-lg hover:bg-[#0A2463]/90 transition-colors font-medium"
                  >
                    Live Demo
                  </button>
                  <button 
                    onClick={() => {
                      const templateMap: { [key: number]: string } = {
                        1: 'grand-maharaja',
                        2: 'minimalist-haven',
                        3: 'paradise-shores',
                        4: 'metro-business-hub',
                        5: 'victorian-elegance',
                        6: 'forest-retreat',
                        7: 'sunset-beach-resort',
                        8: 'alpine-lodge',
                        9: 'desert-oasis',
                        10: 'smart-city-hotel',
                        11: 'coastal-breeze',
                        12: 'luxury-penthouse'
                      };
                      setSelectedTemplate(templateMap[template.id] || null);
                    }}
                    className="px-4 py-3 border border-[#0A2463] text-[#0A2463] rounded-lg hover:bg-[#0A2463] hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Need Something Completely Custom?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Our design team can create a completely unique website tailored specifically to your hotel's brand, 
              location, and target audience. Every element crafted from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 text-center">
                Request Custom Design
              </a>
              <a href="#contact" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-center">
                Schedule Design Consultation
              </a>
            </div>
            
            {/* Custom Design Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div>
                <h4 className="font-bold mb-2">Brand-Specific Design</h4>
                <p className="text-blue-100 text-sm">
                  Colors, fonts, and layouts that match your hotel's unique identity
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location-Inspired</h4>
                <p className="text-blue-100 text-sm">
                  Design elements that reflect your destination's culture and attractions
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Target Audience Focus</h4>
                <p className="text-blue-100 text-sm">
                  Optimized for your specific guest demographics and booking patterns
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Template Statistics */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
              Template Performance Stats
            </h3>
            <p className="text-gray-600">
              Real results from hotels using our template designs
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2">47%</div>
              <div className="text-sm text-gray-600">Average increase in direct bookings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2">2.3s</div>
              <div className="text-sm text-gray-600">Average page load time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2">94%</div>
              <div className="text-sm text-gray-600">Mobile performance score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2">8.2/10</div>
              <div className="text-sm text-gray-600">Average guest satisfaction rating</div>
            </div>
          </div>
        </div>
        
        {/* Template Customization Options */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
              Every Template is Fully Customizable
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose any template as your starting point, then customize every element to match your brand perfectly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A2463] mb-2 font-poppins">Colors & Branding</h4>
              <p className="text-gray-600 text-sm">
                Adjust colors, fonts, logos, and all visual elements to match your hotel's brand identity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5FBDB0] to-[#FFD700] rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A2463] mb-2 font-poppins">Content & Copy</h4>
              <p className="text-gray-600 text-sm">
                Replace all text, images, and content with your hotel's information, photos, and messaging.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#0A2463] rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A2463] mb-2 font-poppins">Features & Layout</h4>
              <p className="text-gray-600 text-sm">
                Add, remove, or modify sections and features to perfectly suit your hotel's specific needs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Popular Template Categories */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
              Most Popular by Hotel Type
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#0A2463] mb-2">Luxury Hotels</h4>
              <p className="text-sm text-gray-600 mb-3">The Grand Maharaja, Victorian Elegance</p>
              <div className="text-xs text-[#5FBDB0] font-medium">85% choose luxury templates</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#0A2463] mb-2">Beach Resorts</h4>
              <p className="text-sm text-gray-600 mb-3">Paradise Shores, Sunset Beach</p>
              <div className="text-xs text-[#5FBDB0] font-medium">92% choose tropical designs</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#0A2463] mb-2">Boutique Hotels</h4>
              <p className="text-sm text-gray-600 mb-3">Minimalist Haven, Forest Retreat</p>
              <div className="text-xs text-[#5FBDB0] font-medium">78% prefer minimalist styles</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#0A2463] mb-2">Business Hotels</h4>
              <p className="text-sm text-gray-600 mb-3">Metro Business Hub, Smart City</p>
              <div className="text-xs text-[#5FBDB0] font-medium">89% choose professional themes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;