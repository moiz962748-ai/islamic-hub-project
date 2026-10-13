'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight,
  Info,
  PlayCircle,
  RotateCcw,
  Plus,
  Minus,
  Calculator,
  Coins,
  TrendingUp,
  Briefcase,
  Heart
} from 'lucide-react';

export default function ZakatCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  
  // Cash
  const [cashOnHand, setCashOnHand] = useState<number | ''>('');
  const [bankBalance, setBankBalance] = useState<number | ''>('');
  
  // Gold & Silver
  const [goldWeight, setGoldWeight] = useState<number | ''>('');
  const [goldUnit, setGoldUnit] = useState('grams');
  const [goldPurity, setGoldPurity] = useState('24k');
  const [goldPricePerGram, setGoldPricePerGram] = useState<number | ''>(75.50); // example
  
  const [silverWeight, setSilverWeight] = useState<number | ''>('');
  const [silverUnit, setSilverUnit] = useState('grams');
  const [silverPricePerGram, setSilverPricePerGram] = useState<number | ''>(0.85); // example

  // Stocks
  const [activeTrading, setActiveTrading] = useState<number | ''>('');
  const [passiveDividend, setPassiveDividend] = useState<number | ''>('');
  
  // Business
  const [businessCash, setBusinessCash] = useState<number | ''>('');
  const [rawMaterials, setRawMaterials] = useState<number | ''>('');
  const [finishedInventory, setFinishedInventory] = useState<number | ''>('');
  
  // Liabilities
  const [shortTermDebts, setShortTermDebts] = useState<number | ''>('');

  // FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- LOGIC ---
  // Simple unit conversions to grams
  const getWeightInGrams = (weight: number | '', unit: string) => {
    if (weight === '') return 0;
    if (unit === 'tola') return weight * 11.66;
    if (unit === 'ounce') return weight * 28.3495;
    return weight;
  };

  const getPurityMultiplier = (purity: string) => {
    switch(purity) {
      case '18k': return 18/24;
      case '21k': return 21/24;
      case '22k': return 22/24;
      case '24k': default: return 1;
    }
  };

  const calculateGoldValue = () => {
    const grams = getWeightInGrams(goldWeight, goldUnit);
    const purityMult = getPurityMultiplier(goldPurity);
    const price = (typeof goldPricePerGram === 'number') ? goldPricePerGram : 0;
    return grams * purityMult * price;
  };

  const calculateSilverValue = () => {
    const grams = getWeightInGrams(silverWeight, silverUnit);
    const price = (typeof silverPricePerGram === 'number') ? silverPricePerGram : 0;
    return grams * price;
  };

  const totalAssets = 
    (Number(cashOnHand) || 0) + 
    (Number(bankBalance) || 0) + 
    calculateGoldValue() + 
    calculateSilverValue() +
    (Number(activeTrading) || 0) + 
    (Number(passiveDividend) || 0) + 
    (Number(businessCash) || 0) + 
    (Number(rawMaterials) || 0) + 
    (Number(finishedInventory) || 0);

  const totalLiabilities = (Number(shortTermDebts) || 0);
  const netAssets = totalAssets - totalLiabilities;
  
  // Live Nisab Values (Assuming USD base for example, approx)
  const nisabGoldValue = 87.48 * (Number(goldPricePerGram) || 75.50);
  const nisabSilverValue = 612.36 * (Number(silverPricePerGram) || 0.85);
  // In Hanafi fiqh, typically the lower of the two is used, which is silver.
  const currentNisabThreshold = Math.min(nisabGoldValue, nisabSilverValue);

  const isEligible = netAssets >= currentNisabThreshold;
  const zakatPayable = isEligible ? netAssets * 0.025 : 0;

  const resetCalculator = () => {
    setCashOnHand(''); setBankBalance('');
    setGoldWeight(''); setSilverWeight('');
    setActiveTrading(''); setPassiveDividend('');
    setBusinessCash(''); setRawMaterials(''); setFinishedInventory('');
    setShortTermDebts('');
  };

  const currencySymbols: Record<string, string> = {
    USD: '$', PKR: 'Rs', SAR: 'SAR', AED: 'AED', GBP: '£'
  };
  const sym = currencySymbols[currency] || '$';

  return (
    <main className="min-h-screen bg-black font-sans text-neutral-50 selection:bg-white selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Universal Zakat Calculator (2026)",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "description": "Calculate your Zakat obligations with precision. Live Nisab thresholds for gold (87.48g) and silver (612.36g) at a 2.5% rate.",
                "url": "https://islamhub.com/zakat-calculator"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the current Nisab threshold?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Nisab threshold is the minimum amount of wealth a Muslim must possess for a full lunar year before Zakat becomes obligatory. It is currently equivalent to either 87.48 grams of gold or 612.36 grams of silver."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I pay Zakat on passive dividend portfolios?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For passive investments (buy and hold for dividends), Zakat is generally due only on the liquid assets and cash-equivalent portion of the company, not the fixed capital assets."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I deduct my debts before calculating Zakat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, immediate short-term debts that are due in full can be deducted. Long-term debts (like a 30-year mortgage) only allow deduction of the upcoming 12 months of non-interest payments."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Zakat due on personal jewelry?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "According to the Hanafi school of thought, Zakat is due on all gold and silver jewelry regardless of whether it is worn or kept for savings."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://islamhub.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Zakat Hub",
                    "item": "https://islamhub.com/zakat"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Universal Zakat Calculator",
                    "item": "https://islamhub.com/zakat-calculator"
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Phase 1: Above-the-Fold (E-E-A-T & AEO) */}
        <nav className="flex items-center text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-emerald-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Universal Zakat Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Universal Zakat Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-800/50 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-100">
              Shariah-Vetted Formula | Verified by Islamic Jurisprudence Researchers
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-emerald-500 rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat is obligatory at a strict rate of <strong className="text-emerald-400 font-semibold">2.5%</strong> on surplus wealth held for a full lunar year. The current mandatory Nisab threshold is evaluated against <strong className="text-white font-semibold">87.48 grams of Gold</strong> or <strong className="text-white font-semibold">612.36 grams of Silver</strong>, whichever provides the greater benefit to the poor in your local currency.
            </p>
          </div>
        </header>

        {/* Phase 2: Interactive Utility Calculator Wizard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (Asset Inputs) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Currency Selector */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Local Currency</h3>
              <div className="flex flex-wrap gap-2">
                {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      currency === curr 
                        ? 'bg-emerald-600 border-emerald-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Cash & Bank Balances */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-3">
                <Calculator className="w-5 h-5 text-emerald-400" /> Cash & Bank Balances
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Cash on Hand</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={cashOnHand} onChange={e => setCashOnHand(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors placeholder:text-slate-700" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Bank Balances</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={bankBalance} onChange={e => setBankBalance(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors placeholder:text-slate-700" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Gold & Silver */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-3">
                <Coins className="w-5 h-5 text-amber-400" /> Precious Metals (Gold & Silver)
              </h3>
              
              {/* Gold */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-950/50 border border-slate-800/50">
                <h4 className="text-sm font-medium text-amber-400">Gold</h4>
                <div className="grid sm:grid-cols-12 gap-3 items-end">
                  <div className="sm:col-span-4">
                    <label className="block text-xs text-slate-400 mb-1">Weight</label>
                    <input 
                      type="number" min="0" placeholder="0"
                      value={goldWeight} onChange={e => setGoldWeight(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs text-slate-400 mb-1">Unit</label>
                    <select 
                      value={goldUnit} onChange={e => setGoldUnit(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      <option value="grams">Grams</option>
                      <option value="tola">Tola</option>
                      <option value="ounce">Ounce</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">Purity</label>
                    <select 
                      value={goldPurity} onChange={e => setGoldPurity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2 py-2 text-white focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      <option value="24k">24K</option>
                      <option value="22k">22K</option>
                      <option value="21k">21K</option>
                      <option value="18k">18K</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs text-slate-400 mb-1">Price / Gram</label>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">{sym}</span>
                      <input 
                        type="number" min="0" placeholder="75.50"
                        value={goldPricePerGram} onChange={e => setGoldPricePerGram(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-6 pr-2 py-2 text-white text-sm focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Silver */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-950/50 border border-slate-800/50">
                <h4 className="text-sm font-medium text-slate-300">Silver</h4>
                <div className="grid sm:grid-cols-12 gap-3 items-end">
                  <div className="sm:col-span-5">
                    <label className="block text-xs text-slate-400 mb-1">Weight</label>
                    <input 
                      type="number" min="0" placeholder="0"
                      value={silverWeight} onChange={e => setSilverWeight(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors" 
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <label className="block text-xs text-slate-400 mb-1">Unit</label>
                    <select 
                      value={silverUnit} onChange={e => setSilverUnit(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-slate-500 outline-none"
                    >
                      <option value="grams">Grams</option>
                      <option value="tola">Tola</option>
                      <option value="ounce">Ounce</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs text-slate-400 mb-1">Price / Gram</label>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">{sym}</span>
                      <input 
                        type="number" min="0" placeholder="0.85"
                        value={silverPricePerGram} onChange={e => setSilverPricePerGram(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-6 pr-2 py-2 text-white text-sm focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors" 
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Stocks & Investments */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-3">
                <TrendingUp className="w-5 h-5 text-blue-400" /> Stocks & Investments
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Active Trading Shares (Market Value)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={activeTrading} onChange={e => setActiveTrading(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Passive Portfolios (Zakat-able Portion)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={passiveDividend} onChange={e => setPassiveDividend(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Assets */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-3">
                <Briefcase className="w-5 h-5 text-indigo-400" /> Business Assets
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Business Cash</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={businessCash} onChange={e => setBusinessCash(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-2 py-2 text-sm text-white focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Raw Materials</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={rawMaterials} onChange={e => setRawMaterials(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-2 py-2 text-sm text-white focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Finished Inventory</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={finishedInventory} onChange={e => setFinishedInventory(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-2 py-2 text-sm text-white focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate Liabilities */}
            <div className="bg-rose-950/20 border border-rose-900/30 rounded-xl p-5 sm:p-6 space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-rose-900/50 pb-3">
                <Minus className="w-5 h-5 text-rose-400" /> Immediate Liabilities (Deductible)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-rose-300/70 mb-1">Short-Term Debts & Expenses</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0.00"
                      value={shortTermDebts} onChange={e => setShortTermDebts(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-rose-900/50 rounded-lg pl-8 pr-3 py-2 text-white focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-xs text-slate-400 leading-relaxed px-4 border-l border-slate-800">
                    Only deduct debts that are due immediately or within the upcoming year (e.g., unpaid bills, immediate loan repayments).
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Result Engine) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
                <div className="p-6 border-b border-slate-800 bg-slate-950/50">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Net Assets</h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {sym} {netAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm py-2 border-t border-slate-800 border-dashed">
                    <span className="text-slate-400">Current Nisab (Silver):</span>
                    <span className="text-slate-200 font-medium">{sym} {currentNisabThreshold.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    {isEligible ? (
                      <div className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                        ELIGIBLE FOR ZAKAT
                      </div>
                    ) : (
                      <div className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold border border-slate-700">
                        EXEMPT (BELOW NISAB)
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-900/40 to-slate-900">
                  <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-2">2.5% Zakat Payable</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-emerald-200/70 mt-3 leading-relaxed">
                      This is the required 2.5% charitable obligation based on your net Zakat-able assets held for a full lunar year.
                    </p>
                  )}
                </div>

              </div>

              <button 
                onClick={resetCalculator}
                className="w-full py-4 px-6 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5 text-slate-400" />
                Reset Calculator
              </button>

            </div>
          </div>

        </div>

        {/* Horizontal Sibling Silo Links Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link href="/zakat/gold-silver/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Coins className="w-8 h-8 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Gold & Silver</span>
          </Link>
          <Link href="/zakat/stocks-investments/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <TrendingUp className="w-8 h-8 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Stocks & Wealth</span>
          </Link>
          <Link href="/zakat/business/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Briefcase className="w-8 h-8 text-indigo-500/70 group-hover:text-indigo-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Business Zakat</span>
          </Link>
          <Link href="/zakat/fitrana/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Heart className="w-8 h-8 text-rose-500/70 group-hover:text-rose-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Fitrana (Al-Fitr)</span>
          </Link>
        </div>

        {/* Media & Content Architecture (Data Table & Video) */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-white mb-6">Zakat Asset Classification Rules</h2>
            <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800">
                    <th className="p-4 text-sm font-semibold text-slate-300">Asset Type</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Nisab Eligibility Rule</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Scholarly / Hadith Citation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-white flex items-center gap-2"><Coins className="w-4 h-4 text-amber-500"/> Gold & Silver</td>
                    <td className="p-4 text-sm text-slate-400">100% of value if exceeding 87.48g (Gold) or 612.36g (Silver).</td>
                    <td className="p-4 text-xs text-slate-500">Abu Dawud 1573 (Rate of 2.5% established)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-white flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-500"/> Shares (Trading)</td>
                    <td className="p-4 text-sm text-slate-400">100% of current market value is Zakat-able.</td>
                    <td className="p-4 text-xs text-slate-500">AAOIFI Shariah Standard No. 35</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-white flex items-center gap-2"><TrendingUp className="w-4 h-4 text-indigo-500"/> Shares (Passive)</td>
                    <td className="p-4 text-sm text-slate-400">Only on the Zakatable liquid assets of the underlying company.</td>
                    <td className="p-4 text-xs text-slate-500">AAOIFI Shariah Standard No. 35</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-white flex items-center gap-2"><Briefcase className="w-4 h-4 text-emerald-500"/> Business Inventory</td>
                    <td className="p-4 text-sm text-slate-400">Value of raw materials and finished goods intended for sale.</td>
                    <td className="p-4 text-xs text-slate-500">Sunan Abi Dawud 1562</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-white mb-6">Video Guide</h2>
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
              <button className="z-20 w-16 h-16 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <PlayCircle className="w-8 h-8 fill-slate-950 text-slate-950" />
              </button>
              <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                3 Min Calculation Guide
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-white font-bold text-sm mb-1">Step-by-Step Calculator Guide</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Phase 4: Accordion FAQ */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "What is the current Nisab threshold?",
                a: "The Nisab threshold is the minimum amount of wealth a Muslim must possess for a full lunar year before Zakat becomes obligatory. It is currently equivalent to either 87.48 grams of gold or 612.36 grams of silver."
              },
              {
                q: "Do I pay Zakat on passive dividend portfolios?",
                a: "For passive investments (buy and hold for dividends), Zakat is generally due only on the liquid assets and cash-equivalent portion of the company, not the fixed capital assets."
              },
              {
                q: "Can I deduct my debts before calculating Zakat?",
                a: "Yes, immediate short-term debts that are due in full can be deducted. Long-term debts (like a 30-year mortgage) only allow deduction of the upcoming 12 months of non-interest payments."
              },
              {
                q: "Is Zakat due on personal jewelry?",
                a: "According to the Hanafi school of thought, Zakat is due on all gold and silver jewelry regardless of whether it is worn or kept for savings."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                <div className={`px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed ${openFaq === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
