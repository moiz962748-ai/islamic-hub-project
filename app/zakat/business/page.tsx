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
  Building2,
  Package,
  FileText,
  CreditCard
} from 'lucide-react';

export default function BusinessZakatCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  const [cashBank, setCashBank] = useState<number | ''>('');
  
  // Inventory
  const [rawMaterials, setRawMaterials] = useState<number | ''>('');
  const [wip, setWip] = useState<number | ''>('');
  const [finishedGoods, setFinishedGoods] = useState<number | ''>('');
  
  // Receivables & Liabilities
  const [receivables, setReceivables] = useState<number | ''>('');
  const [liabilities, setLiabilities] = useState<number | ''>('');
  
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
  const cashVal = Number(cashBank) || 0;
  const rawVal = Number(rawMaterials) || 0;
  const wipVal = Number(wip) || 0;
  const finishedVal = Number(finishedGoods) || 0;
  const receivablesVal = Number(receivables) || 0;
  const liabilitiesVal = Number(liabilities) || 0;

  // Total Gross Assets
  const totalGrossAssets = cashVal + rawVal + wipVal + finishedVal + receivablesVal;
  
  // Net Zakatable Assets
  const netZakatableAssets = Math.max(0, totalGrossAssets - liabilitiesVal);

  const isEligible = netZakatableAssets >= currentNisab.value;
  const zakatPayable = isEligible ? netZakatableAssets * 0.025 : 0;

  const resetCalculator = () => {
    setCashBank('');
    setRawMaterials('');
    setWip('');
    setFinishedGoods('');
    setReceivables('');
    setLiabilities('');
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Business Zakat Calculator",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "description": "Calculate Zakat on your commercial enterprise, trade inventory (Urud al-Tijarah), cash, receivables, and deduct allowable short-term liabilities.",
                "url": "https://islamhub.com/zakat/business/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Are fixed assets like machinery, equipment, and company vehicles subject to Zakat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, fixed assets that are used to run the business (machinery, property, office furniture, delivery vehicles, computers) are strictly exempt from Zakat. Zakat is only due on assets intended for resale (inventory) and liquid capital."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I value wholesale inventory vs retail selling price for Zakat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Finished goods intended for sale should generally be valued at their current wholesale market value (what it would cost you to replace them in bulk today), not their final retail selling price."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I deduct outstanding business loans and supplier debts before calculating?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, short-term operating liabilities such as supplier invoices, upcoming payroll, and utility bills due within the current lunar year can be deducted from your total Zakatable assets."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I handle bad debt or uncollectible client invoices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You only include 'good debt' (receivables you are confident will be paid). Bad debt or highly doubtful invoices should be excluded from your calculation until you actually receive the funds."
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
                    "name": "Business Zakat Calculator",
                    "item": "https://islamhub.com/zakat/business/"
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
          <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-indigo-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Business Zakat Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Business Zakat Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-indigo-900/30 border border-indigo-800/50 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium text-indigo-100/90">
              Commercial Fiqh Formula | Verified by Islamic Commerce Scholars
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-indigo-500 rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat on commercial business (<strong className="text-indigo-400 italic">Urud al-Tijarah</strong>) is calculated at 2.5% on net trade assets: Cash in hand/bank + Finished Inventory + Receivables minus Short-Term Operating Liabilities. Fixed assets (machinery, property, office furniture) are strictly exempt.
            </p>
          </div>
        </header>

        {/* Phase 2: Commercial Asset Calculator Wizard */}
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
                        ? 'bg-indigo-600 border-indigo-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Cash & Bank Balances */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Building2 className="w-5 h-5 text-indigo-400" /> Business Cash & Bank Balances
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Liquid Capital</label>
                <p className="text-xs text-slate-500 mb-3">Cash in registers, business bank accounts, and liquid reserves earmarked for operations.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={cashBank} onChange={e => setCashBank(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* Trade Goods & Inventory Input Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Package className="w-5 h-5 text-emerald-400" /> Trade Goods & Inventory
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">Raw Materials</label>
                  <p className="text-xs text-slate-500 mb-2">Unprocessed stock value.</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0"
                      value={rawMaterials} onChange={e => setRawMaterials(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1 font-medium">Work in Progress (WIP)</label>
                  <p className="text-xs text-slate-500 mb-2">Partially finished goods.</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0"
                      value={wip} onChange={e => setWip(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1 font-medium">Finished Wholesale/Retail Stock</label>
                  <p className="text-xs text-slate-500 mb-2">Current wholesale value of ready-to-sell inventory.</p>
                  <div className="relative max-w-md">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                    <input 
                      type="number" min="0" placeholder="0"
                      value={finishedGoods} onChange={e => setFinishedGoods(e.target.value ? Number(e.target.value) : '')}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Receivables (Good Debts Owed to Business) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <FileText className="w-5 h-5 text-blue-400" /> Receivables (Good Debts)
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Invoices & Outstanding Payments</label>
                <p className="text-xs text-slate-500 mb-3">Only include 'good debt' that you are confident will be paid.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={receivables} onChange={e => setReceivables(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* Deductible Operating Liabilities Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <CreditCard className="w-5 h-5 text-rose-400" /> Deductible Operating Liabilities
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Short-Term Business Debts</label>
                <p className="text-xs text-slate-500 mb-3">Supplier debts, utility bills, and immediate employee salaries due within the current lunar year.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={liabilities} onChange={e => setLiabilities(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Result Engine) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Live Net Commercial Asset Calculation */}
                <div className="p-6 border-b border-slate-800 bg-slate-950/80">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Commercial Valuation</h3>
                  
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-slate-400">Total Gross Assets:</span>
                    <span className="text-slate-300 font-medium">{sym} {totalGrossAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-rose-400/80">Less Liabilities:</span>
                    <span className="text-rose-400/80 font-medium">-{sym} {liabilitiesVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800 border-dashed">
                    <span className="text-indigo-400 font-medium">Net Zakatable Assets:</span>
                    <span className="text-white font-bold">{sym} {netZakatableAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Live Nisab Threshold:</span>
                    <span className="text-slate-400 font-medium">{sym} {currentNisab.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
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

                {/* 2.5% Net Payable Business Zakat Card */}
                <div className="p-6 bg-gradient-to-br from-indigo-900/30 to-slate-900">
                  <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">2.5% Net Payable Zakat</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-indigo-200/60 mt-3 leading-relaxed">
                      Zakat amount due on your commercial net assets for the current lunar year.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link href="/zakat-calculator/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Calculator className="w-8 h-8 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Universal Calc</span>
          </Link>
          <Link href="/zakat/gold-silver/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Coins className="w-8 h-8 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Gold & Silver</span>
          </Link>
          <Link href="/zakat/stocks-investments/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <TrendingUp className="w-8 h-8 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Stocks & Wealth</span>
          </Link>
          <Link href="/zakat/fitrana/" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
            <Heart className="w-8 h-8 text-rose-500/70 group-hover:text-rose-400 transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Fitrana (Al-Fitr)</span>
          </Link>
        </div>

        {/* Phase 2: Commercial Asset Eligibility HTML Data Table & Video */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-white mb-6">Business Assets Zakat Rules</h2>
            <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800">
                    <th className="p-4 text-sm font-semibold text-slate-300">Business Asset</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Zakat Status</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Shariah Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-bold text-emerald-400">Trade Inventory (Raw & Finished)</td>
                    <td className="p-4 text-sm text-slate-300">Taxable at wholesale value</td>
                    <td className="p-4 text-sm text-slate-400">Urud al-Tijarah rule</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-400">Fixed Assets (Machinery, Vehicles)</td>
                    <td className="p-4 text-sm text-slate-500">Strictly Exempt</td>
                    <td className="p-4 text-sm text-slate-500">Not intended for resale</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-indigo-300">Cash & Bank Balances</td>
                    <td className="p-4 text-sm text-slate-300">Taxable (Full Amount)</td>
                    <td className="p-4 text-sm text-slate-400">Liquid business capital</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-rose-300">Short-Term Liabilities</td>
                    <td className="p-4 text-sm text-slate-300">Deductible</td>
                    <td className="p-4 text-sm text-slate-400">Net asset principle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-white mb-6">Video Guide</h2>
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
              <button className="z-20 w-16 h-16 rounded-full bg-indigo-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <PlayCircle className="w-8 h-8 fill-slate-950 text-white" />
              </button>
              <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                3 Min Guide
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">How to Calculate Zakat on Trade Inventory & Business Debt</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Phase 4: Commercial FAQ Accordion */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Are fixed assets like machinery, equipment, and company vehicles subject to Zakat?",
                a: "No, fixed assets that are used to run the business (machinery, property, office furniture, delivery vehicles, computers) are strictly exempt from Zakat. Zakat is only due on assets intended for resale (inventory) and liquid capital."
              },
              {
                q: "How do I value wholesale inventory vs retail selling price for Zakat?",
                a: "Finished goods intended for sale should generally be valued at their current wholesale market value (what it would cost you to replace them in bulk today), not their final retail selling price."
              },
              {
                q: "Can I deduct outstanding business loans and supplier debts before calculating?",
                a: "Yes, short-term operating liabilities such as supplier invoices, upcoming payroll, and utility bills due within the current lunar year can be deducted from your total Zakatable assets."
              },
              {
                q: "How do I handle bad debt or uncollectible client invoices?",
                a: "You only include 'good debt' (receivables you are confident will be paid). Bad debt or highly doubtful invoices should be excluded from your calculation until you actually receive the funds."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-indigo-400 shrink-0" />
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
