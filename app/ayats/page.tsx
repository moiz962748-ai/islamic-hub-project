import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, ChevronLeft, ShieldCheck, BookOpen, Sparkles, 
  HelpCircle, ArrowRight, Shield, Heart, Moon, Layers,
  Sunrise, Award, CheckCircle2, Flame, ArrowUpRight, Search,
  Bookmark, Compass, ExternalLink
} from 'lucide-react';
import { ALL_AYATS, AYAT_CATEGORY_TABS, AyatItem } from './ayatsData';

export const metadata = {
  title: "Sacred Quranic Ayats Directory Hub | Authentic Verses of Protection, Shifa & Rizq",
  description: "Comprehensive directory of 100+ sacred Quranic Ayats sourced from the Uthmanic codex and Sahih Hadith literature with Arabic text, Urdu translations, English meanings, and classical Tafsir commentaries.",
  alternates: {
    canonical: "https://yourdomain.com/ayats/",
  },
  openGraph: {
    title: "Sacred Quranic Ayats Directory Hub",
    description: "Authentic Quranic Ayats for protection, healing, debt relief, and spiritual guidance with Arabic, Urdu, and English.",
    url: "https://yourdomain.com/ayats/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Quranic Ayats Directory Hub",
    description: "Explore verified sacred verses from the Holy Quran with authentic virtues and classical commentaries.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AyatsHubPage({
  searchParams,
}: {
  searchParams?: { page?: string; category?: string; q?: string };
}) {
  // Read params from searchParams prop or fallback to window in client preview
  let pageParam = searchParams?.page;
  let categoryParam = searchParams?.category;
  let queryParam = searchParams?.q;

  if (typeof window !== 'undefined' && (!pageParam || !categoryParam || !queryParam)) {
    const urlParams = new URLSearchParams(window.location.search);
    if (!pageParam) pageParam = urlParams.get('page') || undefined;
    if (!categoryParam) categoryParam = urlParams.get('category') || undefined;
    if (!queryParam) queryParam = urlParams.get('q') || undefined;
  }

  const currentPage = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const activeCategory = categoryParam || 'all';
  const searchQuery = (queryParam || '').trim().toLowerCase();

  // Filter items according to category and optional keyword
  const filteredItems = ALL_AYATS.filter((ayat) => {
    const matchesCategory = activeCategory === 'all' || ayat.category === activeCategory;
    if (!searchQuery) return matchesCategory;
    const matchesSearch = 
      ayat.titleEnglish.toLowerCase().includes(searchQuery) ||
      ayat.titleUrdu.toLowerCase().includes(searchQuery) ||
      ayat.titleArabic.includes(searchQuery) ||
      ayat.surahNameEnglish.toLowerCase().includes(searchQuery) ||
      ayat.meaning.toLowerCase().includes(searchQuery) ||
      ayat.source.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const pageSize = 12;
  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);

  // Dynamic Canonical & Crawlable URLs
  const canonicalUrl = safePage > 1 
    ? `https://yourdomain.com/ayats?page=${safePage}`
    : `https://yourdomain.com/ayats/`;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (pageNumber > 1) params.set('page', pageNumber.toString());
    if (activeCategory && activeCategory !== 'all') params.set('category', activeCategory);
    if (searchQuery) params.set('q', searchQuery);
    const queryString = params.toString();
    return `/ayats${queryString ? `?${queryString}` : '/'}`;
  };

  const createCategoryUrl = (catId: string) => {
    const params = new URLSearchParams();
    if (catId !== 'all') params.set('category', catId);
    if (searchQuery) params.set('q', searchQuery);
    params.set('page', '1');
    const queryString = params.toString();
    return `/ayats${queryString ? `?${queryString}` : '/'}`;
  };

  // Generate page numbers array for pagination bar: [1, 2, ..., totalPages]
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": `Sacred Quranic Ayats & Powerful Verses Directory Hub - Page ${safePage} of ${totalPages}`,
        "description": "Comprehensive authenticated directory of sacred Quranic Ayats for protection, healing, debt relief, and spiritual tranquility.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://yourdomain.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Sacred Ayats Hub",
              "item": "https://yourdomain.com/ayats/"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#itemlist`,
        "name": `Featured Sacred Quranic Ayats - Page ${safePage} of ${totalPages}`,
        "numberOfItems": paginatedItems.length,
        "itemListElement": paginatedItems.map((ayat, index) => ({
          "@type": "ListItem",
          "position": startIndex + index + 1,
          "name": `${ayat.titleEnglish} (${ayat.surahNameEnglish} ${ayat.surahNumber}:${ayat.ayahNumber})`,
          "url": `https://yourdomain.com${ayat.slug}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://yourdomain.com/ayats/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the most powerful verses for daily protection in Islam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The greatest verse for daily protection is Ayat al-Kursi (Surah Al-Baqarah 2:255), followed by the concluding two verses of Surah Al-Baqarah (2:285-286), Ayat al-Hifz (Surah Yusuf 12:64), and the three protective Surahs (Al-Ikhlas, Al-Falaq, and An-Nas)."
            }
          },
          {
            "@type": "Question",
            "name": "What is Ruqyah Ash-Shar'iyyah and which Ayats are used for healing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ruqyah Ash-Shar'iyyah is spiritual healing through the recitation of specific Quranic verses and authentic prophetic supplications. Primary verses include Surah Al-Fatihah, Ayat al-Kursi, Ayat ash-Shifa (Surah Al-Isra 17:82), and the Mu'awwidhatayn."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-neutral-200 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Structured Data & Canonical Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href={canonicalUrl} />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER & E-E-A-T (Author & Trust) */}
        <header className="space-y-6">
          {/* Breadcrumb Navigation (Home > Sacred Ayats Hub) */}
          <nav className="flex items-center text-sm font-medium text-neutral-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-neutral-600 shrink-0" />
            <span className="text-neutral-200 font-semibold">Sacred Ayats Hub</span>
            {activeCategory !== 'all' && (
              <>
                <ChevronRight className="w-4 h-4 text-neutral-600 shrink-0" />
                <span className="text-white capitalize">{activeCategory}</span>
              </>
            )}
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Authentic Quranic Verses • Uthmanic Script • Classical Exegesis</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-50 tracking-tight leading-tight">
              Sacred Quranic Ayats &amp; Thematic Tafsir Hub
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
              Explore 100+ meticulously cataloged sacred Quranic verses for spiritual protection, bodily healing (<em className="text-emerald-300 not-italic font-medium">Shifa</em>), debt elimination, and tranquility. Verified against classical exegeses of Ibn Kathir, Al-Qurtubi, and authentic Sahih Hadith literature.
            </p>
          </div>

          {/* E-E-A-T Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-slate-200">108 Verses Cataloged</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Arabic • Urdu • English • Classical Tafsir</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center space-x-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">
                Reviewed by Scholarly Advisory Board &amp; Certified Huffaz
              </span>
            </div>
          </div>
        </header>

        {/* "START HERE" GUIDED PATH BOX */}
        <section className="bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Foundational Spiritual Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Start Here: The Essential Quranic Trinity Every Muslim Should Recite
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you are seeking divine protection, healing, and peace in your daily life, anchor your routine in this time-tested Quranic foundation: <strong className="text-white">Ayat al-Kursi</strong> after every Salah for Paradise entry, the <strong className="text-white">Last 2 Verses of Surah Al-Baqarah</strong> at bedtime for complete sufficiency, and <strong className="text-white">Ayat Karima</strong> for dissolving grief and trials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/ayats/ayat-al-kursi"
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/30"
              >
                <span>Read Ayat al-Kursi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ayats/surah-baqarah-last-2-ayats"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Last 2 Ayats of Baqarah</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ADSENSE RESERVED LEADERBOARD BANNER CONTAINER */}
        <div 
          className="w-full min-h-[90px] bg-slate-900/40 border border-slate-800/50 rounded-xl flex items-center justify-center my-4 text-xs text-slate-500 uppercase tracking-widest shadow-inner select-none"
          aria-label="Advertisement Container"
        >
          AdSense Reserved Slot 1 (Leaderboard Banner)
        </div>

        {/* DIRECTORY, FILTER & PAGINATED 3-COLUMN CARDS GRID */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Bookmark className="w-6 h-6 text-emerald-400" />
                <span>Sacred Ayats Directory &amp; Sub-Topic Silos</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Showing page {safePage} of {totalPages} • Filter by topic or search live across Arabic terms, Urdu phonetic titles, and English translations.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-400/90 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              {totalItems} Ayats Total
            </div>
          </div>

          {/* Filter Bar & Search Container */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
            <form method="GET" action="/ayats" className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Search by English theme (e.g. 'Shifa', 'Kursi', 'Rizq'), Urdu title, or Surah name..."
                className="w-full pl-12 pr-24 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors"
              >
                Search
              </button>
            </form>

            {/* Quick-Filter Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
              {AYAT_CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={createCategoryUrl(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                        : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Displaying items <strong className="text-emerald-400">{startIndex + 1}</strong> to <strong className="text-emerald-400">{Math.min(startIndex + pageSize, totalItems)}</strong> of {totalItems}</span>
              {searchQuery && <span>Keyword: "{searchQuery}"</span>}
            </div>
          </div>

          {/* 3-Column Ayat Cards Grid */}
          {paginatedItems.length === 0 ? (
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No sacred Ayats matched your query</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Try clearing your search query or switching to another category tab to view the full collection.
              </p>
              <Link
                href="/ayats/"
                className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-sm font-bold transition-colors"
              >
                Reset All Filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedItems.map((ayat) => (
                <Link
                  key={ayat.id}
                  href={ayat.slug}
                  className="group bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Header with category badge & virtue badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        {ayat.categoryLabel}
                      </span>
                      {ayat.badge && (
                        <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                          {ayat.badge}
                        </span>
                      )}
                    </div>

                    {/* Multilingual Titles & Surah Details */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                        {ayat.titleEnglish}
                      </h3>
                      <div className="text-xs font-semibold text-emerald-400/90 mb-2 flex items-center justify-between">
                        <span>{ayat.titleUrdu}</span>
                        <span className="text-slate-400 text-[11px]">Surah {ayat.surahNameEnglish} [{ayat.surahNumber}:{ayat.ayahNumber}]</span>
                      </div>
                      <div 
                        className="text-right text-xl font-arabic text-emerald-200/90 py-2 border-y border-slate-800/60 my-2 leading-relaxed" 
                        dir="rtl"
                      >
                        {ayat.titleArabic}
                      </div>
                    </div>

                    {/* Meaning / Context */}
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {ayat.meaning}
                    </p>
                  </div>

                  {/* Card Footer: Source & Link Indicator */}
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 truncate max-w-[190px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{ayat.source}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Read Full Ayat <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* UI PAGINATION BAR COMPONENT DIRECTLY UNDER 3-COLUMN GRID */}
          {totalPages > 1 && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              {/* Previous Button */}
              {safePage > 1 ? (
                <Link
                  href={createPageUrl(safePage - 1)}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 hover:text-emerald-400 text-slate-200 border border-slate-700/80 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </Link>
              ) : (
                <span className="px-4 py-2 bg-slate-900/40 text-slate-600 border border-slate-800/60 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center gap-1.5 select-none">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </span>
              )}

              {/* Page Number Indicators: "Page X of Y" and [1] [2] [3] ... [9] */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <span className="text-xs sm:text-sm text-slate-400 font-medium mr-2 hidden md:inline-block">
                  Page <strong className="text-emerald-400">{safePage}</strong> of <strong className="text-white">{totalPages}</strong>
                </span>

                {pageNumbers.map((num) => {
                  const isCurrent = num === safePage;
                  return (
                    <Link
                      key={num}
                      href={createPageUrl(num)}
                      className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isCurrent
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20 ring-2 ring-emerald-400/50'
                          : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                      }`}
                      aria-label={`Go to page ${num}`}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {num}
                    </Link>
                  );
                })}
              </div>

              {/* Next Button */}
              {safePage < totalPages ? (
                <Link
                  href={createPageUrl(safePage + 1)}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 hover:text-emerald-400 text-slate-200 border border-slate-700/80 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="px-4 py-2 bg-slate-900/40 text-slate-600 border border-slate-800/60 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center gap-1.5 select-none">
                  Next <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          )}
        </section>

        {/* CURATED THEMATIC COLLECTIONS (SILOS) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Layers className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">
              Curated Thematic Collections (Silos)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Silo 1: Greatest & Essential */}
            <Link
              href="/ayats?category=greatest"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Greatest &amp; Essential Verses
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Ayat al-Kursi, Amanar-Rasool, Surah Al-Fatihah, and foundational revelations of Tawheed and spiritual grandeur.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Explore Silo</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Silo 2: Daily Protection & Bedtime */}
            <Link
              href="/ayats?category=protection"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Sunrise className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Daily Protection &amp; Bedtime
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Ayat al-Hifz, the Mu‘awwidhatayn, and nocturnal shields recited before sleeping to secure angelic guardianship.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Fortress of Believer</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Silo 3: Ruqyah & Shifa Healing */}
            <Link
              href="/ayats?category=healing"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Ruqyah &amp; Shifa Healing
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The authenticated Six Ayats of Shifa, remedies for envy, evil eye, Sihr, and emotional sorrow from primary texts.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Divine Shield &amp; Cure</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Silo 4: Sovereignty, Tawbah & Rizq */}
            <Link
              href="/ayats?category=sovereignty"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Sovereignty, Tawbah &amp; Rizq
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Ayat al-Mulk, Ayat at-Talaq, and Ayat Karima for debt relief, forgiveness, and abundance from unimagined sources.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Blessed Revelations</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* EXPLORE CONNECTED ISLAMIC KNOWLEDGE HUBS (INTERNAL LINKING) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Compass className="w-6 h-6 text-emerald-400" />
                <span>Explore Connected Islamic Knowledge Hubs</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Deepen your knowledge with our integrated suite of authenticated Quranic, supplication, and calculation tools.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80 self-start sm:self-auto uppercase tracking-wider">
              Related Resources
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Knowledge Hub 1: Daily Duas & Adhkar */}
            <Link
              href="/duas/"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-block">
                  Daily Duas &amp; Adhkar
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Daily Duas &amp; Authentic Supplications Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Browse 100+ authenticated prophetic Duas with Arabic text, Urdu phonetic transliterations, and Sahih Hadith references.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Explore Duas Hub</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Knowledge Hub 2: Interactive Utilities & Calculators */}
            <Link
              href="/zakat-calculator"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full inline-block">
                  Interactive Utilities
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  Islamic Tools &amp; Smart Calculators
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Calculate real-time Zakat liabilities, convert Hijri-Gregorian dates, and locate Qiblah coordinates with precision.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-sky-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Open Islamic Tools</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Knowledge Hub 3: Prayer & Fasting */}
            <Link
              href="/ramadan/timings"
              className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full inline-block">
                  Prayer &amp; Fasting
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Global Ramadan Timings &amp; Prayer Schedules
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Accurate astronomical Suhoor, Fajr, and Maghrib timings for over 50,000 cities worldwide across all calculation methods.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>View Timetables</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* SCHOLARLY PRINCIPLES & ETIQUETTES OF RECITATION */}
        <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-emerald-400" />
              <span>The Etiquettes (Adab) of Reciting Sacred Quranic Ayats</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Reciting the Word of Allah carries transcendent blessings. Classical jurists and Hadith masters outline four core spiritual etiquettes to unlock the divine transformative power of these sacred verses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-semibold text-white">Taharah &amp; Wudu</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Purifying the body with ritual ablution (Wudu), facing the Qiblah, and using Miswak or brushing to honor the words of the Almighty.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-semibold text-white">Tartil &amp; Tajweed</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reciting slowly with measured cadence (Tartil), vocalizing letters from their exact anatomical outlets (Makharij) without rushing.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-base font-semibold text-white">Tadabbur (Contemplation)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reflecting deeply upon the cosmic meaning of each verse, pausing at verses of mercy to ask Allah and verses of warning to seek refuge.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/90 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h3 className="text-base font-semibold text-white">Yaqeen (Certainty)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Approaching the Quran with complete, unwavering conviction that Allah’s promise is true, His healing is real, and His protection is absolute.
              </p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (HUB FAQ) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              <span>Frequently Asked Questions Regarding Sacred Quranic Ayats</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Scholarly answers based on authentic Quranic exegesis and classical Fiqh
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all">
              <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors">
                <span>What are the most powerful verses for daily protection in Islam?</span>
                <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-emerald-500/20 text-slate-400 group-open:text-emerald-400 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                The greatest verse for daily protection is Ayat al-Kursi (Surah Al-Baqarah 2:255), followed by the concluding two verses of Surah Al-Baqarah (2:285-286), Ayat al-Hifz (Surah Yusuf 12:64), and the three protective Surahs (Al-Ikhlas, Al-Falaq, and An-Nas). When recited with presence of heart, an angelic guardian is assigned to protect the believer from morning until night.
              </div>
            </details>

            <details className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all">
              <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors">
                <span>What is Ruqyah Ash-Shar'iyyah and which Ayats are used for healing?</span>
                <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-emerald-500/20 text-slate-400 group-open:text-emerald-400 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                Ruqyah Ash-Shar'iyyah is spiritual healing through the recitation of specific Quranic verses and authentic prophetic supplications. Primary verses include Surah Al-Fatihah, Ayat al-Kursi, Ayat ash-Shifa (Surah Al-Isra 17:82), and the Mu'awwidhatayn. The reciter blows gently over clean water or their own hands and wipes the afflicted area.
              </div>
            </details>

            <details className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all">
              <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors">
                <span>Is it permissible to recite Ayats of the Quran in prayer for relief or guidance?</span>
                <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-emerald-500/20 text-slate-400 group-open:text-emerald-400 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                Yes. Reciting Quranic verses containing Duas (such as Ayat Karima or Rabbana supplications) during voluntary prayers (Nawafil), in Sujood, or after finishing the Tashahhud is highly praised and established in the Sunnah.
              </div>
            </details>

            <details className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all">
              <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors">
                <span>Which verse is recommended for relief from debts and poverty?</span>
                <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-emerald-500/20 text-slate-400 group-open:text-emerald-400 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                Ayat al-Mulk (Surah Ali 'Imran 3:26-27) was specifically taught by Prophet Muhammad (PBUH) to Mu'adh ibn Jabal for the settlement of overwhelming debts, alongside Ayat at-Talaq (Surah At-Talaq 65:2-3) for unforeseen sustenance and creating a way out of impossible predicaments.
              </div>
            </details>
          </div>
        </section>

        {/* CONTEXTUAL CROSS-LINKING & FOOTER NAVIGATION */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/duas/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors py-2 px-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700"
          >
            <span>Explore Daily Duas &amp; Azkar Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/ramadan/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>Ramadan 2026 Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
