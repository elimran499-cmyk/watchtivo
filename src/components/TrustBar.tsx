import React from 'react';
import { Tv, Monitor, Smartphone, Laptop, Cpu, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const devices = [
    { title: 'AVAILABLE ON', name: 'ENIGMA2 BOX', icon: Cpu },
    { title: 'AVAILABLE ON', name: 'WINDOWS', icon: Monitor },
    { title: 'AVAILABLE ON', name: 'FIRESTICK', icon: Tv },
    { title: 'AVAILABLE ON', name: 'SMART TV', icon: Tv },
    { title: 'AVAILABLE ON', name: 'ANDROID BOX', icon: Smartphone },
    { title: 'AVAILABLE ON', name: 'APPLE TV / iOS', icon: Laptop },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Device Badges Carousel / Grid matching WatchTivo screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {devices.map((device, idx) => {
            const IconComponent = device.icon;
            return (
              <div
                key={idx}
                className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 shadow-md border border-slate-800 hover:border-[#0066FF] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center text-[#0066FF]">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase leading-none">
                    {device.title}
                  </span>
                  <span className="text-xs font-black tracking-tight text-white uppercase mt-0.5">
                    {device.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots like in screenshot */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
        </div>

      </div>
    </div>
  );
};

