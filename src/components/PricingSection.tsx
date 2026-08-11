import React from 'react';
import {
  Tv,
  Film,
  Gem,
  Captions,
  ShieldCheck,
  Undo2,
  Zap,
  Trophy,
  LayoutGrid,
} from 'lucide-react';
import { PLAN_SPECS, FAMILY_PLAN_SPECS, PlanSpec, whatsappLink } from '../data/siteData';
import { useLang } from '../i18n';

/** One glyph per feature row, in the same order as `content.pricing.features`. */
const FEATURE_ICONS = [Tv, Film, Gem, Captions, ShieldCheck, Undo2, Zap];

const PlanCard: React.FC<{ plan: PlanSpec }> = ({ plan }) => {
  const { t } = useLang();
  const p = t.pricing;

  const name = p.planNames[plan.id] ?? plan.id;
  const features = plan.sport ? [...p.features, p.sportFeature] : p.features;
  const seats = plan.seats === 'duo' ? p.seatsDuo : plan.seats === 'trio' ? p.seatsTrio : null;

  return (
    <div className={`wt-price-outer ${plan.featured ? 'wt-price-outer--featured' : ''}`}>
      <div className="wt-price-card px-6 py-8">
        {plan.discount && (
          <div className="wt-ribbon">
            <span>{plan.discount}</span>
          </div>
        )}

        <h2 className="text-center text-[19px] font-bold">{name}</h2>

        <p className="mt-4 text-center text-[36px] font-bold leading-none text-wt-teal">
          {plan.price}
        </p>

        <ul className="mt-7">
          {seats && (
            <li className="wt-price-feature flex items-center justify-center gap-2 py-[9px] text-center text-[12px] text-[#222]">
              <LayoutGrid className="h-[15px] w-[15px] shrink-0" />
              <span>{seats}</span>
            </li>
          )}

          {features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i] ?? Trophy;
            return (
              <li
                key={feature}
                className="wt-price-feature flex items-center justify-center gap-2 py-[9px] text-center text-[12px] text-[#222]"
              >
                <Icon className="h-[15px] w-[15px] shrink-0" />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <a
          href={whatsappLink(t.whatsapp.plan(name, plan.price))}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 block w-full rounded-[4px] py-[11px] text-center text-[13px] font-semibold tracking-wide text-white transition-colors ${
            plan.featured ? 'bg-[#16a34a] hover:bg-[#15803d]' : 'bg-[#0d9488] hover:bg-[#0f766e]'
          }`}
        >
          {p.orderCta}
        </a>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section id="prijzen" className="relative bg-white py-16">
      <div className="relative z-10 mx-auto max-w-[1080px] px-5 lg:px-8">
        <p className="text-center text-[13px] font-bold tracking-wide text-wt-teal">{p.eyebrow}</p>

        <h2 className="mt-3 text-center text-[24px] font-bold sm:text-[26px]">{p.heading}</h2>

        <p className="mx-auto mt-4 max-w-[760px] text-center text-[14px] leading-[1.7] text-[#222]">
          {p.sub}
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PLAN_SPECS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <h2 className="mt-20 text-center text-[24px] font-bold">{p.familyHeading}</h2>

        <p className="mx-auto mt-4 max-w-[760px] text-center text-[14px] leading-[1.7] text-[#222]">
          🎉 <strong className="font-bold">{p.familySubBold}</strong>
          {p.familySub}🎉
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {FAMILY_PLAN_SPECS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
