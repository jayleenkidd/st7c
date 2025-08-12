import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    hotelName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Office',
      details: ['2nd Floor, CLC Tower', 'Sector 44, Gurugram', 'Haryana 122003']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 9310495471', '+91 9205402295']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@staytech.com', 'support@staytech.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ];

  const services = [
    'Web Design',
    'Booking Engine',
    'SEO Optimization',
    'Web Redesign',
    'Hotel PMS',
    'Complete Package'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your hotel's digital presence? Let's discuss your project with no commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-6 font-poppins">
              Tell Us About Your Hotel
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-2">
                    Hotel Name *
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    name="hotelName"
                    required
                    value={formData.hotelName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors"
                    placeholder="Enter your hotel name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  How Can We Help? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us More About Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463]/20 focus:border-[#0A2463] transition-colors resize-none"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              We'll respond within 2 hours during business hours
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2463] mb-2 font-poppins">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-[#0A2463]/10 to-[#5FBDB0]/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#0A2463] mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    2nd Floor, CLC Tower, Gurugram
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4 font-poppins">
                Prefer to Talk Directly?
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+919310495471"
                  className="flex items-center space-x-3 hover:text-[#FFD700] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call us at +91 9310495471</span>
                </a>
                <a
                  href="mailto:info@staytech.com"
                  className="flex items-center space-x-3 hover:text-[#FFD700] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email us at info@staytech.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-700 font-medium">
              Live chat available • Average response time: 2 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;