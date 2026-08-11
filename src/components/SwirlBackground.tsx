import React from 'react';

/**
 * The pale looping line-art that drifts behind the light sections of the site.
 */
export const SwirlBackground: React.FC = () => (
  <div className="wt-swirl-bg" aria-hidden="true">
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" fill="none">
      <g stroke="#d2ebe7" strokeWidth="1.4">
        <path d="M-100 120 C 320 40, 560 300, 900 220 S 1500 60, 1750 260" />
        <path d="M-100 260 C 300 180, 620 440, 980 330 S 1520 200, 1750 400" />
        <path d="M1750 -60 C 1400 120, 1500 460, 1180 620 S 700 760, 420 1040" />
        <path d="M1660 40 C 1300 220, 1420 520, 1080 700 S 640 860, 380 1080" />
        <path d="M-140 620 C 240 520, 420 800, 800 720 S 1380 560, 1700 760" />
        <circle cx="1180" cy="330" r="420" />
        <circle cx="1180" cy="330" r="300" />
      </g>
    </svg>
  </div>
);
