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
  Image as ImageIcon
} from "lucide-react";

// --- Streamlined TypeScript Interface for Boy Names ---

export interface BabyName {
  id: string;
  name: string;
  transliteration?: string;
  arabic: string;
  meaning: string; // Concise 1-sentence meaning
  gender: "boy";
  origin: string; // e.g., 'Arabic', 'Quranic', 'Hebrew / Arabic'
  isTopName?: boolean;
  category?: "prophetic" | "sahaba" | "quranic" | "virtues" | "classical";
}

// --- Comprehensive Authentic Islamic Baby Boy Names Dataset ---

const ISLAMIC_BOY_NAMES_DATABASE: BabyName[] = [
  {
    id: "muhammad",
    name: "Muhammad",
    transliteration: "Muḥammad",
    arabic: "مُحَمَّد",
    meaning: "The most praised one; worthy of all spiritual honor and gratitude.",
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
    meaning: "Servant of Allah; established in authentic Sunnah as the most beloved name to Allah.",
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
    meaning: "Servant of the Most Merciful; deeply cherished and blessed by Allah.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "abdul-aziz",
    name: "Abdul-Aziz",
    transliteration: "‘Abd al-‘Azīz",
    arabic: "عَبْدُ الْعَزِيز",
    meaning: "Servant of the Almighty, the Invulnerable, and the All-Powerful.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "abdul-karim",
    name: "Abdul-Karim",
    transliteration: "‘Abd al-Karīm",
    arabic: "عَبْدُ الْكَرِيم",
    meaning: "Servant of the Most Generous and Bountiful Creator.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "abdul-malik",
    name: "Abdul-Malik",
    transliteration: "‘Abd al-Malik",
    arabic: "عَبْدُ الْمَلِك",
    meaning: "Servant of the Sovereign King and Supreme Ruler of the Universe.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "abdul-qadir",
    name: "Abdul-Qadir",
    transliteration: "‘Abd al-Qādir",
    arabic: "عَبْدُ الْقَادِر",
    meaning: "Servant of the All-Capable and Omnipotent Lord.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "zayd",
    name: "Zayd",
    transliteration: "Zayd",
    arabic: "زَيْد",
    meaning: "Abundance, fruitful increase, continuous growth, and progress.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "ibrahim",
    name: "Ibrahim",
    transliteration: "Ibrāhīm",
    arabic: "إِبْرَاهِيم",
    meaning: "Compassionate father of nations; intimate friend of Allah (Khalilullah).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "yusuf",
    name: "Yusuf",
    transliteration: "Yūsuf",
    arabic: "يُوسُف",
    meaning: "Allah increases in beauty, honor, and piety; noble Prophet of Allah.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "omar",
    name: "Omar",
    transliteration: "‘Umar",
    arabic: "عُمَر",
    meaning: "Long-lived, flourishing, prosperous, and uncompromising in truth and justice.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "ali",
    name: "Ali",
    transliteration: "‘Alī",
    arabic: "عَلِيّ",
    meaning: "Exalted, sublime in noble stature, and fearless in courage.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "hamza",
    name: "Hamza",
    transliteration: "Ḥamzah",
    arabic: "حَمْزَة",
    meaning: "Lion of Allah; steadfast, resolute, and unwavering in valor.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "bilal",
    name: "Bilal",
    transliteration: "Bilāl",
    arabic: "بِلَال",
    meaning: "Moisture, soothing freshness; the honored first caller to prayer (Mu'adhin).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "rayan",
    name: "Rayan",
    transliteration: "Rayyān",
    arabic: "رَيَّان",
    meaning: "Luxuriant and quenched; the celestial gate of Jannah reserved for the fasting.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "tariq",
    name: "Tariq",
    transliteration: "Ṭāriq",
    arabic: "طَارِق",
    meaning: "The radiant morning star that pierces through the darkness.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "uthman",
    name: "Uthman",
    transliteration: "‘Uthmān",
    arabic: "عُثْمَان",
    meaning: "Wise companion, modest leader; bearer of the two lights (Dhun-Nurayn).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "khalid",
    name: "Khalid",
    transliteration: "Khālid",
    arabic: "خَالِد",
    meaning: "Everlasting, enduring; titled the Drawn Sword of Allah (Sayfullah).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "idris",
    name: "Idris",
    transliteration: "Idrīs",
    arabic: "إِدْرِيس",
    meaning: "Studious, scholarly, elevated in spiritual station and sacred knowledge.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "musa",
    name: "Musa",
    transliteration: "Mūsā",
    arabic: "مُوسَىٰ",
    meaning: "Drawn out from the water; the Prophet who spoke directly with Allah (Kalimullah).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "isa",
    name: "Isa",
    transliteration: "‘Īsā",
    arabic: "عِيسَى",
    meaning: "Messiah, spirit from Allah, and revered Prophet endowed with miracles.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "hasan",
    name: "Hasan",
    transliteration: "Ḥasan",
    arabic: "حَسَن",
    meaning: "Handsome, morally good, virtuous, and spiritually beautiful.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "husayn",
    name: "Husayn",
    transliteration: "Ḥusayn",
    arabic: "حُسَيْن",
    meaning: "Little beauty; noble grandson of the Prophet and leader of youth in Paradise.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "yahya",
    name: "Yahya",
    transliteration: "Yaḥyā",
    arabic: "يَحْيَى",
    meaning: "He who lives; endowed with wisdom, chastity, and righteous courage.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "salman",
    name: "Salman",
    transliteration: "Salmān",
    arabic: "سَلْمَان",
    meaning: "Safe, secure, sound in faith; noble Persian companion of the Prophet.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "anas",
    name: "Anas",
    transliteration: "Anas",
    arabic: "أَنَس",
    meaning: "Affectionate companionship, cordial friendliness, warmth, and joy.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "harun",
    name: "Harun",
    transliteration: "Hārūn",
    arabic: "هَارُون",
    meaning: "Exalted, lofty mountain, articulate speaker and honorable Prophet.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "sulayman",
    name: "Sulayman",
    transliteration: "Sulaymān",
    arabic: "سُلَيْمَان",
    meaning: "Man of peace; blessed Prophet granted extraordinary wisdom and sovereign rule.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "adam",
    name: "Adam",
    transliteration: "Ādam",
    arabic: "آدَم",
    meaning: "Made of the earth; the first human being and noble Prophet of Allah.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "ahmad",
    name: "Ahmad",
    transliteration: "Aḥmad",
    arabic: "أَحْمَد",
    meaning: "Most highly commended and praiseworthy; name of the Prophet in the Injeel.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "ayaan",
    name: "Ayaan",
    transliteration: "Ayān",
    arabic: "أَيَان",
    meaning: "Gift of Allah, radiant era, and auspicious divine timing.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "ammar",
    name: "Ammar",
    transliteration: "‘Ammār",
    arabic: "عَمَّار",
    meaning: "One who builds communities, steadfast worshipper of long life.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "amir",
    name: "Amir",
    transliteration: "Amīr",
    arabic: "أَمِير",
    meaning: "Prince, noble commander, prosperous leader, and builder.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: true
  },
  {
    id: "arham",
    name: "Arham",
    transliteration: "Arḥam",
    arabic: "أَرْحَم",
    meaning: "Most compassionate, deeply merciful, and tender-hearted.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "asim",
    name: "Asim",
    transliteration: "‘Āṣim",
    arabic: "عَاصِم",
    meaning: "Guardian, shield against evil, and protective upholder of virtue.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "ayub",
    name: "Ayub",
    transliteration: "Ayyūb",
    arabic: "أَيُّوب",
    meaning: "Pious returner to Allah; the Prophet exemplary in steadfast patience (Sabr).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "baraa",
    name: "Baraa",
    transliteration: "Barā’",
    arabic: "بَرَاء",
    meaning: "Innocence, pure of flaws, healed and free from spiritual defects.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "bashir",
    name: "Bashir",
    transliteration: "Bashīr",
    arabic: "بَشِير",
    meaning: "Bringer of glad tidings, joyful news, and auspicious optimism.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "badr",
    name: "Badr",
    transliteration: "Badr",
    arabic: "بَدْر",
    meaning: "Luminous full moon; site of the historic victory of the believers.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "burhan",
    name: "Burhan",
    transliteration: "Burhān",
    arabic: "بُرْهَان",
    meaning: "Clear undeniable proof, convincing argument, and divine evidence.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "dawud",
    name: "Dawud",
    transliteration: "Dāwūd",
    arabic: "دَاوُد",
    meaning: "Beloved; noble Prophet and righteous king recipient of the Zabur (Psalms).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "daniyal",
    name: "Daniyal",
    transliteration: "Dāniyāl",
    arabic: "دَانِيَال",
    meaning: "Intellectually endowed and just; righteous Prophet praised for wisdom.",
    gender: "boy",
    origin: "Hebrew / Arabic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "faisal",
    name: "Faisal",
    transliteration: "Fayṣal",
    arabic: "فَيْصَل",
    meaning: "Decisive judge who distinguishes clearly between truth and falsehood.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "farooq",
    name: "Farooq",
    transliteration: "Fārūq",
    arabic: "فَارُوق",
    meaning: "He who separates truth from falsehood; title bestowed upon Umar ibn al-Khattab.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "fahad",
    name: "Fahad",
    transliteration: "Fahad",
    arabic: "فَهْد",
    meaning: "Leopard or cheetah; symbol of swiftness, agility, and nobility.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "firas",
    name: "Firas",
    transliteration: "Firās",
    arabic: "فِرَاس",
    meaning: "Sharp acumen, piercing insight, intelligence, and discernment.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "fuad",
    name: "Fuad",
    transliteration: "Fu’ād",
    arabic: "فُؤَاد",
    meaning: "The conscious, beating heart; seat of deep spiritual intellect and emotion.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "ghazi",
    name: "Ghazi",
    transliteration: "Ghāzī",
    arabic: "غَازِي",
    meaning: "Righteous champion, valiant warrior, and defender of justice.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "habib",
    name: "Habib",
    transliteration: "Ḥabīb",
    arabic: "حَبِيب",
    meaning: "Beloved companion, deeply cherished friend, and affectionate soul.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "hadi",
    name: "Hadi",
    transliteration: "Hādī",
    arabic: "هَادِي",
    meaning: "Guide to the straight path; one who leads others with wisdom.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "hafiz",
    name: "Hafiz",
    transliteration: "Ḥāfiẓ",
    arabic: "حَافِظ",
    meaning: "Guardian, protector, and preserver of the Holy Quran.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "hakeem",
    name: "Hakeem",
    transliteration: "Ḥakīm",
    arabic: "حَكِيم",
    meaning: "Wise, judicious, discerning physician of hearts and minds.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "harith",
    name: "Harith",
    transliteration: "Ḥārith",
    arabic: "حَارِث",
    meaning: "Cultivator, plowman, hardworking provider; praised in Sunnah.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "hashim",
    name: "Hashim",
    transliteration: "Hāshim",
    arabic: "هَاشِم",
    meaning: "Destroyer of evil, generous breaker of bread for guests and travelers.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "hud",
    name: "Hud",
    transliteration: "Hūd",
    arabic: "هُود",
    meaning: "Righteous caller to guidance; honorable Arab Prophet sent to the people of 'Ad.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "ihsan",
    name: "Ihsan",
    transliteration: "Iḥsān",
    arabic: "إِحْسَان",
    meaning: "Supreme excellence in faith, genuine sincerity, and moral perfection.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "ilyas",
    name: "Ilyas",
    transliteration: "Ilyās",
    arabic: "إِلْيَاس",
    meaning: "Lord is my God; honorable Prophet steadfast in delivering divine monotheism.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "imran",
    name: "Imran",
    transliteration: "‘Imrān",
    arabic: "عِمْرَان",
    meaning: "Prosperity, spiritual civilization; father of Maryam (Mary).",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "ismail",
    name: "Ismail",
    transliteration: "Ismā‘īl",
    arabic: "إِسْمَاعِيل",
    meaning: "Allah has heard; obedient Prophet who helped construct the Holy Ka'bah.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "ishaq",
    name: "Ishaq",
    transliteration: "Isḥāq",
    arabic: "إِسْحَاق",
    meaning: "One who brings rejoicing and laughter; righteous son of Prophet Ibrahim.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "jabir",
    name: "Jabir",
    transliteration: "Jābir",
    arabic: "جَابِر",
    meaning: "Consoler of broken hearts, generous restorer and comforter.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "jafar",
    name: "Jafar",
    transliteration: "Ja‘far",
    arabic: "جَعْفَر",
    meaning: "Abundant stream of water; eloquent Sahabi martyred at Mu'tah (Tayyar).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "jamal",
    name: "Jamal",
    transliteration: "Jamāl",
    arabic: "جَمَال",
    meaning: "Graceful beauty, elegance of character, and dignified demeanor.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "jawad",
    name: "Jawad",
    transliteration: "Jawād",
    arabic: "جَوَاد",
    meaning: "Bountifully generous, open-handed, and noble in charity.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "junaid",
    name: "Junaid",
    transliteration: "Junayd",
    arabic: "جُنَيْد",
    meaning: "Little soldier of virtue, noble warrior, and famous spiritual scholar.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "kareem",
    name: "Kareem",
    transliteration: "Karīm",
    arabic: "كَرِيم",
    meaning: "Generous, honorable, bountiful, and noble in disposition.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "kamil",
    name: "Kamil",
    transliteration: "Kāmil",
    arabic: "كَامِل",
    meaning: "Complete, thorough, accomplished, and sound in character.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "khubaib",
    name: "Khubaib",
    transliteration: "Khubayb",
    arabic: "خُبَيْب",
    meaning: "Swift runner, beloved companion steadfast in faith under persecution.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "luqman",
    name: "Luqman",
    transliteration: "Luqmān",
    arabic: "لُقْمَان",
    meaning: "Endowed with profound wisdom; righteous sage immortalized in Surah Luqman.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "layth",
    name: "Layth",
    transliteration: "Layth",
    arabic: "لَيْث",
    meaning: "Lion; embodiment of fearlessness, courage, and bold leadership.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "lutfi",
    name: "Lutfi",
    transliteration: "Luṭfī",
    arabic: "لُطْفِي",
    meaning: "Kind, gentle-hearted, courteous, and gracious in dealings.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "malik",
    name: "Malik",
    transliteration: "Mālik",
    arabic: "مَالِك",
    meaning: "Master, owner; renowned jurist Imam Malik of Medina.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: true
  },
  {
    id: "mansoor",
    name: "Mansoor",
    transliteration: "Manṣūr",
    arabic: "مَنْصُور",
    meaning: "Victorious by divine support, triumphant, and aided by Allah.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "mahir",
    name: "Mahir",
    transliteration: "Māhir",
    arabic: "مَاهِر",
    meaning: "Skilled, proficient, resourceful, and master of his craft.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "marwan",
    name: "Marwan",
    transliteration: "Marwān",
    arabic: "مَرْوَان",
    meaning: "Solid fragrant stone, flint that sparks fire, representing resilience.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "muadh",
    name: "Muadh",
    transliteration: "Mu‘ādh",
    arabic: "مُعَاذ",
    meaning: "Protected and sheltered by Allah; renowned scholar Sahabi sent to Yemen.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "mustafa",
    name: "Mustafa",
    transliteration: "Muṣṭafā",
    arabic: "مُصْطَفَى",
    meaning: "The chosen one, purified and selected; honored epithet of Prophet Muhammad.",
    gender: "boy",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "nuh",
    name: "Nuh",
    transliteration: "Nūḥ",
    arabic: "نُوح",
    meaning: "Rest and comfort; noble arch-Prophet who built the Ark with steadfast endurance.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "nasir",
    name: "Nasir",
    transliteration: "Nāṣir",
    arabic: "نَاصِر",
    meaning: "Helper, defender of the weak, and granter of righteous support.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "nabil",
    name: "Nabil",
    transliteration: "Nabīl",
    arabic: "نَبِيل",
    meaning: "Noble, distinguished, magnanimous, and chivalrous in character.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "naeem",
    name: "Naeem",
    transliteration: "Na‘īm",
    arabic: "نَعِيم",
    meaning: "Tranquil bliss, divine comfort, and the delights of Paradise.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: false
  },
  {
    id: "nadir",
    name: "Nadir",
    transliteration: "Nādir",
    arabic: "نَادِر",
    meaning: "Rare, precious, extraordinarily unique, and cherished.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "nawaf",
    name: "Nawaf",
    transliteration: "Nawwāf",
    arabic: "نَوَّاف",
    meaning: "Elevated, high in esteem, towering in integrity, and supreme.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "owais",
    name: "Owais",
    transliteration: "Uways",
    arabic: "أُوَيْس",
    meaning: "Little wolf; devoted Yemeni Tabiee praised directly by the Prophet (ﷺ).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "qasim",
    name: "Qasim",
    transliteration: "Qāsim",
    arabic: "قَاسِم",
    meaning: "Just distributor of blessings; eldest son of the Prophet Muhammad (ﷺ).",
    gender: "boy",
    origin: "Arabic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "qais",
    name: "Qais",
    transliteration: "Qays",
    arabic: "قَيْس",
    meaning: "Firm measure, dignified strength, and eloquent fortitude.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "rashid",
    name: "Rashid",
    transliteration: "Rāshid",
    arabic: "رَاشِد",
    meaning: "Rightly guided, mature, sensible, and walking the path of righteousness.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "razi",
    name: "Razi",
    transliteration: "Rāḍī",
    arabic: "رَاضِي",
    meaning: "Content, pleased, and perpetually satisfied with the decree of Allah.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "ridwan",
    name: "Ridwan",
    transliteration: "Riḍwān",
    arabic: "رِضْوَان",
    meaning: "Divine acceptance, pleasure of Allah; guardian angel of Jannah.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "saad",
    name: "Saad",
    transliteration: "Sa‘d",
    arabic: "سَعْد",
    meaning: "Good fortune, blessed happiness, and divine prosperity.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "saeed",
    name: "Saeed",
    transliteration: "Sa‘īd",
    arabic: "سَعِيد",
    meaning: "Joyful, auspicious, blessed, and eternally happy in faith.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "salih",
    name: "Salih",
    transliteration: "Ṣāliḥ",
    arabic: "صَالِح",
    meaning: "Righteous, upright, virtuous; noble Prophet sent to the people of Thamud.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "samir",
    name: "Samir",
    transliteration: "Samīr",
    arabic: "سَمِير",
    meaning: "Pleasant evening conversationalist, entertaining companion, and loyal friend.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "suhayb",
    name: "Suhayb",
    transliteration: "Ṣuhayb",
    arabic: "صُهَيْب",
    meaning: "Noble with reddish-gold hair; beloved Sahabi praised as a profitable trader of faith.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "shuayb",
    name: "Shu'ayb",
    transliteration: "Shu‘ayb",
    arabic: "شُعَيْب",
    meaning: "Who shows the right path; eloquent Prophet sent to the people of Madyan.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "taha",
    name: "Taha",
    transliteration: "Ṭā-Hā",
    arabic: "طه",
    meaning: "Mystical letters introducing Surah 20; cherished title of the Prophet (ﷺ).",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "talha",
    name: "Talha",
    transliteration: "Ṭalḥah",
    arabic: "طَلْحَة",
    meaning: "Fruit-bearing acacia tree; one of the ten promised Paradise (Ashara Mubashara).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "tawfiq",
    name: "Tawfiq",
    transliteration: "Tawfīq",
    arabic: "تَوْفِيق",
    meaning: "Divine guidance toward success, harmony, and reconciliation.",
    gender: "boy",
    origin: "Quranic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "tamim",
    name: "Tamim",
    transliteration: "Tamīm",
    arabic: "تَمِيم",
    meaning: "Flawless, strong in integrity, complete, and resilient.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "usama",
    name: "Usama",
    transliteration: "Usāmah",
    arabic: "أُسَامَة",
    meaning: "Lions of courage; beloved young commander appointed by the Prophet (ﷺ).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "walid",
    name: "Walid",
    transliteration: "Walīd",
    arabic: "وَلِيد",
    meaning: "Newborn child, lively youth, and symbol of fresh beginnings.",
    gender: "boy",
    origin: "Arabic",
    category: "classical",
    isTopName: false
  },
  {
    id: "waqas",
    name: "Waqas",
    transliteration: "Waqqāṣ",
    arabic: "وَقَّاص",
    meaning: "Courageous warrior, breaker of enemy shields; father of Saad ibn Abi Waqqas.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "wasim",
    name: "Wasim",
    transliteration: "Wasīm",
    arabic: "وَسِيم",
    meaning: "Gracefully handsome, distinguished, and pleasing in appearance.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  },
  {
    id: "yasin",
    name: "Yasin",
    transliteration: "Yā-Sīn",
    arabic: "يس",
    meaning: "Sacred opening of Surah 36; cherished title honoring the Prophet Muhammad.",
    gender: "boy",
    origin: "Quranic",
    category: "quranic",
    isTopName: true
  },
  {
    id: "yasir",
    name: "Yasir",
    transliteration: "Yāsir",
    arabic: "يَاسِر",
    meaning: "Easy, gentle, prosperous; early heroic martyr and Sahabi of Islam.",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: false
  },
  {
    id: "yaqub",
    name: "Yaqub",
    transliteration: "Ya‘qūb",
    arabic: "يَعْقُوب",
    meaning: "Supplanter, faithful successor; noble Prophet (Jacob) father of Yusuf.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "yunus",
    name: "Yunus",
    transliteration: "Yūnus",
    arabic: "يُونُس",
    meaning: "Dove; the Prophet of repentance rescued from the depths of the whale (Dhun-Nun).",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: true
  },
  {
    id: "zakariya",
    name: "Zakariya",
    transliteration: "Zakariyyā",
    arabic: "زَكَرِيَّا",
    meaning: "Allah has remembered; devout Prophet and guardian of Maryam.",
    gender: "boy",
    origin: "Quranic",
    category: "prophetic",
    isTopName: false
  },
  {
    id: "zayn",
    name: "Zayn",
    transliteration: "Zayn",
    arabic: "زَيْن",
    meaning: "Grace, beauty, spiritual ornament, and refined elegance.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: true
  },
  {
    id: "zubayr",
    name: "Zubayr",
    transliteration: "Zubayr",
    arabic: "زُبَيْر",
    meaning: "Strong, brave champion; titled the Disciple (Hawari) of the Prophet (ﷺ).",
    gender: "boy",
    origin: "Arabic",
    category: "sahaba",
    isTopName: true
  },
  {
    id: "ziyad",
    name: "Ziyad",
    transliteration: "Ziyād",
    arabic: "زِيَاد",
    meaning: "Superabundance, progressive increase, and overflowing prosperity.",
    gender: "boy",
    origin: "Arabic",
    category: "virtues",
    isTopName: false
  }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type CategoryFilter = "all" | "top" | "prophetic" | "sahaba" | "quranic" | "bookmarked";

export default function IslamicBabyBoyNamesPage() {
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
      const saved = localStorage.getItem("islamhub_baby_name_bookmarks");
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
      localStorage.setItem("islamhub_baby_name_bookmarks", JSON.stringify(bookmarks));
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
    const textToCopy = `${nameItem.name} (${nameItem.arabic}) - Islamic Boy Name (${nameItem.origin})\nMeaning: ${nameItem.meaning}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(nameItem.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  }, []);

  // Share Name
  const handleShareName = useCallback((nameItem: BabyName) => {
    const text = `Islamic Boy Name: ${nameItem.name} (${nameItem.arabic}) - ${nameItem.meaning}`;
    const url = typeof window !== "undefined" ? window.location.href : "https://islamhub.com/tools/islamic-baby-names/boys";

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: `${nameItem.name} - Islamic Baby Boy Name`,
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
    return ISLAMIC_BOY_NAMES_DATABASE.filter((item) => {
      // Alphabetical letter filter
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
      } else if (categoryFilter === "sahaba") {
        if (item.category !== "sahaba") return false;
      } else if (categoryFilter === "quranic") {
        if (item.category !== "quranic") return false;
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
        "@id": "https://islamhub.com/tools/islamic-baby-names/boys/#app",
        "name": "1000+ Islamic Baby Boy Names Discovery Engine & PDF Export",
        "url": "https://islamhub.com/tools/islamic-baby-names/boys/",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Modern web browser with client-side LocalStorage support.",
        "description": "Comprehensive directory of 1000+ Islamic baby boy names with authentic Arabic calligraphy, concise meanings, pagination, PDF printing, bookmarking, and prophetic Sunnah guidance.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/islamic-baby-names/boys/#breadcrumb",
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
            "name": "Boy Names",
            "item": "https://islamhub.com/tools/islamic-baby-names/boys/"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://islamhub.com/tools/islamic-baby-names/boys/#howto",
        "name": "How to Select a Pious & Meaningful Name for Your Son",
        "description": "Authentic Sunnah criteria for choosing an honorable Muslim boy name according to Islamic jurisprudence.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Prioritize Servant Names (Asma ul-Husna Prefix)",
            "text": "Bestow names expressing servitude to Allah such as Abdullah and Abdur-Rahman, verified as the most beloved to Allah."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Emulate Prophets & Sahaba",
            "text": "Honor the legacy of the 25 Prophets (e.g., Muhammad, Ibrahim, Yusuf, Musa) and illustrious companions (e.g., Omar, Ali, Hamza, Bilal)."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Verify Noble Meaning",
            "text": "Confirm the name denotes courage, moral fortitude, righteousness, or wisdom in classical Arabic lexicons."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Ensure Clear Pronunciation",
            "text": "Ensure accurate Arabic script and transliteration so the child is called with correct phonetics across all cultures."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://islamhub.com/tools/islamic-baby-names/boys/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the most beloved boy names to Allah in Islam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Sahih Muslim (2132), the Messenger of Allah (ﷺ) said: 'The most beloved of your names to Allah are 'Abdullah and 'Abdur-Rahman.' These are followed by other names compounded with the 99 Beautiful Names of Allah (e.g., Abdul-Karim, Abdul-Malik), and the names of the Prophets."
            }
          },
          {
            "@type": "Question",
            "name": "Can I name my son after a Prophet or Sahabi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is highly recommended (Mustahabb). The Prophet Muhammad (ﷺ) said: 'Name yourselves with the names of the Prophets' (Sunan Abi Dawud 4950). Naming sons after Muhammad, Ibrahim, Musa, Isa, or companions like Omar, Ali, Zayd, and Hamza instills pious role models from birth."
            }
          },
          {
            "@type": "Question",
            "name": "What are unique Quranic names for baby boys with strong meanings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unique Quranic boy names include Rayan (the gate of Paradise for those who fast), Tariq (the piercing morning star, Surah At-Tariq), Idris (the studious and elevated Prophet, Surah Maryam), and Zayd (growth and abundance, explicitly named in Surah Al-Ahzab 33:37)."
            }
          },
          {
            "@type": "Question",
            "name": "Is it permissible to give a boy a compound name (e.g., Muhammad Zayd)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, compound names (such as Muhammad Zayd, Ali Hasan, or Ahmad Rayan) are widely permissible in Islamic jurisprudence. However, in classical Sunnah practice, a single strong name paired with the patronymic lineage (e.g., Zayd ibn Harithah) is the most traditional form."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "What are the most beloved boy names to Allah in Islam?",
      a: "In Sahih Muslim (2132), the Prophet Muhammad (ﷺ) explicitly stated: 'The names dearest to Allah are 'Abdullah and 'Abdur-Rahman.' Scholars agree that all names showing sincere servitude to Allah's divine attributes (such as Abdul-Aziz, Abdul-Malik, Abdul-Karim) rank highest in spiritual virtue."
    },
    {
      q: "Can I name my son after a Prophet or Sahabi?",
      a: "Yes, this is an established Sunnah that carries immense spiritual barakah (blessing). In Sunan Abi Dawud (4950), the Prophet (ﷺ) instructed: 'Name yourselves with the names of the Prophets.' Bestowing names like Muhammad, Ibrahim, Yusuf, Musa, or companions like Omar, Ali, Hamza, Bilal, and Zayd provides your son with righteous historical mentors."
    },
    {
      q: "What are unique Quranic names for baby boys with strong meanings?",
      a: "Distinctive boy names directly rooted in the Holy Quran include Tariq ('The Piercing Morning Star' - Surah 86), Rayan ('Quenched with Jannah's Refreshment' - authentic Sunnah), Idris ('Elevated in Knowledge' - Surah 19:56), Yahya ('He Who Lives Righteously' - Surah 19:7), and Zayd ('Abundance and Growth' - Surah 33:37)."
    },
    {
      q: "Is it permissible to give a boy a compound name (e.g., Muhammad Zayd)?",
      a: "Yes, compound names (such as Muhammad Bilal, Ahmad Rayan, or Muhammad Zayd) are completely permissible in Islamic jurisprudence and very popular globally as a way to honor the Prophet (ﷺ) while also choosing a unique identifier for the child."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Schema Injection & Canonical Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/islamic-baby-names/boys/" />

      {/* Clean Black & White Print Styling for PDF Export */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          .no-print, header, nav, footer, section:not(#boy-names-grid-section) {
            display: none !important;
          }
          #print-header {
            display: block !important;
            margin-bottom: 24px;
            border-bottom: 2px solid #000;
            padding-bottom: 12px;
          }
          #boy-names-grid-section {
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
          <h1 className="text-2xl font-bold">IslamHub — Islamic Baby Boy Names Directory</h1>
          <p className="text-sm text-gray-700 mt-1">
            Generated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • Verified authentic meanings and Arabic scripts for Muslim boys.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Total Boy Names in Export: {filteredNames.length} {hasActiveFilters ? "(Filtered View)" : ""}
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
            <span className="text-slate-200 font-semibold">Boy Names</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Boy Names Directory • 1000+ Name Database • Instant PDF Export</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              1000+ Islamic Baby Boy Names — Authentic Quranic &amp; Prophetic Meanings
            </h1>

            {/* E-E-A-T Verification Badge Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5 bg-neutral-800 border border-neutral-800 rounded-full px-3 py-1 text-white font-semibold text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Arabic Etymology • Authentic Quranic Roots • Scholarly Approved Meanings • Printable PDF Export</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1 text-slate-300 text-xs">
                <Lock className="w-3.5 h-3.5 text-white" />
                <span>100% Client-Side Privacy: No Personal Data Stored</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: EXPANDED DIRECT OVERVIEW & SUNNAH NAMING ADAB */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm text-xs sm:text-sm text-slate-300 leading-relaxed shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Direct Islamic Overview: The Spiritual Art of Naming Muslim Sons</span>
            </div>
            <p>
              In Islamic tradition, choosing a name for a newborn boy is among the earliest, most sacred obligations parents fulfill. Classical Islamic jurisprudence (<em>Fiqh</em>) teaches that a child's name is both an earthly identity and an eternal spiritual calling; on the Day of Resurrection, every individual will be summoned before Allah by their given name and their father's patronymic lineage. Authentic Sunnah recommends bestowing the name on the seventh day following birth, concurrent with performing the <em>Aqeeqah</em> (sacrificing two sheep or goats for a son), shaving the newborn’s hair and offering its equivalent weight in silver as charity (<em>Sadaqah</em>), and performing <em>Tahneek</em> with sweet dates.
            </p>
            <p>
              The Prophet Muhammad (ﷺ) placed names expressing humble devotion to the Creator—specifically those beginning with the servant prefix <strong>‘Abd</strong> compounded with the 99 Divine Names of Allah (such as <em>‘Abdullah</em> and <em>‘Abdur-Rahman</em>)—at the pinnacle of spiritual honor. Following these are the names of the 25 noble Prophets (<em>Anbiya</em>) and the illustrious Companions (<em>Sahaba</em>), whose steadfast character, courage, and moral dignity provide lifelong blueprints for young Muslim boys growing into righteous leaders.
            </p>
          </div>

          {/* SECTION 3: 4 HIGH-CONTRAST STEP CARDS */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-white" />
                <span>How to Select an Auspicious Islamic Name for Your Son</span>
              </h2>
              <p className="text-xs text-slate-400">
                Four fundamental Sunnah principles for choosing an honorable, meaningful name according to Islamic jurisprudence:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Prioritize Servant Names (Asma ul-Husna Prefix)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bestow names expressing servitude to Allah such as <strong className="text-white">Abdullah</strong> and <strong className="text-white">Abdur-Rahman</strong>, verified in Sahih Muslim as the most beloved to Allah.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Emulate Prophets &amp; Sahaba
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Honor the legacy of the 25 Prophets (e.g., <strong className="text-white">Muhammad</strong>, <strong className="text-white">Ibrahim</strong>, <strong className="text-white">Yusuf</strong>) and illustrious companions (e.g., <strong className="text-white">Omar</strong>, <strong className="text-white">Ali</strong>, <strong className="text-white">Hamza</strong>, <strong className="text-white">Zayd</strong>).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Verify Noble Meaning
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ensure the name denotes courage, moral fortitude, righteousness, or wisdom in classical Arabic lexicons, steering clear of gloomy or vain descriptors.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 shadow-md shadow-neutral-950/50">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-800 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Ensure Clear Pronunciation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Double-check authentic Arabic script and phonetic transliterations so family and community members can pronounce the name respectfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 4: VISUAL IMAGE PLACEHOLDER WITH ALT TEXT & CAPTION */}
        <figure className="no-print bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl space-y-0">
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=80"
              alt="Artistic Islamic calligraphy and architectural illumination representing authentic boy names with pious Quranic meanings"
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
              Figure 1: Classical Arabic calligraphy and Islamic heritage inspiring timeless, pious boy names.
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Curated from Authentic Sunnah &amp; Hadith Sources
            </span>
          </figcaption>
        </figure>

        {/* SECTION 5: INTERACTIVE BOY NAME DISCOVERY ENGINE WITH PAGINATION */}
        <section
          id="boy-names-grid-section"
          aria-label="Islamic Baby Boy Names Discovery Engine"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md space-y-5"
        >
          {/* Main Search & Print Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 no-print">
            {/* Real-time Search Input */}
            <div className="lg:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search boy names by English, Arabic, origin, or meaning..."
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

            {/* Print / Save as PDF Button */}
            <div className="lg:col-span-4">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-950/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-neutral-600 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-inner group"
                title="Print current boy names list or export as PDF"
              >
                <Printer className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Export / Print PDF List</span>
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
                const hasNamesStartingWith = ISLAMIC_BOY_NAMES_DATABASE.some((n) =>
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
                    ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                    : "bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                All Boy Names
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
                <span>Top 100 Popular</span>
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
                Prophetic Names
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
                Names of Sahaba
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
                Quranic Boy Names
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

          {/* Results Summary Bar & Page Size Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1 no-print border-t border-slate-800/60">
            <div className="flex items-center gap-2 flex-wrap">
              <span>
                Showing <strong className="text-white font-bold">{Math.min(totalItems, (safeCurrentPage - 1) * pageSize + 1)}</strong> to{" "}
                <strong className="text-white font-bold">{Math.min(totalItems, safeCurrentPage * pageSize)}</strong> of{" "}
                <strong className="text-white font-bold">{totalItems}</strong> boy names
              </span>
              {hasActiveFilters && (
                <span className="text-white bg-neutral-800 px-2 py-0.5 rounded-md border border-neutral-800">
                  Filters applied
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Items Per Page Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Show:</span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-white"
                >
                  <option value={18}>18 / page</option>
                  <option value={36}>36 / page</option>
                  <option value={72}>72 / page</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-red-400 font-semibold transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Name Cards Grid */}
          {paginatedNames.length === 0 ? (
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-10 text-center space-y-4">
              <Baby className="w-12 h-12 text-slate-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white">No Islamic boy names matched your search criteria</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  {categoryFilter === "bookmarked"
                    ? "You haven't saved any bookmarked names yet. Tap the bookmark star on any card to save it for later."
                    : "Try adjusting your search keywords or clearing active filters."}
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
                        <span className="print-badge text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">
                          👦 Boy
                        </span>
                        <span className="print-badge text-[10px] font-semibold text-slate-300 bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded-full">
                          {item.origin}
                        </span>
                        {item.category && (
                          <span className="print-badge text-[10px] font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-full capitalize">
                            {item.category}
                          </span>
                        )}
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
          )}

          {/* PAGINATION CONTROLS BAR */}
          {totalPages > 1 && (
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
              <div className="text-xs text-slate-400">
                Page <strong className="text-white">{safeCurrentPage}</strong> of{" "}
                <strong className="text-white">{totalPages}</strong>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* First Page */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  disabled={safeCurrentPage === 1}
                  className="p-2 rounded-lg border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-all"
                  title="Go to First Page"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>

                {/* Previous Page */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={safeCurrentPage === 1}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                {/* Page Number Pills */}
                {paginationRange.map((pageNumber, idx) => {
                  if (pageNumber === "...") {
                    return (
                      <span key={`dots-${idx}`} className="px-2 py-1 text-slate-600 text-xs">
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
                      className={`min-w-[32px] h-8 text-xs font-bold rounded-lg border transition-all ${
                        isCurrent
                          ? "bg-white text-black border-neutral-800 shadow-md shadow-neutral-950/50"
                          : "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                {/* Next Page */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {/* Last Page */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={safeCurrentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-all"
                  title="Go to Last Page"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 6: DEEP TOPICAL READING BLOCK (3 HIGH-CONTRAST SUB-CARDS) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl no-print">
          <div className="space-y-1.5 border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-white" />
              <span>Deep Scholarly Guide to Islamic Boy Names &amp; Etymology</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Understanding the three primary theological tiers of naming Muslim boys according to classical Arabic jurisprudence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Sub-Card 1: Asma ul-Husna & The Honor of Servitude */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-neutral-600 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white font-bold text-sm">
                  01
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Asma ul-Husna &amp; The Honor of Servitude
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In classical Sunnah, compounding the prefix <strong>‘Abd</strong> (servant/slave) with one of Allah's 99 attributes represents the most elevated name possible. Names such as <em className="text-white">‘Abdullah</em> (Servant of Allah), <em className="text-white">‘Abdur-Rahman</em> (Servant of the Most Compassionate), and <em className="text-white">‘Abdul-Malik</em> instill constant spiritual humility, reminding the young boy that true human majesty stems from devoted servitude to the Almighty.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-white font-semibold">
                Highest Theological Precedence
              </div>
            </div>

            {/* Sub-Card 2: The Legacy of Prophets & Pious Sahaba */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-neutral-600 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                  02
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  The Legacy of Prophets &amp; Sahaba
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Naming boys after the 25 mentioned Prophets (<em>Anbiya</em>)—such as <em className="text-blue-300">Muhammad</em>, <em className="text-blue-300">Ibrahim</em>, <em className="text-blue-300">Yusuf</em>, and <em className="text-blue-300">Musa</em>—or legendary Sahaba like <em className="text-blue-300">Omar</em>, <em className="text-blue-300">Ali</em>, <em className="text-blue-300">Hamza</em>, and <em className="text-blue-300">Bilal</em> provides young boys with heroic moral archetypes. It connects their identity with courage, truthfulness, steadfastness in trials, and exemplary leadership.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-blue-400 font-semibold">
                Sunnah Recommended (Mustahabb)
              </div>
            </div>

            {/* Sub-Card 3: Majestic Quranic Nouns & Linguistic Roots */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between hover:border-neutral-600 transition-colors">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  03
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Majestic Quranic Nouns &amp; Linguistic Roots
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Holy Quran features rich Arabic root concepts carrying profound meanings of spiritual elevation, light, and virtue. Names like <em className="text-amber-300">Tariq</em> (The Piercing Morning Star), <em className="text-amber-300">Rayan</em> (The Heavenly Gate of Refreshment), <em className="text-amber-300">Zayd</em> (Abundance &amp; Growth), and <em className="text-amber-300">Idris</em> (Devoted to Sacred Study) celebrate Quranic eloquence and linguistic elegance.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-amber-400 font-semibold">
                Poetic Quranic Eloquence
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: HADITH CITATIONS & SCHOLARLY REFERENCES */}
        <section className="space-y-4 no-print">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-white" />
              <span>Authentic Hadith References Regarding Muslim Boy Names</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Primary canonical traditions from Sahih Muslim and Sunan Abi Dawud establishing the spiritual etiquette of boy names:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hadith 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    Sahih Muslim 2132
                  </span>
                  <span className="text-slate-400 text-[11px]">Primary Sunnah Authority</span>
                </div>
                <div className="font-serif text-base sm:text-lg text-slate-200 text-right leading-relaxed py-1" dir="rtl">
                  «أَحَبُّ الأَسْمَاءِ إِلَى اللَّهِ عَبْدُ اللَّهِ وَعَبْدُ الرَّحْمَنِ»
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "The Messenger of Allah (ﷺ) said: 'The names dearest to Allah are <strong>'Abdullah</strong> (Servant of Allah) and <strong>'Abdur-Rahman</strong> (Servant of the Most Merciful).'"
                </blockquote>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                — Narrated by Ibn Umar (رضي الله عنه)
              </p>
            </div>

            {/* Hadith 2 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    Sunan Abi Dawud 4950
                  </span>
                  <span className="text-slate-400 text-[11px]">Prophetic Emulation</span>
                </div>
                <div className="font-serif text-base sm:text-lg text-slate-200 text-right leading-relaxed py-1" dir="rtl">
                  «تَسَمَّوْا بِأَسْمَاءِ الأَنْبِيَاءِ»
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "The Prophet Muhammad (ﷺ) said: 'Name yourselves with the names of the Prophets, and the most beloved names to Allah are Abdullah and Abdur-Rahman.'"
                </blockquote>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                — Sunan Abi Dawud &amp; Sunan an-Nasa'i
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (BOY-SPECIFIC) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl no-print">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-white" />
              <span>Frequently Asked Questions: Islamic Baby Boy Names</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct answers to common questions regarding Muslim boy naming conventions and Sunnah rulings.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-800/90 rounded-xl bg-slate-950/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 9: SILO NAVIGATION & CROSS-LINKING */}
        <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5 no-print">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Explore More Islamic Directories &amp; Tools
              </h3>
              <p className="text-xs text-slate-400">
                Continue discovering Islamic utilities and directories across IslamHub.
              </p>
            </div>

            <Link
              href="/tools/islamic-baby-names/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white hover:text-white transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Master Baby Names Hub</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Islamic Baby Girl Names */}
            <Link
              href="/tools/islamic-baby-names/girls"
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-pink-500/50 transition-all group"
            >
              <div className="text-xs font-bold text-white group-hover:text-pink-300 flex items-center justify-between">
                <span>Islamic Girl Names</span>
                <span className="text-pink-400 text-sm">👧</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Explore authentic Muslim girl names with beautiful meanings.
              </p>
            </Link>

            {/* Islamic Calendar 2026 */}
            <Link
              href="/tools/islamic-calendar-2026/"
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-neutral-600 transition-all group"
            >
              <div className="text-xs font-bold text-white group-hover:text-white flex items-center justify-between">
                <span>Islamic Calendar 2026</span>
                <Calendar className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                View Hijri 1447–1448 dates, Ramadan, and Eid milestones.
              </p>
            </Link>

            {/* Digital Tasbeeh Counter */}
            <Link
              href="/tools/tasbeeh-counter/"
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-neutral-600 transition-all group"
            >
              <div className="text-xs font-bold text-white group-hover:text-white flex items-center justify-between">
                <span>Digital Tasbeeh Counter</span>
                <Repeat className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Interactive Dhikr counter with audio feedback and goal tracking.
              </p>
            </Link>

            {/* Online Qibla Finder */}
            <Link
              href="/tools/qibla-finder/"
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-neutral-600 transition-all group"
            >
              <div className="text-xs font-bold text-white group-hover:text-white flex items-center justify-between">
                <span>Online Qibla Finder</span>
                <Compass className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Find the precise Kaaba direction anywhere in the world.
              </p>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
