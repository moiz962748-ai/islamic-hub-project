import Link from 'next/link';
import { 
  ChevronRight, Calendar, Clock, BookOpen, Heart, 
  ShieldCheck, Download, Info, ArrowRight, Moon, 
  Sun, Activity, Star, FileText, PlayCircle, Globe,
  MapPin, CheckSquare, MoonStar, Ban, Stethoscope, 
  Coins, Coffee, ScrollText, Home, AlertCircle
} from 'lucide-react';

export const metadata = {
  title: "Ramadan 2026: Complete Guide to Fasting, Prayer & Spiritual Renewal",
  description: "Explore our comprehensive Ramadan Hub for 2026. Get fasting rules, prayer timings, Taraweeh guides, and spiritual preparation resources.",
  openGraph: {
    title: "Ramadan 2026: Complete Guide to Fasting, Prayer & Spiritual Renewal",
    description: "Explore our comprehensive Ramadan Hub for 2026. Get fasting rules, prayer timings, Taraweeh guides, and spiritual preparation resources.",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/ramadan",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://yourdomain.com/ramadan/#webpage",
      "url": "https://yourdomain.com/ramadan",
      "name": "Ramadan 2026: Complete Guide to Fasting, Prayer & Spiritual Renewal",
      "description": "Comprehensive hub for Ramadan fasting rules, timings, and spiritual guidance."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan Hub", "item": "https://yourdomain.com/ramadan" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When does Ramadan 2026 begin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ramadan 2026 is expected to begin on or around February 17, 2026, subject to the sighting of the new moon." }
        },
        {
          "@type": "Question",
          "name": "What breaks the fast in Ramadan?",
          "acceptedAnswer": { "@type": "Answer", "text": "Intentionally eating, drinking, or engaging in marital relations during daylight hours breaks the fast. Certain medical procedures and medications may also break the fast." }
        },
        {
          "@type": "Question",
          "name": "Who is exempt from fasting?",
          "acceptedAnswer": { "@type": "Answer", "text": "Exemptions include travelers, those who are ill, elderly incapable of fasting, pregnant or nursing women (if it poses a risk), and women during their menstrual cycle." }
        }
      ]
    }
  ]
};

export default function RamadanHubPage() {
  // Server-rendered static countdown calculation
  const targetDate = new Date("2026-02-17T00:00:00Z");
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  return (
    <main className="min-h-screen bg-black text-neutral-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 2. HEADER & E-E-A-T */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-neutral-400 space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-neutral-600" />
            <span className="text-neutral-200">Ramadan Hub</span>
          </nav>
          
          <Link href="/about/scholarly-board/" className="flex items-center space-x-2 w-fit bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 hover:bg-neutral-800 transition-colors">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-neutral-200 text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh Advisory Board</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-50 tracking-tight">
            Ramadan 2026: <br className="hidden md:block" />
            <span className="text-white underline decoration-neutral-700 underline-offset-8">
              Complete Guide to Fasting, Prayer & Spiritual Renewal
            </span>
          </h1>

          <div className="max-w-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Prepare for a transformative month of mercy and reflection. This comprehensive hub provides everything you need—from accurate Suhoor and Iftar timings to detailed Fiqh guidelines, spiritual checklists, and nightly Taraweeh trackers.
            </p>
          </div>
        </header>

        {/* 3. HERO UTILITY WIDGET */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Moon className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Countdown to Ramadan 2026</h2>
              <div className="flex items-baseline space-x-4 mb-2">
                <div className="flex flex-col items-start">
                  <span className="text-5xl md:text-6xl font-black text-white tabular-nums tracking-tighter" suppressHydrationWarning>{days}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">Days</span>
                </div>
                <span className="text-4xl font-light text-slate-700">:</span>
                <div className="flex flex-col items-start">
                  <span className="text-5xl md:text-6xl font-black text-white tabular-nums tracking-tighter" suppressHydrationWarning>{hours.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">Hours</span>
                </div>
                <span className="text-4xl font-light text-slate-700">:</span>
                <div className="flex flex-col items-start">
                  <span className="text-5xl md:text-6xl font-black text-white tabular-nums tracking-tighter" suppressHydrationWarning>{minutes.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">Mins</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6 flex items-center">
                <Info className="w-4 h-4 mr-2" /> Expected Feb 17, 2026
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/ramadan/calendar-2026.pdf" className="group flex flex-col justify-between bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-neutral-800 transition-transform">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Printable Calendar</h3>
                <p className="text-xs text-slate-400">Download the 2026 PDF</p>
              </div>
            </Link>
            <Link href="/ramadan/timings" className="group flex flex-col justify-between bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-neutral-800 transition-transform">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Suhoor & Iftar</h3>
                <p className="text-xs text-slate-400">Local prayer timings</p>
              </div>
            </Link>
            <Link href="/ramadan/rules" className="group flex flex-col justify-between bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-neutral-800 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Fasting Rules</h3>
                <p className="text-xs text-slate-400">Complete Fiqh guide</p>
              </div>
            </Link>
          </div>
        </section>

        {/* FEATURED MEDIA BANNER */}
        <section className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden group shadow-xl flex items-center justify-center hover:border-slate-700 transition-colors">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594957677840-a4d101d2ce89?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
          
          <button className="z-20 relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-neutral-800 rounded-full blur-xl animate-pulse" />
            <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-90 drop-shadow-2xl" />
          </button>
          
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Welcome to Ramadan 2026</h3>
            <p className="text-slate-300 max-w-lg text-sm sm:text-base">Watch our 2-minute overview of this year's spiritual milestones, moon sighting updates, and key dates.</p>
          </div>
        </section>

        {/* 6. AEO DIRECT ANSWER */}
        <section className="bg-neutral-900 border-l-4 border-white rounded-r-xl p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 bg-neutral-800 p-2 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">What is the core obligation of Ramadan?</h2>
              <p className="text-slate-300 leading-relaxed">
                Fasting (Sawm) during Ramadan is the fourth pillar of Islam, requiring healthy adult Muslims to abstain from food, drink, and marital relations from dawn (Fajr) until sunset (Maghrib). It is a time dedicated to intense spiritual renewal, Quranic recitation, and charitable giving to attain Taqwa (God-consciousness).
              </p>
            </div>
          </div>
        </section>

        {/* 5. INTERNAL LINKING & "START HERE" PATH */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">First Time Fasting? Start Here</h2>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-5 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm shadow-lg">1</div>
              <h3 className="text-white font-semibold mb-2 ml-3">Understand the Intent (Niyyah)</h3>
              <p className="text-sm text-slate-400 ml-3">Learn how and when to make your daily or monthly intention to fast.</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-slate-600">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-5 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm shadow-lg">2</div>
              <h3 className="text-white font-semibold mb-2 ml-3">Know the Boundaries</h3>
              <p className="text-sm text-slate-400 ml-3">Review what strictly breaks the fast and what exemptions apply.</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-slate-600">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-5 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm shadow-lg">3</div>
              <h3 className="text-white font-semibold mb-2 ml-3">Pace Your Day</h3>
              <p className="text-sm text-slate-400 ml-3">Optimize Suhoor nutrition and plan your Taraweeh worship schedule.</p>
            </div>
          </div>
        </section>

        {/* LOCAL SEO INTEGRATION BLOCK */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
             <h2 className="text-2xl font-bold text-white flex items-center">
               <Globe className="w-6 h-6 mr-3 text-white"/> 
               Global Suhoor & Iftar Schedules
             </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/ramadan/timings/uk/" className="flex items-center p-4 bg-slate-900/80 border border-slate-800 hover:border-neutral-600 hover:bg-slate-800/80 rounded-xl transition-all group">
              <MapPin className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 transition-colors" />
              <span className="text-slate-200 font-medium text-sm sm:text-base">United Kingdom</span>
            </Link>
            <Link href="/ramadan/timings/us/" className="flex items-center p-4 bg-slate-900/80 border border-slate-800 hover:border-neutral-600 hover:bg-slate-800/80 rounded-xl transition-all group">
              <MapPin className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 transition-colors" />
              <span className="text-slate-200 font-medium text-sm sm:text-base">United States</span>
            </Link>
            <Link href="/ramadan/timings/uae/" className="flex items-center p-4 bg-slate-900/80 border border-slate-800 hover:border-neutral-600 hover:bg-slate-800/80 rounded-xl transition-all group">
              <MapPin className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 transition-colors" />
              <span className="text-slate-200 font-medium text-sm sm:text-base">UAE</span>
            </Link>
            <Link href="/ramadan/timings/pakistan/" className="flex items-center p-4 bg-slate-900/80 border border-slate-800 hover:border-neutral-600 hover:bg-slate-800/80 rounded-xl transition-all group">
              <MapPin className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 transition-colors" />
              <span className="text-slate-200 font-medium text-sm sm:text-base">Pakistan</span>
            </Link>
          </div>
        </section>

        {/* 4. CONTENT SILO GRID (3-Click Navigation Depth) */}
        <section className="space-y-8 pt-4">
          <h2 className="text-3xl font-bold text-white">Explore the Hub</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Silo 1: Ramadan Essentials */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">Ramadan Essentials</h3>
              </div>
              <Link href="/ramadan/overview" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Info className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Ramadan Overview</h4>
                  <p className="text-sm text-slate-400">The spiritual significance and history.</p>
                </div>
              </Link>
              <Link href="/ramadan/prep-checklist" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <CheckSquare className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Prep Checklist</h4>
                  <p className="text-sm text-slate-400">Mental, physical, and home preparation.</p>
                </div>
              </Link>
              <Link href="/ramadan/taraweeh-guide" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <BookOpen className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Taraweeh Guide</h4>
                  <p className="text-sm text-slate-400">Night prayers structure and etiquettes.</p>
                </div>
              </Link>
              <Link href="/ramadan/laylat-al-qadr" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <MoonStar className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Laylat al-Qadr</h4>
                  <p className="text-sm text-slate-400">Seeking the Night of Decree.</p>
                </div>
              </Link>
            </div>

            {/* Silo 2: Fasting Rules & Fiqh */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">Fasting Rules & Fiqh</h3>
              </div>
              <Link href="/ramadan/rules/nullifiers" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Ban className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Fasting Nullifiers</h4>
                  <p className="text-sm text-slate-400">Actions that invalidate your fast.</p>
                </div>
              </Link>
              <Link href="/ramadan/rules/exemptions" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <AlertCircle className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Exemptions</h4>
                  <p className="text-sm text-slate-400">Travel, illness, and pregnancy rulings.</p>
                </div>
              </Link>
              <Link href="/ramadan/rules/fidya-kaffarah" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Coins className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Fidya & Kaffarah</h4>
                  <p className="text-sm text-slate-400">Penalties for broken or missed fasts.</p>
                </div>
              </Link>
              <Link href="/ramadan/rules/healthcare" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Stethoscope className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Healthcare while Fasting</h4>
                  <p className="text-sm text-slate-400">Inhalers, injections, and blood tests.</p>
                </div>
              </Link>
            </div>

            {/* Silo 3: Duas & Worship */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">Duas & Worship</h3>
              </div>
              <Link href="/ramadan/duas" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Coffee className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Suhoor & Iftar Duas</h4>
                  <p className="text-sm text-slate-400">Supplications for opening and closing fasts.</p>
                </div>
              </Link>
              <Link href="/ramadan/worship-tracker" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <ScrollText className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Nightly Worship Tracker</h4>
                  <p className="text-sm text-slate-400">Habit tracking for Quran and prayers.</p>
                </div>
              </Link>
              <Link href="/ramadan/itikaf" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-colors">
                <Home className="w-5 h-5 text-slate-500 group-hover:text-white mr-3 mt-0.5 shrink-0 transition-colors" />
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-white transition-colors">Itikaf Guidelines</h4>
                  <p className="text-sm text-slate-400">Seclusion in the masjid rules.</p>
                </div>
              </Link>
              <Link href="/zakat" className="flex items-start group bg-slate-900/80 border border-slate-800 hover:border-neutral-600 rounded-xl p-4 transition-colors relative overflow-hidden">
                <div className="absolute right-0 top-0 w-16 h-16 bg-neutral-800 blur-xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Pay Zakat</h4>
                  <p className="text-sm text-slate-400">Calculate and pay your annual Zakat.</p>
                </div>
              </Link>
            </div>
            
          </div>
        </section>

        {/* 6. FAQS (No JS Accordion) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-2">
            
            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                When does Ramadan 2026 begin?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Ramadan 2026 is expected to begin on or around February 17, 2026, depending on the sighting of the new moon. Islamic dates are subject to lunar visibility.
              </div>
            </details>

            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                What breaks the fast in Ramadan?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Intentionally eating, drinking, or engaging in marital relations during daylight hours (from dawn to sunset) breaks the fast. Unintentional actions (like forgetting you are fasting and taking a sip of water) do not break the fast. Certain medical procedures and swallowing medications will also break it.
              </div>
            </details>

            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Who is exempt from fasting?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Exemptions are granted out of mercy. Travelers on a journey, those who are acutely or chronically ill, the elderly who are physically incapable, pregnant or nursing women (if it poses a risk to them or the baby), and women during their menstrual cycle or post-partum bleeding are all exempt. Missed days must be made up later, or in cases of chronic inability, compensated via Fidya.
              </div>
            </details>

            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Can I brush my teeth while fasting?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Yes, it is permissible to brush your teeth using toothpaste or a miswak while fasting, provided you are careful not to swallow any water or toothpaste.
              </div>
            </details>

          </div>
        </section>

      </div>
    </main>
  );
}
