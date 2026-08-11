import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest block mb-2">
            BEVERIFIEERDE BEOORDELINGEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ervaringen van onze Nederlandse & Belgische klanten
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Ontdek waarom duizenden sportliefhebbers kiezen voor het 4K IPTV abonnement van WatchTivo.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="watchtivo-card p-8 rounded-2xl relative border border-slate-200 bg-white flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-blue-100"
                  />
                  <div>
                    <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    </h4>
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-blue-50 text-[#0066FF] border border-blue-100">
                  {item.planPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

