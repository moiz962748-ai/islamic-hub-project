'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight,
  Info,
  PlayCircle,
  Plus,
  Minus,
  ShieldCheck,
  Calculator,
  Users,
  Wheat,
  RotateCcw,
  Clock,
  Coins,
  TrendingUp,
  Globe,
  Briefcase,
  BookOpen,
  FileText
} from 'lucide-react';

export default function FitranaPage() {
  const [currency, setCurrency] = useState('USD');
  const [householdCount, setHouseholdCount] = useState<number>(1);
  const [selectedCommodity, setSelectedCommodity] = useState<string>('wheat');
  const [customPriceStr, setCustomPriceStr] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currencies: Record<string, { sym: string }> = {
    USD: { sym: '$' },
    GBP: { sym: '£' },
    PKR: { sym: 'Rs' },
    SAR: { sym: 'SAR' },
    AED: { sym: 'AED' }
  };
  const sym = currencies[currency]?.sym || '$';

  const commodities: Record<string, { name: string, desc: string, icon: any, rates: Record<string, number> }> = {
    wheat: { 
      name: 'Wheat Flour', 
      desc: 'Standard ~1 Sa\' (Approx. 2.5kg)',
      icon: Wheat,
      rates: { USD: 3.50, GBP: 2.75, PKR: 300, SAR: 13, AED: 13 } 
    },
    barley: { 
      name: 'Barley', 
      desc: '~1 Sa\' (Approx. 3kg)',
      icon: Wheat,
      rates: { USD: 6.00, GBP: 4.75, PKR: 550, SAR: 22.50, AED: 22 } 
    },
    dates: { 
      name: 'Dates', 
      desc: '~1 Sa\' (Approx. 3kg)',
      icon: Coins,
      rates: { USD: 12.00, GBP: 9.50, PKR: 1200, SAR: 45, AED: 44 } 
    },
    raisins: { 
      name: 'Raisins', 
      desc: '~1 Sa\' (Approx. 3kg)',
      icon: Coins,
      rates: { USD: 15.00, GBP: 11.80, PKR: 1800, SAR: 56, AED: 55 } 
    }
  };

  const handleHouseholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setHouseholdCount(isNaN(val) || val < 1 ? 1 : val);
  };

  const handleCustomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPriceStr(e.target.value);
  };

  const resetCalculator = () => {
    setCurrency('USD');
    setHouseholdCount(1);
    setSelectedCommodity('wheat');
    setCustomPriceStr('');
  };

  const baseRate = commodities[selectedCommodity]?.rates[currency] || 0;
  const customPrice = parseFloat(customPriceStr);
  const ratePerPerson = !isNaN(customPrice) && customPrice > 0 ? customPrice : baseRate;
  const totalFitrana = householdCount * ratePerPerson;

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      <link rel="canonical" href="https://islamhub.com/zakat/fitrana/" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Fitrana Zakat al-Fitr Calculator",
              "url": "https://islamhub.com/zakat/fitrana/",
              "description": "Calculate your household's Fitrana (Zakat al-Fitr) obligation before Eid prayer based on local food commodities like wheat, barley, dates, or raisins.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the difference between Zakat al-Maal and Zakat al-Fitr (Fitrana)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zakat al-Maal is an annual 2.5% tax on qualifying wealth held for a lunar year. Zakat al-Fitr (Fitrana) is a per-person charitable food contribution due by every Muslim at the end of Ramadan, regardless of wealth (so long as they have food in excess of their needs for the day of Eid)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is the exact deadline to give Fitrana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fitrana must be paid before the Eid al-Fitr prayer begins. It is highly recommended to pay it a few days in advance during Ramadan so that the food or equivalent cash reaches the needy in time for them to celebrate Eid."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pay Fitrana in cash instead of food commodities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While the original prophetic tradition specified food items (wheat, dates, barley), the Hanafi school and many contemporary scholars globally allow the payment of Fitrana in cash equivalent to the value of those food items, as it gives the poor more flexibility to meet their immediate needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Fitrana obligatory for newborn babies born before Eid prayer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if a child is born before the sun sets on the last day of Ramadan (or before the Eid prayer, depending on fiqhi school), the head of the household is obligated to pay Fitrana on their behalf."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
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
                  "name": "Fitrana / Zakat al-Fitr Calculator",
                  "item": "https://islamhub.com/zakat/fitrana/"
                }
              ]
            }
          ])
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Phase 1: Above-the-Fold */}
        <nav className="flex items-center text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-emerald-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Fitrana / Zakat al-Fitr Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Fitrana / Zakat al-Fitr Calculator (2026)
          </h1>
          
          <div className="bg-slate-900/80 backdrop-blur-sm border-l-4 border-emerald-500 rounded-r-xl p-6 sm:p-8 shadow-lg mb-6 max-w-4xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Info className="w-6 h-6 text-emerald-400" />
              What is Zakat al-Fitr?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Zakat al-Fitr (Fitrana) is an obligatory charity due before the Eid al-Fitr prayer on every Muslim household member (including infants). Rates are calculated based on 1 Sa' (approx. 2.5 kg–3 kg) of local staple food commodities such as wheat flour, dates, raisins, or barley.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">
              Verified Ramadan Fiqh & Commodity Rates | Reviewed by Islamic Scholars
            </span>
          </div>
        </header>

        {/* Phase 2: Custom Inputs Wizard (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">1. Local Currency</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(currencies).map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
                      currency === curr 
                        ? 'bg-emerald-600 border-emerald-500 text-white' 
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">2. Household Members</h3>
                  <p className="text-xs text-slate-400">Include yourself, spouse, children, and dependents.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setHouseholdCount(Math.max(1, householdCount - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors text-xl font-bold"
                >
                  -
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="number" 
                    min="1"
                    value={householdCount}
                    onChange={handleHouseholdChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-center text-xl font-bold text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium">People</span>
                </div>
                <button 
                  onClick={() => setHouseholdCount(householdCount + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">3. Staple Commodity Standard</h3>
              <p className="text-xs text-slate-400 mb-4">Select a commodity based on your financial capacity. Prophet Muhammad (PBUH) specified 1 Sa' of food per person.</p>
              
              <div className="space-y-3">
                {Object.entries(commodities).map(([key, comm]) => {
                  const Icon = comm.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCommodity(key)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                        selectedCommodity === key 
                          ? 'bg-emerald-900/20 border-emerald-500 ring-1 ring-emerald-500/50' 
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${selectedCommodity === key ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-slate-400'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="text-white font-bold block">{comm.name}</strong>
                          <span className="text-xs text-slate-400">{comm.desc}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-bold block">{sym} {comm.rates[currency].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Per Person</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <label className="block text-sm font-bold text-white mb-2">Or: Custom Local Price (Optional)</label>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-medium">{sym}</span>
                  </div>
                  <input
                    type="number"
                    value={customPriceStr}
                    onChange={handleCustomPriceChange}
                    placeholder={`Override rate per person`}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Enter the exact local market price for 1 Sa' of your chosen staple if it differs from the estimates above.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Result Engine */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-28 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Fitrana Summary</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Dependents:</span>
                  <span className="text-white font-semibold">{householdCount} People</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Rate ({!isNaN(customPrice) && customPrice > 0 ? 'Custom' : commodities[selectedCommodity].name}):</span>
                  <span className="text-white font-semibold">{sym} {ratePerPerson.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-5 mb-6 text-center">
                <span className="text-xs text-emerald-400/80 font-bold uppercase tracking-wider block mb-1">Total Payable Fitrana</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white flex justify-center items-baseline gap-1">
                  <span className="text-lg text-emerald-500">{sym}</span>
                  {totalFitrana.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xs text-slate-500 block mt-1">{currency}</span>
              </div>

              <div className="bg-rose-950/30 border border-rose-900/50 rounded-lg p-3 flex items-start gap-3 mb-6">
                <Clock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs text-rose-300 font-medium">
                  <strong>Deadline:</strong> Must be paid before Eid al-Fitr Prayer. Do not delay beyond the morning of Eid.
                </p>
              </div>

              <button 
                onClick={resetCalculator}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold py-3 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Reset Calculator
              </button>
            </div>
          </div>
        </div>

        {/* Food Staple Measurement & Fiqh Data Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Food Staple Measurement & Fiqh References</h2>
          <div className="overflow-x-auto bg-slate-900/60 rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800">
                  <th className="p-4 text-sm font-semibold text-slate-300">Commodity Type</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Measurement Weight</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Avg Cost Est. (USD)</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Fiqh Ruling Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-bold text-white flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-emerald-400" /> Wheat Flour (Half Sa' exception)
                  </td>
                  <td className="p-4 text-sm text-slate-300">~1.75 kg - 2.0 kg</td>
                  <td className="p-4 text-sm font-medium text-slate-300">$3 - $5</td>
                  <td className="p-4 text-sm text-slate-400">Hanafi allows Half Sa' for wheat only; others require 1 Full Sa'.</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/30">
                  <td className="p-4 text-sm font-bold text-white flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-emerald-400" /> Barley / Oats
                  </td>
                  <td className="p-4 text-sm text-slate-300">1 Sa' (Approx. 2.5kg - 3kg)</td>
                  <td className="p-4 text-sm font-medium text-slate-300">$5 - $8</td>
                  <td className="p-4 text-sm text-slate-400">Agreed upon by all schools (Shafi'i, Maliki, Hanbali, Hanafi).</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm font-bold text-white flex items-center gap-2">
                    <Coins className="w-4 h-4 text-emerald-400" /> Dates / Raisins
                  </td>
                  <td className="p-4 text-sm text-slate-300">1 Sa' (Approx. 2.5kg - 3kg)</td>
                  <td className="p-4 text-sm font-medium text-slate-300">$10 - $20</td>
                  <td className="p-4 text-sm text-slate-400">Sunnah baseline. highly recommended if financially capable.</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/30">
                  <td className="p-4 text-sm font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" /> Cash Equivalent Value
                  </td>
                  <td className="p-4 text-sm text-slate-300">Value of 1 Sa'</td>
                  <td className="p-4 text-sm font-medium text-slate-300">Variable based on local market</td>
                  <td className="p-4 text-sm text-slate-400">Permitted widely by Hanafi school to better fulfill the needs of the poor today.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 3: Media & Video Facade */}
        <section className="mb-12">
          <div className="aspect-[21/9] w-full max-w-4xl rounded-2xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
            <button className="z-20 w-16 h-16 rounded-full bg-emerald-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <PlayCircle className="w-8 h-8 fill-slate-950 text-white" />
            </button>
            <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
              3 Min Guide
            </div>
            <div className="absolute bottom-5 left-5 z-20">
              <h4 className="text-white font-bold sm:text-lg">Who Must Pay Fitrana and How Is It Calculated?</h4>
            </div>
          </div>
        </section>

        {/* Phase 5: Sibling Silo Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Explore Zakat Calculators & Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <Link href="/zakat-calculator" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <Calculator className="w-6 h-6 text-emerald-500/70 group-hover:text-emerald-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Main Engine</span>
            </Link>
            <Link href="/zakat/gold-silver" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <Coins className="w-6 h-6 text-amber-500/70 group-hover:text-amber-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Gold & Silver</span>
            </Link>
            <Link href="/zakat/stocks-investments" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <TrendingUp className="w-6 h-6 text-blue-500/70 group-hover:text-blue-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Stocks</span>
            </Link>
            <Link href="/zakat/crypto" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <Globe className="w-6 h-6 text-cyan-500/70 group-hover:text-cyan-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Crypto</span>
            </Link>
            <Link href="/zakat/business" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <Briefcase className="w-6 h-6 text-indigo-500/70 group-hover:text-indigo-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Business</span>
            </Link>
            <Link href="/zakat/rules-eligibility" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-colors group">
              <BookOpen className="w-6 h-6 text-rose-500/70 group-hover:text-rose-400" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white">Rules Guide</span>
            </Link>
          </div>
        </section>

        {/* Phase 4: Fitrana FAQ Accordion */}
        <section className="scroll-mt-28">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-400" />
            Fitrana Frequently Asked Questions
          </h2>
          <div className="space-y-3 max-w-4xl">
            {[
              {
                q: "What is the difference between Zakat al-Maal and Zakat al-Fitr (Fitrana)?",
                a: "Zakat al-Maal is an annual 2.5% tax on qualifying wealth held for a lunar year. Zakat al-Fitr (Fitrana) is a per-person charitable food contribution due by every Muslim at the end of Ramadan, regardless of wealth (so long as they have food in excess of their needs for the day of Eid)."
              },
              {
                q: "When is the exact deadline to give Fitrana?",
                a: "Fitrana must be paid before the Eid al-Fitr prayer begins. It is highly recommended to pay it a few days in advance during Ramadan so that the food or equivalent cash reaches the needy in time for them to celebrate Eid."
              },
              {
                q: "Can I pay Fitrana in cash instead of food commodities?",
                a: "While the original prophetic tradition specified food items (wheat, dates, barley), the Hanafi school and many contemporary scholars globally allow the payment of Fitrana in cash equivalent to the value of those food items, as it gives the poor more flexibility to meet their immediate needs."
              },
              {
                q: "Is Fitrana obligatory for newborn babies born before Eid prayer?",
                a: "Yes, if a child is born before the sun sets on the last day of Ramadan (or before the Eid prayer, depending on fiqhi school), the head of the household is obligated to pay Fitrana on their behalf."
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
        </section>

      </div>
    </main>
  );
}
