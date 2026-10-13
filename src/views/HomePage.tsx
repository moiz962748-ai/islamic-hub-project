/**
 * ==============================================================================
 * ULTRA-MINIMALIST MONOCHROMATIC THEME
 * ==============================================================================
 * Background: Deep Black (bg-black)
 * Primary Accent: High-Contrast Pure White (text-white, bg-white hover:bg-neutral-200 text-black font-medium)
 * Cards & Containers: Dark Neutral cards (bg-neutral-900 with razor-thin border border-neutral-800)
 * Text & Headings: Stark White headings (text-neutral-50) and soft ash body text (text-neutral-400)
 * Interactive Elements: Minimalist white line highlights and clean sharp typography focusing 100% on readability.
 * ==============================================================================
 */

'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { 
  MapPin, Calculator, BookOpen, Moon, 
  ShieldCheck, Heart, CheckCircle,
  Compass, PlayCircle, ArrowRight, Book,
  Zap, CircleDot, Calendar, CheckCircle2, Lock, Award, Check,
  ChevronDown, X, HelpCircle, Sparkles
} from 'lucide-react';

export const revalidate = 86400;

const ZakatWidget: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(5000);
  const numericAmount = typeof amount === 'number' ? amount : Number(amount);
  const zakat = !isNaN(numericAmount) && amount !== '' 
    ? (numericAmount * 0.025).toFixed(2) 
    : '0.00';
  
  return (
    <div className="bg-black p-3 rounded-lg border border-neutral-800 my-3 h-[90px] flex flex-col justify-center shadow-inner">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-neutral-400 font-medium">Gold/Cash:</span>
          <div className="relative">
            <span className="absolute left-2 top-1 text-neutral-500 font-semibold">$</span>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 text-neutral-50 w-24 pl-5 pr-2 py-0.5 rounded text-xs focus:outline-none focus:border-white transition-colors font-medium"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-xs mt-1 pt-2 border-t border-neutral-800">
          <span className="text-neutral-400 font-medium">Zakat Due (2.5%):</span>
          <span className="text-white font-bold font-mono">${zakat}</span>
        </div>
      </div>
    </div>
  );
};

const TasbeehWidget: React.FC = () => {
  const [count, setCount] = useState(0);
  const target = 33;
  const isCompleted = count === target;

  const handleIncrement = () => {
    setCount(prev => (prev < target ? prev + 1 : 0));
  };
  
  return (
    <div className="bg-black p-3 rounded-lg border border-neutral-800 my-3 text-center flex flex-col items-center justify-center gap-2 h-[90px] shadow-inner">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-sm font-mono">
          {count} / {target}
        </span>
        {isCompleted && (
          <span className="text-[10px] bg-neutral-800 border border-neutral-700 text-neutral-200 px-1.5 py-0.5 rounded font-semibold animate-pulse">
            Completed!
          </span>
        )}
      </div>
      <button 
        onClick={handleIncrement}
        className="bg-white hover:bg-neutral-200 text-black text-[11px] font-medium px-4 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm"
      >
        <span>{isCompleted ? 'Reset Tasbeeh' : 'Click: SubhanAllah'}</span>
      </button>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQItemProps> = (props) => {
  const { question, answer, isOpen, onToggle } = props;

  return (
    <div className="border border-neutral-800 rounded-xl bg-neutral-900 overflow-hidden transition-all duration-200 shadow-sm">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-neutral-50 font-semibold hover:bg-neutral-800/60 transition-colors focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-4 text-neutral-50">{question}</span>
        <div className={`p-1.5 rounded-full bg-neutral-800 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 sm:p-5 pt-0 text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-800 bg-black/60">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const faqs = [
    {
      question: "How is Zakat calculated on cash, gold, and stocks?",
      answer: "Zakat is calculated as 2.5% of your total qualifying liquid wealth that exceeds the Nisab threshold and has been held for one lunar year (Hawl). This includes cash, bank balances, physical gold/silver, tradable stocks, and net profits from business inventory minus immediate short-term liabilities."
    },
    {
      question: "How are local prayer times calculated on IslamHub?",
      answer: "IslamHub utilizes verified astronomical calculation algorithms standard across global Islamic bodies (such as ISNA, Muslim World League, Umm Al-Qura, and Egyptian General Authority). You can switch calculation methods based on your location and Madhab preference."
    },
    {
      question: "Are all Duas and Hadiths on IslamHub verified?",
      answer: "Yes. Every supplication, verse, and Hadith listed on IslamHub includes full reference citations to major authentic compilations (Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, etc.) verified under scholarly oversight."
    },
    {
      question: "What is Nisab and how is today's rate determined?",
      answer: "Nisab is the minimum threshold of wealth required before Zakat becomes obligatory. It is equivalent to 87.48 grams of pure gold or 612.36 grams of pure silver. IslamHub automatically updates these standard values daily using global precious metal market prices."
    }
  ];

  const coreSilos = [
    { 
      title: "Ramadan 2026 & Fasting", 
      icon: Moon, 
      href: "/ramadan/", 
      desc: "Essential rulings, daily timetables, and structured guides for the holy month.",
      iconClasses: "bg-neutral-800 text-white border border-neutral-700/60",
      actionClasses: "text-white hover:text-neutral-300"
    },
    { 
      title: "Daily Duas Directory", 
      icon: Heart, 
      href: "/duas/", 
      desc: "Authentic supplications for all occasions, emotions, and daily life routines.",
      iconClasses: "bg-neutral-800 text-white border border-neutral-700/60",
      actionClasses: "text-white hover:text-neutral-300"
    },
    { 
      title: "Sacred Ayats & Protection", 
      icon: ShieldCheck, 
      href: "/ayats/", 
      desc: "Quranic verses for healing, protection, Ruqyah, and deep spiritual strength.",
      iconClasses: "bg-neutral-800 text-white border border-neutral-700/60",
      actionClasses: "text-white hover:text-neutral-300"
    },
    { 
      title: "Step-by-Step Worship", 
      icon: BookOpen, 
      href: "/guides", 
      desc: "Comprehensive tutorials on Namaz, Wudu, and essential foundational practices.",
      iconClasses: "bg-neutral-800 text-white border border-neutral-700/60",
      actionClasses: "text-white hover:text-neutral-300"
    }
  ];

  const websiteAndArticleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://islam-hub-project.vercel.app/#website",
        "url": "https://islam-hub-project.vercel.app/",
        "name": "IslamHub",
        "description": "High-performance, SEO-first Islamic platform featuring Ramadan timetables, Zakat calculators, Daily Duas, and Sacred Quranic Ayats directory with thematic Tafsir commentary.",
        "publisher": {
          "@type": "Organization",
          "name": "IslamHub Global Navigation",
          "logo": {
            "@type": "ImageObject",
            "url": "https://islam-hub-project.vercel.app/logo.png"
          }
        },
        "sameAs": [
          "https://twitter.com/islamhub",
          "https://facebook.com/islamhub"
        ]
      },
      {
        "@type": "Article",
        "@id": "https://islam-hub-project.vercel.app/#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://islam-hub-project.vercel.app/"
        },
        "headline": "IslamHub — Next-Gen Islamic Utility for Prayer, Wealth & Sacred Knowledge",
        "description": "Comprehensive Islamic platform providing authentic prayer times, Zakat calculations, verified prophetic Duas with audio, and step-by-step worship guides.",
        "image": [
          "https://images.unsplash.com/photo-1542044801-38d5bfedb9a6?auto=format&fit=crop&q=80"
        ],
        "inLanguage": "en",
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-02-28T12:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "IslamHub Scholarly Board",
          "url": "https://islam-hub-project.vercel.app/about/scholarly-board/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "IslamHub",
          "url": "https://islam-hub-project.vercel.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://islam-hub-project.vercel.app/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://islam-hub-project.vercel.app/"
        }
      },
      {
        "@type": "VideoObject",
        "@id": "https://islam-hub-project.vercel.app/#video",
        "name": "How to Calculate Zakat Accurately — Visual Video Explainer",
        "description": "A comprehensive visual walkthrough and tutorial demonstrating how to calculate Zakat accurately for cash, gold, silver, investments, and business assets.",
        "thumbnailUrl": [
          "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80"
        ],
        "uploadDate": "2026-01-20T10:00:00+00:00",
        "duration": "PT5M30S",
        "contentUrl": "https://islam-hub-project.vercel.app/videos/zakat-explainer.mp4",
        "embedUrl": "https://www.youtube.com/embed/placeholder"
      }
    ]
  };

  const faqSchema = {
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
  };

  return (
    <div className="w-full flex flex-col bg-black min-h-screen text-neutral-50 font-sans selection:bg-white selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteAndArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Version 2026 • Minimalist Edition • Verified Islamic Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-neutral-50">
              Next-Gen Islamic Utility for <br className="hidden lg:block"/>
              <span className="text-white underline decoration-neutral-700 underline-offset-8">
                Prayer, Wealth &amp; Sacred Knowledge
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
              Empowering the modern Muslim Ummah with precision calculation algorithms, verified scholarly oversight, and real-time market Nisab valuations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/zakat-calculator/" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-medium py-3.5 px-8 rounded-full transition-all shadow-sm hover:scale-[1.02] active:scale-95">
                <Calculator className="w-5 h-5 text-black" />
                Calculate Zakat Now
              </Link>
              <Link href="/duas/" className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3.5 px-8 rounded-full transition-all border border-neutral-800 shadow-sm">
                <BookOpen className="w-5 h-5 text-neutral-300" />
                Explore Daily Duas
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Shariah Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Verified Mathematical Formulas</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                <Book className="w-4 h-4 text-white" />
                <span>Authentic Hadith Citations</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                <h3 className="font-semibold text-neutral-50 flex items-center gap-3 text-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                  Engineered for Precision &amp; Authenticity
                </h3>
                <span className="text-xs font-mono text-neutral-300 bg-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-700">
                  LIVE NISAB
                </span>
              </div>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-2.5 rounded-xl border border-neutral-700/60 mt-1">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-50 text-sm sm:text-base">Universal Zakat Calculation Engine</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Precise Hawl calculations, business inventory assessments, 401k/IRA retirement deductions, and precious metal valuations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-2.5 rounded-xl border border-neutral-700/60 mt-1">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-50 text-sm sm:text-base">Millimeter-Accurate Qibla Determination</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      True Great Circle Great Arc bearings computed via WGS-84 ellipsoidal geodesics matching spherical navigation formulas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-2.5 rounded-xl border border-neutral-700/60 mt-1">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-50 text-sm sm:text-base">Curated Thematic Tafsir &amp; Verified Ruqyah</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Contextual revelation notes, authentic chain-of-transmission ratings, and standardized Arabic orthography.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl p-3.5 border border-neutral-800 text-center shadow-inner">
                <span className="text-xs text-neutral-400 font-medium">
                  Audited by independent Shariah compliance researchers &bull; Updated Daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Hubs Grid (4 Cards in 1 Row on Desktop) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-neutral-800">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Master Navigation Hubs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-50 mb-4">Explore Our Core Hubs</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Navigate through our authenticated supplications, sacred Quranic verses, seasonal guides, and comprehensive worship manuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
          {coreSilos.map((silo, idx) => {
            const { 
              title, 
              icon: IconComponent, 
              href, 
              desc, 
              iconClasses, 
              actionClasses
            } = silo;

            return (
              <div 
                key={idx} 
                className="group bg-neutral-900 border border-neutral-800 p-5 sm:p-6 rounded-2xl transition-all flex flex-col justify-between items-start text-left hover:border-neutral-700 shadow-sm"
              >
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-3.5 w-full">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors shrink-0 ${iconClasses}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-50 tracking-tight transition-colors">
                      {title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {desc}
                  </p>
                </div>

                <Link 
                  href={href} 
                  className={`w-full flex items-center justify-between text-xs sm:text-sm font-medium pt-3.5 border-t border-neutral-800 ${actionClasses}`}
                >
                  <span>Explore Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="bg-black border-y border-neutral-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Platform Utilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-50 mb-3">Interactive Platform Utilities</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
              Fast, privacy-first tools designed for your daily worship, calculations, and spiritual tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* Zakat Calculator */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-white" />
                  <h3 className="text-neutral-50 font-bold text-sm">Zakat Quick-Calc</h3>
                </div>
                <ZakatWidget />
              </div>
              <Link href="/zakat-calculator/" className="text-white text-xs font-medium flex items-center justify-between w-full mt-2 hover:text-neutral-300 transition-colors">
                <span>Launch Full Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Digital Tasbeeh */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CircleDot className="w-5 h-5 text-white" />
                  <h3 className="text-neutral-50 font-bold text-sm">Digital Tasbeeh</h3>
                </div>
                <TasbeehWidget />
              </div>
              <Link href="/tools/tasbeeh-counter/" className="text-white text-xs font-medium flex items-center justify-between w-full mt-2 hover:text-neutral-300 transition-colors">
                <span>Open Full Tasbeeh</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Qibla Finder */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-white" />
                  <h3 className="text-neutral-50 font-bold text-sm">Qibla Direction</h3>
                </div>
                <div className="bg-black p-3 rounded-lg border border-neutral-800 my-3 flex items-center justify-center min-h-[90px] shadow-inner">
                  <div className="relative w-14 h-14 rounded-full border-2 border-neutral-700 flex items-center justify-center overflow-hidden bg-neutral-950 shadow-inner">
                    <div className="absolute inset-0 bg-white/5 animate-[spin_10s_linear_infinite]" />
                    <Compass className="w-5 h-5 text-white absolute rotate-[258deg]" />
                    <div className="bg-neutral-800 rounded-md p-0.5 z-10 border border-neutral-700">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-neutral-50 font-bold text-sm font-mono">258&deg;</div>
                    <div className="text-neutral-400 text-[10px] font-semibold">WSW Direction</div>
                  </div>
                </div>
              </div>
              <Link href="/tools/qibla-finder/" className="text-white text-xs font-medium flex items-center justify-between w-full mt-2 hover:text-neutral-300 transition-colors">
                <span>Find Direction</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Prayer Times */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-white" />
                  <h3 className="text-neutral-50 font-bold text-sm">Prayer Timetable</h3>
                </div>
                <div className="bg-black p-2.5 rounded-lg border border-neutral-800 my-3 flex justify-between text-[11px] min-h-[90px] items-center text-neutral-400 shadow-inner">
                  <div className="flex flex-col items-center gap-1 opacity-60">
                    <span className="text-neutral-500 font-mono text-[10px]">Fajr</span>
                    <span className="font-semibold text-neutral-300 font-mono">04:12</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 bg-neutral-800 border border-neutral-700 rounded px-2 py-1 shadow-sm">
                    <span className="text-white font-bold font-mono text-[10px]">Dhuhr</span>
                    <span className="font-bold text-neutral-50 font-mono">13:05</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-60">
                    <span className="text-neutral-500 font-mono text-[10px]">Asr</span>
                    <span className="font-semibold text-neutral-300 font-mono">16:45</span>
                  </div>
                </div>
              </div>
              <Link href="/prayer-times/" className="text-white text-xs font-medium flex items-center justify-between w-full mt-2 hover:text-neutral-300 transition-colors">
                <span>View Timetables</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 my-16 max-w-6xl mx-auto w-full shadow-lg">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="bg-neutral-800 p-2 rounded-xl border border-neutral-700">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-50">Scholarly Oversight &amp; Formula Transparency</h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-4xl">
            IslamHub is engineered to serve the global Muslim community with verified digital utilities. Our Zakat calculation engines, Nisab valuations, and prayer time calculations undergo strict review by qualified Islamic jurisprudence researchers to ensure complete compliance with authentic Sunnah and scholarly consensus.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-black p-4 rounded-xl border border-neutral-800 shadow-inner">
              <div className="bg-neutral-800 p-2 rounded-lg text-white border border-neutral-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-neutral-50 text-sm font-semibold">Scholar-Verified Formulas</span>
            </div>
            <div className="flex items-center gap-3 bg-black p-4 rounded-xl border border-neutral-800 shadow-inner">
              <div className="bg-neutral-800 p-2 rounded-lg text-white border border-neutral-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-neutral-50 text-sm font-semibold">Authentic Hadith Citations</span>
            </div>
            <div className="flex items-center gap-3 bg-black p-4 rounded-xl border border-neutral-800 shadow-inner">
              <div className="bg-neutral-800 p-2 rounded-lg text-white border border-neutral-700">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-neutral-50 text-sm font-semibold">Zero Adware / Privacy-First</span>
            </div>
            <div className="flex items-center gap-3 bg-black p-4 rounded-xl border border-neutral-800 shadow-inner">
              <div className="bg-neutral-800 p-2 rounded-lg text-white border border-neutral-700">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-neutral-50 text-sm font-semibold">Open Math Specifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-50 mb-3">Got Questions About IslamHub?</h2>
          <p className="text-neutral-400 text-sm sm:text-base">Clear answers grounded in Islamic jurisprudence and technical accuracy.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const { question, answer } = faq;

            return (
              <FAQAccordionItem
                key={index}
                question={question}
                answer={answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            );
          })}
        </div>
      </section>

      {/* Video Modal Player */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <h3 className="text-neutral-50 font-semibold text-sm sm:text-base flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-white" />
                How to Calculate Zakat Accurately
              </h3>
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex flex-col items-center justify-center p-6 text-center">
              <PlayCircle className="w-16 h-16 text-white/80 mb-4 animate-bounce" />
              <p className="text-neutral-50 font-semibold mb-1">Video Player Stream Placeholder</p>
              <p className="text-xs text-neutral-400 max-w-md">In your live production build, embed your YouTube or HLS video player component here.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-800 bg-black py-12 px-4 sm:px-6 lg:px-8 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs shadow-sm">
              I
            </div>
            <span className="text-neutral-50 font-bold text-sm tracking-tight">Islam<span className="text-white font-extrabold">Hub</span></span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400 font-medium">Empowering the Global Ummah</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-neutral-400 font-medium">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/shariah-board/" className="hover:text-white transition-colors">Scholarly Advisory Board</Link>
            <Link href="/contact/" className="hover:text-white transition-colors">Contact Support</Link>
          </div>

          <div className="text-neutral-500 font-mono">
            &copy; {new Date().getFullYear()} IslamHub. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
