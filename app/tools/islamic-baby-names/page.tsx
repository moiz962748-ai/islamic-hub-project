"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  Check,
  Copy,
  Star,
  Sparkles,
  ShieldCheck,
  Award,
  Lock,
  BookOpen,
  Sliders,
  RotateCcw,
  Compass,
  Calendar,
  Repeat,
  HelpCircle,
  Baby,
  Share2,
  Flame,
  Printer,
  Heart,
  ImageIcon,
  ArrowLeft,
  BookOpenCheck
} from "lucide-react";

// --- Simplified TypeScript Interface ---

export interface BabyName {
  id: string;
  name: string;
  transliteration?: string;
  arabic: string;
  meaning: string; // Concise 1-sentence meaning
  gender: "boy" | "girl" | "unisex";
  origin: string; // e.g., 'Arabic', 'Quranic', 'Hebrew / Arabic'
  isTopName?: boolean;
  category?: "prophetic" | "quranic" | "sahaba" | "virtues" | "classical";
}

// --- Simplified Authentic Islamic Baby Names Dataset ---

const ISLAMIC_NAMES_DATABASE: BabyName[] = [
  {
    id: "muhammad",
    name: "Muhammad",
    transliteration: "Muḥammad",
    arabic: "مُحَمَّد",
    meaning: "The praised one; worthy of all praise and gratitude.",
    gender: "boy",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "abdullah",
    name: "Abdullah",
    transliteration: "‘Abd Allāh",
    arabic: "عَبْدُ اللَّه",
    meaning: "Servant of Allah; the most beloved name in Islamic tradition.",
    gender: "boy",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "abdur-rahman",
    name: "Abdur-Rahman",
    transliteration: "‘Abd ar-Raḥmān",
    arabic: "عَبْدُ الرَّحْمَٰن",
    meaning: "Servant of the Most Merciful; deeply cherished and blessed.",
    gender: "boy",
    origin: "Arabic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "maryam",
    name: "Maryam",
    transliteration: "Maryam",
    arabic: "مَرْيَم",
    meaning: "Devout worshipper of Allah, pious, and spiritually pure.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "zayd",
    name: "Zayd",
    transliteration: "Zayd",
    arabic: "زَيْد",
    meaning: "Growth, abundance, progress, and continuous increase.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "fatima",
    name: "Fatima",
    transliteration: "Fāṭimah",
    arabic: "فَاطِمَة",
    meaning: "One who abstains from spiritual harm; beloved daughter of the Prophet (ﷺ).",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "aisha",
    name: "Aisha",
    transliteration: "‘Ā’ishah",
    arabic: "عَائِشَة",
    meaning: "Living, prosperous, thriving, and full of vitality.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "yusuf",
    name: "Yusuf",
    transliteration: "Yūsuf",
    arabic: "يُوسُف",
    meaning: "Allah increases in beauty, honor, and piety.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "inayah",
    name: "Inayah",
    transliteration: "‘Ināyah",
    arabic: "عِنَايَة",
    meaning: "Divine care, solicitude, protection, and gracious guardianship.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "ibrahim",
    name: "Ibrahim",
    transliteration: "Ibrāhīm",
    arabic: "إِبْرَاهِيم",
    meaning: "Compassionate father; intimate friend of Allah (Khalilullah).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "aaliyah",
    name: "Aaliyah",
    transliteration: "‘Āliyah",
    arabic: "عَالِيَة",
    meaning: "Exalted, noble, sublime, and high in spiritual station.",
    gender: "girl",
    origin: "Arabic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "rayan",
    name: "Rayan",
    transliteration: "Rayyān",
    arabic: "رَيَّان",
    meaning: "Luxuriant and bountiful; the special gate of Paradise for those who fast.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "khadijah",
    name: "Khadijah",
    transliteration: "Khadījah",
    arabic: "خَدِيجَة",
    meaning: "Trustworthy and early blessed; first Mother of the Believers.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "hamza",
    name: "Hamza",
    transliteration: "Ḥamzah",
    arabic: "حَمْزَة",
    meaning: "Lion of Allah; steadfast, resolute, and courageous.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "noor",
    name: "Noor",
    transliteration: "Nūr",
    arabic: "نُور",
    meaning: "Divine illumination, celestial light, and spiritual insight.",
    gender: "unisex",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "omar",
    name: "Omar",
    transliteration: "‘Umar",
    arabic: "عُمَر",
    meaning: "Flourishing, thriving, long-lived, and steadfast in justice.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "zainab",
    name: "Zainab",
    transliteration: "Zaynab",
    arabic: "زَيْنَب",
    meaning: "Fragrant blooming tree; beauty and ornament of the family.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "tariq",
    name: "Tariq",
    transliteration: "Ṭāriq",
    arabic: "طَارِق",
    meaning: "The radiant morning star that pierces the darkness.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "iman",
    name: "Iman",
    transliteration: "Īmān",
    arabic: "إِيمَان",
    meaning: "Heartfelt faith, conviction, and belief in the oneness of Allah.",
    gender: "unisex",
    origin: "Arabic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "bilal",
    name: "Bilal",
    transliteration: "Bilāl",
    arabic: "بِلَال",
    meaning: "Moisture and soothing freshness; the first caller to prayer (Mu'adhin).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "sarah",
    name: "Sarah",
    transliteration: "Sārah",
    arabic: "سَارَة",
    meaning: "Pure joy, bringer of glad tidings, and noble princess.",
    gender: "girl",
    origin: "Semitic / Arabic",
    category: "classical",
    isTopName: true
  },
  {
    id: "ihsan",
    name: "Ihsan",
    transliteration: "Iḥsān",
    arabic: "إِحْسَان",
    meaning: "Supreme excellence in worship, sincerity, and moral beauty.",
    gender: "unisex",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "idris",
    name: "Idris",
    transliteration: "Idrīs",
    arabic: "إِدْرِيس",
    meaning: "Studious, scholarly, and elevated in spiritual knowledge.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "safiyyah",
    name: "Safiyyah",
    transliteration: "Ṣafiyyah",
    arabic: "صَفِيَّة",
    meaning: "Pure, sincere friend, serene companion, and unblemished.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type GenderFilter = "all" | "boy" | "girl" | "unisex";
type CategoryFilter = "all" | "top" | "prophetic" | "quranic" | "sahaba" | "virtues" | "bookmarked";

export default function IslamicBabyNamesPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(24);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sharedId, setSharedId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Initialize Bookmarks from LocalStorage safely after mount
  useEffect(() => {
    setHasMounted(true);
    try {
      const savedBookmarks = localStorage.getItem("islamhub_baby_name_bookmarks");
      if (savedBookmarks) {
        const parsed = JSON.parse(savedBookmarks);
        if (Array.isArray(parsed)) {
          setBookmarks(parsed);
        }
      }
    } catch (e) {
      // LocalStorage error suppression
    }
  }, []);

  // Sync Bookmarks to LocalStorage
  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem("islamhub_baby_name_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      // Ignore storage errors in sandbox
    }
  }, [hasMounted, bookmarks]);

  // Toggle Bookmark state
  const handleToggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  // Copy name details to clipboard
  const handleCopyName = useCallback((nameItem: BabyName) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    const textToCopy = `${nameItem.name} (${nameItem.arabic}) - ${nameItem.gender.toUpperCase()} (${nameItem.origin})\nMeaning: ${nameItem.meaning}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(nameItem.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  }, []);

  // Share name
  const handleShareName = useCallback((nameItem: BabyName) => {
    const text = `Islamic Baby Name: ${nameItem.name} (${nameItem.arabic}) - ${nameItem.meaning}`;
    const url = typeof window !== "undefined" ? window.location.href : "https://islamhub.com/tools/islamic-baby-names";

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: `${nameItem.name} - Islamic Baby Name`,
          text: text,
          url: url
        })
        .catch(() => {
          // Fallback to clipboard if share cancelled
          if (navigator.clipboard) {
            navigator.clipboard.writeText(`${text}\n${url}`);
            setSharedId(nameItem.id);
            setTimeout(() => setSharedId(null), 2000);
          }
        });
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${url}`);
      setSharedId(nameItem.id);
      setTimeout(() => setSharedId(null), 2000);
    }
  }, []);

  // Trigger browser print dialog for PDF generation
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  // Reset all filters
  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setGenderFilter("all");
    setCategoryFilter("all");
    setSelectedLetter("");
  }, []);

  // Filter computation
  const filteredNames = useMemo(() => {
    return ISLAMIC_NAMES_DATABASE.filter((item) => {
      // Gender filter
      if (genderFilter !== "all" && item.gender !== genderFilter) {
        return false;
      }

      // Letter filter
      if (selectedLetter && !item.name.toUpperCase().startsWith(selectedLetter)) {
        return false;
      }

      // Category filter
      if (categoryFilter === "bookmarked") {
        if (!bookmarks.includes(item.id)) return false;
      } else if (categoryFilter === "top") {
        if (!item.isTopName) return false;
      } else if (categoryFilter === "prophetic") {
        if (item.category !== "prophetic") return false;
      } else if (categoryFilter === "quranic") {
        if (item.category !== "quranic") return false;
      } else if (categoryFilter === "sahaba") {
        if (item.category !== "sahaba") return false;
      } else if (categoryFilter === "virtues") {
        if (item.category !== "virtues") return false;
      }

      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesTranslit = item.transliteration?.toLowerCase().includes(query) ?? false;
        const matchesArabic = item.arabic.includes(query);
        const matchesMeaning = item.meaning.toLowerCase().includes(query);
        const matchesOrigin = item.origin.toLowerCase().includes(query);

        if (!matchesName && !matchesTranslit && !matchesArabic && !matchesMeaning && !matchesOrigin) {
          return false;
        }
      }

      return true;
    });
  }, [genderFilter, selectedLetter, categoryFilter, searchQuery, bookmarks]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    genderFilter !== "all" ||
    categoryFilter !== "all" ||
    selectedLetter !== "";

  // Pagination calculations
  const totalItems = filteredNames.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedNames = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * pageSize;
    return filteredNames.slice(startIndex, startIndex + pageSize);
  }, [filteredNames, safeCurrentPage, pageSize]);

  // Reset to page 1 on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, genderFilter, categoryFilter, selectedLetter]);

  const paginationRange = useMemo(() => {
    const delta = 1;
    const range: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= safeCurrentPage - delta && i <= safeCurrentPage + delta)
      ) {
        range.push(i);
      } else if (
        (i === safeCurrentPage - delta - 1 && i > 1) ||
        (i === safeCurrentPage + delta + 1 && i < totalPages)
      ) {
        range.push("...");
      }
    }
    return range.filter((item, index) => range.indexOf(item) === index);
  }, [totalPages, safeCurrentPage]);

  // Structured Data (JSON-LD Schema Graph)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/islamic-baby-names/#app",
        "name": "Islamic Baby Names Finder & PDF Export",
        "url": "https://islamhub.com/tools/islamic-baby-names/",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Modern web browser with client-side LocalStorage support.",
        "description": "Interactive Islamic baby names discovery engine with verified Arabic script, concise meanings, PDF printing, bookmarking, and zero-latency client search.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/islamic-baby-names/#breadcrumb",
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
            "name": "Islamic Baby Names Finder",
            "item": "https://islamhub.com/tools/islamic-baby-names/"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://islamhub.com/tools/islamic-baby-names/#howto",
        "name": "How to Choose an Authentic Islamic Name for Your Baby",
        "description": "Authentic Sunnah guidelines and fiqh criteria for selecting a blessed, meaningful Islamic name for Muslim newborns.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Prioritize Good Meanings",
            "text": "Choose names that express servitude to Allah (like Abdullah and Abdur-Rahman) or reflect commendable moral attributes."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Explore Quranic & Prophetic Names",
            "text": "Draw inspiration from the 25 Prophets named in the Quran, righteous family members, and the noble Sahaba."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Verify Etymology & Pronunciation",
            "text": "Cross-reference the Arabic root in classical lexicons to ensure the transliteration preserves original meaning."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Avoid Forbidden & Unfavorable Names",
            "text": "Steer clear of names claiming divine servitude to non-Allah entities, names of tyrants, or words with depressing connotations."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://islamhub.com/tools/islamic-baby-names/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should a newborn baby be named in Islam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to the authentic Sunnah, a newborn may be named either on the day of birth (as the Prophet ﷺ named his son Ibrahim on the day he was born) or preferably on the seventh day during the Aqeeqah ceremony, when the child's hair is weighed for charity and sacrifices are offered."
            }
          },
          {
            "@type": "Question",
            "name": "Can I choose a name not explicitly mentioned in the Quran?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Islamic jurisprudence permits any name from any language or culture provided it carries a wholesome, dignified meaning, does not contradict Islamic monotheism (Tawheed), does not imply servitude to other than Allah (like Abdul-Nabi or Abdul-Kaaba), and has no negative or arrogant connotations."
            }
          },
          {
            "@type": "Question",
            "name": "What are the most recommended Islamic boy and girl names?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For boys, the Prophet (ﷺ) explicitly stated in Sahih Muslim that the most beloved names to Allah are 'Abdullah and 'Abdur-Rahman, followed by the names of the Prophets (Muhammad, Ibrahim, Yusuf, Musa). For girls, names of the Prophet's daughters (Fatima, Zainab, Ruqayyah, Umm Kulthum), Mothers of the Believers (Khadijah, Aisha, Maryam), and noble companions are universally favored."
            }
          },
          {
            "@type": "Question",
            "name": "Is it permissible to change a name with an unfavorable meaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is highly recommended (Mustahabb) and a recognized Sunnah. The Prophet Muhammad (ﷺ) frequently changed the names of companions whose pre-Islamic names carried bad, gloomy, or arrogant connotations."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "When should a newborn baby be named in Islam?",
      a: "According to the authentic Sunnah, parents have flexibility: a child may be named on the very day of birth (as the Prophet ﷺ named his son Ibrahim upon delivery, narrated in Sahih Muslim), or on the seventh day concurrent with the Aqeeqah celebration, shaving of the infant's hair, and offering silver charity (Sunan Abi Dawud 2838)."
    },
    {
      q: "Can I choose a name not explicitly mentioned in the Quran?",
      a: "Yes. In Islamic Fiqh, the baseline ruling regarding names is permissibility (Al-Aslu fil-Ashya'i al-Ibahah). Any name in any language is permissible as long as its meaning is noble, respectful, does not promote polytheism (Shirk), and does not mimic enemies of faith or immoral figures."
    },
    {
      q: "What are the most recommended Islamic boy and girl names?",
      a: "For boys, Sahih Muslim (2132) records that the names most beloved to Allah are 'Abdullah and 'Abdur-Rahman, followed by the names of Prophets (Muhammad, Ibrahim, Yunus, Musa). For girls, the Quran explicitly honors Maryam (AS), while the Sunnah celebrates the Prophet's household: Fatima, Khadijah, Aisha, Zainab, and Asma."
    },
    {
      q: "Is it permissible to change a name with an unfavorable meaning?",
      a: "Yes, it is not only permissible but an established prophetic practice. The Prophet (ﷺ) consistently altered names with pessimistic or vain connotations, such as changing 'Aasiyah' (Disobedient) to 'Jameelah' (Beautiful) and 'Harb' (War) to 'Silm' (Peace)."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection & Canonical Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/islamic-baby-names/" />

      {/* Clean Black & White Print Styling for PDF Export */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          .no-print, header, nav, footer, section:not(#names-grid-section) {
            display: none !important;
          }
          #print-header {
            display: block !important;
            margin-bottom: 24px;
            border-bottom: 2px solid #000;
            padding-bottom: 12px;
          }
          #names-grid-section {
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .name-card {
            background: #ffffff !important;
            border: 1px solid #cccccc !important;
            color: #000000 !important;
            box-shadow: none !important;
            page-break-inside: avoid;
            margin-bottom: 12px;
          }
          .name-card h3, .name-card p, .name-card span, .name-card div {
            color: #000000 !important;
          }
          .print-badge {
            border: 1px solid #777 !important;
            background: #eee !important;
            color: #000 !important;
          }
        }
        @media screen {
          #print-header {
            display: none !important;
          }
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* PRINT-ONLY HEADER */}
        <div id="print-header" className="text-black">
          <h1 className="text-2xl font-bold">IslamHub — Islamic Baby Names Directory</h1>
          <p className="text-sm text-gray-700 mt-1">
            Generated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • Verified authentic meanings and Arabic scripts.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Total Names in Export: {filteredNames.length} {hasActiveFilters ? "(Filtered View)" : ""}
          </p>
        </div>

        {/* SECTION 1: HEADER & BREADCRUMBS */}
        <header className="space-y-4 no-print">
          <nav aria-label="Breadcrumbs" className="flex items-center text-xs font-medium text-slate-400 space-x-2 flex-wrap gap-y-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/tools/" className="hover:text-white transition-colors">Islamic Tools</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Islamic Baby Names</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-800 text-white text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Discovery Engine • Instant PDF Export</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Islamic Baby Names Finder — Authentic Quranic &amp; Prophetic Meanings
            </h1>

            {/* E-E-A-T Trust Badge Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5 bg-neutral-800 border border-neutral-800 rounded-full px-3 py-1 text-white font-semibold text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Arabic Etymology • Authentic Quranic References • Scholarly Approved Meanings</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1 text-slate-300 text-xs">
                <Lock className="w-3.5 h-3.5 text-white" />
                <span>100% Client-Side Privacy: No Personal Data Stored</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 text-slate-400 text-xs">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>Scholarly Verified Definitions</span>
              </div>
            </div>
          </div>

          {/* Direct Answer Summary Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-sm text-xs sm:text-sm text-slate-300 leading-relaxed shadow-lg">
            <span className="font-semibold text-white mr-1.5">Direct Overview:</span>
            Naming a child is one of the earliest spiritual gifts and parental duties in Islam. The Prophet Muhammad (ﷺ) advised parents to bestow noble, beautiful names with wholesome meanings that reflect devotion to Allah, moral fortitude, and Islamic heritage. Use our interactive finder to search authentic Arabic names, explore concise meanings, save bookmarks, or export/print your custom list.
          </div>

          {/* Dedicated Sub-Directories Navigation Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools/islamic-baby-names/boys/"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-white font-semibold text-xs sm:text-sm transition-all shadow-md group"
            >
              <span>👦 Explore Dedicated Boy Names Directory</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>

            <Link
              href="/tools/islamic-baby-names/girls/"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 hover:text-white font-semibold text-xs sm:text-sm transition-all shadow-md group"
            >
              <span>👧 Explore Dedicated Girl Names Directory</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </header>

        {/* SECTION 2: EXPANDED DIRECT OVERVIEW TEXT BLOCK */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl no-print space-y-3">
          <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
            <BookOpenCheck className="w-4 h-4" />
            <span>Islamic Jurisprudence &amp; Sunnah Naming Traditions</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In Islamic tradition, choosing an honorable, meaningful name for your newborn child is one of the earliest and most sacred duties of Muslim parenthood. The Prophet Muhammad (ﷺ) taught that a person&apos;s name serves as their identity not only in this worldly life but also on the Day of Resurrection, when every soul will be called before Allah by their name and their father&apos;s name. Authentic Sunnah traditions encourage parents to bestow names with uplifting, pious meanings—such as expressions of devotion to the Creator through the prefixes of servitude (<em>&apos;Abdullah</em> and <em>&apos;Abdur-Rahman</em>), emulation of the 25 noble Prophets (<em>Anbiya</em>), and the legacy of the virtuous Companions (<em>Sahaba</em> and <em>Sahabiyyat</em>).
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
            According to sound Hadith literature, the recommended Sunnah practice is to name the child either on the day of birth or on the auspicious seventh day during the Aqeeqah ceremony. On the seventh day, parents observe the rites of offering an Aqeeqah sacrifice (two sheep for a boy, one sheep for a girl), performing Tahneek, shaving the baby&apos;s newborn hair and giving its weight in silver as charity (<em>Sadaqah</em>) to the poor, and officially announcing the child&apos;s noble name.
          </p>
        </section>

        {/* SECTION 3: 4 HIGH-CONTRAST STEP CARDS ("HOW TO CHOOSE") */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl no-print">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-white" />
              <span>How to Choose an Authentic Islamic Name for Your Baby</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Follow these four foundational Islamic principles derived from the Quran and authentic Hadith literature when naming your newborn:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Prioritize Names of Devotion &amp; Servitude
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Select names that express servitude to Allah with prefixes like <strong className="text-white">&apos;Abdullah</strong> and <strong className="text-white">&apos;Abdur-Rahman</strong>, or signify righteous virtues such as patience (Sabr), gratitude (Shukr), and purity.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Emulate the Prophets &amp; Noble Sahaba
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Adopt the blessed names of the 25 Prophets (e.g., Muhammad, Ibrahim, Yusuf, Musa) and illustrious companions (e.g., Maryam, Fatima, Aisha, Omar, Ali, and Zayd).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Verify Classical Arabic Etymology
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Confirm the Arabic root (<em>Jidhr</em>) in classical lexicons to ensure accurate vowel diacritics and eliminate misleading phonetic transliterations.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Avoid Prohibited &amp; Pessimistic Titles
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Shun names implying servitude to creation (e.g., Abdul-Nabi), names reserved strictly for Allah (e.g., Al-Khaliq), tyrants&apos; names (Pharaoh), or words denoting gloom or vanity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VISUAL ASSET PLACEHOLDER WITH ALT TEXT & CAPTION */}
        <figure className="no-print bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl space-y-0">
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=80"
              alt="Artistic Islamic calligraphy and architectural illumination representing authentic baby names with pious Quranic and Prophetic meanings"
              className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-neutral-800 text-white text-[11px] font-semibold backdrop-blur-md flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-white" />
                <span>Islamic Etymology &amp; Calligraphy Heritage</span>
              </div>
            </div>
          </div>
          <figcaption className="p-3 sm:p-4 text-xs text-slate-400 bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-slate-800/60">
            <span className="text-slate-300 font-medium">
              Figure 1: Sacred Quranic Arabic calligraphy and timeless naming traditions in Islamic heritage.
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Curated from Authentic Sunnah &amp; Classical Lexicons
            </span>
          </figcaption>
        </figure>

        {/* SECTION 5: INTERACTIVE DISCOVERY ENGINE */}
        <section
          id="names-grid-section"
          aria-label="Islamic Baby Names Discovery Engine"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md space-y-5"
        >
          {/* Main Search, Print & Gender Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 no-print">
            {/* Real-time Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, Arabic, or meaning..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-950/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Gender Filter Tabs */}
            <div className="lg:col-span-4 flex bg-slate-950/90 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                type="button"
                onClick={() => setGenderFilter("all")}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  genderFilter === "all"
                    ? "bg-white text-black font-bold shadow-md shadow-neutral-950/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setGenderFilter("boy")}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                  genderFilter === "boy"
                    ? "bg-white text-black font-bold shadow-md shadow-neutral-950/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>👦</span>
                <span>Boy</span>
              </button>
              <button
                type="button"
                onClick={() => setGenderFilter("girl")}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                  genderFilter === "girl"
                    ? "bg-white text-black font-bold shadow-md shadow-neutral-950/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>👧</span>
                <span>Girl</span>
              </button>
              <button
                type="button"
                onClick={() => setGenderFilter("unisex")}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                  genderFilter === "unisex"
                    ? "bg-white text-black font-bold shadow-md shadow-neutral-950/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>⚖️</span>
                <span>Unisex</span>
              </button>
            </div>

            {/* Print / Save as PDF Button */}
            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-950/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-neutral-600 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-inner group"
                title="Print current list or save as PDF"
              >
                <Printer className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

          {/* Alphabetical A–Z Index Bar */}
          <div className="pt-2 border-t border-slate-800/70 space-y-2 no-print">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Alphabetical Index (A–Z)
              </span>
              {selectedLetter && (
                <button
                  type="button"
                  onClick={() => setSelectedLetter("")}
                  className="text-[11px] text-white hover:text-white font-semibold"
                >
                  Clear Letter Filter ({selectedLetter})
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setSelectedLetter("")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                  selectedLetter === ""
                    ? "bg-white text-black border-neutral-800 shadow-sm"
                    : "bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                All
              </button>
              {ALPHABET.map((letter) => {
                const isSelected = selectedLetter === letter;
                const hasNamesStartingWith = ISLAMIC_NAMES_DATABASE.some((n) =>
                  n.name.toUpperCase().startsWith(letter)
                );
                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setSelectedLetter(isSelected ? "" : letter)}
                    disabled={!hasNamesStartingWith}
                    className={`w-7 h-7 sm:w-8 sm:h-8 text-xs font-bold rounded-lg border flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-white text-black border-neutral-800 shadow-md shadow-neutral-950/50"
                        : hasNamesStartingWith
                        ? "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-neutral-600 hover:text-white"
                        : "bg-slate-950/30 text-slate-600 border-slate-900 cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Shortcut Pills & Bookmarks Toggle */}
          <div className="pt-2 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-2 no-print">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                Categories:
              </span>
              <button
                type="button"
                onClick={() => setCategoryFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  categoryFilter === "all"
                    ? "bg-neutral-800 text-white border-neutral-800"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                All Names
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("top")}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all flex items-center gap-1 ${
                  categoryFilter === "top"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Top Names</span>
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("prophetic")}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  categoryFilter === "prophetic"
                    ? "bg-neutral-800 text-white border-neutral-800"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                Prophetic
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("quranic")}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  categoryFilter === "quranic"
                    ? "bg-neutral-800 text-white border-neutral-800"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                Quranic
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("sahaba")}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  categoryFilter === "sahaba"
                    ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                Sahaba
              </button>
            </div>

            {/* Saved Bookmarks Shortcut Button */}
            <button
              type="button"
              onClick={() => setCategoryFilter(categoryFilter === "bookmarked" ? "all" : "bookmarked")}
              className={`px-3 py-1 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 ${
                categoryFilter === "bookmarked"
                  ? "bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20"
                  : "bg-slate-950/90 text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${categoryFilter === "bookmarked" ? "fill-slate-950" : "fill-amber-400"}`} />
              <span>Saved Bookmarks ({hasMounted ? bookmarks.length : 0})</span>
            </button>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1 no-print">
            <div className="flex items-center gap-2 flex-wrap">
              <span>
                Showing <strong className="text-white font-bold">{filteredNames.length}</strong> of{" "}
                {ISLAMIC_NAMES_DATABASE.length} names
              </span>
              {hasActiveFilters && (
                <span className="text-white bg-neutral-800 px-2 py-0.5 rounded-md border border-neutral-800">
                  Filters applied
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-red-400 font-semibold transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Name Cards Grid */}
          {filteredNames.length === 0 ? (
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-10 text-center space-y-4">
              <Baby className="w-12 h-12 text-slate-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white">No Islamic names matched your search criteria</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  {categoryFilter === "bookmarked"
                    ? "You haven't saved any bookmarked names yet. Tap the bookmark star on any card to save it for later."
                    : "Try broadening your query, adjusting gender filters, or clearing the active A-Z letter selection."}
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-neutral-800 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-neutral-950/50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {paginatedNames.map((item) => {
                  const isBookmarked = hasMounted && bookmarks.includes(item.id);
                  const isCopied = copiedId === item.id;
                  const isShared = sharedId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="name-card group bg-slate-950/70 border border-slate-800 hover:border-neutral-600 rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-neutral-950/50 backdrop-blur-sm relative"
                    >
                      {/* Header Row: English Name + Transliteration alongside Arabic Calligraphy */}
                      <div className="space-y-2.5 sm:space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors">
                              {item.name}
                            </h3>
                            {item.transliteration && (
                              <span className="text-xs text-slate-400 font-mono">
                                {item.transliteration}
                              </span>
                            )}
                          </div>

                          {/* Arabic Calligraphy */}
                          <div
                            className="font-serif text-xl sm:text-2xl text-white font-bold leading-none select-all shrink-0 pt-0.5 text-right"
                            dir="rtl"
                          >
                            {item.arabic}
                          </div>
                        </div>

                        {/* Meta Badge Row: Gender Badge + Origin Pill */}
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span
                            className={`print-badge text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 rounded-full border ${
                              item.gender === "boy"
                                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                : item.gender === "girl"
                                ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                : "bg-neutral-800 text-white border-neutral-800"
                            }`}
                          >
                            {item.gender === "boy" ? "👦 Boy" : item.gender === "girl" ? "👧 Girl" : "⚖️ Unisex"}
                          </span>
                          <span className="print-badge text-[10px] font-semibold text-slate-300 bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded-full">
                            {item.origin}
                          </span>
                        </div>

                        {/* Concise Meaning: Single short clear English definition, line clamped on mobile */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {item.meaning}
                        </p>
                      </div>

                      {/* Action Bar: Copy Name, Bookmark/Favorite, Share */}
                      <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs no-print gap-1">
                        {/* Copy Name */}
                        <button
                          type="button"
                          onClick={() => handleCopyName(item)}
                          className={`inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border transition-all text-xs font-semibold ${
                            isCopied
                              ? "bg-neutral-800 text-white border-neutral-800"
                              : "bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700"
                          }`}
                          title="Copy name and meaning"
                          aria-label="Copy name and meaning"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span className="hidden sm:inline">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </button>

                        {/* Share Button */}
                        <button
                          type="button"
                          onClick={() => handleShareName(item)}
                          className={`inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border transition-all text-xs font-semibold ${
                            isShared
                              ? "bg-neutral-800 text-white border-neutral-800"
                              : "bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700"
                          }`}
                          title="Share name details"
                          aria-label="Share name details"
                        >
                          {isShared ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span className="hidden sm:inline">Shared</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5 text-slate-400" />
                              <span className="hidden sm:inline">Share</span>
                            </>
                          )}
                        </button>

                        {/* Bookmark Toggle Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleBookmark(item.id)}
                          className={`inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border transition-all text-xs font-semibold ${
                            isBookmarked
                              ? "bg-amber-400/10 text-amber-400 border-amber-400/30"
                              : "bg-slate-900 text-slate-400 border-slate-800 hover:text-amber-400 hover:border-slate-700"
                          }`}
                          title={isBookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
                          aria-label={isBookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
                        >
                          <Star
                            className={`w-3.5 h-3.5 ${
                              isBookmarked ? "fill-amber-400 text-amber-400" : "text-slate-400"
                            }`}
                          />
                          <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-800/80 no-print">
                  <div className="text-xs text-slate-400">
                    Showing{" "}
                    <span className="font-semibold text-white">
                      {(safeCurrentPage - 1) * pageSize + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-white">
                      {Math.min(safeCurrentPage * pageSize, totalItems)}
                    </span>{" "}
                    of <span className="font-semibold text-white">{totalItems}</span> names
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Previous Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={safeCurrentPage === 1}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Previous
                    </button>

                    {/* Page Numbers */}
                    {paginationRange.map((page, idx) => {
                      if (page === "...") {
                        return (
                          <span key={`ellipsis-${idx}`} className="px-2 text-xs text-slate-500 font-mono">
                            ...
                          </span>
                        );
                      }
                      const pageNum = page as number;
                      const isCurrent = pageNum === safeCurrentPage;
                      return (
                        <button
                          key={`page-${pageNum}`}
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 text-xs font-bold rounded-lg border transition-all ${
                            isCurrent
                              ? "bg-white text-black border-neutral-800 shadow-md shadow-neutral-950/50"
                              : "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={safeCurrentPage === totalPages}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {/* SECTION 6: DEEP TOPICAL READING BLOCK (300+ WORDS, 3 SUB-CARDS) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl no-print">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Classical Islamic Lexicography &amp; Taxonomy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              The Three Sacred Spheres of Islamic Baby Names
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Islamic scholars categorize noble names into distinct hierarchical spheres, prioritizing spiritual alignment with Tawheed, reverence for divine revelation, and celebration of righteous Islamic heritage. Understanding these spheres assists Muslim parents in selecting an identity that inspires lifelong piety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Sub-Card 1: Asma-ul-Husna & Servitude */}
            <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-bold flex items-center justify-center text-xs">
                  01
                </div>
                <h3 className="text-sm font-bold text-white">
                  Names of Devotion &amp; Asma-ul-Husna
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The highest tier in Islamic naming encompasses names formed by coupling the prefix <em>&apos;Abd</em> (Servant of) with one of Allah&apos;s Ninety-Nine Beautiful Names (<em>Al-Asma-ul-Husna</em>), such as <strong>&apos;Abdullah</strong>, <strong>&apos;Abdur-Rahman</strong>, <strong>&apos;Abdul-Malik</strong>, and <strong>&apos;Abdul-Karim</strong>. These names embody humility, perpetual gratitude, and conscious servitude before the Divine Majesty.
                </p>
              </div>
              <div className="text-[11px] text-white font-mono pt-2 border-t border-slate-900">
                Category: Highest Sunnah Priority
              </div>
            </div>

            {/* Sub-Card 2: Prophetic & Sahaba Heritage */}
            <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                  02
                </div>
                <h3 className="text-sm font-bold text-white">
                  Prophetic &amp; Sahaba Heritage
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Honoring the 25 Messengers named in the Holy Quran (e.g., <strong>Muhammad</strong>, <strong>Ibrahim</strong>, <strong>Yusuf</strong>, <strong>Musa</strong>, <strong>Isa</strong>) and the pious early generations (<em>Sahaba</em> &amp; <em>Sahabiyyat</em> like <strong>Fatima</strong>, <strong>Khadijah</strong>, <strong>Aisha</strong>, <strong>Ali</strong>, <strong>Omar</strong>, and <strong>Zayd</strong>). These names instill historical connection and moral fortitude in a developing child.
                </p>
              </div>
              <div className="text-[11px] text-blue-400/90 font-mono pt-2 border-t border-slate-900">
                Category: Noble Role Model Emulation
              </div>
            </div>

            {/* Sub-Card 3: Soft Quranic Nouns & Virtues */}
            <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-bold flex items-center justify-center text-xs">
                  03
                </div>
                <h3 className="text-sm font-bold text-white">
                  Soft Quranic Nouns &amp; Virtues
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Linguistic expressions and natural wonders praised in the Quran, such as <strong>Noor</strong> (Divine Light), <strong>Aya</strong> (Miraculous Sign), <strong>Jannat</strong> (Gardens of Paradise), <strong>Tasneem</strong> (Celestial Fountain), <strong>Rayyan</strong> (Gate of Fasting), and <strong>Sidra</strong> (Sacred Lote Tree). These names reflect refined beauty, spiritual tranquility, and literary elegance.
                </p>
              </div>
              <div className="text-[11px] text-white font-mono pt-2 border-t border-slate-900">
                Category: Classical Quranic Nouns
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SYMMETRICAL 2-COLUMN HADITH REFERENCE CARDS */}
        <section className="space-y-4 no-print">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-white" />
              <span>Authentic Hadith Foundations on Child Naming</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Verified prophetic traditions establishing the eternal spiritual weight and etiquettes of naming in Islam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hadith 1: Sunan Abi Dawud 4948 */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-800">
                  Sunan Abi Dawud 4948
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Grade: Hasan / Sahih</span>
              </div>

              <div className="font-serif text-lg text-white leading-relaxed" dir="rtl">
                إِنَّكُمْ تُدْعَوْنَ يَوْمَ الْقِيَامَةِ بِأَسْمَائِكُمْ وَأَسْمَاءِ آبَائِكُمْ فَأَحْسِنُوا أَسْمَاءَكُمْ
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-neutral-800 pl-3 leading-relaxed">
                &quot;On the Day of Resurrection you will be called by your names and the names of your fathers, so have good names.&quot;
              </blockquote>

              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Scholarly Takeaway:</strong> A person&apos;s name endures into the Hereafter. Bestowing a beautiful, pious name honors the child in both this worldly life and when standing before Allah.
              </p>
            </div>

            {/* Hadith 2: Sahih Muslim 2132 */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-800">
                  Sahih Muslim 2132
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Grade: Sahih (Authentic)</span>
              </div>

              <div className="font-serif text-lg text-white leading-relaxed" dir="rtl">
                أَحَبُّ الأَسْمَاءِ إِلَى اللَّهِ عَبْدُ اللَّهِ وَعَبْدُ الرَّحْمَنِ
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-neutral-800 pl-3 leading-relaxed">
                &quot;The most beloved of names to Allah the Almighty are &apos;Abdullah and &apos;Abdur-Rahman.&quot;
              </blockquote>

              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Scholarly Takeaway:</strong> Names signifying unadulterated servitude (Ubudiyyah) to Allah and His supreme attributes of mercy are divinely beloved above all other titles.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5 shadow-xl no-print">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-white" />
              <span>Frequently Asked Questions About Islamic Baby Names</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Authoritative answers to common questions regarding naming etiquette, rulings, and Sunnah practices.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className="bg-slate-950/70 border border-slate-800/90 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "-rotate-180 text-white" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 9: SILO NAVIGATION & RELATED TOOLS */}
        <section className="space-y-5 pt-2 no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-white" />
                <span>Explore Sibling Islamic Digital Utilities</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Navigate back to the master tools directory or explore our other verified interactive utilities.
              </p>
            </div>
            <Link
              href="/tools/"
              className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-white self-start sm:self-auto transition-colors"
            >
              <span>← Back to All Islamic Tools</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tool 1: Islamic Calendar 2026 */}
            <Link
              href="/tools/islamic-calendar-2026"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-950/50"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Islamic Calendar 2026
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  Synchronized Hijri 1447–1448 AH and Gregorian calendar with key Islamic dates.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold">
                <span>View Calendar</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Tool 2: Digital Tasbeeh Counter */}
            <Link
              href="/tools/tasbeeh-counter"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-950/50"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
                  <Repeat className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Digital Tasbeeh Counter
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  Real-time dhikr and salawat tracker with haptic tap feedback and saved laps.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold">
                <span>Count Dhikr</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Tool 3: Online Qibla Finder */}
            <Link
              href="/tools/qibla-finder"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-950/50"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Online Qibla Finder
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  Browser-based GPS compass calculating true azimuth direction to the Kaaba.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold">
                <span>Find Qibla</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Tool 4: Universal Zakat Calculator */}
            <Link
              href="/zakat-calculator"
              className="group bg-slate-900/60 border border-slate-800 hover:border-neutral-600 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-950/50"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Universal Zakat Calculator
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  Complete wealth &amp; asset calculator evaluating cash, gold, and investments.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-white font-semibold">
                <span>Calculate Zakat</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
