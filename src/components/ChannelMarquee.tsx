import React, { useState } from 'react';
import { CHANNELS, VOD_CATALOG } from '../data/mockData';
import { Tv, Film, Search, Star, Play, ChevronRight, Check } from 'lucide-react';

interface ChannelMarqueeProps {
  onOpenSearch: () => void;
  onOpenCheckout: () => void;
}

export const ChannelMarquee: React.FC<ChannelMarqueeProps> = ({ onOpenSearch, onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<'sports' | 'movies' | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChannels = CHANNELS.filter(ch => {
    const matchesTab = activeTab === 'all' ? true : activeTab === 'sports' ? ch.category === 'sports' : ch.category === 'movies';
    const matchesSearch = ch.name.toLowerCase().includes(searchTerm.toLowerCase()) || ch.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="channels" className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest block mb-2">
              25.000+ KANALEN & 150.000 VOD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              WatchTivo Zenderlijst & VOD Catalogus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Inclusief Eredivisie, Formule 1, Viaplay, Ziggo Sport, Champions League, HBO, Netflix & Disney+ VOD.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-3 rounded-lg border border-slate-200 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#0066FF]" />
              <span>Doorzoek Alle Zenders</span>
            </button>
            <button
              onClick={onOpenCheckout}
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-extrabold px-5 py-3 rounded-full shadow-md transition-all cursor-pointer"
            >
              Start IPTV Proefpakket
            </button>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Alle Zenders
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'sports'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Sport & Live Eredivisie
            </button>
            <button
              onClick={() => setActiveTab('movies')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'movies'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Films & Series
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Zoek zender (bv. Ziggo, ESPN)..."
              className="w-full bg-white text-xs text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0066FF]"
            />
          </div>
        </div>

        {/* Live Channels Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredChannels.slice(0, 8).map((ch) => (
            <div
              key={ch.id}
              className="watchtivo-card p-4 rounded-xl border border-slate-200 hover:border-[#0066FF] transition-all flex items-center justify-between group bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-black text-xs text-[#0066FF] shrink-0">
                  {ch.country}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-[#0066FF] transition-colors truncate max-w-[130px]">
                    {ch.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                    <span>Live in 4K HDR</span>
                  </div>
                </div>
              </div>

              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-blue-100 text-[#0066FF]">
                4K
              </span>
            </div>
          ))}
        </div>

        {/* VOD Movies Showcase Cards */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Film className="w-5 h-5 text-[#0066FF]" /> Populair op WatchTivo VOD
            </h3>
            <button
              onClick={onOpenSearch}
              className="text-xs text-[#0066FF] font-extrabold hover:underline flex items-center gap-1 cursor-pointer"
            >
              Bekijk alle 150.000+ films →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {VOD_CATALOG.map((item) => (
              <div
                key={item.id}
                onClick={onOpenSearch}
                className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-[#0066FF] transition-all cursor-pointer shadow-md"
              >
                <div className="aspect-[2/3] relative">
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-bold text-yellow-400 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400" /> {item.rating}
                  </div>

                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#0066FF] text-white text-[9px] font-black uppercase">
                    4K
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40">
                    <div className="w-10 h-10 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-bold text-white truncate">{item.title}</p>
                    <p className="text-[10px] text-slate-300 font-medium">{item.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

