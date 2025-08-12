import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { name: 'Web Design', href: '#services' },
      { name: 'Booking Engine', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
      { name: 'Web Redesign', href: '#services' },
      { name: 'Hotel PMS', href: '#services' },
      { name: 'Analytics', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#about' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Templates', href: '#templates' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A2463] to-[#0A2463]/90 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#5FBDB0] rounded-lg flex items-center justify-center">
                <span className="text-[#0A2463] font-bold text-lg">ST</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">StayTech</h3>
                <p className="text-xs text-blue-200">Hospitality Solutions</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering hotels with technology-driven solutions. No upfront payment, 
              fully built templates, and complete digital transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-blue-100">
                  CLC Tower, Sector 44, Gurugram
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-blue-100">+91 9310495471</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-blue-100">info@staytech.com</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Stay Connected</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-blue-100 text-sm mb-4">
                Get the latest updates on hotel technology trends.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50"
                />
                <button className="bg-[#FFD700] text-[#0A2463] px-4 py-2 rounded-r-lg hover:bg-[#FFD700]/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-blue-100 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0A2463] transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              © 2024 StayTech Hospitality Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD700] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD700] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-[#0A2463]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;