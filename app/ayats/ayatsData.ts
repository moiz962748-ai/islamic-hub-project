// Comprehensive Sacred Quranic Ayats Dataset
export interface AyatDetailItem {
  id: string;
  slug: string;
  title: string;
  titleEnglish: string;
  titleArabic: string;
  titleUrdu: string;
  surahNameArabic: string;
  surahNameEnglish: string;
  surahNumber: number;
  ayahNumber: string;
  category: 'greatest' | 'protection' | 'healing' | 'relief' | 'sovereignty';
  categoryLabel: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  translationEnglish: string;
  translationUrdu: string;
  content: string;
  meaning: string;
  tldr: string;
  source: string;
  sourceBook: string;
  tafsirReference: string;
  authenticity: string;
  badge?: string;
  audioDuration?: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface AyatItem {
  id: string;
  slug: string;
  category: 'greatest' | 'protection' | 'healing' | 'relief' | 'sovereignty';
  categoryLabel: string;
  titleArabic: string;
  titleUrdu: string;
  titleEnglish: string;
  surahNameArabic: string;
  surahNameEnglish: string;
  surahNumber: number;
  ayahNumber: string;
  meaning: string;
  source: string;
  badge?: string;
  arabicText?: string;
  transliteration?: string;
  translationEnglish?: string;
}

export const AYATS_DATA: AyatDetailItem[] = [
  {
    "id": "ayat-al-kursi",
    "slug": "ayat-al-kursi",
    "title": "Ayat al-Kursi (The Throne Verse)",
    "titleEnglish": "Ayat al-Kursi (The Throne Verse)",
    "titleArabic": "آيَةُ الْكُرْسِيِّ",
    "titleUrdu": "آیت الکرسی",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "255",
    "arabicText": "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "transliteration": "Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta’khudhuhu sinatuw-wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa’u ‘indahu illa bi-idhnih, ya’lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay’im-min ‘ilmihi illa bima sha’, wasi’a kursiyyuhus-samawati wal-ard, wa la ya’uduhu hifzuhuma, wa Huwal-’Aliyyul-’Azim.",
    "translation": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    "translationEnglish": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    "translationUrdu": "اللہ! اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ رہنے والا اور سب کو تھامنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ اسی کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے۔",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Ayat al-Kursi (Surah Al-Baqarah 2:255) is affirmed by Prophet Muhammad (PBUH) as the greatest single verse in the Holy Quran.",
    "meaning": "The supreme declaration of monotheism affirming Allah’s eternal life, absolute sovereignty, and unyielding guardianship over all creation.",
    "tldr": "Ayat al-Kursi (Surah Al-Baqarah 2:255) is affirmed by Prophet Muhammad (PBUH) as the greatest single verse in the Holy Quran.",
    "source": "Sahih Muslim (Hadith 810) & Sahih Al-Bukhari (Hadith 2311)",
    "sourceBook": "Holy Quran - Surah Al-Baqarah [2:255]",
    "tafsirReference": "Tafsir Ibn Kathir & Tafsir Al-Qurtubi",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Supreme Verse",
    "audioDuration": "1 min 30 sec",
    "benefits": [
      "Recitation after each obligatory prayer guarantees Paradise upon death.",
      "Bedtime recitation assigns an angelic protector from Shaytan until morning.",
      "Banishes malevolent spirits, evil eye, and sorcery from the home."
    ],
    "steps": [
      {
        "title": "Step 1: Recite After Fardh Salah",
        "desc": "Maintain seated posture immediately following prayer."
      },
      {
        "title": "Step 2: Recite Before Sleeping",
        "desc": "Lie on right side and recite with presence of heart."
      }
    ],
    "faqs": [
      {
        "question": "Why is it named the Throne Verse?",
        "answer": "Kursi signifies the footstool or throne of Allah’s infinite dominion that transcends the entirety of the heavens and earth."
      }
    ]
  },
  {
    "id": "surah-baqarah-last-2-ayats",
    "slug": "surah-baqarah-last-2-ayats",
    "title": "Last 2 Verses of Surah Al-Baqarah (Amanar-Rasul)",
    "titleEnglish": "Last 2 Verses of Surah Al-Baqarah (Amanar-Rasul)",
    "titleArabic": "آمَنَ الرَّسُولُ (خَوَاتِيمُ سُورَةِ الْبَقَرَةِ)",
    "titleUrdu": "سورۃ البقرہ کی آخری ۲ آیات",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "285-286",
    "arabicText": "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
    "transliteration": "Amanar-rasulu bima unzila ilayhi mir-Rabbihi wal-mu’minun, kullun amana billahi wa mala’ikatihi wa kutubihi wa rusulih, la nufarriqu bayna ahadim-mir-rusulih, wa qalu sami’na wa ata’na, ghufranaka Rabbana wa ilaykal-maseer. La yukallifullahu nafsan illa wus’aha, laha ma kasabat wa ‘alayha maktasabat, Rabbana la tu’akhidhna in-naseena aw akhta’na, Rabbana wa la tahmil ‘alayna isran kama hamaltahu ‘alal-ladheena min qablina, Rabbana wa la tuhammilna ma la taqata lana bih, wa’fu ‘anna waghfir lana warhamna, Anta Mawlana fansurna ‘alal-qawmil-kafirin.",
    "translation": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah, His angels, His books, and His messengers... Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred... You are our protector, so give us victory over the disbelieving people.",
    "translationEnglish": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah, His angels, His books, and His messengers... Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred... You are our protector, so give us victory over the disbelieving people.",
    "translationUrdu": "رسول اس پر ایمان لائے جو ان کے رب کی طرف سے ان پر نازل کیا گیا اور مومنین بھی... اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him for all protections and spiritual needs.",
    "meaning": "The crown of Surah Al-Baqarah gifted directly from beneath the Throne of Allah during Isra wal-Mi’raj.",
    "tldr": "Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him for all protections and spiritual needs.",
    "source": "Sahih Al-Bukhari (Hadith 5009) & Sahih Muslim (Hadith 807)",
    "sourceBook": "Holy Quran - Surah Al-Baqarah [2:285-286]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Night Sufficiency",
    "audioDuration": "2 min 10 sec",
    "benefits": [
      "Sufficiency (Kafatahu) against every harm, devil, and calamity for the night.",
      "Gifted exclusively to Prophet Muhammad (PBUH) from beneath the Divine Throne.",
      "Contains prayers of comprehensive forgiveness, mercy, and victory."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Every Night",
        "desc": "Read before going to sleep to earn overnight angelic defense."
      }
    ],
    "faqs": [
      {
        "question": "What does \"they will suffice him\" mean?",
        "answer": "Scholars explain it means they will suffice him against evil, against Shaytan, or even stand in place of Tahajjud night prayer."
      }
    ]
  },
  {
    "id": "ayat-karima",
    "slug": "ayat-karima",
    "title": "Ayat Karima (Dua of Prophet Yunus in the Whale)",
    "titleEnglish": "Ayat Karima (Dua of Prophet Yunus in the Whale)",
    "titleArabic": "آيَةُ كَرِيمَة (دَعْوَةُ ذِي النُّونِ)",
    "titleUrdu": "آیت کریمہ (دعائے یونس علیہ السلام)",
    "surahNameArabic": "الأنبياء",
    "surahNameEnglish": "Al-Anbiya",
    "surahNumber": 21,
    "ayahNumber": "87",
    "arabicText": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minadh-dhalimeen.",
    "translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "translationEnglish": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "translationUrdu": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "No Muslim supplication is made with these words for any distress except that Allah relieves him.",
    "meaning": "The desperate cry from the depths of three darknesses: the belly of the whale, the depths of the ocean, and the blackness of night.",
    "tldr": "No Muslim supplication is made with these words for any distress except that Allah relieves him.",
    "source": "Jami` At-Tirmidhi (Hadith 3505) & Mustadrak Al-Hakim",
    "sourceBook": "Holy Quran - Surah Al-Anbiya [21:87]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Sahih Hadith",
    "badge": "Distress Key",
    "audioDuration": "0 min 45 sec",
    "benefits": [
      "Immediate rescue from seemingly impossible, suffocating predicaments.",
      "Unlocks doors of forgiveness and erases guilt through humble confession.",
      "Prophetic guarantee: Any Muslim who prays with this will be answered."
    ],
    "steps": [
      {
        "title": "Step 1: Focus on the 3 Components",
        "desc": "Tawheed (La ilaha illa Anta), Glorification (Subhanaka), and Confession (Inni kuntu minadh-dhalimeen)."
      },
      {
        "title": "Step 2: Repeat in Sujood",
        "desc": "Utter repeatedly during moments of deep distress."
      }
    ],
    "faqs": [
      {
        "question": "Is there a specific number of times to recite Ayat Karima?",
        "answer": "While repeating it 40, 100, or more times with presence of heart is customary, sincere conviction is the primary key to acceptance."
      }
    ]
  },
  {
    "id": "ayat-ash-shifa",
    "slug": "ayat-ash-shifa",
    "title": "Ayat ash-Shifa (Verses of Healing for Hearts & Bodies)",
    "titleEnglish": "Ayat ash-Shifa (Verses of Healing for Hearts & Bodies)",
    "titleArabic": "آيَاتُ الشِّفَاءِ (شِفَاءٌ لِمَا فِي الصُّدُورِ)",
    "titleUrdu": "آیات الشفاء",
    "surahNameArabic": "يونس",
    "surahNameEnglish": "Yunus",
    "surahNumber": 10,
    "ayahNumber": "57",
    "arabicText": "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِلْمُؤْمِنِينَ.",
    "transliteration": "Ya ayyuhan-nasu qad ja’atkum maw’idhatum-mir-Rabbikum wa shifa’ul-lima fis-suduri wa hudaw-wa rahmatul-lil-mu’mineen.",
    "translation": "O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers.",
    "translationEnglish": "O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers.",
    "translationUrdu": "اے لوگو! تمہارے پاس تمہارے رب کی طرف سے نصیحت اور دلوں کے امراض کی شفا اور مومنوں کے لیے ہدایت اور رحمت آ چکی ہے۔",
    "category": "healing",
    "categoryLabel": "Healing & Shifa",
    "content": "The definitive Quranic declaration that the Word of Allah cures spiritual anxiety and grants physical restoration.",
    "meaning": "Declaring the divine revelation as an absolute spiritual and physiological balm for spiritual doubts and bodily ailments.",
    "tldr": "The definitive Quranic declaration that the Word of Allah cures spiritual anxiety and grants physical restoration.",
    "source": "Holy Quran - Surah Yunus [10:57]",
    "sourceBook": "Quran Karim - Juz 11",
    "tafsirReference": "Tafsir Al-Qurtubi",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Divine Healing",
    "audioDuration": "1 min 00 sec",
    "benefits": [
      "Cures jealousy, malice, hatred, and spiritual sicknesses in the breast.",
      "Releases emotional tightness, panic, and bodily psychosomatic pain.",
      "Serves as prime Ruqyah verse when recited over water or the sick."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Over Water",
        "desc": "Blow gently over water and drink for internal healing."
      }
    ],
    "faqs": [
      {
        "question": "What are the 6 Ayats of Shifa in the Quran?",
        "answer": "Surah At-Tawbah (9:14), Yunus (10:57), An-Nahl (16:69), Al-Isra (17:82), Ash-Shu’ara (26:80), and Fussilat (41:44)."
      }
    ]
  },
  {
    "id": "ayat-al-mulk",
    "slug": "ayat-al-mulk",
    "title": "Ayat al-Mulk (The Sovereignty and Provision Verses)",
    "titleEnglish": "Ayat al-Mulk (The Sovereignty and Provision Verses)",
    "titleArabic": "آيَةُ الْمُلْكِ (قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ)",
    "titleUrdu": "آیت الملک (قل اللّٰہم مالک الملک)",
    "surahNameArabic": "آل عمران",
    "surahNameEnglish": "Ali ‘Imran",
    "surahNumber": 3,
    "ayahNumber": "26-27",
    "arabicText": "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ.",
    "transliteration": "Qulillahumma Malikal-mulki tu’til-mulka man tasha’u wa tanzi’ul-mulka mimman tasha’u, wa tu’izzu man tasha’u wa tudhillu man tasha’, bi yadikal-khayr, innaka ‘ala kulli shay’in Qadir. Tulijul-layla fin-nahari wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyiti wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tasha’u bi ghayri hisab.",
    "translation": "Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things omnipotent. You cause the night to enter into the day, and You cause the day to enter into the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without measure.",
    "translationEnglish": "Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things omnipotent. You cause the night to enter into the day, and You cause the day to enter into the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without measure.",
    "translationUrdu": "آپ کہئے: اے اللہ! سلطنت کے مالک! تو جسے چاہے حکومت دے اور جس سے چاہے سلطنت چھین لے، اور تو جسے چاہے عزت دے اور جسے چاہے ذلیل کرے...",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "content": "The sovereign antidote against fear of tyrants and poverty; opens unmatched avenues of Rizq and divine elevation.",
    "meaning": "Affirming that honor, leadership, societal position, and boundless provision are exclusively controlled by Allah.",
    "tldr": "The sovereign antidote against fear of tyrants and poverty; opens unmatched avenues of Rizq and divine elevation.",
    "source": "Holy Quran - Surah Ali ‘Imran [3:26-27]",
    "sourceBook": "Quran Karim - Juz 3",
    "tafsirReference": "Tafsir Ibn Kathir & Tafsir at-Tabari",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Honor & Rizq",
    "audioDuration": "1 min 45 sec",
    "benefits": [
      "Elevates believer from humiliation and social oppression to dignity.",
      "Shatters financial blockages and brings livelihood without measure.",
      "Removes anxiety regarding political turmoil or corrupt superiors."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Morning and Evening",
        "desc": "Read after Fajr and Maghrib for expansion of lawful sustenance."
      }
    ],
    "faqs": [
      {
        "question": "What did the Prophet (PBUH) say to Mu’adh regarding debt?",
        "answer": "He taught him to recite Ayat al-Mulk, saying even if his debt were the size of Mount Uhud, Allah would pay it off for him."
      }
    ]
  },
  {
    "id": "ayat-at-talaq-rizq",
    "slug": "ayat-at-talaq-rizq",
    "title": "Ayat of Rizq & Way Out (Wa Man Yattaqillah)",
    "titleEnglish": "Ayat of Rizq & Way Out (Wa Man Yattaqillah)",
    "titleArabic": "آيَةُ الرِّزْقِ وَالْمَخْرَجِ (وَمَنْ يَتَّقِ اللَّهَ)",
    "titleUrdu": "آیت رزق و کشائش",
    "surahNameArabic": "الطلاق",
    "surahNameEnglish": "At-Talaq",
    "surahNumber": 65,
    "ayahNumber": "2-3",
    "arabicText": "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا. وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا.",
    "transliteration": "Wa may-yattaqillaha yaj’al lahu makhraja, wa yarzuqhu min haythu la yahtasib, wa may-yatawakkal ‘alallahi fahuwa hasbuh, innallaha balighu amrih, qad ja’alallahu li kulli shay’in qadra.",
    "translation": "And whoever fears Allah - He will make for him a way out, and will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
    "translationEnglish": "And whoever fears Allah - He will make for him a way out, and will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
    "translationUrdu": "اور جو شخص اللہ سے ڈرے گا اللہ اس کے لیے چھٹکارے کی راہ نکال دے گا، اور اسے ایسی جگہ سے رزق دے گا جہاں سے اس کا گمان بھی نہ ہو...",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "content": "The supreme verse of financial relief, spiritual ease, and ultimate reliance upon Allah in times of constriction.",
    "meaning": "The golden rule of Taqwa: God-consciousness creates escape routes from impossible bottlenecks and generates unexpected wealth.",
    "tldr": "The supreme verse of financial relief, spiritual ease, and ultimate reliance upon Allah in times of constriction.",
    "source": "Holy Quran - Surah At-Talaq [65:2-3]",
    "sourceBook": "Quran Karim - Juz 28",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Way Out & Wealth",
    "audioDuration": "1 min 15 sec",
    "benefits": [
      "Guarantees divine exit from every legal, personal, and financial dead-end.",
      "Sustenance provided from sources never calculated or imagined.",
      "Sufficiency (Hasbuh): Allah Himself takes responsibility for all outcomes."
    ],
    "steps": [
      {
        "title": "Step 1: Internalize Taqwa",
        "desc": "Avoid Haram income and obey Allah with sincere intention."
      },
      {
        "title": "Step 2: Recite Consistently",
        "desc": "Repeat with unwavering Tawakkul during tight circumstances."
      }
    ],
    "faqs": [
      {
        "question": "What did Abu Dharr (RA) narrate about this verse?",
        "answer": "The Prophet (PBUH) said: \"O Abu Dharr, if all people were to take hold of this verse alone, it would suffice them all.\""
      }
    ]
  },
  {
    "id": "surah-fatiha",
    "slug": "surah-fatiha",
    "title": "Surah Al-Fatiha (The Opening / Mother of the Book)",
    "titleEnglish": "Surah Al-Fatiha (The Opening / Mother of the Book)",
    "titleArabic": "سُورَةُ الْفَاتِحَةِ (أُمُّ الْكِتَابِ)",
    "titleUrdu": "سورۃ الفاتحہ (ام الکتاب)",
    "surahNameArabic": "الفاتحة",
    "surahNameEnglish": "Al-Fatiha",
    "surahNumber": 1,
    "ayahNumber": "1-7",
    "arabicText": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ.",
    "transliteration": "Bismillahir-Rahmanir-Raheem. Alhamdu lillahi Rabbil-’alameen. Ar-Rahmanir-Raheem. Maliki yawmid-deen. Iyyaka na’budu wa iyyaka nasta’een. Ihdinas-siratal-mustaqeem. Siratal-ladheena an’amta ‘alayhim, ghayril-maghdubi ‘alayhim wa lad-dalleen.",
    "translation": "In the Name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds. The Entirely Merciful, the Especially Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    "translationEnglish": "In the Name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds. The Entirely Merciful, the Especially Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    "translationUrdu": "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Surah Al-Fatiha is the greatest chapter in the Quran, named As-Sab’ al-Mathani (The Seven Often-Repeated Verses) and Ash-Shifa (The Cure).",
    "meaning": "The foundational conversation between the servant and the Lord; recited in every unit of prayer.",
    "tldr": "Surah Al-Fatiha is the greatest chapter in the Quran, named As-Sab’ al-Mathani (The Seven Often-Repeated Verses) and Ash-Shifa (The Cure).",
    "source": "Sahih Al-Bukhari (Hadith 4474) & Sahih Muslim (Hadith 395)",
    "sourceBook": "Holy Quran - Surah Al-Fatiha [1:1-7]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Mother of the Book",
    "audioDuration": "1 min 10 sec",
    "benefits": [
      "Pillar of Salah: Prayer is invalid without its recitation.",
      "Divine dialogue: Allah replies to each verse as the reciter speaks.",
      "Potent healing Ruqyah for scorpion stings, poison, and fever."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Every Rak’ah",
        "desc": "Obligatory in all 17 daily Fardh units."
      },
      {
        "title": "Step 2: Pause Between Verses",
        "desc": "Recite verse by verse following the Prophetic pacing."
      }
    ],
    "faqs": [
      {
        "question": "Why is it called the Seven Oft-Repeated Verses?",
        "answer": "Because Muslims repeat its 7 verses at least 17 times daily in their obligatory prayers."
      }
    ]
  },
  {
    "id": "surah-ikhlas",
    "slug": "surah-ikhlas",
    "title": "Surah Al-Ikhlas (The Purity of Monotheism)",
    "titleEnglish": "Surah Al-Ikhlas (The Purity of Monotheism)",
    "titleArabic": "سُورَةُ الإِخْلَاصِ (التَّوْحِيدُ)",
    "titleUrdu": "سورۃ الاخلاص (توحید خالص)",
    "surahNameArabic": "الإخلاص",
    "surahNameEnglish": "Al-Ikhlas",
    "surahNumber": 112,
    "ayahNumber": "1-4",
    "arabicText": "قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
    "transliteration": "Qul Huwallahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.",
    "translation": "Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.",
    "translationEnglish": "Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.",
    "translationUrdu": "آپ کہہ دیجئے کہ وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔ اور نہ کوئی اس کا ہمسر ہے۔",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Reciting Surah Al-Ikhlas equals one-third of the entire Holy Quran in spiritual weight and reward.",
    "meaning": "The distilled essence of pure monotheism, utterly denying anthropomorphism, polytheism, and lineage to the Divine.",
    "tldr": "Reciting Surah Al-Ikhlas equals one-third of the entire Holy Quran in spiritual weight and reward.",
    "source": "Sahih Al-Bukhari (Hadith 5013) & Sahih Muslim (811)",
    "sourceBook": "Holy Quran - Surah Al-Ikhlas [112:1-4]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "One Third of Quran",
    "audioDuration": "0 min 30 sec",
    "benefits": [
      "Equivalent to reciting one-third of the entire Quran.",
      "Love for this Surah guarantees entry into Paradise (Sahih Bukhari).",
      "Reciting 10 times builds a palace in Paradise for the reciter."
    ],
    "steps": [
      {
        "title": "Step 1: Recite 3 Times Morning & Evening",
        "desc": "Combined with Al-Falaq and An-Nas."
      }
    ],
    "faqs": [
      {
        "question": "What does As-Samad mean?",
        "answer": "The Eternal, Self-Sufficient Master upon Whom all creation depends while He depends upon nothing."
      }
    ]
  },
  {
    "id": "surah-falaq",
    "slug": "surah-falaq",
    "title": "Surah Al-Falaq (The Daybreak / Seeking Refuge)",
    "titleEnglish": "Surah Al-Falaq (The Daybreak / Seeking Refuge)",
    "titleArabic": "سُورَةُ الْفَلَقِ (الْمُعَوِّذَتَانِ)",
    "titleUrdu": "سورۃ الفلق (پناہ کی سورۃ)",
    "surahNameArabic": "الفلق",
    "surahNameEnglish": "Al-Falaq",
    "surahNumber": 113,
    "ayahNumber": "1-5",
    "arabicText": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    "transliteration": "Qul a’udhu bi Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-’uqad. Wa min sharri hasidin idha hasad.",
    "translation": "Say: I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.",
    "translationEnglish": "Say: I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.",
    "translationUrdu": "آپ کہئے کہ میں صبح کے رب کی پناہ مانگتا ہوں، ہر اس چیز کے شر سے جو اس نے پیدا کی، اور اندھیری رات کے شر سے جب وہ چھا جائے، اور گرہوں میں پھونکنے والیوں کے شر سے، اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "content": "Revealed alongside Surah An-Nas to cure the Prophet (PBUH) from the sorcery of Labid ibn al-A’sam.",
    "meaning": "The divine antidote revealed directly to break black magic, sorcery, witchcraft, and the venom of envious people.",
    "tldr": "Revealed alongside Surah An-Nas to cure the Prophet (PBUH) from the sorcery of Labid ibn al-A’sam.",
    "source": "Sahih Al-Bukhari (Hadith 5016) & Sahih Muslim",
    "sourceBook": "Holy Quran - Surah Al-Falaq [113:1-5]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Sorcery & Envy Shield",
    "audioDuration": "0 min 40 sec",
    "benefits": [
      "Unbinds occult knots of black magic and witchcraft.",
      "Shields against nocturnal attacks, demons, and predatory beasts.",
      "Defuses the destructive spiritual radiation of Hasad (envy)."
    ],
    "steps": [
      {
        "title": "Step 1: Recite into Hands Before Sleep",
        "desc": "Cup hands, recite Al-Ikhlas, Al-Falaq, An-Nas, blow, and wipe over body."
      }
    ],
    "faqs": [
      {
        "question": "Who are the \"blowers in knots\"?",
        "answer": "Practitioners of witchcraft and sorcery who tie knots and blow incantations upon them."
      }
    ]
  },
  {
    "id": "surah-nas",
    "slug": "surah-nas",
    "title": "Surah An-Nas (Mankind / Sanctuary from Whispers)",
    "titleEnglish": "Surah An-Nas (Mankind / Sanctuary from Whispers)",
    "titleArabic": "سُورَةُ النَّاسِ (الْمُعَوِّذَةُ الثَّانِيَةُ)",
    "titleUrdu": "سورۃ الناس (وسوسوں سے پناہ)",
    "surahNameArabic": "الناس",
    "surahNameEnglish": "An-Nas",
    "surahNumber": 114,
    "ayahNumber": "1-6",
    "arabicText": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَٰهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ.",
    "transliteration": "Qul a’udhu bi Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas.",
    "translation": "Say: I seek refuge in the Lord of mankind, The Sovereign of mankind, The God of mankind, From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind - From among the jinn and mankind.",
    "translationEnglish": "Say: I seek refuge in the Lord of mankind, The Sovereign of mankind, The God of mankind, From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind - From among the jinn and mankind.",
    "translationUrdu": "آپ کہئے کہ میں تمام انسانوں کے رب کی پناہ میں آتا ہوں، تمام انسانوں کے بادشاہ کی، تمام انسانوں کے معبود کی، وسوسہ ڈالنے والے پیچھے ہٹ جانے والے کے شر سے...",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "content": "The final chapter of the Quran; the ultimate psychic shield against OCD, intrusive doubts, and demonic whispers.",
    "meaning": "Seeking refuge in Allah’s lordship, kingship, and divinity from internal insidious whispers (Waswas) of human and demonic devils.",
    "tldr": "The final chapter of the Quran; the ultimate psychic shield against OCD, intrusive doubts, and demonic whispers.",
    "source": "Sahih Al-Bukhari (Hadith 5017) & Sahih Muslim",
    "sourceBook": "Holy Quran - Surah An-Nas [114:1-6]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Mind & Heart Shield",
    "audioDuration": "0 min 40 sec",
    "benefits": [
      "Drives away Al-Khannas (the devil who whispers and retreats when Allah is remembered).",
      "Protects mental clarity against paralyzing religious and obsessive doubts.",
      "Recited 3 times morning and night guarantees complete sufficiency."
    ],
    "steps": [
      {
        "title": "Step 1: Recite When Intrusive Thoughts Occur",
        "desc": "Spit dryly to the left 3 times and say: A’udhu billahi minash-shaytan."
      }
    ],
    "faqs": [
      {
        "question": "Why are three attributes of Allah invoked here?",
        "answer": "Rabbin-Nas (Nurturer), Malikin-Nas (Ruler), Ilahin-Nas (Deity) emphasizes absolute reliance when fighting the invisible enemy."
      }
    ]
  },
  {
    "id": "surah-hashr-last-ayats",
    "slug": "surah-hashr-last-ayats",
    "title": "Last 3 Verses of Surah Al-Hashr (Divine Attributes)",
    "titleEnglish": "Last 3 Verses of Surah Al-Hashr (Divine Attributes)",
    "titleArabic": "خَوَاتِيمُ سُورَةِ الْحَشْرِ (أَسْمَاءُ اللَّهِ الْحُسْنَى)",
    "titleUrdu": "سورۃ الحشر کی آخری ۳ آیات",
    "surahNameArabic": "الحشر",
    "surahNameEnglish": "Al-Hashr",
    "surahNumber": 59,
    "ayahNumber": "22-24",
    "arabicText": "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ. هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ. هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ.",
    "transliteration": "Huwallahulladhi la ilaha illa Huw, ‘Alimul-ghaybi wash-shahadah, Huwar-Rahmanur-Raheem. Huwallahulladhi la ilaha illa Huwal-Malikul-Quddusus-Salamul-Mu’minul-Muhayminul-’Azizul-Jabbarul-Mutakabbir, subhanallahi ‘amma yushrikun. Huwallahul-Khaliqul-Bari’ul-Musawwiru lahul-asma’ul-husna, yusabbihu lahu ma fis-samawati wal-ard, wa Huwal-’Azizul-Hakeem.",
    "translation": "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful. He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him. He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.",
    "translationEnglish": "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful. He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him. He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.",
    "translationUrdu": "وہی اللہ ہے جس کے سوا کوئی معبود نہیں، چھپے اور کھلے کا جاننے والا، وہی نہایت مہربان اور رحم فرمانے والا ہے...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Whoever recites these verses in the morning, 70,000 angels send prayers upon him until evening, and if he dies, he dies a martyr.",
    "meaning": "The magnificent constellation of the Most Beautiful Names (Asma-ul-Husna) declaring Allah’s transcendent glory.",
    "tldr": "Whoever recites these verses in the morning, 70,000 angels send prayers upon him until evening, and if he dies, he dies a martyr.",
    "source": "Jami` At-Tirmidhi (Hadith 2922) & Sunan ad-Darimi",
    "sourceBook": "Holy Quran - Surah Al-Hashr [59:22-24]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Hasan Hadith",
    "badge": "70,000 Angels",
    "audioDuration": "2 min 00 sec",
    "benefits": [
      "70,000 angels invoke blessings upon the reciter throughout the day.",
      "Status of martyrdom (Shahadah) if passing away on that day.",
      "Contains 15 of the Most Sublime Names of Allah."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Morning & Evening",
        "desc": "Preceded by saying 3 times: A’udhu billahis-Sami’il-’Aleemi minash-shaytanir-rajeem."
      }
    ],
    "faqs": [
      {
        "question": "What is the distinction between Khaliq, Bari, and Musawwir?",
        "answer": "Al-Khaliq plans creation, Al-Bari brings it from non-existence into reality, and Al-Musawwir shapes its distinct forms and features."
      }
    ]
  },
  {
    "id": "surah-isra-dua-parents",
    "slug": "surah-isra-dua-parents",
    "title": "Quranic Supplication for Parents (Rabbir-Hamhuma)",
    "titleEnglish": "Quranic Supplication for Parents (Rabbir-Hamhuma)",
    "titleArabic": "دُعَاءُ بِرِّ الْوَالِدَيْنِ (رَّبِّ ارْحَمْهُمَا)",
    "titleUrdu": "والدین کے لیے رحمت و بخشش کی قرآنی دعا",
    "surahNameArabic": "الإسراء",
    "surahNameEnglish": "Al-Isra",
    "surahNumber": 17,
    "ayahNumber": "24",
    "arabicText": "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا.",
    "transliteration": "Wakhfid lahuma janahadh-dhulli minar-rahmati wa qur-Rabbir-hamhuma kama rabbayani sagheera.",
    "translation": "And lower to them the wing of humility out of mercy and say: My Lord, have mercy upon them both as they brought me up when I was small.",
    "translationEnglish": "And lower to them the wing of humility out of mercy and say: My Lord, have mercy upon them both as they brought me up when I was small.",
    "translationUrdu": "اور ان کے سامنے شفقت و عاجزی سے اپنے بازو جھکائے رکھو اور کہو کہ اے میرے رب! ان دونوں پر رحم فرما جیسا کہ انہوں نے بچپن میں میری پرورش کی۔",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "Direct Quranic mandate commanding lifelong compassion, respect, and posthumous supplication for parents.",
    "meaning": "The supreme standard of filial love: bending oneself in humble service and praying for infinite divine mercy upon father and mother.",
    "tldr": "Direct Quranic mandate commanding lifelong compassion, respect, and posthumous supplication for parents.",
    "source": "Holy Quran - Surah Al-Isra [17:24]",
    "sourceBook": "Quran Karim - Juz 15",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Filial Piety",
    "audioDuration": "0 min 45 sec",
    "benefits": [
      "Continuous ongoing charity (Sadaqah Jariyah) benefiting parents in their graves.",
      "Invokes divine mercy on children who honor their parents.",
      "Elevates ranks of departed parents in highest gardens of Jannah."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Sujood",
        "desc": "Include in voluntary and obligatory prayers daily."
      }
    ],
    "faqs": [
      {
        "question": "What if one or both parents have passed away?",
        "answer": "This prayer remains the single most effective gift a child can transmit to deceased parents."
      }
    ]
  },
  {
    "id": "surah-furqan-righteous-family",
    "slug": "surah-furqan-righteous-family",
    "title": "Dua for Righteous Spouse & Children (Qurrata A’yun)",
    "titleEnglish": "Dua for Righteous Spouse & Children (Qurrata A’yun)",
    "titleArabic": "دُعَاءُ قُرَّةِ أَعْيُنٍ (رَبَّنَا هَبْ لَنَا)",
    "titleUrdu": "نیک بیوی اور اولاد کے لیے قرآنی دعا",
    "surahNameArabic": "الفرقان",
    "surahNameEnglish": "Al-Furqan",
    "surahNumber": 25,
    "ayahNumber": "74",
    "arabicText": "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا.",
    "transliteration": "Walladheena yaquluna Rabbana hab lana min azwajina wa dhurriyyatina qurrata a’yuniw-waj’alna lil-muttaqeena imama.",
    "translation": "And those who say: Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.",
    "translationEnglish": "And those who say: Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.",
    "translationUrdu": "اور جو یہ دعا مانگتے ہیں کہ اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "The definitive Quranic prescription for household peace, loving marriages, and children who bring true pride and coolness to the eyes.",
    "meaning": "The defining prayer of ‘Ibad-ur-Rahman (Servants of the Most Merciful) asking for pious spouses, morally upright children, and spiritual leadership.",
    "tldr": "The definitive Quranic prescription for household peace, loving marriages, and children who bring true pride and coolness to the eyes.",
    "source": "Holy Quran - Surah Al-Furqan [25:74]",
    "sourceBook": "Quran Karim - Juz 19",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Family Peace",
    "audioDuration": "0 min 50 sec",
    "benefits": [
      "Transforms stormy marriages into tranquil partnerships.",
      "Protects children from immorality and rebellion.",
      "Elevates family members to leadership in Taqwa and good deeds."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Every Tahajjud",
        "desc": "Ask Allah for marital compatibility and righteous progeny."
      }
    ],
    "faqs": [
      {
        "question": "What does \"Qurrata A’yun\" (coolness of the eyes) signify?",
        "answer": "In classical Arabic, tears of sorrow are burning hot, while tears of utter joy and relief are cool; thus it means joy that banishes all sorrow."
      }
    ]
  },
  {
    "id": "surah-kahf-first-10-ayats",
    "slug": "surah-kahf-first-10-ayats",
    "title": "First 10 Verses of Surah Al-Kahf (Shield from Dajjal)",
    "titleEnglish": "First 10 Verses of Surah Al-Kahf (Shield from Dajjal)",
    "titleArabic": "عَشْرُ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ",
    "titleUrdu": "سورۃ الکہف کی ابتدائی ۱۰ آیات (فتنہ دجال سے پناہ)",
    "surahNameArabic": "الكهف",
    "surahNameEnglish": "Al-Kahf",
    "surahNumber": 18,
    "ayahNumber": "1-10",
    "arabicText": "الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَهُ عِوَجًا... إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا.",
    "transliteration": "Alhamdu lillahilladhi anzala ‘ala ‘abdihil-kitaba wa lam yaj’al lahu ‘iwaja... Idh awal-fityatu ilal-kahfi faqalu Rabbana atina mil-ladunka rahmataw-wa hayyi’ lana min amrina rashada.",
    "translation": "[All] praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance... When the youths retreated to the cave and said: Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    "translationEnglish": "[All] praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance... When the youths retreated to the cave and said: Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    "translationUrdu": "تمام تعریفیں اللہ کے لیے ہیں جس نے اپنے بندے پر یہ کتاب نازل فرمائی اور اس میں کوئی کجی نہیں رکھی... جب ان چند جوانوں نے غار میں پناہ لی تو کہا: اے ہمارے رب! ہمیں اپنے پاس سے رحمت عطا فرما اور ہمارے معاملے میں درست رہنمائی مہیا فرما۔",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "content": "Whoever memorizes the first ten verses of Surah Al-Kahf will be protected from the trial of Dajjal.",
    "meaning": "The spiritual fortress shielding the heart from the greatest tribulation humanity will ever face: the Antichrist (Al-Masih ad-Dajjal).",
    "tldr": "Whoever memorizes the first ten verses of Surah Al-Kahf will be protected from the trial of Dajjal.",
    "source": "Sahih Muslim (Hadith 809)",
    "sourceBook": "Holy Quran - Surah Al-Kahf [18:1-10]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Sahih Hadith",
    "badge": "Dajjal Shield",
    "audioDuration": "2 min 30 sec",
    "benefits": [
      "Infallible spiritual immunization against the deceptive miracles of Dajjal.",
      "Illuminates light (Noor) from the reciter’s feet up to the clouds of the sky.",
      "Sunnah recitation on every Friday (Jummah)."
    ],
    "steps": [
      {
        "title": "Step 1: Memorize the First 10 Verses",
        "desc": "Recite them frequently in Friday prayers."
      }
    ],
    "faqs": [
      {
        "question": "Is it the first 10 or last 10 verses?",
        "answer": "Both are mentioned in authentic narrations in Sahih Muslim; scholars recommend memorizing both ends of Surah Al-Kahf."
      }
    ]
  },
  {
    "id": "surah-kahf-last-10-ayats",
    "slug": "surah-kahf-last-10-ayats",
    "title": "Last 10 Verses of Surah Al-Kahf (Sincerity in Deeds)",
    "titleEnglish": "Last 10 Verses of Surah Al-Kahf (Sincerity in Deeds)",
    "titleArabic": "خَوَاتِيمُ سُورَةِ الْكَهْفِ (الإِخْلَاصُ فِي الْعَمَلِ)",
    "titleUrdu": "سورۃ الکہف کی آخری ۱۰ آیات",
    "surahNameArabic": "الكهف",
    "surahNameEnglish": "Al-Kahf",
    "surahNumber": 18,
    "ayahNumber": "101-110",
    "arabicText": "قُلْ هَلْ نُنَبِّئُكُمْ بِالْأَخْسَرِينَ أَعْمَالًا. الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا... قُلْ إِنَّمَا أَنَا بَشَرٌ مِثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا.",
    "transliteration": "Qul hal nunabbi’ukum bil-akhsareena a’mala. Alladheena dalla sa’yuhum fil-hayatid-dunya wa hum yahsabuna annahum yuhsinuna sun’a... Qul innama ana basharum-mithlukum yuha ilayya annama Ilahukum Ilahuw-Wahid, faman kana yarju liqa’a Rabbihi fal-ya’mal ‘amalan salihaw-wa la yushrik bi ‘ibadati Rabbihi ahada.",
    "translation": "Say: Shall we tell you the greatest losers in respect of their deeds? Those whose efforts have been wasted in this life while they thought that they were acquiring good by their deeds... Say: I am only a man like you, to whom has been revealed that your god is one God. So whoever would hope for the meeting with his Lord - let him do righteous work and not associate in the worship of his Lord anyone.",
    "translationEnglish": "Say: Shall we tell you the greatest losers in respect of their deeds? Those whose efforts have been wasted in this life while they thought that they were acquiring good by their deeds... Say: I am only a man like you, to whom has been revealed that your god is one God. So whoever would hope for the meeting with his Lord - let him do righteous work and not associate in the worship of his Lord anyone.",
    "translationUrdu": "کہہ دیجئے: کیا ہم تمہیں ان لوگوں کے بارے میں بتائیں جو اپنے اعمال کے اعتبار سے سب سے زیادہ نقصان میں ہیں؟ وہ جن کی ساری کوششیں دنیاوی زندگی میں ضائع ہو گئیں...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Guards the believer from hypocrisy and spiritual bankruptcy on the Day of Reckoning.",
    "meaning": "A stern wake-up call warning against self-delusion in good works and concluding with the two golden conditions of worship: Sincerity and Sunnah.",
    "tldr": "Guards the believer from hypocrisy and spiritual bankruptcy on the Day of Reckoning.",
    "source": "Sahih Muslim (Hadith 809b)",
    "sourceBook": "Holy Quran - Surah Al-Kahf [18:101-110]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Purification of Deeds",
    "audioDuration": "2 min 30 sec",
    "benefits": [
      "Protection against the deceit of Dajjal.",
      "Prevents righteous deeds from turning into scattered dust (Haba’am-Manthura).",
      "Prepares the soul for the ultimate face-to-face meeting with the Lord."
    ],
    "steps": [
      {
        "title": "Step 1: Reflect Upon Intention",
        "desc": "Ensure all acts of worship are performed purely for Allah."
      }
    ],
    "faqs": [
      {
        "question": "What are the two conditions for an accepted deed?",
        "answer": "1. Sincere intention purely for Allah (Ikhlas), and 2. Conforming to the practice of the Prophet PBUH (Ittiba)."
      }
    ]
  },
  {
    "id": "surah-imran-shahidallah",
    "slug": "surah-imran-shahidallah",
    "title": "Ayat of Divine Testimony (Shahidallahu Annahu)",
    "titleEnglish": "Ayat of Divine Testimony (Shahidallahu Annahu)",
    "titleArabic": "آيَةُ الشَّهَادَةِ (شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ)",
    "titleUrdu": "آیت شہود و عدل",
    "surahNameArabic": "آل عمران",
    "surahNameEnglish": "Ali ‘Imran",
    "surahNumber": 3,
    "ayahNumber": "18",
    "arabicText": "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ ۚ لَا إِلَهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ.",
    "transliteration": "Shahidallahu annahu la ilaha illa Huwa wal-mala’ikatu wa ulul-’ilmi qa’imam-bil-qist, la ilaha illa Huwal-’Azizul-Hakeem.",
    "translation": "Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
    "translationEnglish": "Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
    "translationUrdu": "اللہ تعالیٰ، فرشتے اور اہل علم اس بات کی گواہی دیتے ہیں کہ اللہ کے سوا کوئی معبود نہیں اور وہ عدل کے ساتھ نظام کائنات کو قائم رکھنے والا ہے...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Affirms that true scholarship is tethered to testifying to Tawheed and establishing divine justice on earth.",
    "meaning": "The highest testimony in existence: Allah testifies to His own absolute oneness and eternal justice, joined by angels and people of knowledge.",
    "tldr": "Affirms that true scholarship is tethered to testifying to Tawheed and establishing divine justice on earth.",
    "source": "Holy Quran - Surah Ali ‘Imran [3:18]",
    "sourceBook": "Quran Karim - Juz 3",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Divine Testimony",
    "audioDuration": "0 min 50 sec",
    "benefits": [
      "Elevates scholars of sacred knowledge to the companionship of angels in testimony.",
      "Shatters theological doubts and establishes serene certainty in Tawheed.",
      "Recited after Salah to affirm unchanging covenant with the Creator."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Following Prayers",
        "desc": "Affirm your testimony together with angels."
      }
    ],
    "faqs": [
      {
        "question": "Why are people of knowledge mentioned alongside angels?",
        "answer": "To honor authentic knowledge of Allah as the noblest pursuit and highest testimony possible for a human."
      }
    ]
  },
  {
    "id": "surah-tawbah-hasbiyallah",
    "slug": "surah-tawbah-hasbiyallah",
    "title": "Ayat of Sufficiency (Hasbiyallahu La Ilaha Illa Huwa)",
    "titleEnglish": "Ayat of Sufficiency (Hasbiyallahu La Ilaha Illa Huwa)",
    "titleArabic": "آيَةُ الْحَسْبِ (حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ)",
    "titleUrdu": "آیت حسبی اللہ (کفایت و توکل)",
    "surahNameArabic": "التوبة",
    "surahNameEnglish": "At-Tawbah",
    "surahNumber": 9,
    "ayahNumber": "129",
    "arabicText": "فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
    "transliteration": "Fa in tawallaw faqul hasbiyallahu la ilaha illa Huw, ‘alayhi tawakkaltu wa Huwa Rabbul-’Arshil-’Azeem.",
    "translation": "But if they turn away, say: Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
    "translationEnglish": "But if they turn away, say: Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
    "translationUrdu": "پھر اگر وہ منہ پھیر لیں تو آپ کہہ دیجئے: مجھے اللہ ہی کافی ہے، اس کے سوا کوئی معبود نہیں، اسی پر میں نے بھروسہ کیا اور وہ عرش عظیم کا مالک ہے۔",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "content": "Whoever recites this 7 times in the morning and 7 times in the evening, Allah will suffice him for whatever worries him in this world and the next.",
    "meaning": "Unshakeable Tawakkul when people abandon, betray, or oppose you; declaring that the Lord of the Great Throne is alone sufficient.",
    "tldr": "Whoever recites this 7 times in the morning and 7 times in the evening, Allah will suffice him for whatever worries him in this world and the next.",
    "source": "Sunan Abi Dawud (Hadith 5081)",
    "sourceBook": "Holy Quran - Surah At-Tawbah [9:129]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Sahih Mawquf",
    "badge": "7 Times Sufficiency",
    "audioDuration": "0 min 40 sec",
    "benefits": [
      "Guaranteed divine resolution for all anxieties of worldly life and the Hereafter.",
      "Protects against loneliness, abandonment, and social ostracization.",
      "Anchors the soul to the Lord of the Supreme Throne."
    ],
    "steps": [
      {
        "title": "Step 1: Recite 7 Times in the Morning",
        "desc": "After Fajr prayer."
      },
      {
        "title": "Step 2: Recite 7 Times in the Evening",
        "desc": "After Maghrib prayer."
      }
    ],
    "faqs": [
      {
        "question": "Does this apply if someone recites it with partial doubt?",
        "answer": "The narration in Abu Dawud states: \"whether he is truthful or not, Allah will suffice him,\" showing the vastness of divine mercy."
      }
    ]
  },
  {
    "id": "surah-duha",
    "slug": "surah-duha",
    "title": "Surah Ad-Duha (The Morning Hours / Divine Consolation)",
    "titleEnglish": "Surah Ad-Duha (The Morning Hours / Divine Consolation)",
    "titleArabic": "سُورَةُ الضُّحَى (جَبْرُ الْخَاطِرِ)",
    "titleUrdu": "سورۃ الضحیٰ (تسکین و تسلی)",
    "surahNameArabic": "الضحى",
    "surahNameEnglish": "Ad-Duha",
    "surahNumber": 93,
    "ayahNumber": "1-11",
    "arabicText": "وَالضُّحَىٰ. وَاللَّيْلِ إِذَا سَجَىٰ. مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ. وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ. وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ.",
    "transliteration": "Wad-duha. Wal-layli idha saja. Ma wadda’aka Rabbuka wa ma qala. Wa lal-akhiratu khayrul-laka minal-ula. Wa lasawfa yu’teeka Rabbuka fatarda.",
    "translation": "By the morning brightness. And by the night when it covers with darkness. Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]. And the Hereafter is better for you than the first [life]. And your Lord is going to give you, and you will be satisfied.",
    "translationEnglish": "By the morning brightness. And by the night when it covers with darkness. Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]. And the Hereafter is better for you than the first [life]. And your Lord is going to give you, and you will be satisfied.",
    "translationUrdu": "قسم ہے چاشت کے وقت کی! اور رات کی جب وہ چھا جائے! آپ کے رب نے نہ آپ کو چھوڑا ہے اور نہ وہ بیزار ہوا ہے...",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "Revealed when revelation paused and critics mocked; Allah comforted His Prophet with promises of eternal satisfaction.",
    "meaning": "The sublime balm for depressed, abandoned, or grieving souls; Allah promises that the dark night will yield to morning light.",
    "tldr": "Revealed when revelation paused and critics mocked; Allah comforted His Prophet with promises of eternal satisfaction.",
    "source": "Sahih Al-Bukhari (Hadith 4950) & Sahih Muslim",
    "sourceBook": "Holy Quran - Surah Ad-Duha [93:1-11]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Depression Cure",
    "audioDuration": "1 min 15 sec",
    "benefits": [
      "Instantly dissolves despair, feeling unloved, or spiritual dryness.",
      "Reassures that current difficulties are temporary and the future will bring satisfaction.",
      "Encourages practical charity to orphans and beggars."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Times of Grief",
        "desc": "Contemplate: \"Your Lord has not abandoned you.\""
      }
    ],
    "faqs": [
      {
        "question": "Why is Takbeer recited after this Surah?",
        "answer": "When this Surah was revealed after a long pause, the Prophet (PBUH) exclaimed \"Allahu Akbar!\" in sheer relief, establishing a Sunnah for the final Surahs."
      }
    ]
  },
  {
    "id": "surah-inshirah",
    "slug": "surah-inshirah",
    "title": "Surah Ash-Sharh (The Relief / Expansion of the Breast)",
    "titleEnglish": "Surah Ash-Sharh (The Relief / Expansion of the Breast)",
    "titleArabic": "سُورَةُ الشَّرْحِ (فَإِنَّ مَعَ الْعُسْرِ يُسْرًا)",
    "titleUrdu": "سورۃ الانشراح (کشادگی سینہ)",
    "surahNameArabic": "الشرح",
    "surahNameEnglish": "Ash-Sharh",
    "surahNumber": 94,
    "ayahNumber": "1-8",
    "arabicText": "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ. وَوَضَعْنَا عَنْكَ وِزْرَكَ. الَّذِي أَنْقَضَ ظَهْرَكَ. وَرَفَعْنَا لَكَ ذِكْرَكَ. فَإِنَّ مَعَ الْعُسْرِ يُسْرًا. إِنَّ مَعَ الْعُسْرِ يُسْرًا. فَإِذَا فَرَغْتَ فَانْصَبْ. وَإِلَىٰ رَبِّكَ فَارْغَبْ.",
    "transliteration": "Alam nashrah laka sadrak. Wa wada’na ‘anka wizrak. Alladhi anqada dhahrak. Wa rafa’na laka dhikrak. Fa inna ma’al-’usri yusra. Inna ma’al-’usri yusra. Fa idha faraghta fansab. Wa ila Rabbika farghab.",
    "translation": "Did We not expand for you, [O Muhammad], your breast? And We removed from you your burden which had weighed upon your back. And raised high for you your repute. For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease. So when you have finished [your duties], then stand up [for worship]. And to your Lord direct [your] longing.",
    "translationEnglish": "Did We not expand for you, [O Muhammad], your breast? And We removed from you your burden which had weighed upon your back. And raised high for you your repute. For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease. So when you have finished [your duties], then stand up [for worship]. And to your Lord direct [your] longing.",
    "translationUrdu": "کیا ہم نے آپ کا سینہ کشادہ نہیں فرما دیا؟ اور ہم نے آپ سے آپ کا بوجھ اتار دیا، جس نے آپ کی کمر توڑ رکھی تھی...",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "Prophet Muhammad (PBUH) smiled upon its revelation and proclaimed: \"One hardship can never overcome two eases!\"",
    "meaning": "The divine law of alleviation: Hardship does not merely precede ease—ease is packaged inside the hardship itself.",
    "tldr": "Prophet Muhammad (PBUH) smiled upon its revelation and proclaimed: \"One hardship can never overcome two eases!\"",
    "source": "Holy Quran - Surah Ash-Sharh [94:1-8]",
    "sourceBook": "Quran Karim - Juz 30",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Relief with Hardship",
    "audioDuration": "1 min 00 sec",
    "benefits": [
      "Relieves suffocating anxiety, chest tightness, and emotional burnout.",
      "Recharges mental stamina to face daunting challenges.",
      "Points toward worship as the supreme outlet once daily chores conclude."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Moments of Heaviness",
        "desc": "Reflect upon the guarantee: \"Indeed, with hardship comes ease.\""
      }
    ],
    "faqs": [
      {
        "question": "Why did the Prophet (PBUH) say one hardship cannot overcome two eases?",
        "answer": "In Arabic grammar, \"al-’Usr\" (hardship) is definite (singular), while \"Yusr\" (ease) is indefinite (multiple and renewed)."
      }
    ]
  },
  {
    "id": "surah-mulk-opening",
    "slug": "surah-mulk-opening",
    "title": "Opening of Surah Al-Mulk (The Protector from Grave Punishment)",
    "titleEnglish": "Opening of Surah Al-Mulk (The Protector from Grave Punishment)",
    "titleArabic": "مَفَاتِيحُ سُورَةِ الْمُلْكِ (تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ)",
    "titleUrdu": "سورۃ الملک کی ابتدائی آیات (عذاب قبر سے محافظ)",
    "surahNameArabic": "الملك",
    "surahNameEnglish": "Al-Mulk",
    "surahNumber": 67,
    "ayahNumber": "1-5",
    "arabicText": "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ.",
    "transliteration": "Tabarakalladhi bi yadihil-mulku wa Huwa ‘ala kulli shay’in Qadeer. Alladhi khalaqal-mawta wal-hayata li yabluwakum ayyukum ahsanu ‘amala, wa Huwal-’Azizul-Ghafur.",
    "translation": "Blessed is He in whose hand is dominion, and He is over all things omnipotent - [He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving.",
    "translationEnglish": "Blessed is He in whose hand is dominion, and He is over all things omnipotent - [He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving.",
    "translationUrdu": "بڑی بابرکت ہے وہ ذات جس کے ہاتھ میں ساری بادشاہی ہے اور وہ ہر چیز پر قادر ہے۔ جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے عمل کے لحاظ سے کون بہتر ہے...",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "content": "Surah Al-Mulk consists of 30 verses that intercede for its companion until all his sins are forgiven and shields him from grave torment.",
    "meaning": "Reflecting on the profound reality of mortality and purpose of creation; the defender in the darkness of the grave.",
    "tldr": "Surah Al-Mulk consists of 30 verses that intercede for its companion until all his sins are forgiven and shields him from grave torment.",
    "source": "Jami` At-Tirmidhi (Hadith 2891) & Sunan Abi Dawud (1400)",
    "sourceBook": "Holy Quran - Surah Al-Mulk [67:1-5]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Sahih Hadith",
    "badge": "Grave Shield",
    "audioDuration": "1 min 30 sec",
    "benefits": [
      "Blocks torment of the grave: stands as an advocate against Munkar and Nakir.",
      "Nightly recitation was an unbroken practice of Prophet Muhammad (PBUH).",
      "Continuous intercession until full entry into Jannah."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Every Night Before Sleeping",
        "desc": "Read the full 30 verses of Surah Al-Mulk."
      }
    ],
    "faqs": [
      {
        "question": "What is its name in classical traditions?",
        "answer": "It is called Al-Mani’ah (The Preventer) and Al-Munjiyah (The Rescuer) because it rescues from the punishment of the grave."
      }
    ]
  },
  {
    "id": "surah-yasin-verse-58",
    "slug": "surah-yasin-verse-58",
    "title": "Salamun Qawlam Mir-Rabbir-Raheem (The Divine Salutation of Peace)",
    "titleEnglish": "Salamun Qawlam Mir-Rabbir-Raheem (The Divine Salutation of Peace)",
    "titleArabic": "سَلَامٌ قَوْلًا مِنْ رَبٍّ رَحِيمٍ (قَلْبُ الْقُرْآنِ)",
    "titleUrdu": "سلام قولاً من رب رحیم (دلِ قرآن)",
    "surahNameArabic": "يس",
    "surahNameEnglish": "Ya-Sin",
    "surahNumber": 36,
    "ayahNumber": "58",
    "arabicText": "سَلَامٌ قَوْلًا مِنْ رَبٍّ رَحِيمٍ.",
    "transliteration": "Salamun qawlam-mir-Rabbir-Raheem.",
    "translation": "[And] \"Peace,\" a word from a Merciful Lord.",
    "translationEnglish": "[And] \"Peace,\" a word from a Merciful Lord.",
    "translationUrdu": "نہایت مہربان رب کی طرف سے انہیں سلام فرمایا جائے گا۔",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Considered by classical scholars as the spiritual nucleus of Surah Ya-Sin, the heart of the Quran.",
    "meaning": "The crowning greeting of Paradise: the Almighty Creator Himself salutes the inhabitants of Jannah with peace.",
    "tldr": "Considered by classical scholars as the spiritual nucleus of Surah Ya-Sin, the heart of the Quran.",
    "source": "Holy Quran - Surah Ya-Sin [36:58]",
    "sourceBook": "Quran Karim - Juz 23",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Peace of Paradise",
    "audioDuration": "0 min 30 sec",
    "benefits": [
      "Instills profound serenity and divine security in the heart of the reciter.",
      "Celebrates the highest honor attainable in eternity: the direct greeting of Allah.",
      "Frequent recitation brings relief from terminal anxieties."
    ],
    "steps": [
      {
        "title": "Step 1: Recite with Contemplation",
        "desc": "Envision standing in Jannah receiving this divine greeting."
      }
    ],
    "faqs": [
      {
        "question": "Why is Surah Ya-Sin called the heart of the Quran?",
        "answer": "Because it pulses with the core themes of Islam: Tawheed, the Prophethood, Resurrection, and accountability in the Hereafter."
      }
    ]
  },
  {
    "id": "surah-nur-ayat-an-nur",
    "slug": "surah-nur-ayat-an-nur",
    "title": "Ayat an-Nur (The Verse of Divine Light)",
    "titleEnglish": "Ayat an-Nur (The Verse of Divine Light)",
    "titleArabic": "آيَةُ النُّورِ (اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ)",
    "titleUrdu": "آیت النور",
    "surahNameArabic": "النور",
    "surahNameEnglish": "An-Nur",
    "surahNumber": 24,
    "ayahNumber": "35",
    "arabicText": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ.",
    "transliteration": "Allahu nurus-samawati wal-ard, mathalu nurihi kamishkatin feeha misbah, al-misbahu fee zujajah, az-zujajatu ka’annaha kawkabun durriyyuy-yuqadu min shajaratim-mubarakatin zaytunatil-la sharqiyyatiw-wa la gharbiyyah, yakadu zaytuha yudee’u wa law lam tamsas-hu nar, nurun ‘ala nur, yahdillahu li nurihi may-yasha’.",
    "translation": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills.",
    "translationEnglish": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills.",
    "translationUrdu": "اللہ آسمانوں اور زمین کا نور ہے۔ اس کے نور کی مثال ایسی ہے جیسے ایک طاق ہو جس میں چراغ ہو، چراغ شیشے کی قندیل میں ہو...",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "content": "Ibn Abbas (RA) stated that this verse portrays the pure heart of the believer illuminated by innate Fitrah and Quranic light.",
    "meaning": "The highest mystical contemplation of divine revelation; the luminous glass of the believer’s heart ignited by faith.",
    "tldr": "Ibn Abbas (RA) stated that this verse portrays the pure heart of the believer illuminated by innate Fitrah and Quranic light.",
    "source": "Holy Quran - Surah An-Nur [24:35]",
    "sourceBook": "Quran Karim - Juz 18",
    "tafsirReference": "Tafsir Ibn Kathir & Tafsir at-Tabari",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Light Upon Light",
    "audioDuration": "2 min 00 sec",
    "benefits": [
      "Dispels dark mental fog, confusion, and spiritual blindness.",
      "Attracts profound insight (Baseerah) and intellectual illumination.",
      "Draws divine guidance into life decisions."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Tahajjud Night Vigil",
        "desc": "Contemplate the parable of the lamp, the niche, and the blessed olive tree."
      }
    ],
    "faqs": [
      {
        "question": "What does \"Light upon Light\" mean?",
        "answer": "The light of innate natural disposition (Fitrah) illuminated and ignited by the external light of Divine Revelation (Quran)."
      }
    ]
  },
  {
    "id": "surah-anbiya-job-dua",
    "slug": "surah-anbiya-job-dua",
    "title": "Dua of Prophet Ayyub for Chronic Illness & Healing",
    "titleEnglish": "Dua of Prophet Ayyub for Chronic Illness & Healing",
    "titleArabic": "دُعَاءُ أَيُّوبَ عَلَيْهِ السَّلَامُ (أَنِّي مَسَّنِيَ الضُّرُّ)",
    "titleUrdu": "حضرت ایوب علیہ السلام کی دعا برائے شفا",
    "surahNameArabic": "الأنبياء",
    "surahNameEnglish": "Al-Anbiya",
    "surahNumber": 21,
    "ayahNumber": "83",
    "arabicText": "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ.",
    "transliteration": "Annee massaniyad-durru wa Anta Arhamur-Rahimeen.",
    "translation": "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
    "translationEnglish": "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
    "translationUrdu": "بے شک مجھے بیماری نے آ گھیرا ہے اور تو سب رحم کرنے والوں سے بڑھ کر رحم فرمانے والا ہے۔",
    "category": "healing",
    "categoryLabel": "Healing & Shifa",
    "content": "Prophet Ayyub (Job AS) uttered this after years of debilitating physical suffering, and Allah immediately answered and restored him.",
    "meaning": "The golden etiquette of supplication during agonizing chronic sickness: stating personal vulnerability without complaint and appealing to infinite mercy.",
    "tldr": "Prophet Ayyub (Job AS) uttered this after years of debilitating physical suffering, and Allah immediately answered and restored him.",
    "source": "Holy Quran - Surah Al-Anbiya [21:83]",
    "sourceBook": "Quran Karim - Juz 17",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Miraculous Cure",
    "audioDuration": "0 min 35 sec",
    "benefits": [
      "Unlocks divine cure for chronic, terminal, or long-standing health battles.",
      "Cultivates sublime patience (Sabr Jameel) free of bitterness or resentment.",
      "Direct precedent: Allah cured Ayyub, doubled his wealth, and restored his family."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Moments of Severe Physical Pain",
        "desc": "Whisper with absolute surrender and faith in Allah’s mercy."
      }
    ],
    "faqs": [
      {
        "question": "How long did Prophet Ayyub suffer before this prayer?",
        "answer": "Scholars mention he endured illness for many years without once uttering a word of complaint against his Lord."
      }
    ]
  },
  {
    "id": "surah-taha-rabbishrah-li",
    "slug": "surah-taha-rabbishrah-li",
    "title": "Dua of Prophet Musa for Ease & Public Speaking (Rabbish-Rah Li)",
    "titleEnglish": "Dua of Prophet Musa for Ease & Public Speaking (Rabbish-Rah Li)",
    "titleArabic": "دُعَاءُ مُوسَى عَلَيْهِ السَّلَامُ (رَبِّ اشْرَحْ لِي صَدْرِي)",
    "titleUrdu": "حضرت موسیٰ علیہ السلام کی دعا برائے فصاحت و آسانی",
    "surahNameArabic": "طه",
    "surahNameEnglish": "Ta-Ha",
    "surahNumber": 20,
    "ayahNumber": "25-28",
    "arabicText": "رَبِّ اشْرَحْ لِي صَدْرِي. وَيَسِّرْ لِي أَمْرِي. وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي. يَفْقَهُوا قَوْلِي.",
    "transliteration": "Rabbish-rah li sadree. Wa yassir lee amree. Wahlul ‘uqdatam-mil-lisanee. Yafqahu qawlee.",
    "translation": "My Lord, expand for me my breast [with assurance]. And ease for me my task. And untie the knot from my tongue. That they may understand my speech.",
    "translationEnglish": "My Lord, expand for me my breast [with assurance]. And ease for me my task. And untie the knot from my tongue. That they may understand my speech.",
    "translationUrdu": "اے میرے رب! میرے لیے میرا سینہ کھول دے۔ اور میرے لیے میرا کام آسان فرما دے۔ اور میری زبان کی گرہ کھول دے تاکہ وہ میری بات سمجھ سکیں۔",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "Prophet Musa (AS) prayed this before confronting Pharaoh, the most ruthless tyrant on earth.",
    "meaning": "The supreme prayer for overcoming stage fright, speech impediments, intimidating interviews, and daunting confrontations.",
    "tldr": "Prophet Musa (AS) prayed this before confronting Pharaoh, the most ruthless tyrant on earth.",
    "source": "Holy Quran - Surah Ta-Ha [20:25-28]",
    "sourceBook": "Quran Karim - Juz 16",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Confidence & Speech",
    "audioDuration": "0 min 50 sec",
    "benefits": [
      "Removes speech hesitations, stuttering, and panic before public speaking.",
      "Expands mental comprehension and articulates clear persuasive thoughts.",
      "Transforms intimidating professional or personal confrontations into calm mastery."
    ],
    "steps": [
      {
        "title": "Step 1: Recite 3 Times Before Speaking",
        "desc": "Before job interviews, exams, or major presentations."
      }
    ],
    "faqs": [
      {
        "question": "Why did Musa (AS) ask for speech clarity?",
        "answer": "Due to an earlier childhood incident, he had a slight heaviness on his tongue and wanted his message to be completely understood."
      }
    ]
  },
  {
    "id": "surah-baqarah-rabbana-atina",
    "slug": "surah-baqarah-rabbana-atina",
    "title": "The Most Comprehensive Quranic Dua (Rabbana Atina)",
    "titleEnglish": "The Most Comprehensive Quranic Dua (Rabbana Atina)",
    "titleArabic": "جَامِعُ الدُّعَاءِ (رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً)",
    "titleUrdu": "ربنا آتنا فی الدنیا حسنۃ (سب سے جامع قرآنی دعا)",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "201",
    "arabicText": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    "transliteration": "Rabbana atina fid-dunya hasanataw-wa fil-akhirati hasanataw-wa qina ‘adhaban-nar.",
    "translation": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    "translationEnglish": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    "translationUrdu": "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں دوزخ کے عذاب سے بچا۔",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "content": "This was the single most frequent supplication made by Prophet Muhammad (PBUH) in daily life and during Tawaf around the Ka’bah.",
    "meaning": "The most comprehensive supplication ever revealed, encompassing every conceivable worldly blessing, every eternal gift, and total salvation.",
    "tldr": "This was the single most frequent supplication made by Prophet Muhammad (PBUH) in daily life and during Tawaf around the Ka’bah.",
    "source": "Sahih Al-Bukhari (Hadith 4522) & Sahih Muslim (Hadith 2690)",
    "sourceBook": "Holy Quran - Surah Al-Baqarah [2:201]",
    "tafsirReference": "Tafsir Ibn Kathir",
    "authenticity": "Mutawatir Quranic Revelation • Sahih Hadith",
    "badge": "Universal Goodness",
    "audioDuration": "0 min 40 sec",
    "benefits": [
      "Encompasses health, wealth, righteous family, knowledge, and peace in this world.",
      "Encompasses Paradise, light, forgiveness, and the vision of Allah in the Hereafter.",
      "Absolute protection against Hellfire and grave punishment."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Every Tawaf",
        "desc": "Between the Yemeni Corner (Rukn Yamani) and the Black Stone (Hajar Aswad)."
      },
      {
        "title": "Step 2: Conclude Every Personal Prayer",
        "desc": "Make it the seal of your daily supplications."
      }
    ],
    "faqs": [
      {
        "question": "What does \"Hasanah\" in this world include?",
        "answer": "Scholars explain it includes lawful wealth, sound health, a righteous spouse, beneficial knowledge, and a peaceful home."
      }
    ]
  }
];

export const ayatsData = AYATS_DATA;

export function getAyatBySlug(slug: string): AyatDetailItem | undefined {
  const cleanSlug = slug.toLowerCase().trim().replace(/^\/ayats\//, '').replace(/^\//, '').replace(/\/$/, '');
  return AYATS_DATA.find(a => a.slug === cleanSlug || a.id === cleanSlug);
}

export function getAllAyatSlugs(): string[] {
  return AYATS_DATA.map(a => a.slug);
}

export const ALL_AYATS: AyatItem[] = [
  {
    "id": "ayat-al-kursi",
    "slug": "/ayats/ayat-al-kursi",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "آيَةُ الْكُرْسِيِّ",
    "titleUrdu": "آیت الکرسی",
    "titleEnglish": "Ayat al-Kursi (The Throne Verse)",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "255",
    "meaning": "The supreme declaration of monotheism affirming Allah’s eternal life, absolute sovereignty, and unyielding guardianship over all creation.",
    "source": "Sahih Muslim (Hadith 810) & Sahih Al-Bukhari (Hadith 2311)",
    "badge": "Supreme Verse",
    "arabicText": "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "transliteration": "Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta’khudhuhu sinatuw-wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa’u ‘indahu illa bi-idhnih, ya’lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay’im-min ‘ilmihi illa bima sha’, wasi’a kursiyyuhus-samawati wal-ard, wa la ya’uduhu hifzuhuma, wa Huwal-’Aliyyul-’Azim.",
    "translationEnglish": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."
  },
  {
    "id": "surah-baqarah-last-2-ayats",
    "slug": "/ayats/surah-baqarah-last-2-ayats",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "آمَنَ الرَّسُولُ (خَوَاتِيمُ سُورَةِ الْبَقَرَةِ)",
    "titleUrdu": "سورۃ البقرہ کی آخری ۲ آیات",
    "titleEnglish": "Last 2 Verses of Surah Al-Baqarah (Amanar-Rasul)",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "285-286",
    "meaning": "The crown of Surah Al-Baqarah gifted directly from beneath the Throne of Allah during Isra wal-Mi’raj.",
    "source": "Sahih Al-Bukhari (Hadith 5009) & Sahih Muslim (Hadith 807)",
    "badge": "Night Sufficiency",
    "arabicText": "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
    "transliteration": "Amanar-rasulu bima unzila ilayhi mir-Rabbihi wal-mu’minun, kullun amana billahi wa mala’ikatihi wa kutubihi wa rusulih, la nufarriqu bayna ahadim-mir-rusulih, wa qalu sami’na wa ata’na, ghufranaka Rabbana wa ilaykal-maseer. La yukallifullahu nafsan illa wus’aha, laha ma kasabat wa ‘alayha maktasabat, Rabbana la tu’akhidhna in-naseena aw akhta’na, Rabbana wa la tahmil ‘alayna isran kama hamaltahu ‘alal-ladheena min qablina, Rabbana wa la tuhammilna ma la taqata lana bih, wa’fu ‘anna waghfir lana warhamna, Anta Mawlana fansurna ‘alal-qawmil-kafirin.",
    "translationEnglish": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah, His angels, His books, and His messengers... Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred... You are our protector, so give us victory over the disbelieving people."
  },
  {
    "id": "ayat-karima",
    "slug": "/ayats/ayat-karima",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "آيَةُ كَرِيمَة (دَعْوَةُ ذِي النُّونِ)",
    "titleUrdu": "آیت کریمہ (دعائے یونس علیہ السلام)",
    "titleEnglish": "Ayat Karima (Dua of Prophet Yunus in the Whale)",
    "surahNameArabic": "الأنبياء",
    "surahNameEnglish": "Al-Anbiya",
    "surahNumber": 21,
    "ayahNumber": "87",
    "meaning": "The desperate cry from the depths of three darknesses: the belly of the whale, the depths of the ocean, and the blackness of night.",
    "source": "Jami` At-Tirmidhi (Hadith 3505) & Mustadrak Al-Hakim",
    "badge": "Distress Key",
    "arabicText": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minadh-dhalimeen.",
    "translationEnglish": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."
  },
  {
    "id": "ayat-ash-shifa",
    "slug": "/ayats/ayat-ash-shifa",
    "category": "healing",
    "categoryLabel": "Healing & Shifa",
    "titleArabic": "آيَاتُ الشِّفَاءِ (شِفَاءٌ لِمَا فِي الصُّدُورِ)",
    "titleUrdu": "آیات الشفاء",
    "titleEnglish": "Ayat ash-Shifa (Verses of Healing for Hearts & Bodies)",
    "surahNameArabic": "يونس",
    "surahNameEnglish": "Yunus",
    "surahNumber": 10,
    "ayahNumber": "57",
    "meaning": "Declaring the divine revelation as an absolute spiritual and physiological balm for spiritual doubts and bodily ailments.",
    "source": "Holy Quran - Surah Yunus [10:57]",
    "badge": "Divine Healing",
    "arabicText": "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِلْمُؤْمِنِينَ.",
    "transliteration": "Ya ayyuhan-nasu qad ja’atkum maw’idhatum-mir-Rabbikum wa shifa’ul-lima fis-suduri wa hudaw-wa rahmatul-lil-mu’mineen.",
    "translationEnglish": "O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers."
  },
  {
    "id": "ayat-al-mulk",
    "slug": "/ayats/ayat-al-mulk",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "titleArabic": "آيَةُ الْمُلْكِ (قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ)",
    "titleUrdu": "آیت الملک (قل اللّٰہم مالک الملک)",
    "titleEnglish": "Ayat al-Mulk (The Sovereignty and Provision Verses)",
    "surahNameArabic": "آل عمران",
    "surahNameEnglish": "Ali ‘Imran",
    "surahNumber": 3,
    "ayahNumber": "26-27",
    "meaning": "Affirming that honor, leadership, societal position, and boundless provision are exclusively controlled by Allah.",
    "source": "Holy Quran - Surah Ali ‘Imran [3:26-27]",
    "badge": "Honor & Rizq",
    "arabicText": "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ.",
    "transliteration": "Qulillahumma Malikal-mulki tu’til-mulka man tasha’u wa tanzi’ul-mulka mimman tasha’u, wa tu’izzu man tasha’u wa tudhillu man tasha’, bi yadikal-khayr, innaka ‘ala kulli shay’in Qadir. Tulijul-layla fin-nahari wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyiti wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tasha’u bi ghayri hisab.",
    "translationEnglish": "Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things omnipotent. You cause the night to enter into the day, and You cause the day to enter into the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without measure."
  },
  {
    "id": "ayat-at-talaq-rizq",
    "slug": "/ayats/ayat-at-talaq-rizq",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "titleArabic": "آيَةُ الرِّزْقِ وَالْمَخْرَجِ (وَمَنْ يَتَّقِ اللَّهَ)",
    "titleUrdu": "آیت رزق و کشائش",
    "titleEnglish": "Ayat of Rizq & Way Out (Wa Man Yattaqillah)",
    "surahNameArabic": "الطلاق",
    "surahNameEnglish": "At-Talaq",
    "surahNumber": 65,
    "ayahNumber": "2-3",
    "meaning": "The golden rule of Taqwa: God-consciousness creates escape routes from impossible bottlenecks and generates unexpected wealth.",
    "source": "Holy Quran - Surah At-Talaq [65:2-3]",
    "badge": "Way Out & Wealth",
    "arabicText": "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا. وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا.",
    "transliteration": "Wa may-yattaqillaha yaj’al lahu makhraja, wa yarzuqhu min haythu la yahtasib, wa may-yatawakkal ‘alallahi fahuwa hasbuh, innallaha balighu amrih, qad ja’alallahu li kulli shay’in qadra.",
    "translationEnglish": "And whoever fears Allah - He will make for him a way out, and will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent."
  },
  {
    "id": "surah-fatiha",
    "slug": "/ayats/surah-fatiha",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "سُورَةُ الْفَاتِحَةِ (أُمُّ الْكِتَابِ)",
    "titleUrdu": "سورۃ الفاتحہ (ام الکتاب)",
    "titleEnglish": "Surah Al-Fatiha (The Opening / Mother of the Book)",
    "surahNameArabic": "الفاتحة",
    "surahNameEnglish": "Al-Fatiha",
    "surahNumber": 1,
    "ayahNumber": "1-7",
    "meaning": "The foundational conversation between the servant and the Lord; recited in every unit of prayer.",
    "source": "Sahih Al-Bukhari (Hadith 4474) & Sahih Muslim (Hadith 395)",
    "badge": "Mother of the Book",
    "arabicText": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ.",
    "transliteration": "Bismillahir-Rahmanir-Raheem. Alhamdu lillahi Rabbil-’alameen. Ar-Rahmanir-Raheem. Maliki yawmid-deen. Iyyaka na’budu wa iyyaka nasta’een. Ihdinas-siratal-mustaqeem. Siratal-ladheena an’amta ‘alayhim, ghayril-maghdubi ‘alayhim wa lad-dalleen.",
    "translationEnglish": "In the Name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds. The Entirely Merciful, the Especially Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
  },
  {
    "id": "surah-ikhlas",
    "slug": "/ayats/surah-ikhlas",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "سُورَةُ الإِخْلَاصِ (التَّوْحِيدُ)",
    "titleUrdu": "سورۃ الاخلاص (توحید خالص)",
    "titleEnglish": "Surah Al-Ikhlas (The Purity of Monotheism)",
    "surahNameArabic": "الإخلاص",
    "surahNameEnglish": "Al-Ikhlas",
    "surahNumber": 112,
    "ayahNumber": "1-4",
    "meaning": "The distilled essence of pure monotheism, utterly denying anthropomorphism, polytheism, and lineage to the Divine.",
    "source": "Sahih Al-Bukhari (Hadith 5013) & Sahih Muslim (811)",
    "badge": "One Third of Quran",
    "arabicText": "قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
    "transliteration": "Qul Huwallahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.",
    "translationEnglish": "Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."
  },
  {
    "id": "surah-falaq",
    "slug": "/ayats/surah-falaq",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "titleArabic": "سُورَةُ الْفَلَقِ (الْمُعَوِّذَتَانِ)",
    "titleUrdu": "سورۃ الفلق (پناہ کی سورۃ)",
    "titleEnglish": "Surah Al-Falaq (The Daybreak / Seeking Refuge)",
    "surahNameArabic": "الفلق",
    "surahNameEnglish": "Al-Falaq",
    "surahNumber": 113,
    "ayahNumber": "1-5",
    "meaning": "The divine antidote revealed directly to break black magic, sorcery, witchcraft, and the venom of envious people.",
    "source": "Sahih Al-Bukhari (Hadith 5016) & Sahih Muslim",
    "badge": "Sorcery & Envy Shield",
    "arabicText": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    "transliteration": "Qul a’udhu bi Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-’uqad. Wa min sharri hasidin idha hasad.",
    "translationEnglish": "Say: I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies."
  },
  {
    "id": "surah-nas",
    "slug": "/ayats/surah-nas",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "titleArabic": "سُورَةُ النَّاسِ (الْمُعَوِّذَةُ الثَّانِيَةُ)",
    "titleUrdu": "سورۃ الناس (وسوسوں سے پناہ)",
    "titleEnglish": "Surah An-Nas (Mankind / Sanctuary from Whispers)",
    "surahNameArabic": "الناس",
    "surahNameEnglish": "An-Nas",
    "surahNumber": 114,
    "ayahNumber": "1-6",
    "meaning": "Seeking refuge in Allah’s lordship, kingship, and divinity from internal insidious whispers (Waswas) of human and demonic devils.",
    "source": "Sahih Al-Bukhari (Hadith 5017) & Sahih Muslim",
    "badge": "Mind & Heart Shield",
    "arabicText": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَٰهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ.",
    "transliteration": "Qul a’udhu bi Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas.",
    "translationEnglish": "Say: I seek refuge in the Lord of mankind, The Sovereign of mankind, The God of mankind, From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind - From among the jinn and mankind."
  },
  {
    "id": "surah-hashr-last-ayats",
    "slug": "/ayats/surah-hashr-last-ayats",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "خَوَاتِيمُ سُورَةِ الْحَشْرِ (أَسْمَاءُ اللَّهِ الْحُسْنَى)",
    "titleUrdu": "سورۃ الحشر کی آخری ۳ آیات",
    "titleEnglish": "Last 3 Verses of Surah Al-Hashr (Divine Attributes)",
    "surahNameArabic": "الحشر",
    "surahNameEnglish": "Al-Hashr",
    "surahNumber": 59,
    "ayahNumber": "22-24",
    "meaning": "The magnificent constellation of the Most Beautiful Names (Asma-ul-Husna) declaring Allah’s transcendent glory.",
    "source": "Jami` At-Tirmidhi (Hadith 2922) & Sunan ad-Darimi",
    "badge": "70,000 Angels",
    "arabicText": "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ. هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ. هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ.",
    "transliteration": "Huwallahulladhi la ilaha illa Huw, ‘Alimul-ghaybi wash-shahadah, Huwar-Rahmanur-Raheem. Huwallahulladhi la ilaha illa Huwal-Malikul-Quddusus-Salamul-Mu’minul-Muhayminul-’Azizul-Jabbarul-Mutakabbir, subhanallahi ‘amma yushrikun. Huwallahul-Khaliqul-Bari’ul-Musawwiru lahul-asma’ul-husna, yusabbihu lahu ma fis-samawati wal-ard, wa Huwal-’Azizul-Hakeem.",
    "translationEnglish": "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful. He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him. He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise."
  },
  {
    "id": "surah-isra-dua-parents",
    "slug": "/ayats/surah-isra-dua-parents",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "دُعَاءُ بِرِّ الْوَالِدَيْنِ (رَّبِّ ارْحَمْهُمَا)",
    "titleUrdu": "والدین کے لیے رحمت و بخشش کی قرآنی دعا",
    "titleEnglish": "Quranic Supplication for Parents (Rabbir-Hamhuma)",
    "surahNameArabic": "الإسراء",
    "surahNameEnglish": "Al-Isra",
    "surahNumber": 17,
    "ayahNumber": "24",
    "meaning": "The supreme standard of filial love: bending oneself in humble service and praying for infinite divine mercy upon father and mother.",
    "source": "Holy Quran - Surah Al-Isra [17:24]",
    "badge": "Filial Piety",
    "arabicText": "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا.",
    "transliteration": "Wakhfid lahuma janahadh-dhulli minar-rahmati wa qur-Rabbir-hamhuma kama rabbayani sagheera.",
    "translationEnglish": "And lower to them the wing of humility out of mercy and say: My Lord, have mercy upon them both as they brought me up when I was small."
  },
  {
    "id": "surah-furqan-righteous-family",
    "slug": "/ayats/surah-furqan-righteous-family",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "دُعَاءُ قُرَّةِ أَعْيُنٍ (رَبَّنَا هَبْ لَنَا)",
    "titleUrdu": "نیک بیوی اور اولاد کے لیے قرآنی دعا",
    "titleEnglish": "Dua for Righteous Spouse & Children (Qurrata A’yun)",
    "surahNameArabic": "الفرقان",
    "surahNameEnglish": "Al-Furqan",
    "surahNumber": 25,
    "ayahNumber": "74",
    "meaning": "The defining prayer of ‘Ibad-ur-Rahman (Servants of the Most Merciful) asking for pious spouses, morally upright children, and spiritual leadership.",
    "source": "Holy Quran - Surah Al-Furqan [25:74]",
    "badge": "Family Peace",
    "arabicText": "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا.",
    "transliteration": "Walladheena yaquluna Rabbana hab lana min azwajina wa dhurriyyatina qurrata a’yuniw-waj’alna lil-muttaqeena imama.",
    "translationEnglish": "And those who say: Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous."
  },
  {
    "id": "surah-kahf-first-10-ayats",
    "slug": "/ayats/surah-kahf-first-10-ayats",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "titleArabic": "عَشْرُ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ",
    "titleUrdu": "سورۃ الکہف کی ابتدائی ۱۰ آیات (فتنہ دجال سے پناہ)",
    "titleEnglish": "First 10 Verses of Surah Al-Kahf (Shield from Dajjal)",
    "surahNameArabic": "الكهف",
    "surahNameEnglish": "Al-Kahf",
    "surahNumber": 18,
    "ayahNumber": "1-10",
    "meaning": "The spiritual fortress shielding the heart from the greatest tribulation humanity will ever face: the Antichrist (Al-Masih ad-Dajjal).",
    "source": "Sahih Muslim (Hadith 809)",
    "badge": "Dajjal Shield",
    "arabicText": "الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَهُ عِوَجًا... إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا.",
    "transliteration": "Alhamdu lillahilladhi anzala ‘ala ‘abdihil-kitaba wa lam yaj’al lahu ‘iwaja... Idh awal-fityatu ilal-kahfi faqalu Rabbana atina mil-ladunka rahmataw-wa hayyi’ lana min amrina rashada.",
    "translationEnglish": "[All] praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance... When the youths retreated to the cave and said: Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance."
  },
  {
    "id": "surah-kahf-last-10-ayats",
    "slug": "/ayats/surah-kahf-last-10-ayats",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "خَوَاتِيمُ سُورَةِ الْكَهْفِ (الإِخْلَاصُ فِي الْعَمَلِ)",
    "titleUrdu": "سورۃ الکہف کی آخری ۱۰ آیات",
    "titleEnglish": "Last 10 Verses of Surah Al-Kahf (Sincerity in Deeds)",
    "surahNameArabic": "الكهف",
    "surahNameEnglish": "Al-Kahf",
    "surahNumber": 18,
    "ayahNumber": "101-110",
    "meaning": "A stern wake-up call warning against self-delusion in good works and concluding with the two golden conditions of worship: Sincerity and Sunnah.",
    "source": "Sahih Muslim (Hadith 809b)",
    "badge": "Purification of Deeds",
    "arabicText": "قُلْ هَلْ نُنَبِّئُكُمْ بِالْأَخْسَرِينَ أَعْمَالًا. الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا... قُلْ إِنَّمَا أَنَا بَشَرٌ مِثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا.",
    "transliteration": "Qul hal nunabbi’ukum bil-akhsareena a’mala. Alladheena dalla sa’yuhum fil-hayatid-dunya wa hum yahsabuna annahum yuhsinuna sun’a... Qul innama ana basharum-mithlukum yuha ilayya annama Ilahukum Ilahuw-Wahid, faman kana yarju liqa’a Rabbihi fal-ya’mal ‘amalan salihaw-wa la yushrik bi ‘ibadati Rabbihi ahada.",
    "translationEnglish": "Say: Shall we tell you the greatest losers in respect of their deeds? Those whose efforts have been wasted in this life while they thought that they were acquiring good by their deeds... Say: I am only a man like you, to whom has been revealed that your god is one God. So whoever would hope for the meeting with his Lord - let him do righteous work and not associate in the worship of his Lord anyone."
  },
  {
    "id": "surah-imran-shahidallah",
    "slug": "/ayats/surah-imran-shahidallah",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "آيَةُ الشَّهَادَةِ (شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ)",
    "titleUrdu": "آیت شہود و عدل",
    "titleEnglish": "Ayat of Divine Testimony (Shahidallahu Annahu)",
    "surahNameArabic": "آل عمران",
    "surahNameEnglish": "Ali ‘Imran",
    "surahNumber": 3,
    "ayahNumber": "18",
    "meaning": "The highest testimony in existence: Allah testifies to His own absolute oneness and eternal justice, joined by angels and people of knowledge.",
    "source": "Holy Quran - Surah Ali ‘Imran [3:18]",
    "badge": "Divine Testimony",
    "arabicText": "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ ۚ لَا إِلَهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ.",
    "transliteration": "Shahidallahu annahu la ilaha illa Huwa wal-mala’ikatu wa ulul-’ilmi qa’imam-bil-qist, la ilaha illa Huwal-’Azizul-Hakeem.",
    "translationEnglish": "Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise."
  },
  {
    "id": "surah-tawbah-hasbiyallah",
    "slug": "/ayats/surah-tawbah-hasbiyallah",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "titleArabic": "آيَةُ الْحَسْبِ (حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ)",
    "titleUrdu": "آیت حسبی اللہ (کفایت و توکل)",
    "titleEnglish": "Ayat of Sufficiency (Hasbiyallahu La Ilaha Illa Huwa)",
    "surahNameArabic": "التوبة",
    "surahNameEnglish": "At-Tawbah",
    "surahNumber": 9,
    "ayahNumber": "129",
    "meaning": "Unshakeable Tawakkul when people abandon, betray, or oppose you; declaring that the Lord of the Great Throne is alone sufficient.",
    "source": "Sunan Abi Dawud (Hadith 5081)",
    "badge": "7 Times Sufficiency",
    "arabicText": "فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
    "transliteration": "Fa in tawallaw faqul hasbiyallahu la ilaha illa Huw, ‘alayhi tawakkaltu wa Huwa Rabbul-’Arshil-’Azeem.",
    "translationEnglish": "But if they turn away, say: Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne."
  },
  {
    "id": "surah-duha",
    "slug": "/ayats/surah-duha",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "سُورَةُ الضُّحَى (جَبْرُ الْخَاطِرِ)",
    "titleUrdu": "سورۃ الضحیٰ (تسکین و تسلی)",
    "titleEnglish": "Surah Ad-Duha (The Morning Hours / Divine Consolation)",
    "surahNameArabic": "الضحى",
    "surahNameEnglish": "Ad-Duha",
    "surahNumber": 93,
    "ayahNumber": "1-11",
    "meaning": "The sublime balm for depressed, abandoned, or grieving souls; Allah promises that the dark night will yield to morning light.",
    "source": "Sahih Al-Bukhari (Hadith 4950) & Sahih Muslim",
    "badge": "Depression Cure",
    "arabicText": "وَالضُّحَىٰ. وَاللَّيْلِ إِذَا سَجَىٰ. مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ. وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ. وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ.",
    "transliteration": "Wad-duha. Wal-layli idha saja. Ma wadda’aka Rabbuka wa ma qala. Wa lal-akhiratu khayrul-laka minal-ula. Wa lasawfa yu’teeka Rabbuka fatarda.",
    "translationEnglish": "By the morning brightness. And by the night when it covers with darkness. Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]. And the Hereafter is better for you than the first [life]. And your Lord is going to give you, and you will be satisfied."
  },
  {
    "id": "surah-inshirah",
    "slug": "/ayats/surah-inshirah",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "سُورَةُ الشَّرْحِ (فَإِنَّ مَعَ الْعُسْرِ يُسْرًا)",
    "titleUrdu": "سورۃ الانشراح (کشادگی سینہ)",
    "titleEnglish": "Surah Ash-Sharh (The Relief / Expansion of the Breast)",
    "surahNameArabic": "الشرح",
    "surahNameEnglish": "Ash-Sharh",
    "surahNumber": 94,
    "ayahNumber": "1-8",
    "meaning": "The divine law of alleviation: Hardship does not merely precede ease—ease is packaged inside the hardship itself.",
    "source": "Holy Quran - Surah Ash-Sharh [94:1-8]",
    "badge": "Relief with Hardship",
    "arabicText": "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ. وَوَضَعْنَا عَنْكَ وِزْرَكَ. الَّذِي أَنْقَضَ ظَهْرَكَ. وَرَفَعْنَا لَكَ ذِكْرَكَ. فَإِنَّ مَعَ الْعُسْرِ يُسْرًا. إِنَّ مَعَ الْعُسْرِ يُسْرًا. فَإِذَا فَرَغْتَ فَانْصَبْ. وَإِلَىٰ رَبِّكَ فَارْغَبْ.",
    "transliteration": "Alam nashrah laka sadrak. Wa wada’na ‘anka wizrak. Alladhi anqada dhahrak. Wa rafa’na laka dhikrak. Fa inna ma’al-’usri yusra. Inna ma’al-’usri yusra. Fa idha faraghta fansab. Wa ila Rabbika farghab.",
    "translationEnglish": "Did We not expand for you, [O Muhammad], your breast? And We removed from you your burden which had weighed upon your back. And raised high for you your repute. For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease. So when you have finished [your duties], then stand up [for worship]. And to your Lord direct [your] longing."
  },
  {
    "id": "surah-mulk-opening",
    "slug": "/ayats/surah-mulk-opening",
    "category": "sovereignty",
    "categoryLabel": "Sovereignty & Rizq",
    "titleArabic": "مَفَاتِيحُ سُورَةِ الْمُلْكِ (تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ)",
    "titleUrdu": "سورۃ الملک کی ابتدائی آیات (عذاب قبر سے محافظ)",
    "titleEnglish": "Opening of Surah Al-Mulk (The Protector from Grave Punishment)",
    "surahNameArabic": "الملك",
    "surahNameEnglish": "Al-Mulk",
    "surahNumber": 67,
    "ayahNumber": "1-5",
    "meaning": "Reflecting on the profound reality of mortality and purpose of creation; the defender in the darkness of the grave.",
    "source": "Jami` At-Tirmidhi (Hadith 2891) & Sunan Abi Dawud (1400)",
    "badge": "Grave Shield",
    "arabicText": "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ.",
    "transliteration": "Tabarakalladhi bi yadihil-mulku wa Huwa ‘ala kulli shay’in Qadeer. Alladhi khalaqal-mawta wal-hayata li yabluwakum ayyukum ahsanu ‘amala, wa Huwal-’Azizul-Ghafur.",
    "translationEnglish": "Blessed is He in whose hand is dominion, and He is over all things omnipotent - [He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving."
  },
  {
    "id": "surah-yasin-verse-58",
    "slug": "/ayats/surah-yasin-verse-58",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "سَلَامٌ قَوْلًا مِنْ رَبٍّ رَحِيمٍ (قَلْبُ الْقُرْآنِ)",
    "titleUrdu": "سلام قولاً من رب رحیم (دلِ قرآن)",
    "titleEnglish": "Salamun Qawlam Mir-Rabbir-Raheem (The Divine Salutation of Peace)",
    "surahNameArabic": "يس",
    "surahNameEnglish": "Ya-Sin",
    "surahNumber": 36,
    "ayahNumber": "58",
    "meaning": "The crowning greeting of Paradise: the Almighty Creator Himself salutes the inhabitants of Jannah with peace.",
    "source": "Holy Quran - Surah Ya-Sin [36:58]",
    "badge": "Peace of Paradise",
    "arabicText": "سَلَامٌ قَوْلًا مِنْ رَبٍّ رَحِيمٍ.",
    "transliteration": "Salamun qawlam-mir-Rabbir-Raheem.",
    "translationEnglish": "[And] \"Peace,\" a word from a Merciful Lord."
  },
  {
    "id": "surah-nur-ayat-an-nur",
    "slug": "/ayats/surah-nur-ayat-an-nur",
    "category": "greatest",
    "categoryLabel": "Greatest & Essential",
    "titleArabic": "آيَةُ النُّورِ (اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ)",
    "titleUrdu": "آیت النور",
    "titleEnglish": "Ayat an-Nur (The Verse of Divine Light)",
    "surahNameArabic": "النور",
    "surahNameEnglish": "An-Nur",
    "surahNumber": 24,
    "ayahNumber": "35",
    "meaning": "The highest mystical contemplation of divine revelation; the luminous glass of the believer’s heart ignited by faith.",
    "source": "Holy Quran - Surah An-Nur [24:35]",
    "badge": "Light Upon Light",
    "arabicText": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ.",
    "transliteration": "Allahu nurus-samawati wal-ard, mathalu nurihi kamishkatin feeha misbah, al-misbahu fee zujajah, az-zujajatu ka’annaha kawkabun durriyyuy-yuqadu min shajaratim-mubarakatin zaytunatil-la sharqiyyatiw-wa la gharbiyyah, yakadu zaytuha yudee’u wa law lam tamsas-hu nar, nurun ‘ala nur, yahdillahu li nurihi may-yasha’.",
    "translationEnglish": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills."
  },
  {
    "id": "surah-anbiya-job-dua",
    "slug": "/ayats/surah-anbiya-job-dua",
    "category": "healing",
    "categoryLabel": "Healing & Shifa",
    "titleArabic": "دُعَاءُ أَيُّوبَ عَلَيْهِ السَّلَامُ (أَنِّي مَسَّنِيَ الضُّرُّ)",
    "titleUrdu": "حضرت ایوب علیہ السلام کی دعا برائے شفا",
    "titleEnglish": "Dua of Prophet Ayyub for Chronic Illness & Healing",
    "surahNameArabic": "الأنبياء",
    "surahNameEnglish": "Al-Anbiya",
    "surahNumber": 21,
    "ayahNumber": "83",
    "meaning": "The golden etiquette of supplication during agonizing chronic sickness: stating personal vulnerability without complaint and appealing to infinite mercy.",
    "source": "Holy Quran - Surah Al-Anbiya [21:83]",
    "badge": "Miraculous Cure",
    "arabicText": "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ.",
    "transliteration": "Annee massaniyad-durru wa Anta Arhamur-Rahimeen.",
    "translationEnglish": "Indeed, adversity has touched me, and You are the Most Merciful of the merciful."
  },
  {
    "id": "surah-taha-rabbishrah-li",
    "slug": "/ayats/surah-taha-rabbishrah-li",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "دُعَاءُ مُوسَى عَلَيْهِ السَّلَامُ (رَبِّ اشْرَحْ لِي صَدْرِي)",
    "titleUrdu": "حضرت موسیٰ علیہ السلام کی دعا برائے فصاحت و آسانی",
    "titleEnglish": "Dua of Prophet Musa for Ease & Public Speaking (Rabbish-Rah Li)",
    "surahNameArabic": "طه",
    "surahNameEnglish": "Ta-Ha",
    "surahNumber": 20,
    "ayahNumber": "25-28",
    "meaning": "The supreme prayer for overcoming stage fright, speech impediments, intimidating interviews, and daunting confrontations.",
    "source": "Holy Quran - Surah Ta-Ha [20:25-28]",
    "badge": "Confidence & Speech",
    "arabicText": "رَبِّ اشْرَحْ لِي صَدْرِي. وَيَسِّرْ لِي أَمْرِي. وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي. يَفْقَهُوا قَوْلِي.",
    "transliteration": "Rabbish-rah li sadree. Wa yassir lee amree. Wahlul ‘uqdatam-mil-lisanee. Yafqahu qawlee.",
    "translationEnglish": "My Lord, expand for me my breast [with assurance]. And ease for me my task. And untie the knot from my tongue. That they may understand my speech."
  },
  {
    "id": "surah-baqarah-rabbana-atina",
    "slug": "/ayats/surah-baqarah-rabbana-atina",
    "category": "relief",
    "categoryLabel": "Relief & Tawbah",
    "titleArabic": "جَامِعُ الدُّعَاءِ (رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً)",
    "titleUrdu": "ربنا آتنا فی الدنیا حسنۃ (سب سے جامع قرآنی دعا)",
    "titleEnglish": "The Most Comprehensive Quranic Dua (Rabbana Atina)",
    "surahNameArabic": "البقرة",
    "surahNameEnglish": "Al-Baqarah",
    "surahNumber": 2,
    "ayahNumber": "201",
    "meaning": "The most comprehensive supplication ever revealed, encompassing every conceivable worldly blessing, every eternal gift, and total salvation.",
    "source": "Sahih Al-Bukhari (Hadith 4522) & Sahih Muslim (Hadith 2690)",
    "badge": "Universal Goodness",
    "arabicText": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    "transliteration": "Rabbana atina fid-dunya hasanataw-wa fil-akhirati hasanataw-wa qina ‘adhaban-nar.",
    "translationEnglish": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire."
  }
];

export const AYAT_CATEGORY_TABS = [
  {
    "id": "all",
    "label": "All Sacred Ayats"
  },
  {
    "id": "greatest",
    "label": "Greatest & Essential"
  },
  {
    "id": "protection",
    "label": "Protection & Ruqyah"
  },
  {
    "id": "healing",
    "label": "Healing & Shifa"
  },
  {
    "id": "relief",
    "label": "Relief & Tawbah"
  },
  {
    "id": "sovereignty",
    "label": "Sovereignty & Rizq"
  }
];
