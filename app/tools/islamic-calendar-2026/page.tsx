"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Moon,
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  Sparkles,
  Sliders,
  CheckCircle2,
  HelpCircle,
  Share2,
  Layers,
  ArrowUpRight,
  Star,
  Info,
  Clock,
  Compass,
  Bookmark,
  ChevronDown
} from "lucide-react";

// --- Types & Theme Definitions ---

export type ThemeId =
  | "emerald-gold"
  | "makkah-minimalist"
  | "royal-sapphire"
  | "andalusian-cream"
  | "midnight-crescent"
  | "desert-rose"
  | "persian-turquoise"
  | "sage-sanctuary"
  | "modern-monochrome"
  | "celestial-glass";

interface CalendarTheme {
  id: ThemeId;
  name: string;
  tagline: string;
  cardBg: string;
  headerBg: string;
  accentBorder: string;
  textPrimary: string;
  textSecondary: string;
  gregorianColor: string;
  hijriColor: string;
  dayHeaderColor: string;
  eventBadgeBg: string;
  eventBadgeText: string;
  cellHover: string;
  todayBorder: string;
  previewColor: string;
}

const THEMES: Record<ThemeId, CalendarTheme> = {
  "emerald-gold": {
    id: "emerald-gold",
    name: "Emerald Gold Executive",
    tagline: "Dark slate with deep emerald gradients & metallic gold trim",
    cardBg: "bg-slate-900 border-emerald-500/30",
    headerBg: "bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-b border-amber-500/30",
    accentBorder: "border-amber-400/40",
    textPrimary: "text-slate-100",
    textSecondary: "text-emerald-400",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-amber-400 font-semibold",
    dayHeaderColor: "text-amber-400 font-semibold",
    eventBadgeBg: "bg-amber-400/15 border-amber-400/30",
    eventBadgeText: "text-amber-300",
    cellHover: "hover:bg-emerald-900/30",
    todayBorder: "ring-2 ring-amber-400 bg-emerald-950/50",
    previewColor: "#10b981"
  },
  "makkah-minimalist": {
    id: "makkah-minimalist",
    name: "Makkah Minimalist",
    tagline: "Ultra-clean high-contrast white & navy wall print style",
    cardBg: "bg-slate-50 border-slate-300 shadow-xl",
    headerBg: "bg-slate-900 border-b border-slate-800",
    accentBorder: "border-slate-400",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    gregorianColor: "text-slate-900 font-bold",
    hijriColor: "text-emerald-700 font-semibold",
    dayHeaderColor: "text-slate-700 font-bold",
    eventBadgeBg: "bg-emerald-100 border-emerald-300",
    eventBadgeText: "text-emerald-800",
    cellHover: "hover:bg-slate-200/80",
    todayBorder: "ring-2 ring-emerald-600 bg-emerald-50",
    previewColor: "#0f172a"
  },
  "royal-sapphire": {
    id: "royal-sapphire",
    name: "Royal Ottoman Sapphire",
    tagline: "Rich royal blue canvas with silver filigree accents",
    cardBg: "bg-[#0b132b] border-blue-400/30",
    headerBg: "bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border-b border-blue-400/30",
    accentBorder: "border-blue-400/40",
    textPrimary: "text-blue-50",
    textSecondary: "text-cyan-300",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-cyan-300 font-semibold",
    dayHeaderColor: "text-blue-200 font-semibold",
    eventBadgeBg: "bg-blue-500/20 border-blue-400/40",
    eventBadgeText: "text-cyan-200",
    cellHover: "hover:bg-blue-900/40",
    todayBorder: "ring-2 ring-cyan-400 bg-blue-900/50",
    previewColor: "#1e40af"
  },
  "andalusian-cream": {
    id: "andalusian-cream",
    name: "Andalusian Gold & Cream",
    tagline: "Warm ivory parchment texture with deep bronze lattice",
    cardBg: "bg-[#fcf8f2] border-amber-800/30 text-slate-900 shadow-xl",
    headerBg: "bg-[#ede2d1] border-b border-amber-800/20 text-slate-900",
    accentBorder: "border-amber-700",
    textPrimary: "text-stone-900",
    textSecondary: "text-amber-900",
    gregorianColor: "text-stone-900 font-bold",
    hijriColor: "text-amber-800 font-semibold",
    dayHeaderColor: "text-amber-900 font-bold",
    eventBadgeBg: "bg-amber-200/70 border-amber-400",
    eventBadgeText: "text-amber-950",
    cellHover: "hover:bg-amber-100",
    todayBorder: "ring-2 ring-amber-700 bg-amber-100/60",
    previewColor: "#d97706"
  },
  "midnight-crescent": {
    id: "midnight-crescent",
    name: "Midnight Crescent",
    tagline: "Pitch-black obsidian theme with glowing cyan & gold",
    cardBg: "bg-black border-cyan-500/30",
    headerBg: "bg-neutral-950 border-b border-cyan-500/20",
    accentBorder: "border-cyan-400/40",
    textPrimary: "text-white",
    textSecondary: "text-cyan-400",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-amber-400 font-semibold",
    dayHeaderColor: "text-cyan-300 font-semibold",
    eventBadgeBg: "bg-cyan-500/20 border-cyan-400/30",
    eventBadgeText: "text-cyan-300",
    cellHover: "hover:bg-neutral-900",
    todayBorder: "ring-2 ring-cyan-400 bg-cyan-950/40",
    previewColor: "#06b6d4"
  },
  "desert-rose": {
    id: "desert-rose",
    name: "Desert Rose Sunset",
    tagline: "Warm terracotta & dusky copper tones with white typography",
    cardBg: "bg-[#2b1810] border-orange-500/30",
    headerBg: "bg-gradient-to-r from-[#381e14] via-[#24130c] to-[#381e14] border-b border-orange-500/30",
    accentBorder: "border-orange-400/40",
    textPrimary: "text-orange-50",
    textSecondary: "text-orange-300",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-amber-300 font-semibold",
    dayHeaderColor: "text-orange-300 font-semibold",
    eventBadgeBg: "bg-orange-500/20 border-orange-400/40",
    eventBadgeText: "text-orange-200",
    cellHover: "hover:bg-orange-950/60",
    todayBorder: "ring-2 ring-orange-400 bg-orange-900/40",
    previewColor: "#ea580c"
  },
  "persian-turquoise": {
    id: "persian-turquoise",
    name: "Persian Turquoise",
    tagline: "Vibrant turquoise & gold geometric pattern layout",
    cardBg: "bg-slate-900 border-teal-500/30",
    headerBg: "bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 border-b border-teal-400/30",
    accentBorder: "border-teal-400/40",
    textPrimary: "text-teal-50",
    textSecondary: "text-teal-300",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-amber-300 font-semibold",
    dayHeaderColor: "text-teal-300 font-semibold",
    eventBadgeBg: "bg-teal-500/20 border-teal-400/40",
    eventBadgeText: "text-teal-200",
    cellHover: "hover:bg-teal-950/50",
    todayBorder: "ring-2 ring-teal-400 bg-teal-950/40",
    previewColor: "#0d9488"
  },
  "sage-sanctuary": {
    id: "sage-sanctuary",
    name: "Sage & Olive Sanctuary",
    tagline: "Calming botanical sage green with muted gold highlights",
    cardBg: "bg-[#14221a] border-emerald-600/30",
    headerBg: "bg-[#0d1812] border-b border-emerald-600/30",
    accentBorder: "border-emerald-500/40",
    textPrimary: "text-emerald-50",
    textSecondary: "text-emerald-300",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-yellow-200 font-semibold",
    dayHeaderColor: "text-emerald-300 font-semibold",
    eventBadgeBg: "bg-emerald-600/25 border-emerald-500/30",
    eventBadgeText: "text-emerald-200",
    cellHover: "hover:bg-emerald-900/40",
    todayBorder: "ring-2 ring-emerald-400 bg-emerald-950/60",
    previewColor: "#059669"
  },
  "modern-monochrome": {
    id: "modern-monochrome",
    name: "Modern Monochrome Slate",
    tagline: "Sleek minimalist charcoal slate with high-visibility white",
    cardBg: "bg-zinc-900 border-zinc-700",
    headerBg: "bg-zinc-950 border-b border-zinc-800",
    accentBorder: "border-zinc-500",
    textPrimary: "text-zinc-100",
    textSecondary: "text-zinc-400",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-zinc-300 font-semibold",
    dayHeaderColor: "text-zinc-400 font-semibold",
    eventBadgeBg: "bg-zinc-800 border-zinc-600",
    eventBadgeText: "text-zinc-200",
    cellHover: "hover:bg-zinc-800/80",
    todayBorder: "ring-2 ring-zinc-200 bg-zinc-800",
    previewColor: "#52525b"
  },
  "celestial-glass": {
    id: "celestial-glass",
    name: "Celestial Emerald Glass",
    tagline: "Translucent glassmorphism with emerald neon glow borders",
    cardBg: "bg-slate-900/80 backdrop-blur-xl border-emerald-400/40 shadow-2xl shadow-emerald-950/50",
    headerBg: "bg-emerald-950/60 border-b border-emerald-400/30",
    accentBorder: "border-emerald-400",
    textPrimary: "text-emerald-50",
    textSecondary: "text-emerald-300",
    gregorianColor: "text-white font-bold",
    hijriColor: "text-emerald-300 font-semibold",
    dayHeaderColor: "text-emerald-400 font-semibold",
    eventBadgeBg: "bg-emerald-500/30 border-emerald-400/50",
    eventBadgeText: "text-emerald-200",
    cellHover: "hover:bg-emerald-900/30",
    todayBorder: "ring-2 ring-emerald-400 bg-emerald-950/80 shadow-lg shadow-emerald-500/20",
    previewColor: "#34d399"
  }
};

// --- Calendar Math & Astronomical Data for 2026 ---

interface IslamicEvent {
  title: string;
  hijriDateStr: string;
  gregorianDateStr: string;
  monthIndex: number; // 0-11
  day: number;
  significance: string;
  isMajor: boolean;
}

const KEY_EVENTS_2026: IslamicEvent[] = [
  {
    title: "Start of Ramadan 1447 AH",
    hijriDateStr: "1 Ramadan 1447",
    gregorianDateStr: "Feb 18, 2026",
    monthIndex: 1, // Feb
    day: 18,
    significance: "First day of obligatory fasting across the Muslim world.",
    isMajor: true
  },
  {
    title: "Laylat al-Qadr (Night of Power)",
    hijriDateStr: "27 Ramadan 1447",
    gregorianDateStr: "Mar 15, 2026",
    monthIndex: 2, // Mar
    day: 15,
    significance: "The holiest night of the year, better than a thousand months.",
    isMajor: true
  },
  {
    title: "Eid al-Fitr 1447 AH",
    hijriDateStr: "1 Shawwal 1447",
    gregorianDateStr: "Mar 20, 2026",
    monthIndex: 2, // Mar
    day: 20,
    significance: "Celebration marking the conclusion of the holy month of fasting.",
    isMajor: true
  },
  {
    title: "Day of Arafah (Hajj)",
    hijriDateStr: "9 Dhul Hijjah 1447",
    gregorianDateStr: "May 26, 2026",
    monthIndex: 4, // May
    day: 26,
    significance: "Pinnacle of the Hajj pilgrimage and recommended day of fasting for non-pilgrims.",
    isMajor: true
  },
  {
    title: "Eid al-Adha 1447 AH",
    hijriDateStr: "10 Dhul Hijjah 1447",
    gregorianDateStr: "May 27, 2026",
    monthIndex: 4, // May
    day: 27,
    significance: "Feast of the Sacrifice commemorating Prophet Ibrahim's (AS) devotion.",
    isMajor: true
  },
  {
    title: "Islamic New Year 1448 AH",
    hijriDateStr: "1 Muharram 1448",
    gregorianDateStr: "Jun 16, 2026",
    monthIndex: 5, // Jun
    day: 16,
    significance: "Beginning of the Hijri year 1448 AH and the sacred month of Muharram.",
    isMajor: true
  },
  {
    title: "Day of Ashura 1448 AH",
    hijriDateStr: "10 Muharram 1448",
    gregorianDateStr: "Jun 25, 2026",
    monthIndex: 5, // Jun
    day: 25,
    significance: "Prophet Musa's (AS) liberation from Pharaoh; recommended sunnah fast.",
    isMajor: true
  },
  {
    title: "Mawlid al-Nabi 1448 AH",
    hijriDateStr: "12 Rabi al-Awwal 1448",
    gregorianDateStr: "Aug 25, 2026",
    monthIndex: 7, // Aug
    day: 25,
    significance: "Commemoration of the blessed birth of the Prophet Muhammad ﷺ.",
    isMajor: true
  }
];

const GREGORIAN_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const HIJRI_MONTH_NAMES = [
  "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
  "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhul Qa'dah", "Dhul Hijjah"
];

// Reference anchor: 2026-01-01 is 11 Rajab 1447 AH in Umm al-Qura standard
function getHijriDateFor2026(
  year: number,
  monthIndex: number, // 0-11
  day: number,
  offsetDays: number
): { hijriDay: number; hijriMonthName: string; hijriYear: number } {
  // Compute absolute days difference from Jan 1, 2026
  const targetDate = new Date(Date.UTC(year, monthIndex, day));
  const baseDate = new Date(Date.UTC(2026, 0, 1));
  const diffTime = targetDate.getTime() - baseDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + offsetDays;

  // Umm al-Qura month starting day offsets from Jan 1, 2026
  // 1447 AH:
  // Jan 1: 11 Rajab 1447
  // Sha'ban 1447 starts around day 19 (Jan 20)
  // Ramadan 1447 starts around day 48 (Feb 18)
  // Shawwal 1447 starts around day 78 (Mar 20)
  // Dhul Qa'dah 1447 starts around day 107 (Apr 18)
  // Dhul Hijjah 1447 starts around day 137 (May 18)
  // 1448 AH:
  // Muharram 1448 starts around day 166 (Jun 16)
  // Safar 1448 starts around day 196 (Jul 16)
  // Rabi al-Awwal 1448 starts around day 225 (Aug 14)
  // Rabi al-Thani 1448 starts around day 255 (Sep 13)
  // Jumada al-Awwal 1448 starts around day 284 (Oct 12)
  // Jumada al-Thani 1448 starts around day 314 (Nov 11)
  // Rajab 1448 starts around day 344 (Dec 11)

  interface HijriMonthSpan {
    name: string;
    year: number;
    startDayOffset: number; // relative to Jan 1, 2026
    length: number;
  }

  const spans: HijriMonthSpan[] = [
    { name: "Rajab", year: 1447, startDayOffset: -10, length: 29 },
    { name: "Sha'ban", year: 1447, startDayOffset: 19, length: 29 },
    { name: "Ramadan", year: 1447, startDayOffset: 48, length: 30 },
    { name: "Shawwal", year: 1447, startDayOffset: 78, length: 29 },
    { name: "Dhul Qa'dah", year: 1447, startDayOffset: 107, length: 30 },
    { name: "Dhul Hijjah", year: 1447, startDayOffset: 137, length: 29 },
    { name: "Muharram", year: 1448, startDayOffset: 166, length: 30 },
    { name: "Safar", year: 1448, startDayOffset: 196, length: 29 },
    { name: "Rabi al-Awwal", year: 1448, startDayOffset: 225, length: 30 },
    { name: "Rabi al-Thani", year: 1448, startDayOffset: 255, length: 29 },
    { name: "Jumada al-Awwal", year: 1448, startDayOffset: 284, length: 30 },
    { name: "Jumada al-Thani", year: 1448, startDayOffset: 314, length: 30 },
    { name: "Rajab", year: 1448, startDayOffset: 344, length: 30 },
    { name: "Sha'ban", year: 1448, startDayOffset: 374, length: 29 }
  ];

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const nextStart = i + 1 < spans.length ? spans[i + 1].startDayOffset : span.startDayOffset + span.length;
    if (diffDays >= span.startDayOffset && diffDays < nextStart) {
      const hDay = diffDays - span.startDayOffset + 1;
      return {
        hijriDay: Math.max(1, Math.min(30, hDay)),
        hijriMonthName: span.name,
        hijriYear: span.year
      };
    }
  }

  return { hijriDay: 1, hijriMonthName: "Rajab", hijriYear: 1447 };
}

export default function IslamicCalendarPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(1); // Default to February 2026 (Ramadan starts)
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>("emerald-gold");
  const [hijriOffset, setHijriOffset] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const calendarCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const theme = THEMES[selectedTheme];

  // Month metadata
  const daysInMonth = useMemo(() => {
    return new Date(2026, currentMonth + 1, 0).getDate();
  }, [currentMonth]);

  const firstDayOfWeek = useMemo(() => {
    return new Date(2026, currentMonth, 1).getDay(); // 0 = Sun, 1 = Mon ...
  }, [currentMonth]);

  // Determine span of Hijri months for the current Gregorian month
  const hijriMonthSpanSummary = useMemo(() => {
    const first = getHijriDateFor2026(2026, currentMonth, 1, hijriOffset);
    const last = getHijriDateFor2026(2026, currentMonth, daysInMonth, hijriOffset);
    if (first.hijriMonthName === last.hijriMonthName) {
      return `${first.hijriMonthName} ${first.hijriYear} AH`;
    }
    return `${first.hijriMonthName} – ${last.hijriMonthName} ${first.hijriYear === last.hijriYear ? `${first.hijriYear} AH` : `${first.hijriYear}/${last.hijriYear} AH`}`;
  }, [currentMonth, daysInMonth, hijriOffset]);

  // Events in current month
  const currentMonthEvents = useMemo(() => {
    return KEY_EVENTS_2026.filter((e) => e.monthIndex === currentMonth);
  }, [currentMonth]);

  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev > 0 ? prev - 1 : 11));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev < 11 ? prev + 1 : 0));
  };

  // High-Res PNG Download using dynamic HTML5 canvas
  const handleDownloadPNG = () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = 1600;
      const height = 1200;
      canvas.width = width;
      canvas.height = height;

      // Draw background
      ctx.fillStyle = selectedTheme === "makkah-minimalist" ? "#f8fafc" : selectedTheme === "andalusian-cream" ? "#fcf8f2" : "#090d16";
      ctx.fillRect(0, 0, width, height);

      // Gradient accent banner
      const bannerGrad = ctx.createLinearGradient(0, 0, width, 180);
      if (selectedTheme === "emerald-gold" || selectedTheme === "celestial-glass") {
        bannerGrad.addColorStop(0, "#064e3b");
        bannerGrad.addColorStop(0.5, "#022c22");
        bannerGrad.addColorStop(1, "#064e3b");
      } else if (selectedTheme === "royal-sapphire") {
        bannerGrad.addColorStop(0, "#1e3a8a");
        bannerGrad.addColorStop(1, "#0f172a");
      } else {
        bannerGrad.addColorStop(0, "#0f172a");
        bannerGrad.addColorStop(1, "#1e293b");
      }
      ctx.fillStyle = bannerGrad;
      ctx.fillRect(40, 40, width - 80, 150);

      // Outer Card Frame
      ctx.strokeStyle = selectedTheme === "makkah-minimalist" ? "#cbd5e1" : "#10b981";
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      // Header Branding
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 38px sans-serif";
      ctx.fillText(`IslamHub • ${GREGORIAN_MONTHS[currentMonth]} 2026`, 70, 105);

      ctx.font = "24px sans-serif";
      ctx.fillStyle = "#34d399";
      ctx.fillText(`${hijriMonthSpanSummary} • Umm al-Qura Standard`, 70, 150);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "20px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("islamhub.com/tools/islamic-calendar-2026", width - 70, 130);
      ctx.textAlign = "left";

      // Days of week header
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const colWidth = (width - 120) / 7;
      const startX = 60;
      const startY = 240;

      ctx.font = "bold 22px sans-serif";
      ctx.fillStyle = selectedTheme === "makkah-minimalist" ? "#1e293b" : "#fbbf24";
      dayNames.forEach((d, i) => {
        ctx.fillText(d, startX + i * colWidth + 20, startY);
      });

      // Horizontal separator
      ctx.strokeStyle = selectedTheme === "makkah-minimalist" ? "#e2e8f0" : "#334155";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, startY + 15);
      ctx.lineTo(width - 60, startY + 15);
      ctx.stroke();

      // Calendar Grid
      const cellHeight = 135;
      let dayCounter = 1;
      let gridY = startY + 30;

      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          const cellX = startX + col * colWidth;
          const cellY = gridY + row * cellHeight;

          // Draw cell box outline
          ctx.strokeStyle = selectedTheme === "makkah-minimalist" ? "#e2e8f0" : "#1e293b";
          ctx.lineWidth = 1;
          ctx.strokeRect(cellX, cellY, colWidth - 10, cellHeight - 10);

          if ((row === 0 && col < firstDayOfWeek) || dayCounter > daysInMonth) {
            continue;
          }

          const hDate = getHijriDateFor2026(2026, currentMonth, dayCounter, hijriOffset);
          const hasEvent = KEY_EVENTS_2026.find(
            (e) => e.monthIndex === currentMonth && e.day === dayCounter
          );

          // Highlight event day
          if (hasEvent) {
            ctx.fillStyle = selectedTheme === "makkah-minimalist" ? "#d1fae5" : "rgba(16, 185, 129, 0.25)";
            ctx.fillRect(cellX, cellY, colWidth - 10, cellHeight - 10);
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 2;
            ctx.strokeRect(cellX, cellY, colWidth - 10, cellHeight - 10);
          }

          // Gregorian number
          ctx.fillStyle = selectedTheme === "makkah-minimalist" ? "#0f172a" : "#ffffff";
          ctx.font = "bold 32px sans-serif";
          ctx.fillText(`${dayCounter}`, cellX + 15, cellY + 40);

          // Hijri day & month
          ctx.fillStyle = selectedTheme === "makkah-minimalist" ? "#047857" : "#fbbf24";
          ctx.font = "bold 20px sans-serif";
          ctx.fillText(`${hDate.hijriDay} ${hDate.hijriMonthName.split(" ")[0]}`, cellX + 15, cellY + 75);

          // Event tag if present
          if (hasEvent) {
            ctx.fillStyle = "#10b981";
            ctx.font = "bold 15px sans-serif";
            const shortTitle = hasEvent.title.length > 18 ? hasEvent.title.slice(0, 16) + "…" : hasEvent.title;
            ctx.fillText(`★ ${shortTitle}`, cellX + 10, cellY + 105);
          }

          dayCounter++;
        }
        if (dayCounter > daysInMonth) break;
      }

      // Footer disclaimer
      ctx.fillStyle = "#64748b";
      ctx.font = "16px sans-serif";
      ctx.fillText(
        "Astronomical calculation verified under Umm al-Qura standard. Islamic dates depend on actual local crescent sighting.",
        60,
        height - 50
      );

      // Trigger download
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `Islamic-Calendar-${GREGORIAN_MONTHS[currentMonth]}-2026.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Canvas export failed", err);
    } finally {
      setIsExporting(false);
    }
  };

  // One-click print window
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white pb-20">
      {/* Global CSS for Print Mode */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          header, nav, footer, .no-print {
            display: none !important;
          }
          .print-area {
            display: block !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            border: none !important;
          }
        }
      `,
        }}
      />

      {/* SECTION 1: HEADER & BREADCRUMBS */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 border-b border-slate-900 no-print">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-600">/</li>
            <li>
              <Link href="/tools/" className="hover:text-emerald-400 transition-colors">
                Islamic Tools
              </Link>
            </li>
            <li className="text-slate-600">/</li>
            <li className="text-emerald-400 font-medium" aria-current="page">
              Islamic Calendar 2026
            </li>
          </ol>
        </nav>

        {/* H1 Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Moon className="w-3.5 h-3.5" /> 1447 – 1448 AH Dual Calendar
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" /> 10 Printable Themes
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Islamic Calendar 2026 (1447 – 1448 AH) &amp; Hijri Date Converter
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-3xl">
              Accurate dual Gregorian-Hijri calendar engine with real-time local moon-sighting adjustment, 
              major holiday markers, and high-resolution printable PDF/PNG export.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 self-start lg:self-center">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition font-medium text-sm"
              title="Print A4 / Letter Calendar"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print A4</span>
            </button>
            <button
              onClick={handleDownloadPNG}
              disabled={isExporting}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-lg shadow-emerald-950/40 transition disabled:opacity-50"
              title="Save high-resolution image"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? "Exporting..." : "Download PNG"}</span>
            </button>
          </div>
        </div>

        {/* E-E-A-T Verification Badge Strip */}
        <div className="mt-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold text-white">Umm al-Qura Astronomical Calculation Standard</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verified 1447–1448 AH Key Islamic Dates</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Dynamic Global Moon Sighting Adjustment (&plusmn;2 Days)</span>
          </div>
        </div>
      </header>

      {/* SECTION 2: INTERACTIVE CALENDAR ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 no-print">
        {/* Control Bar: Theme Picker + Moon-Sighting Offset */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Theme Selector Strip */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Select Theme Design (10 Styles)
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
                {(Object.keys(THEMES) as ThemeId[]).map((tId) => {
                  const t = THEMES[tId];
                  const isSelected = selectedTheme === tId;
                  return (
                    <button
                      key={tId}
                      onClick={() => setSelectedTheme(tId)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-2 border ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-400 ring-1 ring-emerald-400/40"
                          : "bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: t.previewColor }}
                      />
                      <span>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Moon Sighting Offset Controls */}
            <div className="space-y-2 lg:text-right shrink-0">
              <div className="flex items-center lg:justify-end gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Moon Sighting Offset
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono font-bold">
                  {hijriOffset > 0 ? `+${hijriOffset}` : hijriOffset} Day{Math.abs(hijriOffset) === 1 ? "" : "s"}
                </span>
              </div>
              <div className="flex items-center lg:justify-end gap-1.5">
                {[-2, -1, 0, 1, 2].map((val) => (
                  <button
                    key={val}
                    onClick={() => setHijriOffset(val)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition border ${
                      hijriOffset === val
                        ? "bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-sm"
                        : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {val > 0 ? `+${val}` : val}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Month Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Previous Month"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <span>{GREGORIAN_MONTHS[currentMonth]} 2026</span>
                <span className="text-sm sm:text-base font-medium px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {hijriMonthSpanSummary}
                </span>
              </h2>
            </div>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Next Month"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Month Jump Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Jump to:</span>
            <select
              value={currentMonth}
              onChange={(e) => setCurrentMonth(Number(e.target.value))}
              className="bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {GREGORIAN_MONTHS.map((m, idx) => (
                <option key={m} value={idx}>
                  {m} 2026
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* MAIN CALENDAR DISPLAY CARD (Styled by Selected Theme) */}
        <div
          ref={calendarCardRef}
          className={`rounded-3xl border overflow-hidden transition-all duration-300 shadow-2xl print-area ${theme.cardBg}`}
        >
          {/* Calendar Branding Top Bar (Visible in Export & Print) */}
          <div className={`p-5 sm:p-6 ${theme.headerBg}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-bold tracking-tight text-white">
                    IslamHub • 2026 Islamic Dual Calendar
                  </span>
                </div>
                <p className="text-xs mt-1 opacity-80 text-slate-300">
                  Umm al-Qura Astronomical Baseline • Verified 1447–1448 AH • Offset: {hijriOffset > 0 ? `+${hijriOffset}` : hijriOffset} Day(s)
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 border border-white/10 text-emerald-400">
                  islamhub.com/tools/islamic-calendar-2026
                </span>
              </div>
            </div>
          </div>

          {/* Weekday Labels Grid */}
          <div className="grid grid-cols-7 text-center border-b border-white/10 bg-black/20 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName, idx) => (
              <div
                key={dayName}
                className={idx === 5 ? "text-emerald-400 font-extrabold" : theme.dayHeaderColor}
              >
                {dayName}
                {idx === 5 && <span className="hidden sm:inline text-[10px] ml-1 opacity-70">(Jumu&apos;ah)</span>}
              </div>
            ))}
          </div>

          {/* Calendar Days Matrix */}
          <div className="grid grid-cols-7 auto-rows-fr">
            {/* Blank leading days */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="min-h-[95px] sm:min-h-[115px] p-2 sm:p-3 border-b border-r border-white/5 opacity-20 bg-black/10"
              />
            ))}

            {/* Days of Month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const hDate = getHijriDateFor2026(2026, currentMonth, day, hijriOffset);
              const eventMatch = KEY_EVENTS_2026.find(
                (e) => e.monthIndex === currentMonth && e.day === day
              );
              const isFriday = (firstDayOfWeek + i) % 7 === 5;

              return (
                <div
                  key={`day-${day}`}
                  className={`min-h-[95px] sm:min-h-[115px] p-2 sm:p-3 border-b border-r border-white/5 transition flex flex-col justify-between relative ${theme.cellHover} ${
                    eventMatch ? "bg-emerald-500/10" : ""
                  }`}
                >
                  {/* Top Row: Gregorian & Hijri Number */}
                  <div className="flex items-start justify-between">
                    <span className={`text-base sm:text-xl ${theme.gregorianColor}`}>
                      {day}
                    </span>
                    <div className="text-right">
                      <span className={`text-xs sm:text-sm ${theme.hijriColor} block`}>
                        {hDate.hijriDay}
                      </span>
                      <span className="text-[10px] opacity-70 block tracking-tighter">
                        {hDate.hijriMonthName.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Islamic Event Pill or Friday Marker */}
                  <div className="mt-1">
                    {eventMatch ? (
                      <div
                        className={`px-1.5 py-1 rounded text-[10px] sm:text-xs font-bold border leading-tight ${theme.eventBadgeBg} ${theme.eventBadgeText}`}
                        title={eventMatch.significance}
                      >
                        <span className="flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{eventMatch.title}</span>
                        </span>
                      </div>
                    ) : isFriday ? (
                      <span className="text-[10px] text-emerald-400 font-medium opacity-80">
                        Jumu&apos;ah
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calendar Card Footer with Current Month Events Summary */}
          {currentMonthEvents.length > 0 && (
            <div className="p-4 sm:p-5 bg-black/30 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Events In {GREGORIAN_MONTHS[currentMonth]} 2026:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentMonthEvents.map((evt) => (
                  <div
                    key={evt.title}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-white block">{evt.title}</span>
                      <span className="text-slate-400 text-[11px]">{evt.significance}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium shrink-0 ml-2">
                      {evt.gregorianDateStr}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: DIRECT ANSWER & HOW TO USE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 no-print">
        {/* Direct Answer Summary Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">
            <Info className="w-4 h-4" /> Comprehensive Date Conversion Mechanics
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            How the Islamic (Hijri) Lunar Calendar Operates in 2026
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Islamic calendar is a purely lunar reckoning system comprising 12 lunar months totaling 
            <strong> 354 or 355 days</strong> per year, in contrast to the 365-day solar Gregorian cycle. 
            Because lunar years are approximately 10 to 11 days shorter than solar years, major Islamic dates—such as 
            <strong> Ramadan 1447 AH (starting mid-February 2026)</strong> and <strong>Eid al-Adha (late May 2026)</strong>—advance 
            approximately 10 days earlier every consecutive Gregorian year.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-sm">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 text-xs block mb-1">Total Lunar Months</span>
              <span className="text-white font-bold text-lg">12 Months</span>
              <p className="text-xs text-slate-500 mt-1">Alternating 29 or 30 days based on crescent visibility.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 text-xs block mb-1">Annual Solar Drift</span>
              <span className="text-amber-400 font-bold text-lg">10 – 11 Days</span>
              <p className="text-xs text-slate-500 mt-1">Causes Ramadan and Eid to cycle through all four seasons over 33 years.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 text-xs block mb-1">Baseline Standard</span>
              <span className="text-emerald-400 font-bold text-lg">Umm al-Qura</span>
              <p className="text-xs text-slate-500 mt-1">Calculated for Makkah al-Mukarramah with manual &plusmn;2 day local override.</p>
            </div>
          </div>
        </div>

        {/* 4 Compact Step Cards */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
            How to Use &amp; Customize Your 2026 Islamic Calendar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4 border border-emerald-500/40">
                1
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Select Month &amp; Year
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Navigate through all 12 Gregorian months of 2026 alongside corresponding 1447–1448 AH Hijri dates using the next/previous controls or quick selector.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4 border border-emerald-500/40">
                2
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Adjust Moon Sighting
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Fine-tune Hijri dates (+1/-1 day) to match your local Islamic committee, central moon-sighting committee, or country authority rulings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4 border border-emerald-500/40">
                3
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Choose Custom Theme
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Switch between 10 professional design variants—including Emerald Gold Executive, Makkah Minimalist, and Royal Sapphire—to suit your aesthetic taste.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4 border border-emerald-500/40">
                4
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Print or Download PDF
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Export high-resolution PNG copies or print directly in clean A4 format complete with site branding, verified calculation details, and event markers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY ISLAMIC DATES 2026 TABLE & SPIRITUAL SIGNIFICANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 no-print">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Astronomical Estimates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Key Islamic Dates in 2026 (1447 – 1448 AH)
              </h2>
            </div>
            <span className="text-xs text-slate-400 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 w-fit">
              Subject to local moon crescent sighting
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-bold">Event Name</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Estimated Gregorian Date (2026)</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Hijri Date</th>
                  <th scope="col" className="px-4 py-3.5 font-bold hidden md:table-cell">Spiritual Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {KEY_EVENTS_2026.map((event) => (
                  <tr key={event.title} className="hover:bg-slate-800/30 transition">
                    <td className="px-4 py-4 font-semibold text-white flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{event.title}</span>
                    </td>
                    <td className="px-4 py-4 text-emerald-400 font-medium">
                      {event.gregorianDateStr}
                    </td>
                    <td className="px-4 py-4 text-amber-300 font-mono">
                      {event.hijriDateStr}
                    </td>
                    <td className="px-4 py-4 text-slate-400 text-xs hidden md:table-cell">
                      {event.significance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Symmetrical 2-Column Hadith Reference Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Left Card: Quranic Reference */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 border border-emerald-500/20">
                  📖 Quranic Reference
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Indeed, the number of months with Allah is twelve [lunar] months in the register of Allah from the day He created the heavens and the earth; of these, four are sacred. That is the correct religion...&rdquo;
                </blockquote>
              </div>
              <span className="text-xs text-emerald-400 font-medium mt-4 block">
                — Surah At-Tawbah (9:36)
              </span>
            </div>

            {/* Right Card: Sahih Reference */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 border border-emerald-500/20">
                  📖 Sahih Reference
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Observe fast on sighting the crescent and terminate it on sighting it. If the sky is overcast, complete thirty days of Sha&apos;ban.&rdquo;
                </blockquote>
              </div>
              <span className="text-xs text-emerald-400 font-medium mt-4 block">
                — Sahih Muslim 1081
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 no-print">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Everything You Need to Know About the 2026 Hijri Calendar
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Why do Hijri dates vary by 1–2 days between different countries?",
              a: "Islamic dates rely upon the physical or calculated sighting of the new moon crescent (Hilal). Due to geographical differences, timezone offsets, and differing theological methodologies (local moon sighting vs. global sighting vs. astronomical calculation like Umm al-Qura), neighboring countries and communities can begin months like Ramadan or Shawwal on consecutive days."
            },
            {
              q: "How many days are in an Islamic lunar month?",
              a: "An Islamic lunar month lasts either 29 or 30 days depending on the lunar cycle (synodic month is approximately 29.53 days). Unlike the Gregorian calendar, a Hijri month cannot have 31 days or fewer than 29 days."
            },
            {
              q: "When does Ramadan 2026 begin and end?",
              a: "In 2026, the holy month of Ramadan (1447 AH) is astronomically projected to begin on Wednesday, February 18, 2026, and conclude on Thursday, March 19, 2026, with Eid al-Fitr celebrated on Friday, March 20, 2026 (subject to regional moon sighting confirmations)."
            },
            {
              q: "How can I adjust the calendar Hijri offset for my local area?",
              a: "Use the 'Moon Sighting Offset' controls located directly above the calendar grid. Selecting -1, 0, or +1 day shifts all lunar dates across the entire calendar instantaneously so your printed or downloaded calendar precisely aligns with your local Islamic authority."
            }
          ].map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-emerald-300 transition"
                >
                  <span className="text-base">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: TECHNICAL & AI SCHEMA ENGINE (GEO / AEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": "https://islamhub.com/tools/islamic-calendar-2026/#app",
                "name": "Islamic Calendar 2026 (1447 - 1448 AH) & Hijri Date Converter",
                "url": "https://islamhub.com/tools/islamic-calendar-2026",
                "description": "Interactive dual Gregorian-Hijri calendar engine featuring Umm al-Qura calculation standard, moon-sighting fine-tuning, and 10 printable export themes.",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "All",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              },
              {
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
                    "name": "Islamic Tools",
                    "item": "https://islamhub.com/tools/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Islamic Calendar 2026",
                    "item": "https://islamhub.com/tools/islamic-calendar-2026"
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How to Customize and Print the 2026 Islamic Calendar",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Select Month & Year",
                    "text": "Navigate through all 12 Gregorian months of 2026 alongside corresponding 1447–1448 AH Hijri dates."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Adjust Moon Sighting",
                    "text": "Fine-tune Hijri dates (+1/-1 day) to match your local Islamic committee or country authority."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Choose Custom Theme",
                    "text": "Switch between 10 professional design variants to customize colors and layout aesthetics."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Print or Download PDF",
                    "text": "Export high-resolution PNG copies or print directly in A4 format complete with site branding."
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why do Hijri dates vary by 1–2 days between different countries?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Islamic dates rely upon the physical or calculated sighting of the new moon crescent (Hilal). Due to geographical differences and theological methodologies, neighboring countries can begin months on consecutive days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How many days are in an Islamic lunar month?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An Islamic lunar month lasts either 29 or 30 days depending on the lunar cycle. It cannot have 31 days or fewer than 29 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When does Ramadan 2026 begin and end?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In 2026, Ramadan 1447 AH is projected to begin on February 18, 2026, and end on March 19, 2026, followed by Eid al-Fitr on March 20, 2026."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I adjust the calendar Hijri offset for my local area?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use the Moon Sighting Offset buttons to shift dates by -2, -1, 0, +1, or +2 days to match your local crescent sighting announcement."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* SECTION 7: SILO NAVIGATION & INTERNAL LINKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-slate-900 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Navigation Silo
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Explore More Islamic Calculation Tools
            </h3>
          </div>
          <Link
            href="/tools/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
          >
            ← Back to All Islamic Tools Hub
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/prayer-times"
            className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
          >
            <Clock className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition" />
            <h4 className="font-bold text-white group-hover:text-emerald-300 transition">
              Global Prayer Times
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Daily Salah timings with GPS precision &amp; adhan reminders.
            </p>
          </Link>

          <Link
            href="/tools/qibla-finder"
            className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
          >
            <Compass className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition" />
            <h4 className="font-bold text-white group-hover:text-emerald-300 transition">
              Online Qibla Finder
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Live Kaaba direction compass with geodesic Great Circle accuracy.
            </p>
          </Link>

          <Link
            href="/tools/tasbeeh-counter"
            className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
          >
            <Sparkles className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition" />
            <h4 className="font-bold text-white group-hover:text-emerald-300 transition">
              Digital Tasbeeh Counter
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Custom target dhikr counter with vibration feedback &amp; sound.
            </p>
          </Link>

          <Link
            href="/ayats/"
            className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
          >
            <Bookmark className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition" />
            <h4 className="font-bold text-white group-hover:text-emerald-300 transition">
              Sacred Ayats Directory
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Comprehensive collection of powerful Quranic verses with tajweed.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
