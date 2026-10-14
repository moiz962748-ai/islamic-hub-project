import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, CheckCircle2, 
  PlayCircle, Coins, Heart, Sun, Moon, 
  HelpCircle, Info, Calculator
} from 'lucide-react';

export const metadata = {
  title: "Eid Al-Fitr 2026: Complete Guide to Prayer, Sunnahs & Zakat al-Fitr",
  description: "Comprehensive guide to Eid al-Fitr. Explore the spiritual significance, moon sighting confirmation, prayer methods, prophetic sunnahs, and Zakat al-Fitr rules.",
  openGraph: {
    title: "Eid Al-Fitr 2026: Complete Guide to Prayer, Sunnahs & Zakat al-Fitr",
    description: "Comprehensive guide to Eid al-Fitr. Explore prayer methods, prophetic sunnahs, and Zakat al-Fitr obligations.",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/eid/fitr",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://yourdomain.com/eid/fitr/#webpage",
      "url": "https://yourdomain.com/eid/fitr",
      "name": "Eid Al-Fitr Guide: Prayer Methods, Sunnahs & Zakat al-Fitr Rules",
      "description": "Comprehensive resources covering Salat al-Eid, morning etiquette, and Zakat al-Fitr rules."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Eid", "item": "https://yourdomain.com/eid" },
        { "@type": "ListItem", "position": 3, "name": "Eid Al-Fitr", "item": "https://yourdomain.com/eid/fitr" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I do if I miss Salat al-Eid at the congregation?",
          "acceptedAnswer": { "@type": "Answer", "text": "If you miss the congregational Eid prayer, the majority of scholars state you can pray it individually at home. It is performed as two rakats with the extra takbeers, but without the khutbah (sermon)." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Eid prayer and Friday (Jumu'ah) prayer?",
          "acceptedAnswer": { "@type": "Answer", "text": "The main differences are that the Eid prayer includes additional takbeers in both rakats, and the Eid Khutbah (sermon) is delivered after the prayer is completed. In contrast, the Jumu'ah Khutbah is delivered before the prayer." }
        },
        {
          "@type": "Question",
          "name": "Do the Six Days of Shawwal fasts need to be consecutive?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, the six days of fasting in Shawwal do not have to be consecutive. You may fast them successively or separately throughout the month of Shawwal, as both methods fulfill the Sunnah." }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "How to Perform Eid Prayer (Salat al-Eid) Step-by-Step",
      "description": "Learn the exact method of praying Salat al-Eid, including the correct number of takbeers and the post-prayer Khutbah etiquette.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1565039845347-10ce69ce1e62?auto=format&fit=crop&q=80",
      "uploadDate": "2026-03-01T10:00:00+00:00",
      "embedUrl": "https://yourdomain.com/embed/eid-prayer-guide"
    }
  ]
};

export default function EidAlFitrPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. METADATA & E-E-A-T TRUST HEADER */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/eid" className="hover:text-white transition-colors">Eid</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-slate-200">Eid Al-Fitr</span>
          </nav>

          <Link href="/about/scholarly-board/" className="flex items-center space-x-2 w-fit bg-neutral-800 border border-neutral-800 rounded-full px-3 py-1.5 hover:bg-neutral-800 transition-colors group">
            <ShieldCheck className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh & Shariah Advisory Council</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Eid Al-Fitr Guide: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              Prayer Methods, Sunnahs & Zakat al-Fitr Rules
            </span>
          </h1>

          <div className="max-w-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Eid al-Fitr marks the joyful culmination of Ramadan, confirmed by the sighting of the Shawwal moon (Hilal). It is a day of spiritual gratitude, communal prayer, and specific morning etiquettes that complete the month-long journey of fasting.
            </p>
          </div>
        </header>

        {/* 2. AEO DIRECT ANSWER & ZAKAT AL-FITR BANNER */}
        <section className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Coins className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10 flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Info className="w-6 h-6 mr-3 text-white" />
              Obligatory Zakat al-Fitr (Fitrana)
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm md:text-base">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-2 shrink-0 mt-0.5" />
                <span><strong>Obligation & Deadline:</strong> Must be paid by every self-sufficient Muslim <em>before</em> the Eid Salah (Salat al-Eid) begins.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-2 shrink-0 mt-0.5" />
                <span><strong>Rate & Calculation:</strong> 1 Saa' (~2.5kg to 3kg) of staple food or equivalent monetary value per household member.</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/zakat/fitrana/" className="inline-flex items-center justify-center w-full md:w-auto bg-white text-black hover:bg-neutral-800 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Fitrana Now
            </Link>
          </div>
        </section>

        {/* 3. FEATURED MEDIA & METHODOLOGY SECTION */}
        <section className="w-full p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left Column: Video */}
            <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800/80 group hover:border-slate-700 transition-colors cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565039845347-10ce69ce1e62?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10" />
              
              <button className="z-20 relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-neutral-800 rounded-full blur-2xl animate-pulse" />
                <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-90 drop-shadow-2xl mb-4" />
                <span className="text-white font-semibold tracking-wide drop-shadow-md text-center px-4">Watch: How to Perform Eid Prayer</span>
              </button>
            </div>
            
            {/* Right Column: Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Key Eid Sunnahs Takeaways</h3>
              <ul className="space-y-5">
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Morning Etiquette</strong>
                    <span className="text-slate-400 leading-relaxed">It is Sunnah to perform Ghusl (ritual bath), wear one's best clothes, eat an odd number of dates before leaving, and recite Takbirat continuously.</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Takbirat Wording</strong>
                    <span className="text-slate-400 leading-relaxed">"Allahu Akbar, Allahu Akbar, La ilaha illallah, Allahu Akbar, Allahu Akbar, wa lillahil-hamd" (God is great, there is no god but God, and all praise belongs to Him).</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Post-Prayer Protocol</strong>
                    <span className="text-slate-400 leading-relaxed">To fulfill the prophetic tradition, Muslims should take a different route when returning home from the prayer ground (Musalla) to witness to more angels and spread joy.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. COMPREHENSIVE CONTENT SILO DIRECTORY */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Explore Detailed Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* SILO 1: PRAYER & WORSHIP */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Heart className="w-4 h-4 mr-2 text-rose-400" /> Prayer & Worship
              </h3>
              <Link href="/eid/fitr/prayer-guide/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Step-by-Step Eid Prayer Guide (6 vs 12 Takbeers)</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/khutbah-rules/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Eid Khutbah Etiquette & Listening Rules</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/takbirat/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Takbirat al-Eid Audio & Transliteration Guide</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 2: ZAKAT AL-FITR & OBLIGATIONS */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Coins className="w-4 h-4 mr-2 text-amber-400" /> Zakat Al-Fitr
              </h3>
              <Link href="/eid/fitr/zakat-rules/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Zakat al-Fitr Rules, Rates & Eligible Recipients</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/cash-vs-food/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Paying Zakat al-Fitr in Cash vs Food</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/missed-deadlines/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Late Payment Rulings & Missed Deadlines</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 3: SUNNAHS & ETIQUETTE */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Sun className="w-4 h-4 mr-2 text-yellow-400" /> Sunnahs & Etiquette
              </h3>
              <Link href="/eid/fitr/eid-sunnahs/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Prophetic Sunnahs of Eid Morning</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/greetings-etiquette/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Eid Greetings & Cultural Etiquette</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/musalla-rules/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Attending Musalla: Women, Children & Elderly Rules</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 4: SHAWWAL FASTING & POST-RAMADAN */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Moon className="w-4 h-4 mr-2 text-indigo-400" /> Shawwal & Post-Ramadan
              </h3>
              <Link href="/eid/fitr/six-days-shawwal/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Six Days of Shawwal: Virtues & Rulings</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/combining-fasts/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Combining Shawwal Fasts with Missed Ramadan Days</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/fitr/post-ramadan-habits/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Maintaining Spiritual Momentum After Ramadan</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

          </div>
        </section>

        {/* 5. AEO FAQS & JSON-LD SCHEMA */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                What should I do if I miss Salat al-Eid at the congregation?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                If you miss the congregational Eid prayer, the majority of scholars state you can pray it individually at home. It is performed as two rakats with the extra takbeers, but without the khutbah (sermon).
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                What is the difference between Eid prayer and Friday (Jumu'ah) prayer?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                The main differences are that the Eid prayer includes additional takbeers in both rakats, and the Eid Khutbah (sermon) is delivered after the prayer is completed. In contrast, the Jumu'ah Khutbah is delivered before the prayer.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Do the Six Days of Shawwal fasts need to be consecutive?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                No, the six days of fasting in Shawwal do not have to be consecutive. You may fast them successively or separately throughout the month of Shawwal, as both methods fulfill the Sunnah.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
