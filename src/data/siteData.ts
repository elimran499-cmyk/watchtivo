/**
 * Language-independent site data: prices, images, links and section ids.
 * All translatable copy lives in ./content.ts.
 */

import badgeSmarters from '../assets/images/wt-badge-smarters.png';
import badgeFireTv from '../assets/images/wt-badge-firetv.png';
import badgeAndroidTv from '../assets/images/wt-badge-androidtv.png';
import badgeTiviMate from '../assets/images/wt-badge-tivimate.png';
import badge10 from '../assets/images/wt-badge-10.png';
import badgeNvidia from '../assets/images/wt-badge-nvidia.png';
import badge7 from '../assets/images/wt-badge-7.png';
import badge9 from '../assets/images/wt-badge-9.png';

/* WhatsApp ------------------------------------------------------------- */

/** Sales/support number shown to customers. */
export const WHATSAPP_NUMBER = '+44 7414 662070';

/** Same number in the digits-only form wa.me expects. */
const WHATSAPP_DIGITS = '447414662070';

/** Builds a wa.me deep link with a pre-filled message. */
export const whatsappLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;

/* Navigation ------------------------------------------------------------ */

/** Keys match `content.nav`; every href points at a section that exists. */
export const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'voordelen', href: '#voordelen' },
  { key: 'prijzen', href: '#prijzen' },
  { key: 'stappen', href: '#stappen' },
  { key: 'sport', href: '#sport' },
  { key: 'faq', href: '#faq' },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]['key'];

/* App / device badges in the carousel under the hero --------------------- */

export interface AppBadge {
  id: string;
  src: string;
  alt: string;
}

export const APP_BADGES: AppBadge[] = [
  { id: 'smarters', src: badgeSmarters, alt: 'IPTV Smarters' },
  { id: 'b3', src: badgeFireTv, alt: 'Amazon Fire TV' },
  { id: 'b2', src: badgeAndroidTv, alt: 'Android TV' },
  { id: 'tivimate', src: badgeTiviMate, alt: 'TiviMate' },
  { id: 'b10', src: badge10, alt: 'IPTV' },
  { id: 'nvidia', src: badgeNvidia, alt: 'NVIDIA Shield' },
  { id: 'b7', src: badge7, alt: 'IPTV' },
  { id: 'b9', src: badge9, alt: 'IPTV' },
];

/* Benefits / steps — icons only; titles and copy come from content ------- */

export const BENEFIT_ICONS = ['globe', 'flag', 'play', 'headset'] as const;
export type BenefitIcon = (typeof BENEFIT_ICONS)[number];

export const STEP_ICONS = ['cart', 'mail', 'monitor'] as const;
export type StepIcon = (typeof STEP_ICONS)[number];

/* Pricing --------------------------------------------------------------- */

export interface PlanSpec {
  /** Key into `content.pricing.planNames`. */
  id: string;
  price: string;
  /** Red corner ribbon, e.g. "30% OFF". */
  discount?: string;
  /** Sits on a tinted panel with a green CTA. */
  featured?: boolean;
  /** Adds the sport line to this plan's feature list. */
  sport?: boolean;
  /** Extra top line for the family plans. */
  seats?: 'duo' | 'trio';
}

export const PLAN_SPECS: PlanSpec[] = [
  { id: 'wt-3m', price: '€25', discount: '30% OFF', featured: true, sport: true },
  { id: 'wt-6m', price: '€45', discount: '40% OFF' },
  { id: 'wt-12m', price: '€75', discount: '60% OFF' },
];

export const FAMILY_PLAN_SPECS: PlanSpec[] = [
  { id: 'wt-duo', price: '€110', discount: '60% OFF', seats: 'duo' },
  { id: 'wt-trio', price: '€169', discount: '70% OFF', seats: 'trio' },
];

/* Footer ---------------------------------------------------------------- */

export const FOOTER_CONTACT = {
  email: 'contact@watchtivo.org',
  address: '29 Oostmolenstraat, Rotterdam, Zuid-Holland, Nederland.',
};
