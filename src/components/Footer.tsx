import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER, whatsappLink } from '../data/siteData';
import { useLang } from '../i18n';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.5 3h3.1l-6.8 7.7L21.9 21h-6.2l-4.9-6.3L5.2 21H2.1l7.2-8.3L2.3 3h6.3l4.4 5.8L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.93L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a7.99 7.99 0 0 1 2.36 5.69c0 4.45-3.62 8.05-8.06 8.05a8.1 8.1 0 0 1-4.11-1.13l-.3-.17-3.05.8.81-2.98-.19-.31a7.95 7.95 0 0 1-1.22-4.26c0-4.45 3.62-8.05 8.07-8.05Zm-3.2 4.1c-.15 0-.4.06-.6.29-.21.22-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.97.13-1.06-.05-.09-.2-.15-.42-.26-.22-.11-1.32-.65-1.53-.72-.2-.08-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.05-.11-.5-1.21-.68-1.65-.18-.44-.36-.38-.5-.38h-.42Z" />
  </svg>
);

const SOCIALS = [
  { label: 'Facebook', Icon: Facebook, className: 'bg-[#3b5998]' },
  { label: 'X', Icon: XIcon, className: 'bg-[#111111]' },
  { label: 'LinkedIn', Icon: Linkedin, className: 'bg-[#0077b5]' },
  { label: 'Instagram', Icon: Instagram, className: 'bg-[#e4405f]' },
];

export const Footer: React.FC = () => {
  const { t } = useLang();
  const f = t.footer;

  return (
    <>
      <section className="relative bg-white pb-14">
        <div className="relative z-10 mx-auto max-w-[1080px] px-5 text-center lg:px-8">
          <h4 className="text-[15px] font-bold text-wt-teal">{f.socialHeading}</h4>

          <div className="mt-5 flex items-center justify-center gap-2">
            {SOCIALS.map(({ label, Icon, className }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className={`flex h-[30px] w-[30px] items-center justify-center rounded-[4px] text-white transition-transform hover:scale-110 ${className}`}
              >
                <Icon className="h-[14px] w-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#14b8a6] text-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <h2 className="text-[13px] font-bold tracking-wide text-white">{f.aboutHeading}</h2>
            <p className="mt-5 text-[12px] leading-[1.85] text-white/95">{f.about}</p>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wide text-white">{f.infoHeading}</h2>
            <ul className="mt-5 space-y-[9px]">
              {f.info.map((item) => (
                <li key={item}>
                  <a href="#faq" className="text-[12px] leading-[1.7] text-white/95 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wide text-white">{f.linksHeading}</h2>
            <ul className="mt-5 space-y-[9px]">
              {f.links.map((item) => (
                <li key={item}>
                  <a
                    href="#prijzen"
                    className="text-[12px] leading-[1.7] text-white/95 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wide text-white">{f.whatsappHeading}</h2>

            <a
              href={whatsappLink(t.whatsapp.support)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-white/25"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              {WHATSAPP_NUMBER}
            </a>

            <p className="mt-5 text-[12px] leading-[1.7] text-white/95">{f.whatsappNote}</p>
          </div>
        </div>
      </footer>
    </>
  );
};
