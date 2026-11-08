'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, CheckCircle2, XCircle, AlertCircle, 
  HelpCircle, ChevronDown, ChevronRight, ArrowRight,
  ShieldCheck, X
} from 'lucide-react';

interface RulingItem {
  id: string;
  name: string;
  category: string;
  verdict: 'valid' | 'invalid' | 'depends';
  verdictLabel: string;
  summary: string;
  action: string;
}

const RULINGS_DATABASE: RulingItem[] = [
  {
    id: "inhaler",
    name: "Asthma Inhaler",
    category: "Medical",
    verdict: "depends",
    verdictLabel: "Scholars Differ",
    summary: "The majority of contemporary Fiqh academies (Hanafi, Shafi'i, Maliki, Hanbali) rule that inhalers break the fast because aerosolized medicine reaches the stomach via the pharynx. However, some prominent contemporary scholars (including Sheikh Ibn Uthaymeen) permit it for emergency relief without nullifying the fast.",
    action: "If you must use it, take it for your safety. Make up the fast later (Qadha) if possible, or pay Fidya if asthma is permanent."
  },
  {
    id: "injection",
    name: "Injections & Vaccines (Non-Nutritional)",
    category: "Medical",
    verdict: "valid",
    verdictLabel: "Does NOT Break",
    summary: "Therapeutic, intramuscular, subcutaneous, and dental injections (like insulin, pain relief, antibiotics, or vaccines) do not break the fast because they do not enter through an open bodily pathway and do not provide nutritional nourishment.",
    action: "100% permissible to take while fasting without any penalty or makeup requirement."
  },
  {
    id: "toothpaste",
    name: "Toothpaste & Miswak",
    category: "Daily Hygiene",
    verdict: "valid",
    verdictLabel: "Permissible with Caution",
    summary: "Using a toothbrush with toothpaste does not break the fast provided that none of the paste, foam, or flavored water is swallowed. Using a natural Miswak is universally encouraged and Sunnah throughout the day.",
    action: "Generally disliked (Makruh) if there is a risk of swallowing. If swallowed accidentally or deliberately, the fast is broken."
  },
  {
    id: "eyedrops",
    name: "Eye Drops & Ear Drops",
    category: "Medical",
    verdict: "valid",
    verdictLabel: "Permissible (Does Not Break)",
    summary: "Modern Islamic jurisprudence councils (including the International Islamic Fiqh Academy) have resolved that eye drops and ear drops do not invalidate fasting, even if a faint taste is detected in the throat, as the eye and ear are not designated digestive passageways.",
    action: "Safe to use as prescribed by your medical specialist."
  },
  {
    id: "bloodtest",
    name: "Blood Test & Cupping (Hijama)",
    category: "Medical",
    verdict: "valid",
    verdictLabel: "Does NOT Break",
    summary: "Having blood drawn for diagnostic testing, blood sugar finger-pricks, or small blood tests does not invalidate the fast. Cupping (Hijama) is disliked in Hanafi if it causes extreme bodily weakness, but does not nullify the fast.",
    action: "Routine blood tests are completely permissible. Avoid large volume donations during daylight if it induces dizziness."
  },
  {
    id: "vomiting",
    name: "Vomiting (Involuntary vs Deliberate)",
    category: "What Breaks",
    verdict: "depends",
    verdictLabel: "Involuntary Excused / Deliberate Breaks",
    summary: "Prophetic Hadith confirms: Whoever is overcome by involuntary vomiting is not required to make up the fast. However, whoever intentionally induces vomiting has broken their fast and must make up that day (Qadha).",
    action: "If nausea occurs naturally, rinse mouth gently and continue your fast. If deliberately induced, make up 1 day after Ramadan."
  },
  {
    id: "eating-mistake",
    name: "Eating or Drinking by Mistake",
    category: "What Breaks",
    verdict: "valid",
    verdictLabel: "Does NOT Break (100% Valid)",
    summary: "The Prophet Muhammad (ﷺ) said: 'Whoever forgets that he is fasting and eats or drinks, let him complete his fast, for it was Allah who fed him and gave him drink.' (Sahih al-Bukhari)",
    action: "Stop chewing or drinking the exact second you remember, rinse your mouth, and continue fasting normally. No penalty or Qadha is due."
  },
  {
    id: "saliva",
    name: "Swallowing Saliva, Mucus & Dry Throat",
    category: "Daily Hygiene",
    verdict: "valid",
    verdictLabel: "Does NOT Break",
    summary: "Swallowing your own natural saliva inside the mouth does not break the fast by total scholarly consensus. Phlegm or mucus inside the nasal passages or throat is also excused by the vast majority of jurists.",
    action: "Completely natural and permitted. Avoid intentionally gathering pools of saliva in the mouth to swallow."
  }
];

export function FastingLookupTool() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<RulingItem | null>(null);

  const filterKeywords = [
    { label: "Inhaler", term: "inhaler" },
    { label: "Injection", term: "injection" },
    { label: "Toothpaste", term: "toothpaste" },
    { label: "Eye drops", term: "eyedrops" },
    { label: "Blood test", term: "blood" },
    { label: "Vomiting", term: "vomiting" },
  ];

  const filteredResults = searchTerm.trim() 
    ? RULINGS_DATABASE.filter(r => 
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.summary.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelect = (item: RulingItem) => {
    setSelectedItem(item);
  };

  const handlePillClick = (term: string) => {
    setSearchTerm(term);
    const matched = RULINGS_DATABASE.find(r => r.id.toLowerCase().includes(term) || r.name.toLowerCase().includes(term));
    if (matched) setSelectedItem(matched);
  };

  return (
    <div className="w-full">
      {/* Search Input Box */}
      <div className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search any action, e.g. asthma inhaler, brushing teeth, vomiting..."
            className="w-full bg-neutral-900/90 border border-neutral-800 text-white rounded-xl pl-11 pr-10 py-3.5 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
          />
          {searchTerm && (
            <button 
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedItem(null); }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            if (searchTerm.trim() && filteredResults.length > 0) {
              setSelectedItem(filteredResults[0]);
            }
          }}
          className="bg-white hover:bg-neutral-200 text-black font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors whitespace-nowrap shadow-sm"
        >
          Quick lookup
        </button>
      </div>

      {/* Filter Quick Pills */}
      <div className="flex flex-wrap items-center gap-2 mt-3.5">
        <span className="text-[11px] font-mono uppercase text-neutral-400 mr-1">Popular:</span>
        {filterKeywords.map((pill) => (
          <button
            key={pill.label}
            type="button"
            onClick={() => handlePillClick(pill.term)}
            className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Instant Answer Modal / Display Card */}
      {selectedItem && (
        <div className="mt-5 p-5 sm:p-6 bg-neutral-950 border border-neutral-800 rounded-2xl animate-in fade-in duration-200 shadow-2xl relative">
          <button 
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-900"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2.5 mb-3">
            {selectedItem.verdict === 'valid' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" /> {selectedItem.verdictLabel}
              </span>
            )}
            {selectedItem.verdict === 'invalid' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/80 border border-rose-800/60 text-rose-300">
                <XCircle className="w-3.5 h-3.5" /> {selectedItem.verdictLabel}
              </span>
            )}
            {selectedItem.verdict === 'depends' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 border border-amber-800/60 text-amber-300">
                <AlertCircle className="w-3.5 h-3.5" /> {selectedItem.verdictLabel}
              </span>
            )}
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{selectedItem.category}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{selectedItem.name}</h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-4">{selectedItem.summary}</p>
          <div className="pt-3 border-t border-neutral-900 flex items-start gap-2 text-xs sm:text-sm text-neutral-400">
            <strong className="text-white shrink-0 font-medium">Recommended Action:</strong>
            <span>{selectedItem.action}</span>
          </div>
        </div>
      )}

      {/* Search Autocomplete dropdown when typing and no specific selected item */}
      {searchTerm.trim() && !selectedItem && filteredResults.length > 0 && (
        <div className="mt-3 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl divide-y divide-neutral-850">
          {filteredResults.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item)}
              className="w-full text-left px-4 py-3 hover:bg-neutral-850 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-sm font-semibold text-white block">{item.name}</span>
                <span className="text-xs text-neutral-400">{item.summary.slice(0, 95)}...</span>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ml-3 ${
                item.verdict === 'valid' ? 'text-emerald-400 bg-emerald-950/60' :
                item.verdict === 'invalid' ? 'text-rose-400 bg-rose-950/60' : 'text-amber-400 bg-amber-950/60'
              }`}>
                {item.verdictLabel}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function CollapsibleFaq({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800/80 bg-neutral-900/40 rounded-xl overflow-hidden transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-white hover:text-neutral-200 transition-colors"
      >
        <span className="text-sm sm:text-base font-semibold">{question}</span>
        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-white' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 pt-1 text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/60">
          {answer}
        </div>
      )}
    </div>
  );
}

export function SituationCard({ 
  title, 
  items 
}: { 
  title: string; 
  items: { heading: string; desc: string }[] 
}) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
      <div>
        <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center justify-between">
          <span>{title}</span>
          <ChevronRight className="w-4 h-4 text-neutral-500" />
        </h4>
        <div className="space-y-3.5">
          {items.map((it, idx) => (
            <div key={idx} className="border-t border-neutral-900 pt-3">
              <strong className="text-xs sm:text-sm text-neutral-200 block mb-1 font-semibold">{it.heading}</strong>
              <p className="text-xs text-neutral-400 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

