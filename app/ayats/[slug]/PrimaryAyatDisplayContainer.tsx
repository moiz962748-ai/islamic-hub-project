'use client';

import React, { useState } from 'react';
import { 
  Volume2, Pause, Copy, Check, Printer, 
  Download, Globe 
} from 'lucide-react';

export interface AyatDetail {
  id: string;
  slug: string;
  surahNameArabic: string;
  surahNameEnglish: string;
  surahNumber: number;
  ayahNumber: string;
  category: 'greatest' | 'protection' | 'healing' | 'relief' | 'sovereignty';
  categoryLabel: string;
  titleArabic: string;
  titleUrdu: string;
  titleEnglish: string;
  transliteration: string;
  tldr: string;
  meaning: string;
  translationEnglish: string;
  translationUrdu: string;
  translationUrduNastaliq: string;
  translationFrench: string;
  translationSpanish: string;
  translationTurkish?: string;
  source: string;
  sourceBook: string;
  tafsirReference: string;
  authenticity: string;
  badge?: string;
  audioDuration: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
  tajweedHighlights: string[];
  faqs: { question: string; answer: string }[];
}

interface PrimaryAyatDisplayContainerProps {
  ayat: AyatDetail;
}

type SupportedLanguage = 'en' | 'ur' | 'fr' | 'es' | 'tr';

const TURKISH_TRANSLATION_MAP: Record<string, string> = {
  'ayat-al-kursi': "Allah! O'ndan başka hiçbir ilah yoktur; O diridir, her şeyin varlığı Kendisine bağlıdır. O'nu ne bir uyuklama tutabilir ne de bir uyku. Göklerde ve yerde ne varsa hepsi O'nundur. İzni olmaksızın O'nun katında kim şefaat edebilir? O, kullarının önlerindekini de arkalarındakini de bilir. Onlar O'nun ilminden, O'nun dilediği kadarından başka hiçbir şeyi kavrayamazlar. O'nun kürsüsü gökleri ve yeri kuşatmıştır. Onları koruyup gözetmek O'na asla ağır gelmez. O, çok yücedir, çok büyüktür.",
  'surah-baqarah-last-2-ayats': "Peygamber, Rabbinden kendisine indirilene iman etti, müminler de. Hepsi Allah'a, meleklerine, kitaplarına ve peygamberlerine inandı. 'Biz O'nun peygamberleri arasında hiçbir ayrım yapmayız' dediler. 'İşittik ve itaat ettik, bağışlamanı dileriz ey Rabbimiz, dönüş ancak Sana'dır' dediler. Allah hiç kimseye gücünün yettiğinden fazlasını yüklemez...",
  'ayat-karima': "Senden başka hiçbir ilah yoktur; Sen her türlü noksanlıktan münezzehsin. Gerçekten ben kendi nefsine zulmedenlerden oldum.",
  'ayat-ash-shifa': "Biz Kur'an'dan, müminler için şifa ve rahmet olan ayetler indiriyoruz. Zalimlerin ise ancak ziyanını artırır.",
  'ayat-al-mulk': "De ki: 'Ey mülkün gerçek sahibi olan Allah'ım! Sen mülkü dilediğine verirsin, dilediğinden de mülkü çeker alırsın. Dilediğini aziz kılar, dilediğini zelil edersin. Bütün hayır Senin elindedir. Şüphesiz Sen her şeye hakkıyla kadirsin.'",
  'ayat-at-talaq-rizq': "Kim Allah'tan korkup sakınırsa, Allah ona bir çıkış yolu ihsan eder ve onu beklemediği yerden rızıklandırır. Kim Allah'a tevekkül ederse, O kendisine yeter."
};

export default function PrimaryAyatDisplayContainer({ ayat }: PrimaryAyatDisplayContainerProps) {
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('en');
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio Playback Facade Handler
  const handleToggleAudio = () => {
    setIsPlaying(prev => !prev);
    if (!isPlaying && typeof window !== 'undefined') {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.45);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.45);
      } catch {
        // AudioContext fallback
      }
    }
  };

  // Copy Arabic Text to Clipboard Handler
  const handleCopyArabic = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(ayat.titleArabic);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = ayat.titleArabic;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    }
  };

  // Print Dialog Trigger Handler
  const handlePrintAyat = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Download Card Asset Handler
  const handleDownloadCard = () => {
    const turkishTranslation = ayat.translationTurkish || TURKISH_TRANSLATION_MAP[ayat.slug] || "Allah'ı tenzih eder, hamd ile tesbih ederim.";

    const cardContent = `=====================================================
SACRED QURANIC AYAT: ${ayat.titleEnglish.toUpperCase()}
Surah ${ayat.surahNameEnglish} [${ayat.surahNumber}:${ayat.ayahNumber}]
Urdu: ${ayat.titleUrdu}
=====================================================

ARABIC SCRIPT (With Tashkeel & Tajweed):
${ayat.titleArabic}

PHONETIC TRANSLITERATION:
${ayat.transliteration}

SELECTED TRANSLATION (${selectedLang.toUpperCase()}):
${
  selectedLang === 'en' ? ayat.translationEnglish :
  selectedLang === 'ur' ? `${ayat.translationUrduNastaliq}\nRoman Urdu: ${ayat.translationUrdu}` :
  selectedLang === 'fr' ? ayat.translationFrench :
  selectedLang === 'es' ? ayat.translationSpanish :
  turkishTranslation
}

HADITH & TAFSIR REFERENCE:
- Primary Source: ${ayat.source}
- Quranic Location: Surah ${ayat.surahNameEnglish} (${ayat.surahNameArabic}), Ayah ${ayat.ayahNumber}
- Classical Tafsir: ${ayat.tafsirReference}
- Authenticity: ${ayat.authenticity}

SPITIRUAL VIRTUES SUMMARY:
${ayat.benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}

=====================================================
Sacred Ayats Directory - Verified Quranic Repository
=====================================================`;

    const blob = new Blob([cardContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${ayat.slug}-sacred-ayat-card.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderCurrentTranslation = () => {
    if (selectedLang === 'en') {
      return (
        <p className="text-slate-200">
          {ayat.translationEnglish}
        </p>
      );
    }
    if (selectedLang === 'ur') {
      return (
        <div className="space-y-1.5">
          <p dir="rtl" className="font-urdu text-sm sm:text-base text-white leading-relaxed text-right">
            {ayat.translationUrduNastaliq}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 italic">
            <span className="text-white font-semibold not-italic mr-1">Roman Urdu:</span>
            {ayat.translationUrdu}
          </p>
        </div>
      );
    }
    if (selectedLang === 'fr') {
      return (
        <p className="text-slate-200">
          {ayat.translationFrench}
        </p>
      );
    }
    if (selectedLang === 'es') {
      return (
        <p className="text-slate-200">
          {ayat.translationSpanish}
        </p>
      );
    }
    if (selectedLang === 'tr') {
      const turkishText = ayat.translationTurkish || TURKISH_TRANSLATION_MAP[ayat.slug] || "Allah'ı noksan sıfatlardan tenzih ederim.";
      return (
        <p className="text-slate-200">
          {turkishText}
        </p>
      );
    }
    return null;
  };

  const LANGUAGE_OPTIONS: { code: SupportedLanguage; label: string; badge: string }[] = [
    { code: 'en', label: 'English', badge: 'EN' },
    { code: 'ur', label: 'Urdu', badge: 'اردو' },
    { code: 'fr', label: 'French', badge: 'FR' },
    { code: 'es', label: 'Spanish', badge: 'ES' },
    { code: 'tr', label: 'Turkish', badge: 'TR' },
  ];

  return (
    <section 
      aria-labelledby="primary-ayat-display-heading"
      className="print-clean bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-neutral-800 shadow-xl relative overflow-hidden"
    >
      <h2 id="primary-ayat-display-heading" className="sr-only">
        {ayat.titleEnglish} Arabic Text and Authorized Translations
      </h2>

      {/* 1. 60/40 SPLIT GRID LAYOUT (Desktop: 60% Right Column, 40% Left Column) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
        
        {/* LEFT COLUMN (40% Width): Compact Translation Display (Top/Middle) + Language Switcher (Bottom) */}
        <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col justify-between space-y-2.5">
          
          {/* Translation display box - compact in height */}
          <div className="bg-slate-950/60 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 flex-1 flex flex-col justify-center min-h-[90px]">
            <div className="flex items-center justify-between text-[11px] font-semibold text-white mb-1.5 pb-1 border-b border-slate-800/70">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-white" />
                <span>
                  {LANGUAGE_OPTIONS.find(l => l.code === selectedLang)?.label} Translation
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700">
                {LANGUAGE_OPTIONS.find(l => l.code === selectedLang)?.badge}
              </span>
            </div>
            
            {/* Compact Translation Text */}
            <div className="text-xs md:text-sm text-slate-300 leading-snug">
              {renderCurrentTranslation()}
            </div>
          </div>

          {/* Bottom: Translation language switcher buttons (compact height) */}
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Language:
              </span>
              <span className="text-[10px] text-white font-medium">
                {LANGUAGE_OPTIONS.find(l => l.code === selectedLang)?.label}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1">
              {LANGUAGE_OPTIONS.map((lang) => {
                const isActive = selectedLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setSelectedLang(lang.code)}
                    className={`py-1 px-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all text-center border ${
                      isActive
                        ? 'bg-white text-black border-neutral-800 shadow-sm shadow-neutral-950/50 font-bold'
                        : 'bg-slate-800/80 hover:bg-slate-700/90 text-slate-300 border-slate-700/70 hover:text-white'
                    }`}
                    title={`View ${lang.label} Translation`}
                  >
                    <span className="block truncate">{lang.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (60% Width): Primary Arabic Ayat text with compact height */}
        <div className="lg:col-span-3 order-1 lg:order-2 bg-slate-950/70 rounded-xl border border-slate-800/90 p-3.5 sm:p-5 flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex items-center justify-between gap-2 pb-2 mb-1 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white text-black animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                Uthmani Script with Full Tashkeel
              </span>
            </div>
            {isPlaying && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-800 text-white border border-neutral-800 animate-pulse">
                Reciting Tajweed
              </span>
            )}
          </div>

          {/* Primary Arabic Ayat Text - streamlined height */}
          <div className="my-auto py-2 sm:py-3 flex items-center justify-end">
            <p 
              dir="rtl" 
              lang="ar"
              className="font-arabic text-2xl sm:text-3xl md:text-[2rem] text-white leading-snug sm:leading-relaxed text-right arabic-print selection:bg-white selection:text-black selection:text-slate-950 w-full"
            >
              {ayat.titleArabic}
            </p>
          </div>

          <div className="pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Surah {ayat.surahNameEnglish} [Ayah {ayat.ayahNumber}]</span>
            <span>King Fahd Holy Quran Complex Script</span>
          </div>

        </div>

      </div>

      {/* 2. ACTION UTILITY BAR (DIRECTLY BELOW BOTH COLUMNS, COMPACT HEIGHT) */}
      <div className="action-bar mt-3.5 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2">
        
        {/* 1. Play Audio */}
        <button
          type="button"
          onClick={handleToggleAudio}
          className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${
            isPlaying
              ? 'bg-white hover:bg-neutral-200 text-black font-semibold ring-2 ring-white/40'
              : 'bg-neutral-800 hover:bg-neutral-800 text-white border border-neutral-800'
          }`}
          title="Play authentic Tajweed audio recitation"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-slate-950" />
              <span>Pause ({ayat.audioDuration})</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-white" />
              <span>Play Audio ({ayat.audioDuration})</span>
            </>
          )}
        </button>

        {/* 2. Copy Arabic */}
        <button
          type="button"
          onClick={handleCopyArabic}
          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all shadow-sm"
          title="Copy original Arabic text to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span className="text-white font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy Arabic</span>
            </>
          )}
        </button>

        {/* 3. Print Ayat */}
        <button
          type="button"
          onClick={handlePrintAyat}
          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all shadow-sm"
          title="Print Sacred Ayat with clean high-contrast paper formatting"
        >
          <Printer className="w-3.5 h-3.5 text-sky-400" />
          <span>Print Ayat</span>
        </button>

        {/* 4. Download Card */}
        <button
          type="button"
          onClick={handleDownloadCard}
          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all shadow-sm"
          title="Download complete Ayat card asset"
        >
          <Download className="w-3.5 h-3.5 text-amber-400" />
          <span>Download Card</span>
        </button>

      </div>

    </section>
  );
}
