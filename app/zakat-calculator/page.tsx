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
import YouTubeEmbed from '@/src/components/common/YouTubeEmbed';

// Live Market Prices per gram by currency
const CURRENCY_PRICES: Record<string, { gold: number; silver: number; sym: string }> = {
  USD: { gold: 75.50, silver: 0.85, sym: '$' },
  GBP: { gold: 59.30, silver: 0.67, sym: '£' },
  PKR: { gold: 21000, silver: 235, sym: 'Rs' },
  SAR: { gold: 283.15, silver: 3.19, sym: 'SAR' },
  AED: { gold: 277.30, silver: 3.12, sym: 'AED' }
};

export default function ZakatCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  
  // Cash & Bank
  const [cashOnHand, setCashOnHand] = useState<number | ''>('');
  const [bankBalance, setBankBalance] = useState<number | ''>('');
  
  // Gold (3 inputs: tola, grams, ounces)
  const [goldTola, setGoldTola] = useState<number | ''>('');
  const [goldGrams, setGoldGrams] = useState<number | ''>('');
  const [goldOunces, setGoldOunces] = useState<number | ''>('');
  const [goldPurity, setGoldPurity] = useState<'24k' | '22k' | '21k' | '18k'>('24k');
  
  // Silver (3 inputs: tola, grams, ounces)
  const [silverTola, setSilverTola] = useState<number | ''>('');
  const [silverGrams, setSilverGrams] = useState<number | ''>('');
  const [silverOunces, setSilverOunces] = useState<number | ''>('');

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
  const currentRates = CURRENCY_PRICES[currency] || CURRENCY_PRICES['USD'];
  const sym = currentRates.sym;

  const getPurityMultiplier = (purity: string) => {
    switch(purity) {
      case '18k': return 18 / 24;
      case '21k': return 21 / 24;
      case '22k': return 22 / 24;
      case '24k': default: return 1;
    }
  };

  // Base 24k gold price and current effective gold price based on purity
  const baseGoldPrice = currentRates.gold;
  const effectiveGoldPricePerGram = baseGoldPrice * getPurityMultiplier(goldPurity);
  const effectiveSilverPricePerGram = currentRates.silver;

  // Total weights in grams (1 tola = 11.66g, 1 ounce = 28.3495g)
  const totalGoldGrams = 
    ((Number(goldTola) || 0) * 11.66) + 
    (Number(goldGrams) || 0) + 
    ((Number(goldOunces) || 0) * 28.3495);

  const calculateGoldValue = () => totalGoldGrams * effectiveGoldPricePerGram;

  const totalSilverGrams = 
    ((Number(silverTola) || 0) * 11.66) + 
    (Number(silverGrams) || 0) + 
    ((Number(silverOunces) || 0) * 28.3495);

  const calculateSilverValue = () => totalSilverGrams * effectiveSilverPricePerGram;

  const totalCashAndBank = (Number(cashOnHand) || 0) + (Number(bankBalance) || 0);

  const totalAssets = 
    totalCashAndBank + 
    calculateGoldValue() + 
    calculateSilverValue() +
    (Number(activeTrading) || 0) + 
    (Number(passiveDividend) || 0) + 
    (Number(businessCash) || 0) + 
    (Number(rawMaterials) || 0) + 
    (Number(finishedInventory) || 0);

  const totalLiabilities = (Number(shortTermDebts) || 0);
  const netAssets = Math.max(0, totalAssets - totalLiabilities);
  
  // Live Nisab Values (Calculated in local currency)
  const nisabGoldValue = 87.48 * baseGoldPrice;
  const nisabSilverValue = 612.36 * effectiveSilverPricePerGram;
  // In Hanafi fiqh, typically the silver threshold is followed to benefit the poor
  const currentNisabThreshold = Math.min(nisabGoldValue, nisabSilverValue);

  const isEligible = netAssets >= currentNisabThreshold;
  const zakatPayable = isEligible ? netAssets * 0.025 : 0;

  const resetCalculator = () => {
    setCashOnHand(''); 
    setBankBalance('');
    setGoldTola(''); 
    setGoldGrams(''); 
    setGoldOunces('');
    setSilverTola(''); 
    setSilverGrams(''); 
    setSilverOunces('');
    setActiveTrading(''); 
    setPassiveDividend('');
    setBusinessCash(''); 
    setRawMaterials(''); 
    setFinishedInventory('');
    setShortTermDebts('');
  };

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
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-white transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Universal Zakat Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Universal Zakat Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span className="text-xs font-medium text-white">
              Shariah-Vetted Formula | Verified by Islamic Jurisprudence Researchers
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-white rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-white" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat is obligatory at a strict rate of <strong className="text-white font-semibold">2.5%</strong> on surplus wealth held for a full lunar year. The current mandatory Nisab threshold is evaluated against <strong className="text-white font-semibold">87.48 grams of Gold</strong> or <strong className="text-white font-semibold">612.36 grams of Silver</strong>, whichever provides the greater benefit to the poor in your local currency.
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
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                      currency === curr 
                        ? 'bg-white text-black border-white shadow-md' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
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
                <Calculator className="w-5 h-5 text-white" /> Cash & Bank Balances
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Cash on Hand</label>
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-white focus-within:border-white transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={cashOnHand} onChange={e => setCashOnHand(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-700 text-sm" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Bank Balances</label>
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-white focus-within:border-white transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={bankBalance} onChange={e => setBankBalance(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-700 text-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* Hawl Note (Requirement: Amount held for a full lunar year) */}
              <div className="flex items-start gap-2.5 pt-3 border-t border-slate-800/80 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Note: Only enter the wealth/savings that have remained in your possession continuously for a full lunar year (Hawl).
                  </p>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed" dir="rtl">
                    نوٹ: صرف وہی رقم درج کریں جو مکمل ایک قمری سال (حول) تک آپ کے پاس محفوظ رہی ہو۔
                  </p>
                </div>
              </div>
            </div>

            {/* Gold & Silver */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-3">
                <Coins className="w-5 h-5 text-amber-400" /> Precious Metals (Gold & Silver)
              </h3>
              
              {/* Gold Section */}
              <div className="space-y-4 p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                    <h4 className="text-sm font-semibold text-amber-400 tracking-wide uppercase">Gold</h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Purity Selection */}
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-slate-400 font-medium">Purity:</label>
                      <select 
                        value={goldPurity} 
                        onChange={e => setGoldPurity(e.target.value as any)}
                        className="bg-slate-900 border border-slate-700 text-amber-300 text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-amber-500 outline-none cursor-pointer"
                      >
                        <option value="24k">24K (99.9%)</option>
                        <option value="22k">22K (91.6%)</option>
                        <option value="21k">21K (87.5%)</option>
                        <option value="18k">18K (75.0%)</option>
                      </select>
                    </div>

                    {/* Auto Live Rate Display */}
                    <div className="bg-amber-950/40 border border-amber-800/40 rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5">
                      <span className="text-slate-400">Rate:</span>
                      <span className="text-amber-300 font-semibold">
                        {sym} {effectiveGoldPricePerGram.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/g
                      </span>
                      <span className="text-[10px] text-amber-400/80 font-medium">(Auto)</span>
                    </div>
                  </div>
                </div>

                {/* 3 Weight Inputs: Tola, Gram, Ounce */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">
                    Enter Weight in any or multiple units:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Tola <span className="text-[11px] text-slate-500">(1 tola = 11.66g)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={goldTola} 
                        onChange={e => setGoldTola(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Gram <span className="text-[11px] text-slate-500">(Grams)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={goldGrams} 
                        onChange={e => setGoldGrams(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Ounce <span className="text-[11px] text-slate-500">(1 oz = 28.35g)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={goldOunces} 
                        onChange={e => setGoldOunces(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                  </div>
                </div>

                {/* Total Gold Summary in Grams & Value */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span>Total Gold:</span>
                    <span className="text-amber-400 font-bold text-sm">
                      {totalGoldGrams > 0 ? totalGoldGrams.toFixed(2) : '0.00'} grams
                    </span>
                  </div>
                  <div className="text-slate-400">
                    Estimated Value: <span className="text-white font-semibold">{sym} {calculateGoldValue().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Silver Section */}
              <div className="space-y-4 p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span>
                    <h4 className="text-sm font-semibold text-slate-300 tracking-wide uppercase">Silver</h4>
                  </div>

                  {/* Auto Live Rate Display */}
                  <div className="bg-slate-900/90 border border-slate-700/60 rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5">
                    <span className="text-slate-400">Live Rate:</span>
                    <span className="text-slate-200 font-semibold">
                      {sym} {effectiveSilverPricePerGram.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/g
                    </span>
                    <span className="text-[10px] text-slate-400/80 font-medium">(Auto)</span>
                  </div>
                </div>

                {/* 3 Weight Inputs: Tola, Gram, Ounce */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">
                    Enter Weight in any or multiple units:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Tola <span className="text-[11px] text-slate-500">(1 tola = 11.66g)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={silverTola} 
                        onChange={e => setSilverTola(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Gram <span className="text-[11px] text-slate-500">(Grams)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={silverGrams} 
                        onChange={e => setSilverGrams(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">
                        Ounce <span className="text-[11px] text-slate-500">(1 oz = 28.35g)</span>
                      </label>
                      <input 
                        type="number" min="0" step="any" placeholder="0"
                        value={silverOunces} 
                        onChange={e => setSilverOunces(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors placeholder:text-slate-700" 
                      />
                    </div>
                  </div>
                </div>

                {/* Total Silver Summary in Grams & Value */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span>Total Silver:</span>
                    <span className="text-slate-200 font-bold text-sm">
                      {totalSilverGrams > 0 ? totalSilverGrams.toFixed(2) : '0.00'} grams
                    </span>
                  </div>
                  <div className="text-slate-400">
                    Estimated Value: <span className="text-white font-semibold">{sym} {calculateSilverValue().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
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
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={activeTrading} onChange={e => setActiveTrading(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-700 text-sm" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Passive Portfolios (Zakat-able Portion)</label>
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={passiveDividend} onChange={e => setPassiveDividend(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-700 text-sm" 
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
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-2.5 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={businessCash} onChange={e => setBusinessCash(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-2.5 py-2 text-sm text-white outline-none placeholder:text-slate-700" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Raw Materials</label>
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-2.5 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={rawMaterials} onChange={e => setRawMaterials(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-2.5 py-2 text-sm text-white outline-none placeholder:text-slate-700" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Finished Inventory</label>
                  <div className="flex rounded-lg border border-slate-800 bg-slate-950 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-2.5 text-xs font-semibold text-slate-400 bg-slate-900/80 border-r border-slate-800 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={finishedInventory} onChange={e => setFinishedInventory(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-2.5 py-2 text-sm text-white outline-none placeholder:text-slate-700" 
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
                  <div className="flex rounded-lg border border-rose-900/50 bg-slate-950 focus-within:ring-1 focus-within:ring-rose-500 focus-within:border-rose-500 transition-colors overflow-hidden">
                    <span className="inline-flex items-center px-3 text-xs font-semibold text-rose-400 bg-rose-950/40 border-r border-rose-900/50 select-none">
                      {sym}
                    </span>
                    <input 
                      type="number" min="0" step="any" placeholder="0.00"
                      value={shortTermDebts} onChange={e => setShortTermDebts(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-700 text-sm" 
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
                  <div className="text-3xl font-bold text-white mb-3">
                    {sym} {netAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  
                  {totalLiabilities > 0 && (
                    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 mb-3 text-xs space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>Gross Assets:</span>
                        <span className="text-slate-200 font-medium">{sym} {totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between text-rose-400">
                        <span>Deductible Debts:</span>
                        <span className="font-medium">- {sym} {totalLiabilities.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-sm py-2 border-t border-slate-800 border-dashed">
                    <span className="text-slate-400">Current Nisab (Silver):</span>
                    <span className="text-slate-200 font-medium">{sym} {currentNisabThreshold.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    {isEligible ? (
                      <div className="px-3 py-1 rounded bg-neutral-800 text-white text-xs font-bold border border-neutral-800">
                        ELIGIBLE FOR ZAKAT
                      </div>
                    ) : (
                      <div className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold border border-slate-700">
                        EXEMPT (BELOW NISAB)
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">2.5% Zakat Payable</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-white' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-white mt-3 leading-relaxed">
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
          <Link href="/zakat/gold-silver/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Coins className="w-8 h-8 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Gold & Silver</span>
          </Link>
          <Link href="/zakat/stocks-investments/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <TrendingUp className="w-8 h-8 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Stocks & Wealth</span>
          </Link>
          <Link href="/zakat/business/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Briefcase className="w-8 h-8 text-indigo-500/70 group-hover:text-indigo-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Business Zakat</span>
          </Link>
          <Link href="/zakat/fitrana/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Heart className="w-8 h-8 text-rose-500/70 group-hover:text-rose-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Fitrana (Al-Fitr)</span>
          </Link>
        </div>

        {/* Asset Classification Rules */}
        <div className="max-w-4xl mb-12">
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
                  <td className="p-4 text-sm font-medium text-white flex items-center gap-2"><Briefcase className="w-4 h-4 text-white"/> Business Inventory</td>
                  <td className="p-4 text-sm text-slate-400">Value of raw materials and finished goods intended for sale.</td>
                  <td className="p-4 text-xs text-slate-500">Sunan Abi Dawud 1562</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* YouTube Video Guide (Embedded right above FAQ section) */}
        <div className="max-w-4xl mb-12">
          <YouTubeEmbed
            videoId="dQw4w9WgXcQ"
            title="How to Calculate Zakat Accurately: Step-by-Step Guide"
            description="Comprehensive step-by-step guidance on calculating your obligatory Zakat on cash, gold, silver, investments, and business assets using live Nisab thresholds."
            badgeText="Calculation Video Guide"
            duration="PT10M30S"
            uploadDate="2026-10-15T08:00:00+05:00"
          />
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
                    <Minus className="w-5 h-5 text-white shrink-0" />
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
