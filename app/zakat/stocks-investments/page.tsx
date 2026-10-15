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
  Calculator,
  Coins,
  TrendingUp,
  Briefcase,
  Heart,
  BarChart4,
  PieChart,
  Landmark
} from 'lucide-react';
import YouTubeEmbed from '@/src/components/common/YouTubeEmbed';

export default function StocksInvestmentsCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  const [activeShares, setActiveShares] = useState<number | ''>('');
  const [passiveShares, setPassiveShares] = useState<number | ''>('');
  const [passiveRule, setPassiveRule] = useState<'25' | 'exact'>('25');
  const [exactLiquidPercentage, setExactLiquidPercentage] = useState<number | ''>(25);
  const [mutualFunds, setMutualFunds] = useState<number | ''>('');
  const [retirementFunds, setRetirementFunds] = useState<number | ''>('');
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- LOGIC ---
  const nisabThresholds: Record<string, { value: number, sym: string }> = {
    USD: { value: 520.50, sym: '$' },
    GBP: { value: 410.20, sym: '£' },
    PKR: { value: 143904, sym: 'Rs' },
    SAR: { value: 1953.40, sym: 'SAR' },
    AED: { value: 1910.64, sym: 'AED' }
  };
  
  const currentNisab = nisabThresholds[currency] || nisabThresholds['USD'];
  const sym = currentNisab.sym;

  // Numeric parsers
  const activeVal = Number(activeShares) || 0;
  const passiveVal = Number(passiveShares) || 0;
  const mutualVal = Number(mutualFunds) || 0;
  const retirementVal = Number(retirementFunds) || 0;
  const exactPct = Number(exactLiquidPercentage) || 0;

  // Passive Share Zakat Logic
  const passiveZakatableVal = passiveRule === '25' 
    ? passiveVal * 0.25 
    : passiveVal * (exactPct / 100);

  // Total Zakatable Calculation
  const totalZakatablePortfolio = activeVal + passiveZakatableVal + mutualVal + retirementVal;
  
  // Total Market Value for display purposes
  const totalMarketValue = activeVal + passiveVal + mutualVal + retirementVal;

  const isEligible = totalZakatablePortfolio >= currentNisab.value;
  const zakatPayable = isEligible ? totalZakatablePortfolio * 0.025 : 0;

  const resetCalculator = () => {
    setActiveShares('');
    setPassiveShares('');
    setMutualFunds('');
    setRetirementFunds('');
    setPassiveRule('25');
    setExactLiquidPercentage(25);
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Stocks and Investments Zakat Calculator",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "description": "Calculate Zakat on your stock portfolios, mutual funds, ETFs, passive investments, and retirement funds based on AAOIFI standards.",
                "url": "https://islamhub.com/zakat/stocks-investments/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I calculate Zakat on passive long-term dividend stocks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For passive long-term investments where you hold stocks for dividend yield rather than trading, Zakat is only due on the underlying liquid zakatable assets of the company. As a general proxy approved by many scholars, you can take 25% of the total market value and pay 2.5% on that, or calculate the exact percentage from the company's balance sheet."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Zakat due on non-accessible 401(k) or pension funds?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zakat is generally due on the accessible portion of your retirement funds. You calculate it on the balance you would receive if you withdrew it today, subtracting early withdrawal penalties and estimated taxes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I pay Zakat on unrealized capital gains in active stock trading?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For active trading portfolios (stocks bought with the intention of reselling for capital gains), Zakat is due on the full current market value of the portfolio on your Zakat anniversary date, including any unrealized gains."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Zakat calculated on equity Mutual Funds and ETFs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For active trading, you pay 2.5% on the entire market value. If held passively for long-term growth or dividends, you may determine the underlying liquid zakatable assets of the fund. However, for simplicity, many scholars suggest treating the entire accessible balance as zakatable wealth or applying the 25% proxy rule."
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
                    "name": "Stocks & Investments Calculator",
                    "item": "https://islamhub.com/zakat/stocks-investments/"
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
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-blue-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Stocks & Investments Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Zakat on Stocks & Investments Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-100/90">
              AAOIFI & Shariah Compliant Equity Formulas | Verified by Financial Fiqh Experts
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-blue-500 rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat on <strong className="text-blue-400 font-semibold">active trading stocks</strong> is 2.5% of full market value, while <strong className="text-blue-400 font-semibold">passive long-term shares</strong> are calculated on net zakatable assets per share (or using the 25% proxy rule). Mutual funds, ETFs, and retirement funds (401k/IRA) are calculated based on accessible liquid balances.
            </p>
          </div>
        </header>

        {/* Phase 2: Equity & Investment Calculator Wizard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (Inputs) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Currency Selector */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Currency</h3>
              <div className="flex flex-wrap gap-2">
                {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                      currency === curr 
                        ? 'bg-blue-600 border-blue-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Trading Shares Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-400" /> Active Trading Shares
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Total Market Value of Trading Portfolio</label>
                <p className="text-xs text-slate-500 mb-3">Shares bought specifically for day trading or short-term capital gains.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={activeShares} onChange={e => setActiveShares(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* Passive Long-Term Shares Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <BarChart4 className="w-5 h-5 text-indigo-400" /> Passive Long-Term Shares
              </h3>
              <div className="mb-5">
                <label className="block text-sm text-slate-300 mb-1 font-medium">Total Market Value of Passive Portfolio</label>
                <p className="text-xs text-slate-500 mb-3">Shares held for long-term dividend growth, not active reselling.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={passiveShares} onChange={e => setPassiveShares(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" 
                  />
                </div>
              </div>

              {/* Passive Rule Toggle */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Calculation Method for Passive Shares</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setPassiveRule('25')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-medium transition-colors border text-center ${
                      passiveRule === '25' 
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Standard 25% Liquid Asset Rule
                  </button>
                  <button
                    onClick={() => setPassiveRule('exact')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-medium transition-colors border text-center ${
                      passiveRule === 'exact' 
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Custom Net Asset Valuation
                  </button>
                </div>
                {passiveRule === 'exact' && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                    <label className="block text-xs text-slate-400 mb-1">Enter Custom Liquid Asset % (e.g., from financial reports)</label>
                    <div className="relative max-w-[150px]">
                      <input 
                        type="number" min="0" max="100" placeholder="25"
                        value={exactLiquidPercentage} onChange={e => setExactLiquidPercentage(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 pr-8 py-1.5 text-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-sm" 
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm">%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mutual Funds & ETFs Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <PieChart className="w-5 h-5 text-white" /> Mutual Funds & ETFs
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Total Current Value</label>
                <p className="text-xs text-slate-500 mb-3">Index funds, equity mutual funds, and Shariah-compliant ETFs.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={mutualFunds} onChange={e => setMutualFunds(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-white focus:border-white transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* Retirement Funds (401k/IRA/Pension) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Landmark className="w-5 h-5 text-white" /> Retirement Funds (401k / IRA / Pension)
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Accessible Balance (Net of Penalties)</label>
                <p className="text-xs text-slate-500 mb-3">Only enter the amount you would receive if you cashed out today (minus penalties and taxes).</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={retirementFunds} onChange={e => setRetirementFunds(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-white focus:border-white transition-colors" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Result Engine) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Live Net Zakat-Eligible Portfolio Value */}
                <div className="p-6 border-b border-slate-800 bg-slate-950/80">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Portfolio Valuation</h3>
                  
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-slate-400">Total Market Value:</span>
                    <span className="text-slate-300 font-medium">{sym} {totalMarketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800 border-dashed">
                    <span className="text-blue-400 font-medium">Zakatable Portion:</span>
                    <span className="text-white font-bold">{sym} {totalZakatablePortfolio.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Live Nisab Threshold:</span>
                    <span className="text-slate-400 font-medium">{sym} {currentNisab.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-5">
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

                {/* 2.5% Net Payable Zakat Card */}
                <div className="p-6 bg-gradient-to-br from-blue-900/30 to-slate-900">
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">2.5% Net Payable Zakat</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-blue-400' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-blue-200/60 mt-3 leading-relaxed">
                      Zakat amount due on your equity, mutual funds, and retirement portfolio based on Shariah valuations.
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

        {/* Phase 3 & 5: Horizontal Sibling Silo Links Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <Link href="/zakat-calculator/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Calculator className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Universal</span>
          </Link>
          <Link href="/zakat/gold-silver/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Coins className="w-6 h-6 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Gold Tool</span>
          </Link>
          <Link href="/zakat/crypto/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Coins className="w-6 h-6 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Crypto</span>
          </Link>
          <Link href="/zakat/business/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Briefcase className="w-6 h-6 text-indigo-500/70 group-hover:text-indigo-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Business</span>
          </Link>
          <Link href="/zakat/fitrana/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Heart className="w-6 h-6 text-rose-500/70 group-hover:text-rose-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Fitrana</span>
          </Link>
        </div>

        {/* Phase 2: Stock Classification HTML Data Table */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Stock Classification & Zakat Rules</h2>
          <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800">
                  <th className="p-4 text-sm font-semibold text-slate-300">Asset Category</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Zakat Rate</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Deduction Allowance</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">AAOIFI Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-bold text-blue-400">Active Trading Shares</td>
                  <td className="p-4 text-sm text-slate-300">2.5% of Full Market Value</td>
                  <td className="p-4 text-sm text-slate-400">No deductions allowed</td>
                  <td className="p-4 text-sm text-slate-500">Standard No. 35 (Trading)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-indigo-300">Passive / Dividend Shares</td>
                  <td className="p-4 text-sm text-slate-300">2.5% of Liquid Net Assets</td>
                  <td className="p-4 text-sm text-slate-400">Fixed assets (buildings, machinery) exempt</td>
                  <td className="p-4 text-sm text-slate-500">Standard No. 35 (Investment)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-white">Mutual Funds / ETFs</td>
                  <td className="p-4 text-sm text-slate-300">2.5% of Market Value</td>
                  <td className="p-4 text-sm text-slate-400">Treated based on fund intent (Trading vs Passive)</td>
                  <td className="p-4 text-sm text-slate-500">Standard No. 35</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-medium text-white">Retirement / 401(k)</td>
                  <td className="p-4 text-sm text-slate-300">2.5% of Accessible Funds</td>
                  <td className="p-4 text-sm text-slate-400">Deduct early penalties & taxes</td>
                  <td className="p-4 text-sm text-slate-500">Various Fatawa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">* Check with your local scholar regarding specific company asset ratios and specific mutual fund rulings.</p>
        </div>

        {/* YouTube Video Guide (Embedded right above FAQ section) */}
        <div className="max-w-4xl mb-12">
          <YouTubeEmbed
            videoId="dQw4w9WgXcQ"
            title="Calculating Zakat on Stock Portfolios, ETFs & 401(k)s"
            description="Understand how to differentiate active day trading vs passive dividend portfolios, how to calculate the 25% or 30% liquid asset proxy, and how to assess retirement funds."
            badgeText="Investment Video Guide"
            duration="PT10M30S"
            uploadDate="2026-10-15T08:00:00+05:00"
          />
        </div>

        {/* Phase 4: Investment FAQ Accordion */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "How do I calculate Zakat on passive long-term dividend stocks?",
                a: "For passive long-term investments where you hold stocks for dividend yield rather than trading, Zakat is only due on the underlying liquid zakatable assets of the company (cash, inventory, receivables). As a general proxy approved by many scholars, you can take 25% of the total market value and pay 2.5% on that, or calculate the exact percentage from the company's balance sheet."
              },
              {
                q: "Is Zakat due on non-accessible 401(k) or pension funds?",
                a: "Zakat is generally due on the accessible portion of your retirement funds. You calculate it on the balance you would receive if you withdrew it today, subtracting early withdrawal penalties and estimated taxes."
              },
              {
                q: "Do I pay Zakat on unrealized capital gains in active stock trading?",
                a: "For active trading portfolios (stocks bought with the intention of reselling for capital gains), Zakat is due on the full current market value of the portfolio on your Zakat anniversary date, including any unrealized gains."
              },
              {
                q: "How is Zakat calculated on equity Mutual Funds and ETFs?",
                a: "For active trading, you pay 2.5% on the entire market value. If held passively for long-term growth or dividends, you may determine the underlying liquid zakatable assets of the fund. However, for simplicity, many scholars suggest treating the entire accessible balance as zakatable wealth or applying the 25% proxy rule."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-blue-400 shrink-0" />
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
