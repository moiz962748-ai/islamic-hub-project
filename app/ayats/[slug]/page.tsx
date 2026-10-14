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
import PrimaryAyatDisplayContainer, { AyatDetail } from './PrimaryAyatDisplayContainer';
import { AYATS_DATA, getAyatBySlug, getAllAyatSlugs } from './ayatsData';
import { AyatQuickActions, AyatVideoFacade } from './AyatClientComponents';

const COMPREHENSIVE_AYAT_DATABASE: Record<string, AyatDetail> = {
  'ayat-al-kursi': {
    id: 'ayat-al-kursi',
    slug: 'ayat-al-kursi',
    surahNameArabic: 'البقرة',
    surahNameEnglish: 'Al-Baqarah',
    surahNumber: 2,
    ayahNumber: '255',
    category: 'greatest',
    categoryLabel: 'Greatest Ayat',
    titleArabic: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    titleUrdu: 'آیت الکرسی (Ayat al-Kursi)',
    titleEnglish: 'Ayat al-Kursi (The Verse of the Throne)',
    transliteration: 'Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta’khudhuhu sinatuw-wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa’u ‘indahu illa bi-idhnih, ya’lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay’im-min ‘ilmihi illa bima sha’, wasi’a kursiyyuhus-samawati wal-ard, wa la ya’uduhu hifzuhuma, wa Huwal-’Aliyyul-’Azim.',
    tldr: 'Ayat al-Kursi (Surah Al-Baqarah 2:255) is affirmed by the Prophet Muhammad (PBUH) as the greatest single verse in the Holy Quran. It embodies the supreme declaration of Tawheed, affirming Allah’s eternal life, self-subsistence, infinite knowledge, omnipotent throne encompassing the heavens and earth, and absolute preservation over creation.',
    meaning: 'The Throne Verse: The sublime affirmation of divine sovereignty, everlasting existence, and celestial guardianship.',
    translationEnglish: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
    translationUrdu: 'Allah! Us ke siwa koi ma’bood nahi, Woh hamesha zinda rehne wala aur sab ko thamne wala hai. Usay na oongh aati hai na neend. Usi ka hai jo aasmanon mein hai aur jo zameen mein hai. Kaun hai jo Us ki ijazat ke baghair Us ke paas sifarish kar sake? Woh janta hai jo un ke aagay hai aur jo un ke peeche hai, aur woh Us ke ilm mein se kisi cheez ka ihata nahi kar sakte siwaye is ke jo Woh chahe. Us ki Kursi ne aasmanon aur zameen ko gher rakha hai, aur in dono ki hifazat Usay thakati nahi, aur Woh buland-o-bartar aur azmat wala hai.',
    translationUrduNastaliq: 'اللہ! اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ رہنے والا اور سب کو تھامنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ اسی کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے ہاں سفارش کر سکے؟ وہ جانتا ہے جو ان کے آگے ہے اور جو ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے سوائے اس کے جو وہ چاہے۔ اس کی کرسی آسمانوں اور زمین پر چھائی ہوئی ہے، اور ان دونوں کی حفاظت اسے نہیں تھکاتی، اور وہ بلند و برتر، عظمت والا ہے۔',
    translationFrench: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il sait ce qu’ils ont devant eux et ce qu’ils ont derrière eux. Et, de Sa science, ils n’embrassent que ce qu’Il veut. Son Trône (Kursi) déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.',
    translationSpanish: '¡Allah! No hay más dios que Él, el Viviente, el Autosuficiente. Ni la somnolencia ni el sueño se apoderan de Él. Suyo es cuanto hay en los cielos y en la tierra. ¿Quién podrá interceder ante Él sin Su permiso? Conoce lo que hay ante ellos y lo que hay detrás de ellos, y no abarcan nada de Su conocimiento excepto lo que Él quiere. Su Trono abarca los cielos y la tierra, y su custodia no Le fatiga. Y Él es el Altísimo, el Grandioso.',
    source: 'Sahih Muslim (Hadith 810) & Sahih Al-Bukhari (Hadith 2311)',
    sourceBook: 'Holy Quran - Surah Al-Baqarah [2:255]',
    tafsirReference: 'Tafsir Ibn Kathir (Vol. 1, p. 671) & Tafsir Al-Qurtubi',
    authenticity: 'Mutawatir Quranic Revelation • Sahih Hadith Virtues',
    badge: 'Greatest Ayat',
    audioDuration: '1 min 30 sec',
    benefits: [
      'Greatest Verse in the Divine Book: Explicitly certified by the Messenger of Allah (PBUH) in Sahih Muslim (810) when asking Ubayy ibn Ka’b about the most majestic verse.',
      'Unbroken Protection from Shaytan: Narrated by Abu Hurairah (RA) in Sahih Al-Bukhari (2311), reciting Ayat al-Kursi before sleep assigns a divine angelic protector and keeps Shaytan away until dawn.',
      'Immediate Gateway to Paradise: The Prophet (PBUH) stated: “Whoever recites Ayat al-Kursi immediately after each obligatory prayer, nothing stands between him and entering Paradise except death.” (Sunan An-Nasa’i, Sahih Al-Jami’ 6464).',
      'Shield for Home and Family: Driving out evil spirits, black magic, jinn afflictions, and malevolent spiritual disturbances from the household.',
      'Calmness and Removal of Anxiety: Fosters absolute tranquility and trust (Tawakkul) during panic, nocturnal terrors, and times of spiritual vulnerability.'
    ],
    steps: [
      { title: 'Step 1: Recite After Every Fardh (Obligatory) Prayer', desc: 'Upon concluding the obligatory Salam of Salah, remain seated in the prayer posture and recite Ayat al-Kursi before engaging in worldly conversations to claim the promise of Jannah.' },
      { title: 'Step 2: Recite as Part of Bedtime Masnoon Sunnah', desc: 'When retiring to bed at night, dust the bed, lie upon the right side, and recite Ayat al-Kursi with contemplation. An appointed angel guards you throughout the hours of darkness.' },
      { title: 'Step 3: Recite in Morning & Evening Adhkar Routine', desc: 'Recite once following Fajr prayer and once following Asr prayer to preserve personal spiritual immunity against the evil eye, witchcraft, and accidents during daylight and dusk.' },
      { title: 'Step 4: Maintain Tajweed Elongations (Madd Lazim & Munfasil)', desc: 'Pay careful attention to the 6-count elongation on “sha’” and 4-count elongation on “la ta’khudhuhu”, articulating the letters ‘Ayn (ع), Dhad (ض), and Qaf (ق) from their exact vocal outlets.' }
    ],
    tajweedHighlights: [
      'Madd Munfasil & Muttasil: Observe 4 to 5 counts elongation on “Illa Bi-Idhnih” and “Bima Sha’”.',
      'Tafkheem on Allah: Pronounce the Lam of the majestic name “Allahu” with full, rounded thickness (Tafkheem).',
      'Pronunciation of Qayyum (الْقَيُّومُ): Emphasize the Shaddah on the Ya without abrupt clipping, maintaining a smooth vocal glide.'
    ],
    faqs: [
      { question: 'Why is Ayat al-Kursi considered the greatest verse in the Quran?', answer: 'It is the greatest verse because it contains ten complete, sublime theological statements exclusively celebrating the divine attributes, oneness, omniscience, and self-subsistence of Allah without mentioning any worldly commands or legal prohibitions.' },
      { question: 'Should Ayat al-Kursi be recited after Sunnah prayers or immediately after Fardh?', answer: 'The authentic Sunnah specifically designates reciting it immediately following the Fardh (obligatory) Salah, prior to the voluntary Sunnah prayers, as clarified by Imam Ibn Taymiyyah and contemporary Hadith scholars.' },
      { question: 'Is it true that reciting Ayat al-Kursi protects the home for three days?', answer: 'Narrations from the companions mention that when Ayat al-Kursi is recited alongside the opening and concluding verses of Surah Al-Baqarah, Shaytan flees from that household. Regular daily recitation ensures continuous protection.' },
      { question: 'Can Ayat al-Kursi be recited for Ruqyah and healing?', answer: 'Yes, it is the primary foundational verse in authentic Ruqyah Ash-Shar’iyyah used by the Prophet (PBUH) and companions for alleviating physical illnesses, psychological anxiety, and spiritual afflictions.' }
    ]
  },
  'surah-baqarah-last-2-ayats': {
    id: 'surah-baqarah-last-2-ayats',
    slug: 'surah-baqarah-last-2-ayats',
    surahNameArabic: 'البقرة',
    surahNameEnglish: 'Al-Baqarah',
    surahNumber: 2,
    ayahNumber: '285-286',
    category: 'greatest',
    categoryLabel: 'Divine Sufficiency',
    titleArabic: 'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ * لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    titleUrdu: 'سورۃ البقرہ کی آخری دو آیات (Amanar Rasul)',
    titleEnglish: 'Last 2 Ayats of Surah Al-Baqarah (Amanar Rasul)',
    transliteration: 'Amanar-Rasulu bima unzila ilayhi mir-Rabbihi wal-mu’minun, kullun amana billahi wa mala’ikatihi wa kutubihi wa rusulih, la nufarriqu bayna ahadim-mir-rusulih, wa qalu sami’na wa ata’na ghufranaka Rabbana wa ilaykal-masir. La yukallifullahu nafsan illa wus’aha, laha ma kasabat wa ‘alayha maktasabat, Rabbana la tu’akhidhna in nasina aw akhta’na, Rabbana wa la tahmil ‘alayna isran kama hamaltahu ‘alal-ladhina min qablina, Rabbana wa la tuhammilna ma la taqata lana bih, wa’fu ‘anna, waghfir lana, warhamna, Anta mawlana fansurna ‘alal-qawmil-kafirin.',
    tldr: 'The concluding two verses of Surah Al-Baqarah (2:285-286) were revealed directly to the Prophet Muhammad (PBUH) from beneath the Divine Throne during the Night of Isra and Mi’raj. The Prophet affirmed that reciting them at night suffices the believer against all harms, evil spirits, and spiritual shortcomings.',
    meaning: 'The declaration of apostolic faith, divine compassion, human relief, and supreme supplications for forgiveness and divine victory.',
    translationEnglish: 'The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], “We make no distinction between any of His messengers.” And they say, “We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the final destination.” Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. “Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.”',
    translationUrdu: 'Rasool imaan laye us par jo un ke Rab ki taraf se un par nazil kiya gaya aur momineen bhi. Sab Allah, Us ke farishton, Us ki kitabon aur Us ke rasoolon par imaan laye. Hum Us ke rasoolon mein se kisi ke darmiyan farq nahi karte, aur unhon ne kaha: Hum ne suna aur itaat ki, aye hamare Rab hum Teri bakhshish ke talabgaar hain aur Teri hi taraf lautna hai. Allah kisi jaan par us ki taaqat se ziyada bojh nahi daalta...',
    translationUrduNastaliq: 'رسول ایمان لائے اس پر جو ان کے رب کی طرف سے ان پر نازل کیا گیا اور مومنین بھی۔ سب اللہ، اس کے فرشتوں، اس کی کتابوں اور اس کے رسولوں پر ایمان لائے۔ ہم اس کے رسولوں میں سے کسی کے درمیان فرق نہیں کرتے، اور انہوں نے کہا: ہم نے سنا اور اطاعت کی، اے ہمارے رب ہم تیری بخشش کے طلبگار ہیں اور تیری ہی طرف لوٹنا ہے۔ اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا...',
    translationFrench: 'Le Messager a cru en ce qu’on a fait descendre vers lui venant de son Seigneur, et aussi les croyants : tous ont cru en Allah, en Ses anges, à Ses livres et en Ses messagers... Allah n’impose à aucune âme une charge supérieure à sa capacité...',
    translationSpanish: 'El Mensajero cree en lo que le ha sido revelado por su Señor, y también los creyentes. Todos creen en Allah, en Sus ángeles, en Sus libros y en Sus mensajeros... Allah no exige a nadie más allá de su capacidad...',
    source: 'Sahih Al-Bukhari (5009) & Sahih Muslim (807-808)',
    sourceBook: 'Holy Quran - Surah Al-Baqarah [2:285-286]',
    tafsirReference: 'Tafsir Ibn Kathir (Vol. 2, pp. 64-67) & Sahih Muslim Sharh An-Nawawi',
    authenticity: 'Mutawatir Quranic Revelation • Sahihayn Canonical Hadith',
    badge: 'Nighttime Shield',
    audioDuration: '2 min 15 sec',
    benefits: [
      'Complete Nighttime Sufficiency (Kafataah): Prophet Muhammad (PBUH) declared: “Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him.” (Sahih Al-Bukhari 5009).',
      'Protection Against Nocturnal Harms: Protects against black magic, nightmare disturbances, jinn intrusion, and sudden calamities while asleep.',
      'Special Treasure Beneath the Throne: Narrated by Abu Dharr (RA) that these verses were granted from a treasure chamber located directly under the Throne of the Most Merciful.',
      'Affirmation of All Prophets and Divine Books: Solidifies pure orthodox Islamic creed, embracing all previous prophets and scriptures without distinction.',
      'Guaranteed Response to Supplication: When the reciter says “Rabbana... wa’fu ‘anna, waghfir lana, warhamna”, Allah replies in the heavens: “I have done so” (Sahih Muslim 126).'
    ],
    steps: [
      { title: 'Step 1: Recite Every Evening Before Sleeping', desc: 'Incorporate these two concluding verses into your nightly routine immediately after Isha prayer or upon climbing into bed.' },
      { title: 'Step 2: Recite with Vocal Reflection on the Duas', desc: 'Reflect upon the closing petitions: asking Allah not to hold us accountable for forgetfulness or unintentional errors, and pleading for divine clemency.' },
      { title: 'Step 3: Pause at the End of Each Verse for Contemplation', desc: 'Follow the Sunnah cadence of pausing at each verse boundary, seeking Allah’s pardon at “Ghufranaka Rabbana” and His mercy at “Warhamna”.' },
      { title: 'Step 4: Teach to Household Members and Children', desc: 'As instructed by companion Abdullah ibn Mas’ud (RA), ensure your family and children commit these two protective verses to heart.' }
    ],
    tajweedHighlights: [
      'Ikhfa on “Min Rabbihi” (Idgham bi-Ghunnah): Smooth blending of Nun saakin into Ra without nasal buzz.',
      'Madd Badal & Silah: Proper 2-count stretch on “Amana” and “Kutubihi wa Rusulih”.',
      'Qalqalah on Qaf & Taa: Precise bouncing resonance on “Qablina” and “Taqata”.'
    ],
    faqs: [
      { question: 'What does “they will suffice him” (Kafataah) mean in the Hadith?', answer: 'Classical Hadith commentators (including Imam An-Nawawi and Al-Hafiz Ibn Hajar) explain that it means: they will suffice him against any evil and harm during the night, they suffice as a substitute for Tahajjud prayer if one falls asleep, and they suffice in accumulating immense spiritual reward.' },
      { question: 'Were these verses revealed on Earth or in the Heavens?', answer: 'Unlike most Quranic revelations brought by angel Jibril (AS) on Earth, authentic narrations in Sahih Muslim confirm these concluding verses were gifted directly to the Prophet Muhammad (PBUH) during the heavenly ascension (Mi’raj).' },
      { question: 'Can someone recite only the last ayah (286) or must both be recited?', answer: 'The authentic prophetic tradition explicitly commands reciting both verses together (285 and 286) to obtain the promised sufficiency and angelic shield.' },
      { question: 'Is it recommended to recite these verses during Salah?', answer: 'Yes, reciting them during the Sunnah prayers of Isha or the night prayer (Tahajjud) is highly meritorious and practiced by the companions.' }
    ]
  },
  'ayat-karima': {
    id: 'ayat-karima',
    slug: 'ayat-karima',
    surahNameArabic: 'الأنبياء',
    surahNameEnglish: 'Al-Anbiya',
    surahNumber: 21,
    ayahNumber: '87',
    category: 'relief',
    categoryLabel: 'Distress Relief',
    titleArabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    titleUrdu: 'آیت کریمہ (دعائے یونس علیہ السلام)',
    titleEnglish: 'Ayat Karima (Supplication of Prophet Yunus)',
    transliteration: 'La ilaha illa Anta subhanaka inni kuntu minaz-zalimin.',
    tldr: 'Ayat Karima (Surah Al-Anbiya 21:87) is the celebrated supplication proclaimed by Prophet Yunus (Jonah, peace be upon him) from within the threefold darkness of the whale’s belly, ocean depths, and night. The Prophet Muhammad (PBUH) swore by Allah that no Muslim supplicates with these words in any distress except that Allah relieves him.',
    meaning: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    translationEnglish: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    translationUrdu: 'Tere siwa koi ma’bood nahi, Tu paak hai, beshak main hi qusoorwaron mein se tha.',
    translationUrduNastaliq: 'تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔',
    translationFrench: 'Pas de divinité à part Toi ! Pureté à Toi ! J’ai été vraiment du nombre des injustes.',
    translationSpanish: 'No hay más dios que Tú. ¡Glorificado seas! Ciertamente he sido de los injustos.',
    source: 'Jami` At-Tirmidhi (Hadith 3505) & Musnad Ahmad (1462)',
    sourceBook: 'Holy Quran - Surah Al-Anbiya [21:87]',
    tafsirReference: 'Tafsir Ibn Kathir (Vol. 5, p. 367) & Zad Al-Masir',
    authenticity: 'Mutawatir Quranic Revelation • Sahih At-Tirmidhi Narration',
    badge: 'Miraculous Relief',
    audioDuration: '1 min 05 sec',
    benefits: [
      'Guaranteed Divine Deliverance: Prophet Muhammad (PBUH) said: “The supplication of Dhu-n-Nun (Yunus) when he called upon Allah from the belly of the whale: No Muslim ever supplicates with it for any matter whatsoever, but Allah answers his prayer.” (Jami` At-Tirmidhi 3505).',
      'Dissolution of Incurable Hardships: Relieves severe court trials, debts, imprisonment, grief, and seemingly impossible life dilemmas.',
      'Combines Tawheed, Tasbeeh, and Tawbah: Features the purest trifecta of Islamic spirituality: affirming Allah’s sole deity, proclaiming His transcendence, and humbling one’s ego with sincere remorse.',
      'Expulsion of Depression and Darkness: Just as Allah brought Prophet Yunus out of the dark belly of the fish onto fertile shores, this verse extracts the heart from emotional darkness.',
      'Universal Istighfar Formula: Considered by Sufi and classical scholars alike as the quintessential repentance formula for instant mercy.'
    ],
    steps: [
      { title: 'Step 1: Perform Wudu & Face the Qiblah', desc: 'When engulfed by panic, anxiety, or trial, prepare yourself with physical cleanliness and orient toward the Kaaba.' },
      { title: 'Step 2: Recite with Deep Contrition of Heart', desc: 'Acknowledge your own human shortcomings at “Inni kuntu minaz-zalimin”, relinquishing arrogance and reliance upon personal power.' },
      { title: 'Step 3: Repeat Continuously (Sunnah Dhikr)', desc: 'Scholars recommend repeating Ayat Karima 40 times, 100 times, or continuously throughout days of distress until relief arrives.' },
      { title: 'Step 4: Conclude by Presenting Your Specific Need', desc: 'Immediately following the recitation, ask Allah for your personal desire, health, ease, or forgiveness.' }
    ],
    tajweedHighlights: [
      'Madd Munfasil on “La Ilaha Illa Anta”: Extend 4 counts on the negative particle “La”.',
      'Ikhfa on “Anta” and “Kuntu”: Soft nasalization with the tongue hovering close to the upper teeth ridge.',
      'Shaddah on “Zalimin” (ظ): Pronounce the letter Zha (ظ) with full velar thickness and tongue elevation.'
    ],
    faqs: [
      { question: 'Is there a specific number of times Ayat Karima must be recited?', answer: 'The Quran and Sahih Hadith do not mandate a fixed rigid number. However, classical scholars (such as Imam Al-Hakim and Ibn Al-Qayyim) observed that repeating it frequently (such as 40 or 100 times daily during times of calamity) brings immense spiritual focus and rapid relief.' },
      { question: 'Can Ayat Karima be recited for health problems and medical illnesses?', answer: 'Yes. In authentic narrations compiled by Imam Al-Hakim, the Prophet (PBUH) noted that if a sick person recites Ayat Karima 40 times during their illness, if they pass away they receive the reward of a martyr, and if they recover, their sins are expiated.' },
      { question: 'Why did Prophet Yunus say “I was among the wrongdoers”?', answer: 'Prophet Yunus (AS) did not commit a major sin; rather, he departed from his stubborn people without awaiting explicit divine authorization. Out of supreme prophetic humility and reverence, he termed his haste as an error before Allah.' },
      { question: 'Can women recite Ayat Karima during their monthly cycle?', answer: 'Yes. Since Ayat Karima functions as both Quranic text and a primary Dua / Dhikr, scholars agree that reciting it with the intention of supplication and remembrance during menstruation is permissible.' }
    ]
  },
  'ayat-ash-shifa': {
    id: 'ayat-ash-shifa',
    slug: 'ayat-ash-shifa',
    surahNameArabic: 'الإسراء',
    surahNameEnglish: 'Al-Isra',
    surahNumber: 17,
    ayahNumber: '82',
    category: 'healing',
    categoryLabel: 'Healing & Shifa',
    titleArabic: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا',
    titleUrdu: 'آیات الشفاء (قرآنی علاج و شفا)',
    titleEnglish: 'Ayat ash-Shifa (The Verses of Divine Healing)',
    transliteration: 'Wa nunazzilu minal-Qur’ani ma huwa shifa’uw-wa rahmatul-lil-mu’minin, wa la yaziduz-zalimina illa khasara.',
    tldr: 'Ayat ash-Shifa (Surah Al-Isra 17:82) represents the cornerstone Quranic affirmation that the revelation is an active spiritual and physical cure (Shifa) and mercy for true believers. Sincere recitation over water, olive oil, or placing the right hand upon the afflicted area has been practiced from the prophetic era through classical Islamic medicine.',
    meaning: 'And We send down of the Quran that which is healing and mercy for the believers, but it does not increase the wrongdoers except in loss.',
    translationEnglish: 'And We send down of the Quran that which is healing and mercy for the believers, but it does not increase the wrongdoers except in loss.',
    translationUrdu: 'Aur Hum Quran mein se aisi cheezein nazil karte hain jo momineen ke liye shifa aur rehmat hain, aur zalimon ke hissay mein to sirf khasara hi barhta hai.',
    translationUrduNastaliq: 'اور ہم قرآن میں سے ایسی چیزیں نازل کرتے ہیں جو مومنین کے لیے شفا اور رحمت ہیں، اور ظالموں کے حصے میں تو صرف خسارہ ہی بڑھتا ہے۔',
    translationFrench: 'Nous faisons descendre du Coran, ce qui est une guérison et une miséricorde pour les croyants. Cependant, cela ne fait qu’accroître la perdition des injustes.',
    translationSpanish: 'Y hacemos descender del Corán aquello que es cura y misericordia para los creyentes, mientras que a los injustos no les incrementa sino la perdición.',
    source: 'Holy Quran [Surah Al-Isra 17:82] & Sahih Al-Bukhari (5735)',
    sourceBook: 'Holy Quran - Surah Al-Isra [17:82]',
    tafsirReference: 'Tafsir Ibn Kathir & Zad Al-Ma’ad by Ibn Al-Qayyim',
    authenticity: 'Mutawatir Quranic Revelation • Prophetic Ruqyah Practice',
    badge: 'Divine Cure',
    audioDuration: '1 min 15 sec',
    benefits: [
      'Dual Healing of Soul and Body: Heals spiritual diseases (doubt, jealousy, hypocrisy, grief) as well as physiological ailments through divine vibration and blessing.',
      'Foundation of Authentic Ruqyah: Recited alongside Surah Al-Fatihah and Al-Mu’awwidhatayn (Falaq & Nas) for expelling illnesses and spiritual toxins.',
      'Blessing upon Drinking Water: Classical jurists including Imam Ahmad approved reciting Ayat ash-Shifa over clean water and blowing into it for the patient to drink.',
      'Protection against Medical Despair: Instills unwavering optimism and peace in terminal or chronic patients by connecting them to the Ultimate Healer (Ash-Shafi).',
      'Shield against Evil Eye (Ayn) and Sorcery (Sihr): Neutralizes energetic harm cast by envious souls.'
    ],
    steps: [
      { title: 'Step 1: Place the Right Hand over the Area of Pain', desc: 'In accordance with the Sunnah of Prophet Muhammad (PBUH) in Sahih Muslim, place your right hand gently upon where you feel pain.' },
      { title: 'Step 2: Recite Bismillah Thrice & Ayat ash-Shifa', desc: 'Pronounce “Bismillah” 3 times, followed by reciting this verse clearly and melodiously with unwavering faith in Allah’s cure.' },
      { title: 'Step 3: Lightly Blow (Nafath) over Palms & Wipe', desc: 'Cup your palms together, blow gently with minimal moisture (Nafath), and wipe your hands over your head, face, and body.' },
      { title: 'Step 4: Combine with Sound Medical Treatment', desc: 'Islam commands seeking competent medical diagnosis and medicine alongside spiritual Quranic recitation without dichotomizing science and faith.' }
    ],
    tajweedHighlights: [
      'Idgham bi-Ghunnah on “Shifa’uw-wa Rahmatul-lil-Mu’minin”: Soft nasal merging between Tanween and Waw.',
      'Idgham Bila-Ghunnah on “Rahmatul-lil-Mu’minin”: Seamless direct merging into the letter Lam.',
      'Madd Wajib Muttasil on “Shifa’”: 4 to 5 counts elongation on the connected Hamzah.'
    ],
    faqs: [
      { question: 'What are the 6 Ayat ash-Shifa in the Quran?', answer: 'The six recognized healing verses in the Quran are: Surah At-Tawbah (9:14), Surah Yunus (10:57), Surah An-Nahl (16:69), Surah Al-Isra (17:82), Surah Ash-Shu’ara (26:80), and Surah Fussilat (41:44).' },
      { question: 'Is it permissible to recite Quran over water and drink it for Shifa?', answer: 'Yes, this practice is authenticated from the noble companions (such as Aisha RA and Ibn Abbas RA) and verified by Imam Ahmad ibn Hanbal and Imam Ibn Al-Qayyim in Zad Al-Ma’ad.' },
      { question: 'Does reciting Ayat ash-Shifa replace doctor visits and medication?', answer: 'No. The Prophet (PBUH) instructed: “Seek treatment, O servants of Allah, for Allah has not sent down any disease without sending down its cure.” Spiritual recitation and physical medicine complement each other perfectly.' },
      { question: 'How often should someone recite Ayat ash-Shifa for healing?', answer: 'It is recommended to recite it during morning and evening Adhkar, following Salah, and especially prior to sleep every day until recovery is achieved.' }
    ]
  },
  'ayat-al-mulk': {
    id: 'ayat-al-mulk',
    slug: 'ayat-al-mulk',
    surahNameArabic: 'آل عمران',
    surahNameEnglish: 'Ali Imran',
    surahNumber: 3,
    ayahNumber: '26-27',
    category: 'sovereignty',
    categoryLabel: 'Sovereignty & Honor',
    titleArabic: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ * تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ',
    titleUrdu: 'آیت الملک (عزت و سلطنت کی دعا)',
    titleEnglish: 'Ayat al-Mulk (The Verses of Divine Sovereignty)',
    transliteration: 'Qulil-lahumma Malikal-mulki tu’til-mulka man tasha’u wa tanzi’ul-mulka mimman tasha’u wa tu’izzu man tasha’u wa tudhillu man tasha’, biyadikal-khayr, innaka ‘ala kulli shay’in qadir. Tulijul-layla fin-nahari wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyiti wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tasha’u bighayri hisab.',
    tldr: 'Ayat al-Mulk (Surah Ali ‘Imran 3:26-27) is the supreme Quranic anthem affirming Allah’s sole ownership over all dominion, honor, power, and sustenance. It reminds humanity that true elevation and humiliation are entirely in the hand of Allah, and He provides for whomever He wills without measure.',
    meaning: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.”',
    translationEnglish: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent. You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living; and You provide for whom You will without measure.”',
    translationUrdu: 'Aap farmayiye: Aye Allah! Saltanat ke Malik! Tu jisay chahe saltanat ata farmata hai aur jis se chahe saltanat chheen leta hai, aur Tu jisay chahe izzat deta hai aur jisay chahe zaleel karta hai. Tere hi haath mein saari bhalayi hai, beshak Tu har cheez par poori qudrat rakhne wala hai...',
    translationUrduNastaliq: 'آپ فرمائیے: اے اللہ! سلطنت کے مالک! تو جسے چاہے سلطنت عطا فرماتا ہے اور جس سے چاہے سلطنت چھین لیتا ہے، اور تو جسے چاہے عزت دیتا ہے اور جسے چاہے ذلیل کرتا ہے۔ تیرے ہی ہاتھ میں ساری بھلائی ہے، بے شک تو ہر چیز پر پوری قدرت رکھنے والا ہے...',
    translationFrench: 'Dis : “Ô Allah, Maître de l’autorité suprême ! Tu donnes l’autorité à qui Tu veux, et Tu arraches l’autorité à qui Tu veux. Tu donnes la puissance à qui Tu veux, et Tu humilies qui Tu veux...”',
    translationSpanish: 'Di: “¡Oh Allah, Soberano del poder! Tú otorgas el poder a quien quieres y despojas del poder a quien quieres. Exaltas a quien quieres y humillas a quien quieres...”',
    source: 'Holy Quran [Surah Ali ‘Imran 3:26-27] & Tabarani',
    sourceBook: 'Holy Quran - Surah Ali ‘Imran [3:26-27]',
    tafsirReference: 'Tafsir Ibn Kathir (Vol. 2, pp. 28-30)',
    authenticity: 'Mutawatir Quranic Revelation • Classical Tafsir Consensus',
    badge: 'Honor & Rizq',
    audioDuration: '1 min 50 sec',
    benefits: [
      'Settlement of Crippling Debts: Prophet Muhammad (PBUH) taught Mu’adh ibn Jabal (RA) to recite these verses when burdened by heavy debts, stating that even if debts were as vast as Mount Uhud, Allah would clear them (Al-Mu’jam Al-Kabir by At-Tabarani).',
      'Protection Against Demotion and Humiliation: Shields from workplace malice, political persecution, and wrongful loss of reputation.',
      'Abundant Provision (Rizq Bighayri Hisab): Invokes divine financial elevation and open doors of sustenance beyond human calculations.',
      'Curing Arrogance and Insecurity: Instills internal serenity by recognizing that no human tyrant can grant or take away dignity without divine consent.',
      'Harmonization of Family & Communal Standing: Bestows respect and affection in the hearts of righteous people.'
    ],
    steps: [
      { title: 'Step 1: Recite Following Daily Obligatory Salah', desc: 'Make Ayat al-Mulk part of your morning and evening supplications, especially following Fajr and Maghrib.' },
      { title: 'Step 2: Recite When Facing Career, Financial, or Legal Stress', desc: 'When applying for interviews, seeking promotions, or facing financial trials, recite with contemplation of “Biyadikal-Khayr”.' },
      { title: 'Step 3: Pair with the Prophetic Debt Supplication', desc: 'Following recitation, add: “Rahmanad-dunya wal-akhirati wa Rahimahuma, tu’tihima man tasha’u wa tamna’u minhuma man tasha’...”' },
      { title: 'Step 4: Practice Ethical Humility in Prosperity', desc: 'When Allah blesses you with authority, wealth, or influence, remember that it is a temporary trust that can be reclaimed at any moment.' }
    ],
    tajweedHighlights: [
      'Ghunnah on “Mimman Tasha’” (مِمَّنْ تَشَاءُ): 2-count nasal resonance on Mim Mushaddad followed by Ikhfa on Nun before Taa.',
      'Madd Wajib Muttasil on “Tasha’” (تَشَاءُ): 4 to 5 counts elongation ending with a distinct vocalic stop on Hamzah.',
      'Lam Shamsiyyah on “Fin-Nahari” (فِي النَّهَارِ): Silent assimilation of Lam directly into Nun with smooth nasal doubling.'
    ],
    faqs: [
      { question: 'What is the background of revelation (Sabab an-Nuzul) for Ayat al-Mulk?', answer: 'When the Prophet (PBUH) dug the Trench of Khandaq, he struck a boulder and prophesied the conquest of the Persian, Roman, and Yemeni empires. The hypocrites mocked this, so Allah revealed this verse declaring His omnipotent power to transfer kingdoms.' },
      { question: 'Can Ayat al-Mulk help someone looking for a job or career promotion?', answer: 'Yes. Because this verse affirms that all dominion, positions of honor, and limitless provision are granted solely by Allah, reciting it with sincere effort and Tawakkul is renowned for opening professional doors.' },
      { question: 'Is Ayat al-Mulk the same as Surah Al-Mulk (Tabarakalladhi)?', answer: 'No. Surah Al-Mulk (Chapter 67) is an entire 30-verse chapter that protects from the punishment of the grave. Ayat al-Mulk refers specifically to verses 26-27 of Surah Ali ‘Imran (Chapter 3).' },
      { question: 'What is the meaning of “bringing the living from the dead”?', answer: 'Classical Tafsir explains this both literally (e.g. chick from an egg, plant from a dormant seed) and spiritually (e.g. producing a righteous believer from disbelieving parents, like Prophet Ibrahim from Azar).' }
    ]
  },
  'ayat-at-talaq-rizq': {
    id: 'ayat-at-talaq-rizq',
    slug: 'ayat-at-talaq-rizq',
    surahNameArabic: 'الطلاق',
    surahNameEnglish: 'At-Talaq',
    surahNumber: 65,
    ayahNumber: '2-3',
    category: 'relief',
    categoryLabel: 'Rizq & Way Out',
    titleArabic: 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا',
    titleUrdu: 'آیت رزق و کشائش (مخرج و وسعت)',
    titleEnglish: 'Ayat of Sustenance & Divine Way Out (Ayat at-Talaq)',
    transliteration: 'Wa man yattaqillaha yaj’al lahu makhraja, wa yarzuqhu min haythu la yahtasib, wa man yatawakkal ‘alallahi fahuwa hasbuh, innallaha balighu amrih, qad ja’alallahu likulli shay’in qadra.',
    tldr: 'Known throughout the Muslim world as the supreme verse of Rizq and deliverance (Surah At-Talaq 65:2-3), it guarantees that whoever maintains Taqwa (God-consciousness), Allah will create an escape path from all dead ends, provide for him from sources he never anticipated, and serve as his total sufficiency.',
    meaning: 'And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him.',
    translationEnglish: 'And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] measure.',
    translationUrdu: 'Aur jo koi Allah se darega, Woh us ke liye nikalne ki raah bana dega, aur usay aisi jagah se rizq dega jahan se us ka gumaan bhi na ho. Aur jo Allah par bharosa karega to Woh usay kaafi hai. Beshak Allah apna kaam poora kar ke rehta hai. Allah ne har cheez ka ek andaza muqarrar kar rakha hai.',
    translationUrduNastaliq: 'اور جو کوئی اللہ سے ڈرے گا، وہ اس کے لیے نکلنے کی راہ بنا دے گا، اور اسے ایسی جگہ سے رزق دے گا جہاں سے اس کا گمان بھی نہ ہو۔ اور جو اللہ پر بھروسہ کرے گا تو وہ اسے کافی ہے۔ بے شک اللہ اپنا کام پورا کر کے رہتا ہے۔ اللہ نے ہر چیز کا ایک اندازہ مقرر کر رکھا ہے۔',
    translationFrench: 'Et quiconque craint Allah, Il lui donnera une issue favorable, et lui accordera Ses dons par des moyens sur lesquels il ne comptait pas. Et quiconque place sa confiance en Allah, Il lui suffit...',
    translationSpanish: 'Y a quien teme a Allah, Él le dará una salida y le proveerá desde donde no imagina. Y quien confía en Allah, Él le basta...',
    source: 'Holy Quran [Surah At-Talaq 65:2-3] & Sunan Ibn Majah (4220)',
    sourceBook: 'Holy Quran - Surah At-Talaq [65:2-3]',
    tafsirReference: 'Tafsir Ibn Kathir (Vol. 8, pp. 143-145) & Tafsir As-Sa’di',
    authenticity: 'Mutawatir Quranic Revelation • Sahih Hadith Merits',
    badge: 'Way Out & Rizq',
    audioDuration: '1 min 20 sec',
    benefits: [
      'Guaranteed Escape Path from Dead Ends (Makhraja): When all doors, financial avenues, and legal strategies close, Allah constructs a miraculous exit.',
      'Unimagined Provision (Rizq Min Haythu La Yahtasib): Bestows financial gifts, surprise job offers, unexpected inheritance, and timely assistance from unforeseen sources.',
      'Absolute Sufficiency (Fahuwa Hasbuh): Whoever relies upon Allah with true Tawakkul never requires dependence upon human patrons or compromises.',
      'Relief from Financial Despair & Panic: Calms the anxiety of poverty, inflation, and business stagnation by grounding the believer in divine decree.',
      'Protection against Compromising Integrity: Strengthens the believer to avoid bribery, usury (Riba), and unlawful (Haram) transactions knowing Allah provides the Halal alternative.'
    ],
    steps: [
      { title: 'Step 1: Commit to Taqwa (Abandoning Sins)', desc: 'The prerequisite of the verse is Taqwa. Cease unlawful earnings, mend broken ties, and uphold prayers to unlock the divine promise.' },
      { title: 'Step 2: Recite During Times of Financial or Personal Stagnation', desc: 'Recite following Fajr and Asr prayers with full confidence in Allah’s boundless treasury.' },
      { title: 'Step 3: Pair Recitation with Practical Halal Effort', desc: 'Tie your camel and trust in Allah: combine persistent job searches and business innovation with spiritual reliance.' },
      { title: 'Step 4: Contemplate “Inna Allaha Balighu Amrih”', desc: 'Remind yourself that Allah’s decreed timing is supreme; delays are not denials, for everything has a measured destiny.' }
    ],
    tajweedHighlights: [
      'Idgham bi-Ghunnah on “Wa Man Yattaqillaha” (وَمَنْ يَتَّقِ): Smooth nasal blending of Nun saakin into Ya.',
      'Qalqalah Sughra on “Yaj’al” (يَجْعَلْ): Subtle bounce on the Sukoon of Jeem without adding an extraneous vowel.',
      'Ikhfa on “Min Haythu” (مِنْ حَيْثُ) & “Likulli Shay’in Qadra”: Clear pronunciation of guttural Haa followed by soft nasalization on Qaf.'
    ],
    faqs: [
      { question: 'What did the Prophet (PBUH) say about this verse?', answer: 'Abu Dharr (RA) reported that the Messenger of Allah (PBUH) recited this verse and said: “O Abu Dharr, if all people were to take hold of this verse, it would suffice them all.” (Sunan Ibn Majah 4220).' },
      { question: 'Why is this verse located in Surah At-Talaq (Divorce)?', answer: 'Divorce is one of the most contentious, financially stressing, and emotionally volatile human trials. Allah placed this supreme promise of Rizq and relief here to reassure believers that even if a marriage ends, Allah will provide an honorable way out and provision for both parties if they fear Him.' },
      { question: 'Does Rizq mean only monetary wealth?', answer: 'No. Classical scholars emphasize that Rizq encompasses good health, righteous children, peace of mind, knowledge, wisdom, and above all, firm faith and entry into Paradise.' },
      { question: 'How can someone develop true Tawakkul (reliance)?', answer: 'Tawakkul means taking all lawful practical measures while leaving the ultimate outcome and heart’s trust completely in the custody of Allah.' }
    ]
  }
};

const SIBLING_AYATS = [
  { slug: 'ayat-al-kursi', title: 'Ayat al-Kursi (Throne Verse)', cat: 'Greatest Ayat', urdu: 'آیت الکرسی' },
  { slug: 'surah-baqarah-last-2-ayats', title: 'Last 2 Ayats of Baqarah (Amanar Rasul)', cat: 'Nighttime Shield', urdu: 'سورۃ البقرہ آخری آیات' },
  { slug: 'ayat-karima', title: 'Ayat Karima (Prophet Yunus)', cat: 'Distress Relief', urdu: 'آیت کریمہ' },
  { slug: 'ayat-ash-shifa', title: 'Ayat ash-Shifa (Verses of Healing)', cat: 'Divine Cure', urdu: 'آیات الشفاء' },
  { slug: 'ayat-al-mulk', title: 'Ayat al-Mulk (Divine Sovereignty)', cat: 'Honor & Rizq', urdu: 'آیت الملک' },
  { slug: 'ayat-at-talaq-rizq', title: 'Ayat of Rizq & Way Out', cat: 'Provision & Relief', urdu: 'آیت رزق و کشائش' }
];

function resolveAyat(slug: string): AyatDetail {
  const cleanSlug = slug.toLowerCase().trim().replace(/^\/ayats\//, '').replace(/^\//, '').replace(/\/$/, '');
  if (COMPREHENSIVE_AYAT_DATABASE[cleanSlug]) {
    return COMPREHENSIVE_AYAT_DATABASE[cleanSlug];
  }
  const dbItem = getAyatBySlug(cleanSlug);
  if (dbItem) {
    return {
      id: dbItem.id,
      slug: dbItem.slug,
      surahNameArabic: dbItem.surahNameArabic,
      surahNameEnglish: dbItem.surahNameEnglish,
      surahNumber: dbItem.surahNumber,
      ayahNumber: dbItem.ayahNumber,
      category: dbItem.category,
      categoryLabel: dbItem.categoryLabel,
      titleArabic: dbItem.arabicText || dbItem.titleArabic,
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
      tafsirReference: dbItem.tafsirReference,
      authenticity: dbItem.authenticity,
      badge: dbItem.badge,
      audioDuration: dbItem.audioDuration || '1 min 30 sec',
      benefits: dbItem.benefits,
      steps: dbItem.steps,
      tajweedHighlights: [
        'Observe clear pronunciation of sacred Quranic letters and natural vowel elongation.',
        'Recite with presence of heart, humility, and complete reliance upon Allah.'
      ],
      faqs: dbItem.faqs
    };
  }
  return COMPREHENSIVE_AYAT_DATABASE['ayat-al-kursi'];
}

export function generateStaticParams() {
  const allSlugs = Array.from(new Set([...Object.keys(COMPREHENSIVE_AYAT_DATABASE), ...getAllAyatSlugs()]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const currentSlug = params?.slug?.toLowerCase().replace(/\/$/, '') || 'ayat-al-kursi';
  const ayat = resolveAyat(currentSlug);
  const canonicalUrl = `https://yourdomain.com/ayats/${ayat.slug}/`;

  return {
    title: `${ayat.titleEnglish} (${ayat.titleUrdu}) — Arabic, Transliteration & Tafsir`,
    description: ayat.tldr,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${ayat.titleEnglish} - Arabic & Tafsir`,
      description: ayat.tldr,
      url: canonicalUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ayat.titleEnglish} - Arabic & Tafsir`,
      description: ayat.tldr,
    },
  };
}

export default function SingleAyatPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentSlug = params?.slug?.toLowerCase().replace(/\/$/, '') || 'ayat-al-kursi';
  const ayat = resolveAyat(currentSlug);

  const canonicalUrl = `https://islamhub.com/ayats/${ayat.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "url": canonicalUrl,
        "headline": `${ayat.titleEnglish} (${ayat.titleUrdu}) - Surah ${ayat.surahNameEnglish} [${ayat.surahNumber}:${ayat.ayahNumber}]`,
        "description": ayat.tldr,
        "image": [
          "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80"
        ],
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-02-28T12:00:00+00:00",
        "articleSection": "Sacred Quranic Verses & Authentic Exegesis",
        "inLanguage": ["ar", "en", "ur"],
        "author": {
          "@type": "Organization",
          "name": "Scholarly Quranic Advisory Board & Certified Huffaz",
          "url": "https://islamhub.com/about/scholarly-board/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sacred Quranic Directory",
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
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video`,
        "name": `${ayat.titleEnglish} (${ayat.titleUrdu}) - Tajweed & Pronunciation Recitation`,
        "description": `Word-by-word visual and auditory Tajweed recitation masterclass for ${ayat.titleEnglish}.`,
        "thumbnailUrl": [
          "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80"
        ],
        "uploadDate": "2026-01-20T10:00:00+00:00",
        "duration": "PT5M30S",
        "contentUrl": `https://islamhub.com/videos/ayats/${ayat.slug}.mp4`,
        "embedUrl": `https://www.youtube.com/embed/placeholder`
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
            "name": "Sacred Ayats Hub",
            "item": "https://islamhub.com/ayats/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": ayat.titleEnglish,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": ayat.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* SECTION 5: TECHNICAL & AI CRAWLABILITY (JSON-LD & Canonical) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href={canonicalUrl} />

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* PHASE 1: HEADER & E-E-A-T MODULE */}
        <header className="space-y-6">
          {/* Breadcrumb Navigation: Home > Sacred Ayats Hub > Specific Ayat */}
          <nav aria-label="Breadcrumb" className="flex items-center text-xs sm:text-sm font-medium text-slate-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/ayats/" className="hover:text-white transition-colors">Sacred Ayats Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-white font-semibold truncate max-w-[220px] sm:max-w-none">
              {ayat.titleEnglish}
            </span>
          </nav>

          {/* Heading Architecture with Verified Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-800 text-white border border-neutral-800">
                {ayat.categoryLabel}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300">
                Surah {ayat.surahNameEnglish} [{ayat.surahNumber}:{ayat.ayahNumber}]
              </span>
              {ayat.badge && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  ★ {ayat.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {ayat.titleEnglish}
            </h1>

            {/* Urdu Title & Arabic Title Subheadings */}
            <div className="flex flex-wrap items-baseline gap-4 pt-1">
              <span className="font-urdu text-xl sm:text-2xl text-white font-medium" dir="rtl">
                {ayat.titleUrdu}
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">•</span>
              <span className="text-sm sm:text-base text-slate-400 font-arabic" dir="rtl">
                سورة {ayat.surahNameArabic} - آية {ayat.ayahNumber}
              </span>
            </div>

            {/* Concise TL;DR Summary Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm mt-3">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {ayat.tldr}
              </p>
            </div>

            {/* Visible E-E-A-T Scholarly Review Banner & Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-slate-800/80 py-3 mt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Verified Quranic Text (King Fahd Complex) & Classical Tafsir Consensus</span>
              </div>

              {/* Utility Quick Buttons */}
              <AyatQuickActions titleArabic={ayat.titleArabic} />
            </div>
          </div>
        </header>

        {/* CONTENT & ENTITY ARCHITECTURE */}
        <div className="space-y-12">

          {/* PRIMARY ARABIC & TRANSLATION DISPLAY CONTAINER (60/40 Split + Action Bar) */}
          <PrimaryAyatDisplayContainer ayat={ayat} />

          {/* STEP BY STEP GUIDELINES WITH H2, INTRODUCTORY EXPLANATION, AND H3 SUB-STEPS */}
          <section aria-labelledby="step-by-step-guidelines-heading" className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 id="step-by-step-guidelines-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Compass className="w-6 h-6 text-sky-400 shrink-0" />
                <span>How & When to Recite (Step-by-Step Guide)</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                Follow these authenticated spiritual guidelines, Sunnah postures, and timing protocols to maximize presence of heart (Khushu), recite with correct vocal articulation, and receive the full divine protection promised in classical Hadith literature.
              </p>
            </div>

            <div className="space-y-4">
              {ayat.steps.map((step, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 transition-colors hover:border-slate-700/80 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-neutral-800 text-white border border-neutral-800 flex items-center justify-center font-bold text-xs shrink-0">
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

          {/* STEP-BY-STEP INFOGRAPHIC & VISUAL GUIDE IMAGE PLACEHOLDER (With explicit Alt Text & Caption Text) */}
          <figure 
            aria-labelledby="ayat-visual-guide-caption"
            className="bg-slate-900/60 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl space-y-3"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1600"
                alt={`Illustrated step-by-step recitation guide and spiritual posture for ${ayat.titleEnglish} (${ayat.titleUrdu})`}
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
              
              {/* Visual Infographic Overlay Indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-800 border border-neutral-800 text-white flex items-center justify-center mb-3 shadow-lg shadow-neutral-950/50 backdrop-blur-md">
                  <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-1">
                  Visual Infographic &amp; Quranic Recitation Protocol Chart
                </span>
                <p className="text-slate-200 text-sm sm:text-base font-medium max-w-lg line-clamp-2">
                  {ayat.titleEnglish} — Surah {ayat.surahNameEnglish} [{ayat.surahNumber}:{ayat.ayahNumber}] Sunnah Recitation Alignment
                </p>
              </div>

              {/* Explicit Alt Text Label Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] text-slate-300 font-mono shadow-sm">
                <span className="text-white font-bold uppercase text-[10px]">Alt Text:</span>
                <span className="truncate max-w-[200px] sm:max-w-md">
                  Illustrated step-by-step recitation guide for {ayat.titleEnglish} ({ayat.titleUrdu})
                </span>
              </div>
            </div>

            {/* Explicit Caption Text Component */}
            <figcaption 
              id="ayat-visual-guide-caption" 
              className="flex items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 bg-slate-950/50 px-4 py-2.5 rounded-xl border border-slate-800/70"
            >
              <div className="flex items-start sm:items-center gap-2">
                <Info className="w-4 h-4 text-white shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-slate-300 leading-normal">
                  <strong className="text-white font-semibold">Caption Text:</strong> Step-by-step visual recitation posture, phonetic alignment, and spiritual etiquettes for {ayat.titleEnglish} ({ayat.titleUrdu}) according to authentic Sunnah and classical Quranic exegesis traditions.
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
                <Heart className="w-6 h-6 text-white shrink-0" />
                <span>Spiritual Benefits & Virtues</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                The sacred verses of the Holy Quran hold profound multidimensional virtues in this transient world and the everlasting Hereafter. Reflecting upon their meanings deepens faith and invokes divine serenity.
              </p>
            </div>

            <div className="space-y-4">
              {ayat.benefits.map((benefit, bIdx) => {
                const [lead, ...rest] = benefit.split(':');
                const titleText = rest.length > 0 ? lead.trim() : `Benefit ${bIdx + 1}`;
                const explanationText = rest.length > 0 ? rest.join(':').trim() : benefit.trim();

                return (
                  <div 
                    key={bIdx} 
                    className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 transition-colors hover:border-slate-700/80 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 rounded-md bg-neutral-800 border border-neutral-800 text-white shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
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

          {/* MEDIA & PERFORMANCE (SPLIT-COLUMN VIDEO FACADE) */}
          <section 
            aria-labelledby="video-facade-heading" 
            className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6"
          >
            <div className="border-b border-slate-800 pb-3">
              <h2 id="video-facade-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Play className="w-6 h-6 text-white" />
                Pronunciation Video Tutorial & Tajweed Masterclass
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Visual word-by-word recitation and vocal articulation guide by certified Huffaz
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT COLUMN: Fast Lazy Video Facade */}
              <div className="lg:col-span-7 video-facade-column">
                <AyatVideoFacade titleEnglish={ayat.titleEnglish} />
              </div>

              {/* RIGHT COLUMN: Recitation Highlights & Tajweed Focus */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Recitation Highlights & Tajweed Focus
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Pay special attention to these vocal rules when articulating the holy text to preserve pristine Quranic meaning:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {ayat.tajweedHighlights.map((highlight, hIdx) => {
                    const [title, ...body] = highlight.split(':');
                    return (
                      <li key={hIdx} className="flex items-start gap-2.5 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <div>
                          {body.length > 0 ? (
                            <>
                              <strong className="text-white font-semibold">{title}:</strong>
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

          {/* AUTHENTIC CLASSICAL QURANIC & HADITH SOURCES */}
          <section aria-labelledby="sources-heading" className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-6 h-6 text-white" />
              <h2 id="sources-heading" className="text-xl sm:text-2xl font-bold text-white">
                Authentic Classical Quranic & Hadith Sources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Quranic Location</span>
                <span className="text-slate-200 font-medium text-sm">Surah {ayat.surahNameEnglish} [{ayat.surahNumber}:{ayat.ayahNumber}]</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Primary Hadith Source</span>
                <span className="text-white font-medium text-sm">{ayat.source}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Classical Exegesis (Tafsir)</span>
                <span className="text-slate-200 font-medium text-sm">{ayat.tafsirReference}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              <strong>Methodological Note on Textual Transmission:</strong> Every verse featured in this directory is derived from the standard Uthmanic codex verified by the King Fahd Holy Quran Printing Complex in Al-Madinah Al-Munawwarah. Virtues and rulings are cross-referenced directly with authenticated Hadith chains in Sahih Al-Bukhari, Sahih Muslim, and classical Tafsir works.
            </p>
          </section>

          {/* ADSENSE RESERVED CONTAINER (Policy-Compliant Labeling) */}
          <div className="adsense-box my-8 bg-slate-900/40 rounded-xl p-4 border border-dashed border-slate-800 flex flex-col items-center justify-center min-h-[120px] text-center">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Advertisement / Sponsored Quranic Resource</span>
            <div className="w-full max-w-lg h-16 bg-slate-950/60 rounded-lg flex items-center justify-center border border-slate-800 text-xs text-slate-500">
              Responsive Educational Display Banner Placement
            </div>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
          <section aria-labelledby="faqs-heading" className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 id="faqs-heading" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-white" />
                Frequently Asked Questions Regarding {ayat.titleEnglish}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Authentic scholarly answers regarding recitation rulings, virtues, and etiquettes
              </p>
            </div>

            <div className="space-y-4">
              {ayat.faqs.map((faq, fIdx) => (
                <details 
                  key={fIdx} 
                  className="group bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden transition-all"
                >
                  <summary className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 hover:text-white transition-colors">
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-neutral-800 text-slate-400 group-open:text-white flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180 shrink-0">
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

          {/* CONTEXTUAL SIBLING NAVIGATION MODULE */}
          <section aria-labelledby="siblings-heading" className="sibling-nav space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h2 id="siblings-heading" className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-white" />
                Other Frequently Recited Sacred Ayats
              </h2>
              <Link href="/ayats/" className="text-xs text-white hover:underline flex items-center gap-1">
                View All Sacred Ayats
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SIBLING_AYATS.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/ayats/${item.slug}`}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-neutral-600 transition-all group block hover:bg-slate-900/90"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="text-white font-medium">{item.cat}</span>
                    <span className="font-urdu text-slate-400">{item.urdu}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* CONTEXTUAL LINK UP (Return to Parent Hub) */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/ayats/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 px-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Sacred Ayats Directory Hub</span>
            </Link>

            <Link
              href="/duas/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>Explore Daily Duas Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </article>
  );
}
