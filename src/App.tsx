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
import SmartDesignOptions from './components/SmartDesignOptions';
import FlexiblePlansSection from './components/FlexiblePlansSection';
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
      // Force immediate scroll to top
      window.scrollTo(0, 0);
      // Also use setTimeout as backup
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
      // Additional backup with longer delay
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [activeService]);

  // Force scroll to top when switching between services
  useEffect(() => {
    // Always scroll to top when activeService changes
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeService]);

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
      <div key={activeService} className="min-h-screen">
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
      <SmartDesignOptions />
      <TemplateShowcase />
      <DashboardShowcase />
      <FlexiblePlansSection />
      <PricingSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;