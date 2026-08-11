import React, { useState } from 'react';
import { SERVER_NODES } from '../data/mockData';
import { Activity, CheckCircle2, RefreshCw, Server, ShieldCheck } from 'lucide-react';

export const SpeedTestWidget: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [pingResults, setPingResults] = useState<{ [key: string]: number }>({});
  const [tested, setTested] = useState(false);

  const runSpeedTest = () => {
    setTesting(true);
    setPingResults({});

    setTimeout(() => {
      const results: { [key: string]: number } = {};
      SERVER_NODES.forEach((node) => {
        results[node.id] = Math.max(5, Math.floor(node.basePing + (Math.random() * 4 - 2)));
      });
      setPingResults(results);
      setTesting(false);
      setTested(true);
    }, 1200);
  };

  return (
    <section id="speedtest" className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest block mb-2">
            SERVER STATUS & LATENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Test de verbinding met onze WatchTivo servers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Klik hieronder om direct een snelheidstest uit te voeren naar onze 10 Gbps Nederlandse en Europese streaming clusters.
          </p>
        </div>

        {/* Speed Test Box */}
        <div className="watchtivo-card p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Server className="w-6 h-6 text-[#0066FF]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">WatchTivo Server Status</h3>
                <p className="text-xs text-slate-500">48 Edge Nodes • 99.9% Uptime Redundantie</p>
              </div>
            </div>

            <button
              onClick={runSpeedTest}
              disabled={testing}
              className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052CC] text-white font-extrabold text-xs px-6 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 uppercase tracking-wider"
            >
              <RefreshCw className={`w-4 h-4 ${testing ? 'animate-spin' : ''}`} />
              <span>{testing ? 'Testen...' : tested ? 'Opnieuw Testen' : 'Start Snelheidstest'}</span>
            </button>
          </div>

          {/* Node Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVER_NODES.map((node) => {
              const ping = pingResults[node.id] || node.basePing;
              return (
                <div
                  key={node.id}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{node.flag}</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{node.name}</h4>
                      <p className="text-[10px] text-slate-500">{node.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-sm font-black block ${testing ? 'text-slate-400 animate-pulse' : 'text-[#0066FF]'}`}>
                      {testing ? '...' : `${ping} ms`}
                    </span>
                    <span className="text-[9px] font-bold text-blue-600 uppercase">
                      10 Gbps Node
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Assurance */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
              <span>Ultra-lage responstijd onder 15ms in NL & BE</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              <span>Optimale 4K 60FPS streaming zonder hapering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

