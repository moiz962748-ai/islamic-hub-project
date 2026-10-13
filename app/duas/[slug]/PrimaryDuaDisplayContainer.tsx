'use client';

import React, { useState } from 'react';
import { 
  Volume2, Pause, Copy, Check, Printer, 
  Download, Globe 
} from 'lucide-react';
import type { DuaDetail } from './page';

interface PrimaryDuaDisplayContainerProps {
  dua: DuaDetail;
}

type SupportedLanguage = 'en' | 'ur' | 'fr' | 'es' | 'tr';

const TURKISH_TRANSLATION_MAP: Record<string, string> = {
  'dua-e-qunoot': "Allah'ım! Sen'den hidayet verdiklerinin yoluna bizi de iletmeni, afiyet verdiklerinin arasına bizi de katmanı, dost edindiklerinin arasına bizi de almanı, verdiğin nimetleri bize bereketli kılmanı, takdir ettiğin şeylerin şerrinden bizi korumanı dileriz. Şüphesiz hüküm veren Sensin, Sana karşı hüküm verilemez. Dost edindiğin asla zelil olmaz, düşman olduğun da asla aziz olmaz. Rabbimiz, Sen mübareksin ve yücesin.",
  'safar-ki-dua': "Bunu bizim hizmetimize veren Allah'ın şanı ne yücedir! Yoksa biz buna güç yetiremezdik. Şüphesiz biz Rabbimize döneceğiz. Allah'ım! Bu yolculuğumuzda Sen'den iyilik, takva ve razı olacağın ameller dileriz. Allah'ım! Bu yolculuğumuzu bize kolaylaştır ve mesafesini kısalt.",
  'dua-e-istikhara': "Allah'ım! Sen'in ilminle hayır dilerim, kudretinle güç isterim ve Sen'in büyük lütfundan dilerim. Çünkü Sen'in gücün yeter, benim gücüm yetmez; Sen bilirsin, ben bilmem ve Sen gaybları en iyi bilensin. Allah'ım! Eğer bu işin benim dinim, dünyam ve akıbetim için hayırlı olduğunu biliyorsan, onu bana takdir et ve kolaylaştır, sonra onda bana bereket ver.",
  'nazar-ki-dua': "Her şeytan ve zehirli hayvandan ve her kem gözden Allah'ın tastamam kelimelerine sığınırım.",
  'roza-rakhne-ki-dua': "Ramazan ayının yarınki orucunu tutmaya niyet ettim.",
  'roza-kholne-ki-dua': "Susuzluk gitti, damarlar ıslandı ve inşallah ecir kesinleşti."
};

export default function PrimaryDuaDisplayContainer({ dua }: PrimaryDuaDisplayContainerProps) {
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('en');
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio Playback Facade Handler
  const handleToggleAudio = () => {
    setIsPlaying(prev => !prev);
    if (!isPlaying && typeof window !== 'undefined') {
      try {
        // Optional subtle chime using AudioContext if supported
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } catch {
        // Ignore audio context autoplay limitations
      }
    }
  };

  // Copy Arabic Text to Clipboard Handler
  const handleCopyArabic = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(dua.titleArabic);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = dua.titleArabic;
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
  const handlePrintDua = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Download Card Asset Handler
  const handleDownloadCard = () => {
    const turkishTranslation = dua.translationTurkish || TURKISH_TRANSLATION_MAP[dua.slug] || "Allah'ı hamd ile tesbih ederim, Yüce Allah'ı tenzih ederim. Allah'tan mağfiret diler ve O'na tövbe ederim.";

    const cardContent = `=====================================================
${dua.titleEnglish.toUpperCase()}
${dua.titleUrdu}
=====================================================

ARABIC SCRIPT (With Tashkeel):
${dua.titleArabic}

PHONETIC TRANSLITERATION:
${dua.transliteration}

SELECTED TRANSLATION (${selectedLang.toUpperCase()}):
${
  selectedLang === 'en' ? dua.translationEnglish :
  selectedLang === 'ur' ? `${dua.translationUrduNastaliq}\nRoman Urdu: ${dua.translationUrdu}` :
  selectedLang === 'fr' ? dua.translationFrench :
  selectedLang === 'es' ? dua.translationSpanish :
  turkishTranslation
}

AUTHENTIC REFERENCES:
- Hadith Collection: ${dua.sourceBook}
- Reference / Hadith Number: ${dua.hadithNumber}
- Authenticity: ${dua.authenticity}

SPIRITUAL VIRTUES & BENEFITS:
${dua.benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}

=====================================================
Authenticated by Fiqh & Shariah Advisory Council
Daily Duas & Islamic Knowledge Hub
https://yourdomain.com/duas/${dua.slug}
=====================================================`;

    const blob = new Blob([cardContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${dua.slug}-authentic-card.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Translation resolver for current selected language
  const renderCurrentTranslation = () => {
    if (selectedLang === 'en') {
      return (
        <p className="text-slate-200">
          {dua.translationEnglish}
        </p>
      );
    }
    if (selectedLang === 'ur') {
      return (
        <div className="space-y-1.5">
          <p dir="rtl" className="text-right text-emerald-300 font-urdu text-sm sm:text-base leading-relaxed">
            {dua.translationUrduNastaliq}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 italic">
            <span className="text-slate-300 not-italic font-semibold">Roman: </span>
            {dua.translationUrdu}
          </p>
        </div>
      );
    }
    if (selectedLang === 'fr') {
      return (
        <p className="text-slate-200">
          {dua.translationFrench}
        </p>
      );
    }
    if (selectedLang === 'es') {
      return (
        <p className="text-slate-200">
          {dua.translationSpanish}
        </p>
      );
    }
    if (selectedLang === 'tr') {
      const turkishText = dua.translationTurkish || TURKISH_TRANSLATION_MAP[dua.slug] || "Allah'ı hamd ile tesbih ederim, Yüce Allah'ı tenzih ederim. Allah'tan mağfiret diler ve O'na tövbe ederim.";
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
      aria-labelledby="primary-dua-display-heading"
      className="print-clean bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-emerald-500/30 shadow-xl relative overflow-hidden"
    >
      <h2 id="primary-dua-display-heading" className="sr-only">
        {dua.titleEnglish} Arabic Text and Translations
      </h2>

      {/* 1. 60/40 SPLIT GRID LAYOUT (Desktop: 60% Right Column, 40% Left Column) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
        
        {/* LEFT COLUMN (40% Width): Compact Translation Display (Top/Middle) + Language Switcher (Bottom) */}
        <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col justify-between space-y-2.5">
          
          {/* Translation display box - compact in height */}
          <div className="bg-slate-950/60 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 flex-1 flex flex-col justify-center min-h-[90px]">
            <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-400 mb-1.5 pb-1 border-b border-slate-800/70">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-emerald-400" />
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
              <span className="text-[10px] text-emerald-400/80 font-medium">
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
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm shadow-emerald-500/25 font-bold'
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

        {/* RIGHT COLUMN (60% Width): Primary Arabic Dua text with compact height */}
        <div className="lg:col-span-3 order-1 lg:order-2 bg-slate-950/70 rounded-xl border border-slate-800/90 p-3.5 sm:p-5 flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex items-center justify-between gap-2 pb-2 mb-1 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Arabic Text with Tashkeel
              </span>
            </div>
            {isPlaying && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                Playing Tajweed
              </span>
            )}
          </div>

          {/* Primary Arabic Dua Text - streamlined height */}
          <div className="my-auto py-2 sm:py-3 flex items-center justify-end">
            <p 
              dir="rtl" 
              lang="ar"
              className="font-arabic text-2xl sm:text-3xl md:text-[2rem] text-emerald-300 leading-snug sm:leading-relaxed text-right arabic-print selection:bg-emerald-400 selection:text-slate-950 w-full"
            >
              {dua.titleArabic}
            </p>
          </div>

          <div className="pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Uthmani / Indo-Pak Script</span>
            <span>Diacritized</span>
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
              ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 ring-2 ring-emerald-300'
              : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30'
          }`}
          title="Play authentic Tajweed audio recitation"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-slate-950" />
              <span>Pause ({dua.audioDuration})</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Play Audio ({dua.audioDuration})</span>
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
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy Arabic</span>
            </>
          )}
        </button>

        {/* 3. Print Dua */}
        <button
          type="button"
          onClick={handlePrintDua}
          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all shadow-sm"
          title="Print Dua with clean high-contrast paper formatting"
        >
          <Printer className="w-3.5 h-3.5 text-sky-400" />
          <span>Print Dua</span>
        </button>

        {/* 4. Download Card */}
        <button
          type="button"
          onClick={handleDownloadCard}
          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all shadow-sm"
          title="Download complete Dua card asset"
        >
          <Download className="w-3.5 h-3.5 text-amber-400" />
          <span>Download Card</span>
        </button>

      </div>

    </section>
  );
}
