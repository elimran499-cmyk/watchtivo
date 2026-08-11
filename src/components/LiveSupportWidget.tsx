import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface LiveSupportWidgetProps {
  onOpenCheckout: () => void;
}

export const LiveSupportWidget: React.FC<LiveSupportWidgetProps> = ({ onOpenCheckout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hallo! Welkom bij WatchTivo. Waar kan ik u vandaag mee helpen bij het kiezen van uw IPTV abonnement?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let reply = "Bedankt voor uw bericht! Onze servers draaien op 100% capaciteit. U kunt binnen 2 minuten een abonnement activeren met directe oplevering.";
      if (userText.toLowerCase().includes('firestick') || userText.toLowerCase().includes('tv') || userText.toLowerCase().includes('apparaat')) {
        reply = "Ja! Wij ondersteunen Samsung & LG Smart TV, Amazon Firestick, Android Box, Apple TV en smartphones via TiviMate of IPTV Smarters Pro.";
      } else if (userText.toLowerCase().includes('test') || userText.toLowerCase().includes('proef') || userText.toLowerCase().includes('garantie')) {
        reply = "U kunt risicoloos bestellen met onze 7 dagen 100% niet-goed-geld-terug garantie!";
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0066FF] text-white font-bold p-3.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all cursor-pointer group"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0066FF]" />
          </div>
          <span className="text-xs font-black pr-1 hidden sm:inline">24/7 WhatsApp & Live Support</span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[420px]">
          {/* Header */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white font-black flex items-center justify-center text-xs">
                  WT
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">WatchTivo Support Assistant</h4>
                <p className="text-[10px] text-blue-400 font-bold">Online • Direct Antwoord</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs bg-slate-50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#0066FF] text-white font-bold rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none font-medium'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto text-[10px]">
            <button
              onClick={() => onOpenCheckout()}
              className="bg-[#0066FF] text-white font-extrabold px-2.5 py-1 rounded-lg shrink-0 cursor-pointer"
            >
              ⚡ Bekijk 12 Maanden Pakket (€5,41/md)
            </button>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Stel uw vraag..."
              className="flex-1 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0066FF]"
            />
            <button
              type="submit"
              className="p-2 bg-[#0066FF] text-white font-bold rounded-xl hover:bg-[#0052CC] cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4 fill-white" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

