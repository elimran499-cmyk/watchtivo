import React from 'react';
import { whatsappLink } from '../data/siteData';
import { useLang } from '../i18n';
import { SwirlBackground } from './SwirlBackground';
import heroDevicesUrl from '../assets/images/wt-hero-devices.webp';

export const HeroSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-white">
      <SwirlBackground />

      <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-10 px-5 pt-10 pb-16 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="max-w-[560px]">
          <p className="mb-5 text-[15px] font-bold tracking-wide text-wt-teal">{t.hero.eyebrow}</p>

          <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[40px] lg:text-[44px]">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-[17px] leading-[1.75] text-[#222]">
            {t.hero.bodyStart}
            <a href="#voordelen" className="wt-link">
              {t.hero.linkChannels}
            </a>
            {t.hero.bodyMiddle}
            <a href="#prijzen" className="wt-link">
              {t.hero.linkTrial}
            </a>
          </p>

          <a
            href={whatsappLink(t.whatsapp.trial)}
            target="_blank"
            rel="noopener noreferrer"
            className="wt-btn mt-9"
          >
            {t.hero.cta}
          </a>
        </div>

        <div className="relative">
          <img
            src={heroDevicesUrl}
            alt={t.hero.imageAlt}
            className="mx-auto w-full max-w-[620px]"
          />
        </div>
      </div>
    </section>
  );
};
