'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, BookOpen, Shield, Heart, Moon, 
  Sparkles, ChevronRight, Compass, Sunrise, 
  Smile, Award, CheckCircle2, ArrowUpRight
} from 'lucide-react';

export interface DuaItem {
  id: string;
  slug: string;
  category: 'most-searched' | 'daily-routine' | 'protection' | 'forgiveness' | 'fasting';
  categoryLabel: string;
  titleArabic: string;
  titleUrdu: string;
  titleEnglish: string;
  meaning: string;
  source: string;
  badge?: string;
  iconName: 'compass' | 'sunrise' | 'shield' | 'heart' | 'moon' | 'sparkles';
}

export const DUA_ITEMS: DuaItem[] = [
  // Most Searched
  {
    id: 'dua-e-qunoot',
    slug: '/duas/dua-e-qunoot',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'دُعَاءُ الْقُنُوتِ',
    titleUrdu: 'Dua e Qunoot',
    titleEnglish: 'Dua al-Qunoot (Witr Prayer)',
    meaning: 'Supplication of deep submission and seeking guidance recited in the Witr prayer.',
    source: 'Sunan Abi Dawud & At-Tirmidhi',
    badge: 'Witr Essential',
    iconName: 'sparkles'
  },
  {
    id: 'safar-ki-dua',
    slug: '/duas/safar-ki-dua',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'دُعَاءُ السَّفَرِ',
    titleUrdu: 'Safar Ki Dua',
    titleEnglish: 'Supplication for Travel',
    meaning: 'Seeking divine safety, protection, and comfort during journeys and flights.',
    source: 'Sahih Muslim (1342)',
    badge: 'Travel Safety',
    iconName: 'compass'
  },
  {
    id: 'dua-e-istikhara',
    slug: '/duas/dua-e-istikhara',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'دُعَاءُ الاسْتِخَارَةِ',
    titleUrdu: 'Dua e Istikhara',
    titleEnglish: 'Dua for Divine Guidance',
    meaning: 'Invoking Allah’s wisdom and blessing when making crucial life choices.',
    source: 'Sahih Al-Bukhari (1166)',
    badge: 'Decision Making',
    iconName: 'compass'
  },
  {
    id: 'nazar-ki-dua',
    slug: '/duas/nazar-ki-dua',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'دُعَاءُ الْحِفْظِ مِنَ الْعَيْنِ',
    titleUrdu: 'Nazar Ki Dua',
    titleEnglish: 'Protection from Evil Eye & Envy',
    meaning: 'Prophetic shield against Hasad, destructive envy, and the evil eye.',
    source: 'Sahih Al-Bukhari (3371)',
    badge: 'Spiritual Shield',
    iconName: 'shield'
  },
  {
    id: 'roza-rakhne-ki-dua',
    slug: '/duas/roza-rakhne-ki-dua',
    category: 'fasting',
    categoryLabel: 'Fasting',
    titleArabic: 'دُعَاءُ نِيَّةِ الصَّوْمِ',
    titleUrdu: 'Roza Rakhne Ki Dua',
    titleEnglish: 'Intention for Fasting (Suhoor)',
    meaning: 'Niyyah and supplication made at dawn prior to commencing the fast.',
    source: 'Abu Dawud & Islamic Jurisprudence',
    badge: 'Ramadan Daily',
    iconName: 'moon'
  },
  {
    id: 'roza-kholne-ki-dua',
    slug: '/duas/roza-kholne-ki-dua',
    category: 'fasting',
    categoryLabel: 'Fasting',
    titleArabic: 'دُعَاءُ الإِفْطَارِ',
    titleUrdu: 'Roza Kholne Ki Dua',
    titleEnglish: 'Dua for Breaking the Fast (Iftar)',
    meaning: 'Expressing gratitude as thirst is quenched and the reward is confirmed.',
    source: 'Sunan Abi Dawud (2357)',
    badge: 'Iftar Sunnah',
    iconName: 'moon'
  },

  // Daily Routine & Azkar
  {
    id: 'morning-azkar',
    slug: '/duas/morning-azkar',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'أَذْكَارُ الصَّبَاحِ',
    titleUrdu: 'Subah Ke Masnoon Azkar',
    titleEnglish: 'Morning Supplications & Remembrance',
    meaning: 'Comprehensive morning adhkar for Barakah, peace, and spiritual fortitude.',
    source: 'Sahih Al-Bukhari & Muslim',
    badge: 'Daily Fortress',
    iconName: 'sunrise'
  },
  {
    id: 'evening-azkar',
    slug: '/duas/evening-azkar',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'أَذْكَارُ الْمَسَاءِ',
    titleUrdu: 'Shaam Ke Masnoon Azkar',
    titleEnglish: 'Evening Supplications & Protection',
    meaning: 'Protection and peace recited between Asr and Maghrib for safety through the night.',
    source: 'Sahih Muslim & At-Tirmidhi',
    badge: 'Evening Shield',
    iconName: 'moon'
  },
  {
    id: 'after-prayer-azkar',
    slug: '/duas/after-prayer-azkar',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'الأَذْكَارُ بَعْدَ الصَّلَاةِ',
    titleUrdu: 'Namaz Ke Baad Ke Azkar',
    titleEnglish: 'Post-Salah Adhkar & Tasbeeh',
    meaning: 'Astaghfirullah, Ayat al-Kursi, and Tasbeeh Fatimi following the obligatory prayers.',
    source: 'Sahih Muslim (591)',
    badge: 'After Every Salah',
    iconName: 'sparkles'
  },
  {
    id: 'sleeping-dua',
    slug: '/duas/sleeping-dua',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'دُعَاءُ النَّوْمِ',
    titleUrdu: 'Sone Ki Dua',
    titleEnglish: 'Dua Before Sleeping',
    meaning: 'Entrusting one’s soul and life to Allah before resting for the night.',
    source: 'Sahih Al-Bukhari (6312)',
    badge: 'Nightly Habit',
    iconName: 'moon'
  },
  {
    id: 'waking-up-dua',
    slug: '/duas/waking-up-dua',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'دُعَاءُ الاسْتِيقَاظِ',
    titleUrdu: 'Bedaar Hone Ki Dua',
    titleEnglish: 'Dua Upon Waking Up',
    meaning: 'All praise is due to Allah who gave us life after taking it.',
    source: 'Sahih Al-Bukhari (6314)',
    badge: 'First Words of Day',
    iconName: 'sunrise'
  },
  {
    id: 'home-entrance-exit',
    slug: '/duas/home-dua',
    category: 'daily-routine',
    categoryLabel: 'Daily Routine',
    titleArabic: 'دُعَاءُ الدُّخُولِ وَالْخُرُوجِ',
    titleUrdu: 'Ghar Mein Dakhil Hone & Nikalne Ki Dua',
    titleEnglish: 'Entering & Leaving the House',
    meaning: 'Bismillahi tawakkaltu ‘alallah—seeking angelic protection as you step outdoors.',
    source: 'Sunan Abi Dawud (5095)',
    badge: 'Household Safety',
    iconName: 'compass'
  },

  // Protection & Healing
  {
    id: 'ruqyah-shariah',
    slug: '/duas/ruqyah-shariah',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'الرُّقْيَةُ الشَّرْعِيَّةُ',
    titleUrdu: 'Ruqyah Shariah',
    titleEnglish: 'Prophetic Spiritual Healing & Ruqyah',
    meaning: 'Cure and relief from spiritual afflictions, Sihr, evil eye, and inner unrest.',
    source: 'Quran & Sahih Sunnah',
    badge: 'Holistic Healing',
    iconName: 'shield'
  },
  {
    id: 'illness-shifa-dua',
    slug: '/duas/illness-shifa-dua',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'دُعَاءُ الشِّفَاءِ لِلْمَرِيضِ',
    titleUrdu: 'Mareez Ki Shifa Ki Dua',
    titleEnglish: 'Dua for the Sick & Physical Healing',
    meaning: 'Adh-hibil ba’sa Rabban-nas—invoking the Lord of mankind to grant lasting cure.',
    source: 'Sahih Al-Bukhari (5743)',
    badge: 'Health & Recovery',
    iconName: 'heart'
  },
  {
    id: 'anxiety-hardship-dua',
    slug: '/duas/anxiety-hardship-dua',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'دُعَاءُ الْهَمِّ وَالْحَزَنِ',
    titleUrdu: 'Fikr, Qarz & Pareshani Ki Dua',
    titleEnglish: 'Relief from Anxiety, Sorrow & Debt',
    meaning: 'Dua of Prophet Yunus & Prophetic supplications for overcoming depression and burdens.',
    source: 'Sahih Al-Bukhari (6369)',
    badge: 'Mental Peace',
    iconName: 'heart'
  },

  // Forgiveness & Special Occasions
  {
    id: 'sayyidul-istighfar',
    slug: '/duas/sayyidul-istighfar',
    category: 'forgiveness',
    categoryLabel: 'Forgiveness',
    titleArabic: 'سَيِّدُ الاسْتِغْفَارِ',
    titleUrdu: 'Sayyidul Istighfar',
    titleEnglish: 'The Master Supplication for Forgiveness',
    meaning: 'The preeminent formula for seeking complete pardon and guarantee of Jannah.',
    source: 'Sahih Al-Bukhari (6306)',
    badge: 'Highest Virtues',
    iconName: 'sparkles'
  },
  {
    id: 'laylatul-qadr-dua',
    slug: '/duas/laylatul-qadr-dua',
    category: 'forgiveness',
    categoryLabel: 'Forgiveness',
    titleArabic: 'دُعَاءُ لَيْلَةِ الْقَدْرِ',
    titleUrdu: 'Laylatul Qadr Ki Dua',
    titleEnglish: 'Dua of the Night of Decree',
    meaning: 'Allahumma innaka ‘afuwwun tuhibbul ‘afwa fa’fu ‘anni—seeking divine pardon.',
    source: 'Jami` At-Tirmidhi (3513)',
    badge: 'Ramadan Peak',
    iconName: 'moon'
  },
  {
    id: 'parents-dua',
    slug: '/duas/parents-dua',
    category: 'forgiveness',
    categoryLabel: 'Forgiveness',
    titleArabic: 'دُعَاءٌ لِلْوَالِدَيْنِ',
    titleUrdu: 'Walidain Ki Maghfirat Ki Dua',
    titleEnglish: 'Dua for Parents’ Mercy & Long Life',
    meaning: 'Rabbir-hamhuma kama rabbayani sagheera—praying for your parents with tenderness.',
    source: 'Surah Al-Isra [17:24]',
    badge: 'Filial Piety',
    iconName: 'heart'
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Duas' },
  { id: 'most-searched', label: 'Most Searched' },
  { id: 'daily-routine', label: 'Daily Routine' },
  { id: 'protection', label: 'Protection & Shifa' },
  { id: 'forgiveness', label: 'Forgiveness' },
  { id: 'fasting', label: 'Fasting' }
];

export default function DuasClientFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDuas = useMemo(() => {
    return DUA_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        item.titleEnglish.toLowerCase().includes(q) ||
        item.titleUrdu.toLowerCase().includes(q) ||
        item.titleArabic.includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full space-y-8">
      {/* Interactive Search Bar & Filter Controls */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by English topic, Urdu title (e.g. 'Safar', 'Qunoot'), or Arabic keyword..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-sm sm:text-base"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-white text-black shadow-md shadow-neutral-950/50 font-bold'
                    : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Showing <strong className="text-white">{filteredDuas.length}</strong> authenticated supplications</span>
          {searchQuery && <span>Filtered by keyword "{searchQuery}"</span>}
        </div>
      </div>

      {/* Structured Dua Grid */}
      {filteredDuas.length === 0 ? (
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No supplications matched your search</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try checking for spelling differences (e.g., "Qunoot" vs "Qunut") or reset the filters to browse all categories.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-4 py-2 bg-white text-black hover:bg-neutral-800 text-slate-950 rounded-lg text-sm font-bold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDuas.map((dua) => (
            <Link
              key={dua.id}
              href={dua.slug}
              className="group bg-slate-900/60 border border-slate-800/90 hover:border-neutral-600 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-neutral-950/50 relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header with badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-neutral-800 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                    {dua.categoryLabel}
                  </span>
                  {dua.badge && (
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                      {dua.badge}
                    </span>
                  )}
                </div>

                {/* Multilingual Titles */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                      {dua.titleEnglish}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-white mb-2">
                    {dua.titleUrdu}
                  </div>
                  <div 
                    className="text-right text-xl font-arabic text-white py-2 border-y border-slate-800/60 my-2 leading-relaxed" 
                    dir="rtl"
                  >
                    {dua.titleArabic}
                  </div>
                </div>

                {/* Meaning / Context */}
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {dua.meaning}
                </p>
              </div>

              {/* Card Footer: Source & Link Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  {dua.source}
                </span>
                <span className="text-white font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Dua <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
