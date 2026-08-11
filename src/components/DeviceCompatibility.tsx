import React, { useState } from 'react';
import { DEVICE_SETUPS } from '../data/mockData';
import { Tv, Monitor, Tablet, Cpu, CheckCircle2, ArrowRight, Download, Clock } from 'lucide-react';

interface DeviceCompatibilityProps {
  onOpenCheckout: () => void;
}

export const DeviceCompatibility: React.FC<DeviceCompatibilityProps> = ({ onOpenCheckout }) => {
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_SETUPS[0]);

  const getDeviceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv className="w-5 h-5 text-[#0066FF]" />;
      case 'Tv2': return <Tv className="w-5 h-5 text-[#0066FF]" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-[#0066FF]" />;
      case 'Tablet': return <Tablet className="w-5 h-5 text-[#0066FF]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0066FF]" />;
      default: return <Tv className="w-5 h-5 text-[#0066FF]" />;
    }
  };

  return (
    <section id="devices" className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest block mb-2">
            100% COMPATIBEL MET AL UW APPARATEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Eenvoudige installatie op elk apparaat
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Geen technische kennis vereist. Kies hieronder uw apparaat en bekijk de snelle handleiding.
          </p>
        </div>

        {/* Device Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {DEVICE_SETUPS.map((device) => {
            const isSelected = selectedDevice.id === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {getDeviceIcon(device.iconName)}
                <span>{device.name}</span>
              </button>
            );
          })}
        </div>

        {/* Device Setup Guide Detail Card */}
        <div className="watchtivo-card p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl bg-white relative overflow-hidden max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Details & Steps */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getDeviceIcon(selectedDevice.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{selectedDevice.name}</h3>
                    <p className="text-xs text-slate-500">Ondersteunt M3U Playlist & Xtream Codes API</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                  <Clock className="w-4 h-4" />
                  <span>Installatietijd: ~{selectedDevice.setupTimeMinutes} Minuten</span>
                </div>
              </div>

              {/* Supported Player Apps */}
              <div className="mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  AANBEVOLEN IPTV APPS:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDevice.popularApps.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200"
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-4 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  INSTALLATIESTAPPEN:
                </p>
                {selectedDevice.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#0066FF] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recommendation Note */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-[#0066FF] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{selectedDevice.recommendationNote}</span>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">Hulp nodig bij installatie?</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Ons Nederlandse supportteam helpt u gratis stap-voor-stap via WhatsApp of Live Chat.
                </p>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={onOpenCheckout}
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-extrabold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>BESTEL IPTV ABONNEMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-500 font-medium">
                  Directe oplevering per e-mail & WhatsApp.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

