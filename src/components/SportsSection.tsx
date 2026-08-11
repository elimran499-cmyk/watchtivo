import React from 'react';
import { whatsappLink } from '../data/siteData';
import { useLang } from '../i18n';
import guideUrl from '../assets/images/wt-sports-guide.png';
import guideSmallUrl from '../assets/images/wt-sports-guide-300.png';

export const SportsSection: React.FC = () => {
  const { t } = useLang();
  const s = t.sport;

  return (
    <section id="sport" className="relative bg-white py-16">
      <div className="relative z-10 mx-auto grid max-w-[1080px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="shadow-[0_6px_30px_rgba(0,0,0,0.12)]">
          <img
            src={guideUrl}
            srcSet={`${guideUrl} 500w, ${guideSmallUrl} 300w`}
            sizes="(max-width: 1024px) 90vw, 500px"
            alt={s.imageAlt}
            className="w-full"
          />
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-wide text-wt-teal">{s.eyebrow}</p>

          <h2 className="mt-3 text-[21px] font-bold leading-snug sm:text-[24px]">{s.heading}</h2>

          <div className="mt-5 space-y-5 text-[13px] leading-[1.8] text-[#222]">
            <p>
              {s.p1Start}
              <a href="#prijzen" className="wt-link">
                {s.p1Link}
              </a>
              {s.p1End}
            </p>

            <p>{s.p2}</p>

            <p>
              {s.p3Start}
              <a href="#prijzen" className="wt-link">
                {s.p3Link}
              </a>
              {s.p3End}
            </p>
          </div>

          <a
            href={whatsappLink(t.whatsapp.trial)}
            target="_blank"
            rel="noopener noreferrer"
            className="wt-btn mt-8"
          >
            {s.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
