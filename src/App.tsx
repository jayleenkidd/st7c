import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import USPSection from './components/USPSection';
import TemplateShowcase from './components/TemplateShowcase';
import DashboardShowcase from './components/DashboardShowcase';
import ServicesOverview from './components/ServicesOverview';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <USPSection />
      <TemplateShowcase />
      <DashboardShowcase />
      <ServicesOverview />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;