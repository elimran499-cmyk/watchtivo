import React from 'react';
import { Smile } from 'lucide-react';
import { useLang } from '../i18n';

export const TrustpilotSection: React.FC = () => {
  const { t } = useLang();
  const tp = t.trustpilot;

  return (
    <section className="relative bg-white py-20">
      <div className="relative z-10 mx-auto max-w-[820px] px-5 text-center lg:px-8">
        <Smile className="mx-auto h-8 w-8 text-[#3ec98a]" strokeWidth={1.8} />

        <h2 className="mt-6 text-[19px] font-bold leading-snug text-wt-teal sm:text-[21px]">
          {tp.heading}
        </h2>

        <p className="mt-5 text-[13px] text-[#222]">{tp.line1}</p>

        <p className="mt-4 text-[13px] text-[#222]">
          {tp.line2Start}
          <strong className="font-bold">{tp.line2Bold}</strong>.
        </p>

        <a
          href="https://www.trustpilot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="wt-btn mt-9 !px-8 !py-[14px] !text-[11px]"
        >
          {tp.cta}
        </a>
      </div>
    </section>
  );
};
