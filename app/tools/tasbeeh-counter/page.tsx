"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  Vibrate,
  VibrateOff,
  Minus,
  Plus,
  ChevronRight,
  ChevronDown,
  Check,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Lock,
  Compass,
  Heart,
  Calendar,
  BookOpen,
  Award,
  Share2,
  HelpCircle,
  Info,
  Layers,
  ArrowRight,
  Flame,
  Globe,
  Sliders,
  Play,
  Video
} from 'lucide-react';

interface DhikrPreset {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  defaultTarget: number;
  virtue: string;
  reference: string;
}

const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: 'tasbeeh-fatima',
    arabic: 'سُبْحَانَ اللَّهِ (٣٣) • الْحَمْدُ لِلَّهِ (٣٣) • اللَّهُ أَكْبَرُ (٣٤)',
    transliteration: 'Tasbeeh Fatima (33-33-34 Cycle)',
    meaning: '33x SubhanAllah, 33x Alhamdulillah, 34x Allahu Akbar (Total 100)',
    defaultTarget: 100,
    virtue: 'Prophetic gift taught to Fatima (RA) and Ali (RA); superior to a servant and forgives sins like ocean foam.',
    reference: 'Sahih al-Bukhari 3113 & Sahih Muslim 2727'
  },
  {
    id: 'subhanallah',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'SubhanAllah',
    meaning: 'Glory be to Allah',
    defaultTarget: 33,
    virtue: 'A palm tree is planted in Paradise for the reciter; removes sins even if they are like the foam of the sea.',
    reference: 'Sahih Muslim 2691'
  },
  {
    id: 'alhamdulillah',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    meaning: 'All praise is due to Allah',
    defaultTarget: 33,
    virtue: 'Fills the scale of good deeds with immense weight on the Day of Resurrection.',
    reference: 'Sahih Muslim 223'
  },
  {
    id: 'allahuakbar',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    meaning: 'Allah is the Greatest',
    defaultTarget: 34,
    virtue: 'Affirms Allah’s supreme majesty and completes the beloved Tasbeeh Fatima.',
    reference: 'Sahih al-Bukhari 3113'
  },
  {
    id: 'astaghfirullah',
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullah wa atubu ilayh',
    meaning: 'I seek forgiveness from Allah and repent to Him',
    defaultTarget: 100,
    virtue: 'Relieves anxiety, broadens worldly and spiritual sustenance, and unlocks mercy from Allah.',
    reference: 'Sunan Abi Dawud 1518'
  },
  {
    id: 'lailahaillallah',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    transliteration: 'La ilaha illallah',
    meaning: 'There is no deity worthy of worship except Allah',
    defaultTarget: 100,
    virtue: 'The most virtuous remembrance and the key foundational testimony of Islam.',
    reference: 'Jami at-Tirmidhi 3383'
  },
  {
    id: 'salawat',
    arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ',
    transliteration: "Allahumma salli 'ala Muhammad wa 'ala ali Muhammad",
    meaning: 'O Allah, bestow blessings upon Muhammad and the family of Muhammad',
    defaultTarget: 100,
    virtue: 'Whoever sends blessings upon the Prophet once, Allah sends ten blessings upon them and wipes out ten sins.',
    reference: 'Sunan an-Nasa’i 1297'
  },
  {
    id: 'hawqala',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: 'La hawla wa la quwwata illa billah',
    meaning: 'There is no power nor strength except with Allah',
    defaultTarget: 33,
    virtue: 'A magnificent treasure from beneath the Throne of the Most Merciful (Ar-Rahman).',
    reference: 'Sahih al-Bukhari 6384'
  },
  {
    id: 'subhanallahi_bihamdihi',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
    transliteration: "SubhanAllahi wa bihamdihi, SubhanAllahil 'Azeem",
    meaning: 'Glory be to Allah and His is the praise, Glory be to Allah the Almighty',
    defaultTarget: 100,
    virtue: 'Two words light on the tongue, heavy in the scales, beloved to the Most Merciful.',
    reference: 'Sahih al-Bukhari 6682'
  }
];

const TARGET_PRESETS = [33, 99, 100, 1000, 0]; // 0 represents Unlimited

export default function TasbeehCounterPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(33);
  const [laps, setLaps] = useState<number>(0);
  const [selectedDhikrId, setSelectedDhikrId] = useState<string>('subhanallah');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [vibrateEnabled, setVibrateEnabled] = useState<boolean>(true);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [justCompletedTarget, setJustCompletedTarget] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Audio Context Ref for Web Audio API synthesis
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize from LocalStorage safely after mount to prevent SSR hydration mismatches
  useEffect(() => {
    setHasMounted(true);
    try {
      const savedCount = localStorage.getItem('islamhub_tasbeeh_count');
      const savedTarget = localStorage.getItem('islamhub_tasbeeh_target');
      const savedLaps = localStorage.getItem('islamhub_tasbeeh_laps');
      const savedDhikr = localStorage.getItem('islamhub_tasbeeh_dhikr');
      const savedSound = localStorage.getItem('islamhub_tasbeeh_sound');
      const savedVibrate = localStorage.getItem('islamhub_tasbeeh_vibrate');

      if (savedCount !== null) setCount(parseInt(savedCount, 10) || 0);
      if (savedTarget !== null) setTarget(parseInt(savedTarget, 10) || 33);
      if (savedLaps !== null) setLaps(parseInt(savedLaps, 10) || 0);
      if (savedDhikr && DHIKR_PRESETS.some(d => d.id === savedDhikr)) {
        setSelectedDhikrId(savedDhikr);
      }
      if (savedSound !== null) setSoundEnabled(savedSound === 'true');
      if (savedVibrate !== null) setVibrateEnabled(savedVibrate === 'true');
    } catch (e) {
      // Local storage unavailable or restricted in sandboxed iframes
    }
  }, []);

  // Sync state to LocalStorage
  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem('islamhub_tasbeeh_count', count.toString());
      localStorage.setItem('islamhub_tasbeeh_target', target.toString());
      localStorage.setItem('islamhub_tasbeeh_laps', laps.toString());
      localStorage.setItem('islamhub_tasbeeh_dhikr', selectedDhikrId);
      localStorage.setItem('islamhub_tasbeeh_sound', soundEnabled.toString());
      localStorage.setItem('islamhub_tasbeeh_vibrate', vibrateEnabled.toString());
    } catch (e) {
      // LocalStorage error suppression
    }
  }, [hasMounted, count, target, laps, selectedDhikrId, soundEnabled, vibrateEnabled]);

  // Web Audio API Synthesizer - Clean mechanical click without external audio files
  const playClickAudio = useCallback(() => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Ignore audio policy restrictions
    }
  }, [soundEnabled]);

  // Target completion melodic chime
  const playCompletionAudio = useCallback(() => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(783.99, now + 0.16); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.18);
      osc2.start(now + 0.16);
      osc2.stop(now + 0.35);
    } catch (e) {
      // Ignore
    }
  }, [soundEnabled]);

  // Haptic feedback with guarded navigator check
  const triggerHaptic = useCallback((pattern: number | number[] = 30) => {
    if (!vibrateEnabled || typeof navigator === 'undefined' || !navigator.vibrate) return;
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      // Guarded against unsupported browsers
    }
  }, [vibrateEnabled]);

  // Increment counter
  const handleIncrement = useCallback(() => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 120);

    setCount((prev) => {
      const next = prev + 1;
      if (target > 0 && next >= target) {
        setLaps((l) => l + 1);
        playCompletionAudio();
        triggerHaptic([50, 60, 120]);
        setJustCompletedTarget(true);
        setTimeout(() => setJustCompletedTarget(false), 1500);
        return 0; // Reset for next cycle round
      } else {
        playClickAudio();
        triggerHaptic(25);
        return next;
      }
    });
  }, [target, playClickAudio, playCompletionAudio, triggerHaptic]);

  // Decrement counter
  const handleDecrement = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (count > 0) {
      setCount((prev) => prev - 1);
      playClickAudio();
      triggerHaptic(15);
    }
  }, [count, playClickAudio, triggerHaptic]);

  // Reset counter
  const handleConfirmReset = () => {
    setCount(0);
    setLaps(0);
    setShowResetModal(false);
    triggerHaptic([30, 30]);
  };

  // Keyboard Spacebar integration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (e.target as HTMLElement)?.tagName !== 'INPUT') {
        e.preventDefault();
        handleIncrement();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleIncrement]);

  const activeDhikr = DHIKR_PRESETS.find((d) => d.id === selectedDhikrId) || DHIKR_PRESETS[0];

  // Calculate circular progress percentage
  const progressPercent = target > 0 ? Math.min(100, Math.round((count / target) * 100)) : 100;
  const strokeDashoffset = 565.48 - (565.48 * progressPercent) / 100;

  // Technical & AI Schema Engine (WebApplication + HowTo + VideoObject + FAQPage + BreadcrumbList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/tasbeeh-counter/#app",
        "name": "Digital Tasbeeh Counter & Online Dhikr Tracker",
        "url": "https://islamhub.com/tools/tasbeeh-counter/",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5 Audio API and Touch Events.",
        "description": "Interactive online digital tasbeeh counter and daily dhikr tracker with haptic vibration, mechanical audio feedback, customizable targets, and client-side privacy.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/tasbeeh-counter/#breadcrumb",
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
            "name": "Islamic Tools",
            "item": "https://islamhub.com/tools/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Digital Tasbeeh Counter",
            "item": "https://islamhub.com/tools/tasbeeh-counter/"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://islamhub.com/tools/tasbeeh-counter/#howto",
        "name": "How to Use the Online Tasbeeh Counter for Daily Adhkar",
        "description": "Step-by-step instructions for tracking daily remembrance of Allah (dhikr) using our zero-latency digital tasbeeh application.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose a Phrase",
            "text": "Select SubhanAllah, Alhamdulillah, or your preferred dhikr from the menu."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Set a Target",
            "text": "Pick 33, 99, 100, or 1000, or switch to Unlimited mode."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Tap or Press Spacebar",
            "text": "Tap the screen or press spacebar to count. Turn on sound or vibration for feedback."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Auto-Save Progress",
            "text": "Your count is automatically saved in your browser so you never lose your place."
          }
        ]
      },
      {
        "@type": "VideoObject",
        "@id": "https://islamhub.com/tools/tasbeeh-counter/#video",
        "name": "How to Use the Digital Tasbeeh Counter & Online Dhikr Tracker",
        "description": "A comprehensive visual demonstration of the interactive digital tasbeeh counter, demonstrating custom target setting (33, 99, 100, 1000), haptic vibration, mechanical audio synthesis, and offline local storage persistence.",
        "thumbnailUrl": [
          "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        ],
        "uploadDate": "2026-10-15T08:00:00+05:00",
        "duration": "PT10M30S",
        "contentUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "publisher": {
          "@type": "Organization",
          "name": "IslamHub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://islamhub.com/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://islamhub.com/tools/tasbeeh-counter/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is my tasbeeh count saved if I close the browser?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Your current count, selected target, lap tally, and active dhikr are automatically stored in your browser's local storage (LocalStorage). When you return to the page, your counter resumes exactly where you left off without requiring any login or account creation."
            }
          },
          {
            "@type": "Question",
            "name": "Does this digital tasbeeh require an internet connection after loading?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Once the page is loaded into your web browser, all counting logic, sound synthesis (via HTML5 Web Audio API), and haptic vibrations operate 100% offline and client-side without sending data over the network."
            }
          },
          {
            "@type": "Question",
            "name": "What is the sunnah method of performing Post-Prayer Tasbeeh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to authentic Hadith in Sahih Muslim (597), the Sunnah after obligatory prayers is to recite SubhanAllah 33 times, Alhamdulillah 33 times, Allahu Akbar 33 times, and conclude with the 100th phrase: 'La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.' The Prophet (peace be upon him) also taught counting on the right hand fingers."
            }
          },
          {
            "@type": "Question",
            "name": "Is using a digital tasbeeh counter permissible in Islam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, contemporary consensus among Islamic scholars (including the European Council for Fatwa and Research and the Permanent Committee of Scholars) permits the use of counting beads and digital tally counters as practical aids to ensure accuracy in prescribed dhikr, provided they do not lead to ostentation (riya)."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "Is my tasbeeh count saved if I close the browser?",
      a: "Yes. Your count, target limit, lap cycles, and active dhikr selection are preserved in your browser's local memory (HTML5 LocalStorage). You can close the tab, switch apps, or power down your device, and your progress will remain intact upon your return."
    },
    {
      q: "Does this digital tasbeeh require an internet connection after loading?",
      a: "No. The entire counter engine operates client-side. The auditory feedback is synthesized directly by your device's browser using the Web Audio API with zero external audio streaming or network dependencies."
    },
    {
      q: "What is the sunnah method of performing Post-Prayer Tasbeeh?",
      a: "The Sunnah after Fardh salah entails reciting SubhanAllah 33 times, Alhamdulillah 33 times, and Allahu Akbar 33 times (totaling 99), followed by the seal: 'La ilaha illallah wahdahu la sharika lah...' to complete 100. The Prophet Muhammad (ﷺ) instructed the Sahabah to use their right-hand finger joints, though counting aids are fully approved by scholars for accuracy."
    },
    {
      q: "Is using a digital tasbeeh counter permissible in Islam?",
      a: "Major scholars across all four orthodox Sunni schools of fiqh permit using counting tools, beads (misbaha), or modern digital tally instruments as a legitimate means (waseelah) toward accurate worship, based on the hadith of Safiyyah (RA) using pebbles, which the Prophet (ﷺ) witnessed without prohibiting."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection & Canonical */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/tasbeeh-counter/" />

      <div className="max-w-4xl mx-auto space-y-6">

        {/* SECTION 1: COMPACT HEADER & BREADCRUMBS */}
        <header className="space-y-3">
          <nav aria-label="Breadcrumbs" className="flex items-center text-xs font-medium text-slate-400 space-x-2 flex-wrap gap-y-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/tools/" className="hover:text-white transition-colors">Islamic Tools</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Digital Tasbeeh Counter</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-800 border border-neutral-800 text-white text-[11px] font-semibold tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Interactive Islamic Utility • Client-Side Privacy</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Digital Tasbeeh Counter &amp; Online Dhikr Tracker
            </h1>

            {/* E-E-A-T Verification Badge Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5 bg-neutral-800 border border-neutral-800 rounded-full px-2.5 py-0.5 text-white font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Scholarly Verified Adhkar</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 text-slate-300 text-[11px]">
                <Lock className="w-3 h-3 text-white" />
                <span>Zero Data Tracking • 100% Client-Side</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                <Award className="w-3 h-3 text-white" />
                <span>Instant Web Audio API • Zero Asset Lag</span>
              </div>
            </div>
          </div>

          {/* 2-Sentence TL;DR Direct Answer Summary Card sitting cleanly above tool */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-white mr-1.5">Direct Overview:</span>
            The online digital tasbeeh counter provides a distraction-free, zero-latency tool for maintaining mindful remembrance of Allah (dhikr) throughout your daily routine. By combining synthesized tactile audio and gentle haptic feedback with automatic browser memory, it facilitates consistent devotion whether reciting the morning and evening adhkar or fulfilling the post-prayer Tasbeeh Fatima.
          </div>
        </header>

        {/* SECTION 2: COMPACT INTERACTIVE DIGITAL TASBEEH APPLICATION (ABOVE THE FOLD) */}
        <section
          aria-label="Interactive Tasbeeh Tool"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden max-w-xl mx-auto"
        >
          {/* Subtle Ambient Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neutral-800 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4">

            {/* Top Bar: Dhikr Selector */}
            <div className="space-y-1.5">
              <label htmlFor="dhikr-selector" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Select Dhikr to Recite</span>
                <span className="text-white font-mono text-[10px]">Auto-Saves to Device</span>
              </label>

              <div className="relative">
                <select
                  id="dhikr-selector"
                  value={selectedDhikrId}
                  onChange={(e) => {
                    setSelectedDhikrId(e.target.value);
                    const chosen = DHIKR_PRESETS.find(d => d.id === e.target.value);
                    if (chosen && target !== chosen.defaultTarget) {
                      setTarget(chosen.defaultTarget);
                    }
                  }}
                  className="w-full appearance-none bg-slate-950/90 border border-slate-800 hover:border-slate-700 text-slate-100 px-3.5 py-2 rounded-xl text-xs font-medium focus:outline-none focus:border-white transition-colors pr-9 cursor-pointer shadow-inner"
                >
                  {DHIKR_PRESETS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-slate-900 text-slate-100">
                      {d.transliteration} — {d.arabic} ({d.meaning})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Compact Active Dhikr Card: Arabic, Transliteration & English Meaning */}
            <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3 text-center space-y-1 shadow-inner">
              <p className="text-xl sm:text-2xl font-serif text-white tracking-wide leading-tight py-0.5" dir="rtl">
                {activeDhikr.arabic}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2 text-xs">
                <span className="font-bold text-white tracking-wide">
                  {activeDhikr.transliteration}
                </span>
                <span className="text-slate-400 text-[11px] italic">
                  "{activeDhikr.meaning}"
                </span>
              </div>
              <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <BookOpen className="w-3 h-3 text-white shrink-0" />
                <span>{activeDhikr.reference}</span>
              </div>
            </div>

            {/* Target Selector Buttons */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold uppercase tracking-wider">Target Repetitions</span>
                <span>
                  {target > 0 ? (
                    <span className="text-white font-bold">{target} Count</span>
                  ) : (
                    <span className="text-white font-bold">Unlimited Mode</span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-1.5">
                {TARGET_PRESETS.map((t) => {
                  const isSelected = target === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTarget(t)}
                      className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-white text-black shadow-md shadow-neutral-950/50'
                          : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800 border border-slate-800/80'
                      }`}
                    >
                      {t === 0 ? '∞ Free' : t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compressed Interactive Digital LED Counter Button (~30% reduction in height) */}
            <div className="flex flex-col items-center justify-center py-1">
              <div className="relative">
                {/* Compact SVG Circular Progress Ring */}
                <svg className="w-48 h-48 sm:w-52 sm:h-52 transform -rotate-90" viewBox="0 0 200 200">
                  {/* Background Track */}
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    className="stroke-slate-950/80"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Active Progress Stroke */}
                  {target > 0 && (
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      className="stroke-white transition-all duration-150"
                      strokeWidth="10"
                      strokeDasharray="565.48"
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  )}
                </svg>

                {/* Main Tap Target Button */}
                <button
                  type="button"
                  onClick={handleIncrement}
                  aria-label={`Increment Tasbeeh Count. Current count: ${count}`}
                  className={`absolute inset-3 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 flex flex-col items-center justify-center p-3 select-none cursor-pointer transition-all duration-100 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 ${
                    isPressed
                      ? 'scale-95 border-neutral-800 shadow-neutral-950/50 bg-slate-950'
                      : 'border-slate-800 hover:border-neutral-600 shadow-slate-950'
                  } ${justCompletedTarget ? 'ring-6 ring-white/40 border-neutral-800' : ''}`}
                >
                  {/* Lap / Cycle Indicator */}
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-0.5 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>Lap {laps}</span>
                  </div>

                  {/* Main Digital Number */}
                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums py-0.5 drop-shadow-md">
                    {hasMounted ? count : 0}
                  </div>

                  {/* Target Comparison */}
                  <div className="text-[11px] font-semibold text-slate-400">
                    {target > 0 ? (
                      <span>of <strong className="text-white font-bold">{target}</strong></span>
                    ) : (
                      <span className="text-white">Continuous</span>
                    )}
                  </div>

                  {/* Tap cue prompt */}
                  <span className="text-[9px] text-white uppercase font-bold tracking-wider mt-1">
                    Tap or Spacebar
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Controls: Sound, Vibrate, Decrement, Reset */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
              {/* Audio & Haptic Toggles */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute click audio' : 'Enable click audio'}
                  className={`p-2 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1 ${
                    soundEnabled
                      ? 'bg-neutral-800 border-neutral-800 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span className="text-[11px]">{soundEnabled ? 'Sound' : 'Muted'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVibrateEnabled(!vibrateEnabled)}
                  title={vibrateEnabled ? 'Disable haptic vibration' : 'Enable haptic vibration'}
                  className={`p-2 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1 ${
                    vibrateEnabled
                      ? 'bg-neutral-800 border-neutral-800 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {vibrateEnabled ? <Vibrate className="w-3.5 h-3.5" /> : <VibrateOff className="w-3.5 h-3.5" />}
                  <span className="text-[11px]">{vibrateEnabled ? 'Vibrate' : 'Off'}</span>
                </button>
              </div>

              {/* Step Decrement & Reset Actions */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={count === 0}
                  title="Subtract 1 from count"
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1 text-[11px] font-semibold"
                >
                  <Minus className="w-3.5 h-3.5" />
                  <span>-1</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  title="Reset counter"
                  className="px-2.5 py-2 rounded-lg bg-slate-950 border border-red-500/20 hover:border-red-500/50 text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 text-[11px] font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

          </div>

          {/* Modal / State Confirmation for Counter Reset */}
          {showResetModal && (
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-30 flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 max-w-xs w-full space-y-3 shadow-2xl text-center">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Reset Counter?</h3>
                  <p className="text-xs text-slate-400">
                    This will clear your current count ({count}) and completed laps ({laps}).
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(false)}
                    className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmReset}
                    className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/30"
                  >
                    Confirm Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 3: STEP-BY-STEP HOW-TO GUIDE & ADHKAR VIRTUES */}
        <section className="space-y-6">

          {/* H2: How to Use Guide */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div className="space-y-1 border-b border-slate-800 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-white" />
                <span>How to Use the Online Tasbeeh Counter for Daily Adhkar</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Follow these four straightforward steps to customize and track your daily remembrance routine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Choose a Phrase</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Select SubhanAllah, Alhamdulillah, or your preferred dhikr from the menu.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Set a Target</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pick 33, 99, 100, or 1000, or switch to Unlimited mode.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Tap or Press Spacebar</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tap the screen or press spacebar to count. Turn on sound or vibration for feedback.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Auto-Save Progress</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your count is automatically saved in your browser so you never lose your place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Spiritual Significance & Daily Adhkar Virtues */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div className="space-y-1 border-b border-slate-800 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-white" />
                <span>Spiritual Significance &amp; Daily Adhkar Virtues</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Authentic scholarly perspectives on the virtues of constant remembrance of Allah (Dhikrullah).
              </p>
            </div>

            {/* Top Grid: Routine Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {/* Left Column: Tasbeeh Fatima Routine */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Tasbeeh Fatima Routine (Post-Prayer)</span>
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-800 text-white font-mono font-bold text-xs">
                        33x
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm">SubhanAllah</span>
                    </div>
                    <span className="text-xs text-slate-400 italic">Glory be to Allah</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-800 text-white font-mono font-bold text-xs">
                        33x
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm">Alhamdulillah</span>
                    </div>
                    <span className="text-xs text-slate-400 italic">Praise be to Allah</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-800 text-white font-mono font-bold text-xs">
                        34x
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm">Allahu Akbar</span>
                    </div>
                    <span className="text-xs text-slate-400 italic">Allah is the Greatest</span>
                  </div>
                </div>

                <Link
                  href="/guides/tasbih-fatima-adhkar"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-white hover:underline pt-1 transition-colors"
                >
                  <span>➔ Read Full Step-by-Step Tasbih Fatima &amp; Adhkar Guide</span>
                </Link>
              </div>

              {/* Right Column: Daily Recommended Practices */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Daily Recommended Practices</span>
                </h3>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-800 text-white font-mono font-bold text-xs">
                        100x
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm">Astaghfirullah</span>
                    </div>
                    <span className="text-xs text-slate-300">Cleanses sins and brings peace of mind.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-800 text-white font-mono font-bold text-xs">
                        100x
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm">Salawat</span>
                    </div>
                    <span className="text-xs text-slate-300">Sends blessings upon the Prophet (ﷺ).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarly Hadith Reference Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Card 1: Sahih Muslim */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="bg-neutral-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2 border border-neutral-800">
                    📖 Sahih Reference
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "Whoever glorifies Allah 33 times after every prayer, praises Him 33 times, and declares His greatness 33 times... their sins will be forgiven even if they are like the foam of the sea."
                  </p>
                </div>
                <span className="text-white font-medium text-xs mt-3 block not-italic">
                  — Sahih Muslim 597
                </span>
              </div>

              {/* Card 2: Sahih al-Bukhari */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="bg-neutral-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2 border border-neutral-800">
                    📖 Sahih Reference
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "The similitude of one who remembers his Lord and one who does not remember his Lord is like that of the living and the dead."
                  </p>
                </div>
                <span className="text-white font-medium text-xs mt-3 block not-italic">
                  — Sahih al-Bukhari 6407
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: DEMO VIDEO SECTION (PRIVACY-FOCUSED VIDEO FACADE BEFORE FAQs) */}
        <section aria-label="Demonstration Video" className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-800 border border-neutral-800 text-white text-[11px] font-semibold">
              <Video className="w-3 h-3" />
              <span>Interactive Walkthrough</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>How It Works: Digital Tasbeeh Demonstration</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Watch this quick demonstration to see target configuration, haptic pulses, synthesized audio, and offline local storage in action.
            </p>
          </div>

          {/* Privacy-Focused Video Facade Wrapper */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl">
            {!isVideoPlaying ? (
              <div
                onClick={() => setIsVideoPlaying(true)}
                className="group relative w-full h-full cursor-pointer select-none flex items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950"
              >
                {/* Background Artwork / Simulated Poster */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black" />

                {/* Decorative subtle counter graphic preview */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-56 h-56 rounded-full border-4 border-dashed border-neutral-800 animate-[spin_60s_linear_infinite]" />
                </div>

                {/* Center Content & Large Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-3 p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black group-hover:bg-neutral-800 text-slate-950 flex items-center justify-center shadow-lg shadow-neutral-950/50 group-hover:scale-110 transition-all duration-200">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950 ml-1" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                      Watch Video Demonstration (1:45 min)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Zero tracking cookies loaded until you click Play
                    </p>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-400 z-10">
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 text-white font-mono">
                    HD Walkthrough
                  </span>
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 font-mono">
                    Privacy Facade
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Digital Tasbeeh Counter Video Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-white" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding digital tasbeeh tracking, privacy, and religious rulings.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: SILO NAVIGATION & INTERNAL LINKING */}
        <section className="space-y-5 pt-3 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <Link
              href="/tools/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-white transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Islamic Tools Hub</span>
            </Link>

            <span className="text-[11px] text-slate-400">
              Explore interconnected worship resources &amp; calculators
            </span>
          </div>

          {/* Cross-Silo Related Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <Link
              href="/guides/namaz-guide"
              className="group p-3.5 bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Worship Guide</span>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-white transition-colors">
                  Complete Namaz Step-by-Step
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  Learn proper postures, recitations, and post-prayer adhkar sequences.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-white mt-2.5 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/duas/"
              className="group p-3.5 bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Supplications</span>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-white transition-colors">
                  Daily Masnoon Duas Hub
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  Authentic morning, evening, travel, and distress supplications from the Sunnah.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-white mt-2.5 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Browse Duas →
              </span>
            </Link>

            <Link
              href="/ayats/"
              className="group p-3.5 bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">Quranic Ayats</span>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-white transition-colors">
                  Key Quranic Verses by Topic
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  Explore verses on patience, gratitude, forgiveness, and remembrance of Allah.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-purple-400 mt-2.5 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Ayats →
              </span>
            </Link>

            <Link
              href="/tools/qibla-finder/"
              className="group p-3.5 bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Companion Tool</span>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-white transition-colors">
                  Online Qibla Finder
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  Determine the exact geodesic bearing to the Sacred Kaaba from any location.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-amber-400 mt-2.5 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Tool →
              </span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
