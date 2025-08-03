import React from 'react';
import { useState, useEffect } from 'react';
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
import WebDesignService from './pages/WebDesignService';
import BookingEngineService from './pages/BookingEngineService';
import SEOService from './pages/SEOService';
import WebRedesignService from './pages/WebRedesignService';
import HotelPMSService from './pages/HotelPMSService';
import AnalyticsService from './pages/AnalyticsService';

function App() {
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const handleServiceNavigation = (event: CustomEvent) => {
      const serviceId = event.detail.serviceId;
      // Map service names to IDs
      const serviceMap: { [key: string]: string } = {
        'web-design': 'web-design',
        'booking-engine': 'booking-engine',
        'seo-optimization': 'seo-optimization',
        'web-redesign': 'web-redesign',
        'hotel-pms': 'hotel-pms',
        'analytics': 'analytics'
      };
      
      if (serviceMap[serviceId]) {
        setActiveService(serviceMap[serviceId]);
      }
    };

    window.addEventListener('navigateToService', handleServiceNavigation as EventListener);
    return () => {
      window.removeEventListener('navigateToService', handleServiceNavigation as EventListener);
    };
  }, []);

  const renderServicePage = () => {
    switch (activeService) {
      case 'web-design':
        return <WebDesignService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      case 'booking-engine':
        return <BookingEngineService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      case 'seo-optimization':
        return <SEOService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      case 'web-redesign':
        return <WebRedesignService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      case 'hotel-pms':
        return <HotelPMSService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      case 'analytics':
        return <AnalyticsService onBack={() => setActiveService(null)} onServiceSelect={setActiveService} />;
      default:
        return null;
    }
  };

  if (activeService) {
    return (
      <div className="min-h-screen">
        {renderServicePage()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <USPSection />
      <TemplateShowcase />
      <DashboardShowcase />
      <ServicesOverview onServiceSelect={setActiveService} />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;