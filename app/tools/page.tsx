import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, Compass, Calendar, Moon, Sparkles, 
  ShieldCheck, ArrowRight, Shield, Heart, Repeat, 
  Search, CheckCircle2, Award, BookOpen, Layers, 
  HelpCircle, Smartphone, Lock, Globe, Users,
  Clock, ExternalLink, ArrowUpRight
} from 'lucide-react';

export const metadata = {
  title: "Interactive Islamic Digital Tools & Web Utilities | Ad-Free & Accurate",
  description: "Explore free, privacy-first interactive Islamic digital tools: Digital Tasbeeh Counter, GPS Online Qibla Finder, Hijri-Gregorian Islamic Calendar 2026, and Islamic Baby Names Finder.",
  alternates: {
    canonical: "https://islamhub.com/tools/",
  },
  openGraph: {
    title: "Interactive Islamic Digital Tools & Web Utilities",
    description: "High-precision, client-side Islamic web utilities designed for daily worship, Qibla heading, Hijri synchronization, and authentic baby names.",
    url: "https://islamhub.com/tools/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Islamic Digital Tools & Web Utilities",
    description: "Discover privacy-first, verified Islamic web utilities: Qibla compass, Tasbeeh counter, Hijri calendar, and baby names directory.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

interface ToolItem {
  id: string;
  slug: string;
  title: string;
  category: 'daily' | 'calculators' | 'family';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  description: string;
  iconName: 'tasbeeh' | 'qibla' | 'calendar' | 'names' | 'zakat' | 'gold' | 'ramadan' | 'fitrana';
  thumbnailUrl: string;
  thumbnailAlt: string;
  highlights: string[];
  isPrimary?: boolean;
}

const ALL_TOOLS: ToolItem[] = [
  {
    id: 'tasbeeh-counter',
    slug: '/tools/tasbeeh-counter',
    title: 'Digital Tasbeeh Counter',
    category: 'daily',
    categoryLabel: 'Daily Utilities',
    badge: 'Real-time Tracker',
    badgeColor: 'bg-neutral-800 text-white border-neutral-800',
    description: 'Interactive real-time dhikr and salawat tracker with customizable loop targets, gentle haptic vibrations, and persistent browser memory.',
    iconName: 'tasbeeh',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590076212458-7521e1026cb1?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Digital Tasbeeh Counter interface for dhikr and supplication counting',
    highlights: ['33, 99 & 1000 Count Loops', 'Haptic Tap Feedback', 'Offline Storage Safe'],
    isPrimary: true,
  },
  {
    id: 'qibla-finder',
    slug: '/tools/qibla-finder',
    title: 'Online Qibla Finder',
    category: 'daily',
    categoryLabel: 'Daily Utilities',
    badge: 'GPS Accuracy',
    badgeColor: 'bg-neutral-800 text-white border-neutral-800',
    description: 'Instant true-direction Kaaba compass calculating real-time Great Circle azimuth via browser geolocation sensors with 0.1° accuracy.',
    iconName: 'qibla',
    thumbnailUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Online Qibla Finder compass aligning to the Holy Kaaba in Makkah',
    highlights: ['Great Circle Geodesy Math', 'True North Compensation', 'Zero Data Logged'],
    isPrimary: true,
  },
  {
    id: 'islamic-calendar-2026',
    slug: '/tools/islamic-calendar-2026',
    title: 'Islamic Calendar 2026',
    category: 'calculators',
    categoryLabel: 'Calculators & Converters',
    badge: 'Hijri-Gregorian',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    description: 'Synchronized Hijri 1447–1448 AH and Gregorian calendar displaying astronomical moon phases, sacred months, and key Islamic dates.',
    iconName: 'calendar',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Islamic Calendar 2026 displaying Hijri 1447-1448 and Gregorian dates',
    highlights: ['Umm al-Qura & Astronomical', 'Ramadan & Eid Indicators', 'Printable PDF Output'],
    isPrimary: true,
  },
  {
    id: 'islamic-baby-names',
    slug: '/tools/islamic-baby-names',
    title: 'Islamic Baby Names Finder',
    category: 'family',
    categoryLabel: 'Family & Names',
    badge: 'Boy & Girl Indexes',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'Curated searchable directory of 5,000+ authentic Muslim boy and girl names sourced from Quranic verses and Sahih Hadith with Arabic roots.',
    iconName: 'names',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Islamic Baby Names Finder with Arabic etymology and meanings',
    highlights: ['Quranic Names Tagged', 'Phonetic Urdu Pronunciation', 'Prophetic & Sahaba Names'],
    isPrimary: true,
  },
  {
    id: 'zakat-calculator',
    slug: '/zakat-calculator',
    title: 'Universal Zakat Calculator',
    category: 'calculators',
    categoryLabel: 'Calculators & Converters',
    badge: 'Fiqh Compliant',
    badgeColor: 'bg-neutral-800 text-white border-neutral-800',
    description: 'End-to-end Zakat liability engine evaluating cash, stocks, 401(k), real estate, and trade inventory against live Nisab threshold benchmarks.',
    iconName: 'zakat',
    thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Universal Zakat Calculator assessing gold, silver, and wealth assets',
    highlights: ['Multi-Asset Ledger', 'Deductible Debts Netting', 'Full Anonymity'],
    isPrimary: false,
  },
  {
    id: 'gold-silver-nisab',
    slug: '/zakat/gold-silver',
    title: 'Gold & Silver Nisab Calculator',
    category: 'calculators',
    categoryLabel: 'Calculators & Converters',
    badge: 'Live Bullion Rates',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    description: 'Precise precious metal Nisab evaluator converting grams, tolas, and troy ounces with Hanafi vs. Shafi‘i jewelry exemption rulings.',
    iconName: 'gold',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Gold and Silver Nisab bullion rates evaluation tool',
    highlights: ['87.48g Gold Benchmark', '612.36g Silver Standard', '24k/22k/18k Karat Purity'],
    isPrimary: false,
  },
  {
    id: 'ramadan-timings',
    slug: '/ramadan/timings',
    title: 'Global Prayer & Ramadan Timetable',
    category: 'daily',
    categoryLabel: 'Daily Utilities',
    badge: '50,000+ Cities',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    description: 'Astronomically calculated daily Fajr, Suhoor, and Iftar prayer schedules with custom angle conventions for ISNA, MWL, and Umm al-Qura.',
    iconName: 'ramadan',
    thumbnailUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Global Ramadan and daily prayer times timetable',
    highlights: ['Accurate Solar Elevation', 'All Major Fiqh Schools', 'Downloadable Schedules'],
    isPrimary: false,
  },
  {
    id: 'fitrana-calculator',
    slug: '/zakat/fitrana',
    title: 'Zakat al-Fitr (Fitrana) Calculator',
    category: 'calculators',
    categoryLabel: 'Calculators & Converters',
    badge: 'Eid-ul-Fitr',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    description: 'Household Fitrana estimation tool calculating equivalent staple commodities (wheat, dates, barley, and raisins) per family member.',
    iconName: 'fitrana',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=600&q=80&fm=webp',
    thumbnailAlt: 'Zakat al-Fitr calculation tool for grain and commodity standards',
    highlights: ['Per-Dependent Accounting', 'Wheat & Date Valuations', 'Pre-Eid Timing Guidelines'],
    isPrimary: false,
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Tools' },
  { id: 'daily', label: 'Daily Utilities' },
  { id: 'calculators', label: 'Calculators & Converters' },
  { id: 'family', label: 'Family & Names' },
];

export default function ToolsHubPage({
  searchParams,
}: {
  searchParams?: { category?: string; q?: string };
}) {
  let categoryParam = searchParams?.category;
  let queryParam = searchParams?.q;

  if (typeof window !== 'undefined' && (!categoryParam || !queryParam)) {
    const urlParams = new URLSearchParams(window.location.search);
    if (!categoryParam) categoryParam = urlParams.get('category') || undefined;
    if (!queryParam) queryParam = urlParams.get('q') || undefined;
  }

  const activeCategory = categoryParam || 'all';
  const searchQuery = (queryParam || '').trim().toLowerCase();

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    if (!searchQuery) return matchesCategory;
    const matchesSearch = 
      tool.title.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.badge.toLowerCase().includes(searchQuery) ||
      tool.highlights.some(h => h.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  const createCategoryUrl = (catId: string) => {
    const params = new URLSearchParams();
    if (catId !== 'all') params.set('category', catId);
    if (searchQuery) params.set('q', searchQuery);
    const queryString = params.toString();
    return `/tools${queryString ? `?${queryString}` : '/'}`;
  };

  // Structured Data (JSON-LD Schema Graph)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://islamhub.com/tools/#webpage",
        "url": "https://islamhub.com/tools/",
        "name": "Interactive Islamic Digital Tools & Web Utilities",
        "description": "Comprehensive suite of privacy-first, client-side Islamic digital tools including real-time Digital Tasbeeh Counter, GPS Online Qibla Finder, Hijri-Gregorian Islamic Calendar 2026, and Islamic Baby Names Finder.",
        "breadcrumb": {
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
              "name": "Interactive Tools Hub",
              "item": "https://islamhub.com/tools/"
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/#breadcrumb",
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
            "name": "Interactive Tools Hub",
            "item": "https://islamhub.com/tools/"
          }
        ]
      },
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/tasbeeh-counter#app",
        "name": "Digital Tasbeeh Counter",
        "url": "https://islamhub.com/tools/tasbeeh-counter",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "All",
        "description": "Real-time client-side dhikr and tasbeeh tracker with custom lap targets, haptic feedback, and local storage preservation.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/qibla-finder#app",
        "name": "Online Qibla Finder",
        "url": "https://islamhub.com/tools/qibla-finder",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "description": "Accurate browser-based Qibla compass utilizing device GPS coordinates and spherical trigonometric Great Circle calculations.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/islamic-calendar-2026#app",
        "name": "Islamic Calendar 2026",
        "url": "https://islamhub.com/tools/islamic-calendar-2026",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "All",
        "description": "Complete Hijri 1447–1448 AH and Gregorian calendar synchronizer with key Islamic holy dates, moon phases, and astronomical predictions.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/islamic-baby-names#app",
        "name": "Islamic Baby Names Finder",
        "url": "https://islamhub.com/tools/islamic-baby-names",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "All",
        "description": "Curated searchable directory of authentic Islamic boy and girl names derived from Quranic verses and Sahih Hadith with Arabic roots and meanings.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  const renderToolIcon = (iconName: ToolItem['iconName']) => {
    switch (iconName) {
      case 'tasbeeh':
        return <Repeat className="w-6 h-6 text-white" />;
      case 'qibla':
        return <Compass className="w-6 h-6 text-white" />;
      case 'calendar':
        return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'names':
        return <Heart className="w-6 h-6 text-purple-400" />;
      case 'zakat':
      case 'gold':
      case 'fitrana':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'ramadan':
        return <Moon className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-neutral-200 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection & Strict Base Canonical Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION 1: HEADER & E-E-A-T AUTHORITATIVE BAR */}
        <header className="space-y-6">
          {/* Breadcrumb Navigation: Home > Interactive Tools Hub */}
          <nav aria-label="Breadcrumbs" className="flex items-center text-sm font-medium text-slate-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Interactive Tools Hub</span>
            {activeCategory !== 'all' && (
              <>
                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-white capitalize">
                  {CATEGORY_TABS.find(t => t.id === activeCategory)?.label || activeCategory}
                </span>
              </>
            )}
          </nav>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 border border-neutral-800 text-white text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>High-Precision Islamic Web Utilities • Privacy-First &amp; Client-Side</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Interactive Islamic Digital Tools &amp; Web Utilities
            </h1>
            
            {/* 2-Sentence Overview/Summary Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Engineered for uncompromising astronomical accuracy and zero-latency performance, our suite of Islamic digital utilities executes 100% client-side in your browser to safeguard your personal data and geolocation privacy. Whether determining the exact Qibla heading, synchronizing worship targets with the digital Tasbeeh, tracking Hijri calendar milestones, or discovering blessed names, every tool adheres to authenticated Islamic jurisprudence and mathematical standards.
              </p>
            </div>
          </div>

          {/* Visible Expert Author/Reviewer Badge & Byline */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center space-x-2 bg-neutral-800 border border-neutral-800 rounded-full px-3.5 py-1 text-white font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Reviewed by Islamic Astronomy &amp; Fiqh Advisory Board</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
            <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-full px-3.5 py-1 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-white" />
              <span>100% Client-Side Privacy: No Location Tracking Stored</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Award className="w-4 h-4 text-white" />
              <span>Certified Geodesy &amp; Hijri Algorithm Engine (2026)</span>
            </div>
          </div>
        </header>

        {/* SECTION 2: CONTENT ARCHITECTURE & CATEGORIZATION GRID */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-6 h-6 text-white" />
                <span>Verified Islamic Digital Utilities</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select a category below or search across our interactive tools, calculators, and converters.
              </p>
            </div>
            <span className="text-xs font-semibold text-white bg-neutral-800 px-3 py-1 rounded-full border border-neutral-800 self-start sm:self-auto">
              {filteredTools.length} Utilities Available
            </span>
          </div>

          {/* Filter Bar & Search Container */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
            <form method="GET" action="/tools" className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Search tools (e.g., 'Tasbeeh', 'Qibla', 'Calendar', 'Baby Names', 'Nisab')..."
                className="w-full pl-12 pr-24 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-sm sm:text-base"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-white text-black hover:bg-neutral-800 text-slate-950 text-xs font-bold rounded-lg transition-colors"
              >
                Search
              </button>
            </form>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={createCategoryUrl(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-white text-black shadow-md shadow-neutral-950/50 font-bold'
                        : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Structured Responsive Grid Layout for Child Tools */}
          {filteredTools.length === 0 ? (
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
              <Compass className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No interactive tools matched your query</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Try searching with different terms or reset your filters to browse the complete suite of Islamic utilities.
              </p>
              <Link
                href="/tools/"
                className="inline-block px-4 py-2 bg-white text-black hover:bg-neutral-800 text-slate-950 rounded-lg text-sm font-bold transition-colors"
              >
                Reset Filter
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="group bg-slate-900/60 border border-slate-800/90 hover:border-neutral-600 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-neutral-950/50"
                >
                  <div className="space-y-3">
                    {/* Top Header: 48x48px Icon Container alongside Badge Pill */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-neutral-600 transition-colors shadow-inner">
                        {renderToolIcon(tool.iconName)}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${tool.badgeColor}`}>
                          {tool.badge}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {tool.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Tool Title & Truncated 1-2 sentence description */}
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors line-clamp-1">
                        {tool.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  {/* Sleek Action Link at Bottom */}
                  <div className="pt-3 mt-4 border-t border-slate-800/80">
                    <Link
                      href={tool.slug}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white text-black hover:bg-neutral-800 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-neutral-950/50 group-hover:translate-x-0.5"
                    >
                      <span>Open Interactive Tool</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 3: TRUST & CALCULATION STANDARDS SUMMARY CARD */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-3 border-b border-slate-800 pb-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 px-3 py-1 rounded-full border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trust &amp; Calculation Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trust &amp; Calculation Standards
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-4xl">
              Our Islamic digital utilities are engineered for uncompromising accuracy, complete transparency, and zero user data harvesting. Every utility executes directly within your browser runtime with no remote telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Privacy */}
            <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">100% Client-Side Privacy</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All calculations, tasbeeh counters, and GPS coordinate requests execute locally on your device. No personal data, location traces, or worship activity are logged or sent to remote servers.
              </p>
            </div>

            {/* Card 2: GPS & Qibla Accuracy */}
            <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Geodetic GPS Accuracy</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Qibla calculations determine the true geodesic bearing to the Holy Kaaba using spherical geodesy equations combined with device magnetometer sensors and magnetic declination adjustments.
              </p>
            </div>

            {/* Card 3: Astronomical Hijri Standards */}
            <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Astronomical Hijri Standards</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The Islamic Calendar 2026 utilizes precise astronomical crescent visibility algorithms aligned with international lunar observation conferences and the official Saudi Umm al-Qura calendar.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 border border-slate-800/70 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-300 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-white" />
              <span>Calibrated for Daily Worship &amp; Family Needs</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              From rhythmic 33/99/1000 loop tasbeeh counting with subtle haptic vibration to verified Quranic baby name etymologies (Lisan al-Arab), our utilities provide daily spiritual utility with zero ad trackers or intrusive popups.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Full compliance with W3C Geolocation standards, client-side privacy, and accessibility guidelines.</span>
            </span>
            <span className="text-white font-semibold">Zero Advertising Trackers • Privacy Protected</span>
          </div>
        </section>

        {/* SECTION 5: INTERNAL LINKING & SIBLING SILO NAVIGATION */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-white" />
              <span>Explore Related Content &amp; Sibling Silos</span>
            </h2>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Ecosystem Navigation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sibling 1: Worship Guides */}
            <Link
              href="/guides/"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-neutral-950/50"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-neutral-800 border border-neutral-800 px-2.5 py-0.5 rounded-full inline-block">
                  Worship Guides
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                  Islamic Worship &amp; Practice Guides
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Comprehensive illustrated walkthroughs for Step-by-Step Namaz, Wudu purification rules, 99 Names of Allah, and the Five Pillars of Islam.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Browse Guides Hub</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Sibling 2: Sacred Ayats */}
            <Link
              href="/ayats/"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-neutral-950/50"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-neutral-800 border border-neutral-800 px-2.5 py-0.5 rounded-full inline-block">
                  Quranic Ayats
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                  Sacred Quranic Ayats Directory Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Over 100 authenticated sacred verses including Ayat al-Kursi, Amanar-Rasool, Ayat ash-Shifa, and Ayat Karima with Uthmanic Arabic and classical Tafsir.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Explore Sacred Ayats</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Sibling 3: Daily Duas */}
            <Link
              href="/duas/"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-neutral-950/50"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full inline-block">
                  Daily Duas
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  Authentic Duas &amp; Adhkar Directory
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Verified prophetic supplications for morning and evening protection, travel, forgiveness, and distress sourced from Sahih Hadith literature.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-sky-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Browse Daily Duas</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
