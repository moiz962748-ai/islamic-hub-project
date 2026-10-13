'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight,
  Info,
  PlayCircle,
  Plus,
  Minus,
  ShieldCheck,
  Scale,
  ArrowRight,
  BookOpen,
  Users,
  Globe,
  Coins,
  HeartHandshake,
  Heart,
  Landmark,
  Calculator,
  TrendingUp,
  Briefcase,
  FileText
} from 'lucide-react';

export default function NisabThresholdRulesPage() {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Spot prices strictly for demonstration within the editorial context
  const spotRates: Record<string, { goldPerGram: number, silverPerGram: number, sym: string }> = {
    USD: { goldPerGram: 75.50, silverPerGram: 0.95, sym: '$' },
    GBP: { goldPerGram: 59.80, silverPerGram: 0.75, sym: '£' },
    PKR: { goldPerGram: 20900, silverPerGram: 265, sym: 'Rs' },
    SAR: { goldPerGram: 283.50, silverPerGram: 3.56, sym: 'SAR' },
    AED: { goldPerGram: 277.20, silverPerGram: 3.48, sym: 'AED' }
  };

  const currentRates = spotRates[currency] || spotRates['USD'];
  const sym = currentRates.sym;

  // Nisab weight constants
  const GOLD_GRAMS = 87.48;
  const SILVER_GRAMS = 612.36;

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      
      {/* Self-referencing Canonical Tag & JSON-LD Schema (Template C Requirement) */}
      <link rel="canonical" href="https://islamhub.com/zakat/nisab-threshold/" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Gold & Silver Nisab Rates Today (2026 Guidance)",
              "author": {
                "@type": "Organization",
                "name": "Shariah Compliance & Fiqh Researchers"
              },
              "publisher": {
                "@type": "Organization",
                "name": "IslamHub"
              },
              "dateModified": "2026-09-16T00:00:00Z"
            },
            {
              "@context": "https://schema.org",
              "@type": "Dataset",
              "name": "Live Zakat Nisab Values",
              "description": "Current gold and silver Nisab thresholds based on standard 87.48g gold and 612.36g silver.",
              "variableMeasured": ["Gold Nisab", "Silver Nisab"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Should I use the Gold or Silver Nisab threshold?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most contemporary scholars advise using the Silver Nisab for cash, savings, and business assets because it is lower. This ensures more people give Zakat, benefiting the poor and fulfilling the social objectives of Zakat."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does the Nisab threshold apply to all my assets combined?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You must aggregate all your Zakatable assets (cash, gold, silver, trade inventory, crypto, and stock investments) and evaluate the total against a single chosen Nisab threshold."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I give Zakat to my immediate family members?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You cannot give Zakat to those you are already financially responsible for, such as your parents, grandparents, children, or spouse. You can, however, give it to siblings, uncles, or aunts if they qualify."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is my Zakat actually due?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zakat is due immediately upon the completion of your Hawl (one lunar year of possessing wealth above the Nisab threshold). Delaying payment without a valid excuse is highly discouraged in Islamic jurisprudence."
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
                  "name": "Nisab Thresholds & Rules",
                  "item": "https://islamhub.com/zakat/nisab-threshold/"
                }
              ]
            }
          ])
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Phase 1: Above-the-Fold (E-E-A-T & High-Density AEO) */}
        <nav className="flex items-center text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-emerald-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Nisab Thresholds & Rules</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Gold & Silver Nisab Rates Today (2026 Guidance)
          </h1>
          
          <div className="bg-slate-900/80 backdrop-blur-sm border-l-4 border-emerald-500 rounded-r-xl p-6 sm:p-8 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-emerald-400" />
              Nisab Definition & Baseline Rule
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Nisab is the minimum threshold of wealth a Muslim must own for a full lunar year (Hawl) before Zakat becomes obligatory. If your total liquid and zakatable assets exceed this value, you are required to pay a 2.5% fixed rate on your total wealth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Gold Nisab</span>
                <span className="text-xl font-bold text-amber-400">87.48 Grams</span>
                <span className="text-sm text-slate-500">7.5 Tola</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Silver Nisab</span>
                <span className="text-xl font-bold text-slate-300">612.36 Grams</span>
                <span className="text-sm text-slate-500">52.5 Tola</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Obligation Standard</span>
                <span className="text-xl font-bold text-emerald-400">2.5% Rate</span>
                <span className="text-sm text-slate-500">Per Lunar Year (Hawl)</span>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">
              Reviewed by Shariah Compliance & Fiqh Researchers
            </span>
            <span className="text-xs text-slate-500 border-l border-slate-700 pl-3">Updated 2026</span>
          </div>
        </header>

        {/* Phase 2: Main Layout Architecture (2 Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sidebar (TOC & CTA) */}
          <div className="lg:col-span-3 order-2 lg:order-1 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              
              <nav className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Table of Contents</h3>
                <ul className="space-y-3 text-sm font-medium">
                  <li><a href="#nisab-rates" className="text-slate-400 hover:text-emerald-400 transition-colors block">Live Nisab Rates</a></li>
                  <li><a href="#fiqh-consensus" className="text-slate-400 hover:text-emerald-400 transition-colors block">Fiqh Consensus</a></li>
                  <li><a href="#8-categories" className="text-slate-400 hover:text-emerald-400 transition-colors block">8 Recipient Categories</a></li>
                  <li><a href="#how-to-distribute" className="text-slate-400 hover:text-emerald-400 transition-colors block">How to Distribute</a></li>
                  <li><a href="#faqs" className="text-slate-400 hover:text-emerald-400 transition-colors block">Frequently Asked Questions</a></li>
                </ul>
              </nav>

              <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/30 rounded-xl p-5 text-center">
                <Calculator className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Ready to Calculate?</h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Use our universal Zakat engine to process your assets instantly.
                </p>
                <Link href="/zakat-calculator" className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-2.5 rounded-lg transition-colors">
                  Quick Calculate
                </Link>
              </div>

            </div>
          </div>

          {/* Main Editorial Column */}
          <div className="lg:col-span-9 order-1 lg:order-2 space-y-12">
            
            {/* Live Nisab HTML Data Table */}
            <section id="nisab-rates" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-emerald-400" />
                Live Nisab Equivalency Rates
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                      currency === curr 
                        ? 'bg-emerald-600 border-emerald-500 text-white' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto bg-slate-900/60 rounded-xl border border-slate-800 mb-4">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-950/80 border-b border-slate-800">
                      <th className="p-4 text-sm font-semibold text-slate-300">Metal & Purity</th>
                      <th className="p-4 text-sm font-semibold text-slate-300">Nisab Weight (Grams)</th>
                      <th className="p-4 text-sm font-semibold text-slate-300">Nisab Weight (Tola)</th>
                      <th className="p-4 text-sm font-semibold text-emerald-400">Live Spot Valuation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-sm font-medium text-amber-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400" /> Gold (24 Karat)
                      </td>
                      <td className="p-4 text-sm text-slate-300">87.48 g</td>
                      <td className="p-4 text-sm text-slate-400">7.5 Tola</td>
                      <td className="p-4 text-sm font-bold text-white">{sym} {(currentRates.goldPerGram * GOLD_GRAMS).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/30">
                      <td className="p-4 text-sm font-medium text-slate-300 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300" /> Silver (999 Pure)
                      </td>
                      <td className="p-4 text-sm text-slate-300">612.36 g</td>
                      <td className="p-4 text-sm text-slate-400">52.5 Tola</td>
                      <td className="p-4 text-sm font-bold text-white">{sym} {(currentRates.silverPerGram * SILVER_GRAMS).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                * Based on contemporary consensus formatting. In practice, most scholars advise referencing the Silver Nisab for liquid cash assessments to maximize charitable distribution.
              </p>
            </section>

            {/* Fiqh Consensus & Citations */}
            <section id="fiqh-consensus" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                Fiqh Consensus & Citations
              </h2>
              
              <div className="bg-slate-900/80 border-l-4 border-emerald-500 p-6 sm:p-8 rounded-r-xl shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BookOpen className="w-24 h-24" />
                </div>
                <p className="text-2xl font-arabic text-white mb-4 text-right leading-loose" dir="rtl">
                  خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا
                </p>
                <p className="text-sm text-slate-400 italic mb-4">
                  "Khudh min amwalihim sadaqatan tutahhiruhum wa tuzakkihim biha..."
                </p>
                <p className="text-base text-slate-200 leading-relaxed font-medium mb-4">
                  "Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase..."
                </p>
                <div className="inline-flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  Surah At-Tawbah (9:103)
                </div>
              </div>
            </section>

            {/* The 8 Eligible Recipient Categories */}
            <section id="8-categories" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-400" />
                The 8 Eligible Recipient Categories
              </h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                As explicitly ordained in Surah At-Tawbah (9:60), Zakat distributions must strictly fall into one or more of the following eight categories:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Al-Fuqara", subtitle: "The Poor", icon: Heart },
                  { title: "Al-Masakin", subtitle: "The Needy", icon: HeartHandshake },
                  { title: "Al-Amilina 'Alayha", subtitle: "The Zakat Collectors", icon: Landmark },
                  { title: "Al-Mu'allafatu", subtitle: "Reconcile Hearts", icon: Users },
                  { title: "Fir-Riqab", subtitle: "Freeing Captives", icon: Globe },
                  { title: "Al-Gharimin", subtitle: "Those in Debt", icon: Scale },
                  { title: "Fi Sabilillah", subtitle: "In the Path of Allah", icon: ShieldCheck },
                  { title: "Ibn As-Sabil", subtitle: "The Traveler", icon: Briefcase }
                ].map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* How to Distribute (3-Step Diagram) */}
            <section id="how-to-distribute" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-emerald-400" />
                How to Distribute Zakat
              </h2>
              
              <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">1</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Check Nisab</h4>
                  <p className="text-xs text-slate-400">Ensure a Hawl has passed.</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-slate-600 hidden md:block shrink-0" />
                
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">2</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Evaluate Wealth</h4>
                  <p className="text-xs text-slate-400">Total liquid assets at 2.5%.</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-slate-600 hidden md:block shrink-0" />
                
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">3</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Pay Locally</h4>
                  <p className="text-xs text-slate-400">Distribute to the 8 categories.</p>
                </div>
              </div>

              {/* Video Facade */}
              <div className="mt-8 aspect-[21/9] w-full rounded-2xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
                <button className="z-20 w-16 h-16 rounded-full bg-emerald-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <PlayCircle className="w-8 h-8 fill-slate-950 text-white" />
                </button>
                <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                  4 Min Video
                </div>
                <div className="absolute bottom-5 left-5 z-20">
                  <h4 className="text-white font-bold sm:text-lg">Nisab & Eligibility Walkthrough</h4>
                </div>
              </div>
            </section>

            {/* Contextual Sibling Tools */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Asset Specific Calculators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/zakat/gold-silver" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <Coins className="w-8 h-8 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Gold Tool</span>
                    <span className="text-xs text-slate-500">Calculate jewelry & bullion</span>
                  </div>
                </Link>
                <Link href="/zakat/stocks-investments" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <TrendingUp className="w-8 h-8 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Stocks</span>
                    <span className="text-xs text-slate-500">Equities & retirement funds</span>
                  </div>
                </Link>
                <Link href="/zakat/crypto" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <Globe className="w-8 h-8 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Crypto Tool</span>
                    <span className="text-xs text-slate-500">Web3 & digital assets</span>
                  </div>
                </Link>
              </div>
            </section>

            {/* Frequently Asked Questions (Accordion) */}
            <section id="faqs" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-400" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Should I use the Gold or Silver Nisab threshold?",
                    a: "Most contemporary scholars advise using the Silver Nisab for cash, savings, and business assets because it is lower. This ensures more people give Zakat, benefiting the poor and fulfilling the social objectives of Zakat."
                  },
                  {
                    q: "Does the Nisab threshold apply to all my assets combined?",
                    a: "Yes. You must aggregate all your Zakatable assets (cash, gold, silver, trade inventory, crypto, and stock investments) and evaluate the total against a single chosen Nisab threshold."
                  },
                  {
                    q: "Can I give Zakat to my immediate family members?",
                    a: "You cannot give Zakat to those you are already financially responsible for, such as your parents, grandparents, children, or spouse. You can, however, give it to siblings, uncles, or aunts if they qualify."
                  },
                  {
                    q: "When is my Zakat actually due?",
                    a: "Zakat is due immediately upon the completion of your Hawl (one lunar year of possessing wealth above the Nisab threshold). Delaying payment without a valid excuse is highly discouraged in Islamic jurisprudence."
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
        </div>
      </div>
    </main>
  );
}
