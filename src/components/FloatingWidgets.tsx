import React, { useState } from 'react';
import { whatsappLink } from '../data/siteData';
import { LANGUAGES } from '../data/content';
import { useLang } from '../i18n';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.93L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a7.99 7.99 0 0 1 2.36 5.69c0 4.45-3.62 8.05-8.06 8.05a8.1 8.1 0 0 1-4.11-1.13l-.3-.17-3.05.8.81-2.98-.19-.31a7.95 7.95 0 0 1-1.22-4.26c0-4.45 3.62-8.05 8.07-8.05Zm-3.2 4.1c-.15 0-.4.06-.6.29-.21.22-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.97.13-1.06-.05-.09-.2-.15-.42-.26-.22-.11-1.32-.65-1.53-.72-.2-.08-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.05-.11-.5-1.21-.68-1.65-.18-.44-.36-.38-.5-.38h-.42Z" />
  </svg>
);

/** WhatsApp launcher pinned bottom-left. */
export const ChatBubble: React.FC = () => {
  const { t } = useLang();

  return (
    <a
      href={whatsappLink(t.whatsapp.support)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.chatAria}
      className="fixed bottom-5 left-5 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_18px_rgba(37,211,102,0.5)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

const FLAGS: Record<string, React.ReactNode> = {
  nl: (
    <>
      <span className="block h-1/3 bg-[#ae1c28]" />
      <span className="block h-1/3 bg-white" />
      <span className="block h-1/3 bg-[#21468b]" />
    </>
  ),
  de: (
    <>
      <span className="block h-1/3 bg-black" />
      <span className="block h-1/3 bg-[#dd0000]" />
      <span className="block h-1/3 bg-[#ffce00]" />
    </>
  ),
};

/** Language selector pinned bottom-right; switching re-renders the whole site. */
export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const others = LANGUAGES.filter((l) => l.code !== lang);

  return (
    <div className="fixed bottom-0 right-6 z-50">
      {open &&
        others.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => {
              setLang(option.code);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 bg-black px-6 py-3 text-[13px] text-white hover:bg-[#1a1a1a]"
          >
            <span className="inline-block h-[13px] w-[19px] shrink-0 overflow-hidden rounded-[2px]">
              {FLAGS[option.code]}
            </span>
            {option.label}
          </button>
        ))}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center gap-3 bg-black px-6 py-3 text-[13px] text-white hover:bg-[#1a1a1a]"
      >
        <span className="inline-block h-[13px] w-[19px] shrink-0 overflow-hidden rounded-[2px]">
          {FLAGS[current.code]}
        </span>
        {current.label}
      </button>
    </div>
  );
};
