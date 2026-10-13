'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Play, Calculator, ArrowRight, BookOpen } from 'lucide-react';

export default function ZakatGuidesPage() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      <link rel="canonical" href="https://islamhub.com/zakat/guides/" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "Zakat Knowledge Base: Quranic Foundations, Fiqh Rulings & Calculation Guides (2026)",
              "description": "Zakat is the third pillar of Islam—an obligatory 2.5% annual contribution on qualifying wealth held for one lunar year (Hawl) above the Nisab threshold. This knowledge hub bridges classical Fiqh principles with modern global financial assets.",
              "url": "https://islamhub.com/zakat/guides/"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Zakat?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zakat is the third pillar of Islam—an obligatory 2.5% annual contribution on qualifying wealth held for one lunar year (Hawl) above the Nisab threshold."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://islamhub.com/" },
                { "@type": "ListItem", "position": 2, "name": "Zakat", "item": "https://islamhub.com/zakat/" },
                { "@type": "ListItem", "position": 3, "name": "Knowledge Base & Guides", "item": "https://islamhub.com/zakat/guides/" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "contentUrl": "https://islamhub.com/images/zakat-flowchart.svg",
              "description": "Visual Guide: Am I Obligated to Pay Zakat?"
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How to Calculate Zakat on Modern Assets (Full Walkthrough)",
              "description": "Video explainer on how to calculate zakat on modern assets.",
              "thumbnailUrl": "https://islamhub.com/images/video-thumb-1.jpg",
              "uploadDate": "2026-01-01T08:00:00+08:00"
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "401(k), Stocks & Crypto Zakat Panel Discussion",
              "description": "Panel discussion on calculating Zakat for 401(k), Stocks, and Crypto.",
              "thumbnailUrl": "https://islamhub.com/images/video-thumb-2.jpg",
              "uploadDate": "2026-01-01T08:00:00+08:00"
            }
          ])
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat/" className="hover:text-emerald-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Knowledge Base & Guides</span>
        </nav>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Zakat Knowledge Base: Quranic Foundations, Fiqh Rulings & Calculation Guides (2026)
              </h1>
              
              <div className="bg-slate-900/90 border border-emerald-500/30 p-5 rounded-2xl shadow-lg">
                <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                  <strong className="text-emerald-400">Zakat is the third pillar of Islam</strong>—an obligatory 2.5% annual contribution on qualifying wealth held for one lunar year (Hawl) above the Nisab threshold. This knowledge hub bridges classical Fiqh principles with modern global financial assets.
                </p>
              </div>
            </header>

            {/* Visual Guide: Interactive SVG Decision Diagram */}
            <figure className="my-8 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-inner">
              <figcaption className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-400" /> Visual Guide: Am I Obligated to Pay Zakat?
              </figcaption>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col items-start relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-1 rounded-full mb-3">01</div>
                  <h4 className="text-white font-bold mb-1">Full Ownership</h4>
                  <p className="text-sm text-slate-400 leading-snug">You hold sole rights & control over the asset.</p>
                </div>
                {/* Step 2 */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col items-start relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-1 rounded-full mb-3">02</div>
                  <h4 className="text-white font-bold mb-1">Nisab Reached</h4>
                  <p className="text-sm text-slate-400 leading-snug">Net wealth exceeds 87.48g gold or 612.36g silver value.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col items-start relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-1 rounded-full mb-3">03</div>
                  <h4 className="text-white font-bold mb-1">1 Lunar Year (Hawl)</h4>
                  <p className="text-sm text-slate-400 leading-snug">Asset held for 354 days uninterrupted.</p>
                </div>
                {/* Step 4 */}
                <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5 flex flex-col items-start relative overflow-hidden group hover:border-emerald-500 transition-colors">
                  <div className="bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-1 rounded-full mb-3">04</div>
                  <h4 className="text-white font-bold mb-1">2.5% Rate Due</h4>
                  <p className="text-sm text-emerald-200/80 leading-snug">Pay 2.5% on net qualifying liquid wealth.</p>
                </div>
              </div>
            </figure>

            {/* Global Search-Backed Topic Clusters */}
            <div className="space-y-12 my-12">
              
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Category A: Foundational Fiqh & Eligibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/zakat/guides/what-is-zakat-definition-and-rules/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">What is Zakat in Islam? Purpose, Scriptural Pillars & Benefits</h4>
                    <p className="text-sm text-slate-400">Discover the core definition of Zakat, its divine purpose, and scriptural foundations in Islam.</p>
                  </Link>
                  <Link href="/zakat/guides/who-is-eligible-for-zakat-8-categories/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Who is Eligible for Zakat? The 8 Quranic Recipient Categories</h4>
                    <p className="text-sm text-slate-400">Learn about the 8 specific groups of people eligible to receive Zakat (Asnaf) based on the Quran.</p>
                  </Link>
                  <Link href="/zakat/guides/exempt-assets-personal-residence/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Exempt Assets: Primary Personal Residence, Vehicles & Property</h4>
                    <p className="text-sm text-slate-400">A detailed look at which assets are exempt from Zakat, including homes, cars, and daily necessities.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-cash-and-bank-savings/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on Cash in Hand, Bank Deposits & Savings Accounts</h4>
                    <p className="text-sm text-slate-400">Guidelines on calculating Zakat for liquid cash, current accounts, and savings deposits.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-foreign-currency-remittances/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group md:col-span-2">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on Foreign Currencies, Remittances & FX Holdings</h4>
                    <p className="text-sm text-slate-400">How to evaluate and pay Zakat on varied currency holdings, overseas accounts, and remittance funds.</p>
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Category B: Investments, Debt & Retirement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/zakat/guides/how-to-calculate-zakat-modern-wealth/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">How to Calculate Zakat on Modern Wealth (Step-by-Step Formula)</h4>
                    <p className="text-sm text-slate-400">A practical guide to calculating Zakat accurately across different types of wealth and assets.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-401k-ira-retirement/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on 401(k), IRA, Pensions & Retirement Accounts</h4>
                    <p className="text-sm text-slate-400">Specific Fiqh rulings on when and how to pay Zakat on restricted retirement funds.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-stocks-and-etfs/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Stocks, ETFs & Equity Portfolios: AAOIFI Standard No. 35</h4>
                    <p className="text-sm text-slate-400">Guidelines for Zakat on stocks held for trading vs. long-term dividend investments.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-debts-and-mortgages/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat Rulings on Personal Debts, Mortgages & Student Loans</h4>
                    <p className="text-sm text-slate-400">How to account for borrowed money, mortgages, and lent funds in your calculation.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-dividends-and-mutual-funds/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group md:col-span-2">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on Dividend Income, Mutual Funds & Index Funds</h4>
                    <p className="text-sm text-slate-400">Navigating zakat calculations for dividend payouts, compounding interest, and aggregated fund returns.</p>
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Category C: Precious Metals, Real Estate & Nisab</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/zakat/guides/gold-jewelry-hanafi-vs-shafii/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat Calculation on Gold & Silver Jewelry (Hanafi vs. Shafi'i)</h4>
                    <p className="text-sm text-slate-400">Understanding the different madhab rulings on Zakat for personal use jewelry.</p>
                  </Link>
                  <Link href="/zakat/guides/gold-zakat-tola-grams-karat-conversion/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Calculating Zakat on Gold Rates by Weight (Tola, Grams, Karat)</h4>
                    <p className="text-sm text-slate-400">Convert local weights and karats to calculate accurate Zakat obligations on pure gold.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-cash-benchmarks/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat Thresholds on Cash Benchmarks (e.g. 1 Lakh Rupees / $1,000)</h4>
                    <p className="text-sm text-slate-400">Understanding how local currency benchmarks correlate to standard Nisab values.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-real-estate-and-rental-property/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on Real Estate: Rental Income vs. Investment Land</h4>
                    <p className="text-sm text-slate-400">Detailed guidelines on evaluating rental cash flow versus property appreciation for zakat.</p>
                  </Link>
                  <Link href="/zakat/guides/gold-vs-silver-nisab-threshold-guide/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group md:col-span-2">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Nisab Guidelines: Selecting Gold vs. Silver Threshold Rates</h4>
                    <p className="text-sm text-slate-400">Which threshold should you use? Understanding the scholarly debate between gold and silver standards.</p>
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Category D: Business, Web3 & Digital Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/zakat/guides/crypto-staking-and-defi-zakat/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat on Cryptocurrency, Staking Rewards & DeFi Yield</h4>
                    <p className="text-sm text-slate-400">Contemporary scholarly consensus on taxing digital currencies, tokens, and staking income.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-business-inventory/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Valuing Wholesale Inventory, Raw Materials & Retail Stock</h4>
                    <p className="text-sm text-slate-400">Rules for calculating Zakat on raw materials, finished goods, and cash in hand for businesses.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-ecommerce-and-saas/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">How E-Commerce Merchants & SaaS Platforms Calculate Zakat</h4>
                    <p className="text-sm text-slate-400">Modern methodologies for assessing digital products, subscriptions, and online store inventory.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-freelance-income-invoices/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat for Freelancers: Unpaid Invoices & Pending Receivables</h4>
                    <p className="text-sm text-slate-400">How to handle pending payments, long-term contracts, and gig economy earnings.</p>
                  </Link>
                  <Link href="/zakat/guides/zakat-on-business-partnerships/" className="block p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-emerald-500/50 transition-colors group md:col-span-2">
                    <h4 className="text-[15px] font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300">Zakat Rulings for Business Partnerships & Joint Ventures</h4>
                    <p className="text-sm text-slate-400">Navigating shared equity, corporate zakat responsibilities, and LLC ownership structures.</p>
                  </Link>
                </div>
              </div>

            </div>

            {/* Video Library */}
            <div className="my-14 border-t border-slate-800/80 pt-10">
              <h2 className="text-2xl font-bold text-white mb-8">Video Library: Video Explainers on Contemporary Fiqh</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Video Card 1 */}
                <div className="group relative aspect-video bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg cursor-pointer flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="z-10 bg-emerald-500/90 text-white rounded-full p-4 transform group-hover:scale-110 group-hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/50">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-xs font-semibold text-white rounded backdrop-blur-sm">
                    12:40
                  </div>
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-white font-bold leading-tight drop-shadow-md">How to Calculate Zakat on Modern Assets (Full Walkthrough)</h3>
                  </div>
                </div>

                {/* Video Card 2 */}
                <div className="group relative aspect-video bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg cursor-pointer flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="z-10 bg-emerald-500/90 text-white rounded-full p-4 transform group-hover:scale-110 group-hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/50">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-xs font-semibold text-white rounded backdrop-blur-sm">
                    18:15
                  </div>
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-white font-bold leading-tight drop-shadow-md">401(k), Stocks & Crypto Zakat Panel Discussion</h3>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar CTA & Internal Linking Silo */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6 shadow-xl shadow-emerald-900/10 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg shrink-0">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Quick Zakat Calculators</h3>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Select your specific asset type to jump to dedicated calculation tools:
              </p>
              
              <div className="flex flex-col gap-3 mb-6">
                <Link 
                  href="/zakat-calculator/" 
                  className="flex items-center justify-between w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <span>Universal Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link 
                  href="/zakat-calculator/gold-silver/" 
                  className="flex items-center justify-between w-full py-3 px-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors text-sm border border-slate-700 hover:border-slate-600"
                >
                  <span>Gold & Silver Calculator</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
                
                <Link 
                  href="/zakat-calculator/stocks-401k/" 
                  className="flex items-center justify-between w-full py-3 px-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors text-sm border border-slate-700 hover:border-slate-600"
                >
                  <span>Stocks & 401(k) Calculator</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link 
                  href="/zakat-calculator/crypto/" 
                  className="flex items-center justify-between w-full py-3 px-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors text-sm border border-slate-700 hover:border-slate-600"
                >
                  <span>Crypto & Digital Yield</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link 
                  href="/zakat-calculator/business/" 
                  className="flex items-center justify-between w-full py-3 px-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-colors text-sm border border-slate-700 hover:border-slate-600"
                >
                  <span>Business & Inventory</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-center">
                <Link 
                  href="/zakat/nisab-threshold/" 
                  className="inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-sm"
                >
                  Check Live Nisab Rates Today <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
