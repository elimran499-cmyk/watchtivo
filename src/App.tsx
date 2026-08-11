import React from 'react';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AppsCarousel } from './components/AppsCarousel';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { StepsSection } from './components/StepsSection';
import { SportsSection } from './components/SportsSection';
import { TrustpilotSection } from './components/TrustpilotSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ChatBubble, LanguageSwitcher } from './components/FloatingWidgets';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-[#222]">
        <Navbar />

        <main>
          <HeroSection />
          <AppsCarousel />
          <FeaturesSection />
          <PricingSection />
          <StepsSection />
          <SportsSection />
          <TrustpilotSection />
          <FaqSection />
        </main>

        <Footer />

        <ChatBubble />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}
