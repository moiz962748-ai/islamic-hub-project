'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, BookOpen, Shield, Heart, Moon, 
  Sparkles, ChevronRight, Compass, Sunrise, 
  Smile, Award, CheckCircle2, ArrowUpRight
} from 'lucide-react';

export interface AyatItem {
  id: string;
  slug: string;
  surahNameEnglish: string;
  surahNumber: number;
  ayahNumber: string;
  category: 'greatest' | 'protection' | 'healing' | 'relief' | 'sovereignty';
  categoryLabel: string;
  titleArabic: string;
  titleUrdu: string;
  titleEnglish: string;
  meaning: string;
  source: string;
  badge?: string;
  iconName: 'sparkles' | 'shield' | 'heart' | 'compass' | 'award';
}

export const AYAT_ITEMS: AyatItem[] = [
  {
    id: 'ayat-al-kursi',
    slug: '/ayats/ayat-al-kursi',
    surahNameEnglish: 'Al-Baqarah',
    surahNumber: 2,
    ayahNumber: '255',
    category: 'greatest',
    categoryLabel: 'Greatest Ayat',
    titleArabic: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    titleUrdu: 'آیت الکرسی (Ayat al-Kursi)',
    titleEnglish: 'Ayat al-Kursi (The Throne Verse)',
    meaning: 'The most majestic declaration of Tawheed, absolute divine sovereignty, and eternal guardianship over the universe.',
    source: 'Sahih Muslim (810) • Sahih Al-Bukhari',
    badge: 'Greatest Verse',
    iconName: 'sparkles'
  },
  {
    id: 'surah-baqarah-last-2-ayats',
    slug: '/ayats/surah-baqarah-last-2-ayats',
    surahNameEnglish: 'Al-Baqarah',
    surahNumber: 2,
    ayahNumber: '285-286',
    category: 'greatest',
    categoryLabel: 'Divine Sufficiency',
    titleArabic: 'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ',
    titleUrdu: 'آخری دو آیات سورۃ البقرہ (Amanar Rasul)',
    titleEnglish: 'Last 2 Ayats of Surah Al-Baqarah',
    meaning: 'Recited at night to suffice the believer against all harm, nightmares, evil spirits, and spiritual shortcomings.',
    source: 'Sahih Al-Bukhari (5009) & Muslim',
    badge: 'Nighttime Shield',
    iconName: 'shield'
  },
  {
    id: 'ayat-karima',
    slug: '/ayats/ayat-karima',
    surahNameEnglish: 'Al-Anbiya',
    surahNumber: 21,
    ayahNumber: '87',
    category: 'relief',
    categoryLabel: 'Distress Relief',
    titleArabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    titleUrdu: 'آیت کریمہ (دعائے یونس علیہ السلام)',
    titleEnglish: 'Ayat Karima (Supplication of Yunus)',
    meaning: 'The sacred plea that rescued Prophet Yunus from the whale’s belly; guaranteed response for any distressed believer.',
    source: 'Jami` At-Tirmidhi (3505)',
    badge: 'Miraculous Relief',
    iconName: 'heart'
  },
  {
    id: 'ayat-ash-shifa',
    slug: '/ayats/ayat-ash-shifa',
    surahNameEnglish: 'Al-Isra',
    surahNumber: 17,
    ayahNumber: '82',
    category: 'healing',
    categoryLabel: 'Healing & Shifa',
    titleArabic: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ',
    titleUrdu: 'آیات الشفاء (قرآنی علاج و شفا)',
    titleEnglish: 'Ayat ash-Shifa (The Healing Verse)',
    meaning: 'Affirming that the Holy Quran is a physical and spiritual cure, dissolving bodily sickness, sadness, and distress.',
    source: 'Surah Al-Isra [17:82] • Sahih Hadith',
    badge: 'Divine Cure',
    iconName: 'heart'
  },
  {
    id: 'ayat-al-mulk',
    slug: '/ayats/ayat-al-mulk',
    surahNameEnglish: 'Ali Imran',
    surahNumber: 3,
    ayahNumber: '26-27',
    category: 'sovereignty',
    categoryLabel: 'Sovereignty',
    titleArabic: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ',
    titleUrdu: 'آیت الملک (عزت و سلطنت کی دعا)',
    titleEnglish: 'Ayat al-Mulk (Divine Dominion & Honor)',
    meaning: 'Prophetic supplication for resolving heavy debts, achieving righteous honor, and seeking boundless provision.',
    source: 'Surah Ali Imran [3:26-27] • Tabarani',
    badge: 'Honor & Debt Relief',
    iconName: 'award'
  },
  {
    id: 'ayat-at-talaq-rizq',
    slug: '/ayats/ayat-at-talaq-rizq',
    surahNameEnglish: 'At-Talaq',
    surahNumber: 65,
    ayahNumber: '2-3',
    category: 'relief',
    categoryLabel: 'Sustenance',
    titleArabic: 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
    titleUrdu: 'آیت رزق و کشائش (مخرج و وسعت)',
    titleEnglish: 'Ayat of Sustenance & Divine Way Out',
    meaning: 'Guarantees that whoever fears Allah, He creates a way out of all dead ends and grants sustenance from unforeseen sources.',
    source: 'Surah At-Talaq [65:2-3] • Ibn Majah',
    badge: 'Unforeseen Rizq',
    iconName: 'compass'
  },
  {
    id: 'ayat-al-hifz-yusuf',
    slug: '/ayats/ayat-al-kursi',
    surahNameEnglish: 'Yusuf',
    surahNumber: 12,
    ayahNumber: '64',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'فَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
    titleUrdu: 'آیت حفاظت (اللہ بہترین محافظ ہے)',
    titleEnglish: 'Ayat of Divine Guardianship (Fallahu Khayrun Hafiza)',
    meaning: 'The timeless plea of Prophet Ya’qub (AS) placing loved ones and children under the supreme guardianship of the Most Merciful.',
    source: 'Surah Yusuf [12:64] • Classical Ruqyah',
    badge: 'Child Protection',
    iconName: 'shield'
  },
  {
    id: 'ayat-hasbunallah',
    slug: '/ayats/ayat-karima',
    surahNameEnglish: 'Ali Imran',
    surahNumber: 3,
    ayahNumber: '173',
    category: 'relief',
    categoryLabel: 'Reliance',
    titleArabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    titleUrdu: 'حسبنا اللہ و نعم الوکیل',
    titleEnglish: 'Hasbunallahu Wa Ni’mal Wakeel',
    meaning: 'The declaration of absolute reliance uttered by Prophet Ibrahim in the fire and the Prophet Muhammad at the Battle of the Trench.',
    source: 'Sahih Al-Bukhari (4563)',
    badge: 'Ultimate Tawakkul',
    iconName: 'compass'
  },
  {
    id: 'ayat-an-nur',
    slug: '/ayats/ayat-al-kursi',
    surahNameEnglish: 'An-Nur',
    surahNumber: 24,
    ayahNumber: '35',
    category: 'greatest',
    categoryLabel: 'Divine Light',
    titleArabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ',
    titleUrdu: 'آیت النور (اللہ آسمانوں اور زمین کا نور ہے)',
    titleEnglish: 'Ayat an-Nur (The Verse of Light)',
    meaning: 'The sublime parable of celestial light illuminating the heart, conscience, and cosmos with spiritual guidance.',
    source: 'Surah An-Nur [24:35] • Tafsir Ibn Kathir',
    badge: 'Spiritual Vision',
    iconName: 'sparkles'
  },
  {
    id: 'ayat-al-faraj-inshirah',
    slug: '/ayats/ayat-at-talaq-rizq',
    surahNameEnglish: 'Ash-Sharh',
    surahNumber: 94,
    ayahNumber: '5-6',
    category: 'relief',
    categoryLabel: 'Ease After Hardship',
    titleArabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    titleUrdu: 'تنگی کے ساتھ آسانی (ان مع العسر یسرا)',
    titleEnglish: 'Ayat of Promised Ease (Inna Ma’al ‘Usri Yusra)',
    meaning: 'Divine guarantee that no single hardship can ever overpower two companion eases.',
    source: 'Surah Ash-Sharh [94:5-6] • Muwatta Malik',
    badge: 'Double Ease',
    iconName: 'heart'
  },
  {
    id: 'ayat-al-hashr-asma-ul-husna',
    slug: '/ayats/ayat-al-kursi',
    surahNameEnglish: 'Al-Hashr',
    surahNumber: 59,
    ayahNumber: '22-24',
    category: 'greatest',
    categoryLabel: 'Names of Allah',
    titleArabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَنُ الرَّحِيمُ',
    titleUrdu: 'آخری آیات سورۃ الحشر (اسمائے حسنیٰ)',
    titleEnglish: 'Concluding Verses of Surah Al-Hashr',
    meaning: 'Recited in the morning for 70,000 angels to send prayers of mercy upon the reciter until evening.',
    source: 'Jami` At-Tirmidhi (2922)',
    badge: '70,000 Angels',
    iconName: 'award'
  },
  {
    id: 'ayat-tawbah-adam',
    slug: '/ayats/ayat-karima',
    surahNameEnglish: 'Al-A’raf',
    surahNumber: 7,
    ayahNumber: '23',
    category: 'relief',
    categoryLabel: 'Repentance',
    titleArabic: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    titleUrdu: 'دعائے آدم علیہ السلام (توبہ و استغفار)',
    titleEnglish: 'Supplication of Prophet Adam (Rabbana Zalamna)',
    meaning: 'The primal confession of human repentance taught by Allah directly to Adam and Hawwa (Eve) to attain complete forgiveness.',
    source: 'Surah Al-A’raf [7:23] • Tafsir Tabari',
    badge: 'Foundational Tawbah',
    iconName: 'heart'
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Sacred Ayats' },
  { id: 'greatest', label: 'Greatest & Essential' },
  { id: 'protection', label: 'Protection & Ruqyah' },
  { id: 'healing', label: 'Healing & Shifa' },
  { id: 'relief', label: 'Relief & Tawbah' },
  { id: 'sovereignty', label: 'Sovereignty & Rizq' }
];

export default function AyatsClientFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAyats = useMemo(() => {
    return AYAT_ITEMS.filter((ayat) => {
      const matchesCat = selectedCategory === 'all' || ayat.category === selectedCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      return (
        ayat.titleEnglish.toLowerCase().includes(query) ||
        ayat.titleUrdu.toLowerCase().includes(query) ||
        ayat.titleArabic.includes(query) ||
        ayat.meaning.toLowerCase().includes(query) ||
        ayat.surahNameEnglish.toLowerCase().includes(query) ||
        ayat.source.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

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
            placeholder="Search by English topic, Urdu name (e.g. 'Kursi', 'Shifa', 'Rizq'), or Surah name..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
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
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                    : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Showing <strong className="text-emerald-400">{filteredAyats.length}</strong> authenticated sacred verses</span>
          {searchQuery && <span>Filtered by keyword "{searchQuery}"</span>}
        </div>
      </div>

      {/* Structured Ayat Grid */}
      {filteredAyats.length === 0 ? (
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No sacred verses matched your search</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try checking for different spelling terms (e.g., "Kursi", "Baqarah", "Healing") or reset the filters to browse all categories.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-sm font-bold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAyats.map((ayat) => (
            <Link
              key={ayat.id}
              href={ayat.slug}
              className="group bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header with badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {ayat.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                    Surah {ayat.surahNameEnglish} [{ayat.ayahNumber}]
                  </span>
                </div>

                {/* Multilingual Titles */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {ayat.titleEnglish}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400/90 mb-2 font-urdu">
                    {ayat.titleUrdu}
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
                <span className="text-slate-400 flex items-center gap-1.5 truncate max-w-[200px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{ayat.source}</span>
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                  View Ayat <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
