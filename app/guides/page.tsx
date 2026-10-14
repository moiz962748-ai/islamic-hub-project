'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  Compass,
  Heart,
  Flame,
  Star,
  Users,
  Sun,
  Moon,
  ArrowRight,
  Layers,
  Award,
  ShieldCheck,
  ChevronDown,
  BookOpen,
  CheckCircle2,
  Printer,
  HelpCircle,
  Clock
} from 'lucide-react';

interface GuideItem {
  id: string;
  title: string;
  href: string;
  category: 'salah' | 'pilgrimages' | 'dhikr' | 'special';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  readTime: string;
  description: string;
}

interface CategoryGroup {
  id: 'salah' | 'pilgrimages' | 'dhikr' | 'special';
  title: string;
  icon: string;
  badge: string;
  intro: string;
  guides: GuideItem[];
}

const categoriesData: CategoryGroup[] = [
  {
    id: 'salah',
    title: 'Daily & Sunnah Salah',
    icon: '🕌',
    badge: '4 Comprehensive Guides',
    intro: 'The second pillar of Islam and the primary anchor of daily spiritual connection. Master the mandatory (Fard) prayer sequences alongside highly rewarded voluntary night vigils and forgiveness prayers in strict accordance with the verified Sunnah.',
    guides: [
      {
        id: 'namaz',
        title: 'Step-by-Step Namaz Guide',
        href: '/guides/namaz',
        category: 'salah',
        categoryLabel: 'Daily Salah',
        badge: 'Daily Fard',
        badgeColor: 'text-white bg-neutral-800 border-neutral-800',
        icon: <Sparkles className="w-4 h-4 text-white" />,
        readTime: '12 min',
        description: 'Complete illustrated manual for 5 daily prayers with Wudu rules, posture breakdowns, and Arabic transliterations.'
      },
      {
        id: 'tahajjud',
        title: 'How to Pray Tahajjud',
        href: '/guides/tahajjud',
        category: 'salah',
        categoryLabel: 'Night Vigil',
        badge: 'Night Sunnah',
        badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
        icon: <Moon className="w-4 h-4 text-indigo-400" />,
        readTime: '8 min',
        description: 'Practical guide to night vigil prayers during the blessed last third of the night with recommended Surahs and Hadith virtues.'
      },
      {
        id: 'tasbeeh',
        title: 'Salat ul Tasbeeh Guide',
        href: '/guides/tasbeeh',
        category: 'salah',
        categoryLabel: 'Special Prayer',
        badge: 'Forgiveness',
        badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        icon: <Flame className="w-4 h-4 text-amber-400" />,
        readTime: '9 min',
        description: 'Step-by-step method for the 4-Rakat prayer of glorification containing 300 specific Tasbeehat for total expiation of sins.'
      },
      {
        id: 'nafl',
        title: 'Nafl Prayers: Ishraq, Duha & Awwabin',
        href: '/guides/nafl',
        category: 'salah',
        categoryLabel: 'Voluntary',
        badge: 'Voluntary',
        badgeColor: 'text-white bg-neutral-800 border-neutral-800',
        icon: <Sun className="w-4 h-4 text-white" />,
        readTime: '7 min',
        description: 'Guide to daily voluntary Sunnah prayers including post-sunrise Ishraq, forenoon Duha (Chasht), and post-Maghrib Awwabin.'
      }
    ]
  },
  {
    id: 'pilgrimages',
    title: 'Sacred Pilgrimages',
    icon: '🕋',
    badge: '2 Complete Roadmaps',
    intro: 'Chronological step-by-step walkthroughs for fulfilling the sacred journeys to Makkah and Madinah. Follow the exact rites of Ihram, Tawaf, Sa’i, and holy site stayovers based on the Prophet’s ﷺ Farewell Pilgrimage.',
    guides: [
      {
        id: 'umrah',
        title: 'Step-by-Step Umrah Guide',
        href: '/guides/umrah',
        category: 'pilgrimages',
        categoryLabel: 'Minor Pilgrimage',
        badge: 'Sunnah',
        badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        icon: <Compass className="w-4 h-4 text-blue-400" />,
        readTime: '15 min',
        description: 'Chronological walkthrough covering Meeqat intentions, Ihram etiquettes, 7 Tawaf circuits, Sa’i, and Halq/Taqseer.'
      },
      {
        id: 'hajj',
        title: 'Step-by-Step Hajj Guide',
        href: '/guides/hajj',
        category: 'pilgrimages',
        categoryLabel: 'Major Pilgrimage',
        badge: '5th Pillar',
        badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        icon: <Award className="w-4 h-4 text-amber-400" />,
        readTime: '20 min',
        description: 'Day-by-day procedural roadmap from 8th to 13th Dhul Hijjah detailing Mina encampment, Arafah, Muzdalifah, and Jamarat.'
      }
    ]
  },
  {
    id: 'dhikr',
    title: 'Dhikr, Names & Pillars',
    icon: '📿',
    badge: '3 Core Manuals',
    intro: 'Deepen your foundational Islamic theology and daily mindfulness. Learn the transcendent attributes of the Creator, the five structural pillars of the faith, and prophetic litanies prescribed for daily spiritual protection.',
    guides: [
      {
        id: '99-names',
        title: '99 Names of Allah - Asma ul Husna',
        href: '/guides/99-names-of-allah',
        category: 'dhikr',
        categoryLabel: 'Theology',
        badge: 'Asma ul Husna',
        badgeColor: 'text-white bg-neutral-800 border-neutral-800',
        icon: <Star className="w-4 h-4 text-white" />,
        readTime: '18 min',
        description: 'Complete collection of the 99 Divine Names with Arabic script, transliterations, meanings, and practical daily reflections.'
      },
      {
        id: '5-pillars',
        title: '5 Pillars of Islam Overview & Guide',
        href: '/guides/five-pillars-of-islam',
        category: 'dhikr',
        categoryLabel: 'Foundations',
        badge: 'Core Foundations',
        badgeColor: 'text-white bg-neutral-800 border-neutral-800',
        icon: <Layers className="w-4 h-4 text-white" />,
        readTime: '16 min',
        description: 'Comprehensive overview of the non-negotiable fundamentals: Shahada, Salah, Zakat, Sawm (Fasting), and Hajj pilgrimage with full SILO links.'
      },
      {
        id: 'tasbeeh-fatima',
        title: 'Tasbih Fatima & Daily Adhkar Guide',
        href: '/guides/tasbih-fatima-adhkar',
        category: 'dhikr',
        categoryLabel: 'Daily Remembrances',
        badge: 'Daily Adhkar & Duas',
        badgeColor: 'text-white bg-neutral-800 border-neutral-800',
        icon: <Heart className="w-4 h-4 text-white" />,
        readTime: '14 min',
        description: 'Post-Salah and bedtime 33-33-34 glorification gifted to Sayyida Fatima (RA), plus morning, evening, and bedtime adhkar with interactive counters.'
      }
    ]
  },
  {
    id: 'special',
    title: 'Funeral & Special Prayers',
    icon: '🤲',
    badge: '2 Special Formats',
    intro: 'Essential instructions for communal obligations and celestial events. Master the standing funeral prayer for deceased brethren and seasonal festival prayers with distinct Takbeer sequences.',
    guides: [
      {
        id: 'namaz-janaza',
        title: 'Namaz-e-Janazah Funeral Guide',
        href: '/guides/namaz-janaza',
        category: 'special',
        categoryLabel: 'Communal Obligation',
        badge: 'Fard Kifayah',
        badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
        icon: <Users className="w-4 h-4 text-rose-400" />,
        readTime: '13 min',
        description: 'Complete 4-Takbeer standing funeral prayer procedure with authentic Duas for adult men, women, and deceased children.'
      },
      {
        id: 'eid-prayer',
        title: 'Eid & Eclipse Prayer Guides',
        href: '/guides/eid-prayer',
        category: 'special',
        categoryLabel: 'Communal Sunnah',
        badge: 'Sunnah',
        badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        icon: <Sun className="w-4 h-4 text-amber-400" />,
        readTime: '9 min',
        description: 'Full method for Eid al-Fitr and Eid al-Adha extra Takbeerat, alongside solar (Kusuf) and lunar (Khusoof) eclipse prayers.'
      }
    ]
  }
];

const faqData = [
  {
    q: 'Are all worship guides based on authentic Sunnah sources?',
    a: 'Yes. Every guide in this directory is referenced against canonical primary texts including the Holy Quran, Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, and Jami` at-Tirmidhi, cross-checked across the recognized classical schools of Islamic jurisprudence.'
  },
  {
    q: 'How should a beginner or revert start learning Islamic prayers?',
    a: 'We recommend starting with our featured "Step-by-Step Namaz Guide" (/guides/namaz). It starts with purification prerequisites (Wudu), followed by posture illustrations, Arabic phonetics, transliterations, and English meanings for every recitation.'
  },
  {
    q: 'Which school of thought (Madhab) do these guides follow?',
    a: 'Our guides present mainstream consensus positions across the four major Sunni schools of jurisprudence (Hanafi, Shafi’i, Maliki, and Hanbali), highlighting authentic variations respectfully where applicable.'
  },
  {
    q: 'Can I print or save these guides as PDFs for offline study?',
    a: 'Yes. Every guide features a built-in "Print / Save PDF" clean output engine with high-contrast formatting and clear Arabic typography optimized for offline reading and masjid study.'
  }
];

export default function WorshipGuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Real-time live filtering across all 11 guides
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return categoriesData;

    return categoriesData
      .map((cat) => ({
        ...cat,
        guides: cat.guides.filter(
          (g) =>
            g.title.toLowerCase().includes(q) ||
            g.badge.toLowerCase().includes(q) ||
            g.description.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
        )
      }))
      .filter((cat) => cat.guides.length > 0);
  }, [searchQuery]);

  // Section 4 & 6: Technical Schemas & SEO (@graph JSON-LD)
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://islamhub.com/guides#collection',
        url: 'https://islamhub.com/guides',
        name: 'Islamic Worship Guides — Step-by-Step Practical Instructions & Authentic Sunnah Etiquettes',
        description: 'Authenticated scholarly repository of step-by-step practical guides for daily Salah, Tahajjud, Salat ul Tasbeeh, Umrah, Hajj, 99 Names of Allah, and Janazah.',
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://islamhub.com/#website',
          name: 'IslamHub',
          url: 'https://islamhub.com'
        },
        hasPart: categoriesData.flatMap((cat) =>
          cat.guides.map((g) => ({
            '@type': 'HowTo',
            name: g.title,
            url: `https://islamhub.com${g.href}`,
            description: g.description
          }))
        )
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://islamhub.com/guides#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://islamhub.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Worship Guides',
            item: 'https://islamhub.com/guides'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://islamhub.com/guides#faq',
        mainEntity: faqData.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-white selection:text-black pb-20">
      {/* SECTION 4: Technical Schemas & Canonical */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <link rel="canonical" href="https://islamhub.com/guides" />

      {/* SECTION 1: HEADER & E-E-A-T (TRUST ENGINE) */}
      <header className="relative border-b border-neutral-800 bg-black pt-8 pb-10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-neutral-800 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Visible Breadcrumb Path */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold" aria-current="page">
              Worship Guides
            </span>
          </nav>

          {/* E-E-A-T Verified Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 border border-neutral-800 text-white text-xs font-medium shadow-sm">
            <ShieldCheck className="w-4 h-4 text-white shrink-0" />
            <span>Verified by Islamic Scholars • Cited with Sahih Hadith &amp; Quranic Sources</span>
          </div>

          {/* H1 Title & Live Search Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Islamic Worship Guides — <span className="text-white">Step-by-Step Practical Instructions</span> &amp; Authentic Sunnah Etiquettes
              </h1>
            </div>

            {/* SECTION 5: Interactive Live Search Input Bar */}
            <div className="relative w-full lg:w-84 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter 11 guides in real-time..."
                className="w-full bg-slate-950/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors shadow-inner"
                aria-label="Filter worship guides"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Concise 2-Sentence Overview Card (Optimized for AI Overviews / GEO) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-white text-black" />
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              The <strong className="text-white font-semibold">Islamic Worship Guides directory</strong> is an authenticated, scholarly verified repository offering comprehensive step-by-step instructions for daily prayers, sacred pilgrimages, Sunnah supplications, and communal rites. Designed for new Muslims and practicing believers alike, every tutorial integrates classical Fiqh rulings with direct citations from Sahih al-Bukhari, Sahih Muslim, and the Holy Quran.
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>11 Practical Guides</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>Sahih Hadith Citations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-white" />
                <span>4 Sub-Topic Silos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Printer className="w-3.5 h-3.5 text-white" />
                <span>Print &amp; PDF Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* SECTION 3: INTERNAL LINKING & "START HERE" PATH */}
        <section aria-labelledby="start-here-heading">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-neutral-800 text-white shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 id="start-here-heading" className="text-base sm:text-lg font-bold text-white tracking-tight">
                  🚀 New to Learning Namaz? Start Here
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Master the 5 daily prayers with our beginner-friendly manual featuring Wudu steps, postures, and Arabic recitations.
                </p>
              </div>
            </div>

            <Link
              href="/guides/namaz"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold font-bold text-xs sm:text-sm shrink-0 shadow-lg shadow-neutral-950/50 hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Open Namaz Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 2: CONTENT ARCHITECTURE (4 SUB-TOPIC SILOS) */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={`category-${category.id}`}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md space-y-5"
            >
              {/* Category Header with Original High-Value Copy */}
              <div className="border-b border-slate-800/80 pb-4 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                      {category.icon}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-white bg-neutral-800 px-2.5 py-1 rounded-full border border-neutral-800">
                    {category.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {category.intro}
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.guides.map((guide) => (
                  <article
                    key={guide.id}
                    className="flex flex-col p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-neutral-600 hover:bg-slate-900/90 transition-all duration-150 group justify-between space-y-3"
                  >
                    <div>
                      {/* Meta Top: Icon + Badge + Read Time */}
                      <div className="flex items-center justify-between gap-1.5 mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="shrink-0 p-1 rounded-md bg-slate-900 group-hover:bg-slate-800 transition-colors">
                            {guide.icon}
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${guide.badgeColor}`}
                          >
                            {guide.badge}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-white transition-colors leading-snug">
                        <Link href={guide.href} className="focus:outline-none">
                          {guide.title}
                        </Link>
                      </h3>

                      {/* 1-Sentence Concise Description */}
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5 line-clamp-2">
                        {guide.description}
                      </p>
                    </div>

                    {/* Active "Read Guide →" button */}
                    <div className="pt-2.5 border-t border-slate-900 flex items-center justify-between">
                      <Link
                        href={guide.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-white group-hover:translate-x-0.5 transition-all"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] text-slate-500">
                        {guide.categoryLabel}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 px-4 bg-slate-900/40 rounded-xl border border-slate-800">
              <Search className="w-6 h-6 text-slate-500 mx-auto mb-2" />
              <p className="text-xs text-slate-400">No worship guides matching "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-white hover:underline"
              >
                Clear filter &amp; view all 11 guides
              </button>
            </div>
          )}
        </div>

        {/* SECTION 4: COMPACT DIRECTORY ACCORDION FAQ */}
        <section aria-labelledby="faq-heading" className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Scholarly Inquiries</span>
              </div>
              <h2 id="faq-heading" className="text-base sm:text-lg font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="text-[11px] text-slate-500">
              4 Questions • Verified &amp; Updated 2026
            </div>
          </div>

          <div className="space-y-2">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-slate-900/60 border border-slate-800/90 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? '-rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: SIBLING TOOLS & EXPLORE NAVIGATION */}
        <section aria-label="Explore sibling Islamic tools" className="pt-4 pb-4">
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xs sm:text-sm font-bold text-white">Explore Sibling Islamic Portals</h3>
              <p className="text-[11px] text-slate-400">
                Discover verified prayer timing calculators, supplications, and Zakat estimators.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                🏠 Home
              </Link>
              <Link
                href="/zakat-calculator/"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                💰 Zakat Calculator
              </Link>
              <Link
                href="/tools/tasbeeh-counter/"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                📿 Tasbeeh Counter
              </Link>
              <Link
                href="/tools/qibla-finder/"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                🧭 Qibla Finder
              </Link>
              <Link
                href="/tools/islamic-baby-names/"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                👶 Baby Names Hub
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
