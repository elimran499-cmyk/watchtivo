import React, { useEffect, useState } from 'react';
import { APP_BADGES } from '../data/siteData';

/** Three-up badge carousel with the dot pager, as under the hero. */
export const AppsCarousel: React.FC = () => {
  const [page, setPage] = useState(1);
  const pages = APP_BADGES.length;

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 4000);
    return () => clearInterval(id);
  }, [pages]);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="border-t border-[#222]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] overflow-hidden px-5 py-12 lg:px-8">
        <div className="wt-track" style={{ transform: `translateX(-${page * (100 / 3)}%)` }}>
          {[...APP_BADGES, ...APP_BADGES].map((badge, i) => (
            <div
              key={`${badge.id}-${i}`}
              className="flex w-1/3 shrink-0 items-center justify-center px-4 sm:px-8"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-auto w-full max-w-[300px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {APP_BADGES.map((badge, i) => (
            <button
              key={badge.id}
              type="button"
              aria-label={`Ga naar slide ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-[7px] w-[7px] rounded-full transition-colors ${
                i === page % pages ? 'bg-[#333]' : 'bg-[#d3d3d3]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
