import React, { useState } from 'react';
import { CHANNELS, VOD_CATALOG } from '../data/mockData';
import { X, Search } from 'lucide-react';

interface LiveChannelSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: () => void;
}

export const LiveChannelSearchModal: React.FC<LiveChannelSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'sports' | 'movies' | 'news'>('all');

  const filteredChannels = CHANNELS.filter((ch) => {
    const matchesCat = activeCategory === 'all' ? true : ch.category === activeCategory;
    const matchesQuery = query.trim() === '' || ch.name.toLowerCase().includes(query.toLowerCase()) || ch.country.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const filteredVods = VOD_CATALOG.filter((vod) => {
    return query.trim() === '' || vod.title.toLowerCase().includes(query.toLowerCase()) || vod.genre.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Zenderlijst & VOD Zoeken</h3>
              <p className="text-xs text-slate-400 font-medium">Zoek in 25.000+ zenders & 150.000+ VOD films</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#0066FF] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek zender of film (bijv. Ziggo Sport, ESPN, Viaplay, Gladiator)..."
              className="w-full bg-slate-50 text-sm text-slate-900 placeholder-slate-400 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#0066FF]"
              autoFocus
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#0066FF] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Alle Categorieën
            </button>
            <button
              onClick={() => setActiveCategory('sports')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'sports' ? 'bg-[#0066FF] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Live Sport (Ziggo/ESPN/Viaplay)
            </button>
            <button
              onClick={() => setActiveCategory('movies')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'movies' ? 'bg-[#0066FF] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Films & Series
            </button>
            <button
              onClick={() => setActiveCategory('news')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'news' ? 'bg-[#0066FF] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Nieuws & Kids
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
            <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>BESCHIKBARE ZENDERS ({filteredChannels.length})</span>
              <span className="text-[#0066FF] text-[10px] font-bold">✓ 4K Ultra HD Feeds</span>
            </div>

            {filteredChannels.length > 0 ? (
              filteredChannels.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-[#0066FF]">
                      {ch.country}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{ch.name}</h4>
                      <p className="text-[10px] text-slate-500">Categorie: {ch.category} • EPG TV-Gids inbegrepen</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black px-2 py-0.5 rounded bg-blue-100 text-[#0066FF]">
                      4K 60FPS
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectPlan();
                      }}
                      className="text-xs font-extrabold text-[#0066FF] hover:underline cursor-pointer"
                    >
                      Bekijk →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 py-4 text-center font-medium">Geen zenders gevonden voor "{query}". Probeer een andere zoekterm.</p>
            )}

            {/* VOD Section */}
            <div className="text-xs font-black text-slate-400 uppercase tracking-wider mt-6 mb-2">
              BESCHIKBARE VOD FILMS & SERIES ({filteredVods.length})
            </div>
            {filteredVods.map((vod) => (
              <div
                key={vod.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img src={vod.posterUrl} alt={vod.title} className="w-10 h-10 object-cover rounded-lg" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{vod.title} ({vod.year})</h4>
                    <p className="text-[10px] text-slate-500">{vod.genre} • Rating: {vod.rating}/10</p>
                  </div>
                </div>

                <span className="text-[9px] font-black px-2 py-0.5 rounded bg-blue-100 text-[#0066FF]">
                  {vod.quality}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">Klaar om alle zenders in 4K te bekijken?</span>
            <button
              onClick={() => {
                onClose();
                onSelectPlan();
              }}
              className="bg-[#0066FF] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md"
            >
              IPTV Abonnement Kopen
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

