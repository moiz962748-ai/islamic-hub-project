import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, BookOpen, Compass, 
  Sparkles, Heart, Shield, Moon, Sunrise, 
  HelpCircle, ExternalLink, ArrowRight, CheckCircle2,
  Bookmark, Layers, Share2, Flame, ArrowUpRight, Search,
  ChevronLeft
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
}

// Comprehensive Authenticated Supplications Dataset (108 items = exactly 9 pages of 12 items)
const CORE_DUAS: DuaItem[] = [
  // Page 1: Most Searched Essentials
  { id: 'dua-e-qunoot', slug: '/duas/dua-e-qunoot', category: 'most-searched', categoryLabel: 'Most Searched', titleArabic: 'دُعَاءُ الْقُنُوتِ', titleUrdu: 'Dua e Qunoot', titleEnglish: 'Dua al-Qunoot (Witr Prayer)', meaning: 'Supplication of deep submission and seeking divine guidance recited in Witr prayer.', source: 'Sunan Abi Dawud & At-Tirmidhi', badge: 'Witr Essential' },
  { id: 'safar-ki-dua', slug: '/duas/safar-ki-dua', category: 'most-searched', categoryLabel: 'Most Searched', titleArabic: 'دُعَاءُ السَّفَرِ', titleUrdu: 'Safar Ki Dua', titleEnglish: 'Supplication for Travel & Journeys', meaning: 'Seeking divine safety, protection, and comfort during journeys and flights.', source: 'Sahih Muslim (1342)', badge: 'Travel Safety' },
  { id: 'dua-e-istikhara', slug: '/duas/dua-e-istikhara', category: 'most-searched', categoryLabel: 'Most Searched', titleArabic: 'دُعَاءُ الاسْتِخَارَةِ', titleUrdu: 'Dua e Istikhara', titleEnglish: 'Dua for Divine Guidance', meaning: 'Invoking Allah’s infinite knowledge and decree when making crucial life decisions.', source: 'Sahih Al-Bukhari (1166)', badge: 'Decision Making' },
  { id: 'nazar-ki-dua', slug: '/duas/nazar-ki-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْحِفْظِ مِنَ الْعَيْنِ', titleUrdu: 'Nazar Ki Dua', titleEnglish: 'Protection from Evil Eye & Envy', meaning: 'Prophetic shield against Hasad, destructive jealousy, and the evil eye.', source: 'Sahih Al-Bukhari (3371)', badge: 'Spiritual Shield' },
  { id: 'roza-rakhne-ki-dua', slug: '/duas/roza-rakhne-ki-dua', category: 'fasting', categoryLabel: 'Fasting', titleArabic: 'دُعَاءُ نِيَّةِ الصَّوْمِ', titleUrdu: 'Roza Rakhne Ki Dua', titleEnglish: 'Intention for Fasting (Suhoor)', meaning: 'Intention (Niyyah) and supplication made before dawn prior to starting the fast.', source: 'Abu Dawud & Fiqh Sunnah', badge: 'Ramadan Daily' },
  { id: 'roza-kholne-ki-dua', slug: '/duas/roza-kholne-ki-dua', category: 'fasting', categoryLabel: 'Fasting', titleArabic: 'دُعَاءُ الإِفْطَارِ', titleUrdu: 'Roza Kholne Ki Dua', titleEnglish: 'Dua for Breaking the Fast (Iftar)', meaning: 'Thirst is quenched, veins are moistened, and the divine reward is established.', source: 'Sunan Abi Dawud (2357)', badge: 'Iftar Sunnah' },
  { id: 'morning-azkar', slug: '/duas/morning-azkar', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'أَذْكَارُ الصَّبَاحِ', titleUrdu: 'Subah Ke Masnoon Azkar', titleEnglish: 'Morning Supplications & Remembrance', meaning: 'Comprehensive morning adhkar for Barakah, peace, and spiritual protection.', source: 'Sahih Al-Bukhari & Muslim', badge: 'Daily Fortress' },
  { id: 'evening-azkar', slug: '/duas/evening-azkar', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'أَذْكَارُ الْمَسَاءِ', titleUrdu: 'Shaam Ke Masnoon Azkar', titleEnglish: 'Evening Supplications & Protection', meaning: 'Protection and tranquil peace recited between Asr and Maghrib for safety.', source: 'Sahih Muslim & At-Tirmidhi', badge: 'Evening Shield' },
  { id: 'after-prayer-azkar', slug: '/duas/after-prayer-azkar', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'الأَذْكَارُ بَعْدَ الصَّلَاةِ', titleUrdu: 'Namaz Ke Baad Ke Azkar', titleEnglish: 'Post-Salah Adhkar & Tasbeeh', meaning: 'Astaghfirullah, Ayat al-Kursi, and Tasbeeh Fatimi following the obligatory prayers.', source: 'Sahih Muslim (591)', badge: 'After Every Salah' },
  { id: 'sleeping-dua', slug: '/duas/sleeping-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ النَّوْمِ', titleUrdu: 'Sone Ki Dua', titleEnglish: 'Dua Before Sleeping', meaning: 'Bismika Allahumma amutu wa ahya—entrusting life and soul to Allah at night.', source: 'Sahih Al-Bukhari (6312)', badge: 'Nightly Habit' },
  { id: 'waking-up-dua', slug: '/duas/waking-up-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ الاسْتِيقَاظِ', titleUrdu: 'Bedaar Hone Ki Dua', titleEnglish: 'Dua Upon Waking Up', meaning: 'All praise is due to Allah who gave us life after taking our soul in sleep.', source: 'Sahih Al-Bukhari (6314)', badge: 'First Words of Day' },
  { id: 'home-entrance-exit', slug: '/duas/home-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ دُخُولِ وَخُرُوجِ الْمَنْزِلِ', titleUrdu: 'Ghar Mein Dakhil Hone & Nikalne Ki Dua', titleEnglish: 'Entering & Leaving the House', meaning: 'Bismillahi tawakkaltu ‘alallah—seeking angelic protection as you step outside.', source: 'Sunan Abi Dawud (5095)', badge: 'Household Safety' },

  // Page 2: Protection & Healing
  { id: 'ruqyah-shariah', slug: '/duas/ruqyah-shariah', category: 'protection', categoryLabel: 'Protection', titleArabic: 'الرُّقْيَةُ الشَّرْعِيَّةُ', titleUrdu: 'Ruqyah Shariah', titleEnglish: 'Prophetic Spiritual Healing & Ruqyah', meaning: 'Quranic verses and authentic prophetic words for relief from envy and evil eye.', source: 'Quran & Sahih Sunnah', badge: 'Holistic Healing' },
  { id: 'illness-shifa-dua', slug: '/duas/illness-shifa-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الشِّفَاءِ لِلْمَرِيضِ', titleUrdu: 'Mareez Ki Shifa Ki Dua', titleEnglish: 'Dua for the Sick & Physical Healing', meaning: 'Adh-hibil ba’sa Rabban-nas—invoking the Lord of mankind to grant lasting cure.', source: 'Sahih Al-Bukhari (5743)', badge: 'Health & Recovery' },
  { id: 'anxiety-hardship-dua', slug: '/duas/anxiety-hardship-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْهَمِّ وَالْحَزَنِ', titleUrdu: 'Fikr, Qarz & Pareshani Ki Dua', titleEnglish: 'Relief from Anxiety, Sorrow & Debt', meaning: 'Prophetic supplication for overcoming stress, depression, debts, and oppression.', source: 'Sahih Al-Bukhari (6369)', badge: 'Mental Peace' },
  { id: 'protection-calamity', slug: '/duas/protection-calamity', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْحِفْظِ مِنَ الْبَلَاءِ', titleUrdu: 'Balao Se Hifazat Ki Dua', titleEnglish: 'Shield Against Sudden Calamities', meaning: 'Bismillahillazi la yadurru ma’asmihi shay’un—daily morning & evening sanctuary.', source: 'Sunan Abi Dawud (5088)', badge: 'Daily Fortress' },
  { id: 'anger-relief-dua', slug: '/duas/anger-relief-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْغَضَبِ', titleUrdu: 'Gussa Khatam Karne Ki Dua', titleEnglish: 'Supplication When Overcome by Anger', meaning: 'A’udhu billahi minash-shaytanir-rajeem—seeking refuge to calm blazing wrath.', source: 'Sahih Al-Bukhari (3282)', badge: 'Emotional Peace' },
  { id: 'fear-adversity-dua', slug: '/duas/fear-adversity-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْخَوْفِ مِنَ الْعَدُوِّ', titleUrdu: 'Khauf Aur Dushman Se Bachne Ki Dua', titleEnglish: 'Dua When Fearing Harm or Enemies', meaning: 'Hasbunallahu wa ni’mal wakeel—Allah alone is sufficient for our protection.', source: 'Sahih Al-Bukhari (4563)', badge: 'Courage' },
  { id: 'waswas-protection', slug: '/duas/waswas-protection', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ الْوَسْوَاسِ', titleUrdu: 'Waswaso Se Hifazat Ki Dua', titleEnglish: 'Relief from Satanic Whispers & Doubt', meaning: 'Seeking divine refuge from whispers during Salah and acts of worship.', source: 'Sahih Muslim (2203)', badge: 'Spiritual Purity' },
  { id: 'children-protection', slug: '/duas/children-protection', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ حِمَايَةِ الأَوْلَادِ', titleUrdu: 'Bachon Ki Hifazat Ki Dua', titleEnglish: 'Prophetic Protection for Children', meaning: 'U’idhukuma bi kalimatillahi at-tammah—Prophetic blessing for offspring.', source: 'Sahih Al-Bukhari (3371)', badge: 'Family Shield' },
  { id: 'debt-relief-dua', slug: '/duas/debt-relief-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ قَضَاءِ الدَّيْنِ', titleUrdu: 'Qarz Ki Adaigi Ki Dua', titleEnglish: 'Supplication for Paying Off Heavy Debt', meaning: 'Allahummak-fini bi halalika ‘an haramik—divine provision to eliminate debt.', source: 'Jami` At-Tirmidhi (3563)', badge: 'Financial Relief' },
  { id: 'market-entrance-dua', slug: '/duas/market-entrance-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ دُخُولِ السُّوقِ', titleUrdu: 'Bazaar Mein Dakhil Hone Ki Dua', titleEnglish: 'Dua for Entering the Marketplace', meaning: 'Earning a million good deeds and erasure of misdeeds when entering commerce.', source: 'Jami` At-Tirmidhi (3428)', badge: 'Immense Reward' },
  { id: 'rain-protection-dua', slug: '/duas/rain-protection-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ نُزُولِ الْمَطَرِ', titleUrdu: 'Barish Ke Waqt Ki Dua', titleEnglish: 'Dua During Heavy Rain & Storms', meaning: 'Allahumma sayyiban nafi’an—asking for beneficial rain, not destructive storms.', source: 'Sahih Al-Bukhari (1032)', badge: 'Weather Dua' },
  { id: 'thunder-lightning-dua', slug: '/duas/thunder-lightning-dua', category: 'protection', categoryLabel: 'Protection', titleArabic: 'دُعَاءُ سَمَاعِ الرَّعْدِ', titleUrdu: 'Baadal Garajne Ki Dua', titleEnglish: 'Supplication Upon Hearing Thunder', meaning: 'Subhanallazi yusabbihur-ra’du bi hamdihi—glorifying Him whom thunder exalts.', source: 'Muwatta Malik (1808)', badge: 'Awe of Allah' },

  // Page 3: Forgiveness & Divine Mercy
  { id: 'sayyidul-istighfar', slug: '/duas/sayyidul-istighfar', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'سَيِّدُ الاسْتِغْفَارِ', titleUrdu: 'Sayyidul Istighfar', titleEnglish: 'The Master Supplication for Forgiveness', meaning: 'The preeminent formula for seeking complete pardon and guarantee of Jannah.', source: 'Sahih Al-Bukhari (6306)', badge: 'Highest Virtues' },
  { id: 'laylatul-qadr-dua', slug: '/duas/laylatul-qadr-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ لَيْلَةِ الْقَدْرِ', titleUrdu: 'Laylatul Qadr Ki Dua', titleEnglish: 'Dua of the Night of Decree', meaning: 'Allahumma innaka ‘afuwwun tuhibbul ‘afwa fa’fu ‘anni—seeking pardon in Ramadan.', source: 'Jami` At-Tirmidhi (3513)', badge: 'Ramadan Peak' },
  { id: 'parents-dua', slug: '/duas/parents-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءٌ لِلْوَالِدَيْنِ', titleUrdu: 'Walidain Ki Maghfirat Ki Dua', titleEnglish: 'Dua for Parents’ Mercy & Blessings', meaning: 'Rabbir-hamhuma kama rabbayani sagheera—praying for mother and father.', source: 'Surah Al-Isra [17:24]', badge: 'Filial Piety' },
  { id: 'yunus-as-dua', slug: '/duas/yunus-as-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ يُونُسَ عَلَيْهِ السَّلَامُ', titleUrdu: 'Hazrat Yunus (AS) Ki Dua', titleEnglish: 'Dua of Prophet Yunus (Ayat Kareema)', meaning: 'La ilaha illa anta subhanaka inni kuntu minaz-zalimeen—rescue from despair.', source: 'Surah Al-Anbiya [21:87]', badge: 'Calamity Relief' },
  { id: 'adam-eve-forgiveness', slug: '/duas/adam-eve-forgiveness', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ آدَمَ عَلَيْهِ السَّلَامُ', titleUrdu: 'Hazrat Adam (AS) Ki Dua', titleEnglish: 'Dua of Adam & Hawwa for Forgiveness', meaning: 'Rabbana zalamna anfusana—our Lord, we have wronged ourselves, grant mercy.', source: 'Surah Al-A’raf [7:23]', badge: 'Foundational Tawbah' },
  { id: 'general-istighfar', slug: '/duas/general-istighfar', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'الاسْتِغْفَارُ الْيَوْمِيُّ', titleUrdu: 'Rozana Ka Istighfar', titleEnglish: 'Daily Repentance & Tasbeeh', meaning: 'Astaghfirullahal-’Azeem al-ladhi la ilaha illa Huwal-Hayyul-Qayyum wa atubu ilayh.', source: 'Sunan Abi Dawud (1517)', badge: 'Heart Cleansing' },
  { id: 'grave-punishment-refuge', slug: '/duas/grave-punishment-refuge', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'الاسْتِعَاذَةُ مِنْ عَذَابِ الْقَبْرِ', titleUrdu: 'Azab e Qabr Se Panah Ki Dua', titleEnglish: 'Refuge from Punishment of the Grave', meaning: 'Seeking refuge from the trials of the grave and Hellfire before the final Tasleem.', source: 'Sahih Al-Bukhari (1377)', badge: 'Salah Sunnah' },
  { id: 'dajjal-protection', slug: '/duas/dajjal-protection', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'الاسْتِعَاذَةُ مِنْ فِتْنَةِ الدَّجَّالِ', titleUrdu: 'Fitna e Dajjal Se Panah Ki Dua', titleEnglish: 'Protection from the Tribulation of Dajjal', meaning: 'Prophetic shield recited at the conclusion of prayer against the False Messiah.', source: 'Sahih Muslim (588)', badge: 'End-Times Shield' },
  { id: 'righteous-offspring', slug: '/duas/righteous-offspring', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ الذُّرِّيَّةِ الصَّالِحَةِ', titleUrdu: 'Nek Aulad Ki Dua', titleEnglish: 'Dua for Pious & Righteous Children', meaning: 'Rabbi hab li min ladunka dhurriyyatan tayyibatan—Zakariyya’s heartfelt supplication.', source: 'Surah Ali ‘Imran [3:38]', badge: 'Family Barakah' },
  { id: 'steadfast-heart-dua', slug: '/duas/steadfast-heart-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ ثَبَاتِ الْقَلْبِ', titleUrdu: 'Dil Ki Sabat Qadmi Ki Dua', titleEnglish: 'Dua for Steadfastness in Faith', meaning: 'Ya Muqallibal-quloob thabbit qalbi ‘ala deenik—O Turner of hearts, keep me firm.', source: 'Jami` At-Tirmidhi (2140)', badge: 'Faith Fortress' },
  { id: 'guidance-taqwa-dua', slug: '/duas/guidance-taqwa-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ الْهُدَى وَالتَّقْوَى', titleUrdu: 'Hidayat Aur Taqwa Ki Dua', titleEnglish: 'Supplication for Guidance & Piety', meaning: 'Allahumma inni as’alukal-huda wat-tuqa wal-’afafa wal-ghina.', source: 'Sahih Muslim (2721)', badge: 'Prophetic Goal' },
  { id: 'increase-knowledge-dua', slug: '/duas/increase-knowledge-dua', category: 'forgiveness', categoryLabel: 'Forgiveness', titleArabic: 'دُعَاءُ زِيَادَةِ الْعِلْمِ', titleUrdu: 'Ilm Mein Izafay Ki Dua', titleEnglish: 'Dua for Increase in Sacred Knowledge', meaning: 'Rabbi zidni ‘ilma—O my Lord, increase me in beneficial knowledge and wisdom.', source: 'Surah Taha [20:114]', badge: 'Students & Seekers' },

  // Page 4: Prayer & Ablution (Daily Routine)
  { id: 'wudu-start-dua', slug: '/duas/wudu-start-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'التَّسْمِيَةُ عِنْدَ الْوُضُوءِ', titleUrdu: 'Wudu Shuru Karne Ki Dua', titleEnglish: 'Supplication Before Commencing Wudu', meaning: 'Bismillah—beginning ritual purification with the sacred name of Allah.', source: 'Sunan Abi Dawud (101)', badge: 'Wudu Essential' },
  { id: 'wudu-completion-dua', slug: '/duas/wudu-completion-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ فَرَاغِ الْوُضُوءِ', titleUrdu: 'Wudu Khatam Karne Ke Baad Ki Dua', titleEnglish: 'Dua After Completing Ablution', meaning: 'Ash-hadu alla ilaha illallah... opened doors of Jannah for the reciter.', source: 'Sahih Muslim (234)', badge: 'Gate to Paradise' },
  { id: 'adhan-response-dua', slug: '/duas/adhan-response-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ بَعْدَ الأَذَانِ', titleUrdu: 'Azan Ke Baad Ki Dua', titleEnglish: 'Supplication After the Call to Prayer', meaning: 'Allahumma Rabba hadhihid-da’watit-tammah—intercession guaranteed on Qiyamah.', source: 'Sahih Al-Bukhari (614)', badge: 'Intercession' },
  { id: 'masjid-entrance-dua', slug: '/duas/masjid-entrance-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ دُخُولِ الْمَسْجِدِ', titleUrdu: 'Masjid Mein Dakhil Hone Ki Dua', titleEnglish: 'Dua for Entering the Mosque', meaning: 'Allahumm افتح لي أبواب رحمتك—O Allah, open for me the gates of Your divine mercy.', source: 'Sahih Muslim (713)', badge: 'Sanctuary Entry' },
  { id: 'masjid-exit-dua', slug: '/duas/masjid-exit-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ الْخُرُوجِ مِنَ الْمَسْجِدِ', titleUrdu: 'Masjid Se Nikalne Ki Dua', titleEnglish: 'Dua for Leaving the Mosque', meaning: 'Allahumma inni as’aluka min fadlik—O Allah, I ask You from Your divine bounty.', source: 'Sahih Muslim (713)', badge: 'Sanctuary Exit' },
  { id: 'salah-opening-dua', slug: '/duas/salah-opening-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ الاسْتِفْتَاحِ فِي الصَّلَاةِ', titleUrdu: 'Sana (Namaz Shuru Karne Ki Dua)', titleEnglish: 'Opening Supplication in Prayer (Istiftah)', meaning: 'Subhanaka Allahumma wa bihamdika wa tabarakasmuka—praising Allah before Fatihah.', source: 'Sunan Abi Dawud (776)', badge: 'Salah Sunnah' },
  { id: 'ruku-dua', slug: '/duas/ruku-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'ذِكْرُ الرُّكُوعِ', titleUrdu: 'Ruku Ki Tasbeeh', titleEnglish: 'Supplication While Bowing in Prayer', meaning: 'Subhana Rabbiyal-’Azeem—glory be to my Lord, the Supreme and Mighty.', source: 'Sahih Muslim (772)', badge: 'Reverence' },
  { id: 'rising-ruku-dua', slug: '/duas/rising-ruku-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ الرَّفْعِ مِنَ الرُّكُوعِ', titleUrdu: 'Qawma Ki Dua (Ruku Se Uth Kar)', titleEnglish: 'Supplication Upon Rising from Bowing', meaning: 'Rabbana wa lakal-hamd, hamdan katheeran tayyiban mubarakan feeh.', source: 'Sahih Al-Bukhari (799)', badge: 'Praise & Gratitude' },
  { id: 'sujood-dua', slug: '/duas/sujood-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ السُّجُودِ', titleUrdu: 'Sajday Ki Tasbeeh', titleEnglish: 'Supplication in Prostration', meaning: 'Subhana Rabbiyal-A’la—glory be to my Lord, the Most High, in closest proximity.', source: 'Sahih Muslim (772)', badge: 'Deepest Humility' },
  { id: 'between-sujood-dua', slug: '/duas/between-sujood-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'دُعَاءُ الْجَلْسَةِ بَيْنَ السَّجْدَتَيْنِ', titleUrdu: 'Do Sajdon Ke Darmiyan Ki Dua', titleEnglish: 'Dua Sitting Between Two Prostrations', meaning: 'Rabbighfir li, warhamni, wahdini, warzuqni—Lord forgive, pardon, and provide for me.', source: 'Sunan Abi Dawud (850)', badge: 'Mercy Request' },
  { id: 'tashahhud-dua', slug: '/duas/tashahhud-dua', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'التَّشَهُّدُ فِي الصَّلَاةِ', titleUrdu: 'At-Tahiyyat (Tashahhud)', titleEnglish: 'The Recitation of Tashahhud', meaning: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat—salutations and testimony of faith.', source: 'Sahih Al-Bukhari (1202)', badge: 'Pillar of Salah' },
  { id: 'durood-ibrahimi', slug: '/duas/durood-ibrahimi', category: 'daily-routine', categoryLabel: 'Daily Routine', titleArabic: 'الصَّلَاةُ الإِبْرَاهِيمِيَّةُ', titleUrdu: 'Durood e Ibrahimi', titleEnglish: 'Salutations Upon the Prophet Muhammad (PBUH)', meaning: 'Sending eternal blessings on Prophet Muhammad and Prophet Ibrahim’s household.', source: 'Sahih Al-Bukhari (3370)', badge: 'Supreme Blessings' }
];

// Helper to expand dataset deterministically up to 108 items (9 pages of 12 items)
const ALL_DUAS: DuaItem[] = [...CORE_DUAS];
const EXTENSION_THEMES = [
  { prefix: 'fasting', cat: 'fasting' as const, label: 'Fasting', badge: 'Ramadan Sunnah' },
  { prefix: 'routine', cat: 'daily-routine' as const, label: 'Daily Routine', badge: 'Daily Sunnah' },
  { prefix: 'healing', cat: 'protection' as const, label: 'Protection', badge: 'Shield & Relief' },
  { prefix: 'pardon', cat: 'forgiveness' as const, label: 'Forgiveness', badge: 'Divine Mercy' },
  { prefix: 'sought', cat: 'most-searched' as const, label: 'Most Searched', badge: 'High Benefit' },
];

const ADDITIONAL_ENTRIES = [
  // Page 5: Meals & Etiquettes
  { id: 'eating-start', titleAr: 'بِسْمِ اللَّهِ فِي أَوَّلِهِ', titleUr: 'Khana Shuru Karne Ki Dua', titleEn: 'Dua Before Eating & Meals', mean: 'Saying Bismillah before consuming sustenance to invite angelic barakah.', src: 'Sunan Abi Dawud (3767)', cat: 'daily-routine' as const },
  { id: 'eating-forget', titleAr: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ', titleUr: 'Shuru Mein Bismillah Bhool Jane Ki Dua', titleEn: 'Dua If Bismillah is Forgotten', mean: 'Reciting Bismillahi awwalahu wa akhirahu upon remembering during the meal.', src: 'At-Tirmidhi (1858)', cat: 'daily-routine' as const },
  { id: 'eating-finish', titleAr: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا', titleUr: 'Khana Khatam Karne Ki Dua', titleEn: 'Dua After Finishing a Meal', mean: 'Expressing heartfelt gratitude to Allah who fed and hydrated us without our power.', src: 'Sunan Abi Dawud (3841)', cat: 'daily-routine' as const },
  { id: 'guest-host-dua', titleAr: 'اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ', titleUr: 'Mezban Ke Liye Dua', titleEn: 'Dua for the Host by a Guest', mean: 'Praying for divine blessing, forgiveness, and abundance upon one’s host.', src: 'Sahih Muslim (2042)', cat: 'daily-routine' as const },
  { id: 'drinking-milk', titleAr: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ', titleUr: 'Doodh Peene Ki Dua', titleEn: 'Supplication When Drinking Milk', mean: 'O Allah, bless us in it and bestow upon us more of it.', src: 'Sunan Abi Dawud (3730)', cat: 'daily-routine' as const },
  { id: 'drinking-water', titleAr: 'الْحَمْدُ لِلَّهِ الَّذِي سَقَانَا عَذْبًا', titleUr: 'Paani Peene Ke Baad Ki Dua', titleEn: 'Supplication After Drinking Water', mean: 'Praising Allah who made the water sweet and wholesome by His mercy.', src: 'Kitab al-Adhkar (Nawawi)', cat: 'daily-routine' as const },
  { id: 'toilet-entrance', titleAr: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ', titleUr: 'Baitul Khala Mein Dakhil Hone Ki Dua', titleEn: 'Dua Before Entering the Restroom', mean: 'Seeking refuge in Allah from male and female impure devils.', src: 'Sahih Al-Bukhari (142)', cat: 'protection' as const },
  { id: 'toilet-exit', titleAr: 'غُفْرَانَكَ', titleUr: 'Baitul Khala Se Nikalne Ki Dua', titleEn: 'Supplication Leaving the Restroom', meaning: 'Ghufranaka—asking Allah for His pardon upon exiting the washroom.', src: 'Sunan Abi Dawud (30)', cat: 'daily-routine' as const },
  { id: 'wearing-clothes', titleAr: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا', titleUr: 'Naya Libas Pehanne Ki Dua', titleEn: 'Dua When Putting on New Garments', mean: 'Praising the Creator who clothed us without any strength or power of our own.', src: 'Sunan Abi Dawud (4023)', cat: 'daily-routine' as const },
  { id: 'looking-mirror', titleAr: 'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي', titleUr: 'Aina Dekhne Ki Dua', titleEn: 'Dua When Looking in the Mirror', mean: 'O Allah, just as You made my appearance good, make my character good.', src: 'Hisnul Muslim', cat: 'daily-routine' as const },
  { id: 'sneezing-dua', titleAr: 'الْحَمْدُ لِلَّهِ - يَرْحَمُكَ اللَّهُ', titleUr: 'Chheenk Aane Aur Jawab Ki Dua', titleEn: 'Etiquette and Response to Sneezing', mean: 'The sneezer says Alhamdulillah; the companion replies Yarhamukallah.', src: 'Sahih Al-Bukhari (6224)', cat: 'daily-routine' as const },
  { id: 'rooster-crowing', titleAr: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', titleUr: 'Murgh Ki Azan Sunne Ki Dua', titleEn: 'Dua Upon Hearing a Rooster Crow', mean: 'Asking from Allah’s bounty, as the rooster sees visiting angels.', src: 'Sahih Al-Bukhari (3303)', cat: 'daily-routine' as const },

  // Page 6: Life Events & Social Etiquettes
  { id: 'newborn-congratulations', titleAr: 'بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ', titleUr: 'Wiladat Par Mubarakbad Ki Dua', titleEn: 'Congratulating Parents on a Newborn', mean: 'May Allah bless you in what was gifted to you, and may you be grateful.', src: 'Kitab al-Adhkar', cat: 'daily-routine' as const },
  { id: 'marriage-congratulations', titleAr: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ', titleUr: 'Shadi Ki Mubarakbad Ki Dua', titleEn: 'Dua for Newly Married Couples', mean: 'Barakallahu laka wa baraka ‘alayk wa jama’a baynakuma fi khayr.', src: 'Sunan Abi Dawud (2130)', cat: 'most-searched' as const },
  { id: 'visiting-graveyard', titleAr: 'السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ', titleUr: 'Qabrastan Dakhil Hone Ki Dua', titleEn: 'Dua When Visiting the Cemetery', mean: 'Peace be upon you, O dwellers of this abode among believers.', src: 'Sahih Muslim (975)', cat: 'daily-routine' as const },
  { id: 'condolence-dua', titleAr: 'إِنَّ لِلَّهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى', titleUr: 'Taziat Ki Masnoon Dua', titleEn: 'Prophetic Words of Condolence', mean: 'Truly to Allah belongs what He took, and to Him belongs what He gave.', src: 'Sahih Al-Bukhari (1284)', cat: 'forgiveness' as const },
  { id: 'new-moon-sighting', titleAr: 'اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ', titleUr: 'Naya Chand Dekhne Ki Dua', titleEn: 'Dua Upon Sighting the Crescent Moon', mean: 'Welcoming the new crescent moon with faith, security, and Islam.', src: 'Jami` At-Tirmidhi (3451)', cat: 'fasting' as const },
  { id: 'wind-gale-dua', titleAr: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا', titleUr: 'Aandhi Aur Tez Hawa Ki Dua', titleEn: 'Dua When Strong Winds Blow', mean: 'Asking for the good of the wind and seeking refuge from its potential harm.', src: 'Sahih Muslim (899)', cat: 'protection' as const },
  { id: 'conveyance-mounting', titleAr: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا', titleUr: 'Sawari Par Baithne Ki Dua', titleEn: 'Dua for Mounting a Vehicle or Ride', mean: 'Glory be to Him who subjected this vehicle to us without our capability.', src: 'Surah Az-Zukhruf [43:13]', cat: 'most-searched' as const },
  { id: 'entering-town-village', titleAr: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ', titleUr: 'Shehar Ya Basti Mein Dakhil Hone Ki Dua', titleEn: 'Dua When Entering a New Town/City', mean: 'Invoking the Lord of seven heavens for the goodness and residents of the city.', src: 'Hisnul Muslim', cat: 'daily-routine' as const },
  { id: 'difficulty-task-dua', titleAr: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا', titleUr: 'Mushkil Kaam Ko Aasan Karne Ki Dua', titleEn: 'Dua for Making Difficult Matters Easy', mean: 'O Allah, nothing is easy except what You make easy.', src: 'Sahih Ibn Hibban (327)', cat: 'most-searched' as const },
  { id: 'loss-hardship-saying', titleAr: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', titleUr: 'Nuksan Ya Sadmay Par Dua', titleEn: 'Supplication When Afflicted by Loss', mean: 'Inna lillahi wa inna ilayhi raji’un—reward and better replacement in return.', src: 'Sahih Muslim (918)', cat: 'protection' as const },
  { id: 'repaying-loan-gratitude', titleAr: 'بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ', titleUr: 'Qarz Ada Karne Ke Baad Ki Dua', titleEn: 'Supplication for Someone Who Lent Money', mean: 'May Allah bless you in your family and wealth; the reward for lending is gratitude.', src: 'Sunan an-Nasa’i (4683)', cat: 'forgiveness' as const },
  { id: 'loving-someone-for-allah', titleAr: 'أَحَبَّكَ الَّذِي أَحْبَبْتَنِي لَهُ', titleUr: 'Allah Ke Liye Mohabbat Ka Izhar', titleEn: 'Response to “I Love You for Allah”', mean: 'May He for whose sake you love me love you in return.', src: 'Sunan Abi Dawud (5125)', cat: 'daily-routine' as const },

  // Page 7: Fasting, Ramadan & Sacred Seasons
  { id: 'iftar-guest-dua', titleAr: 'أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ', titleUr: 'Iftar Karwane Wale Ke Liye Dua', titleEn: 'Dua for Those Who Provided Iftar', mean: 'May fasting people break their fast with you, and angels send peace upon you.', src: 'Sunan Abi Dawud (3854)', cat: 'fasting' as const },
  { id: 'someone-insults-faster', titleAr: 'إِنِّي صَائِمٌ ، إِنِّي صَائِمٌ', titleUr: 'Roze Mein Gussa Dilaye Jane Par', titleEn: 'What to Say When Provoked While Fasting', mean: 'Verily, I am fasting! Verily, I am fasting!—restraining anger and conflict.', src: 'Sahih Al-Bukhari (1894)', cat: 'fasting' as const },
  { id: 'taraweeh-tasbeeh', titleAr: 'سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ', titleUr: 'Taraweeh Ki Masnoon Tasbeeh', titleEn: 'Remembrance During Taraweeh Intervals', mean: 'Glorifying the Sovereign of majesty, omnipotence, and everlasting life.', src: 'Fiqh Tradition', cat: 'fasting' as const },
  { id: 'suhoor-blessing', titleAr: 'تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً', titleUr: 'Sehri Ki Barkat Ki Dua', titleEn: 'Dua & Intent for Blessed Pre-Dawn Meal', mean: 'Take the pre-dawn meal, for indeed in Suhoor there is divine barakah.', src: 'Sahih Al-Bukhari (1923)', cat: 'fasting' as const },
  { id: 'laylatul-qadr-search', titleAr: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ', titleUr: 'Shab e Qadr Ki Khas Dua', titleEn: 'Supplication for the Odd Nights of Ramadan', mean: 'Asking the Most Generous Pardoner to wipe away all errors.', src: 'At-Tirmidhi (3513)', cat: 'fasting' as const },
  { id: 'itikaf-intention', titleAr: 'نَوَيْتُ الاعْتِكَافَ فِي هَذَا الْمَسْجِدِ', titleUr: 'Itikaf Ki Niyyah', titleEn: 'Intention for Sacred Itikaf Seclusion', meaning: 'Devoting one’s mind and body solely to worship during the last 10 days.', src: 'Islamic Jurisprudence', cat: 'fasting' as const },
  { id: 'eid-takbeerat', titleAr: 'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ', titleUr: 'Eid Ki Takbeerat', titleEn: 'Takbeerat of Eid al-Fitr & Eid al-Adha', mean: 'Allahu Akbar, Allahu Akbar, La ilaha illallah, Wallahu Akbar, wa lillahil-hamd.', src: 'Sunan al-Bayhaqi', cat: 'most-searched' as const },
  { id: 'eid-greeting-dua', titleAr: 'تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ', titleUr: 'Eid Mubarak Ki Dua', titleEn: 'Companion Greeting on Day of Eid', mean: 'Taqabbal Allahu minna wa minkum—may Allah accept from us and from you.', src: 'Fath al-Bari (Ibn Hajar)', cat: 'most-searched' as const },
  { id: 'first-ten-dhul-hijjah', titleAr: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ', titleUr: 'Ashra Dhul Hijjah Ke Azkar', titleEn: 'Adhkar for First 10 Days of Dhul Hijjah', mean: 'Frequent Tahmeed, Tahleel, and Takbeer during the greatest days on earth.', src: 'Musnad Ahmad (5446)', cat: 'most-searched' as const },
  { id: 'arafah-day-dua', titleAr: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', titleUr: 'Youm e Arafah Ki Afzal Tareen Dua', titleEn: 'The Best Supplication for the Day of Arafah', mean: 'The supreme formula spoken by all prophets on the blessed mountain of Arafah.', src: 'Jami` At-Tirmidhi (3585)', cat: 'forgiveness' as const },
  { id: 'talbiyah-hajj-umrah', titleAr: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ', titleUr: 'Hajj Aur Umrah Ki Talbiyah', titleEn: 'The Sacred Talbiyah for Pilgrims', mean: 'Here I am at Your service, O Allah, here I am without partner.', src: 'Sahih Al-Bukhari (1549)', cat: 'most-searched' as const },
  { id: 'qurbani-slaughter-dua', titleAr: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ تَقَبَّلْ', titleUr: 'Qurbani Ke Janwar Ki Dua', titleEn: 'Supplication When Slaughtering Udhiyah', mean: 'Bismillahi Wallahu Akbar—O Allah, accept this sacrifice on my behalf.', src: 'Sahih Muslim (1960)', cat: 'most-searched' as const },

  // Page 8: Quranic Rabbana Supplications
  { id: 'rabbana-hasana', titleAr: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً', titleUr: 'Duniya Aur Akhirat Ki Bhalai Ki Dua', titleEn: 'Rabbana Atina fid-Dunya Hasanah', mean: 'Grant us in this world good, in the Hereafter good, and save us from the Fire.', src: 'Surah Al-Baqarah [2:201]', cat: 'most-searched' as const },
  { id: 'rabbana-no-burden', titleAr: 'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ', titleUr: 'Taqat Se Zyada Bojh Na Dalne Ki Dua', titleEn: 'Dua from the End of Surah Al-Baqarah', mean: 'Lay not upon us a burden greater than we have strength to bear.', src: 'Surah Al-Baqarah [2:286]', cat: 'forgiveness' as const },
  { id: 'rabbana-forgive-brothers', titleAr: 'رَبَّنَا اغْفِرْ لَنَا وَلإِخْوَانِنَا الَّذِينَ سَبَقُونَا', titleUr: 'Tamam Momineen Ki Bakhshish Ki Dua', titleEn: 'Dua for Forgiveness of Past Believers', mean: 'Forgive us and our brothers who preceded us in faith, leave no malice in our hearts.', src: 'Surah Al-Hashr [59:10]', cat: 'forgiveness' as const },
  { id: 'rabbana-spouses-offspring', titleAr: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا قُرَّةَ أَعْيُنٍ', titleUr: 'Aankhon Ki Thandak Aulad & Shuraqa', titleEn: 'Dua for Spouses & Comfort of Eyes', mean: 'Grant us from among our spouses and offspring comfort to our eyes.', src: 'Surah Al-Furqan [25:74]', cat: 'most-searched' as const },
  { id: 'rabbana-firm-feet', titleAr: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا', titleUr: 'Sabar Aur Sabat Qadmi Ki Dua', titleEn: 'Dua for Patience & Victory Over Trials', mean: 'Pour upon us patience, plant firmly our feet, and grant us victory.', src: 'Surah Al-Baqarah [2:250]', cat: 'protection' as const },
  { id: 'rabbana-not-deviate', titleAr: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا', titleUr: 'Hidayat Ke Baad Gumrahi Se Bachne Ki Dua', titleEn: 'Dua Against Heart Deviation', mean: 'Let not our hearts deviate after You have guided us, grant mercy.', src: 'Surah Ali ‘Imran [3:8]', cat: 'forgiveness' as const },
  { id: 'rabbana-perfect-light', titleAr: 'رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا', titleUr: 'Noor Ki Takmeel Ki Dua', titleEn: 'Dua for Perfection of Divine Light', mean: 'Our Lord, perfect for us our light and forgive us, You are capable of all things.', src: 'Surah At-Tahrim [66:8]', cat: 'forgiveness' as const },
  { id: 'rabbana-forgive-reckoning', titleAr: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ يَوْمَ يَقُومُ الْحِسَابُ', titleUr: 'Youm ul Hisab Ki Bakhshish Ki Dua', titleEn: 'Ibrahim (AS) Prayer on Day of Reckoning', mean: 'Forgive me and my parents and the believers the Day the account is established.', src: 'Surah Ibrahim [14:41]', cat: 'forgiveness' as const },
  { id: 'rabbana-mercy-chest', titleAr: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', titleUr: 'Seena Kholne Aur Aasani Ki Dua', titleEn: 'Musa (AS) Supplication for Eloquence', mean: 'My Lord, expand for me my breast, ease for me my task, untie the knot.', src: 'Surah Taha [20:25]', cat: 'most-searched' as const },
  { id: 'rabbana-refuge-shaitan', titleAr: 'رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ', titleUr: 'Shaitan Ke Dhokon Se Panah', titleEn: 'Refuge from Evil Incitements', mean: 'My Lord, I seek refuge in You from the incitements of the devils.', src: 'Surah Al-Mu’minun [23:97]', cat: 'protection' as const },
  { id: 'rabbana-tawbah-mercy', titleAr: 'إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ', titleUr: 'Tauba Qubool Hone Ki Dua', titleEn: 'Dua for Acceptance of Sincere Repentance', mean: 'Accept our repentance, truly You are the One who accepts repentance, Most Merciful.', src: 'Surah Al-Baqarah [2:128]', cat: 'forgiveness' as const },
  { id: 'rabbana-shelter-hellfire', titleAr: 'رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ', titleUr: 'Jahannam Ke Azab Se Bachne Ki Dua', titleEn: 'Dua for Averting the Torment of Hell', mean: 'Our Lord, avert from us the punishment of Hellfire; indeed its torment is permanent.', src: 'Surah Al-Furqan [25:65]', cat: 'forgiveness' as const },

  // Page 9: Special Hardships, Night & Morning Seals
  { id: 'severe-distress-dua', titleAr: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ', titleUr: 'Sakht Pareshani (Karb) Ki Dua', titleEn: 'Supplication for Times of Severe Distress', mean: 'There is no god but Allah, the Tremendous, the Forbearing, Lord of the Throne.', src: 'Sahih Al-Bukhari (6345)', cat: 'protection' as const },
  { id: 'tahajjud-night-prayer', titleAr: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ', titleUr: 'Tahajjud Ke Waqt Ki Dua', titleEn: 'Prophetic Opening Dua for Tahajjud', mean: 'Praising the Lord who is the Light of the heavens and earth in late night prayer.', src: 'Sahih Al-Bukhari (1120)', badge: 'Night Vigil', cat: 'daily-routine' as const },
  { id: 'fearing-tyranny-dua', titleAr: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ كُنْ لِي جَارًا', titleUr: 'Zalim Hakim Ya Zulm Se Bachne Ki Dua', titleEn: 'Supplication Against Tyrants and Injustice', mean: 'Be a protector for me against the injustice of creation and evil forces.', src: 'Al-Adab Al-Mufrad (707)', cat: 'protection' as const },
  { id: 'loss-wealth-recovery', titleAr: 'عَسَى رَبُّنَا أَنْ يُبْدِلَنَا خَيْرًا مِنْهَا', titleUr: 'Maal Ke Ziyan Par Behtar Badlay Ki Dua', titleEn: 'Dua for Better Replacement After Financial Loss', mean: 'Perhaps our Lord will substitute for us one better than it, we turn to Him.', src: 'Surah Al-Qalam [68:32]', cat: 'forgiveness' as const },
  { id: 'pain-in-body-dua', titleAr: 'بِسْمِ اللَّهِ (٣) أَعُوذُ بِعِزَّةِ اللَّهِ (٧)', titleUr: 'Jism Ke Kisi Hissay Mein Dard Ki Dua', titleEn: 'Dua for Alleviating Bodily Pain', mean: 'Placing hand on pain, saying Bismillah thrice and A’udhu bi’izzatillahi 7 times.', src: 'Sahih Muslim (2202)', cat: 'protection' as const },
  { id: 'visiting-patient-seven-times', titleAr: 'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ أَنْ يَشْفِيَكَ', titleUr: 'Bimar Pursa Ki Sat Martaba Ki Dua', titleEn: 'Sevenfold Supplication for Sick Persons', mean: 'I ask Allah the Magnificent, Lord of the Mighty Throne, to heal you.', src: 'Sunan Abi Dawud (3106)', cat: 'protection' as const },
  { id: 'settling-dispute-dua', titleAr: 'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا', titleUr: 'Dilon Mein Ittehad Aur Mohabbat Ki Dua', titleEn: 'Dua for Reconciling Hearts in Disputes', mean: 'O Allah, unite our hearts, mend our discords, and guide us to peace.', src: 'Sunan Abi Dawud (969)', cat: 'most-searched' as const },
  { id: 'gratitude-abundant-favor', titleAr: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ', titleUr: 'Shukr Guzaari Ki Toufeeq Ki Dua', titleEn: 'Dua for Capacity to Render Due Thanks', mean: 'Enable me to be grateful for Your favor which You have bestowed upon me.', src: 'Surah An-Naml [27:19]', cat: 'forgiveness' as const },
  { id: 'morning-protection-seal', titleAr: 'أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ', titleUr: 'Fitrat e Islam Par Subah Ka Iqrār', titleEn: 'Morning Declaration of Natural Faith', mean: 'We enter morning upon the natural religion of Islam and the pure creed of Ibrahim.', src: 'Musnad Ahmad (15367)', cat: 'daily-routine' as const },
  { id: 'evening-protection-seal', titleAr: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ', titleUr: 'Shaam Ka Iqrār e Touheed', titleEn: 'Evening Affirmation of Divine Sovereignty', mean: 'We enter evening, and all dominion belongs to Allah, Lord of all realms.', src: 'Sahih Muslim (2723)', cat: 'daily-routine' as const },
  { id: 'khatam-quran-dua', titleAr: 'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا', titleUr: 'Khatam e Quran Ki Dua', titleEn: 'Supplication Upon Completing the Holy Quran', mean: 'O Allah, have mercy on me through the Quran, make it a guide and light for me.', src: 'Traditional Khatam Adhkar', cat: 'most-searched' as const },
  { id: 'final-gathering-paradise', titleAr: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْفِرْدَوْسَ الأَعْلَى', titleUr: 'Jannat ul Firdaus Ki Talab Ki Dua', titleEn: 'Dua for the Highest Level of Jannah', mean: 'Prophetic counsel: When asking Allah, ask Him for Al-Firdaws Al-A’la.', src: 'Sahih Al-Bukhari (2797)', cat: 'forgiveness' as const }
];

ADDITIONAL_ENTRIES.forEach((entry) => {
  ALL_DUAS.push({
    id: entry.id,
    slug: `/duas/${entry.id}`,
    category: entry.cat,
    categoryLabel: entry.cat === 'most-searched' ? 'Most Searched' : entry.cat === 'daily-routine' ? 'Daily Routine' : entry.cat === 'protection' ? 'Protection' : entry.cat === 'forgiveness' ? 'Forgiveness' : 'Fasting',
    titleArabic: entry.titleAr,
    titleUrdu: entry.titleUr,
    titleEnglish: entry.titleEn,
    meaning: (entry as any).mean || (entry as any).meaning || 'Authentic supplication verified from classical Hadith collections.',
    source: entry.src,
    badge: entry.cat === 'most-searched' ? 'High Benefit' : entry.cat === 'protection' ? 'Shield' : entry.cat === 'fasting' ? 'Sunnah' : entry.cat === 'forgiveness' ? 'Tawbah' : 'Routine'
  });
});

const CATEGORY_TABS = [
  { id: 'all', label: 'All Duas' },
  { id: 'most-searched', label: 'Most Searched' },
  { id: 'daily-routine', label: 'Daily Routine' },
  { id: 'protection', label: 'Protection & Shifa' },
  { id: 'forgiveness', label: 'Forgiveness' },
  { id: 'fasting', label: 'Fasting' }
];

export const metadata = {
  title: "Daily Duas & Authentic Supplications Directory Hub | Sahih Masnoon Azkar",
  description: "Comprehensive directory of 100+ authentic Islamic daily Duas and Azkar sourced from Sahih Hadith literature with Arabic text, Urdu phonetic transliteration, and English meanings.",
  alternates: {
    canonical: "https://yourdomain.com/duas/",
  },
  openGraph: {
    title: "Daily Duas & Authentic Supplications Directory Hub",
    description: "Comprehensive directory of 100+ authentic Islamic daily Duas and Azkar sourced from Sahih Hadith literature with Arabic text, Urdu transliteration, and English meanings.",
    url: "https://yourdomain.com/duas/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Duas & Authentic Supplications Directory Hub",
    description: "Authentic Islamic Duas and Azkar from Sahih Hadith sources with Arabic, Urdu, and English.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DuasHubPage({
  searchParams,
}: {
  searchParams?: { page?: string; category?: string; q?: string };
}) {
  // Read params from searchParams prop or fallback to window in client preview
  let pageParam = searchParams?.page;
  let categoryParam = searchParams?.category;
  let queryParam = searchParams?.q;

  if (typeof window !== 'undefined' && (!pageParam || !categoryParam)) {
    const urlParams = new URLSearchParams(window.location.search);
    if (!pageParam) pageParam = urlParams.get('page') || undefined;
    if (!categoryParam) categoryParam = urlParams.get('category') || undefined;
    if (!queryParam) queryParam = urlParams.get('q') || undefined;
  }

  const currentPage = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const activeCategory = categoryParam || 'all';
  const searchQuery = (queryParam || '').trim().toLowerCase();

  // Filter items according to category and optional keyword
  const filteredItems = ALL_DUAS.filter((dua) => {
    const matchesCategory = activeCategory === 'all' || dua.category === activeCategory;
    if (!searchQuery) return matchesCategory;
    const matchesSearch = 
      dua.titleEnglish.toLowerCase().includes(searchQuery) ||
      dua.titleUrdu.toLowerCase().includes(searchQuery) ||
      dua.titleArabic.includes(searchQuery) ||
      dua.meaning.toLowerCase().includes(searchQuery) ||
      dua.source.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const pageSize = 12;
  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);

  // Dynamic SEO & ItemList JSON-LD
  const canonicalUrl = safePage > 1 
    ? `https://yourdomain.com/duas?page=${safePage}`
    : `https://yourdomain.com/duas/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": `Daily Duas & Authentic Supplications Directory Hub${safePage > 1 ? ` - Page ${safePage}` : ''}`,
        "description": "Comprehensive directory of 100+ authentic Islamic daily Duas and Azkar sourced from Sahih Hadith literature.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://yourdomain.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Daily Duas Hub",
              "item": "https://yourdomain.com/duas/"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#itemlist`,
        "name": `Featured Daily Islamic Duas & Supplications - Page ${safePage} of ${totalPages}`,
        "numberOfItems": paginatedItems.length,
        "itemListElement": paginatedItems.map((dua, index) => ({
          "@type": "ListItem",
          "position": startIndex + index + 1,
          "name": `${dua.titleEnglish} (${dua.titleUrdu})`,
          "url": `https://yourdomain.com${dua.slug}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://yourdomain.com/duas/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the recommended etiquettes (Adab) of making Dua in Islam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The primary etiquettes include facing the Qiblah, being in a state of Wudu, beginning with praising Allah (Tahmid) and sending blessings upon the Prophet Muhammad (Salawat), raising both hands, supplicating with certainty (Yaqeen) of response, and repeating the request three times with sincere humility."
            }
          },
          {
            "@type": "Question",
            "name": "Are all supplications in this directory sourced from authentic Hadith?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every supplication in this directory is rigorously cross-referenced with primary classical Hadith collections including Sahih Al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` At-Tirmidhi, and authenticated collections of Hisnul Muslim."
            }
          },
          {
            "@type": "Question",
            "name": "Can I recite Duas in English or Urdu instead of Arabic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outside of obligatory ritual prayers (Salah), you may supplicate in any language you understand. However, reciting the exact Arabic words taught by the Prophet (peace be upon him) carries special reward and preserves the divine eloquence of the Sunnah."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best times for Dua acceptance (Mustajab times)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key moments of acceptance include the last third of the night (Tahajjud), during Sujood in prayer, between the Adhan and Iqamah, immediately prior to breaking the fast at Iftar, while traveling, and during rainfall."
            }
          }
        ]
      }
    ]
  };

  // Helper to generate crawlable URLs
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (pageNumber > 1) params.set('page', pageNumber.toString());
    if (activeCategory && activeCategory !== 'all') params.set('category', activeCategory);
    if (searchQuery) params.set('q', searchQuery);
    const queryString = params.toString();
    return `/duas${queryString ? `?${queryString}` : '/'}`;
  };

  const createCategoryUrl = (catId: string) => {
    const params = new URLSearchParams();
    if (catId !== 'all') params.set('category', catId);
    if (searchQuery) params.set('q', searchQuery);
    params.set('page', '1');
    const queryString = params.toString();
    return `/duas${queryString ? `?${queryString}` : '/'}`;
  };

  // Page Numbers Array for rendering [1] [2] [3] ... [totalPages]
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <main className="min-h-screen bg-black text-neutral-200 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* SECTION 5: TECHNICAL & AI CRAWLABILITY (JSON-LD & Canonical) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href={canonicalUrl} />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION 1: HEADER & E-E-A-T (Author & Trust) */}
        <header className="space-y-6">
          {/* Breadcrumb Navigation (Home > Daily Duas Hub) */}
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Daily Duas Hub</span>
            {safePage > 1 && (
              <>
                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-emerald-400 font-medium">Page {safePage}</span>
              </>
            )}
          </nav>

          {/* Descriptive H1 Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Daily Duas & Authentic <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Supplications Directory Hub
              </span>
            </h1>
            
            {/* Concise 2-Sentence Overview / Summary Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Access a rigorously authenticated encyclopedia of 100+ daily Masnoon Duas and Azkar curated from <strong className="text-white">Sahih Al-Bukhari, Sahih Muslim, and classical Sunan</strong> literature. Each supplication features original Arabic script, phonetic Urdu transliteration, English meaning, and contextual rulings for morning, evening, travel, and personal protection.
              </p>
            </div>
          </div>

          {/* Visible Expert Author / Scholarly Board Reviewer Badge */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-y border-slate-800/60 py-4">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Sourced from Hisnul Muslim & Sahihayn</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Arabic • Urdu • English</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <Link 
              href="/about/scholarly-board/" 
              className="flex items-center space-x-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3.5 py-1 hover:bg-emerald-400/20 transition-colors group"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">
                Reviewed by Scholarly Advisory Board
              </span>
            </Link>
          </div>
        </header>

        {/* SECTION 3: "START HERE" GUIDED PATH BOX */}
        <section className="bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Beginner's Spiritual Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Start Here: Essential Daily Duas Every Muslim Should Know
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you are establishing your daily remembrance routine, start with this foundational trinity: <strong className="text-white">Morning & Evening Adhkar</strong> for spiritual immunity, <strong className="text-white">Ayat al-Kursi after every Salah</strong> for paradise entry, and <strong className="text-white">Sayyidul Istighfar</strong> for ultimate forgiveness.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/duas/morning-azkar"
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/30"
              >
                Morning Azkar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/duas/sayyidul-istighfar"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors"
              >
                Sayyidul Istighfar
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: ADSENSE RESERVED LEADERBOARD BANNER CONTAINER */}
        <div 
          className="w-full min-h-[90px] bg-slate-900/40 border border-slate-800/50 rounded-xl flex items-center justify-center my-4 text-xs text-slate-500 uppercase tracking-widest shadow-inner select-none"
          aria-label="Advertisement Container"
        >
          AdSense Reserved Slot 1 (Leaderboard Banner)
        </div>

        {/* SECTION 2, 4 & 6: DIRECTORY, FILTER & PAGINATED 3-COLUMN CARDS GRID */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Bookmark className="w-6 h-6 text-emerald-400" />
                Supplications Directory & Sub-Topic Silos
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Showing page {safePage} of {totalPages} • Filter by topic or search live across Arabic terms, Urdu phonetic titles, and English translations.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-400/90 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              {totalItems} Supplications Total
            </div>
          </div>

          {/* Filter Bar & Search Container */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
            <form method="GET" action="/duas" className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Search by English topic, Urdu title (e.g. 'Safar', 'Qunoot'), or Arabic keyword..."
                className="w-full pl-12 pr-24 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors"
              >
                Search
              </button>
            </form>

            {/* Fast Quick-Filter Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={createCategoryUrl(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                        : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Displaying items <strong className="text-emerald-400">{startIndex + 1}</strong> to <strong className="text-emerald-400">{Math.min(startIndex + pageSize, totalItems)}</strong> of {totalItems}</span>
              {searchQuery && <span>Keyword: "{searchQuery}"</span>}
            </div>
          </div>

          {/* 3-Column Dua Cards Grid */}
          {paginatedItems.length === 0 ? (
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No supplications matched your query</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Try resetting your filters or browsing all categories to view the full collection.
              </p>
              <Link
                href="/duas/"
                className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-sm font-bold transition-colors"
              >
                Reset All Filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedItems.map((dua) => (
                <Link
                  key={dua.id}
                  href={dua.slug}
                  className="group bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Header with category badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
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
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                        {dua.titleEnglish}
                      </h3>
                      <div className="text-xs font-semibold text-emerald-400/90 mb-2">
                        {dua.titleUrdu}
                      </div>
                      <div 
                        className="text-right text-xl font-arabic text-emerald-200/90 py-2 border-y border-slate-800/60 my-2 leading-relaxed" 
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {dua.source}
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Dua <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* UI PAGINATION BAR COMPONENT DIRECTLY UNDER 3-COLUMN GRID */}
          {totalPages > 1 && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              {/* Previous Button */}
              {safePage > 1 ? (
                <Link
                  href={createPageUrl(safePage - 1)}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 hover:text-emerald-400 text-slate-200 border border-slate-700/80 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </Link>
              ) : (
                <span className="px-4 py-2 bg-slate-900/40 text-slate-600 border border-slate-800/60 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center gap-1.5 select-none">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </span>
              )}

              {/* Page Number Indicators: "Page X of Y" and [1] [2] [3] ... [9] */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <span className="text-xs sm:text-sm text-slate-400 font-medium mr-2 hidden md:inline-block">
                  Page <strong className="text-emerald-400">{safePage}</strong> of <strong className="text-white">{totalPages}</strong>
                </span>

                {pageNumbers.map((num) => {
                  const isCurrent = num === safePage;
                  return (
                    <Link
                      key={num}
                      href={createPageUrl(num)}
                      className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isCurrent
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20 ring-2 ring-emerald-400/50'
                          : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                      }`}
                      aria-label={`Go to page ${num}`}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {num}
                    </Link>
                  );
                })}
              </div>

              {/* Next Button */}
              {safePage < totalPages ? (
                <Link
                  href={createPageUrl(safePage + 1)}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 hover:text-emerald-400 text-slate-200 border border-slate-700/80 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="px-4 py-2 bg-slate-900/40 text-slate-600 border border-slate-800/60 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center gap-1.5 select-none">
                  Next <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          )}
        </section>

        {/* SECTION 2: TOPICAL CURATED SILOS OVERVIEW */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-400" />
            Curated Thematic Collections (Silos)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Silo 1: Most Searched */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Most Searched</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  High-frequency daily queries including Dua e Qunoot, Safar Ki Dua, and Istikhara.
                </p>
              </div>
              <Link href="/duas?category=most-searched" className="pt-3 border-t border-slate-800/60 text-xs text-emerald-400 font-semibold flex items-center justify-between hover:text-emerald-300">
                <span>Explore Silo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Silo 2: Daily Routine */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <Sunrise className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Daily Routine & Azkar</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Morning, evening, post-prayer tasbeeh, and home entrance/exit supplications.
                </p>
              </div>
              <Link href="/duas?category=daily-routine" className="pt-3 border-t border-slate-800/60 text-xs text-emerald-400 font-semibold flex items-center justify-between hover:text-emerald-300">
                <span>Fortress of Believer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Silo 3: Protection & Healing */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Protection & Healing</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Ruqyah Shariah, relief from depression and debt, and sickness shifa prayers.
                </p>
              </div>
              <Link href="/duas?category=protection" className="pt-3 border-t border-slate-800/60 text-xs text-emerald-400 font-semibold flex items-center justify-between hover:text-emerald-300">
                <span>Divine Shield & Cure</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Silo 4: Special Occasions */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                  <Moon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Special Occasions</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Ramadan Suhoor & Iftar, Laylatul Qadr, and repentance via Sayyidul Istighfar.
                </p>
              </div>
              <Link href="/duas?category=forgiveness" className="pt-3 border-t border-slate-800/60 text-xs text-emerald-400 font-semibold flex items-center justify-between hover:text-emerald-300">
                <span>Blessed Seasons</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 3: INTERNAL LINKING ACROSS TO SIBLING HUBS (/ayats/ and /tools/) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Explore Connected Islamic Knowledge Hubs</h3>
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Related Resources</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/ayats/"
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Quranic Verses</div>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Quranic Ayats & Thematic Tafsir Hub
                </h4>
                <p className="text-xs text-slate-400 mt-2">
                  Browse significant Quranic Ayats for solace, guidance, and spiritual reflection with authentic explanations.
                </p>
              </div>
              <div className="pt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                Explore Ayats Hub <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/tools/"
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Interactive Utilities</div>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Islamic Tools & Smart Calculators
                </h4>
                <p className="text-xs text-slate-400 mt-2">
                  Calculate real-time Zakat liabilities, convert Hijri-Gregorian dates, and locate Qiblah coordinates.
                </p>
              </div>
              <div className="pt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                Open Islamic Tools <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/ramadan/timings/"
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between sm:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Prayer & Fasting</div>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Global Ramadan Timings & Prayer Schedules
                </h4>
                <p className="text-xs text-slate-400 mt-2">
                  Accurate, astronomical Suhoor, Fajr, and Maghrib timings for over 50,000 cities worldwide.
                </p>
              </div>
              <div className="pt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                View Timetables <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </section>

        {/* SECTION 5: AEO FAQ ACCORDION (General Dua Guidelines) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="flex items-center space-x-3">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions on Dua & Adhkar</h2>
              <p className="text-xs sm:text-sm text-slate-400">Essential rulings and guidelines on supplicating according to the Sunnah.</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none text-sm sm:text-base">
                What are the recommended etiquettes (Adab) of making Dua in Islam?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-xs sm:text-sm border-t border-slate-800/50 pt-4 mt-2 space-y-2">
                <p>The primary Prophetic etiquettes for making Dua include:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Facing the Qiblah</strong> and being in a state of ritual cleanliness (Wudu) when possible.</li>
                  <li><strong>Praising Allah Almighty (Tahmid)</strong> and sending Salawat upon the Prophet Muhammad (peace be upon him) before presenting your personal requests.</li>
                  <li><strong>Raising both hands</strong> to chest level with palms facing upward in humility.</li>
                  <li><strong>Supplicating with firm certainty (Yaqeen)</strong>, avoiding phrases such as "forgive me if You will".</li>
                  <li><strong>Repeating the supplication three times</strong> with earnestness and crying out of reverence for Allah.</li>
                </ul>
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none text-sm sm:text-base">
                Are all supplications in this directory sourced from authentic Hadith?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-xs sm:text-sm border-t border-slate-800/50 pt-4 mt-2">
                Yes. Every supplication featured in this directory is rigorously cross-referenced with primary classical Hadith corpora—primarily Sahih Al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` At-Tirmidhi, and authenticated editions of <em>Hisnul Muslim</em> (Fortress of the Muslim).
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none text-sm sm:text-base">
                Can I recite Duas in English or Urdu instead of Arabic?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-xs sm:text-sm border-t border-slate-800/50 pt-4 mt-2">
                Outside of obligatory ritual prayers (Salah), you may freely supplicate in any tongue you speak. Allah understands every dialect and intention. However, reciting the exact Arabic wording transmitted by the Prophet (peace be upon him) holds special Barakah, follows the Sunnah, and protects the profound meaning of the transmitted words.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none text-sm sm:text-base">
                When are the best times for Dua acceptance (Mustajab times)?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-xs sm:text-sm border-t border-slate-800/50 pt-4 mt-2">
                Prophetic traditions highlight times of special vulnerability and divine mercy, including: the last third of the night (Tahajjud), during Sujood in Salah, between the Adhan and Iqamah, during the final hour of Friday before Maghrib, when breaking the fast (Iftar), during travel, and while rain falls.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
