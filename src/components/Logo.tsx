import React from 'react';
import logoUrl from '../assets/images/wt-logo-lockup.webp';

/**
 * WatchTivo lockup: the circuit-board play emblem with the satellite dish,
 * next to the stacked italic wordmark. Intrinsic size is set so the header
 * reserves its space before the image loads.
 */
export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href="#home" className={`flex items-center ${className}`}>
    <img
      src={logoUrl}
      alt="WatchTivo"
      width={458}
      height={200}
      className="h-11 w-auto shrink-0 lg:h-14"
    />
  </a>
);
