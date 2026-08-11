import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteData';
import { useLang } from '../i18n';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[15px] font-medium text-[#222] transition-colors hover:text-wt-teal"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-[#222] lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 pb-5 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 text-[15px] font-medium text-[#222]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
