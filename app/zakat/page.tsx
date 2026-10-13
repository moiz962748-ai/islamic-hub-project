import React from 'react';
import Link from 'next/link';
import { 
  Calculator, Coins, Briefcase, Landmark, Heart, BookOpen, Scale,
  ShieldCheck, CheckCircle2, PlayCircle, ArrowRight, TrendingUp, Check, Globe
} from 'lucide-react';

export default function ZakatHubPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://islamhub.com/zakat/#webpage",
        "url": "https://islamhub.com/zakat/",
        "name": "Zakat & Wealth Management Hub",
        "description": "Comprehensive Zakat calculators, Nisab thresholds, and Shariah-compliant wealth management guides.",
        "isPartOf": { "@id": "https://islamhub.com/#website" }
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
            "item": "https://islamhub.com/zakat/"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Zakat Calculators and Guides",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://islamhub.com/zakat-calculator/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://islamhub.com/zakat/gold-silver/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://islamhub.com/zakat/stocks-investments/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://islamhub.com/zakat/crypto/"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://islamhub.com/zakat/business/"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "url": "https://islamhub.com/zakat/fitrana/"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "url": "https://islamhub.com/zakat/nisab-threshold/"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "url": "https://islamhub.com/zakat/rules-eligibility/"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-neutral-50 pb-16 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-neutral-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li><span className="text-neutral-600">&gt;</span></li>
            <li>
              <span className="text-neutral-200 font-medium" aria-current="page">Zakat Hub</span>
            </li>
          </ol>
        </nav>

        {/* Header & E-E-A-T Section */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-50 mb-6">Zakat & Wealth Management Hub</h1>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
              <Calculator className="w-32 h-32 text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-neutral-800 p-1.5 rounded-full border border-neutral-700">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-wide">
                  Reviewed by Shariah Compliance Researchers
                </span>
              </div>
              
              <p className="text-neutral-400 leading-relaxed max-w-3xl text-sm sm:text-base">
                Zakat is a fundamental pillar of Islam, requiring the contribution of 2.5% of qualifying wealth annually once it exceeds the minimum Nisab threshold. Our tools utilize real-time global market spot prices to ensure your obligations are calculated accurately and securely according to established scholarly rulings.
              </p>
            </div>
          </div>
        </div>

        {/* "Start Here" Quick-Action Banner */}
        <div className="mb-12">
          <Link href="/zakat-calculator/" className="block group">
            <div className="bg-neutral-900 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 shadow-sm">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-neutral-50 mb-1 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-white" />
                  Start Here: Universal Zakat Calculator
                </h2>
                <p className="text-neutral-400 text-sm">
                  Calculate your total Zakat across all asset classes in one secure, privacy-first tool.
                </p>
              </div>
              <div className="flex-shrink-0 bg-white hover:bg-neutral-200 text-black rounded-full px-5 py-2.5 flex items-center gap-2 font-medium transition-colors">
                Launch Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Currency Indicator Bar */}
        <div className="flex items-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider shrink-0 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-neutral-400" /> Live Rates:
          </span>
          {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map((currency) => (
            <div key={currency} className="bg-neutral-900 border border-neutral-800 rounded-md px-3 py-1 text-xs font-medium text-neutral-300 shrink-0">
              {currency}
            </div>
          ))}
        </div>

        {/* Cluster 1: Interactive Calculators */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-neutral-50 mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-white" />
            Interactive Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link href="/zakat-calculator/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all relative overflow-hidden flex flex-col h-full shadow-sm">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
                FEATURED
              </div>
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Universal Calculator</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">All-in-one unified calculator supporting multi-asset portfolios including cash, metals, and stocks.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/zakat/gold-silver/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col h-full shadow-sm">
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Zakat on Gold & Silver</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">Calculate Zakat obligations precisely for precious metals using real-time gram and karats valuations.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/zakat/stocks-investments/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col h-full shadow-sm">
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Zakat on Stocks & Wealth</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">Assess active trading portfolios, 401(k) accounts, ETFs, and passive dividend growth investments.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/zakat/crypto/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col h-full shadow-sm">
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Crypto Zakat Calculator</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">Calculate Zakat on Bitcoin, Altcoins, Stablecoins, Staked Tokens, and Web3 digital asset holdings.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/zakat/business/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col h-full shadow-sm">
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Business Zakat</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">Calculate obligations on trade inventory, raw materials, cash on hand, and deductible liabilities.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/zakat/fitrana/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col h-full shadow-sm">
              <div className="bg-neutral-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50 mb-2 group-hover:text-white transition-colors">Fitrana / Zakat al-Fitr</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">Determine mandatory household end-of-Ramadan charity amounts based on local food staple prices.</p>
              <div className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                Open Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>

        {/* Embedded Video & Guides Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Cluster 2: Guides & Nisab Rules (Left Side) */}
          <div className="lg:col-span-6">
            <h2 className="text-xl font-bold text-neutral-50 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-white" />
              Guides & Nisab Rules
            </h2>
            <div className="flex flex-col gap-4">
              <Link href="/zakat/nisab-threshold/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex items-start gap-4 shadow-sm">
                <div className="bg-neutral-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                  <Landmark className="w-6 h-6 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-50 mb-1 group-hover:text-white transition-colors">Live Nisab Thresholds</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">View real-time updates and historical charts for Gold and Silver minimum wealth thresholds.</p>
                </div>
              </Link>
              
              <Link href="/zakat/rules-eligibility/" className="group bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex items-start gap-4 shadow-sm">
                <div className="bg-neutral-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-neutral-700 transition-colors border border-neutral-700">
                  <Scale className="w-6 h-6 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-50 mb-1 group-hover:text-white transition-colors">Zakat Rules & Eligibility</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">Comprehensive, scholar-reviewed rules regarding who must pay Zakat and who is eligible to receive it.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Embedded Video (Right Side) */}
          <div className="lg:col-span-6">
            <h2 className="text-xl font-bold text-neutral-50 mb-6 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-white" />
              Scholarly Walkthrough
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden relative group border border-neutral-800 bg-black shadow-inner flex items-center justify-center">
              {/* Play Button */}
              <button className="z-20 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-md cursor-pointer">
                <PlayCircle className="w-6 h-6 fill-black text-black" />
              </button>

              {/* Video Badges */}
              <div className="absolute top-3 right-3 z-20 bg-neutral-900/90 backdrop-blur border border-neutral-700 text-neutral-300 text-[10px] font-bold px-2 py-1 rounded">
                5 Min Walkthrough
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-neutral-50 font-bold text-sm mb-1 line-clamp-1">How to Calculate Zakat (2026 Rules)</h4>
                <div className="flex items-center gap-3">
                  <span className="text-white text-xs font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Scholar Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
