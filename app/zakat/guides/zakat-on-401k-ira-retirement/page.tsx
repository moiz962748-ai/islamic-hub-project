'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight,
  Info,
  ShieldCheck,
  PlayCircle,
  BookOpen,
  ArrowRight,
  Calculator,
  List,
  TrendingUp,
  Plus,
  Minus
} from 'lucide-react';

export default function Zakat401kPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I pay Zakat on an employer match that isn't fully vested yet?",
      answer: "No, you do not pay Zakat on unvested employer contributions. Zakat requires full ownership and access (Tamam al-Milk). You only calculate Zakat on the portion of the match that is legally vested to you."
    },
    {
      question: "What if I don't plan to withdraw my 401(k) for another 20 years?",
      answer: "Zakat is still due annually on the net accessible amount, regardless of when you intend to withdraw it. The wealth belongs to you and is growing, hence it falls under zakatable assets."
    },
    {
      question: "Should I use the AAOIFI standard (30% rule) for the mutual funds inside my 401(k)?",
      answer: "If your 401(k) is invested in passive, dividend-yielding mutual funds or index funds where you intend to hold them long-term, you can apply the AAOIFI standard and calculate Zakat on roughly 30% of the equity value (representing the zakatable assets of the companies). If actively traded, calculate on 100% of the net accessible value."
    }
  ];

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      <link rel="canonical" href="https://islamhub.com/zakat/guides/zakat-on-401k-ira-retirement/" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Calculate Zakat on 401(k), IRA & Pension Funds (2026)",
              "description": "Zakat on retirement accounts is calculated on the net accessible value. You only pay Zakat on the vested balance minus early withdrawal penalties and taxes.",
              "image": [
                "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
              ],
              "datePublished": "2026-01-15T08:00:00+00:00",
              "dateModified": "2026-02-28T12:00:00+00:00",
              "author": {
                "@type": "Organization",
                "name": "IslamHub Shariah Board",
                "url": "https://islamhub.com/about/scholarly-board/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "IslamHub",
                "url": "https://islamhub.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://islamhub.com/logo.png"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "How to Calculate Zakat on 401(k) and IRA (Video Guide)",
              "description": "Step-by-step visual explainer on calculating Zakat for retirement, pension, and 401k funds.",
              "thumbnailUrl": [
                "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
              ],
              "uploadDate": "2026-01-15T08:00:00+00:00",
              "duration": "PT6M10S",
              "contentUrl": "https://islamhub.com/videos/zakat/401k-ira.mp4",
              "embedUrl": "https://www.youtube.com/embed/placeholder"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
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
                  "name": "Guides",
                  "item": "https://islamhub.com/zakat/guides/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "401(k) Zakat",
                  "item": "https://islamhub.com/zakat/guides/zakat-on-401k-ira-retirement/"
                }
              ]
            }
          ])
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Phase 1: Above-the-Fold Resolution */}
        <nav className="flex items-center text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-emerald-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat/guides" className="hover:text-emerald-400 transition-colors">Guides</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">401(k) Zakat</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            How to Calculate Zakat on 401(k), IRA & Pension Funds (2026)
          </h1>
          
          <div className="bg-slate-900/60 backdrop-blur-sm border-l-4 border-emerald-500 rounded-r-xl p-6 sm:p-8 shadow-lg mb-6 max-w-4xl border-y border-r border-slate-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Info className="w-6 h-6 text-emerald-400" />
              The Core Ruling
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
              Zakat on restricted retirement accounts is calculated based on the net accessible value. This means you only pay Zakat on the fully vested balance minus the estimated early withdrawal penalties (typically 10%) and mandatory income taxes that would apply if you cashed out today.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-full px-5 py-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">
              Reviewed by Shariah Compliance & Fiqh Researchers
            </span>
            <span className="relative flex h-3 w-3 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
        </header>

        {/* Phase 2: Content & Entity Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Left Sidebar (TOC + CTA) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 shadow-inner">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <List className="w-4 h-4 text-emerald-400" /> Table of Contents
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#accessible-balance" onClick={(e) => scrollToSection('accessible-balance', e)} className="text-slate-400 hover:text-emerald-400 transition-colors">1. The Net Accessible Balance</a></li>
                  <li><a href="#penalty-deductions" onClick={(e) => scrollToSection('penalty-deductions', e)} className="text-slate-400 hover:text-emerald-400 transition-colors">2. Penalty & Tax Deductions</a></li>
                  <li><a href="#scholarly-consensus" onClick={(e) => scrollToSection('scholarly-consensus', e)} className="text-slate-400 hover:text-emerald-400 transition-colors">3. Scholarly Consensus</a></li>
                  <li><a href="#faqs" onClick={(e) => scrollToSection('faqs', e)} className="text-slate-400 hover:text-emerald-400 transition-colors">4. Frequently Asked Questions</a></li>
                </ul>
              </div>

              <div className="bg-slate-900/60 border border-emerald-900/50 rounded-xl p-6 text-center shadow-xl">
                <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Calculate Retirement Zakat</h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Use our Stocks & Wealth calculator to easily input your 401(k) balance, deduct penalties, and find your exact obligation.
                </p>
                <Link href="/zakat/stocks-investments" className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
                  Open Stocks Tool
                </Link>
              </div>

              {/* Video Facade Card */}
              <div className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 shadow-xl bg-slate-900 block mt-6">
                <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-80"></div>
                  <PlayCircle className="w-12 h-12 text-emerald-400 z-20 group-hover:scale-110 transition-transform duration-300" />
                  <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Retirement charts" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded inline-block mb-2">3 MIN GUIDE</div>
                  <h3 className="text-white font-bold text-sm">401(k) Zakat Rulings</h3>
                </div>
              </div>

            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 order-1 lg:order-2 space-y-12">
            
            <section id="accessible-balance" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">1. The Net Accessible Balance Rule</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                In Islamic jurisprudence, a foundational condition for wealth to be zakatable is complete ownership and accessibility (<span className="italic">Tamam al-Milk</span>). Since a traditional 401(k) or IRA is heavily restricted by government regulations and age limits, you do not have immediate, free access to the gross balance shown on your statement.
              </p>
              
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 shadow-inner relative overflow-hidden mb-8">
                <div className="mb-2">
                  <BookOpen className="w-5 h-5 text-emerald-400 mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">The Concept of Ownership</h3>
                  <p className="text-right font-arabic text-xl leading-loose text-slate-200 mb-2" dir="rtl">
                    "لا زكاة في مال حتى يحول عليه الحول"
                  </p>
                  <p className="text-sm text-slate-400 italic leading-relaxed">
                    "There is no Zakat on wealth until a year passes over it [while under complete ownership]." (Sahih Muslim & Ibn Majah)
                  </p>
                </div>
              </div>
            </section>

            <section id="penalty-deductions" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">2. Penalty & Tax Deductions</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Because of the restriction on access, modern Fiqh councils allow you to deduct the financial penalties that would be incurred if you were forced to withdraw the money today. This creates the "Net Accessible Value" upon which the 2.5% Zakat rate is applied.
              </p>

              <div className="overflow-x-auto w-full mb-8 bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-inner">
                <h3 className="text-sm font-bold text-slate-200 mb-4 px-2 uppercase tracking-wide">Comparative Analysis: Retirement Accounts</h3>
                <table className="w-full text-sm text-left text-slate-300">
                  <thead className="text-xs text-slate-400 uppercase bg-slate-800/50 border-b border-slate-700 font-semibold">
                    <tr>
                      <th scope="col" className="px-6 py-4 rounded-tl-lg whitespace-nowrap">Account Type</th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">Vested Balance</th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">Penalty Deduction</th>
                      <th scope="col" className="px-6 py-4 rounded-tr-lg whitespace-nowrap">Zakatable Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-100 whitespace-nowrap">Traditional 401(k) / IRA</td>
                      <td className="px-6 py-4 whitespace-nowrap">Fully Vested</td>
                      <td className="px-6 py-4 whitespace-nowrap">10% IRS Penalty + Est. Income Tax</td>
                      <td className="px-6 py-4 font-bold text-emerald-400 whitespace-nowrap">Balance - (Taxes + Penalties)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900/20">
                      <td className="px-6 py-4 font-medium text-slate-100 whitespace-nowrap">Roth IRA</td>
                      <td className="px-6 py-4 whitespace-nowrap">Fully Vested</td>
                      <td className="px-6 py-4 whitespace-nowrap">No tax on contributions (growth varies)</td>
                      <td className="px-6 py-4 font-bold text-emerald-400 whitespace-nowrap">Contributions + Accessible Growth</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-100 whitespace-nowrap">Pension (Defined Benefit)</td>
                      <td className="px-6 py-4 whitespace-nowrap">Partially/Non-Vested</td>
                      <td className="px-6 py-4 whitespace-nowrap">N/A (Cannot access lump sum)</td>
                      <td className="px-6 py-4 font-bold text-slate-500 whitespace-nowrap">$0 (Until received)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="scholarly-consensus" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">3. Scholarly Consensus & Formula</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                The formula agreed upon by most contemporary Fiqh councils in North America is straightforward:
              </p>
              
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 mb-6">
                <p className="text-lg font-mono text-emerald-300 mb-2 font-medium">Zakatable Value = Vested Balance - (Early Withdrawal Penalty + Estimated Taxes)</p>
                <p className="text-lg font-mono text-white font-bold">Zakat Due = Zakatable Value × 2.5%</p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-1">Alternative Opinion</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      A minority of scholars argue that since the wealth is out of your control, no Zakat is due until you actually retire and withdraw the funds (at which point you pay for one year). However, the majority opinion holds that since you technically *could* withdraw it (despite penalties), it is zakatable annually on the net value.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">4. Frequently Asked Questions</h2>
              <div className="space-y-4 mb-12">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-xl overflow-hidden transition-colors ${openFaq === index ? 'border-emerald-500/50 bg-slate-900/80' : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-semibold text-slate-200 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-500 shrink-0" />
                      )}
                    </button>
                    
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-2 border-t border-slate-800 text-slate-400 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Phase 5: Internal Linking Funnel */}
            <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col sm:flex-row gap-4 justify-between">
              <Link href="/zakat/rules-eligibility" className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors bg-slate-900/40 border border-slate-800 rounded-lg px-4 py-3">
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to Rules & Eligibility
              </Link>
              <Link href="/zakat/guides" className="flex items-center justify-end gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-900/20 border border-emerald-900/50 rounded-lg px-4 py-3">
                Browse All Guides <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
