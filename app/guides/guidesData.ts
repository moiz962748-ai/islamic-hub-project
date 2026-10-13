// Comprehensive Islamic Worship Guides Dataset (Ibadat)
export interface GuideStep {
  stepNumber: number;
  title: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  instruction: string;
  tips?: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideItem {
  slug: string;
  aliases?: string[];
  title: string;
  titleArabic: string;
  subtitle: string;
  description: string;
  category: 'salah' | 'pilgrimage' | 'dhikr' | 'core-tenets' | 'special' | 'purification';
  categoryLabel: string;
  readTime: string;
  authenticity: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  content: string;
  prerequisites: string[];
  virtues: string[];
  hadithReference: {
    text: string;
    source: string;
  };
  steps: GuideStep[];
  faqs: GuideFAQ[];
  specialData?: Record<string, unknown>;
}

export const guidesData: GuideItem[] = [
  {
    "slug": "namaz",
    "aliases": [
      "salah",
      "how-to-pray-namaz",
      "daily-prayers"
    ],
    "title": "How to Pray Namaz (Salah) Step-by-Step with Duas, Postures & Fiqh",
    "titleArabic": "كَيْفِيَّةُ صَلَاةِ الْمُسْلِمِ",
    "subtitle": "The comprehensive verified guide to performing the 5 daily obligatory prayers according to the authentic Sunnah.",
    "description": "Learn how to perform daily Namaz (Salah) from initial Takbeer to concluding Taslim with authentic Arabic recitations, clear transliteration, word-by-word English translations, physical postures, and mandatory Fiqh conditions.",
    "category": "salah",
    "categoryLabel": "Obligatory Prayer (Fard)",
    "readTime": "15 min read",
    "authenticity": "Sahih Al-Bukhari (631) & Sahih Muslim (397)",
    "arabicText": "اللهُ أَكْبَرُ - سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    "transliteration": "Allahu Akbar - Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk.",
    "translation": "Allah is the Greatest - Glory be to You, O Allah, and all praise is Yours; blessed is Your Name, exalted is Your Majesty, and there is no deity worthy of worship besides You.",
    "content": "Learn how to perform daily Namaz (Salah) from initial Takbeer to concluding Taslim with authentic Arabic recitations, clear transliteration, word-by-word English translations, physical postures, and mandatory Fiqh conditions.",
    "prerequisites": [
      "Ritual Purity (Taharah via Wudu or Ghusl)",
      "Clean Clothes and pure prayer space (Taharat al-Makan)",
      "Proper Awrah covering (Men: navel to knee; Women: entire body except face and hands)",
      "Facing the Qiblah (direction of the Holy Ka’bah in Makkah)",
      "Entering of the prescribed prayer time and sincere heart intention (Niyyah)"
    ],
    "virtues": [
      "The Second Pillar of Islam and direct pillar of faith (Imad ad-Din)",
      "The first deed audited on the Day of Resurrection (Yawm al-Qiyamah)",
      "Shield against indecency, immorality, and spiritual negligence (Surah Al-Ankabut 29:45)",
      "Direct spiritual conversation with Allah five times daily in which inner peace descends"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) instructed: “Pray as you have seen me praying.”",
      "source": "Sahih Al-Bukhari (Hadith 631)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Niyyah & Takbeerat al-Ihram",
        "arabic": "اللَّهُ أَكْبَرُ",
        "transliteration": "Allahu Akbar",
        "translation": "Allah is the Greatest.",
        "instruction": "Stand upright (Qiyam) facing the Qiblah with feet shoulder-width apart. Form your intention in the heart. Raise both hands to earlobe level (or shoulder level) with palms facing the Qiblah, and utter the opening Takbeer.",
        "tips": "Do not articulate loud verbal intentions; the intention resides in the heart."
      },
      {
        "stepNumber": 2,
        "title": "Qiyam: Reciting Sana, Ta’awwudh & Surah Al-Fatiha",
        "arabic": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
        "transliteration": "Subhanakallahumma wa bihamdika, wa tabarakasmuka, wa ta’ala jadduka, wa la ilaha ghayruk.",
        "translation": "Glory be to You, O Allah, and all praise. Blessed is Your Name, exalted is Your Majesty, and there is no deity worthy of worship besides You.",
        "instruction": "Fold your right hand over your left wrist on the chest (or above navel). Recite the opening supplication (Sana), seek refuge from Shaytan, recite Bismillah, recite Surah Al-Fatiha followed by saying \"Ameen\", and recite an additional passage from the Quran.",
        "tips": "Reciting Surah Al-Fatiha is an essential pillar in every Rak’ah."
      },
      {
        "stepNumber": 3,
        "title": "Ruku (Bowing Posture) & Rising",
        "arabic": "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        "transliteration": "Subhana Rabbiyal-’Azeem (recited 3 times)",
        "translation": "Glory be to my Lord, the Magnificent.",
        "instruction": "Say \"Allahu Akbar\" and bow at a right angle with back straight and hands gripping the knees. Recite the glorification 3 times. Rise back to full standing saying: \"Sami’ Allahu liman hamidah\" (Allah hears whoever praises Him), then say: \"Rabbana wa lakal-hamd\" (Our Lord, to You belongs all praise).",
        "tips": "Keep your neck aligned with your spine; do not drop your head down or arch it backward."
      },
      {
        "stepNumber": 4,
        "title": "Sujood (Prostration) on Seven Limb Points",
        "arabic": "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        "transliteration": "Subhana Rabbiyal-A’la (recited 3 times)",
        "translation": "Glory be to my Lord, the Most High.",
        "instruction": "Say \"Allahu Akbar\" and descend into prostration. Seven body parts must touch the ground: forehead and nose tip, both palms, both knees, and toes of both feet facing the Qiblah. Recite the glorification 3 times. Sit up into Jalsah saying \"Allahu Akbar\", pause, and prostrate a second time.",
        "tips": "The servant is closest to Allah during prostration, so supplicate sincerely."
      },
      {
        "stepNumber": 5,
        "title": "Tashahhud & Durood-e-Ibrahim",
        "arabic": "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ...",
        "transliteration": "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu ‘alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh...",
        "translation": "All compliments, prayers, and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings...",
        "instruction": "Sit on your left foot with the right foot upright (Iftirash). Place palms on thighs. Recite the Tashahhud. Upon reaching \"Ash-hadu alla ilaha illallah\", raise the right index finger in testimony of Tawheed. Conclude with Durood upon Prophet Muhammad (PBUH).",
        "tips": "Keep the gaze directed towards your testifying index finger."
      },
      {
        "stepNumber": 6,
        "title": "Taslim (Concluding Salam)",
        "arabic": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        "transliteration": "As-salamu ‘alaykum wa rahmatullah",
        "translation": "May the peace and mercy of Allah be upon you.",
        "instruction": "Turn your face to the right shoulder and utter the Salam, then turn your face to the left shoulder and repeat the Salam. This concludes the prayer.",
        "tips": "Engage in Sunnah Istighfar and post-prayer Adhkar immediately following the Salam."
      }
    ],
    "faqs": [
      {
        "question": "What invalidates the prayer (Mufsidat al-Salah)?",
        "answer": "Salah is nullified by intentional speaking, eating, drinking, laughing out loud, breaking Wudu, exposing the Awrah, or excessive body movements unrelated to prayer."
      },
      {
        "question": "Can I recite the prayer supplications in English?",
        "answer": "The obligatory Quranic recitations and canonical phrases must be uttered in Arabic. Personal supplications during Sujood or after Tashahhud can be made in any language."
      },
      {
        "question": "What if I forget a Rak’ah or doubt the prayer count?",
        "answer": "Build upon what you are certain of (the lesser number), complete the prayer, and perform Sajdah Sahw (two prostrations of forgetfulness) before or after the concluding Salam."
      }
    ]
  },
  {
    "slug": "tahajjud",
    "aliases": [
      "salat-al-layl",
      "night-prayer",
      "qiyam-al-layl"
    ],
    "title": "How to Pray Tahajjud (Night Prayer) Step-by-Step, Time & Duas",
    "titleArabic": "صَلَاةُ التَّهَجُّدِ وَقِيَامُ اللَّيْلِ",
    "subtitle": "The supreme voluntary prayer prayed in the stillness of the last third of the night.",
    "description": "Complete authentic handbook on praying Tahajjud (Salat al-Layl). Learn the exact last-third-of-the-night timing calculation, optimal Rak’ah combinations, authentic Prophetic Duas, and spiritual rewards.",
    "category": "salah",
    "categoryLabel": "Sunnah & Voluntary (Nafl)",
    "readTime": "12 min read",
    "authenticity": "Sahih Al-Bukhari (1145) & Sahih Muslim (758)",
    "arabicText": "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، أَنْتَ الْحَقُّ وَوَعْدُكَ الْحَقُّ",
    "transliteration": "Allahumma lakal-hamdu Anta noorus-samawati wal-ardi wa man feehinna, wa lakal-hamdu Anta qayyimus-samawati wal-ardi wa man feehinna, Antal-Haqqu wa wa'dukal-haqq.",
    "translation": "O Allah, to You belongs all praise; You are the Light of the heavens and the earth and all therein. To You belongs all praise; You are the Sustainer of the heavens and the earth and all therein. You are the Truth, and Your promise is true.",
    "content": "Complete authentic handbook on praying Tahajjud (Salat al-Layl). Learn the exact last-third-of-the-night timing calculation, optimal Rak’ah combinations, authentic Prophetic Duas, and spiritual rewards.",
    "prerequisites": [
      "Performing the obligatory Isha prayer first",
      "Sleeping even for a brief interval prior to waking (per classical linguistic definition of Tahajjud)",
      "Fresh Wudu upon waking and brushing teeth with Miswak",
      "Facing the Qiblah in peaceful, quiet contemplation"
    ],
    "virtues": [
      "The most meritorious prayer after the five obligatory prayers (Sahih Muslim)",
      "Direct response to supplications when Allah descends to the lowest heaven in the last third of the night",
      "The established practice of the righteous throughout prophetic history",
      "A luminous protection from sin and a cure for spiritual ailments"
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) said: “Our Lord descends every night to the lowest heaven when the last third of the night remains, saying: Who calls upon Me that I may answer him? Who asks of Me that I may give him?”",
      "source": "Sahih Al-Bukhari (Hadith 1145)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Calculate the Last Third of the Night",
        "instruction": "Calculate the exact hours between Maghrib (sunset) and Fajr (dawn). Divide this duration into 3 equal parts. The final third up until Fajr adhan is the premier window for Tahajjud.",
        "tips": "Example: If Maghrib is at 6:00 PM and Fajr is at 6:00 AM (12 hours), the last third begins at 2:00 AM."
      },
      {
        "stepNumber": 2,
        "title": "Opening with Two Light Rak’ahs",
        "instruction": "Wake up, wash face, perform Wudu, and begin your Tahajjud with two light, brief Rak’ahs as was the habitual Sunnah of the Prophet (PBUH) before lengthening the recitations.",
        "tips": "Recite Surah Al-Kafirun in the 1st Rak’ah and Surah Al-Ikhlas in the 2nd Rak’ah."
      },
      {
        "stepNumber": 3,
        "title": "Praying in Pairs (Mathna Mathna)",
        "instruction": "Pray voluntary units in sets of two Rak’ahs, reciting long portions of the Quran with deep contemplation, prolonged Ruku, and extended Sujood.",
        "tips": "The Prophet usually prayed between 8 to 11 Rak’ahs including Witr."
      },
      {
        "stepNumber": 4,
        "title": "Sealing with Witr Prayer",
        "instruction": "Conclude your night vigil by performing the Witr prayer (1 or 3 Rak’ahs) if you have not already prayed it before sleeping.",
        "tips": "Recite Dua e Qunoot in the final Rak’ah of Witr for comprehensive blessings."
      }
    ],
    "faqs": [
      {
        "question": "Can I pray Tahajjud without sleeping first?",
        "answer": "Yes. While waking after sleep specifically qualifies as Tahajjud, praying voluntary night prayer before sleep is recognized as Qiyam al-Layl and carries immense reward."
      },
      {
        "question": "What if Fajr starts while I am praying?",
        "answer": "Complete the Rak’ah you are currently in and finish with Salam. The time for Tahajjud concludes immediately with the break of true dawn (Fajr time)."
      }
    ]
  },
  {
    "slug": "namaz-janaza",
    "aliases": [
      "namaz-e-janaza",
      "janazah",
      "janaza",
      "funeral-prayer"
    ],
    "title": "How to Pray Namaz Janaza (Funeral Prayer) Step-by-Step with 4 Takbeerat Duas",
    "titleArabic": "صَلَاةُ الْجَنَازَةِ عَلَى الْمَيِّتِ",
    "subtitle": "The communal obligation (Fard al-Kifayah) for the deceased Muslim consisting of 4 Takbeerat without Ruku or Sujood.",
    "description": "Complete verified step-by-step funeral prayer guide detailing the 4 Takbeerat, authentic supplications for adults and deceased children, congregational rows, Imam placement, and legal rulings.",
    "category": "special",
    "categoryLabel": "Communal Obligation (Fard al-Kifayah)",
    "readTime": "13 min read",
    "authenticity": "Sahih Al-Bukhari (1325) & Sahih Muslim (945)",
    "arabicText": "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا، اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الإِسْلَامِ",
    "transliteration": "Allahummaghfir li-hayyina wa mayyitina, wa shahidina wa gha'ibina, wa sagheerina wa kabeerina, wa dhakarina wa unthana. Allahumma man ahyaytahu minna fa-ahyihi 'alal-Islam.",
    "translation": "O Allah, forgive our living and our deceased, those present among us and those absent, our young and our old, our males and our females. O Allah, whomever You keep alive among us, keep him alive upon Islam.",
    "content": "Complete verified step-by-step funeral prayer guide detailing the 4 Takbeerat, authentic supplications for adults and deceased children, congregational rows, Imam placement, and legal rulings.",
    "prerequisites": [
      "Ritual purity (Wudu or Ghusl) for all attendees",
      "Deceased Muslim body has been washed (Ghusl al-Mayyit) and shrouded (Kafan)",
      "Deceased placed in front of the congregation facing Qiblah",
      "Prayer performed standing throughout—there is no Ruku and no Sujood"
    ],
    "virtues": [
      "Reward equal to a Mountain of Uhud (Qirat) for attending the prayer (Sahih Bukhari)",
      "Second Qirat of reward for accompanying the funeral until burial",
      "Intercession (Shafa’ah) granted for the deceased when prayed by 40 to 100 believers who associate none with Allah",
      "Profound reminder of mortality and the journey to the Hereafter"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) stated: “Whoever attends a funeral until the prayer is offered will have a Qirat (mountain of reward), and whoever attends until burial will have two Qirats, each equal to Mount Uhud.”",
      "source": "Sahih Al-Bukhari (Hadith 1325)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "1st Takbeer: Niyyah & Opening (Sana / Surah Al-Fatiha)",
        "arabic": "اللَّهُ أَكْبَرُ - سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَجَلَّ ثَنَاؤُكَ وَلَا إِلَهَ غَيْرُكَ",
        "transliteration": "Allahu Akbar. Subhanakallahumma wa bihamdika wa tabarakasmuka wa ta’ala jadduka wa jalla thana’uka wa la ilaha ghayruk.",
        "translation": "Allah is the Greatest. Glory be to You, O Allah, and all praise. Blessed is Your Name, exalted is Your Majesty, magnificent is Your praise, and there is no deity besides You.",
        "instruction": "Form intention in the heart to pray 4 Takbeerat of Janaza for the deceased. Raise hands to earlobes, say \"Allahu Akbar\", fold hands over chest, and recite Sana with \"Wa Jalla Thana’uka\" and Surah Al-Fatiha.",
        "tips": "Do not recite loud; keep the recitation quiet according to the Sunnah."
      },
      {
        "stepNumber": 2,
        "title": "2nd Takbeer: Durood-e-Ibrahim",
        "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ...",
        "transliteration": "Allahumma salli ‘ala Muhammadin wa ‘ala ali Muhammad, kama sallayta ‘ala Ibrahima wa ‘ala ali Ibrahim, innaka Hamidum-Majid...",
        "translation": "O Allah, bestow Your blessings upon Muhammad and the family of Muhammad, as You bestowed blessings upon Ibrahim and the family of Ibrahim. Verily, You are Praiseworthy, Glorious...",
        "instruction": "The Imam says \"Allahu Akbar\" (and followers repeat quietly). Without bowing or prostrating, recite Durood-e-Ibrahim upon the Prophet Muhammad (PBUH).",
        "tips": "Recite with sincere contemplation of peace upon the beloved Messenger (PBUH)."
      },
      {
        "stepNumber": 3,
        "title": "3rd Takbeer: Supplication for the Deceased",
        "arabic": "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا...",
        "transliteration": "Allahummaghfir lihayyina wa mayyitina, wa shahidina wa gha’ibina, wa saghirina wa kabirina, wa dhakarina wa unthana...",
        "translation": "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whomsoever You keep alive among us, keep him alive upon Islam...",
        "instruction": "Say the 3rd Takbeer. If the deceased is an adult, recite the comprehensive Prophetic forgiveness supplication. If the deceased is a minor child, recite the specific Dua making the child a forerunner and treasure in Paradise for the grieving parents.",
        "tips": "Pour out heartfelt supplications for Allah’s mercy and light in the grave."
      },
      {
        "stepNumber": 4,
        "title": "4th Takbeer & Concluding Salam",
        "arabic": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        "transliteration": "As-salamu ‘alaykum wa rahmatullah",
        "translation": "May the peace and mercy of Allah be upon you.",
        "instruction": "Say the 4th Takbeer. Pause briefly to make any final supplication for all believers. Then turn your head to the right and utter Salam (and to the left per common practice), ending the funeral prayer.",
        "tips": "Remain solemn and quiet following the prayer as the deceased is carried to burial."
      }
    ],
    "faqs": [
      {
        "question": "Where should the Imam stand for a male vs. female deceased body?",
        "answer": "According to authenticated Sunnah (Sahih Muslim 964), the Imam stands parallel to the head of a deceased male and parallel to the middle/waist of a deceased female."
      },
      {
        "question": "What if I arrive late and join during the 2nd or 3rd Takbeer?",
        "answer": "Join immediately with the Imam on the current Takbeer. When the Imam delivers the final Salam, you may quickly recite the missed Takbeerat before stepping away."
      },
      {
        "question": "Can women attend and pray Namaz Janaza?",
        "answer": "Yes. Women are permitted to pray Namaz Janaza in the mosque or prayer area behind the men’s rows, as proven by Aisha (RA) ordering the funeral of Sa’d ibn Abi Waqqas to be brought into the mosque so the women could pray over him."
      }
    ]
  },
  {
    "slug": "tasbeeh",
    "aliases": [
      "salat-ul-tasbeeh",
      "salat-al-tasbih",
      "tasbih-prayer"
    ],
    "title": "How to Pray Salat ul Tasbeeh Step-by-Step with 300 Tasbeehat Method",
    "titleArabic": "صَلَاةُ التَّسْبِيحِ",
    "subtitle": "The legendary four-Rak’ah prayer gifted by Prophet Muhammad (PBUH) to forgive all categories of sin.",
    "description": "Comprehensive guide to praying Salat-ul-Tasbeeh according to the authenticated Sunnah, featuring exact counts for all 300 Tasbeehat across four rak’ahs, optimal timing, and Hadith virtues.",
    "category": "salah",
    "categoryLabel": "Special Sunnah Prayer",
    "readTime": "11 min read",
    "authenticity": "Sunan Abi Dawud (1297) & Sunan Ibn Majah (1387)",
    "arabicText": "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
    "transliteration": "Subhanallahi, wal-hamdulillahi, wa la ilaha illallahu, wallahu Akbar.",
    "translation": "Glory be to Allah, all praise is due to Allah, there is no deity except Allah, and Allah is the Greatest.",
    "content": "Comprehensive guide to praying Salat-ul-Tasbeeh according to the authenticated Sunnah, featuring exact counts for all 300 Tasbeehat across four rak’ahs, optimal timing, and Hadith virtues.",
    "prerequisites": [
      "Standard Wudu (Ablution)",
      "Intention to pray 4 Rak’ahs of Salat-ul-Tasbeeh",
      "Facing the Qiblah in peaceful contemplation"
    ],
    "virtues": [
      "Forgiveness of ten categories of sins: past and future, old and new, unintentional and intentional, small and large, secret and open",
      "Can be performed daily, weekly on Fridays, monthly, annually, or at least once in a lifetime",
      "Transforms the heart with deep peace through 300 repetitions of the third Kalimah"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) told his uncle Abbas (RA): “If you pray this, Allah will forgive your sins: first and last, old and new, unintentional and intentional, minor and major, secret and open.”",
      "source": "Sunan Abi Dawud (Hadith 1297)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "The Sacred Formula (Tasbeeh)",
        "arabic": "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
        "transliteration": "Subhanallahi wal-hamdulillahi wa la ilaha illallahu wallahu Akbar",
        "translation": "Glory be to Allah, and all praise is due to Allah, and there is no deity worthy of worship but Allah, and Allah is the Greatest.",
        "instruction": "Memorize this 4-part formula. It is recited exactly 75 times in each Rak’ah, totaling 300 times across 4 Rak’ahs.",
        "tips": "Count quietly by pressing fingers against clothing or knees without moving fingers distractingly."
      },
      {
        "stepNumber": 2,
        "title": "Recitation Counts in 1st Rak’ah (75 Times)",
        "instruction": "15 times after Sana (before Surah Al-Fatiha); 10 times after reciting Surah; 10 times in Ruku; 10 times standing upright from Ruku (Qawmah); 10 times in 1st Sajdah; 10 times sitting between prostrations (Jalsah); 10 times in 2nd Sajdah. Total = 75.",
        "tips": "15 + 10 + 10 + 10 + 10 + 10 + 10 = 75 repetitions per Rak’ah."
      },
      {
        "stepNumber": 3,
        "title": "Repeat for 2nd, 3rd, and 4th Rak’ahs",
        "instruction": "Perform all remaining 3 Rak’ahs following the exact same distribution. Conclude with Tashahhud, Durood, and Taslim in the 4th Rak’ah.",
        "tips": "Complete all 4 Rak’ahs with one concluding Salam."
      }
    ],
    "faqs": [
      {
        "question": "When is the best time to perform Salat-ul-Tasbeeh?",
        "answer": "It can be performed at any time except during the three makrooh (forbidden) prayer times: sunrise, zenith/solar noon, and sunset."
      }
    ]
  },
  {
    "slug": "nafl",
    "aliases": [
      "nafl-prayers",
      "sunnah-prayers",
      "ishraq",
      "chasht",
      "duha",
      "awwabin"
    ],
    "title": "Complete Guide to Nafl Prayers: Ishraq, Chasht (Duha), Awwabin & Tahiyyat",
    "titleArabic": "النَّوَافِلُ وَالسُّنَنُ الْمُسْتَحَبَّةُ",
    "subtitle": "Elevate your spiritual rank through voluntary daily Sunnah prayers verified in Sahih Hadith.",
    "description": "Authentic handbook on voluntary Nafl prayers in Islam. Discover optimal timings, step-by-step methods, Sahih Hadith virtues, and forbidden prayer hours for Ishraq, Duha (Chasht), Awwabin, and Tahiyyatul Masjid.",
    "category": "salah",
    "categoryLabel": "Voluntary Devotions (Nawafil)",
    "readTime": "10 min read",
    "authenticity": "Sahih Muslim (748) & Jami` At-Tirmidhi (586)",
    "arabicText": "أُصَلِّي رَكْعَتَيْنِ صَلَاةَ النَّفْلِ تَقَرُّبًا إِلَى اللَّهِ تَعَالَى - رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    "transliteration": "Usalli rak'atayni salatan-nafli taqarruban ilallahi Ta'ala - Rabbi-j'alni muqeemas-salati wa min dhurriyyati, Rabbana wa taqabbal du'a.",
    "translation": "I intend to pray two Rak'ahs of voluntary prayer seeking nearness to Allah Almighty - My Lord, make me steadfast in prayer, and from my descendants. Our Lord, and accept my supplication.",
    "content": "Authentic handbook on voluntary Nafl prayers in Islam. Discover optimal timings, step-by-step methods, Sahih Hadith virtues, and forbidden prayer hours for Ishraq, Duha (Chasht), Awwabin, and Tahiyyatul Masjid.",
    "prerequisites": [
      "Standard Wudu",
      "Observing permissible prayer hours"
    ],
    "virtues": [
      "Compensates for any defects or shortcomings in mandatory Fard prayers",
      "Draws the believer closer to Allah until Allah loves them and protects all their senses (Hadith Qudsi)",
      "Salat al-Duha serves as daily charity (Sadaqah) for all 360 joints in the human body"
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) said: “Whoever prays Fajr in congregation, sits remembering Allah until sunrise, and then prays two Rak’ahs, receives the reward of complete Hajj and Umrah.”",
      "source": "Jami` At-Tirmidhi (Hadith 586)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Salat al-Ishraq (Post-Sunrise Prayer)",
        "instruction": "Prayed approximately 15-20 minutes after sunrise once the sun has risen above the horizon by the length of a spear. Prayed in sets of 2 or 4 Rak’ahs.",
        "tips": "Sit in Dhikr from Fajr until sunrise to receive the full reward."
      },
      {
        "stepNumber": 2,
        "title": "Salat al-Duha / Chasht (Mid-Morning Prayer)",
        "instruction": "Performed between mid-morning and approximately 15 minutes before Dhuhr. Usually prayed as 2, 4, 8, or 12 Rak’ahs in pairs.",
        "tips": "The optimal time is when the heat of the morning begins to intensify."
      },
      {
        "stepNumber": 3,
        "title": "Salat al-Awwabin (Post-Maghrib Prayer)",
        "instruction": "Prayed after the Sunnah of Maghrib and before Isha, consisting of 6 voluntary Rak’ahs.",
        "tips": "Referred to in Hadith as the prayer of those who constantly return to Allah in repentance."
      },
      {
        "stepNumber": 4,
        "title": "Tahiyyatul Masjid (Mosque Greeting Prayer)",
        "instruction": "Two Rak’ahs prayed immediately upon entering any mosque before sitting down.",
        "tips": "Fulfills the right of entering the house of Allah."
      }
    ],
    "faqs": [
      {
        "question": "What are the forbidden prayer times?",
        "answer": "Voluntary prayers are forbidden: from dawn until 15 minutes after sunrise, during exact solar noon (Istawa) for ~10 minutes before Dhuhr, and from Asr prayer until Maghrib sunset."
      }
    ]
  },
  {
    "slug": "umrah",
    "aliases": [
      "how-to-perform-umrah",
      "umrah-guide",
      "minor-pilgrimage"
    ],
    "title": "How to Perform Umrah Step-by-Step Guide with Duas, Rules & Map",
    "titleArabic": "كَيْفِيَّةُ أَدَاءِ الْعُمْرَةِ",
    "subtitle": "The definitive visual handbook covering Ihram, Tawaf, Sa’i, and Halq/Taqseer.",
    "description": "Complete practical step-by-step Umrah manual covering entering Ihram at the Miqat, Talbiyah, performing the 7 circuits of Tawaf, praying behind Maqam Ibrahim, drinking Zamzam, performing Sa’i between Safa and Marwah, and concluding with Halq or Taqseer.",
    "category": "pilgrimage",
    "categoryLabel": "Spiritual Pilgrimage (Ziyarah)",
    "readTime": "16 min read",
    "authenticity": "Sahih Al-Bukhari (1773) & Sahih Muslim (1218)",
    "arabicText": "لَبَّيْكَ اللَّهُمَّ عُمْرَةً - لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    "transliteration": "Labbayka Allahumma 'Umrah - Labbayk Allahumma Labbayk, Labbayka la shareeka laka Labbayk, innal-hamda wan-ni'mata laka wal-mulk, la shareeka lak.",
    "translation": "Here I am, O Allah, for Umrah. Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, blessings, and dominion are Yours. You have no partner.",
    "content": "Complete practical step-by-step Umrah manual covering entering Ihram at the Miqat, Talbiyah, performing the 7 circuits of Tawaf, praying behind Maqam Ibrahim, drinking Zamzam, performing Sa’i between Safa and Marwah, and concluding with Halq or Taqseer.",
    "prerequisites": [
      "Entering Ihram before crossing the designated geographic Miqat",
      "Men wearing two seamless white sheets (Izar and Rida)",
      "Avoiding all prohibitions of Ihram (perfume, cutting hair/nails, marital relations)"
    ],
    "virtues": [
      "Expiation for all sins committed between two Umrahs (Bukhari & Muslim)",
      "Removes spiritual poverty and material hardship just as a furnace purifies iron of impurities",
      "The guest of Allah whose supplications are directly answered"
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) said: “One Umrah to the next is an expiation for whatever sins occur between them.”",
      "source": "Sahih Al-Bukhari (Hadith 1773)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Step 1: Ihram & Talbiyah at the Miqat",
        "arabic": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
        "transliteration": "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk. Innal-hamda wan-ni’mata laka wal-mulk, la sharika lak.",
        "translation": "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and sovereignty belong to You. You have no partner.",
        "instruction": "Perform Ghusl, wear clean Ihram garments, make the intention: \"Labbayk Allahumma Umrah\", and constantly chant the Talbiyah until entering the sacred precinct in Makkah.",
        "tips": "Keep repeating the Talbiyah passionately during travel."
      },
      {
        "stepNumber": 2,
        "title": "Step 2: Tawaf al-Umrah (7 Circuits Around the Ka’bah)",
        "arabic": "بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ",
        "transliteration": "Bismillahi, Allahu Akbar (at the Black Stone)",
        "translation": "In the Name of Allah, Allah is the Greatest.",
        "instruction": "Enter Masjid al-Haram with your right foot. Start each circuit aligned with the Black Stone (Hajar al-Aswad) keeping the Ka’bah on your left. Complete seven anti-clockwise circuits. Between the Yemeni Corner and Black Stone, recite: \"Rabbana atina fid-dunya hasanah wa fil-akhirati hasanataw-wa qina ‘adhaban-nar\".",
        "tips": "Men uncover their right shoulder (Idtiba) during Tawaf and jog lightly (Raml) during the first three laps."
      },
      {
        "stepNumber": 3,
        "title": "Step 3: Two Rak’ahs at Maqam Ibrahim & Zamzam",
        "instruction": "Upon finishing Tawaf, cover your right shoulder. Pray two light Rak’ahs behind the Station of Abraham (Maqam Ibrahim) reciting Surah Al-Kafirun and Surah Al-Ikhlas. Then proceed to drink Zamzam water and make supplications.",
        "tips": "Drink Zamzam while standing and face the Ka’bah with deep prayer."
      },
      {
        "stepNumber": 4,
        "title": "Step 4: Sa’i Between Mount Safa and Mount Marwah (7 Laps)",
        "arabic": "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ",
        "transliteration": "Innas-Safa wal-Marwata min sha’a’irillah",
        "translation": "Indeed, as-Safa and al-Marwah are among the symbols of Allah.",
        "instruction": "Climb Mount Safa, face the Ka’bah, raise your hands, and praise Allah. Walk toward Marwah (Lap 1). Men jog lightly between the green marker lights. Reach Marwah and repeat praises (Lap 2). Seven completed trips end on Mount Marwah.",
        "tips": "Safa to Marwah is 1 lap; Marwah to Safa is lap 2. You conclude on Marwah on lap 7."
      },
      {
        "stepNumber": 5,
        "title": "Step 5: Halq (Shaving) or Taqseer (Trimming)",
        "instruction": "Men shave their entire head (Halq—greater reward) or trim hair evenly around the head (Taqseer). Women cut a fingertip length (approx 1 inch) from the ends of their hair. All Ihram restrictions are now completely lifted and the Umrah is complete!",
        "tips": "Congratulations! Your Umrah is now accomplished."
      }
    ],
    "faqs": [
      {
        "question": "Is Wudu required for Sa’i?",
        "answer": "Wudu is obligatory for Tawaf, but it is Sunnah (recommended, not strictly mandatory) for Sa’i."
      }
    ]
  },
  {
    "slug": "hajj",
    "aliases": [
      "how-to-perform-hajj",
      "hajj-guide",
      "major-pilgrimage"
    ],
    "title": "How to Perform Hajj Step-by-Step Day-by-Day Visual Guide",
    "titleArabic": "كَيْفِيَّةُ أَدَاءِ فَرِيضَةِ الْحَجِّ",
    "subtitle": "The 5th pillar of Islam explained across all 6 days of Dhul Hijjah.",
    "description": "Day-by-day complete visual guide to Hajj (8th to 13th Dhul Hijjah) covering Mina encampment, standing on the plains of Arafah, spending the night under the stars in Muzdalifah, the Ramy of Jamarat, animal sacrifice (Qurbani), Tawaf al-Ifadah, and Farewell Tawaf.",
    "category": "pilgrimage",
    "categoryLabel": "Fifth Pillar of Islam (Fard)",
    "readTime": "18 min read",
    "authenticity": "Sahih Al-Bukhari (1521) & Sahih Muslim (1218)",
    "arabicText": "لَبَّيْكَ اللَّهُمَّ حَجًّا - لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "transliteration": "Labbayka Allahumma Hajjan - La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in qadeer.",
    "translation": "Here I am, O Allah, for Hajj. There is no deity except Allah alone, with no partner. His is the dominion and His is all praise, and He has power over all things.",
    "content": "Day-by-day complete visual guide to Hajj (8th to 13th Dhul Hijjah) covering Mina encampment, standing on the plains of Arafah, spending the night under the stars in Muzdalifah, the Ramy of Jamarat, animal sacrifice (Qurbani), Tawaf al-Ifadah, and Farewell Tawaf.",
    "prerequisites": [
      "Financial and physical capability (Istita’ah)",
      "Entering Ihram for Hajj on the 8th of Dhul Hijjah",
      "Pure halal financial provision free from usury or illicit gains"
    ],
    "virtues": [
      "An accepted Hajj (Hajj Mabrur) has no reward other than Paradise (Jannah)",
      "Returns home purified of all personal sins just as the day born from mother’s womb",
      "The supreme annual gathering of universal brotherhood across all races and languages"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) declared: “Whoever performs Hajj for Allah and does not commit obscenity or wickedness will return as free from sin as the day his mother gave birth to him.”",
      "source": "Sahih Al-Bukhari (Hadith 1521)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Day 1: 8th Dhul Hijjah (Yawm at-Tarwiyah) — Journey to Mina",
        "instruction": "Enter Ihram from Makkah, pronounce intention for Hajj, and travel to the tent city of Mina. Pray Dhuhr, Asr, Maghrib, Isha, and Fajr of the 9th shortened but not combined.",
        "tips": "Spend the day in continuous Dhikr, Quran, and contemplation."
      },
      {
        "stepNumber": 2,
        "title": "Day 2: 9th Dhul Hijjah (Yawm Arafah) — The Pinnacle of Hajj",
        "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        "transliteration": "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa ‘ala kulli shay’in Qadir.",
        "translation": "There is no deity except Allah alone without partner. His is the sovereignty and His is the praise, and He is over all things omnipotent.",
        "instruction": "Depart Mina after sunrise to the plains of Arafah. Combine Dhuhr and Asr at Namirah. Stand before Allah in tears and supplication until sunset. Hajj IS Arafah!",
        "tips": "Do not leave Arafah before Maghrib sunset under any circumstance."
      },
      {
        "stepNumber": 3,
        "title": "Night of 9th / 10th: Muzdalifah Under the Open Stars",
        "instruction": "After sunset, proceed peacefully to Muzdalifah. Pray Maghrib and Isha combined. Spend the night sleeping under the stars and collect 49-70 pebbles for stoning.",
        "tips": "Collect small chickpea-sized pebbles (not large stones)."
      },
      {
        "stepNumber": 4,
        "title": "Day 3: 10th Dhul Hijjah (Yawm an-Nahr / Eid al-Adha)",
        "instruction": "Return to Mina. Stone the large Jamarah (Aqabah) with 7 pebbles. Offer the animal sacrifice (Hadi). Shave or trim hair (Tahallul al-Asghar). Proceed to Makkah for Tawaf al-Ifadah and Sa’i.",
        "tips": "After shaving hair, all Ihram restrictions except intimacy are temporarily lifted."
      },
      {
        "stepNumber": 5,
        "title": "Days 4–6: 11th–13th Dhul Hijjah (Ayyam at-Tashreeq)",
        "instruction": "Stay in Mina. Stone all three pillars (Small, Medium, Large) each afternoon with 7 pebbles each (21 daily). Conclude with Tawaf al-Wada (Farewell Tawaf) before leaving Makkah.",
        "tips": "Your Hajj is now complete! May Allah accept your Hajj Mabrur."
      }
    ],
    "faqs": [
      {
        "question": "What happens if a pilgrim misses Arafah?",
        "answer": "The standing at Arafah is the singular irreplaceable pillar of Hajj. Whoever misses the standing between Dhuhr of the 9th and Fajr of the 10th has missed Hajj entirely and must convert to Umrah and repeat Hajj in a future year."
      }
    ]
  },
  {
    "slug": "99-names-of-allah",
    "aliases": [
      "99-names",
      "asma-ul-husna",
      "names-of-allah"
    ],
    "title": "99 Names of Allah (Asma-ul-Husna): Arabic, Meaning, Audio & Benefits",
    "titleArabic": "أَسْمَاءُ اللَّهِ الْحُسْنَى",
    "subtitle": "Learn, memorize, and internalize the 99 Most Beautiful Divine Names of Allah.",
    "description": "Explore the 99 Names of Allah (Asma ul Husna) in authentic Arabic calligraphy, transliteration, rich English translations, and transformative spiritual virtues certified in Sahih Hadith.",
    "category": "dhikr",
    "categoryLabel": "Divine Theology & Remembrance",
    "readTime": "14 min read",
    "authenticity": "Sahih Al-Bukhari (2736) & Sahih Muslim (2677)",
    "arabicText": "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا - هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنُ الرَّحِيمُ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    "transliteration": "Wa lillahil-asma'ul-husna fad'oohu biha - Huwallahulladhi la ilaha illa Huwa, ar-Rahmanur-Raheem, al-Malikul-Quddoos, as-Salamul-Mu'min, al-Muhayminul-'Azeez, al-Jabbarul-Mutakabbir.",
    "translation": "And to Allah belong the best names, so invoke Him by them - He is Allah, other than whom there is no deity, the Most Gracious, the Most Merciful, the Sovereign, the Pure, the Source of Peace, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior.",
    "content": "Explore the 99 Names of Allah (Asma ul Husna) in authentic Arabic calligraphy, transliteration, rich English translations, and transformative spiritual virtues certified in Sahih Hadith.",
    "prerequisites": [
      "Open heart and sincere desire to know your Creator"
    ],
    "virtues": [
      "Guaranteed gateway to Jannah (Paradise) for anyone who memorizes, comprehends, and lives by them",
      "The highest form of spiritual worship: knowing Allah by His sublime attributes",
      "Every supplication made using the greatest name of Allah (Ism al-A’zam) is answered"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) stated: “Allah has ninety-nine names, one hundred minus one. Whoever memorizes and internalizes them will enter Paradise.”",
      "source": "Sahih Al-Bukhari (Hadith 2736)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Ar-Rahman & Ar-Raheem (The Most Gracious, The Most Merciful)",
        "arabic": "الرَّحْمَنُ - الرَّحِيمُ",
        "transliteration": "Ar-Rahman, Ar-Raheem",
        "translation": "The Infinitely Merciful to all creation, The Especially Merciful to the believers.",
        "instruction": "Reflect upon how divine mercy precedes divine anger. Manifest mercy in your daily interactions with all living beings.",
        "tips": "Say \"Bismillahir Rahmanir Raheem\" before starting every lawful action."
      },
      {
        "stepNumber": 2,
        "title": "Al-Malik & Al-Quddus (The Sovereign, The Most Sacred)",
        "arabic": "الْمَلِكُ - الْقُدُّوسُ",
        "transliteration": "Al-Malik, Al-Quddus",
        "translation": "The Absolute Ruler and Master of all realms; The Absolutely Pure, free from all flaw.",
        "instruction": "Recognize that worldly kingdoms fade and absolute sovereignty belongs solely to Allah.",
        "tips": "Recite \"Subhanal-Malikil-Quddus\" three times following the Witr prayer."
      },
      {
        "stepNumber": 3,
        "title": "As-Salam & Al-Mu’min (The Source of Peace, The Guardian of Faith)",
        "arabic": "السَّلَامُ - الْمُؤْمِنُ",
        "transliteration": "As-Salam, Al-Mu’min",
        "translation": "The Flawless Source of Peace and Safety; The Giver of Security and Affirmation of Truth.",
        "instruction": "Seek inner tranquility through surrender to Allah rather than temporary worldly attachments.",
        "tips": "Spread the greeting of peace (Salam) among those you know and those you do not know."
      }
    ],
    "faqs": [
      {
        "question": "What does \"Ahsaha\" (internalize them) mean in the Hadith?",
        "answer": "Scholars explain it encompasses: memorizing the names, understanding their linguistic and theological meanings, believing firmly in them, and calling upon Allah through them in supplication."
      }
    ]
  },
  {
    "slug": "five-pillars-of-islam",
    "aliases": [
      "5-pillars",
      "pillars-of-islam",
      "arkan-al-islam"
    ],
    "title": "The Five Pillars of Islam: Comprehensive Guide to Core Tenets & Fiqh",
    "titleArabic": "أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ",
    "subtitle": "The foundational architectural structure of Islamic belief, worship, and practice.",
    "description": "In-depth scholarly guide to the Five Pillars of Islam: Shahadah (Testimony of Faith), Salah (Prayer), Zakat (Almsgiving), Sawm (Ramadan Fasting), and Hajj (Pilgrimage) with scriptural evidence and practical implementation.",
    "category": "core-tenets",
    "categoryLabel": "Foundational Dogma (Arkan)",
    "readTime": "15 min read",
    "authenticity": "Sahih Al-Bukhari (8) & Sahih Muslim (16)",
    "arabicText": "بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ",
    "transliteration": "Buniyal-Islamu 'ala khams: Shahadati an la ilaha illallahu wa anna Muhammadan Rasulullah, wa iqamis-salati, wa eeta'iz-zakati, wa hajjil-bayti, wa sawmi Ramadan.",
    "translation": "Islam is built upon five pillars: testifying that there is no deity except Allah and that Muhammad is the Messenger of Allah, establishing regular prayer, paying Zakat, performing Hajj to the House, and fasting during Ramadan.",
    "content": "In-depth scholarly guide to the Five Pillars of Islam: Shahadah (Testimony of Faith), Salah (Prayer), Zakat (Almsgiving), Sawm (Ramadan Fasting), and Hajj (Pilgrimage) with scriptural evidence and practical implementation.",
    "prerequisites": [
      "Sincere faith in the Oneness of Allah and the Prophet’s messengerhood"
    ],
    "virtues": [
      "The foundational blueprint without which Islam cannot stand",
      "Harmonious balance between personal faith, daily worship, social welfare, and annual purification",
      "Binds 1.9 billion Muslims across the globe into one cohesive spiritual community"
    ],
    "hadithReference": {
      "text": "Prophet Muhammad (PBUH) said: “Islam is built upon five: testifying that there is no deity worthy of worship except Allah and Muhammad is His servant and messenger, establishing prayer, paying Zakat, performing Hajj, and fasting Ramadan.”",
      "source": "Sahih Al-Bukhari (Hadith 8)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pillar 1: Shahadah (Testimony of Faith)",
        "arabic": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        "transliteration": "Ash-hadu alla ilaha illallah, wa ash-hadu anna Muhammadar-Rasulullah.",
        "translation": "I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is the Messenger of Allah.",
        "instruction": "The gateway to Islam. Sincere belief in the heart articulated truthfully upon the tongue.",
        "tips": "Affirms absolute monotheism (Tawheed) and rejection of all false deities."
      },
      {
        "stepNumber": 2,
        "title": "Pillar 2: Salah (The Five Daily Prayers)",
        "instruction": "Establishing the mandatory daily communion with Allah at Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        "tips": "The foundational anchor of time, consciousness, and discipline for every believer."
      },
      {
        "stepNumber": 3,
        "title": "Pillar 3: Zakat (Obligatory Wealth Almsgiving)",
        "instruction": "Paying 2.5% of qualifying surplus wealth held above the Nisab threshold for a full lunar year to designated vulnerable recipients.",
        "tips": "Purifies accumulated wealth and guarantees social justice across society."
      },
      {
        "stepNumber": 4,
        "title": "Pillar 4: Sawm (Fasting the Holy Month of Ramadan)",
        "instruction": "Abstaining completely from food, drink, and intimacy from dawn (Fajr) to sunset (Maghrib) with conscious Taqwa.",
        "tips": "Trains self-control, spiritual empathy, and physical purification."
      },
      {
        "stepNumber": 5,
        "title": "Pillar 5: Hajj (Pilgrimage to Makkah)",
        "instruction": "Performing the sacred pilgrimage to the Holy House of Allah in Makkah once in a lifetime for those physically and financially able.",
        "tips": "The ultimate rehearsal for the Day of Judgment."
      }
    ],
    "faqs": [
      {
        "question": "Can someone be a Muslim while rejecting one of the five pillars?",
        "answer": "No. Rejecting the obligation of any of the five pillars removes a person from the fold of Islam by scholarly consensus, as they constitute the explicit foundation of the religion."
      }
    ]
  },
  {
    "slug": "tasbih-fatima-adhkar",
    "aliases": [
      "tasbeeh-fatima",
      "tasbih-fatima",
      "tasbeeh-fatima-adhkar",
      "daily-adhkar"
    ],
    "title": "Tasbih Fatima & Authentic Daily Adhkar (Morning, Evening, Bedtime)",
    "titleArabic": "تَسْبِيحُ فَاطِمَةَ الزَّهْرَاءِ وَالْأَذْكَارُ الْمَسْنُونَةُ",
    "subtitle": "The miraculous prophetic gift better than a servant and the highest tier of daily Dhikr.",
    "description": "Authentic guide to Tasbih Fatima (SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 34x) and prophetic morning, evening, and post-Salah supplications sourced directly from Sahih Hadith transmissions.",
    "category": "dhikr",
    "categoryLabel": "Prophetic Daily Adhkar",
    "readTime": "9 min read",
    "authenticity": "Sahih Al-Bukhari (3113) & Sahih Muslim (2727)",
    "arabicText": "سُبْحَانَ اللَّهِ (٣٣ مَرَّةً)، الْحَمْدُ لِلَّهِ (٣٣ مَرَّةً)، اللَّهُ أَكْبَرُ (٣٤ مَرَّةً) - لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    "transliteration": "Subhanallah (33 times), Alhamdulillah (33 times), Allahu Akbar (34 times) - La ilaha illallahu wahdahu la shareeka lah.",
    "translation": "Glory be to Allah (33 times), Praise be to Allah (33 times), Allah is the Greatest (34 times) - There is no deity except Allah alone with no partner.",
    "content": "Authentic guide to Tasbih Fatima (SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 34x) and prophetic morning, evening, and post-Salah supplications sourced directly from Sahih Hadith transmissions.",
    "prerequisites": [
      "Clean heart and physical presence before sleep or after prayer"
    ],
    "virtues": [
      "Gifted by the Prophet (PBUH) to his beloved daughter Fatima (RA) and Ali (RA) when they sought worldly household assistance",
      "Provides supernatural physical strength, stamina, and divine ease for daily hardships",
      "Erases personal sins even if they are as numerous as the foam of the sea"
    ],
    "hadithReference": {
      "text": "Ali (RA) narrated that the Prophet (PBUH) told him and Fatima (RA): “Shall I not teach you something better for you than a servant? When you retire to your bed, glorify Allah (SubhanAllah) thirty-three times, praise Him (Alhamdulillah) thirty-three times, and magnify Him (Allahu Akbar) thirty-four times.”",
      "source": "Sahih Al-Bukhari (Hadith 3113)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "SubhanAllah (Glory be to Allah) — 33 Times",
        "arabic": "سُبْحَانَ اللَّهِ",
        "transliteration": "SubhanAllah",
        "translation": "Glory be to Allah.",
        "instruction": "Count 33 times on the joints of your right hand fingers, declaring Allah above any deficiency or flaw.",
        "tips": "Count using finger joints for angelic testimony on Judgment Day."
      },
      {
        "stepNumber": 2,
        "title": "Alhamdulillah (All Praise is for Allah) — 33 Times",
        "arabic": "الْحَمْدُ لِلَّهِ",
        "transliteration": "Alhamdulillah",
        "translation": "All praise and gratitude belong to Allah.",
        "instruction": "Count 33 times, reflecting upon the countless blessings of health, safety, family, and faith.",
        "tips": "Fills the heavenly scales (Mizan) with immense divine rewards."
      },
      {
        "stepNumber": 3,
        "title": "Allahu Akbar (Allah is the Greatest) — 34 Times",
        "arabic": "اللَّهُ أَكْبَرُ",
        "transliteration": "Allahu Akbar",
        "translation": "Allah is Greater than all things.",
        "instruction": "Count 34 times (or 33 times followed by the Kalimah sealing phrase after prayer). This completes the 100 count.",
        "tips": "Retire to sleep in divine peace and angelic guardianship."
      }
    ],
    "faqs": [
      {
        "question": "When should Tasbih Fatima be recited?",
        "answer": "It is Sunnah to recite it when settling into bed at night to relieve physical exhaustion, and in the post-Salah Adhkar sequence immediately following the five daily obligatory prayers."
      }
    ]
  },
  {
    "slug": "wudu",
    "aliases": [
      "ablution",
      "how-to-make-wudu",
      "wudhu-guide"
    ],
    "title": "How to Perform Wudu (Ablution) Step-by-Step with Duas & Fiqh Rules",
    "titleArabic": "كَيْفِيَّةُ الْوُضُوءِ الشَّرْعِيِّ",
    "subtitle": "The complete authentic guide to ritual purification before prayer with Fard and Sunnah elements.",
    "description": "Master the step-by-step method of performing Wudu (ablution) according to the verified Sunnah. Learn the 4 Quranic obligations (Fara'idh), Sunnah enhancements, starting and ending supplications, and what invalidates ablution.",
    "category": "purification",
    "categoryLabel": "Ritual Purification",
    "readTime": "7 min read",
    "authenticity": "Surah Al-Ma'idah (5:6) & Sahih Al-Bukhari (159)",
    "arabicText": "بِسْمِ اللَّهِ - أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    "transliteration": "Bismillah - Ash-hadu alla ilaha illallahu wahdahu la shareeka lah, wa ash-hadu anna Muhammadan 'abduhu wa Rasooluh. Allahummaj'alnee minat-tawwabeena waj'alnee minal-mutatahhireen.",
    "translation": "In the name of Allah - I bear witness that there is no deity except Allah alone with no partner, and that Muhammad is His servant and Messenger. O Allah, make me of the repentant and make me of the purified.",
    "content": "Master the step-by-step method of performing Wudu (ablution) according to the verified Sunnah. Learn the 4 Quranic obligations (Fara'idh), Sunnah enhancements, starting and ending supplications, and what invalidates ablution.",
    "prerequisites": [
      "Pure, clean, running or undisturbed water (Ma' Mutlaq)",
      "Removal of water-resistant barriers (paint, nail polish, thick grease)",
      "Conscious intention (Niyyah) in the heart"
    ],
    "virtues": [
      "Minor sins drip away with every droplet of water falling from the limbs.",
      "Wudu limbs will radiate with glorious white light (Ghurran Muhajjalin) on the Day of Resurrection.",
      "Unlocks the 8 gates of Paradise upon reciting the post-Wudu Shahadah."
    ],
    "hadithReference": {
      "text": "Whoever performs Wudu thoroughly as commanded and then says: 'Ash-hadu alla ilaha illallah wa ash-hadu anna Muhammadan abduhu wa rasuluh', the eight gates of Paradise are opened for him to enter through whichever he wishes.",
      "source": "Sahih Muslim (Hadith 234)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Intention (Niyyah) & Saying Bismillah",
        "arabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "transliteration": "Bismillahir-Rahmanir-Raheem",
        "translation": "In the Name of Allah, the Entirely Merciful, the Especially Merciful.",
        "instruction": "Formulate sincere intention in the heart to purify oneself for Salah, then utter Bismillah.",
        "tips": "Intention is silent within the heart; do not announce it loudly."
      },
      {
        "stepNumber": 2,
        "title": "Washing Hands up to Wrists (3 Times)",
        "instruction": "Thoroughly wash both hands up to the wrists three times, interlacing fingers (Takhlil) to ensure water reaches between them.",
        "tips": "Begin with the right hand, then the left."
      },
      {
        "stepNumber": 3,
        "title": "Rinsing Mouth (Madmadah) (3 Times)",
        "instruction": "Take water into the mouth with the right hand, swirl it vigorously around gums and palate, and expel it. Repeat 3 times.",
        "tips": "Use Miswak or toothbrush beforehand when feasible."
      },
      {
        "stepNumber": 4,
        "title": "Sniffing Water into Nostrils (Istinshaq) (3 Times)",
        "instruction": "Sniff water gently into the nasal passages using the right hand, and blow it out using the left hand. Repeat 3 times.",
        "tips": "Do not inhale deeply if fasting to avoid water reaching the throat."
      },
      {
        "stepNumber": 5,
        "title": "Washing the Face from Hairline to Chin (3 Times)",
        "instruction": "Wash the entire face from the top of the forehead to the bottom of the chin, and from earlobe to earlobe three times.",
        "tips": "Run wet fingers through a thick beard (Takhlil al-Lihyah) to moisten the roots."
      },
      {
        "stepNumber": 6,
        "title": "Washing Forearms up to & Including Elbows (3 Times)",
        "instruction": "Wash the right forearm starting from fingertips up past the elbow three times, then wash the left arm identically.",
        "tips": "Ensure the elbows are completely submerged in the flow of water."
      },
      {
        "stepNumber": 7,
        "title": "Wiping the Entire Head (Masah) & Ears (Once)",
        "instruction": "Moisten hands and pass them from the front of the hairline back to the nape of the neck, then return them forward. Then wipe the interior of the ears with index fingers and exteriors with thumbs.",
        "tips": "Wiping the head is done once with fresh water, not three times."
      },
      {
        "stepNumber": 8,
        "title": "Washing Feet up to & Including Ankles (3 Times)",
        "instruction": "Wash the right foot including the heel and ankle bones three times, running the pinky finger of the left hand between toes. Repeat for the left foot.",
        "tips": "Pay special attention to the dry back of the heels."
      },
      {
        "stepNumber": 9,
        "title": "Concluding Dua of Shahadah",
        "arabic": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.",
        "transliteration": "Ash-hadu alla ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan ‘abduhu wa rasuluh. Allahummaj-’alni minat-tawwabeena waj-’alni minal-mutatahhireen.",
        "translation": "I bear witness that there is no deity except Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger. O Allah, make me of the repentant and make me of the purified.",
        "instruction": "Stand facing the Qiblah, raise the index finger slightly, and recite this concluding prayer.",
        "tips": "This authentic supplication opens all 8 gates of Paradise."
      }
    ],
    "faqs": [
      {
        "question": "What nullifies (breaks) Wudu?",
        "answer": "Passing gas, urine, feces, deep sleep lying down, loss of consciousness, emitting Madhy/Wady, and direct skin-to-skin touch of private parts without barrier (in Shafi'i/Hanbali Fiqh)."
      },
      {
        "question": "Does bleeding break Wudu?",
        "answer": "In Hanafi Fiqh, flowing blood breaks Wudu. In Shafi'i and Maliki Fiqh, minor bleeding does not invalidate Wudu."
      }
    ]
  },
  {
    "slug": "ghusl",
    "aliases": [
      "major-ritual-bath",
      "how-to-do-ghusl",
      "janabah-bath"
    ],
    "title": "How to Perform Ghusl (Full Ritual Bath) Step-by-Step with Sunnah Etiquette",
    "titleArabic": "كَيْفِيَّةُ الْغُسْلِ مِنَ الْجَنَابَةِ وَالْحَيْضِ",
    "subtitle": "The authentic guide to full-body ritual purification from Janabah, Hayd, and Nifas.",
    "description": "A comprehensive guide to performing Ghusl according to the authentic Sunnah of Aisha (RA) and Maymunah (RA). Covers the 3 obligatory acts (Fard), complete Sunnah methodology, and when Ghusl is compulsory versus recommended.",
    "category": "purification",
    "categoryLabel": "Ritual Purification",
    "readTime": "6 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 248) & Sahih Muslim (Hadith 316)",
    "arabicText": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الأَكْبَرِ طَهَارَةً لِلصَّلَاةِ تَقَرُّبًا إِلَى اللَّهِ تَعَالَى",
    "transliteration": "Bismillahir-Rahmanir-Raheem - Nawaytul-ghusla li-raf'il-hadathil-akbari taharatan lis-salati taqarruban ilallahi Ta'ala.",
    "translation": "In the name of Allah, the Most Gracious, the Most Merciful - I intend to perform Ghusl to remove major ritual impurity for purification for prayer, seeking nearness to Allah Almighty.",
    "content": "A comprehensive guide to performing Ghusl according to the authentic Sunnah of Aisha (RA) and Maymunah (RA). Covers the 3 obligatory acts (Fard), complete Sunnah methodology, and when Ghusl is compulsory versus recommended.",
    "prerequisites": [
      "Pure water sufficient to cover the entire body",
      "Removal of any substance preventing water from touching skin or hair (wax, glue, paint)",
      "Intention in the heart to lift major ritual impurity (Hadath Akbar)"
    ],
    "virtues": [
      "Restores complete ritual purity, allowing prayer, recitation of Quran, and entering mosques.",
      "Rewards equivalent to reviving an essential sunnah with every droplet of water used.",
      "Spiritual and physical renewal for the believer."
    ],
    "hadithReference": {
      "text": "When the Messenger of Allah (PBUH) performed Ghusl from Janabah, he would begin by washing his hands, then pour water with his right hand onto his left and wash his private parts, then perform Wudu as for prayer, then take water and run his fingers through his hair to reach the roots...",
      "source": "Sahih Al-Bukhari (Hadith 248)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Intention & Washing Hands",
        "instruction": "Make intention in the heart to remove major impurity, say Bismillah, and wash both hands up to the wrists three times.",
        "tips": "Niyyah lifts the state of Janabah or completion of menses."
      },
      {
        "stepNumber": 2,
        "title": "Cleansing Impurities from the Body",
        "instruction": "Using the left hand, thoroughly wash the private parts and any area afflicted with impurity (Najasah).",
        "tips": "Wash hands with soap or scrub against a surface after cleaning private parts."
      },
      {
        "stepNumber": 3,
        "title": "Performing Complete Wudu",
        "instruction": "Perform a standard Wudu as done for Salah. You may either wash feet now or delay them until concluding the bath.",
        "tips": "Ensure deep rinsing of mouth and nose to satisfy the obligatory purification."
      },
      {
        "stepNumber": 4,
        "title": "Pouring Water Over the Head (3 Times)",
        "instruction": "Pour water over the head 3 times, massaging the scalp with fingers until water penetrates all hair roots.",
        "tips": "Women with braided hair do not need to undo tight braids if water reaches the roots (Sahih Muslim)."
      },
      {
        "stepNumber": 5,
        "title": "Washing the Entire Body",
        "instruction": "Pour water over the right side of the body from shoulder to feet, then the left side, rubbing with hands (Dalk).",
        "tips": "Ensure water touches belly button, armpits, behind knees, and folds of skin."
      },
      {
        "stepNumber": 6,
        "title": "Washing the Feet (if delayed)",
        "instruction": "Step aside to a clean dry spot and wash both feet thoroughly up to the ankles.",
        "tips": "Ghusl is complete; you now possess valid Wudu for Salah without needing to perform Wudu again."
      }
    ],
    "faqs": [
      {
        "question": "Does Ghusl suffice for Salah without making Wudu again?",
        "answer": "Yes. The Prophet (PBUH) did not perform a new Wudu after concluding Ghusl, provided you did not touch private parts with bare palms afterwards."
      },
      {
        "question": "What are the only 3 obligatory (Fard) acts of Ghusl?",
        "answer": "1. Intention, 2. Rinsing mouth and nose thoroughly, 3. Ensuring pure water drenches every single part of the body and hair roots."
      }
    ]
  },
  {
    "slug": "tayammum",
    "aliases": [
      "dry-ablution",
      "how-to-do-tayammum",
      "earth-purification"
    ],
    "title": "How to Perform Tayammum (Dry Ablution) with Clean Dust or Stone",
    "titleArabic": "كَيْفِيَّةُ التَّيَمُّمِ بِالصَّعِيدِ الطَّيِّبِ",
    "subtitle": "The divine alternative to Wudu and Ghusl when water is absent or medically harmful.",
    "description": "Learn the correct method of performing Tayammum using pure earth, dust, or unglazed stone according to Surah An-Nisa (4:43) and Sahih Hadith transmissions of Ammar ibn Yasir (RA).",
    "category": "purification",
    "categoryLabel": "Ritual Purification",
    "readTime": "5 min read",
    "authenticity": "Holy Quran [4:43] & Sahih Al-Bukhari (Hadith 338)",
    "arabicText": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلَّهِ تَعَالَى",
    "transliteration": "Bismillahir-Rahmanir-Raheem - Nawaytut-tayammuma li-istibahatis-salati fardan lillahi Ta'ala.",
    "translation": "In the name of Allah, the Most Gracious, the Most Merciful - I intend to perform Tayammum to make prayer lawful, as an obligation for Allah Almighty.",
    "content": "Learn the correct method of performing Tayammum using pure earth, dust, or unglazed stone according to Surah An-Nisa (4:43) and Sahih Hadith transmissions of Ammar ibn Yasir (RA).",
    "prerequisites": [
      "Legitimate excuse: lack of water after searching, or medical prohibition where water causes severe harm",
      "Pure natural earth, soil, dust, sand, or natural clean stone (Sa'id Tayyib)",
      "Entering the time of prayer"
    ],
    "virtues": [
      "Exclusive divine mercy bestowed solely upon the Ummah of Prophet Muhammad (PBUH).",
      "Validates all prayers and worship just like water ablution until water becomes available.",
      "Prevents physical harm and hardship in severe cold or illness."
    ],
    "hadithReference": {
      "text": "The earth has been made for me a place of prayer and a means of purification, so whenever prayer time comes upon any man of my nation, let him pray.",
      "source": "Sahih Al-Bukhari (Hadith 335)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Intention & Bismillah",
        "arabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "transliteration": "Bismillahir-Rahmanir-Raheem",
        "translation": "In the Name of Allah, the Entirely Merciful, the Especially Merciful.",
        "instruction": "Form intention in your heart to lift impurity for prayer and pronounce Bismillah.",
        "tips": "Confirm water is truly unreachable or medically contraindicated."
      },
      {
        "stepNumber": 2,
        "title": "Striking the Earth with Palms",
        "instruction": "Strike pure clean earth, dust, sand, or clean unglazed stone once with both open palms.",
        "tips": "Fingers should be slightly spread."
      },
      {
        "stepNumber": 3,
        "title": "Blowing Off Excess Dust",
        "instruction": "Gently clap hands together or blow off excess heavy dust from the palms so only a fine residue remains.",
        "tips": "The purpose is symbolic spiritual obedience, not smearing heavy mud on the face."
      },
      {
        "stepNumber": 4,
        "title": "Wiping the Face",
        "instruction": "Wipe the entire face once with both palms, from forehead down to chin and cheek to cheek.",
        "tips": "One gentle wipe is sufficient."
      },
      {
        "stepNumber": 5,
        "title": "Wiping the Hands",
        "instruction": "Wipe the back of the right hand using the palm of the left hand up to the wrist, then wipe the back of the left hand using the right palm.",
        "tips": "In the authentic narration of Ammar (RA) in Bukhari and Muslim, wiping to the wrists is the primary verified Sunnah."
      }
    ],
    "faqs": [
      {
        "question": "What breaks Tayammum?",
        "answer": "Everything that invalidates regular Wudu, plus the availability of water, or the medical recovery permitting water usage."
      },
      {
        "question": "Can I perform Tayammum on a wall or carpet?",
        "answer": "If a stone or plaster wall has natural mineral dust, it is valid. On carpet or furniture, it is only valid if visible dust rises when patted."
      }
    ]
  },
  {
    "slug": "jummah-prayer",
    "aliases": [
      "friday-prayer",
      "how-to-pray-jummah",
      "salat-al-jumah"
    ],
    "title": "How to Pray Jummah (Friday Prayer): Khutbah, Sunnahs & Rulings",
    "titleArabic": "صَلَاةُ الْجُمُعَةِ وَآدَابُ يَوْمِ الْجُمُعَةِ",
    "subtitle": "The master weekly congregational prayer replacing Dhuhr for Muslim men.",
    "description": "A complete guide to the Friday congregational prayer (Salat al-Jummah). Learn the 2-unit Fard prayer, listening to the two Khutbahs, Sunnah prayers before and after, Ghusl, wearing clean white clothes, Surah Al-Kahf, and the special hour of Dua acceptance.",
    "category": "salah",
    "categoryLabel": "Congregational Salah",
    "readTime": "8 min read",
    "authenticity": "Surah Al-Jumu'ah [62:9-11] & Sahih Muslim (Hadith 857)",
    "arabicText": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِنْ يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَى ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ذَلِكُمْ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ تَعْلَمُونَ",
    "transliteration": "Ya ayyuhalladheena amanoo idha noodiya lis-salati miy-yawmil-jumu'ati fas'aw ila dhikrillahi wa dharul-bay', dhalikum khayrul-lakum in kuntum ta'lamoon.",
    "translation": "O you who have believed, when the call is proclaimed for prayer on the day of Jumu'ah, hasten to the remembrance of Allah and leave off business. That is best for you, if you only knew.",
    "content": "A complete guide to the Friday congregational prayer (Salat al-Jummah). Learn the 2-unit Fard prayer, listening to the two Khutbahs, Sunnah prayers before and after, Ghusl, wearing clean white clothes, Surah Al-Kahf, and the special hour of Dua acceptance.",
    "prerequisites": [
      "Fard Ayn (individual obligation) for adult, resident, healthy Muslim males",
      "Performed in congregation behind an Imam in a mosque or designated prayer space",
      "Delivery of the two-part Arabic Khutbah during Dhuhr prayer time"
    ],
    "virtues": [
      "Sins between two Fridays are expiated for the one who performs Ghusl and listens attentively.",
      "Walking to Friday prayer earns the reward of a whole year of fasting and standing in night prayer for every single step.",
      "Contains Sa'at al-Ijabah (The Hour of Response) on Friday afternoon wherein all Duas are answered."
    ],
    "hadithReference": {
      "text": "Whoever takes a bath on Friday, purifies himself as much as he can, uses hair oil or perfume, goes out to the mosque and does not separate two people sitting together, prays what is prescribed for him, and listens silently when the Imam speaks—his sins between this Friday and the previous one will be forgiven.",
      "source": "Sahih Al-Bukhari (Hadith 883)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Morning Sunnah Preparations",
        "instruction": "Perform full Ghusl, clip nails, use Miswak, apply non-alcoholic perfume (Attar), and wear clean white or finest clothes.",
        "tips": "Recite Surah Al-Kahf during Friday day or evening."
      },
      {
        "stepNumber": 2,
        "title": "Early Arrival & Tahiyyatul Masjid",
        "instruction": "Walk early to the mosque calmly. Upon entering, pray two units of Tahiyyatul Masjid before sitting down.",
        "tips": "Angels sit at mosque doors recording names in order of arrival until the Imam takes the pulpit."
      },
      {
        "stepNumber": 3,
        "title": "Listening Silently to the Two Khutbahs",
        "instruction": "Maintain absolute silence while the Imam delivers the sermon. Do not speak, gesture, touch phones, or say 'shush' to others.",
        "tips": "Even saying 'be quiet' to your neighbor cancels the reward of Jummah (Bukhari)."
      },
      {
        "stepNumber": 4,
        "title": "The 2-Rak'ah Congregational Fard Prayer",
        "instruction": "Stand shoulder-to-shoulder in straight rows behind the Imam. Pray two Rak'ahs aloud (Jahri) with the Imam reciting Surah Al-Fatiha and Surah Al-A'la / Al-Ghashiyah.",
        "tips": "Follow the Imam smoothly without racing or lagging."
      },
      {
        "stepNumber": 5,
        "title": "Post-Jummah Sunnah Prayers",
        "instruction": "Pray either 2 Rak'ahs at home (Bukhari) or 4 Rak'ahs in the mosque (Muslim) after the conclusion of Jummah.",
        "tips": "Engage in extensive Durood upon Prophet Muhammad (PBUH) for the remainder of Friday."
      }
    ],
    "faqs": [
      {
        "question": "Can women attend Jummah prayer?",
        "answer": "Yes. While not obligatory upon women, if a woman attends Jummah in the mosque with the congregation, it fully suffices for her Dhuhr prayer."
      },
      {
        "question": "What if I arrive when the Imam is in the second Ruku?",
        "answer": "If you catch the Imam in the second Ruku, you have caught Jummah; stand up after the Imam's Salam and complete one remaining Rak'ah. If you join after the second Ruku, complete it as 4 Rak'ahs of Dhuhr."
      }
    ]
  },
  {
    "slug": "eid-prayer",
    "aliases": [
      "salat-al-eid",
      "how-to-pray-eid",
      "eid-namaz-guide"
    ],
    "title": "How to Pray Eid Prayer (Eid al-Fitr & Eid al-Adha): Takbeerat & Method",
    "titleArabic": "كَيْفِيَّةُ صَلَاةِ الْعِيدَيْنِ (الْفِطْرِ وَالأَضْحَى)",
    "subtitle": "The complete step-by-step guide to praying the celebratory 2-Rak'ah Eid prayer.",
    "description": "Learn how to perform Eid al-Fitr and Eid al-Adha prayers with the extra Takbeerat according to both the Hanafi method (6 extra Takbeerat) and the majority Shafi'i/Hanbali/Maliki method (12 extra Takbeerat), including Sunnahs of Eid morning.",
    "category": "salah",
    "categoryLabel": "Celebratory Salah",
    "readTime": "6 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 956) & Sunan Abi Dawud (Hadith 1149)",
    "arabicText": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ",
    "transliteration": "Allahu Akbar, Allahu Akbar, Allahu Akbar, La ilaha illallahu, Wallahu Akbar, Allahu Akbar, wa lillahil-hamd.",
    "translation": "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest, there is no deity except Allah, and Allah is the Greatest, Allah is the Greatest, and unto Allah belongs all praise.",
    "content": "Learn how to perform Eid al-Fitr and Eid al-Adha prayers with the extra Takbeerat according to both the Hanafi method (6 extra Takbeerat) and the majority Shafi'i/Hanbali/Maliki method (12 extra Takbeerat), including Sunnahs of Eid morning.",
    "prerequisites": [
      "Conducted outdoors in an open Musalla / Eidgah or in large central mosques",
      "Payment of Sadaqat-ul-Fitr BEFORE the prayer on Eid al-Fitr",
      "No Adhan or Iqamah is called for Eid prayer"
    ],
    "virtues": [
      "Universal gathering of the Muslim Ummah demonstrating joy, forgiveness, and unity.",
      "Divine forgiveness proclaimed by angels at the departure from the Eid prayer ground.",
      "Following the unbroken annual Sunnah of Prophet Muhammad (PBUH)."
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) would not go out on the morning of Eid al-Fitr until he had eaten some dates in an odd number, and on Eid al-Adha he would not eat until he returned and ate from his sacrifice.",
      "source": "Sahih Al-Bukhari (Hadith 953) & At-Tirmidhi"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Sunnahs Before Leaving Home",
        "instruction": "Perform Ghusl, wear your finest clean clothing, apply fragrance, eat an odd number of dates (Eid al-Fitr), and proclaim the Eid Takbeerat loudly while walking.",
        "arabic": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ",
        "transliteration": "Allahu Akbar, Allahu Akbar, La ilaha illallahu wallahu Akbar, Allahu Akbar wa lillahil-hamd.",
        "translation": "Allah is the Greatest, Allah is the Greatest, there is no deity except Allah, and Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.",
        "tips": "Take one route to the Eid prayer ground and return home via a different route."
      },
      {
        "stepNumber": 2,
        "title": "First Rak'ah & Opening Takbeerat",
        "instruction": "Form intention for Eid prayer. The Imam pronounces Takbeer Tahreema. In the majority Sunnah method: 7 extra Takbeerat are proclaimed with hands raised to ears before reciting Surah Al-Fatiha. In Hanafi method: 3 extra Takbeerat are proclaimed after Thana.",
        "tips": "Say 'Subhanallah wal-hamdulillah wa la ilaha illallah wallahu Akbar' between Takbeerat."
      },
      {
        "stepNumber": 3,
        "title": "Recitation & Ruku of First Rak'ah",
        "instruction": "The Imam recites Surah Al-Fatiha and Surah Al-A'la or Surah Qaf aloud. Complete Ruku and two Sujood as in normal prayer.",
        "tips": "Follow the Imam calmly."
      },
      {
        "stepNumber": 4,
        "title": "Second Rak'ah & Additional Takbeerat",
        "instruction": "Rise for the second Rak'ah. In the majority method: 5 extra Takbeerat are proclaimed before reciting Surah Al-Fatiha. In Hanafi method: the Imam recites Fatiha and a Surah first, then pronounces 3 extra Takbeerat before bowing into Ruku on the 4th Takbeer.",
        "tips": "The Imam usually recites Surah Al-Ghashiyah or Surah Al-Qamar."
      },
      {
        "stepNumber": 5,
        "title": "Tashahhud, Salam & Listening to Khutbah",
        "instruction": "Complete Tashahhud, Durood, and Taslim. Remain seated to listen attentively to the Eid sermon delivered after the prayer.",
        "tips": "Unlike Jummah, the Eid Khutbah is delivered AFTER the prayer, not before."
      }
    ],
    "faqs": [
      {
        "question": "Is Eid prayer compulsory (Wajib or Fard)?",
        "answer": "In Hanafi Fiqh it is Wajib (mandatory) upon all adult men. In Hanbali Fiqh it is Fard Kifayah (communal obligation). In Shafi'i and Maliki Fiqh it is Sunnah Mu'akkadah (highly emphasized Sunnah)."
      },
      {
        "question": "What if I miss the Eid prayer in congregation?",
        "answer": "Scholars like Imam Bukhari and Anas ibn Malik allow praying two Rak'ahs at home with family if missed."
      }
    ]
  },
  {
    "slug": "salat-al-istikhara",
    "aliases": [
      "istikhara-prayer",
      "how-to-pray-istikhara",
      "guidance-prayer"
    ],
    "title": "How to Pray Salat al-Istikhara: Decision Making & Divine Counsel",
    "titleArabic": "صَلَاةُ الاسْتِخَارَةِ الشَّرْعِيَّةِ لِاتِّخَاذِ الْقَرَارَاتِ",
    "subtitle": "The Prophetic prayer for consulting Allah in marriage, career, and life choices.",
    "description": "A comprehensive guide on performing Salat al-Istikhara. Learn when to pray it, how to perform the two voluntary units, the exact Arabic text and translation of the Prophetic supplication, and how to understand its answer without waiting for dreams.",
    "category": "special",
    "categoryLabel": "Voluntary & Special Prayers",
    "readTime": "7 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 1166)",
    "arabicText": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ",
    "transliteration": "Allahumma innee astakheeruka bi-'ilmika wa astaqdiruka bi-qudratik, wa as'aluka min fadlikal-'azeem, fa-innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa Anta 'Allamul-ghuyoob.",
    "translation": "O Allah, I seek Your counsel through Your knowledge and I seek strength through Your power, and I ask of Your immense bounty. For You possess power and I possess none, and You know and I know not, and You are the Knower of the unseen.",
    "content": "A comprehensive guide on performing Salat al-Istikhara. Learn when to pray it, how to perform the two voluntary units, the exact Arabic text and translation of the Prophetic supplication, and how to understand its answer without waiting for dreams.",
    "prerequisites": [
      "A lawful (Mubah or Mustahabb) matter where you face a decision (not obligatory or forbidden actions)",
      "Performance of standard Wudu",
      "Openness of heart without pre-determined stubborn bias"
    ],
    "virtues": [
      "Removes indecision, psychological stress, and regret from major life junctions.",
      "Surrenders your destiny into the infinite wisdom of the Knower of the Unseen.",
      "Guarantees barakah and divine facilitation if good, or peaceful obstruction if harmful."
    ],
    "hadithReference": {
      "text": "The Messenger of Allah (PBUH) used to teach us Istikhara in all matters just as he used to teach us a Surah from the Quran...",
      "source": "Sahih Al-Bukhari (Hadith 1166)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Pray Two Voluntary Rak'ahs (Nafl)",
        "instruction": "Pray two non-obligatory units of prayer. It is recommended to recite Surah Al-Kafirun in the first Rak'ah after Al-Fatiha, and Surah Al-Ikhlas in the second.",
        "tips": "Pray at any permissible prayer time, preferably during quiet night hours or Duha."
      },
      {
        "stepNumber": 2,
        "title": "Praise Allah & Send Blessings on Prophet",
        "instruction": "Upon completing the prayer with Taslim, raise hands, praise Allah, and recite Durood Ibrahim upon Prophet Muhammad (PBUH).",
        "tips": "Framing supplications between Durood ensures swift acceptance."
      },
      {
        "stepNumber": 3,
        "title": "Recite the Dua al-Istikhara with Conviction",
        "arabic": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.",
        "transliteration": "Allahumma inni astakhiruka bi ‘ilmika wa astaqdiruka bi qudratika wa as’aluka min fadlikal-’azeem, fa innaka taqdiru wa la aqdir, wa ta’lamu wa la a’lam, wa Anta ‘Allamul-ghuyub...",
        "translation": "O Allah, I seek Your counsel through Your knowledge and seek power through Your power, and ask of You from Your immense favor. For You are capable and I am not, You know and I do not know...",
        "instruction": "Recite the full supplication, naming your specific decision at the words 'hadhal-amr' (this matter).",
        "tips": "Can be read from a card or phone if not memorized."
      },
      {
        "stepNumber": 4,
        "title": "Take Constructive Action with Tawakkul",
        "instruction": "Consult knowledgeable trustworthy people (Istisharah), then take practical action. Allah will smooth the way if good, or place natural barriers if harmful.",
        "tips": "Do not remain passive waiting for a dream."
      }
    ],
    "faqs": [
      {
        "question": "Does Istikhara guarantee a vivid dream?",
        "answer": "No. Authentic Hadith makes no mention of dreams. The real signs are inner clarity, ease in circumstances, or unexpected closure of doors."
      },
      {
        "question": "Can I repeat Istikhara multiple times?",
        "answer": "Yes, scholars recommend repeating it up to 7 times if indecision persists."
      }
    ]
  },
  {
    "slug": "salat-al-hajah",
    "aliases": [
      "prayer-of-need",
      "hajat-namaz",
      "how-to-pray-salat-al-hajah"
    ],
    "title": "How to Pray Salat al-Hajah (The Prayer of Need) for Urgent Prayers",
    "titleArabic": "صَلَاةُ الْحَاجَةِ لِطَلَبِ الْعَوْنِ مِنَ اللَّهِ",
    "subtitle": "The special voluntary prayer turning to Allah during pressing worldly and spiritual needs.",
    "description": "Learn how to perform Salat al-Hajah (Prayer of Need) when seeking urgent assistance from Allah for health, marriage, financial crises, exams, or spiritual relief.",
    "category": "special",
    "categoryLabel": "Voluntary & Special Prayers",
    "readTime": "5 min read",
    "authenticity": "Jami` At-Tirmidhi (Hadith 479) & Sunan Ibn Majah (Hadith 1384)",
    "arabicText": "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ",
    "transliteration": "La ilaha illallahul-Haleemul-Kareem, Subhanallahi Rabbil-'Arshil-'Azeem, Alhamdulillahi Rabbil-'Alameen, As'aluka moojibati rahmatik, wa 'aza'ima maghfiratik.",
    "translation": "There is no deity except Allah, the Most Forbearing, the Most Generous. Glory be to Allah, Lord of the Magnificent Throne. Praise be to Allah, Lord of all the worlds. I ask You for the means of Your mercy and the resolve for Your forgiveness.",
    "content": "Learn how to perform Salat al-Hajah (Prayer of Need) when seeking urgent assistance from Allah for health, marriage, financial crises, exams, or spiritual relief.",
    "prerequisites": [
      "A sincere Halal need conforming to Islamic law",
      "Performance of thorough, pristine Wudu",
      "Humility and surrender to divine decree"
    ],
    "virtues": [
      "Opens divine treasuries when worldly means are exhausted.",
      "Turns anxiety and helplessness into peaceful communion with the Creator.",
      "Follows the Prophetic Sunnah: Whenever a matter distressed him, he hurried to prayer."
    ],
    "hadithReference": {
      "text": "Whoever has a need from Allah or from any of the children of Adam, let him perform Wudu properly, pray two Rak'ahs, praise Allah, send blessings on the Prophet, and then say this Dua...",
      "source": "Jami` At-Tirmidhi (Hadith 479)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Perform Two or Four Rak'ahs Nafl",
        "instruction": "Pray 2 Rak'ahs with deep focus, long bowing (Ruku), and prolonged prostration (Sujood).",
        "tips": "In Sujood, pour out your heart with specific personal Duas."
      },
      {
        "stepNumber": 2,
        "title": "Praise Allah & Durood upon the Prophet",
        "instruction": "After the final Salam, sit facing Qiblah, glorify Allah with His Most Beautiful Names, and recite Durood Ibrahim.",
        "tips": "Combine with Ayat al-Kursi."
      },
      {
        "stepNumber": 3,
        "title": "Recite the Authentic Dua al-Hajah",
        "arabic": "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، لَا تَدَعْ لِي ذَنْبًا إِلَّا غَفَرْتَهُ، وَلَا هَمًّا إِلَّا فَرَّجْتَهُ، وَلَا حَاجَةً هِيَ لَكَ رِضًا إِلَّا قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِينَ.",
        "transliteration": "La ilaha illallahul-Haleemul-Kareem, Subhanallahi Rabbil-’Arshil-’Azeem, Alhamdulillahi Rabbil-’Alameen. As’aluka mujibati rahmatik, wa ‘aza’ima maghfiratik, wal-ghaneemata min kulli birr, was-salamata min kulli ithm, la tada’ li dhanban illa ghafartah, wa la hamman illa farrajtah, wa la hajatan hiya laka ridan illa qadaytaha ya Arhamar-Rahimeen.",
        "translation": "There is no deity except Allah, the Clement, the Generous. Glory be to Allah, Lord of the Magnificent Throne. All praise is due to Allah, Lord of the worlds. I ask You for that which guarantees Your mercy, the resolves for Your forgiveness, the benefit from every virtue, and safety from every sin...",
        "instruction": "Recite this invocation, then articulate your urgent specific need clearly.",
        "tips": "Repeat your supplication with tears and earnest pleading."
      }
    ],
    "faqs": [
      {
        "question": "Can I pray Salat al-Hajah for someone else?",
        "answer": "Yes, praying for a sick parent, a child in difficulty, or a friend in distress is noble and brings angelic prayers saying 'Amin, and for you the same!'"
      },
      {
        "question": "When is the best time to pray Salat al-Hajah?",
        "answer": "During the last third of the night before Fajr, when Allah descends to the lowest heaven offering: 'Who is asking of Me so I may grant him?'"
      }
    ]
  },
  {
    "slug": "salat-at-tawbah",
    "aliases": [
      "prayer-of-repentance",
      "tawbah-namaz",
      "how-to-pray-salat-tawbah"
    ],
    "title": "How to Pray Salat at-Tawbah (The Prayer of Repentance): Method & Conditions",
    "titleArabic": "صَلَاةُ التَّوْبَةِ لِغُفْرَانِ الذُّنُوبِ وَالْخَطَايَا",
    "subtitle": "The verified Prophetic prayer that guarantees absolute forgiveness for any committed sin.",
    "description": "Learn how to perform the two Rak'ah Prayer of Repentance (Salat at-Tawbah) based on the authentic Hadith of Abu Bakr as-Siddiq (RA). Understand the 4 conditions of sincere Tawbah (Tawbatan Nasuha) that wipe away sins instantly.",
    "category": "special",
    "categoryLabel": "Voluntary & Special Prayers",
    "readTime": "6 min read",
    "authenticity": "Sunan Abi Dawud (Hadith 1521) & Jami` At-Tirmidhi (Hadith 406)",
    "arabicText": "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ - رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    "transliteration": "Astaghfirullahalladhi la ilaha illa Huwal-Hayyul-Qayyumu wa atoobu ilayh - Rabbighfir lee wa tub 'alayya innaka Antat-Tawwabur-Raheem.",
    "translation": "I ask forgiveness from Allah, other than Whom there is no deity, the Ever-Living, the Sustainer of all, and I repent unto Him - My Lord, forgive me and accept my repentance; indeed, You are the Accepter of Repentance, the Merciful.",
    "content": "Learn how to perform the two Rak'ah Prayer of Repentance (Salat at-Tawbah) based on the authentic Hadith of Abu Bakr as-Siddiq (RA). Understand the 4 conditions of sincere Tawbah (Tawbatan Nasuha) that wipe away sins instantly.",
    "prerequisites": [
      "Genuine remorse in the heart for committing the sin",
      "Immediate cessation of the transgression",
      "Firm resolution never to return to the sin"
    ],
    "virtues": [
      "Wipes away past sins completely as if they never occurred.",
      "Transforms previous bad deeds into good deeds (Hasanat) on your scale (Surah Al-Furqan 25:70).",
      "Restores immediate spiritual intimacy and peace with Allah."
    ],
    "hadithReference": {
      "text": "There is no servant who commits a sin, then purifies himself properly and stands to pray two Rak'ahs, then asks Allah for forgiveness, except that Allah forgives him.",
      "source": "Sunan Abi Dawud (Hadith 1521)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Perform Thorough Wudu",
        "instruction": "Perform an attentive, conscious Wudu washing away sins with every drop.",
        "tips": "Do not delay; pray as soon as the realization of sin strikes your heart."
      },
      {
        "stepNumber": 2,
        "title": "Pray Two Solitary Rak'ahs",
        "instruction": "Stand alone in private and pray two voluntary units of prayer with deep humility, not talking to oneself about worldly affairs.",
        "tips": "Lengthen prostration (Sujood) and weep over your mistakes."
      },
      {
        "stepNumber": 3,
        "title": "Seek Forgiveness (Istighfar) & Sayyidul Istighfar",
        "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
        "transliteration": "Astaghfirullahal-’Azeem alladhi la ilaha illa Huwal-Hayyul-Qayyum wa atubu ilayh.",
        "translation": "I seek forgiveness from Allah the Tremendous, other than Whom there is no deity, the Ever-Living, the Sustainer of existence, and I repent unto Him.",
        "instruction": "Repeat this formula, then recite Sayyidul Istighfar with sincere tears.",
        "tips": "If the sin involved taking another person's property or rights, restitution must be made to complete Tawbah."
      }
    ],
    "faqs": [
      {
        "question": "What if I repeat the same sin again after repenting?",
        "answer": "Repent again immediately. The Prophet (PBUH) taught that as long as a servant repents sincerely each time, Allah never tires of forgiving him."
      },
      {
        "question": "Can Salat at-Tawbah be prayed during prohibited prayer times?",
        "answer": "Yes, in Shafi'i and Hanbali Fiqh, prayers with a specific cause (Dhawāt al-Asbāb) like repentance may be prayed at any time."
      }
    ]
  },
  {
    "slug": "salat-al-kusuf",
    "aliases": [
      "eclipse-prayer",
      "solar-eclipse-prayer",
      "salat-al-khusuf"
    ],
    "title": "How to Pray Salat al-Kusuf (Eclipse Prayer): Solar & Lunar Guide",
    "titleArabic": "صَلَاةُ الْكُسُوفِ وَالْخُسُوفِ عِنْدَ ظَاهِرَةِ الْكُسُوفِ",
    "subtitle": "The solemn celestial prayer performed with 4 bowings and 4 prostrations.",
    "description": "Learn the Sunnah methodology of performing the Eclipse Prayer (Salat al-Kusuf for solar, Salat al-Khusuf for lunar). Understand its unique physical structure featuring 2 Rak'ahs, 4 long Standings, 4 Ruku's, and 4 Sujood.",
    "category": "special",
    "categoryLabel": "Voluntary & Special Prayers",
    "readTime": "6 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 1044) & Sahih Muslim (Hadith 901)",
    "arabicText": "إِنَّ الشَّمْسَ وَالْقَمَرَ آيَتَانِ مِنْ آيَاتِ اللَّهِ لَا يَنْخَسِفَانِ لِمَوْتِ أَحَدٍ وَلَا لِحَيَاتِهِ، فَإِذَا رَأَيْتُمْ ذَلِكَ فَادْعُوا اللَّهَ وَكَبِّرُوا وَصَلُّوا وَتَصَدَّقُوا",
    "transliteration": "Innash-shamsa wal-qamara ayatani min ayatillahi la yankhasifani li-mawti ahadin wa la li-hayatih, fa-idha ra'aytum dhalika fad'ullaha wa kabbiroo wa salloo wa tasaddaqoo.",
    "translation": "Indeed, the sun and the moon are two of Allah's signs; they do not eclipse on account of the death or life of anyone. When you witness this, supplicate Allah, glorify Him, pray, and give in charity.",
    "content": "Learn the Sunnah methodology of performing the Eclipse Prayer (Salat al-Kusuf for solar, Salat al-Khusuf for lunar). Understand its unique physical structure featuring 2 Rak'ahs, 4 long Standings, 4 Ruku's, and 4 Sujood.",
    "prerequisites": [
      "Observable occurrence of a solar or lunar eclipse",
      "Performed in congregation in the mosque or individually at home",
      "Continued until the eclipse clears"
    ],
    "virtues": [
      "Affirms that cosmic phenomena are signs of Allah's grandeur, not omens of death or birth.",
      "Wards off divine warning through charity, repentance, and prolonged Quranic recitation.",
      "Revives a rare, powerful prophetic sunnah."
    ],
    "hadithReference": {
      "text": "The sun and the moon are two signs of the signs of Allah; they do not eclipse for the death or life of anyone. When you see them, invoke Allah, declare His greatness, pray, and give charity.",
      "source": "Sahih Al-Bukhari (Hadith 1044)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Commencement Without Adhan",
        "instruction": "Call people by saying 'As-Salatu Jami'ah' (Prayer is gathered). No Adhan or Iqamah is called.",
        "tips": "Gather in the main mosque."
      },
      {
        "stepNumber": 2,
        "title": "First Rak'ah: Standing & First Ruku",
        "instruction": "Recite Surah Al-Fatiha and a long chapter (e.g. Surah Al-Baqarah). Bow into a prolonged Ruku glorifying Allah.",
        "tips": "Recitation is aloud in the majority Sunnah."
      },
      {
        "stepNumber": 3,
        "title": "First Rak'ah: Second Standing & Second Ruku",
        "instruction": "Rise saying 'Sami'allahu liman hamidah', but do NOT go down to Sujood. Stand again and recite Al-Fatiha and another long Surah, then bow into a second long Ruku.",
        "tips": "This second bowing is unique to the Eclipse Prayer."
      },
      {
        "stepNumber": 4,
        "title": "Sujood of the First Rak'ah",
        "instruction": "Rise from the second Ruku and perform two very long prostrations (Sujood).",
        "tips": "Praise Allah intensely in prostration."
      },
      {
        "stepNumber": 5,
        "title": "Second Rak'ah (Identical Structure)",
        "instruction": "Stand for the second Rak'ah and repeat the exact structure: 2 long Standings, 2 long Ruku's, and 2 Sujood.",
        "tips": "Complete with Tashahhud and Taslim, followed by a brief sermon reminding people of the Day of Judgment."
      }
    ],
    "faqs": [
      {
        "question": "What is the total number of Ruku in Eclipse Prayer?",
        "answer": "There are exactly 4 Ruku's (bowings) and 4 Sujood across the two units of prayer."
      },
      {
        "question": "What should be done if the eclipse finishes during prayer?",
        "answer": "Complete the prayer swiftly with normal length; if the eclipse ends before you start, no prayer is performed."
      }
    ]
  },
  {
    "slug": "salat-al-istisqa",
    "aliases": [
      "prayer-for-rain",
      "rain-prayer",
      "salat-istisqa"
    ],
    "title": "How to Pray Salat al-Istisqa (The Prayer for Rain) in Times of Drought",
    "titleArabic": "صَلَاةُ الاسْتِسْقَاءِ لِطَلَبِ الْغَيْثِ وَالسُّقْيَا",
    "subtitle": "The communal humble prayer asking Allah to relieve drought and send merciful rain.",
    "description": "Learn how the community performs Salat al-Istisqa during severe water shortages. Covers fasting beforehand, heading to the open field in humble garments, the 2-unit prayer, reversing outer cloaks, and turning to Allah with deep Istighfar.",
    "category": "special",
    "categoryLabel": "Voluntary & Special Prayers",
    "readTime": "6 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 1012) & Sunan Abi Dawud (1173)",
    "arabicText": "اللَّهُمَّ أَسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا نَافِعًا غَيْرَ ضَارٍّ، عَاجِلًا غَيْرَ آجِلٍ، اللَّهُمَّ اسْقِ عِبَادَكَ وَبَهَائِمَكَ، وَانْشُرْ رَحْمَتَكَ، وَأَحْيِ بَلَدَكَ الْمَيِّتَ",
    "transliteration": "Allahumma asqina ghaythan mugheethan maree'an maree'an nafi'an ghayra darr, 'ajilan ghayra ajil. Allahummasqi 'ibadaka wa baha'imak, wanshur rahmatak, wa ahyi baladakal-mayyit.",
    "translation": "O Allah, grant us rain that relieves, wholesome, productive, beneficial and not harmful, prompt and not delayed. O Allah, give water to Your servants and Your livestock, spread Your mercy, and revive Your dead land.",
    "content": "Learn how the community performs Salat al-Istisqa during severe water shortages. Covers fasting beforehand, heading to the open field in humble garments, the 2-unit prayer, reversing outer cloaks, and turning to Allah with deep Istighfar.",
    "prerequisites": [
      "Preceded by days of communal repentance, fasting, giving charity, and rectifying injustices",
      "Going out to an open field in humble, unpretentious, worn clothing",
      "Taking elderly, young children, and animals to show utter vulnerability before Allah"
    ],
    "virtues": [
      "Connects natural rainfall directly to spiritual repentance and justice (Surah Nuh 71:10-12).",
      "Breaks arrogance and cultivates national humility.",
      "Delivers barakah and agricultural abundance."
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) went out to pray Istisqa wearing old, humble, unpretentious clothes, walking with dignity and humility, and prayed two Rak'ahs as in Eid, without an Adhan or Iqamah...",
      "source": "Sunan Abi Dawud (Hadith 1165) & At-Tirmidhi"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Communal Preparations",
        "instruction": "Fast for 3 days prior, repay debts, return usurped rights, and resolve feuds.",
        "tips": "Sin withholds rainfall from the heavens."
      },
      {
        "stepNumber": 2,
        "title": "Two-Rak'ah Prayer in Open Ground",
        "instruction": "Pray two Rak'ahs aloud similar to Eid prayer with extra Takbeerat, reciting Surah Al-A'la and Al-Ghashiyah.",
        "tips": "Conducted in open fields when possible."
      },
      {
        "stepNumber": 3,
        "title": "The Sermon & Reversing Cloaks",
        "instruction": "The Imam delivers a passionate sermon focusing on Istighfar, faces the Qiblah, raises his hands high above his head until the whiteness of armpits shows, and turns his cloak inside out.",
        "tips": "Turning the cloak symbolizes turning circumstances from drought to abundant fertility."
      },
      {
        "stepNumber": 4,
        "title": "Collective Supplication for Rain",
        "arabic": "اللَّهُمَّ أَسْقِنَا غَيْثًا مُغِيثًا، مَرِيئًا مَرِيعًا، نَافِعًا غَيْرَ ضَارٍّ، عَاجِلًا غَيْرَ آجِلٍ.",
        "transliteration": "Allahummas-qina ghaythan mugheethan, maree’am-maree’an, nafi’an ghayra darrin, ‘ajilan ghayra ajil.",
        "translation": "O Allah, send upon us a life-giving rain, pleasant and productive, beneficial and not harmful, prompt and not delayed.",
        "instruction": "The congregation raises hands high with palms turned toward the sky saying 'Amin'.",
        "tips": "Continue making Istighfar throughout the day."
      }
    ],
    "faqs": [
      {
        "question": "Can the Imam make Istisqa during Friday Jummah sermon?",
        "answer": "Yes, in Sahih Bukhari, a Bedouin entered during Friday Khutbah asking the Prophet (PBUH) to pray for rain, and he raised his hands immediately during the Khutbah; rain fell before prayer ended."
      }
    ]
  },
  {
    "slug": "sajdah-tilawat",
    "aliases": [
      "prostration-of-recitation",
      "sajdah-tilawah",
      "how-to-do-sajdah-tilawat"
    ],
    "title": "How to Perform Sajdah Tilawat (Prostration of Quranic Recitation)",
    "titleArabic": "سُجُودُ التِّلَاوَةِ عِنْدَ قِرَاءَةِ آيَاتِ السُّجُودِ",
    "subtitle": "The single prostration of adoration performed upon reciting or hearing the 15 Quranic verses.",
    "description": "Learn how to perform Sajdah Tilawat (Prostration of Recitation) inside Salah and outside Salah. Covers the 15 designated Quranic verses marked with a Sajdah dome, conditions, the authentic supplication, and Shaytan's weeping.",
    "category": "salah",
    "categoryLabel": "Sacred Prostrations",
    "readTime": "5 min read",
    "authenticity": "Sahih Muslim (Hadith 81) & Sahih Al-Bukhari (Hadith 1067)",
    "arabicText": "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ",
    "transliteration": "Sajada wajhiya lilladhi khalaqahu, wa shaqqa sam'ahu wa basarahu bi-hawlihi wa quwwatih, fatabarakallahu ahsanul-khaliqeen.",
    "translation": "My face prostrates unto Him Who created it, and opened its hearing and its sight by His might and His power. Blessed be Allah, the Best of Creators.",
    "content": "Learn how to perform Sajdah Tilawat (Prostration of Recitation) inside Salah and outside Salah. Covers the 15 designated Quranic verses marked with a Sajdah dome, conditions, the authentic supplication, and Shaytan's weeping.",
    "prerequisites": [
      "Reciting or listening intentionally to one of the 15 Sajdah verses in the Quran",
      "Facing the Qiblah",
      "Wudu (in the majority view of the four madhhabs)"
    ],
    "virtues": [
      "Causes Shaytan to withdraw to a corner weeping: 'Woe to me! The son of Adam was commanded to prostrate and he prostrated, so for him is Paradise; I was commanded to prostrate and I refused, so for me is Hellfire!'",
      "Immediate demonstration of obedience setting believers apart from prideful rejectors.",
      "Tremendous elevation of spiritual rank in Jannah."
    ],
    "hadithReference": {
      "text": "When the son of Adam recites a verse of prostration and prostrates, Satan retreats weeping, saying: 'Woe to me! The son of Adam was commanded to prostrate and he prostrated, so for him is Paradise...'",
      "source": "Sahih Muslim (Hadith 81)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Identify the Ayat of Sajdah",
        "instruction": "Recognize the mark (dome/line) in the Quran indicating an Ayah of Sajdah (e.g. Surah Al-A'raf 7:206, Maryam 19:58, Al-Hajj 22:18, etc.).",
        "tips": "There are 15 established prostrations in the Quran."
      },
      {
        "stepNumber": 2,
        "title": "Perform a Single Prostration",
        "instruction": "Say 'Allahu Akbar' and prostrate immediately onto the floor without standing up or raising hands. There is no Ruku or Taslim.",
        "tips": "Ensure 7 bone parts touch the ground: forehead and nose, two palms, two knees, and toes of both feet."
      },
      {
        "stepNumber": 3,
        "title": "Recite the Prophetic Prostration Supplication",
        "arabic": "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ.",
        "transliteration": "Sajada wajhiya lilladhi khalaqahu, wa shaqqa sam’ahu wa basarahu, bi hawlihi wa quwwatih, fatabarakallahu ahsanul-khaliqeen.",
        "translation": "My face has prostrated to the One Who created it, and formed its hearing and sight by His might and His power. Blessed is Allah, the Best of Creators.",
        "instruction": "You may also recite: 'Subhana Rabbiyal-A'la' three times.",
        "tips": "Rise from prostration saying Allahu Akbar."
      }
    ],
    "faqs": [
      {
        "question": "Can I perform Sajdah Tilawat without Wudu?",
        "answer": "Imam Bukhari, Ibn Taymiyyah, and Ibn Baz held that it is permissible without Wudu since it is an act of Dhikr rather than full Salah, though performing it with Wudu is superior."
      },
      {
        "question": "How is it done during regular Salah?",
        "answer": "Say Allahu Akbar, prostrate directly from standing, recite the Dua, say Allahu Akbar to rise back to standing, continue reciting the Surah, and then bow into normal Ruku."
      }
    ]
  },
  {
    "slug": "sajdah-sahw",
    "aliases": [
      "prostration-of-forgetfulness",
      "sajdah-sahwe",
      "how-to-fix-prayer-mistakes"
    ],
    "title": "How to Perform Sajdah Sahw (Prostration of Forgetfulness in Salah)",
    "titleArabic": "سُجُودُ السَّهْوِ لِإِصْلَاحِ السَّهْوِ فِي الصَّلَاةِ",
    "subtitle": "The essential Fiqh guide to rectifying additions, omissions, or doubts during prayer.",
    "description": "A clear, authoritative guide on how to perform the two Prostrations of Forgetfulness (Sajdah Sahw) to validate your prayer when you add a Rak'ah, omit a Sunnah, or doubt your prayer count.",
    "category": "salah",
    "categoryLabel": "Fiqh & Corrections",
    "readTime": "7 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 401) & Sahih Muslim (Hadith 571)",
    "arabicText": "سُبْحَانَ رَبِّيَ الأَعْلَى - سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو، اللَّهُمَّ اغْفِرْ لِي خَطَئِي وَنِسْيَانِي",
    "transliteration": "Subhana Rabbiyal-A'la - Subhana man la yanamu wa la yashoo, Allahummaghfir lee khata'ee wa nisyanee.",
    "translation": "Glory be to my Lord the Most High - Glory be to Him Who neither sleeps nor forgets; O Allah, forgive me my error and my forgetfulness.",
    "content": "A clear, authoritative guide on how to perform the two Prostrations of Forgetfulness (Sajdah Sahw) to validate your prayer when you add a Rak'ah, omit a Sunnah, or doubt your prayer count.",
    "prerequisites": [
      "A mistake of forgetfulness (Sahw) occurring in Salah (not intentional sabotage)",
      "Mistake caused by Addition (Ziyadah), Omission (Nuqsan), or Doubt (Shakk)",
      "Does not replace missing an obligatory pillar (Rukn) like Fatiha, Ruku, or Sujood"
    ],
    "virtues": [
      "Spiritual repair kit provided by the Lawgiver ensuring imperfect prayers are saved from invalidity.",
      "Humiliates Shaytan by rectifying the very distraction he attempted to cause.",
      "Brings tranquility and certainty to the worshipper."
    ],
    "hadithReference": {
      "text": "When any of you doubts in his prayer and does not know whether he has prayed three or four Rak'ahs, let him cast aside doubt and build upon what he is certain of, then perform two prostrations before the Taslim...",
      "source": "Sahih Muslim (Hadith 571)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Diagnose the Reason for Sahw",
        "instruction": "Identify whether your error was: 1. Adding a unit/posture, 2. Omitting an obligatory Sunnah (like first Tashahhud), or 3. Doubting the number of Rak'ahs.",
        "tips": "Build upon the lower number (certainty) when doubting."
      },
      {
        "stepNumber": 2,
        "title": "Determine Timing (Before or After Salam)",
        "instruction": "In Hanbali/Shafi'i Fiqh, prostrations are generally performed before Taslim. In Hanafi Fiqh, turn head to right for one Salam, perform two prostrations, then repeat Tashahhud and complete two Salams.",
        "tips": "Both positions are firmly grounded in authentic Hadiths of the Prophet (PBUH)."
      },
      {
        "stepNumber": 3,
        "title": "Execute the Two Prostrations",
        "instruction": "Say 'Allahu Akbar' and prostrate. Recite 'Subhana Rabbiyal-A'la' 3 times. Rise saying 'Allahu Akbar', sit briefly, then prostrate a second time saying 'Allahu Akbar'.",
        "tips": "Rise from the second prostration and conclude with Taslim."
      }
    ],
    "faqs": [
      {
        "question": "What if I forget to recite Surah Al-Fatiha?",
        "answer": "Al-Fatiha is a pillar (Rukn); Sajdah Sahw alone cannot replace it. You must return, recite Al-Fatiha, complete the unit, and then perform Sajdah Sahw."
      },
      {
        "question": "What if I forget to perform Sajdah Sahw until after leaving the prayer mat?",
        "answer": "If remembered shortly after, perform the two prostrations and make Salam. If a long time has elapsed, the prayer remains valid in most schools."
      }
    ]
  },
  {
    "slug": "taraweeh",
    "aliases": [
      "taraweeh-prayer",
      "ramadan-night-prayer",
      "how-to-pray-taraweeh"
    ],
    "title": "How to Pray Taraweeh: 8 or 20 Rak'ahs, Duas & Ramadan Etiquette",
    "titleArabic": "صَلَاةُ التَّرَاوِيحِ وَقِيَامُ رَمَضَانَ الْمُبَارَكِ",
    "subtitle": "The special illuminated night prayer performed exclusively during the month of Ramadan.",
    "description": "The definitive guide to praying Taraweeh during Ramadan. Understand the historic Sunnah, whether to pray 8 or 20 Rak'ahs, praying in 2-Rak'ah intervals, common Duas recited between sets, and concluding with Witr.",
    "category": "salah",
    "categoryLabel": "Ramadan & Night Prayers",
    "readTime": "8 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 2009) & Sahih Muslim (Hadith 759)",
    "arabicText": "سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ، سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ، سُبْحَانَ الْمَلِكِ الْحَيِّ الَّذِي لَا يَمُوتُ، سُبُّوحٌ قُدُّوسٌ رَبُّنَا وَرَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
    "transliteration": "Subhana dhil-mulki wal-malakoot, subhana dhil-'izzati wal-'azamati wal-haybati wal-qudrati wal-kibriya'i wal-jabaroot, subhanal-Malikil-Hayyilladhi la yamoot, Subboohun Quddoosun Rabbuna wa Rabbul-mala'ikati war-Rooh.",
    "translation": "Glorified is the Owner of the earthly dominion and the heavenly realm. Glorified is the Owner of might, majesty, awe, supreme power, greatness, and omnipotence. Glorified is the Sovereign, the Living Who never dies. All-Glorious, All-Holy, Lord of the angels and the Spirit (Gabriel).",
    "content": "The definitive guide to praying Taraweeh during Ramadan. Understand the historic Sunnah, whether to pray 8 or 20 Rak'ahs, praying in 2-Rak'ah intervals, common Duas recited between sets, and concluding with Witr.",
    "prerequisites": [
      "Conducted exclusively during Ramadan nights after Isha prayer until dawn",
      "Valid Isha prayer must be performed first",
      "Prayed in sets of 2 Rak'ahs each"
    ],
    "virtues": [
      "Prophetic guarantee: 'Whoever stands in prayer during Ramadan with faith and expecting reward, all his past sins will be forgiven.'",
      "Whoever prays with the Imam until he finishes receives the reward of standing the entire night in prayer.",
      "Completes the recitation and contemplation of the entire Holy Quran."
    ],
    "hadithReference": {
      "text": "Whoever stands with the Imam until he finishes, it will be recorded for him as if he spent the whole night in prayer.",
      "source": "Jami` At-Tirmidhi (Hadith 806) & Sunan Abi Dawud"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Perform 4 Fard & 2 Sunnah of Isha",
        "instruction": "Complete the obligatory Isha prayer and its confirmed 2-unit Sunnah first before starting Taraweeh.",
        "tips": "Do not rush into Taraweeh without offering Isha Sunnah."
      },
      {
        "stepNumber": 2,
        "title": "Pray in Sets of 2 Rak'ahs",
        "instruction": "Make intention for Qiyam Ramadan. The Imam recites portions of the Quran aloud. Conclude each set of 2 Rak'ahs with Taslim.",
        "tips": "Pray either 8 Rak'ahs (the Sunnah of Aisha RA) or 20 Rak'ahs (established by Umar ibn al-Khattab RA and consensus of the Sahabah)."
      },
      {
        "stepNumber": 3,
        "title": "Rest Period (Tarweeha) & Dhikr",
        "instruction": "After every 4 Rak'ahs, sit for a brief rest (Tarweeha). Glorify Allah, send blessings upon the Prophet, or sit in silent reflection.",
        "arabic": "سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ، سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ...",
        "tips": "No specific communal chant is obligatory; any authentic Dhikr or silent rest is Sunnah."
      },
      {
        "stepNumber": 4,
        "title": "Conclude with Witr Prayer",
        "instruction": "After concluding the final set of Taraweeh, pray 3 Rak'ahs of Witr including Dua al-Qunoot.",
        "tips": "If planning to pray Tahajjud later at night, you may delay Witr until before Suhoor."
      }
    ],
    "faqs": [
      {
        "question": "Can women pray Taraweeh at home?",
        "answer": "Yes, women may pray Taraweeh at home individually, lead a congregation of women, or attend the mosque provided Islamic etiquette is maintained."
      },
      {
        "question": "Is Taraweeh 8 Rak'ahs or 20 Rak'ahs?",
        "answer": "Both are fully valid Sunnahs. Prophet Muhammad (PBUH) frequently prayed 8 Rak'ahs plus 3 Witr, while Caliph Umar (RA) united the Sahabah upon 20 Rak'ahs in the Prophet's Mosque, which continues in Mecca and Medina to this day."
      }
    ]
  },
  {
    "slug": "itikaf",
    "aliases": [
      "seclusion-in-mosque",
      "spiritual-retreat",
      "itikaf-guide"
    ],
    "title": "How to Perform Itikaf: Mosque Retreat During Last 10 Days of Ramadan",
    "titleArabic": "الاعْتِكَافُ فِي الْمَسْجِدِ فِي الْعَشْرِ الأَوَاخِرِ",
    "subtitle": "The spiritual seclusion dedicated purely to worshipping Allah and finding Laylatul Qadr.",
    "description": "The complete guide to observing Itikaf (mosque retreat). Learn when to enter, conditions of validity, daily timetable of Quran and Dhikr, seeking Laylatul Qadr, and what actions invalidate the seclusion.",
    "category": "core-tenets",
    "categoryLabel": "Spiritual Devotion",
    "readTime": "8 min read",
    "authenticity": "Sahih Al-Bukhari (Hadith 2026) & Sahih Muslim (Hadith 1172)",
    "arabicText": "نَوَيْتُ سُنَّةَ الِاعْتِكَافِ فِي هَذَا الْمَسْجِدِ مَا دُمْتُ فِيهِ لِلَّهِ تَعَالَى - اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "transliteration": "Nawaytu sunnatal-i'tikafi fee hadhal-masjidi ma dumtu feehi lillahi Ta'ala - Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'annee.",
    "translation": "I intend the Sunnah retreat of Itikaf in this mosque for as long as I remain therein, for the sake of Allah Almighty - O Allah, You are Most Forgiving, and You love to forgive, so forgive me.",
    "content": "The complete guide to observing Itikaf (mosque retreat). Learn when to enter, conditions of validity, daily timetable of Quran and Dhikr, seeking Laylatul Qadr, and what actions invalidate the seclusion.",
    "prerequisites": [
      "Conducted in a mosque where 5 daily congregational prayers are established (Jami' Mosque)",
      "Intention purely to seek Allah's pleasure and disconnect from worldly vanity",
      "Must not leave the perimeter of the mosque except for essential human necessities (bathroom, eating if food unavailable)"
    ],
    "virtues": [
      "Uninterrupted devotion following the unbroken annual practice of Prophet Muhammad (PBUH) until his demise.",
      "Practically guarantees witnessing and worshipping during Laylatul Qadr (Night of Decree, better than 1,000 months).",
      "Detoxifies the soul from digital distractions, idle talk, and material consumerism."
    ],
    "hadithReference": {
      "text": "The Prophet (PBUH) used to observe Itikaf during the last ten days of Ramadan until Allah took his soul, then his wives observed Itikaf after him.",
      "source": "Sahih Al-Bukhari (Hadith 2026)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Entry on the 20th of Ramadan Before Maghrib",
        "instruction": "Arrive at the mosque before sunset on the 20th of Ramadan. Settle into your modest tent or designated prayer corner.",
        "tips": "Bring minimal essential clothing, Quran, prayer mat, and personal hygiene items."
      },
      {
        "stepNumber": 2,
        "title": "Structure Your Daily Routine",
        "instruction": "Divide your day into dedicated cycles: 1. Obligatory prayers in the first row, 2. Quran recitation and contemplation, 3. Morning and evening Adhkar, 4. Night Tahajjud, and 5. Earnest personal Dua.",
        "tips": "Turn off mobile phones or limit usage strictly to emergency calls."
      },
      {
        "stepNumber": 3,
        "title": "Hunt for Laylatul Qadr on Odd Nights",
        "instruction": "Intensify worship especially on the 21st, 23rd, 25th, 27th, and 29th nights. Recite the taught Dua: 'Allahumma innaka ‘afuwwun tuhibbul-’afwa fa’fu ‘anni'.",
        "tips": "Spend the dark hours standing in long Tahajjud."
      },
      {
        "stepNumber": 4,
        "title": "Concluding Itikaf at Sunset of Last Day",
        "instruction": "Conclude Itikaf as soon as the moon of Shawwal is sighted or the 30th day of Ramadan concludes at sunset.",
        "tips": "Head straight home or prepare for Eid morning."
      }
    ],
    "faqs": [
      {
        "question": "Can I leave the mosque during Itikaf to go to work or visit family?",
        "answer": "No. Leaving the mosque for work, visiting the sick, or social events invalidates the Sunnah Mu'akkadah 10-day Itikaf. You may only exit for strict physiological necessities."
      },
      {
        "question": "Is short-term (Nafl) Itikaf permissible?",
        "answer": "Yes, in Shafi'i and Hanbali Fiqh, a person can make intention for Itikaf for a few hours or a single day whenever visiting any mosque."
      }
    ]
  },
  {
    "slug": "zakat-guide",
    "aliases": [
      "zakat-calculator",
      "how-to-calculate-zakat",
      "zakat-rules"
    ],
    "title": "How to Calculate & Pay Zakat: Nisab, Rates, Eligible Categories & Fiqh",
    "titleArabic": "فِقْهُ الزَّكَاةِ وَكَيْفِيَّةُ حِسَابِهَا وَمَصَارِفُهَا الشَّرْعِيَّةِ",
    "subtitle": "The complete practical guide to calculating your 2.5% annual wealth obligation.",
    "description": "Master the third pillar of Islam: Zakat. Learn how to calculate 2.5% on gold, silver, savings, stocks, and business inventory, determine current Nisab thresholds, deduct liabilities, and distribute to the 8 Quranic recipient categories.",
    "category": "core-tenets",
    "categoryLabel": "Core Pillars & Wealth",
    "readTime": "9 min read",
    "authenticity": "Surah At-Tawbah [9:60] & Sahih Al-Bukhari (Hadith 1395)",
    "arabicText": "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلَاتَكَ سَكَنٌ لَهُمْ - اللَّهُمَّ اجْعَلْهَا مَغْنَمًا وَلَا تَجْعَلْهَا مَغْرَمًا",
    "transliteration": "Khudh min amwalihim sadaqatan tutahhiruhum wa tuzakkeehim biha wa salli 'alayhim inna salataka sakanul-lahum - Allahummaj'alha maghnaman wa la taj'alha maghraman.",
    "translation": "Take from their wealth a charity by which you purify them and cause them increase, and invoke blessings upon them. Indeed, your blessings are reassurance for them - O Allah, make it a gain and do not make it a penalty.",
    "content": "Master the third pillar of Islam: Zakat. Learn how to calculate 2.5% on gold, silver, savings, stocks, and business inventory, determine current Nisab thresholds, deduct liabilities, and distribute to the 8 Quranic recipient categories.",
    "prerequisites": [
      "Ownership of wealth equal to or exceeding the Nisab threshold (87.48g gold or 612.36g silver)",
      "Hawl: The wealth has been held for one full lunar year (354 days)",
      "Wealth must be net surplus above basic living necessities and immediate debts"
    ],
    "virtues": [
      "Purifies wealth and protects assets from financial collapse and economic ruin.",
      "Expunges greed and bridges inequality between wealthy and impoverished brothers.",
      "Increases remaining wealth exponentially with divine Barakah."
    ],
    "hadithReference": {
      "text": "Islam is built upon five pillars: Testifying that none has the right to be worshipped but Allah and that Muhammad is His Messenger, establishing prayer, paying Zakat, performing Hajj, and fasting Ramadan.",
      "source": "Sahih Al-Bukhari (Hadith 8)"
    },
    "steps": [
      {
        "stepNumber": 1,
        "title": "Determine Current Nisab Threshold",
        "instruction": "Check today's market price of gold (87.48 grams) or silver (612.36 grams). The majority of contemporary scholars recommend the silver Nisab to benefit more poor recipients.",
        "tips": "If your net zakatable wealth exceeds this threshold, you are liable for Zakat."
      },
      {
        "stepNumber": 2,
        "title": "Calculate Zakatable Assets",
        "instruction": "Add up: 1. Cash in bank and hand, 2. Gold and silver jewelry/bullion, 3. Market value of business merchandise, 4. Tradable stocks and mutual funds, 5. Money owed to you that is guaranteed to be repaid.",
        "tips": "Personal homes, everyday clothes, furniture, and private vehicles are NOT zakatable."
      },
      {
        "stepNumber": 3,
        "title": "Deduct Short-Term Liabilities",
        "instruction": "Subtract immediate overdue bills, unpaid salaries, and current month's debt installments from your gross assets.",
        "tips": "Do not deduct long-term mortgage principal that is not yet due."
      },
      {
        "stepNumber": 4,
        "title": "Calculate 2.5% of Net Balance",
        "instruction": "Multiply your final net zakatable balance by 0.025 (2.5%) for lunar year calculations, or 2.577% if using a solar calendar year.",
        "tips": "Example: $10,000 net zakatable balance = $250 Zakat due."
      },
      {
        "stepNumber": 5,
        "title": "Distribute Directly to the 8 Quranic Categories",
        "instruction": "Deliver funds directly to eligible recipients specified in Surah At-Tawbah (9:60): the poor (Fuqara), destitute (Masakin), Zakat administrators, hearts to be reconciled, freeing captives, overburdened debtors, in the cause of Allah (Fi Sabilillah), and stranded travelers.",
        "tips": "You cannot give Zakat to parents, grandparents, children, grandchildren, or your spouse."
      }
    ],
    "faqs": [
      {
        "question": "Can Zakat be paid to immediate relatives?",
        "answer": "Yes, you can give Zakat to siblings, uncles, aunts, cousins, and in-laws if they are poor and eligible, earning double reward: charity and family ties."
      },
      {
        "question": "Is Zakat due on personal women's gold jewelry?",
        "answer": "In Hanafi Fiqh, Zakat is due on all gold and silver regardless of whether it is worn. In Shafi'i, Maliki, and Hanbali Fiqh, jewelry for customary personal use is exempt."
      }
    ]
  }
];

export const GUIDE_SLUG_MAP: Record<string, string> = {
  "namaz": "namaz",
  "salah": "namaz",
  "how-to-pray-namaz": "namaz",
  "tahajjud": "tahajjud",
  "salat-al-layl": "tahajjud",
  "qiyam-al-layl": "tahajjud",
  "namaz-janaza": "namaz-janaza",
  "namaz-e-janaza": "namaz-janaza",
  "namaz-janazah": "namaz-janaza",
  "namaz-e-janazah": "namaz-janaza",
  "janazah": "namaz-janaza",
  "janaza": "namaz-janaza",
  "funeral-prayer": "namaz-janaza",
  "tasbeeh": "tasbeeh",
  "salat-ul-tasbeeh": "tasbeeh",
  "salat-al-tasbih": "tasbeeh",
  "tasbih-prayer": "tasbeeh",
  "nafl": "nafl",
  "nafl-prayers": "nafl",
  "sunnah-prayers": "nafl",
  "umrah": "umrah",
  "how-to-perform-umrah": "umrah",
  "umrah-guide": "umrah",
  "hajj": "hajj",
  "how-to-perform-hajj": "hajj",
  "hajj-guide": "hajj",
  "99-names-of-allah": "99-names-of-allah",
  "99-names": "99-names-of-allah",
  "asma-ul-husna": "99-names-of-allah",
  "five-pillars-of-islam": "five-pillars-of-islam",
  "5-pillars": "five-pillars-of-islam",
  "pillars-of-islam": "five-pillars-of-islam",
  "tasbih-fatima-adhkar": "tasbih-fatima-adhkar",
  "tasbeeh-fatima": "tasbih-fatima-adhkar",
  "tasbih-fatima": "tasbih-fatima-adhkar",
  "tasbeeh-fatima-adhkar": "tasbih-fatima-adhkar",
  "daily-adhkar": "tasbih-fatima-adhkar",
  "adhkar": "tasbih-fatima-adhkar",
  "wudu": "wudu",
  "ablution": "wudu",
  "how-to-make-wudu": "wudu",
  "wudhu-guide": "wudu",
  "ghusl": "ghusl",
  "major-ritual-bath": "ghusl",
  "how-to-do-ghusl": "ghusl",
  "janabah-bath": "ghusl",
  "tayammum": "tayammum",
  "dry-ablution": "tayammum",
  "how-to-do-tayammum": "tayammum",
  "earth-purification": "tayammum",
  "jummah-prayer": "jummah-prayer",
  "friday-prayer": "jummah-prayer",
  "how-to-pray-jummah": "jummah-prayer",
  "salat-al-jumah": "jummah-prayer",
  "eid-prayer": "eid-prayer",
  "salat-al-eid": "eid-prayer",
  "how-to-pray-eid": "eid-prayer",
  "eid-namaz-guide": "eid-prayer",
  "salat-al-istikhara": "salat-al-istikhara",
  "istikhara-prayer": "salat-al-istikhara",
  "how-to-pray-istikhara": "salat-al-istikhara",
  "guidance-prayer": "salat-al-istikhara",
  "salat-al-hajah": "salat-al-hajah",
  "prayer-of-need": "salat-al-hajah",
  "hajat-namaz": "salat-al-hajah",
  "how-to-pray-salat-al-hajah": "salat-al-hajah",
  "salat-at-tawbah": "salat-at-tawbah",
  "prayer-of-repentance": "salat-at-tawbah",
  "tawbah-namaz": "salat-at-tawbah",
  "how-to-pray-salat-tawbah": "salat-at-tawbah",
  "salat-al-kusuf": "salat-al-kusuf",
  "eclipse-prayer": "salat-al-kusuf",
  "solar-eclipse-prayer": "salat-al-kusuf",
  "salat-al-khusuf": "salat-al-kusuf",
  "salat-al-istisqa": "salat-al-istisqa",
  "prayer-for-rain": "salat-al-istisqa",
  "rain-prayer": "salat-al-istisqa",
  "salat-istisqa": "salat-al-istisqa",
  "sajdah-tilawat": "sajdah-tilawat",
  "prostration-of-recitation": "sajdah-tilawat",
  "sajdah-tilawah": "sajdah-tilawat",
  "how-to-do-sajdah-tilawat": "sajdah-tilawat",
  "sajdah-sahw": "sajdah-sahw",
  "prostration-of-forgetfulness": "sajdah-sahw",
  "sajdah-sahwe": "sajdah-sahw",
  "how-to-fix-prayer-mistakes": "sajdah-sahw",
  "taraweeh": "taraweeh",
  "taraweeh-prayer": "taraweeh",
  "ramadan-night-prayer": "taraweeh",
  "how-to-pray-taraweeh": "taraweeh",
  "itikaf": "itikaf",
  "seclusion-in-mosque": "itikaf",
  "spiritual-retreat": "itikaf",
  "itikaf-guide": "itikaf",
  "zakat-guide": "zakat-guide",
  "zakat-calculator": "zakat-guide",
  "how-to-calculate-zakat": "zakat-guide",
  "zakat-rules": "zakat-guide"
};

export function getGuideBySlug(slug: string): GuideItem | undefined {
  const cleanSlug = slug.toLowerCase().trim().replace(/^\/guides\//, '').replace(/^\//, '').replace(/\/$/, '');
  const canonicalSlug = GUIDE_SLUG_MAP[cleanSlug] || cleanSlug;
  return guidesData.find(g => g.slug === canonicalSlug);
}

export function getAllGuideSlugs(): string[] {
  return Object.keys(GUIDE_SLUG_MAP);
}
