import React, { useState } from 'react';
import { Plus, Minus, ChevronRight, MessageSquare, Send, ShoppingCart } from 'lucide-react';
import { whatsappLink } from '../data/siteData';
import { useLang } from '../i18n';

export const FaqSection: React.FC = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contacts = [
    { key: 'support', href: whatsappLink(t.whatsapp.support), label: t.faq.aria.support, Icon: MessageSquare, bg: 'bg-[#0d9488]' },
    { key: 'trial', href: whatsappLink(t.whatsapp.trial), label: t.faq.aria.trial, Icon: Send, bg: 'bg-[#14b8a6]' },
    { key: 'order', href: whatsappLink(t.whatsapp.order), label: t.faq.aria.order, Icon: ShoppingCart, bg: 'bg-[#0f766e]' },
  ];

  return (
    <section id="faq" className="relative bg-white py-16">
      <div className="relative z-10 mx-auto max-w-[860px] px-5 lg:px-8">
        <h2 className="text-center text-[19px] font-bold sm:text-[21px]">{t.faq.heading}</h2>

        <div className="mt-8 border border-[#e0e0e0]">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border-b border-[#e0e0e0] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center gap-3 px-5 py-[13px] text-left transition-colors ${
                    isOpen ? 'bg-[#3a3a3a] text-white' : 'bg-white text-[#222] hover:bg-[#fafafa]'
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-[13px] w-[13px] shrink-0" />
                  ) : (
                    <Plus className="h-[13px] w-[13px] shrink-0" />
                  )}

                  <span className="flex-1 text-[12.5px] font-medium">{faq.q}</span>

                  <ChevronRight
                    className={`h-[13px] w-[13px] shrink-0 transition-transform ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="bg-white px-5 py-4 pl-[41px] text-[12.5px] leading-[1.8] text-[#444]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <h3 className="mt-14 text-center text-[15px] font-normal text-[#222]">
          {t.faq.stillQuestionsStart}
          <a
            href={whatsappLink(t.whatsapp.support)}
            target="_blank"
            rel="noopener noreferrer"
            className="wt-link font-normal"
          >
            {t.faq.stillQuestionsLink}
          </a>
        </h3>

        <div className="mt-6 flex items-center justify-center gap-3">
          {contacts.map(({ key, href, label, Icon, bg }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-[34px] w-[34px] items-center justify-center rounded-full text-white transition-transform hover:scale-110 ${bg}`}
            >
              <Icon className="h-[15px] w-[15px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
