export interface IslamicName {
  id: string;
  name: string;
  arabic: string;
  meaning: string;
  gender: 'boy' | 'girl' | 'unisex';
  origin: string;
  quranicRef?: string;
  isProphetic?: boolean;
  isSahaba?: boolean;
  isTop100?: boolean;
}

export const ISLAMIC_NAMES: IslamicName[] = [
  { id: "zayd", name: "Zayd", arabic: "زيد", meaning: "Growth, abundance, and increase", gender: "boy", origin: "Arabic", quranicRef: "Surah Al-Ahzab 33:37", isSahaba: true, isTop100: true },
  { id: "aaliyah", name: "Aaliyah", arabic: "عالية", meaning: "Exalted, highest social standing, and noble", gender: "girl", origin: "Arabic", isTop100: true },
  { id: "rayan", name: "Rayan", arabic: "ريان", meaning: "Luxuriant, plentiful, and gate of Paradise for fasters", gender: "boy", origin: "Arabic", isTop100: true },
  { id: "inayah", name: "Inayah", arabic: "عناية", meaning: "Care, concern, protection, and divine grace", gender: "girl", origin: "Quranic / Arabic", quranicRef: "Derived from Quranic root", isTop100: true },
  { id: "muhammad", name: "Muhammad", arabic: "محمد", meaning: "Praiseworthy and commendable", gender: "boy", origin: "Arabic", quranicRef: "Surah Muhammad 47:2", isProphetic: true, isTop100: true },
  { id: "fatima", name: "Fatima", arabic: "فاطمة", meaning: "One who abstains; daughter of Prophet Muhammad (PBUH)", gender: "girl", origin: "Arabic", isSahaba: true, isTop100: true },
  { id: "omar", name: "Omar", arabic: "عمر", meaning: "Flourishing, long-lived, and prosperous", gender: "boy", origin: "Arabic", isSahaba: true, isTop100: true },
  { id: "maryam", name: "Maryam", arabic: "مريم", meaning: "Pious, devout, and mother of Prophet Isa (AS)", gender: "girl", origin: "Hebrew / Arabic", quranicRef: "Surah Maryam 19:16", isTop100: true },
  { id: "hamza", name: "Hamza", arabic: "حمزة", meaning: "Steadfast, strong, and lion", gender: "boy", origin: "Arabic", isSahaba: true, isTop100: true },
  { id: "zainab", name: "Zainab", arabic: "زينب", meaning: "Fragrant flower and ornament of the father", gender: "girl", origin: "Arabic", isSahaba: true, isTop100: true }
];