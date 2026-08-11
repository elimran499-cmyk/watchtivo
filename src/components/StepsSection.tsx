import React from 'react';
import { ShoppingCart, Mail, Monitor } from 'lucide-react';
import { STEP_ICONS, StepIcon } from '../data/siteData';
import { useLang } from '../i18n';

const ICONS: Record<StepIcon, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  cart: ShoppingCart,
  mail: Mail,
  monitor: Monitor,
};

export const StepsSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="stappen" className="relative bg-white py-16">
      <div className="relative z-10 mx-auto max-w-[1000px] px-5 lg:px-8">
        <h2 className="text-center text-[19px] font-bold sm:text-[21px]">{t.stepsHeading}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.steps.map((step, i) => {
            const Icon = ICONS[STEP_ICONS[i]];
            return (
              <article key={step.title} className="wt-card px-6 py-8 text-center">
                <Icon className="mx-auto h-9 w-9 text-wt-teal" strokeWidth={2.2} />
                <h3 className="mt-5 text-[15px] font-bold">{step.title}</h3>
                <p className="mt-4 text-[12.5px] leading-[1.75] text-[#222]">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
