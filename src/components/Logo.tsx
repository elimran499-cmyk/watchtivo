import React from 'react';

/**
 * WatchTivo mark: a rounded teal tile holding a white play triangle, followed
 * by the wordmark with "Tivo" picked out in the brand colour.
 */
export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href="#home" className={`flex items-center gap-3 ${className}`} aria-label="WatchTivo">
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11 shrink-0"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wt-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#wt-tile)" />
      <path d="M19.5 15.2 33 24l-13.5 8.8V15.2Z" fill="#ffffff" />
    </svg>

    <span className="text-[26px] font-semibold leading-none tracking-tight text-[#0F172A]">
      Watch<span className="text-wt-teal">Tivo</span>
    </span>
  </a>
);
