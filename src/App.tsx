import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimationProvider } from './context/AnimationContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HomePage } from './pages/HomePage';
import { type ServiceItem } from './data/servicesData';

// Route-based code splitting for secondary pages to reduce initial bundle
// Warm up routes as soon as the visitor shows intent to navigate.
const routeImporters: Record<string, () => Promise<unknown>> = {
  '/servicos': () => import('./pages/ServicesPage'),
  '/resultados': () => import('./pages/ResultsPage'),
  '/sobre': () => import('./pages/AboutPage'),
  '/contato': () => import('./pages/ContactPage'),
  '/privacidade': () => import('./pages/PrivacyPage'),
};
const prefetchedRoutes = new Set<string>();
const preloadRoute = (path: string) => {
  if (prefetchedRoutes.has(path) || !routeImporters[path]) return;
  prefetchedRoutes.add(path);
  void routeImporters[path]().catch(() => prefetchedRoutes.delete(path));
};

const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ResultsPage = lazy(() => import('./pages/ResultsPage').then((m) => ({ default: m.ResultsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [selectedContactServiceId, setSelectedContactServiceId] = useState<string | undefined>(undefined);

  // Sync browser URL with popstate (back/forward history)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically per route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'ELVANO Agency | Presença Digital, Design & Gestão de Anúncios',
      '/servicos': 'Catálogo de Serviços | ELVANO Agency',
      '/resultados': 'Resultados e Experiência | ELVANO Agency',
      '/sobre': 'Sobre a ELVANO | Guilherme Lousada Loureiro',
      '/contato': 'Contato Comercial | ELVANO Agency',
      '/privacidade': 'Privacidade & Dados | ELVANO Agency',
    };

    document.title = titles[currentPath] || 'ELVANO Agency';
  }, [currentPath]);

  const navigateTo = (path: string, options?: { serviceId?: string }) => {
    if (options?.serviceId) {
      setSelectedContactServiceId(options.serviceId);
    }
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
    preloadRoute(path);
    setActiveModalService(null);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleOpenDetails = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const handleCloseDetails = () => {
    setActiveModalService(null);
  };

  const handleSelectServiceForContact = (serviceId: string) => {
    handleCloseDetails();
    navigateTo('/contato', { serviceId });
  };

  // Route resolver
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenDetails={handleOpenDetails}
          />
        );
      case '/servicos':
        return <ServicesPage onOpenDetails={handleOpenDetails} />;
      case '/resultados':
        return <ResultsPage />;
      case '/sobre':
        return <AboutPage />;
      case '/contato':
        return <ContactPage initialServiceId={selectedContactServiceId} />;
      case '/privacidade':
        return <PrivacyPage />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <AnimationProvider>
      <div className="relative min-h-screen bg-[#141311] text-[#F5F3F0] flex flex-col selection:bg-[#E3C8B2]/20 selection:text-[#F0D8C4]">
        {/* Global animated background on ALL routes */}
        <AnimatedBackground />

        {/* Global fixed top navigation */}
        <Header currentPath={currentPath} onNavigate={navigateTo} onPreload={preloadRoute} />

        {/* Main route content with lazy-route fallback */}
        <main className="flex-1 w-full" id="main-content">
          <Suspense
            fallback={
              <div className="min-h-[50vh] flex items-center justify-center" aria-label="Carregando conteúdo">
                <div className="w-8 h-8 rounded-full border-2 border-[#E3C8B2]/20 border-t-[#E3C8B2] animate-spin" />
              </div>
            }
          >
            {renderCurrentPage()}
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Persistent Floating WhatsApp button */}
        <FloatingWhatsApp />

        {/* Accessible Service Detail Modal (Layer z-[100] above header & floating button) */}
        <ServiceDetailModal
          service={activeModalService}
          onClose={handleCloseDetails}
          onSelectForContact={handleSelectServiceForContact}
        />
      </div>
    </AnimationProvider>
  );
}
