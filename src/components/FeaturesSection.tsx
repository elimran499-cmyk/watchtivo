import React from 'react';
import { Globe, Flag, Play, Headset } from 'lucide-react';
import { BENEFIT_ICONS, BenefitIcon } from '../data/siteData';
import { useLang } from '../i18n';

const ICONS: Record<BenefitIcon, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  flag: Flag,
  play: Play,
  headset: Headset,
};

export const FeaturesSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="voordelen" className="relative bg-white pb-20">
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 lg:px-8">
        <h2 className="mx-auto max-w-[900px] text-center text-[24px] font-bold leading-snug sm:text-[28px]">
          {t.benefitsHeading}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.map((benefit, i) => {
            const Icon = ICONS[BENEFIT_ICONS[i]];
            return (
              <article key={benefit.title} className="wt-card px-7 py-10 text-center">
                <Icon className="mx-auto h-11 w-11 text-wt-teal" />
                <h3 className="mt-6 text-[20px] font-bold leading-snug">{benefit.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.75] text-[#222]">{benefit.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
