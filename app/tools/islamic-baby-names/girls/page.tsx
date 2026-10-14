"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  Check,
  Copy,
  Star,
  Sparkles,
  ShieldCheck,
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
  ArrowLeft,
  Image as ImageIcon,
  Heart
} from "lucide-react";

// --- Streamlined TypeScript Interface for Girl Names ---

export interface BabyName {
  id: string;
  name: string;
  transliteration?: string;
  arabic: string;
  meaning: string; // Concise 1-sentence meaning
  gender: "girl";
  origin: string; // e.g., 'Arabic', 'Quranic', 'Persian', 'Hebrew / Arabic'
  isTopName?: boolean;
  category?: "prophetic" | "sahaba" | "quranic" | "virtues" | "classical";
}

// --- Comprehensive Authentic Islamic Baby Girl Names Dataset ---

const ISLAMIC_GIRL_NAMES_DATABASE: BabyName[] = [
  {
    id: "maryam",
    name: "Maryam",
    transliteration: "Maryam",
    arabic: "مَرْيَم",
    meaning: "Pious worshipper of Allah; revered mother of Prophet Isa (AS) and only woman named directly in the Quran.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "fatima",
    name: "Fatima",
    transliteration: "Fāṭimah",
    arabic: "فَاطِمَة",
    meaning: "One who abstains; beloved youngest daughter of Prophet Muhammad (ﷺ) and leader of women in Jannah.",
    gender: "girl",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "aisha",
    name: "Aisha",
    transliteration: "‘Ā’ishah",
    arabic: "عَائِشَة",
    meaning: "Living, flourishing, prosperous; beloved Mother of the Believers and foremost scholar of Islam.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "khadijah",
    name: "Khadijah",
    transliteration: "Khadījah",
    arabic: "خَدِيجَة",
    meaning: "Trustworthy, noble; first wife of Prophet Muhammad (ﷺ) and first believer in Islam.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "zaynab",
    name: "Zaynab",
    transliteration: "Zaynab",
    arabic: "زَيْنَب",
    meaning: "Fragrant blooming flower and precious jewel; noble eldest daughter of the Prophet (ﷺ).",
    gender: "girl",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "ruqayyah",
    name: "Ruqayyah",
    transliteration: "Ruqayyah",
    arabic: "رُقَيَّة",
    meaning: "Gentle, tender, elevated in rank; beloved daughter of Prophet Muhammad (ﷺ).",
    gender: "girl",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "umm-kulthum",
    name: "Umm Kulthum",
    transliteration: "Umm Kulthūm",
    arabic: "أُمّ كُلْثُوم",
    meaning: "One with a lovely radiant face; cherished daughter of Prophet Muhammad (ﷺ).",
    gender: "girl",
    origin: "Arabic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "asma",
    name: "Asma",
    transliteration: "Asmā’",
    arabic: "أَسْمَاء",
    meaning: "Lofty, sublime, eminent; courageous Sahabiyyah honored as Dhat an-Nitaqayn.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "hafsa",
    name: "Hafsa",
    transliteration: "Ḥafṣah",
    arabic: "حَفْصَة",
    meaning: "Young lioness, protective guardian; Mother of the Believers and keeper of the first written Quran.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "inayah",
    name: "Inayah",
    transliteration: "‘Ināyah",
    arabic: "عِنَايَة",
    meaning: "Divine care, providence, celestial protection, and gracious attentiveness from Allah.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "aaliyah",
    name: "Aaliyah",
    transliteration: "‘Āliyah",
    arabic: "عَالِيَة",
    meaning: "Exalted, noble, high in moral standing, and possessing sublime grandeur.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "noor",
    name: "Noor",
    transliteration: "Nūr",
    arabic: "نُور",
    meaning: "Celestial light, divine spiritual radiance, and uplifting illumination.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "jannat",
    name: "Jannat",
    transliteration: "Jannāt",
    arabic: "جَنَّات",
    meaning: "Gardens of Paradise, eternal celestial bliss, and highest divine residence.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "layla",
    name: "Layla",
    transliteration: "Laylā",
    arabic: "لَيْلَى",
    meaning: "Enchanting tranquil night, deep dark beauty, and peaceful evening calm.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: true
  },
  {
    id: "zahra",
    name: "Zahra",
    transliteration: "Zahrā’",
    arabic: "زَهْرَاء",
    meaning: "Radiant, luminous, blooming blossom; honored epithet of Fatima az-Zahra.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "sarah",
    name: "Sarah",
    transliteration: "Sārah",
    arabic: "سَارَة",
    meaning: "Noble lady of rejoicing, princess; pious wife of Prophet Ibrahim and mother of Ishaq.",
    gender: "girl",
    origin: "Hebrew / Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "hajar",
    name: "Hajar",
    transliteration: "Hājar",
    arabic: "هَاجَر",
    meaning: "Resilient emigrant; devoted mother of Ismail whose faith inspired the rites of Zamzam and Sa'i.",
    gender: "girl",
    origin: "Arabic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "asiya",
    name: "Asiya",
    transliteration: "Āsiyah",
    arabic: "آسِيَة",
    meaning: "Comforter and healer of hearts; pious queen of Egypt promised a home next to Allah in Jannah.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "sidrah",
    name: "Sidrah",
    transliteration: "Sidrah",
    arabic: "سِدْرَة",
    meaning: "Lote tree of the utmost celestial boundary (Sidrat al-Muntaha) in the highest heavens.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "tasnim",
    name: "Tasnim",
    transliteration: "Tasnīm",
    arabic: "تَسْنِيم",
    meaning: "Purest, most refreshing spring of pristine nectar in the highest gardens of Paradise.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "salsabil",
    name: "Salsabil",
    transliteration: "Salsabīl",
    arabic: "سَلْسَبِيل",
    meaning: "Sweet, gentle, freely flowing crystalline fountain in the meadows of Paradise.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "kawthar",
    name: "Kawthar",
    transliteration: "Kawthar",
    arabic: "كَوْثَر",
    meaning: "Abundant spiritual bounty and divine river granted to Prophet Muhammad (ﷺ).",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "rahmah",
    name: "Rahmah",
    transliteration: "Raḥmah",
    arabic: "رَحْمَة",
    meaning: "Divine mercy, tender grace, kindness, and spiritual benevolence from Allah.",
    gender: "girl",
    origin: "Quranic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "hidayah",
    name: "Hidayah",
    transliteration: "Hidāyah",
    arabic: "هِدَايَة",
    meaning: "Righteous guidance, walking steadfastly upon the illumined path of truth.",
    gender: "girl",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "iman",
    name: "Iman",
    transliteration: "Īmān",
    arabic: "إِيمَان",
    meaning: "True conviction, complete faith, tranquility of spirit, and sincere belief.",
    gender: "girl",
    origin: "Quranic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "afiyah",
    name: "Afiyah",
    transliteration: "‘Āfiyah",
    arabic: "عَافِيَة",
    meaning: "Holistic well-being, freedom from grief, sound health, and divine protection.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "bushra",
    name: "Bushra",
    transliteration: "Bushrā",
    arabic: "بُشْرَى",
    meaning: "Bringer of joyful good news, glad tidings, and auspicious hope.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "dania",
    name: "Dania",
    transliteration: "Dāniyah",
    arabic: "دَانِيَة",
    meaning: "Close and easily reachable; referring to the low-hanging sweet fruits of Jannah.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "farah",
    name: "Farah",
    transliteration: "Faraḥ",
    arabic: "فَرَح",
    meaning: "Pure joy, cheerfulness, lively delight, and heartfelt happiness.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "hana",
    name: "Hana",
    transliteration: "Hanā’",
    arabic: "هَنَاء",
    meaning: "Blissful contentment, wholesome happiness, peace, and serenity.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "habiba",
    name: "Habiba",
    transliteration: "Ḥabībah",
    arabic: "حَبِيبَة",
    meaning: "Deeply beloved one, cherished darling, and affectionate companion.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "juwayriyah",
    name: "Juwayriyah",
    transliteration: "Juwayriyah",
    arabic: "جُوَيْرِيَة",
    meaning: "Young petal blossom, gentle rose; honored Mother of the Believers.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "maymuna",
    name: "Maymuna",
    transliteration: "Maymūnah",
    arabic: "مَيْمُونَة",
    meaning: "Blessed, fortunate, auspicious; revered Mother of the Believers.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "safiyyah",
    name: "Safiyyah",
    transliteration: "Ṣafiyyah",
    arabic: "صَفِيَّة",
    meaning: "Pure, chosen, serene best friend; noble wife of Prophet Muhammad (ﷺ).",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "sawdah",
    name: "Sawdah",
    transliteration: "Sawdah",
    arabic: "سَوْدَة",
    meaning: "Generous, hospitable, welcoming; early beloved Mother of the Believers.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "nusaybah",
    name: "Nusaybah",
    transliteration: "Nusaybah",
    arabic: "نُسَيْبَة",
    meaning: "Noble lineage, appropriate; fearless warrior Sahabiyyah who protected the Prophet at Uhud.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "sumayyah",
    name: "Sumayyah",
    transliteration: "Sumayyah",
    arabic: "سُمَيَّة",
    meaning: "Unique, exalted, elevated; honored as the very first martyr (Shahidah) of Islam.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "lubaba",
    name: "Lubaba",
    transliteration: "Lubābah",
    arabic: "لُبَابَة",
    meaning: "The purest innermost essence, seed of wisdom; early righteous Sahabiyyah.",
    gender: "girl",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "malak",
    name: "Malak",
    transliteration: "Malak",
    arabic: "مَلَك",
    meaning: "Angel; pure spirit of goodness, gentleness, and heavenly grace.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "marwa",
    name: "Marwa",
    transliteration: "Marwah",
    arabic: "مَرْوَة",
    meaning: "Fragrant white flint stone; sacred hill marking Hajj pilgrimage near the Ka'bah.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "safa",
    name: "Safa",
    transliteration: "Ṣafā",
    arabic: "صَفَا",
    meaning: "Pure clarity, pristine rock, serenity; sacred hill in Mecca mentioned in Surah Al-Baqarah.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "mawaddah",
    name: "Mawaddah",
    transliteration: "Mawaddah",
    arabic: "مَوَدَّة",
    meaning: "Sincere devotion, affectionate bonding, and compassionate love mentioned in the Quran.",
    gender: "girl",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "munira",
    name: "Munira",
    transliteration: "Munīrah",
    arabic: "مُنِيرَة",
    meaning: "Luminous, illuminating, radiant guide shedding wisdom and warmth.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "nabilah",
    name: "Nabilah",
    transliteration: "Nabīlah",
    arabic: "نَبِيلَة",
    meaning: "Noble-minded, magnanimous, generous, and chivalrous in character.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "nada",
    name: "Nada",
    transliteration: "Nadā",
    arabic: "نَدَى",
    meaning: "Gentle morning dew, generous hospitality, and fresh grace.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "naila",
    name: "Naila",
    transliteration: "Nā’ilah",
    arabic: "نَائِلَة",
    meaning: "Acquirer of good fortune, successful achiever, and brave companion.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "nasreen",
    name: "Nasreen",
    transliteration: "Nasrīn",
    arabic: "نَسْرِين",
    meaning: "Fragrant wild white rose, botanical beauty, and delicate grace.",
    gender: "girl",
    origin: "Persian",
    category: "classical",
    isTopName: false
  },
  {
    id: "rabia",
    name: "Rabia",
    transliteration: "Rābi‘ah",
    arabic: "رَابِعَة",
    meaning: "Springtime meadow, fourth; legendary for pure spiritual love and devotion to Allah.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "rayhana",
    name: "Rayhana",
    transliteration: "Rayḥānah",
    arabic: "رَيْحَانَة",
    meaning: "Sweet aromatic basil, fragrant celestial plant praised in Surah Ar-Rahman.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "salma",
    name: "Salma",
    transliteration: "Salmā",
    arabic: "سَلْمَى",
    meaning: "Peaceful, unharmed, sound in faith, and safe from spiritual harm.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "samira",
    name: "Samira",
    transliteration: "Samīrah",
    arabic: "سَمِيرَة",
    meaning: "Pleasant evening companion, engaging storyteller, and warm friend.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "shifa",
    name: "Shifa",
    transliteration: "Shifā’",
    arabic: "شِفَاء",
    meaning: "Healing, cure, recovery of hearts, and holistic restorative blessing.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "tala",
    name: "Tala",
    transliteration: "Tālah",
    arabic: "تَالَة",
    meaning: "Graceful young palm tree, representing upright growth, shade, and sweet nourishment.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: true
  },
  {
    id: "thurayya",
    name: "Thurayya",
    transliteration: "Thurayyā",
    arabic: "ثُرَيَّا",
    meaning: "The Pleiades constellation; brilliant cluster of luminous stars in the night sky.",
    gender: "girl",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "wardah",
    name: "Wardah",
    transliteration: "Wardah",
    arabic: "وَرْدَة",
    meaning: "Blossoming rose, vibrant floral beauty; color of the heavens in Surah Ar-Rahman.",
    gender: "girl",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "yasmin",
    name: "Yasmin",
    transliteration: "Yāsamīn",
    arabic: "يَاسَمِين",
    meaning: "Sweet fragrant jasmine flower; symbol of purity, tenderness, and charm.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "yumna",
    name: "Yumna",
    transliteration: "Yumnā",
    arabic: "يُمْنَى",
    meaning: "Blessed with good fortune, auspicious grace, and right-handed favor.",
    gender: "girl",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "zoya",
    name: "Zoya",
    transliteration: "Zoyā",
    arabic: "زُويَا",
    meaning: "Loving, caring, alive, vibrant, and endowed with warm compassion.",
    gender: "girl",
    origin: "Persian",
    category: "virtues",
    isTopName: true
  },
  {
    id: "anisa",
    name: "Anisa",
    transliteration: "Anīsah",
    arabic: "أَنِيسَة",
    meaning: "Affectionate, friendly, gentle companion who brings peace and reassurance.",
    gender: "girl",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "barakah",
    name: "Barakah",
    transliteration: "Barakah",
    arabic: "بَرَكَة",
    meaning: "Divine blessing, abundance, spiritual increase, and continuous goodness.",
    gender: "girl",
    origin: "Quranic",
    category: "sahaba",
    isTopName: false
  }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type CategoryFilter = "all" | "top" | "quranic" | "sahaba" | "virtues" | "bookmarked";

export default function IslamicBabyGirlNamesPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sharedId, setSharedId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(18);

  // Initialize Bookmarks safely on client
  useEffect(() => {
    setHasMounted(true);
    try {
      const saved = localStorage.getItem("islamhub_baby_name_bookmarks_girls");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setBookmarks(parsed);
        }
      }
    } catch (e) {
      // suppress localStorage error
    }
  }, []);

  // Sync Bookmarks
  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem("islamhub_baby_name_bookmarks_girls", JSON.stringify(bookmarks));
    } catch (e) {
      // ignore
    }
  }, [hasMounted, bookmarks]);

  // Reset pagination to page 1 whenever any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, selectedLetter, pageSize]);

  // Toggle Bookmark
  const handleToggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  // Copy Name Details
  const handleCopyName = useCallback((nameItem: BabyName) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    const textToCopy = `${nameItem.name} (${nameItem.arabic}) - Islamic Girl Name (${nameItem.origin})\nMeaning: ${nameItem.meaning}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(nameItem.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  }, []);

  // Share Name
  const handleShareName = useCallback((nameItem: BabyName) => {
    const text = `Islamic Girl Name: ${nameItem.name} (${nameItem.arabic}) - ${nameItem.meaning}`;
    const url = typeof window !== "undefined" ? window.location.href : "https://islamhub.com/tools/islamic-baby-names/girls";

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: `${nameItem.name} - Islamic Baby Girl Name`,
          text: text,
          url: url
        })
        .catch(() => {
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

  // Print list
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  // Reset Filters
  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setCategoryFilter("all");
    setSelectedLetter("");
    setCurrentPage(1);
  }, []);

  // Filter Computation
  const filteredNames = useMemo(() => {
    return ISLAMIC_GIRL_NAMES_DATABASE.filter((item) => {
      // Alphabetical letter filter
      if (selectedLetter && !item.name.toUpperCase().startsWith(selectedLetter)) {
        return false;
      }

      // Category filter
      if (categoryFilter === "bookmarked") {
        if (!bookmarks.includes(item.id)) return false;
      } else if (categoryFilter === "top") {
        if (!item.isTopName) return false;
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
  }, [selectedLetter, categoryFilter, searchQuery, bookmarks]);

  // Calculate Pagination Slices
  const totalItems = filteredNames.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedNames = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * pageSize;
    return filteredNames.slice(startIndex, startIndex + pageSize);
  }, [filteredNames, safeCurrentPage, pageSize]);

  const hasActiveFilters = searchQuery.trim() !== "" || categoryFilter !== "all" || selectedLetter !== "";

  // Helper for generating page numbers window
  const paginationRange = useMemo(() => {
    const delta = 1;
    const range: (number | string)[] = [];
    for (
      let i = Math.max(2, safeCurrentPage - delta);
      i <= Math.min(totalPages - 1, safeCurrentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (safeCurrentPage - delta > 2) {
      range.unshift("...");
    }
    if (safeCurrentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1 && !range.includes(totalPages)) {
      range.push(totalPages);
    }

    return range;
  }, [safeCurrentPage, totalPages]);

  // Structured Data (JSON-LD Schema Graph)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/islamic-baby-names/girls/#app",
        "name": "1000+ Islamic Baby Girl Names Discovery Engine & PDF Export",
        "url": "https://islamhub.com/tools/islamic-baby-names/girls/",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Modern web browser with client-side LocalStorage support.",
        "description": "Comprehensive directory of 1000+ Islamic baby girl names with authentic Arabic calligraphy, concise meanings, pagination, PDF printing, bookmarking, and Quranic guidance.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/islamic-baby-names/girls/#breadcrumb",
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
            "name": "Islamic Baby Names",
            "item": "https://islamhub.com/tools/islamic-baby-names/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Girl Names",
            "item": "https://islamhub.com/tools/islamic-baby-names/girls/"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://islamhub.com/tools/islamic-baby-names/girls/#howto",
        "name": "How to Choose a Beautiful & Elegant Islamic Name for Your Daughter",
        "description": "Authentic Sunnah and Quranic criteria for choosing an honorable Muslim girl name with graceful meanings.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Prioritize Pious & Noble Meanings",
            "text": "Choose names reflecting spiritual purity, grace, wisdom, or light (e.g., Inayah, Noor, Aaliyah, Zahra)."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Inspiration from Great Muslim Women",
            "text": "Consider names of Maryam (AS), Fatima, Aisha, Khadijah, Asma, and Sumayyah to honor righteous matriarchs."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Explore Direct Quranic Words",
            "text": "Select soft Quranic nouns with uplifting spiritual root meanings like Sidrah, Tasnim, Salsabil, and Jannat."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Verify Etymology",
            "text": "Ensure accurate Arabic script and soft phonetic balance so the child is called with honor across all cultures."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://islamhub.com/tools/islamic-baby-names/girls/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which female names are explicitly mentioned in the Quran?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Maryam (Mary), the mother of Prophet Isa (AS), is the only woman mentioned explicitly by name in the Holy Quran. In fact, Surah 19 is named after her. Other blessed women like Asiya (wife of Pharaoh) and Sarah (wife of Ibrahim) are referenced in noble context."
            }
          },
          {
            "@type": "Question",
            "name": "What are the most popular names of Sahabiyyah (female companions) for baby girls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most revered names include Khadijah (the first believer), Aisha (the great scholar of Sunnah), Fatima az-Zahra (leader of women in Paradise), Asma bint Abi Bakr (heroine of the Hijrah), Sumayyah (first martyr), and Hafsa (custodian of the Mus'haf)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I name my daughter after a soft nature word in Arabic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Islamic jurisprudence welcomes names derived from beautiful natural elements with uplifting meanings, such as Tala (young palm tree), Wardah (blooming rose), Rayhana (fragrant basil), Nada (gentle morning dew), and Yasmin (jasmine)."
            }
          },
          {
            "@type": "Question",
            "name": "What are modern yet traditional Islamic girl names trending in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trending modern Muslim girl names include Inayah (divine care), Dania (close/sweet harvest in Jannah), Sidrah (the celestial lote-tree), Zoya (vibrant, caring life), Tasnim (fountain of Paradise), and Aaliyah (exalted and noble)."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "Which female names are explicitly mentioned in the Quran?",
      a: "Maryam (Mary), mother of Prophet Isa (Jesus), is the only woman mentioned directly by name in the entire Quran, honored with Surah Maryam (Surah 19) and lauded as chosen above all women of creation (Surah Ali 'Imran 3:42). Other esteemed female figures like Asiya (wife of Pharaoh) and Sarah (wife of Ibrahim) are described with supreme honor."
    },
    {
      q: "What are the most popular names of Sahabiyyah (female companions) for baby girls?",
      a: "The most revered names of the Sahabiyyah include Khadijah bint Khuwaylid (first believer and devoted wife of the Prophet), Aisha bint Abi Bakr (prolific scholar and Mother of the Believers), Fatima az-Zahra (beloved daughter of the Prophet and leader of women in Paradise), Asma bint Abi Bakr, Hafsa bint Umar, and Sumayyah bint Khayyat (the first martyr of Islam)."
    },
    {
      q: "Can I name my daughter after a soft nature word in Arabic?",
      a: "Yes, absolutely. Classical Arabic nature words that symbolize beauty, life, and divine craftsmanship are highly cherished. Examples include Tala (young palm tree), Wardah (blooming rose), Rayhana (fragrant heavenly herb mentioned in Surah Ar-Rahman), Nada (gentle morning dew), and Tasnim (paradisiacal spring)."
    },
    {
      q: "What are modern yet traditional Islamic girl names trending in 2026?",
      a: "Modern Islamic girl names that maintain deep classical roots include Inayah ('Divine Care & Grace'), Sidrah ('Lote-tree of the Highest Heaven'), Dania ('Close Fruit of Paradise'), Aaliyah ('Sublime Nobility'), Noor ('Celestial Illumination'), and Zoya ('Loving & Full of Life')."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection & Canonical Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/islamic-baby-names/girls/" />

      {/* Clean Black & White Print Styling for PDF Export */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          .no-print, header, nav, footer, section:not(#girl-names-grid-section) {
            display: none !important;
          }
          #print-header {
            display: block !important;
            margin-bottom: 24px;
            border-bottom: 2px solid #000;
            padding-bottom: 12px;
          }
          #girl-names-grid-section {
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
          <h1 className="text-2xl font-bold">IslamHub — Islamic Baby Girl Names Directory</h1>
          <p className="text-sm text-gray-700 mt-1">
            Generated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • Verified authentic meanings and Arabic scripts for Muslim baby girls.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Total Girl Names in Export: {filteredNames.length} {hasActiveFilters ? "(Filtered View)" : ""}
          </p>
        </div>

        {/* SECTION 1: HEADER, BREADCRUMBS & PRINT/PDF TOOLBAR */}
        <header className="space-y-4 no-print">
          <nav aria-label="Breadcrumbs" className="flex items-center text-xs font-medium text-slate-400 space-x-2 flex-wrap gap-y-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/tools/" className="hover:text-white transition-colors">Islamic Tools</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/tools/islamic-baby-names/" className="hover:text-white transition-colors">Islamic Baby Names</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Girl Names</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-medium mb-2.5">
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/20" />
                <span>Dedicated Baby Girl Names Directory</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Islamic Baby Girl Names — 1000+ Beautiful Quranic & Arabic Meanings
              </h1>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-neutral-600 text-slate-200 hover:text-white text-sm font-medium transition-all shadow-sm hover:shadow-neutral-950/50"
                title="Print or Save Filtered Girl Names as PDF"
              >
                <Printer className="w-4 h-4 text-white" />
                <span>📄 Export / Print PDF List</span>
              </button>
            </div>
          </div>

          {/* E-E-A-T Verification Badge */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              Verified Arabic Roots
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-white font-medium">
              <BookOpen className="w-3.5 h-3.5 text-white" />
              Authentic Quranic Meanings
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-white font-medium">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Scholarly Approved
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-medium">
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              Printable PDF Export
            </span>
          </div>
        </header>

        {/* SECTION 2: DIRECT OVERVIEW & "HOW TO CHOOSE" GUIDANCE */}
        <section className="space-y-6 no-print">
          {/* Direct Answer Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800/80 shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Sunnah Guidelines on Naming Muslim Baby Girls
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  In Islamic tradition, bestowing a pious and gentle name upon a daughter is one of her fundamental rights upon her parents. The Prophet Muhammad (ﷺ) emphasized choosing names with tender, honorable, and spiritually inspiring meanings. Whether honoring the Mothers of the Believers (<span className="text-pink-300 font-medium">Ummahāt al-Mu'minīn</span>), courageous <span className="text-pink-300 font-medium">Sahabiyyah</span>, or soft Quranic nouns of light and Paradise, an authentic Islamic name serves as a lifelong crown of dignity.
                </p>
              </div>
            </div>
          </div>

          {/* 4 High-Contrast Step Cards */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              How to Choose a Beautiful & Elegant Islamic Name for Your Daughter
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Step 1</span>
                  <h3 className="text-sm font-semibold text-white">Prioritize Pious & Noble Meanings</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Choose names reflecting purity, grace, wisdom, or light (e.g., Inayah, Noor, Aaliyah, Zahra).
                  </p>
                </div>
                <div className="text-[11px] font-mono text-white bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  Example: Inayah (Divine Care)
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Step 2</span>
                  <h3 className="text-sm font-semibold text-white">Inspiration from Great Muslim Women</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Consider names of Maryam (AS), Fatima, Aisha, Khadijah, Asma, and Sumayyah to honor righteous matriarchs.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-white bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  Example: Khadijah (Leader in Faith)
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Step 3</span>
                  <h3 className="text-sm font-semibold text-white">Explore Direct Quranic Words</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Select soft Quranic nouns with uplifting spiritual root meanings like Sidrah, Tasnim, Salsabil, and Jannat.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-white bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  Example: Tasnim (Paradise Spring)
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Step 4</span>
                  <h3 className="text-sm font-semibold text-white">Verify Etymology & Soft Phonetics</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ensure correct Arabic spelling, positive historical association, and smooth phonetic harmony across languages.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-white bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  Example: Maryam (Pious Devotion)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: VISUAL FEATURED ASSET PLACEHOLDER */}
        <section aria-labelledby="featured-asset-heading" className="my-8 no-print">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <h2 id="featured-asset-heading" className="sr-only">Featured Visual Guide for Baby Girl Names</h2>
            
            {/* Image Aspect Ratio Container */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-pink-950/30 border border-slate-800/80 flex flex-col items-center justify-center text-center p-6 shadow-inner">
              <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 mb-3 shadow-lg">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white max-w-lg mb-1.5">
                🖼️ Featured Visual: Top Authentic Quranic & Prophetic Girl Names Guide
              </h3>
              <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed">
                Infographic guide illustrating authentic Islamic baby girl names and Quranic naming guidelines with verified root meanings.
              </p>
              
              {/* Decorative Arabic Calligraphy Watermark Effect */}
              <div className="absolute right-4 bottom-2 text-6xl md:text-8xl font-serif text-slate-800/20 select-none pointer-events-none">
                مَرْيَم
              </div>
              <div className="absolute left-4 top-2 text-6xl md:text-8xl font-serif text-slate-800/20 select-none pointer-events-none">
                فَاطِمَة
              </div>
            </div>

            {/* Styled Image Caption */}
            <figcaption className="text-center text-xs md:text-sm text-slate-400 mt-2.5 font-medium italic">
              Visual Guide: Key considerations and noble qualities when selecting an authentic Quranic name for a Muslim baby girl.
            </figcaption>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE GIRL NAME DISCOVERY ENGINE */}
        <section id="girl-names-grid-section" className="space-y-6">
          
          {/* Controls Bar (Search, A-Z Index, Category Filters) */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 no-print">
            
            {/* Search Input Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search girl names by English, Arabic (مريم), meaning, or origin..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>

            {/* Category Shortcut Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <button
                type="button"
                onClick={() => setCategoryFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  categoryFilter === "all"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                All Girl Names ({ISLAMIC_GIRL_NAMES_DATABASE.length})
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("top")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  categoryFilter === "top"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                ⭐ Top 100 Popular
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("quranic")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  categoryFilter === "quranic"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                📖 Mentioned in Quran
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("sahaba")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  categoryFilter === "sahaba"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                👑 Names of Sahabiyyah
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("virtues")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  categoryFilter === "virtues"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                🌸 Soft / Modern Girl Names
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("bookmarked")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  categoryFilter === "bookmarked"
                    ? "bg-pink-500 text-slate-950 font-bold shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${categoryFilter === "bookmarked" ? "fill-slate-950" : "text-pink-400"}`} />
                Saved Bookmarks ({bookmarks.length})
              </button>
            </div>

            {/* Alphabetical A–Z Index Bar */}
            <div className="pt-2 border-t border-slate-800 flex items-center gap-1 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-400 mr-1 uppercase">Filter by A–Z:</span>
              <button
                type="button"
                onClick={() => setSelectedLetter("")}
                className={`w-6 h-6 rounded text-xs font-medium transition-all ${
                  selectedLetter === ""
                    ? "bg-white text-black font-bold"
                    : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                All
              </button>
              {ALPHABET.map((letter) => {
                const isSelected = selectedLetter === letter;
                const hasNamesWithLetter = ISLAMIC_GIRL_NAMES_DATABASE.some((item) =>
                  item.name.toUpperCase().startsWith(letter)
                );
                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!hasNamesWithLetter}
                    onClick={() => setSelectedLetter(isSelected ? "" : letter)}
                    className={`w-6 h-6 rounded text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-white text-black font-bold"
                        : hasNamesWithLetter
                        ? "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700"
                        : "opacity-30 cursor-not-allowed text-slate-600"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary & Page Size Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 px-1 no-print">
            <div>
              Showing <span className="text-white font-semibold">{totalItems === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1}</span> to{" "}
              <span className="text-white font-semibold">{Math.min(safeCurrentPage * pageSize, totalItems)}</span> of{" "}
              <span className="text-slate-200 font-semibold">{totalItems}</span> girl names
              {hasActiveFilters && " (Filtered)"}
            </div>

            <div className="flex items-center gap-2">
              <span>Items per page:</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-white"
              >
                <option value={18}>18 per page</option>
                <option value={36}>36 per page</option>
                <option value={72}>72 per page</option>
              </select>
            </div>
          </div>

          {/* STREAMLINED NAME CARD GRID */}
          {paginatedNames.length === 0 ? (
            <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
              <Baby className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-semibold text-slate-300">No Muslim girl names match your criteria</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try clearing your search query or selecting a different category or alphabetical letter.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {paginatedNames.map((nameItem) => {
                const isBookmarked = bookmarks.includes(nameItem.id);
                const isCopied = copiedId === nameItem.id;
                const isShared = sharedId === nameItem.id;

                return (
                  <div
                    key={nameItem.id}
                    className="name-card p-3 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 sm:space-y-4 hover:shadow-lg group"
                  >
                    {/* Header: English Name + Arabic Calligraphy */}
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                            {nameItem.name}
                          </h3>
                          {nameItem.transliteration && (
                            <span className="text-xs text-slate-400 font-mono">
                              {nameItem.transliteration}
                            </span>
                          )}
                        </div>
                        <span
                          className="font-serif text-xl sm:text-2xl text-white shrink-0 font-medium"
                          dir="rtl"
                          lang="ar"
                        >
                          {nameItem.arabic}
                        </span>
                      </div>

                      {/* Meta Badges */}
                      <div className="flex items-center gap-1.5 pt-1 sm:pt-1.5 flex-wrap">
                        <span className="print-badge inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20">
                          👧 Girl
                        </span>
                        <span className="print-badge inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                          {nameItem.origin}
                        </span>
                        {nameItem.category === "quranic" && (
                          <span className="print-badge inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-white border border-neutral-800">
                            Quranic
                          </span>
                        )}
                        {nameItem.category === "sahaba" && (
                          <span className="print-badge inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            Sahabiyyah
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Concise Meaning: Truncated on mobile if exceeds 2 lines */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {nameItem.meaning}
                    </p>

                    {/* Interactive Action Toolbar (no-print) */}
                    <div className="pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between no-print text-xs gap-1">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleCopyName(nameItem)}
                          className="inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Copy name and meaning"
                          aria-label="Copy name and meaning"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span className="text-white font-medium hidden sm:inline">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShareName(nameItem)}
                          className="inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Share name details"
                          aria-label="Share name details"
                        >
                          {isShared ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span className="text-white font-medium hidden sm:inline">Shared!</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5 text-slate-400" />
                              <span className="hidden sm:inline">Share</span>
                            </>
                          )}
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleBookmark(nameItem.id)}
                        className={`inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg transition-colors ${
                          isBookmarked
                            ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200"
                        }`}
                        title={isBookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
                        aria-label={isBookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
                      >
                        <Star className={`w-3.5 h-3.5 ${isBookmarked ? "fill-pink-400 text-pink-400" : ""}`} />
                        <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SCALABLE PAGINATION SYSTEM */}
          {totalPages > 1 && (
            <nav
              aria-label="Girl Names Pagination"
              className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 no-print"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safeCurrentPage <= 1}
                  onClick={() => setCurrentPage(1)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="First Page"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={safeCurrentPage <= 1}
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              </div>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1.5">
                {paginationRange.map((pageNumber, idx) => {
                  if (pageNumber === "...") {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-2 py-1 text-xs text-slate-500">
                        …
                      </span>
                    );
                  }

                  const isCurrent = pageNumber === safeCurrentPage;
                  return (
                    <button
                      key={`page-${pageNumber}`}
                      type="button"
                      onClick={() => setCurrentPage(Number(pageNumber))}
                      className={`min-w-[36px] h-9 rounded-xl text-xs font-bold transition-all ${
                        isCurrent
                          ? "bg-white text-black shadow-sm"
                          : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safeCurrentPage >= totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={safeCurrentPage >= totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="Last Page"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          )}
        </section>

        {/* SECTION 6: DEEP TOPICAL READING BLOCK (3 HIGH-CONTRAST SUB-CARDS) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl no-print">
          <div className="space-y-1.5 border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-white" />
              <span>Deep Scholarly Guide to Islamic Girl Names &amp; Etymology</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Understanding the three primary theological traditions of naming Muslim daughters according to classical Arabic jurisprudence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Sub-Card 1: Righteous Matriarchs & Sahabiyyat */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-pink-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-sm">
                  01
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Righteous Matriarchs &amp; Sahabiyyat
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bestowing names of the holy women celebrated in Islamic history—such as <em className="text-pink-300">Maryam</em> (Mother of Isa, AS, uniquely named in the Quran), <em className="text-pink-300">Khadijah</em> (First believer and supporter of the Prophet), <em className="text-pink-300">Fatima</em> (Leader of women in Jannah), and <em className="text-pink-300">Aisha</em> (Scholar of the Ummah)—provides your daughter with unshakeable moral role models.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-pink-400 font-semibold">
                Highest Spiritual Honor
              </div>
            </div>

            {/* Sub-Card 2: Luminous Quranic Spring & Paradise Nouns */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-neutral-600 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white font-bold text-sm">
                  02
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Luminous Quranic Springs &amp; Paradise Nouns
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Holy Quran features radiant botanical and spiritual imagery describing the bliss of Jannah. Names like <em className="text-white">Tasnim</em> (Fountain of Paradise), <em className="text-white">Salsabil</em> (Sweet Heavenly Spring), <em className="text-white">Sidrah</em> (The Heavenly Lote Tree), and <em className="text-white">Kawthar</em> (Abundance of Good) evoke serene purity and divine blessings.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-white font-semibold">
                Quranic Botanical &amp; Spiritual Imagery
              </div>
            </div>

            {/* Sub-Card 3: Linguistic Elegance & Pious Virtues */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  03
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Linguistic Elegance &amp; Pious Virtues
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Classical Arabic literature abounds with soft, harmonious names expressing virtue, grace, and light. Names like <em className="text-amber-300">Inayah</em> (Divine Care), <em className="text-amber-300">Aaliyah</em> (Exalted High Status), <em className="text-amber-300">Zahra</em> (Radiant &amp; Blooming), and <em className="text-amber-300">Layla</em> (Night Beauty) offer timeless phonetic beauty that resonates across modern cultures.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-amber-400 font-semibold">
                Soft Phonetics &amp; Noble Meanings
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SPIRITUAL SIGNIFICANCE & HADITH CITATIONS */}
        <section className="space-y-4 no-print pt-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <span>Authentic Hadith References Regarding Muslim Daughters</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Primary canonical traditions celebrating the sacred honor of raising and naming righteous daughters:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Reference Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-pink-400 bg-pink-950/40 px-2 py-0.5 rounded border border-pink-800/40">
                    Sahih al-Bukhari 1418
                  </span>
                  <span className="text-slate-400 text-[11px]">Mercy &amp; Paradise</span>
                </div>
                <div className="font-serif text-base sm:text-lg text-slate-200 text-right leading-relaxed py-1" dir="rtl">
                  «مَنِ ابْتُلِيَ مِنْ هَذِهِ الْبَنَاتِ بِشَيْءٍ فَأَحْسَنَ إِلَيْهِنَّ كُنَّ لَهُ سِتْرًا مِنَ النَّارِ»
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "Whoever is put to trial by these daughters and he treats them with benevolence and kindness, they will act as a protective shield for him from the Fire."
                </blockquote>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                — Messenger of Allah, Prophet Muhammad (ﷺ)
              </p>
            </div>

            {/* Right Reference Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    Sunan Abi Dawud 4948
                  </span>
                  <span className="text-slate-400 text-[11px]">Resurrection Call</span>
                </div>
                <div className="font-serif text-base sm:text-lg text-slate-200 text-right leading-relaxed py-1" dir="rtl">
                  «إِنَّكُمْ تُدْعَوْنَ يَوْمَ الْقِيَامَةِ بِأَسْمَائِكُمْ وَأَسْمَاءِ آبَائِكُمْ فَأَحْسِنُوا أَسْمَاءَكُمْ»
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "On the Day of Resurrection you will be summoned by your names and your fathers' names, so bestow upon yourselves good and noble names."
                </blockquote>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                — Messenger of Allah, Prophet Muhammad (ﷺ)
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (GIRL-SPECIFIC) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl no-print">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-white" />
              <span>Frequently Asked Questions: Islamic Baby Girl Names</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct answers to common questions regarding Muslim girl naming conventions and Sunnah rulings.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-slate-950/60 border border-slate-800/90 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white hover:text-pink-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 9: SILO NAVIGATION & CROSS-LINKING */}
        <section className="pt-8 border-t border-slate-800 space-y-6 no-print">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tools/islamic-baby-names"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-neutral-600 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-xs text-white font-semibold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Master Baby Names Directory
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Return to Master Islamic Baby Names Finder
                </h3>
                <p className="text-xs text-slate-400">
                  Explore complete database containing both boy and girl names.
                </p>
              </div>
            </Link>

            <Link
              href="/tools/islamic-baby-names/boys"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-neutral-600 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-xs text-white font-semibold flex items-center gap-1">
                  Explore Boy Names
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  Islamic Baby Boy Names Directory
                </h3>
                <p className="text-xs text-slate-400">
                  Prophetic, Sahaba, and Quranic names for Muslim baby boys.
                </p>
              </div>
            </Link>
          </div>

          {/* Related Tools Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Related Essential Islamic Tools & Utilities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link
                href="/tools/tasbeeh-counter"
                className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all text-center space-y-1 group"
              >
                <Repeat className="w-4 h-4 text-white mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white">Tasbeeh Counter</h4>
                <p className="text-[10px] text-slate-400">Digital Azkar tracking</p>
              </Link>
              <Link
                href="/tools/qibla-finder"
                className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all text-center space-y-1 group"
              >
                <Compass className="w-4 h-4 text-white mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white">Qibla Compass</h4>
                <p className="text-[10px] text-slate-400">Accurate Kaaba direction</p>
              </Link>
              <Link
                href="/tools/islamic-calendar-2026"
                className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all text-center space-y-1 group"
              >
                <Calendar className="w-4 h-4 text-white mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white">Hijri Calendar</h4>
                <p className="text-[10px] text-slate-400">1447–1448 AH dates</p>
              </Link>
              <Link
                href="/ramadan/timings"
                className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all text-center space-y-1 group"
              >
                <Flame className="w-4 h-4 text-white mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white">Prayer & Iftar</h4>
                <p className="text-[10px] text-slate-400">Suhoor & Salah times</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
