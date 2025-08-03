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

  // Scroll to top when service changes
  useEffect(() => {
    if (activeService) {
      // Use setTimeout to ensure the component has rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, [activeService]);

  // Additional scroll to top when component mounts with a service
  useEffect(() => {
    if (activeService) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

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
        return <WebDesignService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
      case 'booking-engine':
        return <BookingEngineService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
      case 'seo-optimization':
        return <SEOService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
      case 'web-redesign':
        return <WebRedesignService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
      case 'hotel-pms':
        return <HotelPMSService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
      case 'analytics':
        return <AnalyticsService onBack={() => setActiveService(null)} onServiceSelect={(serviceId) => setActiveService(serviceId)} />;
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
      <ServicesOverview onServiceSelect={setActiveService} />
      <TemplateShowcase />
      <DashboardShowcase />
      <PricingSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;