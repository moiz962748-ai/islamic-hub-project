'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Info, CheckCircle2, Clock, Share2, Printer, 
  Download, QrCode, Play, Calculator, ArrowRight, BookOpen, 
  List, Plus, Minus, X, Check
} from 'lucide-react';

const Link = (props: any) => <a {...props} />;

export default function GuideArticlePage({ params }: { params: { slug: string } }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Basic title formatting based on slug
  const titleString = (params.slug || "guide-article").split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const displayTitle = `${titleString}: Comprehensive Zakat Ruling & Calculation`;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleWhatsAppShare = () => {
    if (typeof window !== 'undefined') {
      const url = `whatsapp://send?text=${encodeURIComponent(`Check out this Zakat guide: ${window.location.href}`)}`;
      window.open(url, '_blank');
    }
  };

  const handleTwitterShare = () => {
    if (typeof window !== 'undefined') {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(displayTitle)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(url, '_blank');
    }
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const faqs = [
    {
      question: `Does the ruling for ${titleString} apply if the value falls below Nisab during the year?`,
      answer: `According to the majority of scholars, if the total value of your zakatable wealth falls below the Nisab threshold at any point during the lunar year (Hawl), the Hawl is broken. The one-year cycle must restart once the wealth reaches Nisab again.`
    },
    {
      question: `Are there specific exemptions when calculating Zakat for this asset class?`,
      answer: `Generally, assets strictly intended for personal use (like your primary residence, personal vehicle, and household furniture) are exempt from Zakat. However, any asset acquired with the explicit intention of resale or investment is zakatable.`
    },
    {
      question: `Can I deduct my personal debts before paying Zakat on ${titleString}?`,
      answer: `Classical scholars generally agree that immediate short-term debts (due within the lunar year) can be deducted from your total zakatable wealth. Long-term debts like 30-year mortgages should only have the upcoming 12 months of non-interest principal payments deducted.`
    }
  ];

  const currentUrl = `https://islamhub.com/zakat/guides/${params.slug}/`;

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-white selection:text-black print:bg-white print:text-black">
      <link rel="canonical" href={currentUrl} />
      
      {/* ADVANCED JSON-LD SCHEMA GRAPH ENGINE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `${currentUrl}#article`,
                "headline": displayTitle,
                "description": `Comprehensive Zakat calculation guide, Fiqh rulings, and step-by-step formula for ${titleString}.`,
                "datePublished": "2026-03-01T08:00:00+08:00",
                "dateModified": "2026-03-15T08:00:00+08:00",
                "author": {
                  "@type": "Organization",
                  "name": "Fiqh Advisory Board"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "IslamHub",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://islamhub.com/logo.png"
                  }
                },
                "image": [
                  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
                ]
              },
              {
                "@type": "VideoObject",
                "@id": `${currentUrl}#video`,
                "name": `Video Explainer: Zakat on ${titleString}`,
                "description": `A detailed walkthrough of how to calculate Zakat accurately for this asset type.`,
                "thumbnailUrl": [
                  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
                ],
                "uploadDate": "2026-03-05T08:00:00+00:00",
                "contentUrl": `https://islamhub.com/videos/zakat/${params.slug}.mp4`,
                "embedUrl": "https://www.youtube.com/embed/placeholder",
                "duration": "PT5M30S"
              },
              {
                "@type": "ImageObject",
                "@id": `${currentUrl}#flowchart`,
                "contentUrl": "https://islamhub.com/images/flowchart.png",
                "caption": "Step-by-step Zakat Calculation Flowchart",
                "creditText": "IslamHub Design Team"
              },
              {
                "@type": "FAQPage",
                "@id": `${currentUrl}#faq`,
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
                "@type": "BreadcrumbList",
                "@id": `${currentUrl}#breadcrumb`,
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://islamhub.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Zakat", "item": "https://islamhub.com/zakat/" },
                  { "@type": "ListItem", "position": 3, "name": "Knowledge Base & Guides", "item": "https://islamhub.com/zakat/guides/" },
                  { "@type": "ListItem", "position": 4, "name": displayTitle, "item": currentUrl }
                ]
              }
            ]
          })
        }}
      />

      {/* QR Code Modal (print:hidden) */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm print:hidden">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-sm w-full mx-4 shadow-2xl relative">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Scan to Read on Mobile</h3>
            <p className="text-sm text-slate-400 mb-6 text-center">Scan this QR code with your phone's camera to open this guide.</p>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center aspect-square mx-auto w-48 mb-6">
              {/* Simulated QR Code SVG */}
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-slate-900">
                <rect width="100" height="100" fill="white" />
                <path d="M10,10 h20 v20 h-20 z M15,15 h10 v10 h-10 z" fill="currentColor"/>
                <path d="M70,10 h20 v20 h-20 z M75,15 h10 v10 h-10 z" fill="currentColor"/>
                <path d="M10,70 h20 v20 h-20 z M15,75 h10 v10 h-10 z" fill="currentColor"/>
                <rect x="40" y="10" width="20" height="10" fill="currentColor" />
                <rect x="40" y="25" width="10" height="10" fill="currentColor" />
                <rect x="10" y="40" width="15" height="15" fill="currentColor" />
                <rect x="30" y="40" width="10" height="30" fill="currentColor" />
                <rect x="45" y="45" width="25" height="15" fill="currentColor" />
                <rect x="75" y="40" width="15" height="20" fill="currentColor" />
                <rect x="40" y="70" width="15" height="20" fill="currentColor" />
                <rect x="65" y="70" width="25" height="20" fill="currentColor" />
              </svg>
            </div>
            <button 
              onClick={() => setShowQrModal(false)}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print:w-full print:max-w-none print:px-0 print:py-0">
        
        {/* 1. HERO & METADATA BAR SECTION */}
        <div className="mb-8 print:mb-4">
          <nav className="flex items-center text-xs text-slate-400 mb-6 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 mx-1" />
            <Link href="/zakat/" className="hover:text-white transition-colors">Zakat</Link>
            <ChevronRight className="w-3 h-3 mx-1" />
            <Link href="/zakat/guides/" className="hover:text-white transition-colors">Knowledge Base</Link>
            <ChevronRight className="w-3 h-3 mx-1" />
            <span className="text-slate-300 truncate max-w-xs">{titleString}</span>
          </nav>

          <div className="inline-block bg-neutral-800 text-white border border-neutral-800 px-3 py-1 text-xs rounded-full font-medium mb-4 print:border-neutral-800 print:text-neutral-300">
            Fiqh Guide & Ruling
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight my-4 print:text-black">
            {displayTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 text-sm text-slate-400 print:text-slate-700">
            <div className="flex items-center gap-1.5 text-white print:text-neutral-300 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Scholarly Review: Fiqh Advisory Board
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </div>
            <div className="flex items-center gap-1.5">
              Updated: March 2026
            </div>
            <div className="bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-300 print:bg-slate-100 print:text-slate-800 print:border-slate-300">
              Standard Rate: 2.5% / Hawl Required
            </div>
          </div>
        </div>

        {/* 2. HERO UTILITY & ACTION BAR */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-slate-800/80 print:hidden">
          <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-black font-semibold text-sm font-medium rounded-lg transition-colors shadow-lg shadow-neutral-950/50">
            <Download className="w-4 h-4" />
            Download PDF Guide
          </button>
          <button 
            onClick={() => setShowQrModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-800 transition-colors"
          >
            <QrCode className="w-4 h-4" />
            QR Code
          </button>
          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-800 transition-colors w-32 justify-center"
          >
            {copied ? (
              <><Check className="w-4 h-4 text-white" /> Copied!</>
            ) : (
              <><Share2 className="w-4 h-4" /> Copy Link</>
            )}
          </button>
          
          <div className="h-6 w-px bg-slate-800 mx-2 hidden sm:block"></div>
          
          <button 
            onClick={handleWhatsAppShare}
            className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/50 text-slate-400 text-sm font-medium rounded-lg border border-slate-800 transition-colors"
            title="Share on WhatsApp"
          >
            WhatsApp
          </button>
          <button 
            onClick={handleTwitterShare}
            className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 text-slate-400 text-sm font-medium rounded-lg border border-slate-800 transition-colors"
            title="Share on X (Twitter)"
          >
            X (Twitter)
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 text-sm font-medium rounded-lg border border-slate-800 transition-colors ml-auto"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>

        {/* 4. TWO-COLUMN LAYOUT ENGINE */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Column A: Main Editorial Content */}
          <div className="lg:col-span-3">
            
            {/* 3. AEO "DIRECT ANSWER" BANNER BOX */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 print:border-neutral-800 print:bg-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-white print:text-neutral-300" />
                <h2 className="text-white print:text-neutral-300 font-semibold text-lg">Direct Ruling (TL;DR Summary)</h2>
              </div>
              <p className="text-slate-200 print:text-slate-800 text-base leading-relaxed">
                Zakat is strictly obligated on this asset class once its net accessible value exceeds the <strong className="text-white print:text-black">Nisab threshold</strong> (87.48g of gold or 612.36g of silver). The wealth must be held in your full ownership for a complete <strong className="text-white print:text-black">1-year Hawl</strong> (lunar year). If these conditions are met, a <strong className="text-white print:text-black">2.5% rate</strong> is due on the total accumulated net value on your Zakat anniversary date.
              </p>
            </div>

            <div className="text-slate-300 print:text-black leading-relaxed text-base sm:text-lg space-y-6">
              
              <h2 id="section-1" className="text-2xl font-bold text-white print:text-black mt-10 mb-4">Understanding the Fiqh Foundations</h2>
              <p>
                The obligation to pay Zakat is one of the five pillars of Islam, established to purify wealth and redistribute resources to those in need (the 8 Asnaf). When dealing with complex modern assets, scholars refer back to the core conditions established by the Prophet Muhammad (peace be upon him): full ownership (Tamam al-Milk), growth potential (Namaa), and the passing of a lunar year (Hawl).
              </p>
              
              {/* EDITORIAL CALLOUT CARDS: Quranic / Hadith Proof Block */}
              <div className="border-l-4 border-white bg-slate-900/80 print:bg-slate-100 p-5 rounded-r-xl italic text-slate-200 print:text-slate-700 my-8">
                <p className="text-right font-arabic text-xl leading-loose mb-3 text-slate-100 print:text-black" dir="rtl">
                  "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا"
                </p>
                <p>
                  "Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase..."
                  <span className="block text-sm text-slate-400 print:text-slate-500 mt-2 not-italic font-medium">— Surah At-Tawbah (9:103)</span>
                </p>
              </div>

              <h2 id="section-2" className="text-2xl font-bold text-white print:text-black mt-10 mb-4">How to Calculate the Obligation</h2>
              <p>
                To determine your specific obligation, you must evaluate the liquid and accessible value of the asset on your designated Zakat anniversary date. Debts that are due immediately can generally be deducted from this gross total.
              </p>

              {/* VISUAL BLOCK 1: Step-by-Step Flowchart Diagram */}
              <figure className="bg-slate-900/80 print:bg-slate-50 border border-slate-800 print:border-slate-300 rounded-2xl p-6 my-8">
                <figcaption className="text-lg font-bold text-white print:text-black mb-6">Calculation Process Flowchart</figcaption>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 print:bg-white border border-slate-800 print:border-slate-300 rounded-xl p-5 relative">
                    <div className="bg-white text-black font-bold text-xs px-2 py-1 rounded-full inline-block mb-3">01</div>
                    <h4 className="text-white print:text-black font-bold mb-2">Assess Gross Value</h4>
                    <p className="text-sm text-slate-400 print:text-slate-600">Determine the current market value of your held assets on your Zakat date.</p>
                  </div>
                  <div className="bg-slate-950 print:bg-white border border-slate-800 print:border-slate-300 rounded-xl p-5 relative">
                    <div className="bg-white text-black font-bold text-xs px-2 py-1 rounded-full inline-block mb-3">02</div>
                    <h4 className="text-white print:text-black font-bold mb-2">Deduct Liabilities</h4>
                    <p className="text-sm text-slate-400 print:text-slate-600">Subtract immediate, short-term debts due within the current lunar year.</p>
                  </div>
                  <div className="bg-neutral-900 print:bg-neutral-100 border border-neutral-800 print:border-neutral-800 rounded-xl p-5 relative">
                    <div className="bg-white text-black font-bold text-xs px-2 py-1 rounded-full inline-block mb-3">03</div>
                    <h4 className="text-white print:text-black font-bold mb-2">Apply 2.5% Rate</h4>
                    <p className="text-sm text-white print:text-neutral-300">If the net total is above Nisab, multiply the net zakatable amount by 2.5%.</p>
                  </div>
                </div>
              </figure>

              {/* EDITORIAL CALLOUT CARDS: Formula Block */}
              <div className="bg-slate-900 print:bg-slate-100 border border-slate-700 print:border-slate-300 rounded-xl p-6 my-8 font-mono text-sm sm:text-base shadow-inner">
                <div className="text-slate-400 print:text-slate-600 mb-2 font-sans font-semibold uppercase tracking-wider text-xs">Standard Calculation Formula</div>
                <div className="text-white print:text-black flex flex-col gap-2">
                  <div className="flex justify-between border-b border-slate-800 print:border-slate-300 pb-2">
                    <span>Gross Asset Value</span>
                    <span className="text-white print:text-neutral-300">$X,XXX.XX</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 print:border-slate-300 pb-2">
                    <span>- Deductible Debts</span>
                    <span className="text-red-400 print:text-red-700">$X,XXX.XX</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 print:border-slate-300 pb-2 font-bold">
                    <span>= Net Zakatable Wealth</span>
                    <span className="text-white print:text-black">$X,XXX.XX</span>
                  </div>
                  <div className="flex justify-between pt-2 text-white print:text-neutral-300 font-bold">
                    <span>x 2.5% Zakat Due</span>
                    <span>$XXX.XX</span>
                  </div>
                </div>
              </div>

              <h2 id="section-3" className="text-2xl font-bold text-white print:text-black mt-10 mb-4">Schools of Thought & Methodology</h2>
              <p>
                While the core obligation is universally agreed upon, specific methodologies for evaluation may differ based on classical fiqh paradigms and modern accounting standards.
              </p>

              {/* EDITORIAL CALLOUT CARDS: Schools of Thought Comparison Box */}
              <div className="overflow-hidden rounded-xl border border-slate-800 print:border-slate-300 my-8">
                <div className="grid grid-cols-2 bg-slate-900 print:bg-slate-200 border-b border-slate-800 print:border-slate-300 text-sm font-bold text-white print:text-black">
                  <div className="p-4 border-r border-slate-800 print:border-slate-300">Hanafi / Traditional View</div>
                  <div className="p-4">Shafi'i / Contemporary View</div>
                </div>
                <div className="grid grid-cols-2 bg-slate-950 print:bg-white text-sm text-slate-300 print:text-slate-700">
                  <div className="p-4 border-r border-slate-800 print:border-slate-300">
                    Often applies stricter rules on what constitutes deductible debt and requires comprehensive valuation of all trade goods based on current market wholesale prices.
                  </div>
                  <div className="p-4">
                    May offer specific allowances regarding the intention behind investments and aligns closely with modern AAOIFI standards for fractional or equity ownership.
                  </div>
                </div>
              </div>

              {/* VISUAL BLOCK 2: Video Walkthrough Section */}
              <h2 id="section-4" className="text-2xl font-bold text-white print:text-black mt-12 mb-6">Expert Video Explanation</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group cursor-pointer print:hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-white shadow-xl shadow-neutral-950/50 transform group-hover:scale-110 transition-transform mb-4">
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </div>
                  <span className="bg-black/60 text-white px-3 py-1 text-sm font-medium rounded-full backdrop-blur-md">
                    Watch Full Walkthrough
                  </span>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black font-semibold text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Guide</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight text-shadow-md">Modern Wealth Calculation Masterclass</h3>
                    <p className="text-slate-300 text-sm mt-1">Sh. Fiqh Advisory Council</p>
                  </div>
                  <div className="bg-black/80 px-2 py-1 text-xs font-semibold text-white rounded backdrop-blur-sm">
                    5:30
                  </div>
                </div>
              </div>

              {/* EMBEDDED FAQ ACCORDION */}
              <h2 id="section-5" className="text-2xl font-bold text-white print:text-black mt-12 mb-6 border-b border-slate-800 print:border-slate-300 pb-4">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-10">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-900/60 print:bg-white border border-slate-800 print:border-slate-300 rounded-xl overflow-hidden transition-all">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-white print:text-black pr-4">{faq.question}</span>
                      {openFaq === idx ? (
                        <Minus className="w-5 h-5 text-white print:text-neutral-300 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    <div 
                      className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-slate-400 print:text-slate-700 text-sm leading-relaxed border-t border-slate-800 print:border-slate-200 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. YMYL / E-E-A-T SCHOLARLY DISCLAIMER BOX */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 text-xs text-slate-400 print:text-slate-600 print:bg-slate-100 print:border-slate-300 leading-relaxed mt-12 mb-8">
                <h4 className="font-bold text-slate-300 print:text-slate-800 mb-2 uppercase tracking-wide">Scholarly & Financial Advisory Disclaimer</h4>
                <p>
                  This article is produced based on classical Fiqh sources and AAOIFI Standard No. 35 for informational and educational guidance. General rulings are presented to assist in calculating obligatory Zakat on standard asset portfolios. Personal financial situations, corporate structures, and complex investments may vary significantly. Please consult a qualified Islamic financial scholar, local Imam, or certified expert for individual complex cases.
                </p>
              </div>

            </div>
          </div>

          {/* Column B: Right-Side Navigation Sidebar */}
          <div className="lg:col-span-1 print:hidden">
            <div className="sticky top-24 space-y-6">
              
              {/* CARD 1: Table of Contents */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List className="w-4 h-4 text-white" />
                  On This Page
                </h3>
                <ul className="space-y-3 text-sm text-slate-400 font-medium">
                  <li><a href="#section-1" onClick={(e) => scrollToSection('section-1', e)} className="hover:text-white transition-colors block">Fiqh Foundations</a></li>
                  <li><a href="#section-2" onClick={(e) => scrollToSection('section-2', e)} className="hover:text-white transition-colors block">How to Calculate</a></li>
                  <li><a href="#section-3" onClick={(e) => scrollToSection('section-3', e)} className="hover:text-white transition-colors block">Schools of Thought</a></li>
                  <li><a href="#section-4" onClick={(e) => scrollToSection('section-4', e)} className="hover:text-white transition-colors block">Expert Video Walkthrough</a></li>
                  <li><a href="#section-5" onClick={(e) => scrollToSection('section-5', e)} className="hover:text-white transition-colors block">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* CARD 2: Zakat Calculators Hub */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-white" />
                  Zakat Calculators
                </h3>
                <div className="flex flex-col gap-2">
                  <Link href="/zakat-calculator/" className="flex items-center justify-between w-full p-2.5 bg-neutral-800 hover:bg-neutral-800 text-white text-sm font-medium rounded-lg transition-colors border border-neutral-800">
                    Universal Calculator <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/zakat/gold-silver/" className="flex items-center justify-between w-full p-2.5 hover:bg-slate-800 text-slate-300 text-sm rounded-lg transition-colors">
                    Gold & Silver <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                  <Link href="/zakat/stocks-investments/" className="flex items-center justify-between w-full p-2.5 hover:bg-slate-800 text-slate-300 text-sm rounded-lg transition-colors">
                    Stocks & Investments <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                  <Link href="/zakat/crypto/" className="flex items-center justify-between w-full p-2.5 hover:bg-slate-800 text-slate-300 text-sm rounded-lg transition-colors">
                    Crypto Tool <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                </div>
              </div>

              {/* CARD 3: Nisab & Eligibility Quick Check */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Nisab & Eligibility</h3>
                <div className="space-y-2 text-xs text-slate-300">
                  <a href="/zakat/guides/gold-vs-silver-nisab-threshold-guide/" className="block hover:text-white transition-colors py-1 border-b border-slate-800/60">
                    • Live Gold vs. Silver Nisab Threshold Rates
                  </a>
                  <a href="/zakat/guides/who-is-eligible-for-zakat-8-categories/" className="block hover:text-white transition-colors py-1 border-b border-slate-800/60">
                    • Who is Eligible? The 8 Asnaf Categories
                  </a>
                  <a href="/zakat/guides/exempt-assets-personal-residence/" className="block hover:text-white transition-colors py-1">
                    • Exempt Personal Assets & Residence Guide
                  </a>
                </div>
              </div>

              {/* CARD 4: Related Contextual Articles */}
              <div className="bg-slate-900/80 border border-neutral-800 rounded-2xl p-5 shadow-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-white" />
                  Related Deep Dives
                </h3>
                <div className="space-y-4">
                  <Link href="/zakat/guides/zakat-on-cash-benchmarks/" className="block group">
                    <h4 className="text-sm font-medium text-white group-hover:text-white leading-tight mb-1">Zakat Thresholds on Cash Benchmarks</h4>
                    <div className="flex items-center text-[11px] text-slate-500 uppercase font-semibold tracking-wider">
                      <Clock className="w-3 h-3 mr-1" /> 4 min read
                    </div>
                  </Link>
                  <div className="h-px bg-slate-800/50 w-full"></div>
                  <Link href="/zakat/guides/how-to-calculate-zakat-modern-wealth/" className="block group">
                    <h4 className="text-sm font-medium text-white group-hover:text-white leading-tight mb-1">How to Calculate Zakat on Modern Wealth</h4>
                    <div className="flex items-center text-[11px] text-slate-500 uppercase font-semibold tracking-wider">
                      <Clock className="w-3 h-3 mr-1" /> 10 min read
                    </div>
                  </Link>
                  <div className="h-px bg-slate-800/50 w-full"></div>
                  <Link href="/zakat/guides/what-is-zakat-definition-and-rules/" className="block group">
                    <h4 className="text-sm font-medium text-white group-hover:text-white leading-tight mb-1">What is Zakat in Islam? Purpose & Pillars</h4>
                    <div className="flex items-center text-[11px] text-slate-500 uppercase font-semibold tracking-wider">
                      <Clock className="w-3 h-3 mr-1" /> 5 min read
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6. RELATED ARTICLES GRID */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 print:hidden">
          <h2 className="text-2xl font-bold text-white mb-6">Continue Exploring</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/zakat/guides/zakat-on-debts-and-mortgages/" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-neutral-600 transition-all group flex flex-col h-full">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Category B</span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">Zakat Rulings on Personal Debts, Mortgages & Loans</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2 mt-auto">Understand exactly which debts can be deducted from your total zakatable wealth before paying.</p>
              <div className="flex items-center text-xs text-slate-500 font-semibold uppercase tracking-wider border-t border-slate-800 pt-4 mt-auto">
                <Clock className="w-3.5 h-3.5 mr-1.5" /> 7 Min Read
              </div>
            </Link>
            <Link href="/zakat/guides/zakat-on-business-inventory/" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-neutral-600 transition-all group flex flex-col h-full">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Category D</span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">Valuing Wholesale Inventory & Retail Stock</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2 mt-auto">Rules for calculating Zakat on raw materials, finished goods, and cash in hand for businesses.</p>
              <div className="flex items-center text-xs text-slate-500 font-semibold uppercase tracking-wider border-t border-slate-800 pt-4 mt-auto">
                <Clock className="w-3.5 h-3.5 mr-1.5" /> 6 Min Read
              </div>
            </Link>
            <Link href="/zakat/guides/who-is-eligible-for-zakat-8-categories/" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-neutral-600 transition-all group flex flex-col h-full">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Category A</span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">Who is Eligible for Zakat? The 8 Quranic Categories</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2 mt-auto">Learn about the 8 specific groups of people eligible to receive Zakat (Asnaf) based on the Quran.</p>
              <div className="flex items-center text-xs text-slate-500 font-semibold uppercase tracking-wider border-t border-slate-800 pt-4 mt-auto">
                <Clock className="w-3.5 h-3.5 mr-1.5" /> 5 Min Read
              </div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
