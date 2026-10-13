import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, CheckCircle2, 
  PlayCircle, Heart, HelpCircle, 
  Scissors, Calendar, ShieldAlert,
  Info, Leaf, Clock, Users, ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Eid Al-Adha & Qurbani 2026: Udhiyah Rules, Dhul Hijjah & Rulings",
  description: "Eid Al-Adha and Qurbani guide. Learn about the sacrifice of Prophet Ibrahim (AS), virtues of the first 10 days of Dhul Hijjah, and slaughter guidelines.",
  openGraph: {
    title: "Eid Al-Adha & Qurbani 2026: Udhiyah Rules, Dhul Hijjah & Rulings",
    description: "Eid Al-Adha and Qurbani guide. Learn about the sacrifice of Prophet Ibrahim (AS), virtues of the first 10 days of Dhul Hijjah, and slaughter guidelines.",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/eid/adha-qurbani",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://yourdomain.com/eid/adha-qurbani/#webpage",
      "url": "https://yourdomain.com/eid/adha-qurbani",
      "name": "Eid Al-Adha & Qurbani Guide: Udhiyah Rulings, Animal Rules & Dhul Hijjah",
      "description": "Comprehensive resources covering Eid Al-Adha, Qurbani rules, and the first 10 days of Dhul Hijjah."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Eid", "item": "https://yourdomain.com/eid" },
        { "@type": "ListItem", "position": 3, "name": "Eid Al-Adha & Qurbani", "item": "https://yourdomain.com/eid/adha-qurbani" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you perform Qurbani on behalf of deceased relatives?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, performing Qurbani on behalf of the deceased is permissible and acts as Sadaqah Jariyah for them. However, it should not replace the primary Qurbani obligation for living, eligible family members." }
        },
        {
          "@type": "Question",
          "name": "Is buying meat from the grocery store the same as performing the sacrifice?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. The act of sacrificing (Udhiyah/Qurbani) is an independent act of worship. Simply buying meat from a butcher or store does not fulfill this specific religious obligation." }
        },
        {
          "@type": "Question",
          "name": "What is the rule about cutting hair and nails before Qurbani?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is highly recommended (Sunnah/Wajib depending on the school of thought) for the one intending to offer Qurbani to refrain from cutting their hair, nails, or skin from the 1st of Dhul Hijjah until their animal is sacrificed." }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Essential Rulings of Qurbani & Animal Selection",
      "description": "Learn the vital rules for selecting a Qurbani animal, shares distribution, and the proper slaughter timeline.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80",
      "uploadDate": "2026-04-15T10:00:00+00:00",
      "embedUrl": "https://yourdomain.com/embed/qurbani-rules-guide"
    }
  ]
};

export default function EidAlAdhaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. METADATA & E-E-A-T TRUST HEADER */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/eid" className="hover:text-emerald-400 transition-colors">Eid</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-slate-200">Eid Al-Adha & Qurbani</span>
          </nav>

          <Link href="/about/scholarly-board/" className="flex items-center space-x-2 w-fit bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5 hover:bg-emerald-400/20 transition-colors group">
            <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh & Shariah Advisory Council</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Eid Al-Adha & Qurbani Guide: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Udhiyah Rulings, Animal Rules & Dhul Hijjah
            </span>
          </h1>

          <div className="max-w-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Eid al-Adha honors the profound sacrifice and devotion of Prophet Ibrahim (AS). Marking the climax of the first 10 days of Dhul Hijjah, this period encompasses the sacred day of Arafah and the obligatory (or highly recommended) slaughter (Udhiyah/Qurbani).
            </p>
          </div>
        </header>

        {/* 2. AEO DIRECT ANSWER & MEAT DISTRIBUTION MATRIX */}
        <section className="w-full bg-slate-900/40 border border-emerald-500/50 rounded-2xl p-6 md:p-8 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden flex flex-col">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-emerald-950 p-2 rounded-lg">
              <Info className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Core Qurbani (Udhiyah) Obligations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <Users className="w-5 h-5 text-emerald-400 mr-2" />
                <h3 className="text-lg font-bold text-slate-100">Who is Obligated</h3>
              </div>
              <p className="text-sm text-slate-300">
                Any sane, adult Muslim possessing wealth equal to or exceeding the Nisab threshold (beyond basic needs) during the days of Eid.
              </p>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <Heart className="w-5 h-5 text-emerald-400 mr-2" />
                <h3 className="text-lg font-bold text-slate-100">The 1/3 Distribution Rule</h3>
              </div>
              <p className="text-sm text-slate-300">
                It is highly recommended to divide the meat into three equal parts: <strong className="text-slate-200">1/3 for Self & Family</strong>, <strong className="text-slate-200">1/3 for Friends & Relatives</strong>, and <strong className="text-slate-200">1/3 for the Poor & Needy</strong>.
              </p>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center mb-3">
                <Scissors className="w-5 h-5 text-emerald-400 mr-2" />
                <h3 className="text-lg font-bold text-slate-100">Cutting Hair & Nails</h3>
              </div>
              <p className="text-sm text-slate-300">
                It is recommended (Sunnah or Wajib) to refrain from trimming hair and nails once the month of Dhul Hijjah begins, until your Qurbani animal is slaughtered.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FEATURED MEDIA & METHODOLOGY SECTION */}
        <section className="w-full p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left Column: Video */}
            <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800/80 group hover:border-slate-700 transition-colors cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10" />
              
              <button className="z-20 relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl animate-pulse" />
                <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 opacity-90 drop-shadow-2xl mb-4" />
                <span className="text-white font-semibold tracking-wide drop-shadow-md text-center px-4">Watch: Essential Rulings of Qurbani</span>
              </button>
            </div>
            
            {/* Right Column: Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Key Qurbani Rules</h3>
              <ul className="space-y-5">
                <li className="flex items-start text-sm">
                  <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Animal Eligibility</strong>
                    <span className="text-slate-400 leading-relaxed">Age thresholds must be met: Sheep/Goats (1 year), Cattle/Cows (2 years), Camels (5 years). The animal must be healthy and free of obvious defects (blindness, extreme lameness, emaciation).</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Slaughter Window</strong>
                    <span className="text-slate-400 leading-relaxed">The sacrifice is only valid if performed <em>after</em> the Eid prayer on the 10th of Dhul Hijjah, ending at sunset on the 13th of Dhul Hijjah (the Days of Tashreeq).</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Shares Allocation</strong>
                    <span className="text-slate-400 leading-relaxed">Small animals (sheep or goats) count as 1 share (covering one person/household). Large animals (cows or camels) can be divided into up to 7 distinct shares.</span>
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
            
            {/* SILO 1: DHUL HIJJAH & FASTING */}
            <div className="flex flex-col gap-4">
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-indigo-400" /> Dhul Hijjah & Fasting
              </h3>
              <Link href="/eid/adha-qurbani/first-10-days/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Virtues of the First 10 Days of Dhul Hijjah</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/day-of-arafah/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Fasting the Day of Arafah: Expiation Rulings</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/takbirat-tashreeq/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Takbirat al-Tashreeq Recitation Rules</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 2: QURBANI OBLIGATIONS & ELIGIBILITY */}
            <div className="flex flex-col gap-4">
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <ShieldAlert className="w-4 h-4 mr-2 text-rose-400" /> Obligations & Eligibility
              </h3>
              <Link href="/eid/adha-qurbani/obligations-nisab/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Who Must Perform Qurbani? Nisab Thresholds</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/animal-defects/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Animal Selection Criteria & Disqualifying Defects</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/shares-rules/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Qurbani Shares: Rules for Families & Joint Households</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 3: SLAUGHTER & FIQH PROCEDURES */}
            <div className="flex flex-col gap-4">
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Leaf className="w-4 h-4 mr-2 text-emerald-500" /> Slaughter & Procedures
              </h3>
              <Link href="/eid/adha-qurbani/slaughter-guidelines/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Humane Islamic Slaughter (Halal Zabiha) Guidelines</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/overseas-qurbani/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Appointing an Agent (Wakalah) for Overseas Qurbani</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/distribution-rules/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Distribution & Sale of Qurbani Meat, Hides & Offal</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 4: EID PRAYER & SUNNAHS */}
            <div className="flex flex-col gap-4">
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-teal-400" /> Eid Prayer & Sunnahs
              </h3>
              <Link href="/eid/adha-qurbani/eid-prayer-guide/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Eid Al-Adha Prayer Step-by-Step Guide</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/fasting-before-prayer/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Fasting Before Eid Al-Adha Prayer (Sunnah Rules)</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/eid/adha-qurbani/days-tashreeq/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-emerald-400 transition-colors text-sm flex-1">Days of Tashreeq Rules & Restrictions</h4>
                <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

          </div>
        </section>

        {/* 5. AEO FAQS & JSON-LD SCHEMA */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Can you perform Qurbani on behalf of deceased relatives?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Yes, performing Qurbani on behalf of the deceased is permissible and acts as Sadaqah Jariyah for them. However, it should not replace the primary Qurbani obligation for living, eligible family members.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Is buying meat from the grocery store the same as performing the sacrifice?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                No. The act of sacrificing (Udhiyah/Qurbani) is an independent act of worship. Simply buying meat from a butcher or store does not fulfill this specific religious obligation.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                What is the rule about cutting hair and nails before Qurbani?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                It is highly recommended (Sunnah/Wajib depending on the school of thought) for the one intending to offer Qurbani to refrain from cutting their hair, nails, or skin from the 1st of Dhul Hijjah until their animal is sacrificed.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
