import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Gupta',
      position: 'Owner, Heritage Palace Hotel',
      location: 'Jaipur, Rajasthan',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'StayTech completely transformed our online presence. Having a dedicated project manager made all the difference. The no-advance payment policy gave us complete confidence, and our direct bookings increased by 40% within 3 months!',
      results: '40% increase in direct bookings'
    },
    {
      name: 'Priya Menon',
      position: 'General Manager, Coastal Resort',
      location: 'Goa',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'The team understood our boutique resort perfectly. They presented multiple design concepts and made unlimited revisions until we were completely satisfied. The website reflects our brand beautifully and the booking engine works seamlessly.',
      results: 'Seamless booking experience'
    },
    {
      name: 'Amit Kumar',
      position: 'Director, Urban Hotel Chain',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Professional service from start to finish with consistent quality and punctuality. They delivered exactly what they promised, and the flexible monthly subscription with no lock-in period was perfect for us.',
      results: 'Saved thousands in monthly fees'
    },
    {
      name: 'Sneha Patel',
      position: 'Owner, Mountain Retreat',
      location: 'Shimla, Himachal Pradesh',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Being able to see our complete website before payment was amazing. The dedicated project manager guided us through every step. The design perfectly captures the essence of our mountain retreat and guest feedback has been exceptional.',
      results: 'Exceptional guest feedback'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what hotel owners across India say about our services.
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">5.0 Average Rating</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">50+ Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#FFD700]/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                📈 {testimonial.results}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h4 className="font-bold text-[#0A2463] text-lg font-poppins">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#5FBDB0] font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#0A2463] mb-8 font-poppins">
            Trusted by Hotels Across India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              'Heritage Hotels',
              'Boutique Resorts',
              'Business Hotels',
              'Luxury Properties'
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="font-medium text-gray-600">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you transform your hotel's digital presence and increase your direct bookings.
            </p>
            <button className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;