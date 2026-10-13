'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight,
  Info,
  PlayCircle,
  RotateCcw,
  Plus,
  Minus,
  Coins,
  TrendingUp,
  Briefcase,
  Heart,
  HelpCircle,
  Calculator
} from 'lucide-react';

export default function GoldSilverCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  const [weightUnit, setWeightUnit] = useState('grams');
  const [usageType, setUsageType] = useState('investment');
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Gold Weights by Purity
  const [gold24k, setGold24k] = useState<number | ''>('');
  const [gold22k, setGold22k] = useState<number | ''>('');
  const [gold21k, setGold21k] = useState<number | ''>('');
  const [gold18k, setGold18k] = useState<number | ''>('');
  
  // Silver Weight
  const [silver999, setSilver999] = useState<number | ''>('');

  // FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- LOGIC ---
  // Mocked live prices per gram for demonstration (could be fetched in a real app)
  const prices: Record<string, { gold: number, silver: number, sym: string }> = {
    USD: { gold: 75.50, silver: 0.85, sym: '$' },
    GBP: { gold: 59.30, silver: 0.67, sym: '£' },
    PKR: { gold: 21000, silver: 235, sym: 'Rs' },
    SAR: { gold: 283.15, silver: 3.19, sym: 'SAR' },
    AED: { gold: 277.30, silver: 3.12, sym: 'AED' }
  };
  
  const currentRates = prices[currency] || prices['USD'];
  const sym = currentRates.sym;

  // Conversion to Grams
  const toGrams = (weight: number | '') => {
    const val = Number(weight) || 0;
    if (weightUnit === 'tola') return val * 11.66;
    if (weightUnit === 'ounces') return val * 28.3495;
    return val;
  };

  // Pure 24k Equivalent Calculations
  const pureGoldGrams = 
    toGrams(gold24k) * 1.0 + 
    toGrams(gold22k) * (22/24) + 
    toGrams(gold21k) * (21/24) + 
    toGrams(gold18k) * (18/24);

  const pureSilverGrams = toGrams(silver999);

  const totalGoldValue = pureGoldGrams * currentRates.gold;
  const totalSilverValue = pureSilverGrams * currentRates.silver;
  const totalValue = totalGoldValue + totalSilverValue;

  // Live Nisab Values
  const nisabGoldValue = 87.48 * currentRates.gold;
  const nisabSilverValue = 612.36 * currentRates.silver;
  const currentNisabThreshold = Math.min(nisabGoldValue, nisabSilverValue);

  const isEligible = totalValue >= currentNisabThreshold;
  const zakatPayable = isEligible ? totalValue * 0.025 : 0;

  const resetCalculator = () => {
    setGold24k(''); setGold22k(''); setGold21k(''); setGold18k('');
    setSilver999('');
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-amber-500/30">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Gold and Silver Zakat Calculator",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "description": "Calculate Zakat on your gold and silver jewelry, bullion, and coins. Convert 22k, 21k, and 18k gold to pure 24k weight automatically.",
                "url": "https://islamhub.com/zakat/gold-silver/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is Zakat payable on daily-worn gold jewelry?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In the Hanafi school of thought, Zakat is mandatory on all gold and silver jewelry, regardless of whether it is worn daily, occasionally, or kept in a safe. The Shafi'i, Maliki, and Hanbali schools generally exempt jewelry intended for personal use, provided the quantity is not extravagant."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I calculate Zakat on 22k or 18k gold?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zakat is calculated on pure 24-karat gold. For mixed karats, you multiply the weight by its purity percentage (e.g., 22k is 91.6% pure). This calculator automatically converts your 22k, 21k, or 18k gold into its 24k pure gold equivalent for an accurate calculation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between Tola and Grams for Nisab?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A Tola is a traditional South Asian unit of mass equal to 11.66 grams. The Gold Nisab of 87.48 grams is equivalent to approximately 7.5 Tolas, while the Silver Nisab of 612.36 grams equals 52.5 Tolas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I pay Zakat on silver coins or utensils?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Zakat is due on all silver items including coins, bullion, plates, and utensils, as silver is inherently considered a Zakat-able form of wealth."
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
                    "name": "Zakat",
                    "item": "https://islamhub.com/zakat"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Gold & Silver Calculator",
                    "item": "https://islamhub.com/zakat/gold-silver/"
                  }
                ]
              }
            ]
          })
        }}
      />
      
      {/* Canonical Link (Simulated for Next.js App Router Head) */}
      {/* <link rel="canonical" href="https://islamhub.com/zakat/gold-silver/" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Phase 1: Above-the-Fold (E-E-A-T & AEO) */}
        <nav className="flex items-center text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-amber-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Gold & Silver Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Gold & Silver Zakat Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-800/50 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-100/90">
              Verified Precious Metal Fiqh Rules | Reviewed by Shariah Researchers
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-amber-500 rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat is due at a strict rate of <strong className="text-amber-400 font-semibold">2.5%</strong> on Gold exceeding 87.48g (7.5 Tola) and Silver exceeding 612.36g (52.5 Tola). Lower karats (22k, 21k, 18k) must be converted to their pure 24k equivalents by multiplying their weight by their respective purity percentage before assessing their Zakat value.
            </p>
          </div>
        </header>

        {/* Phase 2: Precious Metal Calculator Wizard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (Inputs) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Control Toggles: Currency, Weight Unit, Usage Type */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Currency</h3>
                  <div className="flex flex-wrap gap-2">
                    {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map(curr => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                          currency === curr 
                            ? 'bg-amber-600 border-amber-500 text-white' 
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Weight Unit</h3>
                  <div className="flex flex-wrap gap-2">
                    {['grams', 'tola', 'ounces'].map(unit => (
                      <button
                        key={unit}
                        onClick={() => setWeightUnit(unit)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors border ${
                          weightUnit === unit 
                            ? 'bg-slate-200 border-slate-100 text-slate-900' 
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {unit}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5 relative">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Usage Type</h3>
                  <div className="relative">
                    <button 
                      onMouseEnter={() => setShowTooltip(true)} 
                      onMouseLeave={() => setShowTooltip(false)}
                      className="text-slate-500 hover:text-amber-400 transition-colors"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                    {showTooltip && (
                      <div className="absolute z-10 w-64 p-3 mt-2 -left-32 sm:left-1/2 sm:-translate-x-1/2 bg-slate-800 border border-slate-700 text-xs text-slate-300 rounded-lg shadow-xl">
                        <strong className="text-white block mb-1">Hanafi vs. Shafi'i Rulings</strong>
                        The Hanafi school mandates Zakat on all jewelry, worn or stored. Shafi'i, Maliki, and Hanbali schools generally exempt jewelry intended for personal use.
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setUsageType('investment')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      usageType === 'investment' 
                        ? 'bg-amber-600 border-amber-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Investment / Bullion
                  </button>
                  <button
                    onClick={() => setUsageType('personal')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      usageType === 'personal' 
                        ? 'bg-amber-600 border-amber-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Personal Worn Jewelry
                  </button>
                </div>
                {usageType === 'personal' && (
                  <p className="text-xs text-amber-400/80 mt-3 font-medium">
                    Note: By default, this calculator applies the Hanafi ruling (including all jewelry in calculations).
                  </p>
                )}
              </div>

            </div>

            {/* Gold Input Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Coins className="w-5 h-5 text-amber-400" /> Gold by Purity (Karat)
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">24 Karat (99.9% Pure)</label>
                  <p className="text-xs text-slate-500 mb-2">Coins, bars, and pure bullion.</p>
                  <div className="relative">
                    <input 
                      type="number" min="0" placeholder="0"
                      value={gold24k} onChange={e => setGold24k(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 pr-16 py-2.5 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium uppercase">{weightUnit}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">22 Karat (91.6% Pure)</label>
                  <p className="text-xs text-slate-500 mb-2">Standard high-purity jewelry.</p>
                  <div className="relative">
                    <input 
                      type="number" min="0" placeholder="0"
                      value={gold22k} onChange={e => setGold22k(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 pr-16 py-2.5 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium uppercase">{weightUnit}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">21 Karat (87.5% Pure)</label>
                  <p className="text-xs text-slate-500 mb-2">Common in Middle Eastern jewelry.</p>
                  <div className="relative">
                    <input 
                      type="number" min="0" placeholder="0"
                      value={gold21k} onChange={e => setGold21k(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 pr-16 py-2.5 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium uppercase">{weightUnit}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">18 Karat (75.0% Pure)</label>
                  <p className="text-xs text-slate-500 mb-2">Durable jewelry mixed with alloys.</p>
                  <div className="relative">
                    <input 
                      type="number" min="0" placeholder="0"
                      value={gold18k} onChange={e => setGold18k(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 pr-16 py-2.5 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" 
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium uppercase">{weightUnit}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver Input Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Coins className="w-5 h-5 text-slate-300" /> Silver (999 Pure)
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">Total Silver Weight</label>
                  <p className="text-xs text-slate-500 mb-2">Silver bullion, coins, and utensils.</p>
                  <div className="relative">
                    <input 
                      type="number" min="0" placeholder="0"
                      value={silver999} onChange={e => setSilver999(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 pr-16 py-2.5 text-white focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition-colors" 
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium uppercase">{weightUnit}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Precious Metal Result Engine) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Live Pure Metal Weight Summary */}
                <div className="p-6 border-b border-slate-800 bg-slate-950/80">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Pure 24k Equivalent Weight</h3>
                  
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-amber-400 font-medium">Pure Gold</span>
                    <span className="text-white font-bold">{pureGoldGrams.toFixed(2)} g</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800 border-dashed">
                    <span className="text-slate-300 font-medium">Pure Silver</span>
                    <span className="text-white font-bold">{pureSilverGrams.toFixed(2)} g</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total Market Value:</span>
                    <span className="text-slate-200 font-medium">{sym} {totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-5">
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

                {/* 2.5% Net Payable Zakat Card */}
                <div className="p-6 bg-gradient-to-br from-amber-900/30 to-slate-900">
                  <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">2.5% Net Payable Zakat</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-amber-400' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-amber-200/60 mt-3 leading-relaxed">
                      Zakat amount due on your precious metals based on live equivalent weights.
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

        {/* Horizontal Sibling Silo Links Bar (Phase 3 & 5) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link href="/zakat-calculator/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Calculator className="w-8 h-8 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Universal Calc</span>
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

        {/* Phase 2: Metal Purity HTML Data Table & Video */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-white mb-6">Gold Purity & Nisab Conversion Table</h2>
            <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800">
                    <th className="p-4 text-sm font-semibold text-slate-300">Gold Karat</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Purity %</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Nisab Equiv (Grams)</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Nisab Equiv (Tola)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-bold text-amber-400">24k (Pure)</td>
                    <td className="p-4 text-sm text-slate-300">100.0%</td>
                    <td className="p-4 text-sm text-white font-medium">87.48 g</td>
                    <td className="p-4 text-sm text-slate-400">~ 7.50 tola</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-amber-300">22k (Standard)</td>
                    <td className="p-4 text-sm text-slate-300">91.6%</td>
                    <td className="p-4 text-sm text-slate-300">95.50 g</td>
                    <td className="p-4 text-sm text-slate-400">~ 8.19 tola</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-amber-200">21k</td>
                    <td className="p-4 text-sm text-slate-300">87.5%</td>
                    <td className="p-4 text-sm text-slate-300">99.98 g</td>
                    <td className="p-4 text-sm text-slate-400">~ 8.57 tola</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-amber-100">18k</td>
                    <td className="p-4 text-sm text-slate-300">75.0%</td>
                    <td className="p-4 text-sm text-slate-300">116.64 g</td>
                    <td className="p-4 text-sm text-slate-400">~ 10.00 tola</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">* Purity conversion established by contemporary Fiqh councils to determine pure gold liability.</p>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-white mb-6">Video Guide</h2>
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
              <button className="z-20 w-16 h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <PlayCircle className="w-8 h-8 fill-slate-950 text-slate-950" />
              </button>
              <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                3 Min Guide
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">Calculating Zakat on Gold Jewelry & Bullion</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Phase 4: Niche FAQ Accordion */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Is Zakat payable on daily-worn gold jewelry?",
                a: "In the Hanafi school of thought, Zakat is mandatory on all gold and silver jewelry, regardless of whether it is worn daily, occasionally, or kept in a safe. The Shafi'i, Maliki, and Hanbali schools generally exempt jewelry intended for personal use, provided the quantity is not extravagant."
              },
              {
                q: "How do I calculate Zakat on 22k or 18k gold?",
                a: "Zakat is calculated on pure 24-karat gold. For mixed karats, you multiply the weight by its purity percentage (e.g., 22k is 91.6% pure). This calculator automatically converts your 22k, 21k, or 18k gold into its 24k pure gold equivalent for an accurate calculation."
              },
              {
                q: "What is the difference between Tola and Grams for Nisab?",
                a: "A Tola is a traditional South Asian unit of mass equal to 11.66 grams. The Gold Nisab of 87.48 grams is equivalent to approximately 7.5 Tolas, while the Silver Nisab of 612.36 grams equals 52.5 Tolas."
              },
              {
                q: "Do I pay Zakat on silver coins or utensils?",
                a: "Yes, Zakat is due on all silver items including coins, bullion, plates, and utensils, as silver is inherently considered a Zakat-able form of wealth."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-amber-400 shrink-0" />
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
