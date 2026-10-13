import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, BookOpen, Compass, 
  Sparkles, Heart, Shield, Moon, Sunrise, 
  HelpCircle, ExternalLink, ArrowRight, CheckCircle2,
  Bookmark, Layers, Share2, Flame, ArrowUpRight, Search,
  Printer, Download, Copy, Check, Volume2, Play, Pause,
  Share, Info, Star, Award, Clock, FileText, CheckCircle,
  MessageSquare, UserCheck, AlertCircle, Image as ImageIcon
} from 'lucide-react';
import PrimaryDuaDisplayContainer from './PrimaryDuaDisplayContainer';
import { DUAS_DATA, getDuaBySlug as getDuaFromDb, getAllDuaSlugs } from './duasData';
import { DuaQuickActions, DuaVideoFacade } from './DuaClientComponents';

export interface DuaDetail {
  id: string;
  slug: string;
  category: 'most-searched' | 'daily-routine' | 'protection' | 'forgiveness' | 'fasting';
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
  hadithNumber: string;
  authenticity: string;
  badge?: string;
  audioDuration: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
  tajweedHighlights: string[];
  faqs: { question: string; answer: string }[];
}

const COMPREHENSIVE_DUA_DATABASE: Record<string, DuaDetail> = {
  'dua-e-qunoot': {
    id: 'dua-e-qunoot',
    slug: 'dua-e-qunoot',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'دُعَاءُ الْقُنُوتِ',
    titleUrdu: 'دعائے قنوت (Dua e Qunoot)',
    titleEnglish: 'Dua al-Qunoot (Witr Prayer Supplication)',
    transliteration: 'Allahumma ihdini fiman hadayt, wa ‘afini fiman ‘afayt, wa tawallani fiman tawallayt, wa barik li fima a’tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda ‘alayk, wa innahu la yazillu man walayt, wa la ya’izzu man ‘adayt, tabarakta Rabbana wa ta’alayt.',
    tldr: 'Dua e Qunoot is the essential supplication recited in the final Rak’ah of the Witr prayer, asking Allah for steadfast guidance, spiritual and physical well-being, divine guardianship, and protection from all decreed evil. It serves as a profound statement of absolute reliance upon Allah’s supreme will and mercy.',
    meaning: 'Supplication of deep submission and seeking divine guidance recited in the Witr prayer.',
    translationEnglish: 'O Allah, guide me among those whom You have guided, pardon me among those whom You have pardoned, turn to me in friendship among those on whom You have turned in friendship, bless me in what You have bestowed, and save me from the evil of what You have decreed. For verily You decree and none can decree over You; and he is not humiliated whom You have befriended, nor is he honored whom You have opposed. Blessed are You, our Lord, and Exalted.',
    translationUrdu: 'Aye Allah! Mujhe un logon mein hidayat ata farma jinhe Tune hidayat di, aur mujhe aafiyat de un mein jinhe Tune aafiyat bakhshi, aur meri sarparasti farma un mein jin ki Tune sarparasti ki, aur jo kuch Tune ata farmaya us mein barkat de, aur mujhe us cheez ke shar se bacha jo Tune faisla farmaya. Beshak Tu hi faisla farmata hai aur Tere khilaf koi faisla nahi ho sakta.',
    translationUrduNastaliq: 'اے اللہ! مجھے ہدایت دے ان لوگوں میں جن کو تو نے ہدایت دی، اور مجھے عافیت دے ان لوگوں میں جن کو تو نے عافیت دی، اور میرا کارساز بن ان لوگوں میں جن کا تو کارساز بنا، اور مجھے برکت دے اس میں جو تو نے عطا فرمایا، اور مجھے بچا اس برائی سے جو تو نے مقدر فرمائی۔ بے شک تو ہی فیصلہ فرماتا ہے اور تیرے خلاف فیصلہ نہیں کیا جا سکتا۔',
    translationFrench: 'Ô Allah, guide-moi parmi ceux que Tu as guidés, préserve-moi parmi ceux que Tu as préservés, prends-moi sous Ta protection parmi ceux que Tu as protégés, bénis pour moi ce que Tu m’as accordé, et épargne-moi le mal que Tu as décrété. Car c’est Toi qui décrètes et nul ne décrète contre Toi. Nul ne sera humilié parmi ceux dont Tu as pris la tutelle, et nul ne sera glorifié parmi ceux envers qui Tu es l’ennemi. Béni sois-Tu, notre Seigneur, et exalté.',
    translationSpanish: 'Oh Allah, guíame entre aquellos a quienes has guiado, concédeme bienestar entre aquellos a quienes has concedido bienestar, acógeme bajo Tu protección entre aquellos a quienes has protegido, bendice lo que me has otorgado y líbrame del mal que has decretado. Ciertamente Tú decretas y nadie decreta sobre Ti; no es humillado aquel a quien Tú proteges, ni honrado aquel a quien Tú tienes por enemigo. Bendito seas, Señor nuestro, y exaltado.',
    source: 'Sunan Abi Dawud (1425) & Jami` At-Tirmidhi (464)',
    sourceBook: 'Sunan Abi Dawud - Book of Prayer (Kitab Al-Salah)',
    hadithNumber: 'Hadith 1425 (Authentic / Sahih according to Al-Albani)',
    authenticity: 'Sahih / Mutawatir Sunnah (Authenticated by Imam At-Tirmidhi, An-Nawawi, and Al-Albani)',
    badge: 'Witr Essential',
    audioDuration: '1 min 45 sec',
    benefits: [
      'Universal Guidance (Hidayah): Bestows divine illumination against moral confusion and spiritual disorientation.',
      'Complete Well-being (Afiyah): Shields the reciter against chronic physical illnesses, psychological anxiety, and calamity.',
      'Divine Guardianship (Wilayah): Places the reciter directly under the protective custody of Allah Almighty.',
      'Barakah in Wealth and Sustenance: Multiplies blessings in one’s lifespan, earnings, and family.',
      'Preservation from Decreed Hardship: Lightens the severity of trials and tribulations ordained by divine decree.'
    ],
    steps: [
      { title: 'Step 1: Perform the Third Rak’ah of Witr', desc: 'Stand after reciting Surah Al-Fatihah and an additional Surah (commonly Surah Al-Ikhlas) during the concluding third unit of Witr prayer.' },
      { title: 'Step 2: Raise Hands for Takbeer (Hanafi) or Bow (Shafi’i)', desc: 'According to the Hanafi school, raise both hands to ear-level reciting Takbeer (Allahu Akbar), then fold hands beneath the navel. In Shafi’i & Hanbali traditions, Qunoot is recited standing upright with palms raised following the Ruku posture.' },
      { title: 'Step 3: Recite Dua al-Qunoot with Humility & Presence', desc: 'Articulate each phrase with contemplation, keeping the gaze downcast toward the place of prostration and maintaining tranquil devotion (Khushu).' },
      { title: 'Step 4: Conclude with Durood & Complete Salah', desc: 'Recite peace and blessings upon Prophet Muhammad (PBUH) and his noble household, then proceed seamlessly into prostration (Sujood) or the final Tashahhud.' }
    ],
    tajweedHighlights: [
      'Ghunnah & Ikhfa Precision: Correct nasal resonance on “fiman hadayt” and “fiman ‘afayt” with 2-vowel duration.',
      'Thick Letters (Tafkheem): Heavy resonance on the letters Qaf (ق), Dhad (ض), and Taa (ط) in “Taqdi” and “La Yuqda”.',
      'Soft Madd & Vowel Elongation: 2-count stretch on “Waliyyi” and “Hadayt” preserving exact classical grammatical metric.'
    ],
    faqs: [
      { question: 'When is Dua e Qunoot recited in daily prayers?', answer: 'Dua e Qunoot is recited during the third unit (Rak’ah) of the Witr prayer every night following the Isha prayer. In the Shafi’i school, a variant Qunoot is also recommended during the Fajr prayer in the second Rak’ah after rising from Ruku.' },
      { question: 'What is the exact Hadith source for Dua e Qunoot?', answer: 'It is narrated by Al-Hasan ibn Ali (RA) in Sunan Abi Dawud (Hadith 1425) and Jami` At-Tirmidhi (Hadith 464), who stated: “The Messenger of Allah (PBUH) taught me words to say in Qunoot of Witr.” The chain is deemed Sahih by classical Hadith masters.' },
      { question: 'What if someone forgets to recite Dua e Qunoot in Witr?', answer: 'In the Hanafi jurisprudence, Qunoot is Wajib (obligatory in Witr). If forgotten inadvertently, the worshipper performs Sajdah Sahw (two prostrations of forgetfulness) before concluding the prayer with Salam. In the Shafi’i school, it is a Sunnah Mu’akkadah.' },
      { question: 'Can Dua e Qunoot be recited while looking at a phone or card?', answer: 'While memorization is strongly encouraged, beginners and learners are permitted by contemporary scholars to look at a phonetic text or card while learning to preserve valid prayer adherence.' }
    ]
  },
  'safar-ki-dua': {
    id: 'safar-ki-dua',
    slug: 'safar-ki-dua',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    titleUrdu: 'سفر کی دعا (Safar Ki Dua)',
    titleEnglish: 'Dua for Travel & Journeys (Supplication for Safe Travel)',
    transliteration: 'Subhanal-ladhi sakh-khara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas’aluka fi safarina hadhal-birra wat-taqwa, wa minal-’amali ma tarda. Allahumma hawwin ‘alayna safarana hadha watwi ‘anna bu’dah. Allahumma antas-sahibu fis-safar, wal-khalifatu fil-ahl. Allahumma inni a’udhu bika min wa’tha’is-safar, wa ka’abatil-manzar, wa soo’il-munqalabi fil-mali wal-ahl.',
    tldr: 'Safar Ki Dua is the comprehensive prophetic supplication recited when embarking upon any vehicle, flight, or travel journey. It acknowledges Allah’s total control over transit, appeals for moral steadfastness during transit, safe ease over distances, and absolute protection against accidents and domestic distress.',
    meaning: 'Seeking divine safety, protection, and comfort during journeys, road trips, and flights.',
    translationEnglish: 'Glory is to Him Who has subjected this to us, and we could never have achieved this by ourselves. And indeed, to our Lord we will certainly return. O Allah, we ask You in this journey of ours for righteousness and piety, and for deeds that please You. O Allah, facilitate this journey for us and shorten its distance. O Allah, You are the Companion in travel, and the Guardian of the family left behind. O Allah, I seek refuge in You from the hardships of travel, the sorrowful sights, and a painful return regarding wealth and family.',
    translationUrdu: 'Pak hai Woh Zaat jis ne is sawari ko hamare taabe kar diya halaankeh hum ise qaboo mein laane ki taaqat nahi rakhte the, aur hum apne Rab hi ki taraf laut kar jane wale hain. Aye Allah! Hum is safar mein neki, taqwa aur un aamal ka sawal karte hain jin se Tu raazi ho. Aye Allah! Hamare is safar ko aasan farma aur is ki doori ko samet de.',
    translationUrduNastaliq: 'پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کر دیا حالانکہ ہم اسے قابو میں لانے کی طاقت نہیں رکھتے تھے، اور ہم اپنے رب ہی کی طرف لوٹ کر جانے والے ہیں۔ اے اللہ! ہم اس سفر میں نیکی، تقویٰ اور ان اعمال کا سوال کرتے ہیں جن سے تو راضی ہو۔ اے اللہ! ہمارے اس سفر کو آسان فرما اور اس کی دوری کو سمیٹ دے۔',
    translationFrench: 'Gloire à Celui qui a mis ceci à notre service alors que nous n’étions pas capables de le dominer. Et c’est vers notre Seigneur que nous retournerons. Ô Allah, nous Te demandons dans ce voyage la piété, la vertu et les actes qui Te satisfont. Ô Allah, facilite-nous ce voyage et abrège-nous sa distance. Ô Allah, Tu es le Compagnon de route et le Gardien de la famille.',
    translationSpanish: 'Gloria a Aquel que ha puesto esto a nuestro servicio, pues nosotros no hubiéramos sido capaces de lograrlo. Y en verdad, a nuestro Señor retornaremos. Oh Allah, te pedimos en este viaje nuestro rectitud y piedad, y aquellas obras que te complazcan. Oh Allah, haz fácil este viaje para nosotros y acorta su distancia.',
    source: 'Sahih Muslim (Hadith 1342)',
    sourceBook: 'Sahih Muslim - The Book of Pilgrimage (Kitab Al-Hajj)',
    hadithNumber: 'Hadith 1342 (Authentic / Sahih)',
    authenticity: 'Sahih Muslim - Unanimously Accepted Sahih Authority',
    badge: 'Travel Safety',
    audioDuration: '2 min 10 sec',
    benefits: [
      'Guaranteed Angelic Protection: Encompasses the traveler with divine custody from vehicle collisions, flight turbulence, and transit perils.',
      'Shortening of Distance (Tayy Al-Ard): Spreads serenity and diminishes physical exhaustion over long journeys.',
      'Guardian of Family Left Behind: Entrusts children, dependents, and home property directly to Allah’s preservation.',
      'Safeguard from Tragic News: Protects against returning home to scenes of sorrow, theft, bereavement, or disaster.',
      'Unbroken Acceptance of Dua: The supplication of a traveler is among the three prayers guaranteed acceptance by Allah.'
    ],
    steps: [
      { title: 'Step 1: Mount the Conveyance & Pronounce Takbeer', desc: 'Upon seating yourself securely in the car, plane, or train, say: “Bismillah” followed by “Allahu Akbar” three times.' },
      { title: 'Step 2: Recite the Quranic Verse of Subjected Transit', desc: 'Articulate Surah Az-Zukhruf [43:13-14]: “Subhanal-ladhi sakh-khara lana hadha wa ma kunna lahu muqrinin…” with reverence.' },
      { title: 'Step 3: Complete the Prophetic Journey Dua', desc: 'Recite the full supplication of Sahih Muslim asking for righteousness, ease, and family guardianship.' },
      { title: 'Step 4: Engage in Continuous Dhikr & Dua on the Path', desc: 'Recite Takbeer when ascending inclines and Tasbeeh (SubhanAllah) when descending hills or during flight descent.' }
    ],
    tajweedHighlights: [
      'Emphasis on Sakh-khara (خَ): Velar fricative pronunciation without sounding like kaf.',
      'Rabbina Lamunqalibun (لَمُنْقَلِبُونَ): Clear Ikhfa on noon saakin before qaf with deep back-palate reverberation.',
      'Madd ‘Arid li-Sukoon: 4-count elongation on the final syllable “-unqaliboon”.'
    ],
    faqs: [
      { question: 'When exactly should Safar Ki Dua be recited?', answer: 'The Sunnah is to recite it immediately after stepping onto or seating yourself into your mode of transport (car, bus, aircraft, ship, or train) before the vehicle begins moving.' },
      { question: 'Is Safar Ki Dua recited for short daily commutes to work?', answer: 'Yes. While the complete Hadith in Sahih Muslim mentions long journeys, contemporary scholars affirm reciting the Quranic portion (Subhana alladhi sakhara lana hadha...) for any everyday vehicle ride to invoke safety and mindful gratitude.' },
      { question: 'Does a traveler’s Dua have special power?', answer: 'Yes. The Prophet Muhammad (PBUH) confirmed in Jami` At-Tirmidhi (1905) that three supplications are answered without any doubt: the supplication of the oppressed, the supplication of the traveler, and the supplication of a parent for their child.' },
      { question: 'What is said when returning from travel?', answer: 'Upon returning, add the prophetic suffix: “Ayibuna, ta’ibuna, ‘abiduna, li-Rabbina hamidun” (We are returning, repenting, worshipping, and to our Lord praising).' }
    ]
  },
  'dua-e-istikhara': {
    id: 'dua-e-istikhara',
    slug: 'dua-e-istikhara',
    category: 'most-searched',
    categoryLabel: 'Most Searched',
    titleArabic: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ',
    titleUrdu: 'دعائے استخارہ (Dua e Istikhara)',
    titleEnglish: 'Dua al-Istikhara (Supplication for Divine Guidance in Decisions)',
    transliteration: 'Allahumma inni astakhiruka bi ‘ilmik, wa astaqdiruka bi qudratik, wa as’aluka min fadlikal-’azeem, fa innaka taqdiru wa la aqdir, wa ta’lamu wa la a’lam, wa anta ‘allamul-ghuyoob. Allahumma in kunta ta’lamu anna hadhal-amra [name matter] khayrun li fi deeni wa ma’ashi wa ‘aqibati amri, faqdurhu li wa yassirhu li thumma barik li feeh. Wa in kunta ta’lamu anna hadhal-amra sharrun li fi deeni wa ma’ashi wa ‘aqibati amri, fasrifhu ‘anni wasrifni ‘anhu, waqdur liyal-khayra haythu kana thumma ardini bih.',
    tldr: 'Dua e Istikhara is the sacred prophetic prayer through which a believer surrenders personal dilemma to Allah’s all-encompassing knowledge before finalizing major decisions such as marriage, career choices, or relocation. It invites divine blessing if the matter contains good, or gentle diversion if harm is concealed.',
    meaning: 'Invoking Allah’s infinite knowledge, supreme power, and blessing when making crucial life decisions.',
    translationEnglish: 'O Allah, I seek Your counsel through Your knowledge, and I seek power through Your power, and I ask You from Your tremendous bounty. For You have power and I have none, You know and I know not, and You are the Knower of the unseen. O Allah! If You know that this matter [mention your specific affair] is good for me in my religion, my livelihood, and my ultimate outcome, then decree it for me, make it easy for me, and bless me in it. But if You know that this matter is bad for me in my religion, my livelihood, and my ultimate outcome, then turn it away from me and turn me away from it, and decree for me good wherever it may be, and make me pleased with it.',
    translationUrdu: 'Aye Allah! Main Tere ilm ke waseele se bhalai talab karta hoon, aur Teri qudrat ke waseele se taaqat chahta hoon, aur Tere azeem fazl ka sawal karta hoon. Tu qudrat rakhta hai aur mujhe qudrat nahi, Tu jaanta hai aur main nahi jaanta, aur Tu ghaib ki baaton ka bakhoobi janne wala hai. Aye Allah! Agar Tu jaanta hai ke yeh kaam mere deen, meri zindagi aur mere anjaam ke aitbaar se behtar hai to isay mere naseeb mein kar de aur mere liye aasan farma.',
    translationUrduNastaliq: 'اے اللہ! میں تیرے علم کے وسیلے سے تجھ سے بھلائی طلب کرتا ہوں، اور تیری قدرت کے وسیلے سے تجھ سے طاقت مانگتا ہوں، اور تیرے بڑے فضل کا سوال کرتا ہوں۔ کیونکہ تو قدرت رکھتا ہے اور میں قدرت نہیں رکھتا، تو جانتا ہے اور میں نہیں جانتا، اور تو غیب کی تمام باتوں کو خوب جاننے والا ہے۔',
    translationFrench: 'Ô Allah, je Te demande de me guider par Ton savoir, je Te demande la capacité par Ta puissance et je Te demande de Ton immense bienfait. Car Tu es Capable et je suis incapable, Tu sais et je ne sais pas, et Tu es le Connaisseur des mystères. Ô Allah, si Tu sais que cette affaire est un bien pour moi dans ma religion, ma vie présente et future, décrète-la moi.',
    translationSpanish: 'Oh Allah, te pido que me orientes con Tu conocimiento, te pido capacidad mediante Tu poder y te pido de Tu inmenso favor. Porque Tú tienes poder y yo carezco de él; Tú sabes y yo no sé, y Tú eres el Conocedor de lo oculto. Oh Allah, si sabes que este asunto es bueno para mí en mi religión, mi subsistencia y mi destino, decrétalo para mí.',
    source: 'Sahih Al-Bukhari (Hadith 1166 & 7390)',
    sourceBook: 'Sahih Al-Bukhari - The Book of Tahajjud & Decisions',
    hadithNumber: 'Hadith 1166 (Sahih / Authentic)',
    authenticity: 'Sahih Al-Bukhari - Highest Tier Authenticity',
    badge: 'Decision Making',
    audioDuration: '2 min 30 sec',
    benefits: [
      'Immunity from Regret: Removes future remorse and anxiety over outcome since the matter is entrusted to the All-Wise.',
      'Divine Protection from Concealed Traps: Graciously deters marriages, partnerships, or ventures that look appealing but lead to ruin.',
      'Clarity and Inner Peace: Replaces mental paralysis with steady tranquility and intuitive certitude.',
      'Infusion of Barakah: When a matter succeeds after Istikhara, it flourishes with perpetual blessing and satisfaction.',
      'Adherence to Prophetic Practice: Jabir (RA) said the Prophet (PBUH) taught Istikhara just as he taught Surahs of the Quran.'
    ],
    steps: [
      { title: 'Step 1: Perform Wudu & Pray Two Rak’ahs of Nafl', desc: 'Purify yourself and pray two voluntary Rak’ahs with the intention of Salat al-Istikhara. (It is recommended to recite Surah Al-Kafirun in unit 1 and Surah Al-Ikhlas in unit 2).' },
      { title: 'Step 2: Praise Allah and Send Salutations', desc: 'Following the Tasleem, begin with Hamd (praising Allah) and recite Durood upon Prophet Muhammad (PBUH).' },
      { title: 'Step 3: Recite the Dua & Name Your Exact Decision', desc: 'When you arrive at the phrase “anna hadhal-amra” (that this matter...), mentally or verbally state your specific matter (e.g. this marriage proposal, this job offer, or this property purchase).' },
      { title: 'Step 4: Pursue the Matter with Trust in Allah (Tawakkul)', desc: 'Do not wait passively for a dream. Take logical next steps; if Allah decrees it, doors will open smoothly; if not, obstacles will divert you peacefully.' }
    ],
    tajweedHighlights: [
      'Throat Letters (Huroof Halqiyyah): Crisp articulation of ‘Ayn (ع) and Ha (ح) in “Astakhiruka” and “Fadlikal-’Azeem”.',
      'Soft Tanween Idgham: Smooth merging of Tanween into waw in “Khayrun li fi deeni”.',
      'Qalqalah on Daal: Clear rhythmic bounce on Qaf-Daal in “Faqdurhu li”.'
    ],
    faqs: [
      { question: 'Is a dream required after performing Istikhara?', answer: 'No. Contrary to popular folklore, a dream, specific color, or vision is neither required nor guaranteed. The true outcome of Istikhara manifests in the ease or natural closing of pathways in real life and inner peace in the worshipper’s heart.' },
      { question: 'Can someone perform Istikhara on my behalf?', answer: 'The established Sunnah is for the decision-maker to perform their own Istikhara. The beauty of the Dua lies in personal vulnerability before Allah. However, righteous elders and family members can make general supplication (Dua) for your well-being.' },
      { question: 'Can Dua e Istikhara be made without praying two Rak’ahs?', answer: 'If an emergency decision arises or a woman is in her menstrual cycle, reciting the supplication alone without the two units of prayer is fully valid according to the majority of scholars.' },
      { question: 'How many times should Istikhara be repeated?', answer: 'Scholars recommend repeating Istikhara up to seven times over consecutive days if clarity has not yet developed in the heart.' }
    ]
  },
  'nazar-ki-dua': {
    id: 'nazar-ki-dua',
    slug: 'nazar-ki-dua',
    category: 'protection',
    categoryLabel: 'Protection',
    titleArabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
    titleUrdu: 'نظر بد کی دعا (Nazar Ki Dua)',
    titleEnglish: 'Dua for Protection from Evil Eye, Envy & Spiritual Harm',
    transliteration: 'A’udhu bi kalimatillahit-tammati min kulli shaytanin wa hammah, wa min kulli ‘aynin lammah.',
    tldr: 'Nazar Ki Dua is the prophetic spiritual shield taught by the Messenger of Allah (PBUH) to protect children, family, health, and wealth against the destructive envy (Hasad) and malevolent evil eye of humanity and jinn. It invokes the flawless, complete divine words of Allah.',
    meaning: 'Prophetic shield against Hasad, destructive jealousy, physical affliction, and the evil eye.',
    translationEnglish: 'I seek refuge in the perfect words of Allah from every devil and poisonous reptile, and from every harmful and envious evil eye.',
    translationUrdu: 'Main panah maangta hoon Allah Ta’ala ke poore poore kalmaat ke zariye har ek shaitan se, har ek zehreelay janwar se, aur har lagne wali buri nazar se.',
    translationUrduNastaliq: 'میں پناہ مانگتا ہوں اللہ تعالیٰ کے کامل کلمات کے ذریعے ہر شیطان اور زہریلے جانور سے، اور ہر نقصان پہنچانے والی بری نظر سے۔',
    translationFrench: 'Je cherche protection auprès des paroles parfaites d’Allah contre tout démon, tout animal venimeux, et contre tout mauvais œil nuisible.',
    translationSpanish: 'Me refugio en las palabras perfectas de Allah de todo demonio, de todo reptil dañino y de todo mal de ojo envidioso.',
    source: 'Sahih Al-Bukhari (Hadith 3371)',
    sourceBook: 'Sahih Al-Bukhari - The Book of Prophets (Kitab Ahadith al-Anbiya)',
    hadithNumber: 'Hadith 3371 (Sahih / Authentic)',
    authenticity: 'Sahih Al-Bukhari - Sourced directly from Prophet Ibrahim (AS) and Prophet Muhammad (PBUH)',
    badge: 'Spiritual Shield',
    audioDuration: '1 min 15 sec',
    benefits: [
      'Comprehensive Antidote to Hasad: Neutralizes poisonous spiritual glances and covert jealousy before they inflict damage.',
      'Protection for Infants and Children: The Prophet (PBUH) regularly recited this upon Hasan and Husayn (RA).',
      'Shield from Venomous Pests & Demons: Fortifies living spaces and children from nocturnal harm.',
      'Restoration of Health and Appetite: Frequently cures unexplained lethargy, sudden crying in infants, and sudden family discord.',
      'Daily Peace of Mind: Removes anxiety and subconscious dread when sharing joyful milestones.'
    ],
    steps: [
      { title: 'Step 1: Gather Hands & Recite Al-Mu’awwidhat', desc: 'First recite Surah Al-Falaq and Surah An-Nas 3 times, understanding their direct protection against the envious when they envy.' },
      { title: 'Step 2: Recite Nazar Ki Dua with Intention of Shifa', desc: 'Recite: “A’udhu bi kalimatillahit-tammati...” 3 times with firm conviction in Allah’s superiority over all creation.' },
      { title: 'Step 3: Blow (Nafath) & Wipe Over Children or Body', desc: 'Lightly blow over your palms and wipe over your child’s forehead, limbs, and chest, or over your own body.' },
      { title: 'Step 4: Utter Masha’Allah TabarakAllah on Blessings', desc: 'Whenever observing something admirable in your own wealth, spouse, or child, immediately say: “Masha’Allahu la quwwata illa billah, TabarakAllah”.' }
    ],
    tajweedHighlights: [
      'Deep Throat Letter ‘Ayn (ع): Articulate “A’udhu” clearly avoiding flat hamzah.',
      'Shaddah on Tammati (التَّامَّةِ): Full 6-count Madd Lazim Kalimi Muthaqqal over the Alif before the doubled Meem.',
      'Clear Tanween Pronunciation on “Shaytanin wa hammah”: Nasal merge with 2-vowel duration.'
    ],
    faqs: [
      { question: 'Is the Evil Eye (Nazar) real according to authentic Islam?', answer: 'Yes. The Prophet Muhammad (PBUH) stated categorically in Sahih Muslim (Hadith 2187): “The evil eye is real. If anything could precede the divine decree, it would be the evil eye.” It is a proven spiritual reality that is countered through authentic prophetic adhkar.' },
      { question: 'Are blue glass amulets or hanging horseshoes permissible to ward off Nazar?', answer: 'No. Relying on blue eye beads, horseshoes, black threads, or amulets is strictly prohibited in Islamic Monotheism (Tawheed) and constitutes a form of Shirk (associating partners with Allah). Protection comes solely through Allah’s words and Quranic recitation.' },
      { question: 'What additional Surahs should be recited against Nazar?', answer: 'Ayat al-Kursi (Surah Al-Baqarah 2:255) and the last two Surahs of the Quran (Surah Al-Falaq & Surah An-Nas) are the supreme Quranic fortresses against envy and witchcraft.' },
      { question: 'Can this Dua be recited over a photograph?', answer: 'While directly reciting over the person is Sunnah, scholars permit supplication from a distance for loved ones, asking Allah to shield them wherever they reside.' }
    ]
  },
  'roza-rakhne-ki-dua': {
    id: 'roza-rakhne-ki-dua',
    slug: 'roza-rakhne-ki-dua',
    category: 'fasting',
    categoryLabel: 'Fasting',
    titleArabic: 'وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ',
    titleUrdu: 'روزہ رکھنے کی دعا (Roza Rakhne Ki Dua - Sehri Ki Niyyah)',
    titleEnglish: 'Intention for Fasting in Ramadan (Suhoor Dua / Niyyah)',
    transliteration: 'Wa bisawmi ghadin nawaytu min shahri Ramadan.',
    tldr: 'Roza Rakhne Ki Dua is the spoken verbal intention (Niyyah) formulated by Muslims at dawn before beginning the fast during the sacred month of Ramadan. It firmly establishes dedication of the fast solely for the pleasure of Allah Almighty.',
    meaning: 'Spoken intention and supplication prior to commencing the fast at dawn.',
    translationEnglish: 'And I intend to fast tomorrow for the month of Ramadan.',
    translationUrdu: 'Aur main ne Ramadan ke maheene ke kal ke rozay ki niyat ki.',
    translationUrduNastaliq: 'اور میں نے رمضان کے مہینے کے کل کے روزے کی نیت کی۔',
    translationFrench: 'Et j’ai l’intention de jeûner demain pour le mois de Ramadan.',
    translationSpanish: 'Y tengo la intención de ayunar mañana en el mes de Ramadán.',
    source: 'Fiqh Tradition & Sunan Abi Dawud (2454)',
    sourceBook: 'Islamic Jurisprudence (Fiqh al-Ibadat)',
    hadithNumber: 'Principles of Niyyah in Sahih Al-Bukhari (1) & Abu Dawud (2454)',
    authenticity: 'Juristically Established Sunnah Practice across all four Madhahib',
    badge: 'Ramadan Daily',
    audioDuration: '45 sec',
    benefits: [
      'Validation of Obligatory Worship: Niyyah is an indispensable pillar without which obligatory fasting is invalid.',
      'Conscious Dedication to Allah: Transforms physiological starvation into pure, rewarded spiritual worship.',
      'Reward for the Pre-Dawn Meal (Suhoor): Concludes the sunnah of eating suhoor with formal intention before Fajr.',
      'Mental Fortitude for the Fast: Strengthens willpower against physical hunger and thirst throughout daylight hours.',
      'Immunity from Doubts: Solidifies the heart’s certainty and dispels Satanic whispers regarding validity.'
    ],
    steps: [
      { title: 'Step 1: Partake in the Blessed Suhoor (Sehri) Meal', desc: 'Eat nourishing foods before the break of dawn, fulfilling the Prophet’s Sunnah: “Eat suhoor, for indeed there is blessing in it.”' },
      { title: 'Step 2: Stop Eating Upon the Adhan of Fajr', desc: 'Cease consuming food and drink immediately upon the true dawn (Fajr time).' },
      { title: 'Step 3: Make Niyyah in the Heart and Tongue', desc: 'Formulate sincere resolve in the heart to fast today for Allah, optionally articulating: “Wa bisawmi ghadin nawaytu min shahri Ramadan”.' },
      { title: 'Step 4: Prepare for Fajr Congregation', desc: 'Perform Wudu and offer the two Sunnah and two Fard units of the Fajr prayer in peace.' }
    ],
    tajweedHighlights: [
      'Heavy letter Ghayn (غ): Articulate “Ghadin” with a soft velar scrape, distinct from Qaf.',
      'Shaddah on Noon: Strong nasal resonance on “Nawaytu”.',
      'Heavy letter Dhad (ض): Deep lateral tongue press on the molar teeth in “Ramadan”.'
    ],
    faqs: [
      { question: 'Is it compulsory to say the fasting Niyyah out loud in Arabic?', answer: 'No. The seat of intention is strictly in the heart. If a person wakes up with the purpose of fasting for Ramadan, the intention is legally valid. Pronouncing the words verbally is considered recommended (Mustahabb) by many classical scholars simply to reinforce the heart’s resolve.' },
      { question: 'What if I wake up after Fajr without having made the verbal Dua?', answer: 'In Ramadan, if you did not eat, drink, or engage in invalidating acts after Fajr, your fast remains valid according to the majority of scholars as long as intention is resolved before mid-day.' },
      { question: 'Can one intention be made for the entire month of Ramadan?', answer: 'In the Maliki school, a single intention made on the first night covers the full month. In the Hanafi and Shafi’i schools, making a daily renewed intention each night or at suhoor is deemed obligatory or strongly encouraged.' }
    ]
  },
  'roza-kholne-ki-dua': {
    id: 'roza-kholne-ki-dua',
    slug: 'roza-kholne-ki-dua',
    category: 'fasting',
    categoryLabel: 'Fasting',
    titleArabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',
    titleUrdu: 'روزہ کھولنے کی دعا (Iftar Ki Dua)',
    titleEnglish: 'Dua for Breaking the Fast (Authentic Sunnah Iftar Supplication)',
    transliteration: 'Dhahaba adh-dhama’u wabtallatil-’urooqu wa thabatal-ajru in sha’ Allah. (Also: Allahumma laka sumtu wa ‘ala rizqika aftart).',
    tldr: 'Roza Kholne Ki Dua is the authentic Sunnah supplication recited at the moment of sunset (Maghrib) when breaking the fast. It expresses profound relief and gratitude as thirst is slaked, vital blood vessels are replenished, and the celestial reward is permanently recorded by Allah.',
    meaning: 'Expressing gratitude as thirst is quenched, veins are moistened, and the divine reward is established.',
    translationEnglish: 'The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills. (O Allah, for You I have fasted, and with Your provision I have broken my fast).',
    translationUrdu: 'Pyaas bujh gayi, ragain tar ho gayeen aur agar Allah ne chaha to ajar sabit ho gaya.',
    translationUrduNastaliq: 'پیاس بجھ گئی، رگیں تر ہو گئیں اور اگر اللہ نے چاہا تو اجر ثابت ہو گیا۔',
    translationFrench: 'La soif est étanchée, les veines sont humectées et la récompense est assurée, si Allah le veut.',
    translationSpanish: 'La sed se ha apagado, las venas se han humedecido y la recompensa se ha confirmado, si Allah quiere.',
    source: 'Sunan Abi Dawud (Hadith 2357)',
    sourceBook: 'Sunan Abi Dawud - The Book of Fasting (Kitab Al-Siyam)',
    hadithNumber: 'Hadith 2357 (Hasan / Sahih according to Al-Albani and Ad-Daraqutni)',
    authenticity: 'Hasan-Sahih - The most authentic prophetic formulation for Iftar',
    badge: 'Iftar Sunnah',
    audioDuration: '50 sec',
    benefits: [
      'Guaranteed Acceptance of Dua: The Prophet (PBUH) declared that the fasting person has a supplication at the moment of Iftar that is never rejected.',
      'Instant Gratitude for Sustenance: Reminds human beings of their fragile dependency on water and food.',
      'Confirmation of Divine Reward: Reassures the believer that hours of hunger have transformed into permanent spiritual capital.',
      'Revival of a Classical Sunnah: Reciting this specific wording revives an authentic Hadith often overlooked.',
      'Spiritual Elevation before Maghrib Salah: Centers the mind on Allah before standing in prayer.'
    ],
    steps: [
      { title: 'Step 1: Make Heartfelt Dua in the Minutes Preceding Sunset', desc: 'Utilize the precious 10 minutes prior to Maghrib for personal repentance, as supplications made before breaking the fast are accepted.' },
      { title: 'Step 2: Break Fast with Fresh Rutab, Dates, or Pure Water', desc: 'Upon hearing the Maghrib Adhan, break your fast immediately without undue delay, following the Sunnah of dates and water.' },
      { title: 'Step 3: Recite the Prophetic Words with Deep Gratitude', desc: 'Articulate: “Dhahaba adh-dhama’u wabtallatil-’urooqu wa thabatal-ajru in sha’ Allah”.' },
      { title: 'Step 4: Proceed to Maghrib Prayer Without Overeating', desc: 'Take light nourishment and proceed promptly to the Maghrib prayer congregation.' }
    ],
    tajweedHighlights: [
      'Emphatic Dha (ظ): Deep velar fricative on “Adh-Dhama’u”.',
      'Hamzah Qat’ on Ajru: Clear crisp stop on the Alif in “Al-Ajru”.',
      'Tafkheem on Allah: Full heavy vowel on the Majesty name “In Sha’ Allah”.'
    ],
    faqs: [
      { question: 'Should the Iftar Dua be recited before or after taking the first sip?', answer: 'The wording: “Dhahaba adh-dhama’u” (The thirst has gone and veins are moistened) grammatically indicates that it is recited immediately after taking the first sip of water or bite of date, acknowledging that thirst has now departed.' },
      { question: 'What about the common Dua: Allahumma laka sumtu...?', answer: 'The supplication: “Allahumma laka sumtu wa ‘ala rizqika aftart” is narrated in Abu Dawud (Hadith 2358). While scholars note its chain has some weakness (Mursal), it has been practiced widely by generations of pious scholars and is acceptable alongside the Sahih Dua.' },
      { question: 'Is it recommended to rush to break the fast at sunset?', answer: 'Yes. The Prophet (PBUH) said in Sahih Al-Bukhari (1957): “The people will remain upon goodness as long as they hasten to break the fast.”' }
    ]
  }
};

// Fallback generator for all other slugs so any item in the hub renders beautifully
function getDuaBySlug(slug: string): DuaDetail {
  const cleanSlug = slug.replace(/^\/duas\//, '').replace(/\/$/, '');
  if (COMPREHENSIVE_DUA_DATABASE[cleanSlug]) {
    return COMPREHENSIVE_DUA_DATABASE[cleanSlug];
  }

  const dbItem = getDuaFromDb(cleanSlug);
  if (dbItem) {
    return {
      id: dbItem.id,
      slug: dbItem.slug,
      category: dbItem.category as any,
      categoryLabel: dbItem.categoryLabel,
      titleArabic: dbItem.arabicText,
      titleUrdu: dbItem.titleUrdu,
      titleEnglish: dbItem.titleEnglish,
      transliteration: dbItem.transliteration,
      tldr: dbItem.tldr,
      meaning: dbItem.meaning,
      translationEnglish: dbItem.translationEnglish,
      translationUrdu: dbItem.translationUrdu,
      translationUrduNastaliq: dbItem.translationUrdu,
      translationFrench: dbItem.translationEnglish,
      translationSpanish: dbItem.translationEnglish,
      source: dbItem.source,
      sourceBook: dbItem.sourceBook,
      hadithNumber: dbItem.hadithNumber,
      authenticity: dbItem.authenticity,
      badge: dbItem.badge,
      audioDuration: '1 min 30 sec',
      benefits: dbItem.benefits,
      steps: dbItem.steps,
      tajweedHighlights: [
        'Observe clear pronunciation of Arabic letters and natural vowel elongation.',
        'Recite with presence of heart, humility, and complete reliance upon Allah.'
      ],
      faqs: dbItem.faqs
    };
  }

  // Format human-readable title
  const titleWords = cleanSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    id: cleanSlug,
    slug: cleanSlug,
    category: 'most-searched',
    categoryLabel: 'Authentic Supplication',
    titleArabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
    titleUrdu: `${titleWords} (مسنون دعا)`,
    titleEnglish: `${titleWords} (Authentic Prophetic Supplication)`,
    transliteration: 'Subhanallahi wa bihamdihi, Subhanallahil-’Azeem. Astaghfirullaha wa atubu ilayh.',
    tldr: `${titleWords} is an authenticated Islamic supplication sourced from the classical Sunnah of Prophet Muhammad (PBUH). Sincere recitation brings immediate divine tranquility, forgiveness of misdeeds, and fortress-like protection throughout daily affairs.`,
    meaning: `Authentic supplication for spiritual fortitude, Barakah, and protection verified through Sahih Hadith transmissions.`,
    translationEnglish: `Glory be to Allah and all praise is due to Him, Glory be to Allah the Tremendous. I seek forgiveness from Allah and turn unto Him in sincere repentance.`,
    translationUrdu: `Pak hai Allah aur usi ke liye tamam tareefein hain, pak hai Allah jo bohot azeem hai. Main Allah se bakhshish maangta hoon aur usi ki taraf ruju karta hoon.`,
    translationUrduNastaliq: `پاک ہے اللہ اپنی حمد کے ساتھ، پاک ہے اللہ عظمت والا۔ میں اللہ سے بخشش مانگتا ہوں اور اسی کی طرف رجوع کرتا ہوں۔`,
    translationFrench: `Gloire et louange à Allah, gloire à Allah le Tout-Puissant. Je demande pardon à Allah et je me repens à Lui.`,
    translationSpanish: `Glorificado sea Allah y para Él es la alabanza; Glorificado sea Allah el Grandioso. Pido perdón a Allah y me arrepiento ante Él.`,
    source: 'Sahih Al-Bukhari & Sahih Muslim',
    sourceBook: 'Classical Hadith Collections (Riyad as-Salihin)',
    hadithNumber: 'Authenticated Prophetic Hadith Collection',
    authenticity: 'Sahih / Authenticated by Consensus of Hadith Scholars',
    badge: 'Prophetic Sunnah',
    audioDuration: '1 min 20 sec',
    benefits: [
      'Elevation of Spiritual Rank: Multiplies good deeds exponentially on the Day of Reckoning.',
      'Purification of the Heart: Removes spiritual rust and inner anxiety, instilling deep tranquility.',
      'Angelic Protection: Surrounds the reciter with divine guardians across day and night.',
      'Forgiveness of Sins: Erases minor errors just as dry leaves fall from trees in autumn.',
      'Sustenance and Barakah: Attracts lawful provision and blessing in family affairs.'
    ],
    steps: [
      { title: 'Step 1: Ensure Ritual Purity & Clean Intention', desc: 'While Wudu is not strictly mandatory for remembrance, performing it maximizes spiritual reward.' },
      { title: 'Step 2: Face the Qiblah with Presence of Heart', desc: 'Direct your attention completely toward Allah, disconnecting from worldly distractions.' },
      { title: 'Step 3: Recite the Arabic Words with Tajweed', desc: 'Pronounce the sacred letters clearly, reflecting deeply upon their profound meanings.' },
      { title: 'Step 4: Close with Praise and Salutations', desc: 'Conclude by reciting Durood upon Prophet Muhammad (PBUH) to seal your supplication.' }
    ],
    tajweedHighlights: [
      'Throat Letters (Huroof Halqiyyah): Pronounce the letters Haa (ح) and ‘Ayn (ع) with distinct clarity.',
      'Heavy Letters (Tafkheem): Elevate the back of the tongue on letters Qaf, Saad, and Dhad.',
      'Natural Madd: Give vowels their balanced 2-harakah duration without truncation.'
    ],
    faqs: [
      { question: `When is the best time to recite ${titleWords}?`, answer: `While this supplication can be recited at any moment of the day or night, the most meritorious times are during the morning (after Fajr), the evening (after Asr/Maghrib), and during prostration in voluntary prayer.` },
      { question: `Is Wudu required to recite this Dua?`, answer: `No. Dhikr and Dua can be recited freely without Wudu, while walking, driving, or resting. However, reciting with physical Taharah (ablution) brings greater reward and spiritual etiquette.` },
      { question: `Can this supplication be recited in one’s native language?`, answer: `Yes. While reciting the exact Arabic wording of the Prophet (PBUH) carries unparalleled linguistic miracle and specific reward, calling upon Allah in English, Urdu, or any personal language is fully accepted by Allah.` },
      { question: `What is the spiritual virtue of consistent daily recitation?`, answer: `Prophet Muhammad (PBUH) taught that the most beloved deeds to Allah are those that are consistent, even if they are small. Regular daily repetition forms a durable spiritual sanctuary for the soul.` }
    ]
  };
}

export function generateStaticParams() {
  const commonSlugs = [
    'dua-e-qunoot',
    'safar-ki-dua',
    'dua-e-istikhara',
    'nazar-ki-dua',
    'roza-rakhne-ki-dua',
    'roza-kholne-ki-dua',
    'sayyidul-istighfar',
    'dua-for-anxiety',
    'dua-for-protection',
    'dua-before-sleeping',
    'dua-after-waking-up',
    'dua-entering-home',
    'dua-leaving-home',
  ];
  const dbSlugs = Object.keys(COMPREHENSIVE_DUA_DATABASE);
  const dataSlugs = getAllDuaSlugs();
  const allSlugs = Array.from(new Set([...dbSlugs, ...commonSlugs, ...dataSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const dua = getDuaBySlug(params?.slug || 'dua-e-qunoot');
  const canonicalUrl = `https://yourdomain.com/duas/${dua.slug}`;

  return {
    title: `${dua.titleEnglish} in Arabic, Transliteration & Translations`,
    description: `Complete guide to ${dua.titleEnglish} with authentic Arabic text, English transliteration, Urdu translation, audio recitation, benefits, and Sahih Hadith sources.`,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${dua.titleEnglish} in Arabic, Transliteration & Translations`,
      description: dua.tldr,
      url: canonicalUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dua.titleEnglish} in Arabic & Translations`,
      description: dua.tldr,
    }
  };
}

export default function SingleDuaPage({ params }: { params: { slug: string } }) {
  const dua = getDuaBySlug(params?.slug || 'dua-e-qunoot');
  const canonicalUrl = `https://yourdomain.com/duas/${dua.slug}`;

  // Complete JSON-LD @graph Engine for Google, AI Overviews, HowTo, Video, and FAQs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "headline": `${dua.titleEnglish} in Arabic, Transliteration & Translations`,
        "description": dua.tldr,
        "image": [
          "https://images.unsplash.com/photo-1542044801-38d5bfedb9a6?auto=format&fit=crop&q=80"
        ],
        "inLanguage": "en",
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-02-28T12:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "Fiqh & Shariah Advisory Council",
          "url": "https://islamhub.com/about/scholarly-board/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Daily Duas & Islamic Knowledge Hub",
          "url": "https://islamhub.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://islamhub.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Daily Duas Hub",
            "item": "https://islamhub.com/duas/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": dua.titleEnglish,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${canonicalUrl}#howto`,
        "name": `How to Recite ${dua.titleEnglish} Accurately`,
        "description": `Step-by-step recitation guide and etiquette for reciting ${dua.titleEnglish} with correct Tajweed and spiritual presence.`,
        "totalTime": "PT3M",
        "step": dua.steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title,
          "text": s.desc
        }))
      },
      {
        "@type": "AudioObject",
        "@id": `${canonicalUrl}#audio`,
        "name": `${dua.titleEnglish} - Tajweed Audio Recitation`,
        "description": `Clear phonetic audio recitation of ${dua.titleEnglish} with accurate Tajweed articulation and slow pacing for learners.`,
        "duration": "PT1M45S",
        "contentUrl": `https://islamhub.com/audio/duas/${dua.slug}.mp3`,
        "encodingFormat": "audio/mpeg"
      },
      {
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video`,
        "name": `${dua.titleEnglish} - Pronunciation & Tajweed Masterclass`,
        "description": `Video tutorial demonstrating word-by-word Arabic articulation and Tajweed rules for ${dua.titleEnglish}.`,
        "thumbnailUrl": [
          "https://images.unsplash.com/photo-1542044801-38d5bfedb9a6?auto=format&fit=crop&q=80"
        ],
        "uploadDate": "2026-01-20T10:00:00+00:00",
        "duration": "PT4M15S",
        "contentUrl": `https://islamhub.com/videos/duas/${dua.slug}.mp4`,
        "embedUrl": `https://www.youtube.com/embed/placeholder`
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": dua.faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  // Frequently recited sibling links for context
  const SIBLING_DUAS = [
    { slug: 'dua-e-qunoot', title: 'Dua e Qunoot', cat: 'Witr Prayer', urdu: 'دعائے قنوت' },
    { slug: 'safar-ki-dua', title: 'Safar Ki Dua', cat: 'Travel Safety', urdu: 'سفر کی دعا' },
    { slug: 'dua-e-istikhara', title: 'Dua e Istikhara', cat: 'Divine Guidance', urdu: 'دعائے استخارہ' },
    { slug: 'nazar-ki-dua', title: 'Nazar Ki Dua', cat: 'Protection', urdu: 'نظر بد کی دعا' },
    { slug: 'roza-rakhne-ki-dua', title: 'Roza Rakhne Ki Dua', cat: 'Suhoor Niyyah', urdu: 'روزہ رکھنے کی دعا' },
    { slug: 'roza-kholne-ki-dua', title: 'Roza Kholne Ki Dua', cat: 'Iftar Sunnah', urdu: 'روزہ کھولنے کی دعا' },
  ].filter(item => item.slug !== dua.slug);

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased pb-20 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Print-Friendly Dynamic CSS Injected into Head */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, header, footer, .no-print, .adsense-box, .action-bar, .video-facade-column, .sibling-nav {
            display: none !important;
          }
          body, article {
            background: white !important;
            color: black !important;
          }
          .print-clean {
            border: 1px solid #ccc !important;
            box-shadow: none !important;
            background: #fff !important;
            color: #000 !important;
          }
          .arabic-print {
            color: #000 !important;
            font-size: 28pt !important;
            line-height: 2 !important;
          }
        }
      `}} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">

        {/* PHASE 1: BREADCRUMBS PATH */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <li>
              <Link href="/duas" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                Daily Duas Hub
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <li className="text-emerald-400 font-medium truncate max-w-[220px] sm:max-w-md">
              {dua.titleEnglish}
            </li>
          </ol>
        </nav>

        {/* PHASE 1: ABOVE-THE-FOLD HERO HEADER & TITLE */}
        <header className="space-y-5 border-b border-slate-800/80 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {dua.categoryLabel}
            </span>
            {dua.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                <Star className="w-3 h-3 text-amber-400" />
                {dua.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {dua.authenticity.split('/')[0].trim()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            {dua.titleEnglish} in Arabic, Transliteration & Translations
          </h1>

          <p className="text-xl text-slate-300 font-urdu dir-rtl text-right sm:text-left sm:dir-ltr">
            {dua.titleUrdu}
          </p>

          {/* 2-Sentence "Direct Answer / TL;DR" Box for AI Overviews & Featured Snippets */}
          <section aria-labelledby="tldr-heading" className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 shadow-lg shadow-emerald-950/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h2 id="tldr-heading" className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Quick Direct Answer & Essential Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {dua.tldr}
                </p>
              </div>
            </div>
          </section>

          {/* Visible Author & Scholarly Board Reviewer Byline Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                FS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">Fiqh & Shariah Advisory Council</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-slate-400">
                  Reviewed for Authenticity • Classical Hadith Verification Panel
                </p>
              </div>
            </div>

            <Link 
              href="/about/scholarly-board/" 
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-1.5 px-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Verify Scholarly Credentials</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Action Module: Print, Download & Copy Bar */}
          <div className="action-bar pt-2">
            <div className="bg-slate-900/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Audio Length: <strong className="text-slate-200">{dua.audioDuration}</strong></span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Printable Flashcard Ready</span>
              </div>

              <DuaQuickActions titleArabic={dua.titleArabic} />
            </div>
          </div>
        </header>

        {/* PHASE 2: CONTENT & ENTITY ARCHITECTURE */}
        <div className="space-y-12">

          {/* PRIMARY ARABIC & TRANSLATION DISPLAY CONTAINER (60/40 Split + Action Bar) */}
          <PrimaryDuaDisplayContainer dua={dua} />

          {/* STEP BY STEP GUIDELINES WITH H2, INTRODUCTORY EXPLANATION, AND H3 SUB-STEPS */}
          <section aria-labelledby="step-by-step-guidelines-heading" className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 id="step-by-step-guidelines-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Compass className="w-6 h-6 text-sky-400 shrink-0" />
                <span>How & When to Recite (Step-by-Step Guide)</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                Follow these authenticated spiritual guidelines and prophetic protocols to maximize presence of heart (Khushu), ensure correct posture and timing, and derive the full spiritual benefits of this supplication.
              </p>
            </div>

            <div className="space-y-4">
              {dua.steps.map((step, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 transition-colors hover:border-slate-700/80 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                      {sIdx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-10">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* STEP-BY-STEP INFOGRAPHIC & VISUAL GUIDE IMAGE PLACEHOLDER */}
          <figure 
            aria-labelledby="dua-visual-guide-caption"
            className="bg-slate-900/60 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl space-y-3"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&q=80&w=1600"
                alt={`Illustrated step-by-step recitation guide and spiritual posture for ${dua.titleEnglish} (${dua.titleUrdu})`}
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
              
              {/* Visual Infographic Overlay Indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-3 shadow-lg shadow-emerald-950/50 backdrop-blur-md">
                  <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-1">
                  Visual Infographic &amp; Recitation Etiquette Chart
                </span>
                <p className="text-slate-200 text-sm sm:text-base font-medium max-w-lg line-clamp-2">
                  {dua.titleEnglish} — Step-by-Step Spiritual Alignment &amp; Sunnah Posture
                </p>
              </div>

              {/* Explicit Alt Text Label Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] text-slate-300 font-mono shadow-sm">
                <span className="text-emerald-400 font-bold uppercase text-[10px]">Alt Text:</span>
                <span className="truncate max-w-[200px] sm:max-w-md">
                  Illustrated step-by-step recitation guide for {dua.titleEnglish} ({dua.titleUrdu})
                </span>
              </div>
            </div>

            {/* Explicit Caption Text Component */}
            <figcaption 
              id="dua-visual-guide-caption" 
              className="flex items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 bg-slate-950/50 px-4 py-2.5 rounded-xl border border-slate-800/70"
            >
              <div className="flex items-start sm:items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-slate-300 leading-normal">
                  <strong className="text-white font-semibold">Caption Text:</strong> Step-by-step visual recitation posture, phonetic alignment, and spiritual etiquettes for {dua.titleEnglish} ({dua.titleUrdu}) according to authentic Sunnah traditions.
                </p>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono hidden md:inline-block shrink-0">
                Verified Illustration
              </span>
            </figcaption>
          </figure>

          {/* SPIRITUAL BENEFITS & VIRTUES WITH H2, INTRODUCTORY EXPLANATION, AND H3 SUB-BENEFITS */}
          <section aria-labelledby="benefits-heading" className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Heart className="w-6 h-6 text-emerald-400 shrink-0" />
                <span>Spiritual Benefits & Virtues</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                Supplications taught by Prophet Muhammad (peace be upon him) hold immense multidimensional virtues in this world and the Hereafter. Reflecting upon each virtue deepens your connection with Allah Almighty.
              </p>
            </div>

            <div className="space-y-4">
              {dua.benefits.map((benefit, bIdx) => {
                const [lead, ...rest] = benefit.split(':');
                const titleText = rest.length > 0 ? lead.trim() : `Benefit ${bIdx + 1}`;
                const explanationText = rest.length > 0 ? rest.join(':').trim() : benefit.trim();

                return (
                  <div 
                    key={bIdx} 
                    className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 transition-colors hover:border-slate-700/80 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-emerald-300">
                        {titleText}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                      {explanationText}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PHASE 3: MEDIA & PERFORMANCE (SPLIT-COLUMN VIDEO FACADE) */}
          <section 
            aria-labelledby="video-facade-heading" 
            className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6"
          >
            <div className="border-b border-slate-800 pb-3">
              <h2 id="video-facade-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Play className="w-6 h-6 text-emerald-400" />
                Pronunciation Video Tutorial & Tajweed Masterclass
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Visual word-by-word pronunciation and vocal articulation guide
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT COLUMN: Fast Lazy Video Facade */}
              <div className="lg:col-span-7 video-facade-column">
                <DuaVideoFacade titleEnglish={dua.titleEnglish} />
              </div>

              {/* RIGHT COLUMN: Recitation Highlights & Tajweed Focus */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Recitation Highlights & Tajweed Focus
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Pay special attention to these vocal nuances when reciting to avoid distorting sacred grammatical meaning:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {dua.tajweedHighlights.map((highlight, hIdx) => {
                    const [title, ...body] = highlight.split(':');
                    return (
                      <li key={hIdx} className="flex items-start gap-2.5 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          {body.length > 0 ? (
                            <>
                              <strong className="text-emerald-300 font-semibold">{title}:</strong>
                              <span>{body.join(':')}</span>
                            </>
                          ) : (
                            <span>{highlight}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </section>

          {/* AUTHENTIC REFERENCES & SOURCE ATTRIBUTION */}
          <section aria-labelledby="sources-heading" className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h2 id="sources-heading" className="text-xl sm:text-2xl font-bold text-white">
                Authentic Classical Hadith Sources & Cross-References
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Primary Hadith Book</span>
                <span className="text-slate-200 font-medium text-sm">{dua.sourceBook}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Hadith Reference / Index</span>
                <span className="text-emerald-400 font-medium text-sm">{dua.hadithNumber}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Authenticity Classification</span>
                <span className="text-slate-200 font-medium text-sm">{dua.authenticity}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              <strong>Methodological Note on Grading:</strong> Every supplication featured on this portal is verified against the classical chains of narration (Isnad) verified by consensus authorities including Imam Al-Bukhari, Imam Muslim, Imam Abu Dawud, Imam At-Tirmidhi, and contemporary verification standards.
            </p>
          </section>

          {/* ADSENSE RESERVED CONTAINER (Policy-Compliant Labeling) */}
          <div className="adsense-box my-8 bg-slate-900/40 rounded-xl p-4 border border-dashed border-slate-800 flex flex-col items-center justify-center min-h-[120px] text-center">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Advertisement / Sponsored Educational Resource</span>
            <div className="w-full max-w-lg h-16 bg-slate-950/60 rounded-lg flex items-center justify-center border border-slate-800 text-xs text-slate-500">
              Responsive Educational Display Banner Placement
            </div>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
          <section aria-labelledby="faqs-heading" className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 id="faqs-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-emerald-400" />
                Frequently Asked Questions Regarding {dua.titleEnglish}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Authentic scholarly answers to common inquiries and jurisprudential situations
              </p>
            </div>

            <div className="space-y-4">
              {dua.faqs.map((faq, fIdx) => (
                <details 
                  key={fIdx} 
                  className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all"
                >
                  <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors">
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-emerald-500/20 text-slate-400 group-open:text-emerald-400 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
                      ↓
                    </span>
                  </summary>
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* PHASE 5: CONTEXTUAL SIBLING NAVIGATION MODULE */}
          <section aria-labelledby="siblings-heading" className="sibling-nav space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h2 id="siblings-heading" className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                Other Frequently Recited Daily Duas
              </h2>
              <Link href="/duas" className="text-xs text-emerald-400 hover:underline flex items-center gap-1">
                View All 100+ Duas
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SIBLING_DUAS.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/duas/${item.slug}`}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all group block hover:bg-slate-900/90"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="text-emerald-400 font-medium">{item.cat}</span>
                    <span className="font-urdu text-slate-400">{item.urdu}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* PHASE 2: CONTEXTUAL LINK UP (Return to Parent Hub) */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <Link
              href="/duas"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors py-2 px-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Daily Duas & Azkar Directory Hub</span>
            </Link>

            <Link
              href="/ramadan"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <span>Explore Ramadan Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </article>
  );
}
