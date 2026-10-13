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
  AlertTriangle,
  FileText
} from 'lucide-react';

export default function RulesEligibilityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      
      {/* Self-referencing Canonical Tag & JSON-LD Schema (Template C Requirement) */}
      <link rel="canonical" href="https://islamhub.com/zakat/rules-eligibility/" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Zakat Rules & Eligibility Criteria (2026 Guidance)",
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
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is eligible to receive Zakat according to the Quran?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "According to Surah At-Tawbah (9:60), Zakat must strictly be distributed to one of 8 categories: the poor, the needy, Zakat administrators, those whose hearts are to be reconciled, for freeing captives, those in debt, in the cause of Allah, and the stranded traveler."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I give my Zakat to immediate family members like parents or children?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. You cannot give Zakat to direct ascendants (parents, grandparents) or descendants (children, grandchildren), nor to your spouse, because you are already financially responsible for their basic needs. You may, however, give it to siblings or extended relatives if they qualify as poor or needy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is the Hawl (lunar year) calculated for fluctuating bank balances?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As long as your total wealth remains above the Nisab threshold for the entire lunar year, Zakat is due on the total ending balance on your Zakat anniversary date, regardless of fluctuations during the year."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Zakat due on wealth owned by minors or insane individuals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, according to the majority of scholars (including Maliki, Shafi'i, and Hanbali schools), Zakat is a right on the wealth itself, not just the individual. The guardian (wali) must pay it on their behalf."
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
                  "name": "Rules & Eligibility",
                  "item": "https://islamhub.com/zakat/rules-eligibility/"
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
          <span className="text-slate-300">Rules & Eligibility</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Zakat Rules & Eligibility Criteria (2026 Guidance)
          </h1>
          
          <div className="bg-slate-900/80 backdrop-blur-sm border-l-4 border-emerald-500 rounded-r-xl p-6 sm:p-8 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-emerald-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Zakat is a mandatory annual 2.5% purification tax on eligible Muslim wealth exceeding the Nisab threshold held for a full lunar year (Hawl). It must be distributed strictly among the 8 Quranic recipient categories defined in Surah At-Tawbah (9:60).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Obligation Rate</span>
                <span className="text-xl font-bold text-emerald-400">2.5% (Lunar)</span>
                <span className="text-sm text-slate-500">2.577% (Solar)</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Holding Period (Hawl)</span>
                <span className="text-xl font-bold text-slate-300">1 Full Lunar Year</span>
                <span className="text-sm text-slate-500">354 Days</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Recipient Mandate</span>
                <span className="text-xl font-bold text-amber-400">8 Quranic</span>
                <span className="text-sm text-slate-500">Categories Only</span>
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
                  <li><a href="#conditions-payer" className="text-slate-400 hover:text-emerald-400 transition-colors block">Conditions for Zakat Payer</a></li>
                  <li><a href="#8-recipients" className="text-slate-400 hover:text-emerald-400 transition-colors block">8 Eligible Recipients</a></li>
                  <li><a href="#ineligible-groups" className="text-slate-400 hover:text-emerald-400 transition-colors block">Ineligible Groups</a></li>
                  <li><a href="#hawl-explained" className="text-slate-400 hover:text-emerald-400 transition-colors block">How to Distribute (Hawl)</a></li>
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
            
            {/* Conditions for Zakat Payer HTML Table */}
            <section id="conditions-payer" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-emerald-400" />
                Conditions for the Zakat Payer
              </h2>
              <div className="overflow-x-auto bg-slate-900/60 rounded-xl border border-slate-800 mb-4">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-950/80 border-b border-slate-800">
                      <th className="p-4 text-sm font-semibold text-slate-300">Condition</th>
                      <th className="p-4 text-sm font-semibold text-slate-300">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-sm font-bold text-emerald-400">1. Islam</td>
                      <td className="p-4 text-sm text-slate-300">The payer must be a Muslim. Zakat is an act of worship and is only obligatory upon Muslims.</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/30">
                      <td className="p-4 text-sm font-bold text-emerald-400">2. Freedom</td>
                      <td className="p-4 text-sm text-slate-300">The individual must be free (not a captive or slave).</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-sm font-bold text-emerald-400">3. Sanity & Maturity</td>
                      <td className="p-4 text-sm text-slate-300">Required by Abu Hanifa. However, the majority (Maliki, Shafi'i, Hanbali) state Zakat is due on the wealth of minors/insane, paid by the guardian.</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/30">
                      <td className="p-4 text-sm font-bold text-emerald-400">4. Full Ownership</td>
                      <td className="p-4 text-sm text-slate-300">The wealth must be fully owned and accessible. Lost property or bad debts are generally exempt until recovered.</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-sm font-bold text-emerald-400">5. Nisab & Hawl</td>
                      <td className="p-4 text-sm text-slate-300">The wealth must exceed the Nisab threshold and be maintained for one complete lunar year (Hawl).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* The 8 Eligible Recipient Categories */}
            <section id="8-recipients" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-400" />
                The 8 Quranic Recipient Categories
              </h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                As explicitly ordained in Surah At-Tawbah (9:60), Zakat distributions must strictly fall into one or more of the following eight categories:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Al-Fuqara", subtitle: "The Poor", icon: Heart },
                  { title: "Al-Masakin", subtitle: "The Needy", icon: HeartHandshake },
                  { title: "Al-Amilina 'Alayha", subtitle: "Zakat Administrators", icon: Landmark },
                  { title: "Al-Mu'allafatu", subtitle: "Reconciled Hearts", icon: Users },
                  { title: "Fi-Riqab", subtitle: "Freeing Captives", icon: Globe },
                  { title: "Al-Gharimin", subtitle: "Debtors in Hardship", icon: Scale },
                  { title: "Fi Sabilillah", subtitle: "In the Cause of Allah", icon: ShieldCheck },
                  { title: "Ibn al-Sabil", subtitle: "Stranded Traveler", icon: Briefcase }
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

              {/* Quranic & Hadith Citation Callout */}
              <div className="bg-slate-900 border-l-4 border-emerald-500 p-5 rounded-r-xl my-8 relative overflow-hidden shadow-inner">
                <BookOpen className="absolute top-4 right-4 w-16 h-16 opacity-10" />
                <p className="text-xl font-arabic text-white mb-4 text-right leading-loose" dir="rtl">
                  إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ ۖ فَرِيضَةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ
                </p>
                <p className="text-sm text-slate-400 italic mb-4">
                  "Innama as-sadaqatu lil-fuqarai wal-masakini wal-'amilina 'alayha..."
                </p>
                <p className="text-base text-slate-200 leading-relaxed font-medium mb-4">
                  "Zakat expenditures are only for the poor and for the needy and for those employed to collect [zakat] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah. And Allah is Knowing and Wise."
                </p>
                <div className="flex gap-2">
                  <span className="bg-slate-950 px-3 py-1.5 rounded text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    Surah At-Tawbah (9:60)
                  </span>
                  <span className="bg-slate-950 px-3 py-1.5 rounded text-xs font-semibold text-slate-400 border border-slate-800">
                    Sahih Muslim 19
                  </span>
                </div>
              </div>
            </section>

            {/* Ineligible Recipients Visual Warning Grid */}
            <section id="ineligible-groups" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rose-500" />
                Ineligible Zakat Recipients
              </h2>
              <div className="bg-rose-950/20 border border-rose-900/50 rounded-xl p-6 sm:p-8">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Zakat <strong className="text-rose-400">cannot</strong> be given to individuals for whom you are already legally and Islamically obligated to provide financial support, nor can it be given to certain wealthy or non-Muslim groups for the mandatory payment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-rose-500/20 p-1 rounded">
                      <Minus className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-white text-sm block">Direct Lineage (Ascendants & Descendants)</strong>
                      <span className="text-xs text-slate-400">Parents, grandparents, children, grandchildren.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-rose-500/20 p-1 rounded">
                      <Minus className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-white text-sm block">Spouse</strong>
                      <span className="text-xs text-slate-400">Husbands and wives cannot pay Zakat to each other to fulfill basic living expenses.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-rose-500/20 p-1 rounded">
                      <Minus className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-white text-sm block">Immediate Wealthy Individuals</strong>
                      <span className="text-xs text-slate-400">Anyone whose personal wealth exceeds the Nisab threshold.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-rose-500/20 p-1 rounded">
                      <Minus className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-white text-sm block">Non-Muslims</strong>
                      <span className="text-xs text-slate-400">While Sadaqah (voluntary charity) is highly encouraged for non-Muslims in need, the mandatory Zakat is exclusively for Muslims.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* How to Distribute (3-Step Diagram) */}
            <section id="hawl-explained" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-emerald-400" />
                Distribution Flowchart
              </h2>
              
              <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">1</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Determine Nisab</h4>
                  <p className="text-xs text-slate-400">Are you eligible to pay?</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-slate-600 hidden md:block shrink-0" />
                
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">2</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Calculate Hawl</h4>
                  <p className="text-xs text-slate-400">Has 1 lunar year passed?</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-slate-600 hidden md:block shrink-0" />
                
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 text-center relative z-10 w-full md:w-auto">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-slate-950">3</div>
                  <h4 className="font-bold text-white mt-2 mb-1">Verify Recipient</h4>
                  <p className="text-xs text-slate-400">Check the 8 categories.</p>
                </div>
              </div>

              {/* Video Facade */}
              <div className="mt-8 aspect-[21/9] w-full rounded-2xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
                <button className="z-20 w-16 h-16 rounded-full bg-emerald-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <PlayCircle className="w-8 h-8 fill-slate-950 text-white" />
                </button>
                <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                  5 Min Video
                </div>
                <div className="absolute bottom-5 left-5 z-20">
                  <h4 className="text-white font-bold sm:text-lg">Complete Guide to Zakat Eligibility & Recipients</h4>
                </div>
              </div>
            </section>

            {/* Contextual Sibling Tools */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Asset Specific Calculators & Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/zakat/nisab-threshold" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <Scale className="w-8 h-8 text-emerald-500/70 group-hover:text-emerald-400 transition-colors shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Nisab Guide</span>
                  </div>
                </Link>
                <Link href="/zakat/gold-silver" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <Coins className="w-8 h-8 text-amber-500/70 group-hover:text-amber-400 transition-colors shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Gold Tool</span>
                  </div>
                </Link>
                <Link href="/zakat/stocks-investments" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <TrendingUp className="w-8 h-8 text-blue-500/70 group-hover:text-blue-400 transition-colors shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Stocks</span>
                  </div>
                </Link>
                <Link href="/zakat/crypto" className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition-colors group">
                  <Globe className="w-8 h-8 text-cyan-500/70 group-hover:text-cyan-400 transition-colors shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-slate-200 group-hover:text-white">Crypto</span>
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
                    q: "Who is eligible to receive Zakat according to the Quran?",
                    a: "According to Surah At-Tawbah (9:60), Zakat must strictly be distributed to one of 8 categories: the poor, the needy, Zakat administrators, those whose hearts are to be reconciled, for freeing captives, those in debt, in the cause of Allah, and the stranded traveler."
                  },
                  {
                    q: "Can I give my Zakat to immediate family members like parents or children?",
                    a: "No. You cannot give Zakat to direct ascendants (parents, grandparents) or descendants (children, grandchildren), nor to your spouse, because you are already financially responsible for their basic needs. You may, however, give it to siblings or extended relatives if they qualify as poor or needy."
                  },
                  {
                    q: "How is the Hawl (lunar year) calculated for fluctuating bank balances?",
                    a: "As long as your total wealth remains above the Nisab threshold for the entire lunar year, Zakat is due on the total ending balance on your Zakat anniversary date, regardless of fluctuations during the year."
                  },
                  {
                    q: "Is Zakat due on wealth owned by minors or insane individuals?",
                    a: "Yes, according to the majority of scholars (including Maliki, Shafi'i, and Hanbali schools), Zakat is a right on the wealth itself, not just the individual. The guardian (wali) must pay it on their behalf."
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
