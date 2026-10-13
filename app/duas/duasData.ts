// Comprehensive Islamic Supplications Dataset (Duas)
export interface DuaItemDetail {
  id: string;
  slug: string;
  title: string;
  titleEnglish: string;
  titleArabic: string;
  titleUrdu: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  translationEnglish: string;
  translationUrdu: string;
  category: 'most-searched' | 'daily-routine' | 'protection' | 'forgiveness' | 'fasting' | 'guidance';
  categoryLabel: string;
  content: string;
  meaning: string;
  tldr: string;
  source: string;
  sourceBook: string;
  hadithNumber: string;
  authenticity: string;
  badge: string;
  benefits: string[];
  steps: Array<{ title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const DUAS_DATA: DuaItemDetail[] = [
  {
    "id": "dua-e-qunoot",
    "slug": "dua-e-qunoot",
    "title": "Dua al-Qunoot (Witr Prayer Supplication)",
    "titleEnglish": "Dua al-Qunoot (Witr Prayer Supplication)",
    "titleArabic": "دُعَاءُ الْقُنُوتِ",
    "titleUrdu": "دعائے قنوت (وتر نماز)",
    "arabicText": "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ.",
    "transliteration": "Allahumma inna nasta’eenuka wa nastaghfiruka wa nu’minu bika wa natawakkalu ‘alayka wa nuthni ‘alaykal-khayr, wa nashkuruka wa la nakfuruk, wa nakhla’u wa natruku may-yafjuruk. Allahumma iyyaka na’budu wa laka nusalli wa nasjud, wa ilayka nas’a wa nahfid, narju rahmataka wa nakhsha ‘adhabaka, inna ‘adhabaka bil-kuffari mulhaq.",
    "translation": "O Allah, we seek Your help and we ask Your forgiveness, we believe in You, we place our complete trust in You, and we praise You in the best manner. We thank You and are not ungrateful to You, and we reject and abandon anyone who disobeys You. O Allah, You alone do we worship, unto You alone do we pray and prostrate, toward You alone do we strive and serve. We yearn for Your mercy and fear Your punishment. Indeed, Your punishment encompasses the disbelievers.",
    "translationEnglish": "O Allah, we seek Your help and we ask Your forgiveness, we believe in You, we place our complete trust in You, and we praise You in the best manner. We thank You and are not ungrateful to You, and we reject and abandon anyone who disobeys You. O Allah, You alone do we worship, unto You alone do we pray and prostrate, toward You alone do we strive and serve. We yearn for Your mercy and fear Your punishment. Indeed, Your punishment encompasses the disbelievers.",
    "translationUrdu": "Ae Allah! Hum Tujh hi se madad maangte hain aur Tujh hi se bakhshish talab karte hain, aur Tujh par imaan rakhte hain aur Tujh par bharosa karte hain aur Teri behtareen tareef karte hain...",
    "category": "most-searched",
    "categoryLabel": "Most Searched & Prayer",
    "content": "Dua al-Qunoot is the canonical supplication of devotion, humility, and seeking divine guidance recited standing in the final Rak’ah of Witr prayer.",
    "meaning": "The essential supplication of utter submission, loyalty, and refuge recited during the Witr prayer.",
    "tldr": "Dua al-Qunoot is the canonical supplication of devotion, humility, and seeking divine guidance recited standing in the final Rak’ah of Witr prayer.",
    "source": "Sunan Abi Dawud (Hadith 1425) & Jami` At-Tirmidhi",
    "sourceBook": "Sunan al-Arba’ah",
    "hadithNumber": "Abu Dawud 1425 / Tirmidhi 464",
    "authenticity": "Sahih / Hasan Sahih",
    "badge": "Witr Essential",
    "benefits": [
      "Affirms pure Tawheed and sincere reliance on Allah alone.",
      "Secures divine protection against calamities and spiritual confusion.",
      "Sunnah of the Prophet Muhammad (PBUH) in regular night worship."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in the Final Rak’ah of Witr",
        "desc": "Perform the Witr prayer until the final Rak’ah after Surah Al-Fatiha and a Surah."
      },
      {
        "title": "Step 2: Utter Takbeer",
        "desc": "Raise hands to ears saying \"Allahu Akbar\" then fold hands back."
      },
      {
        "title": "Step 3: Recite Dua al-Qunoot",
        "desc": "Recite the Arabic text with presence of heart and humility before bowing into Ruku."
      }
    ],
    "faqs": [
      {
        "question": "What if I have not memorized Dua al-Qunoot yet?",
        "answer": "You may recite: \"Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina ‘adhaban-nar\" until you have memorized it."
      }
    ]
  },
  {
    "id": "safar-ki-dua",
    "slug": "safar-ki-dua",
    "title": "Dua for Travel & Journey (Safar Ki Dua)",
    "titleEnglish": "Dua for Travel & Journey (Safar Ki Dua)",
    "titleArabic": "دُعَاءُ السَّفَرِ",
    "titleUrdu": "سفر کی مسنون دعا",
    "arabicText": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الأَهْلِ.",
    "transliteration": "Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanallazi sakh-khara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas’aluka fi safarina hadhal-birra wat-taqwa, wa minal-’amali ma tarda. Allahumma hawwin ‘alayna safarana hadha watwi ‘anna bu’dah. Allahumma Antas-Sahibu fis-safar, wal-Khalifatu fil-ahl.",
    "translation": "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him Who has subjected this transport unto us, for we could never have subdued it by ourselves; and verily, unto our Lord we shall surely return. O Allah, we ask You on this journey of ours for righteousness and piety, and deeds that please You. O Allah, make this journey easy for us and roll up its distance. O Allah, You are our Companion in travel and the Guardian of our family.",
    "translationEnglish": "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him Who has subjected this transport unto us, for we could never have subdued it by ourselves; and verily, unto our Lord we shall surely return. O Allah, we ask You on this journey of ours for righteousness and piety, and deeds that please You. O Allah, make this journey easy for us and roll up its distance. O Allah, You are our Companion in travel and the Guardian of our family.",
    "translationUrdu": "Allah bohot bara hai. Pak hai Woh Zaat jis ne is sawaari ko hamare taabe kar diya halaankey hum isay qaboo mein lane wale na the, aur beshak hum apne Rab hi ki taraf lautne wale hain...",
    "category": "most-searched",
    "categoryLabel": "Most Searched & Travel",
    "content": "Safar ki Dua invokes divine protection and companionship on planes, vehicles, and long journeys while committing your family to Allah’s care.",
    "meaning": "Supplication for divine protection, ease of transportation, and security of loved ones during travel.",
    "tldr": "Safar ki Dua invokes divine protection and companionship on planes, vehicles, and long journeys while committing your family to Allah’s care.",
    "source": "Sahih Muslim (Hadith 1342)",
    "sourceBook": "Sahih Muslim - Kitab al-Hajj",
    "hadithNumber": "Hadith 1342",
    "authenticity": "Sahih (Highest Degree of Authenticity)",
    "badge": "Travel Safety",
    "benefits": [
      "Places traveler under angelic escort and divine preservation.",
      "Protects vehicle from road accidents and unforeseen delays.",
      "Safeguards family and property left behind at home."
    ],
    "steps": [
      {
        "title": "Step 1: Settle into Transport",
        "desc": "Board the car, plane, train, or ship peacefully."
      },
      {
        "title": "Step 2: Utter Three Takbeerat",
        "desc": "Say Allahu Akbar 3 times."
      },
      {
        "title": "Step 3: Recite the Prophetic Supplication",
        "desc": "Recite the full text reflecting upon the return to Allah."
      }
    ],
    "faqs": [
      {
        "question": "Should this be recited for daily local commutes?",
        "answer": "Yes, scholars recommend reciting at least the Quranic portion (Subhanallazi...) whenever riding any vehicle."
      }
    ]
  },
  {
    "id": "dua-e-istikhara",
    "slug": "dua-e-istikhara",
    "title": "Dua al-Istikhara (Seeking Divine Guidance in Decisions)",
    "titleEnglish": "Dua al-Istikhara (Seeking Divine Guidance in Decisions)",
    "titleArabic": "دُعَاءُ الاسْتِخَارَةِ",
    "titleUrdu": "دعائے استخارہ (فیصلوں میں رہنمائی)",
    "arabicText": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.",
    "transliteration": "Allahumma inni astakhiruka bi ‘ilmika, wa astaqdiruka bi qudratika, wa as’aluka min fadlikal-’azeem, fa innaka taqdiru wa la aqdir, wa ta’lamu wa la a’lam, wa Anta ‘Allamul-ghuyub. Allahumma in kunta ta’lamu anna hadhal-amra khayrun li fi deeni wa ma’ashi wa ‘aqibati amri faqdurhu li wa yassirhu li thumma barik li feeh, wa in kunta ta’lamu anna hadhal-amra sharrun li fi deeni wa ma’ashi wa ‘aqibati amri fasrifhu ‘anni wasrifni ‘anh, waqdur liyal-khayra haythu kana thumma ardini bih.",
    "translation": "O Allah, I seek Your counsel through Your knowledge, I seek power through Your power, and I ask of You from Your immense favor. For You are capable and I am not, You know and I do not know, and You are the Knower of the Unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood, and the outcome of my affairs, then decree it for me, facilitate it for me, and grant me barakah in it. And if You know that this matter is harmful for me in my religion, my livelihood, and the outcome of my affairs, then turn it away from me and turn me away from it, and decree good for me wherever it may be, and make me content with it.",
    "translationEnglish": "O Allah, I seek Your counsel through Your knowledge, I seek power through Your power, and I ask of You from Your immense favor. For You are capable and I am not, You know and I do not know, and You are the Knower of the Unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood, and the outcome of my affairs, then decree it for me, facilitate it for me, and grant me barakah in it. And if You know that this matter is harmful for me in my religion, my livelihood, and the outcome of my affairs, then turn it away from me and turn me away from it, and decree good for me wherever it may be, and make me content with it.",
    "translationUrdu": "Ae Allah! Main Tere ilm ke zariye se Tujh se bhalai maangta hoon aur Teri qudrat ke zariye se quwwat chahta hoon...",
    "category": "guidance",
    "categoryLabel": "Guidance & Decisions",
    "content": "Dua al-Istikhara is the gold standard Prophetic method for making major decisions, prayed after two non-obligatory Rak’ahs.",
    "meaning": "Surrendering life choices (marriage, career, relocation) to the supreme knowledge and decree of Allah.",
    "tldr": "Dua al-Istikhara is the gold standard Prophetic method for making major decisions, prayed after two non-obligatory Rak’ahs.",
    "source": "Sahih Al-Bukhari (Hadith 1166)",
    "sourceBook": "Sahih Al-Bukhari - Kitab at-Tahajjud",
    "hadithNumber": "Hadith 1166",
    "authenticity": "Sahih",
    "badge": "Decision Making",
    "benefits": [
      "Removes anxiety, indecision, and regret from major life forks.",
      "Aligns your path with divine wisdom and true spiritual blessing.",
      "Substitutes fortune telling or anxiety with serene Tawakkul."
    ],
    "steps": [
      {
        "title": "Step 1: Pray Two Voluntary Rak’ahs",
        "desc": "Perform two Rak’ahs of Nafl prayer with sincere intention."
      },
      {
        "title": "Step 2: Mention Your Specific Affair",
        "desc": "At the phrase \"hadhal-amr\" (this matter), name your decision."
      },
      {
        "title": "Step 3: Proceed with Trust",
        "desc": "Take practical action; Allah will ease the path if good, or close it if harmful."
      }
    ],
    "faqs": [
      {
        "question": "Must I see a dream after Istikhara?",
        "answer": "No. Seeing a dream is not a condition of Istikhara. The primary result is feeling clarity, ease in circumstances, or natural obstruction."
      }
    ]
  },
  {
    "id": "nazar-ki-dua",
    "slug": "nazar-ki-dua",
    "title": "Dua for Protection from Evil Eye & Envy (Nazar Ki Dua)",
    "titleEnglish": "Dua for Protection from Evil Eye & Envy (Nazar Ki Dua)",
    "titleArabic": "دُعَاءُ الْحِفْظِ مِنَ الْعَيْنِ وَالْحَسَدِ",
    "titleUrdu": "نظر بد اور حسد سے بچاؤ کی دعا",
    "arabicText": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.",
    "transliteration": "A’udhu bi kalimatillahit-tammati min kulli shaytaniw-wa hammah, wa min kulli ‘aynil-lammah.",
    "translation": "I seek refuge in the perfect words of Allah from every devil and poisonous reptile, and from every evil, envious eye.",
    "translationEnglish": "I seek refuge in the perfect words of Allah from every devil and poisonous reptile, and from every evil, envious eye.",
    "translationUrdu": "Main Allah ke mukammal kalimaat ki panaah maangta hoon har shaytan aur zehreelay janwar se, aur har nuqsan pohanchane wali buri nazar se.",
    "category": "protection",
    "categoryLabel": "Protection & Ruqyah",
    "content": "Nazar ki Dua is the authentic Prophetic shield against destructive envy (Hasad), spiritual affliction, and malicious gaze.",
    "meaning": "The protective invocation used by Prophet Ibrahim (AS) for Ismail and Ishaq, and by Prophet Muhammad (PBUH) for Hasan and Husain.",
    "tldr": "Nazar ki Dua is the authentic Prophetic shield against destructive envy (Hasad), spiritual affliction, and malicious gaze.",
    "source": "Sahih Al-Bukhari (Hadith 3371)",
    "sourceBook": "Sahih Al-Bukhari - Ahadith al-Anbiya",
    "hadithNumber": "Hadith 3371",
    "authenticity": "Sahih",
    "badge": "Spiritual Shield",
    "benefits": [
      "Repels sudden unexplained illnesses and behavioral disturbances caused by Nazar.",
      "Protects newborn infants and children from jealousy.",
      "Forms an angelic barrier around home, wealth, and blessings."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Morning & Evening",
        "desc": "Utter 3 times following Fajr and Maghrib."
      },
      {
        "title": "Step 2: Blow Over Children",
        "desc": "Recite while gently blowing over children or loved ones."
      }
    ],
    "faqs": [
      {
        "question": "Is the Evil Eye real in Islam?",
        "answer": "Yes, Prophet Muhammad (PBUH) stated: “The evil eye is real, and if anything could precede the divine decree, it would be the evil eye.” (Sahih Muslim)."
      }
    ]
  },
  {
    "id": "roza-rakhne-ki-dua",
    "slug": "roza-rakhne-ki-dua",
    "title": "Dua for Fasting Intention (Suhoor / Sehri Ki Dua)",
    "titleEnglish": "Dua for Fasting Intention (Suhoor / Sehri Ki Dua)",
    "titleArabic": "دُعَاءُ نِيَّةِ الصَّوْمِ (السُّحُورِ)",
    "titleUrdu": "روزہ رکھنے کی نیت کی مسنون دعا",
    "arabicText": "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ.",
    "transliteration": "Wa bi-sawmi ghadin nawaytu min shahri Ramadan.",
    "translation": "And I intend to fast tomorrow in the blessed month of Ramadan.",
    "translationEnglish": "And I intend to fast tomorrow in the blessed month of Ramadan.",
    "translationUrdu": "Aur maine Ramzan ke mahine ke kal ke rozay ki niyat ki.",
    "category": "fasting",
    "categoryLabel": "Fasting & Ramadan",
    "content": "The intention (Niyyah) formed before true dawn that validates the obligatory fast throughout the day.",
    "meaning": "Articulating the conscious intention before dawn to fast purely for the pleasure of Allah.",
    "tldr": "The intention (Niyyah) formed before true dawn that validates the obligatory fast throughout the day.",
    "source": "Sunan Abi Dawud & Classical Fiqh Consensus",
    "sourceBook": "Fiqh as-Sunnah",
    "hadithNumber": "Abu Dawud 2454",
    "authenticity": "Fiqh Validated Sunnah",
    "badge": "Ramadan Daily",
    "benefits": [
      "Fulfills the fundamental pillar and condition for the validity of the fast.",
      "Prepares psychological focus and spiritual resolve for the daylight hours.",
      "Blessing and Barakah in the pre-dawn meal (Suhoor)."
    ],
    "steps": [
      {
        "title": "Step 1: Eat Suhoor (Sehri)",
        "desc": "Partake in food before true dawn as instructed by the Sunnah."
      },
      {
        "title": "Step 2: Confirm Niyyah in the Heart",
        "desc": "Resolve sincerely to fast solely for Allah."
      }
    ],
    "faqs": [
      {
        "question": "Must the intention be uttered verbally?",
        "answer": "The true seat of intention is in the heart. Uttering the words verbally assists in mental focus."
      }
    ]
  },
  {
    "id": "roza-kholne-ki-dua",
    "slug": "roza-kholne-ki-dua",
    "title": "Dua for Breaking the Fast (Iftar Ki Dua)",
    "titleEnglish": "Dua for Breaking the Fast (Iftar Ki Dua)",
    "titleArabic": "دُعَاءُ الإِفْطَارِ",
    "titleUrdu": "افطار کے وقت کی مسنون دعا",
    "arabicText": "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ.",
    "transliteration": "Dhahabadh-dhama’u, wabtallatil-’urooq, wa thabatal-ajru in sha Allah.",
    "translation": "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    "translationEnglish": "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    "translationUrdu": "Pyaas bujh gayi, ragein tar ho gayin, aur agar Allah ne chaha to ajar sabit ho gaya.",
    "category": "fasting",
    "categoryLabel": "Fasting & Ramadan",
    "content": "The authentic Prophetic supplication uttered at the moment of breaking the fast with dates or water.",
    "meaning": "Celebrating the successful completion of a day’s worship at sunset with deep gratitude.",
    "tldr": "The authentic Prophetic supplication uttered at the moment of breaking the fast with dates or water.",
    "source": "Sunan Abi Dawud (Hadith 2357)",
    "sourceBook": "Sunan Abi Dawud - Kitab as-Sawm",
    "hadithNumber": "Hadith 2357",
    "authenticity": "Hasan / Sahih",
    "badge": "Iftar Sunnah",
    "benefits": [
      "The supplication of the fasting person at the time of Iftar is never rejected (Tirmidhi).",
      "Instant spiritual gratitude replacing physical hunger with contentment.",
      "Reviving a beloved Sunnah of Prophet Muhammad (PBUH)."
    ],
    "steps": [
      {
        "title": "Step 1: Break Fast Promptly at Sunset",
        "desc": "Begin with fresh dates, dry dates, or sips of water."
      },
      {
        "title": "Step 2: Recite the Dua",
        "desc": "Utter this authentic supplication after taking the first bites."
      }
    ],
    "faqs": [
      {
        "question": "Can I make personal supplications before eating?",
        "answer": "Yes, the moments immediately preceding the Maghrib Adhan are prime times for answered Dua."
      }
    ]
  },
  {
    "id": "sayyidul-istighfar",
    "slug": "sayyidul-istighfar",
    "title": "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
    "titleEnglish": "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
    "titleArabic": "سَيِّدُ الاسْتِغْفَارِ",
    "titleUrdu": "سید الاستغفار (بخشش کی سردار دعا)",
    "arabicText": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
    "transliteration": "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana ‘abduka, wa ana ‘ala ‘ahdika wa wa’dika mastata’tu, a’udhu bika min sharri ma sana’tu, abu’u laka bi ni’matika ‘alayya, wa abu’u laka bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa Ant.",
    "translation": "O Allah, You are my Lord; there is no deity worthy of worship except You. You created me and I am Your servant, and I uphold Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I fully acknowledge Your favors upon me, and I confess to You my sin, so forgive me, for verily none can forgive sins except You.",
    "translationEnglish": "O Allah, You are my Lord; there is no deity worthy of worship except You. You created me and I am Your servant, and I uphold Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I fully acknowledge Your favors upon me, and I confess to You my sin, so forgive me, for verily none can forgive sins except You.",
    "translationUrdu": "Ae Allah! Tu hi mera Rab hai, Tere siwa koi ma’bood nahi. Tu ne mujhe paida farmaya aur main Tera banda hoon...",
    "category": "forgiveness",
    "categoryLabel": "Forgiveness & Tawbah",
    "content": "The greatest formula of Istighfar; whoever recites it with certainty during day or night and dies before sunset or morning enters Paradise.",
    "meaning": "The pinnacle declaration of repentance combining acknowledgement of divine lordship, human weakness, gratitude, and confession.",
    "tldr": "The greatest formula of Istighfar; whoever recites it with certainty during day or night and dies before sunset or morning enters Paradise.",
    "source": "Sahih Al-Bukhari (Hadith 6306)",
    "sourceBook": "Sahih Al-Bukhari - Kitab ad-Da’awat",
    "hadithNumber": "Hadith 6306",
    "authenticity": "Sahih (Highest Degree)",
    "badge": "Master Supplication",
    "benefits": [
      "Direct promise of Jannah (Paradise) if passed away on that same day or night.",
      "Cleanses spiritual rust, guilt, and the weight of accumulation of sins.",
      "Restores intimate spiritual closeness between the servant and the Creator."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in the Morning",
        "desc": "Once between Fajr and sunrise."
      },
      {
        "title": "Step 2: Recite in the Evening",
        "desc": "Once between Asr and Maghrib."
      }
    ],
    "faqs": [
      {
        "question": "Why is it called the Master of Forgiveness?",
        "answer": "Because it encompasses all aspects of Tawbah: acknowledging Tawheed, divine creation, covenant, divine blessings, personal error, and sole forgiveness."
      }
    ]
  },
  {
    "id": "sleeping-dua",
    "slug": "sleeping-dua",
    "title": "Dua Before Sleeping (Sone Ki Dua)",
    "titleEnglish": "Dua Before Sleeping (Sone Ki Dua)",
    "titleArabic": "دُعَاءُ النَّوْمِ",
    "titleUrdu": "سونے کی مسنون دعا",
    "arabicText": "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
    "transliteration": "Bismika Allahumma amutu wa ahya.",
    "translation": "In Your Name, O Allah, I die and I live.",
    "translationEnglish": "In Your Name, O Allah, I die and I live.",
    "translationUrdu": "Ae Allah! Tere hi naam ke sath main marta hoon aur jeeta hoon.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The concise and profound bedtime supplication recited before resting at night.",
    "meaning": "Acknowledging that sleep is a minor death and entrusting your soul into Allah’s preservation.",
    "tldr": "The concise and profound bedtime supplication recited before resting at night.",
    "source": "Sahih Al-Bukhari (Hadith 6312)",
    "sourceBook": "Sahih Al-Bukhari - Kitab ad-Da’awat",
    "hadithNumber": "Hadith 6312",
    "authenticity": "Sahih",
    "badge": "Bedtime Essential",
    "benefits": [
      "Entrusts soul into divine safekeeping during the unconsciousness of sleep.",
      "Ensures the last words of consciousness celebrate the name of Allah.",
      "Guards against terrifying nightmares and nocturnal anxieties."
    ],
    "steps": [
      {
        "title": "Step 1: Dust the Bed",
        "desc": "Dust the bed with edge of garment three times."
      },
      {
        "title": "Step 2: Lie on Right Side",
        "desc": "Rest upon right side with right hand under cheek."
      },
      {
        "title": "Step 3: Recite the Dua",
        "desc": "Utter Bismika Allahumma amutu wa ahya."
      }
    ],
    "faqs": [
      {
        "question": "What additional Surahs should be recited before sleep?",
        "answer": "Recite Ayat al-Kursi, Surah Al-Mulk, and the 3 Quls (Ikhlas, Falaq, Nas)."
      }
    ]
  },
  {
    "id": "waking-up-dua",
    "slug": "waking-up-dua",
    "title": "Dua Upon Waking Up (So Kar Uthne Ki Dua)",
    "titleEnglish": "Dua Upon Waking Up (So Kar Uthne Ki Dua)",
    "titleArabic": "دُعَاءُ الاسْتِيقَاظِ مِنَ النَّوْمِ",
    "titleUrdu": "نیند سے بیدار ہونے کی دعا",
    "arabicText": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",
    "transliteration": "Alhamdulillahi-lladhi ahyana ba’da ma amatana wa ilayhin-nushoor.",
    "translation": "All praise is due to Allah Who gave us life after He caused us to die, and unto Him is the resurrection.",
    "translationEnglish": "All praise is due to Allah Who gave us life after He caused us to die, and unto Him is the resurrection.",
    "translationUrdu": "Tamam tareefein Allah ke liye hain jis ne hamein zinda kiya is ke baad ke hum ko mot di, aur usi ki taraf laut kar jana hai.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The very first words spoken in the morning, greeting the gift of life with divine praise and remembering the Day of Judgment.",
    "meaning": "Giving immediate morning thanks for another day of opportunity to worship and do good.",
    "tldr": "The very first words spoken in the morning, greeting the gift of life with divine praise and remembering the Day of Judgment.",
    "source": "Sahih Al-Bukhari (Hadith 6314)",
    "sourceBook": "Sahih Al-Bukhari - Kitab ad-Da’awat",
    "hadithNumber": "Hadith 6314",
    "authenticity": "Sahih",
    "badge": "Morning Start",
    "benefits": [
      "Unbinds the first knot of Shaytan tied at the back of the head during sleep.",
      "Fills the morning with immediate consciousness and gratitude.",
      "Re-orients the soul towards the ultimate meeting with Allah."
    ],
    "steps": [
      {
        "title": "Step 1: Wipe Sleep from Eyes",
        "desc": "Sit up and rub sleep away with hands."
      },
      {
        "title": "Step 2: Recite the Supplication",
        "desc": "Articulate this praise before looking at phones or speaking."
      }
    ],
    "faqs": [
      {
        "question": "How do the three knots of Shaytan get untied?",
        "answer": "The first knot unties by remembering Allah (this Dua), the second by performing Wudu, and the third by praying Salah."
      }
    ]
  },
  {
    "id": "home-entrance-dua",
    "slug": "home-entrance-dua",
    "title": "Dua for Entering the Home (Ghar Mein Dakhil Hone Ki Dua)",
    "titleEnglish": "Dua for Entering the Home (Ghar Mein Dakhil Hone Ki Dua)",
    "titleArabic": "دُعَاءُ دُخُولِ الْمَنْزِلِ",
    "titleUrdu": "گھر میں داخل ہونے کی دعا",
    "arabicText": "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا.",
    "transliteration": "Bismillahi walajna, wa bismillahi kharajna, wa ‘ala Rabbina tawakkalna.",
    "translation": "In the Name of Allah we enter, in the Name of Allah we leave, and upon our Lord we place our trust.",
    "translationEnglish": "In the Name of Allah we enter, in the Name of Allah we leave, and upon our Lord we place our trust.",
    "translationUrdu": "Allah ke naam ke sath hum dakhil hue, aur Allah hi ke naam ke sath hum nikle, aur apne Rab hi par hum ne bharosa kiya.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "Saying Bismillah and this supplication upon entering drives Shaytan away from spending the night in your residence.",
    "meaning": "Invoking Allah’s name when stepping inside the home to banish Satanic presence and bless the household.",
    "tldr": "Saying Bismillah and this supplication upon entering drives Shaytan away from spending the night in your residence.",
    "source": "Sunan Abi Dawud (Hadith 5096) & Sahih Muslim",
    "sourceBook": "Sunan Abi Dawud - Kitab al-Adab",
    "hadithNumber": "Hadith 5096",
    "authenticity": "Sahih / Hasan",
    "badge": "Household Safety",
    "benefits": [
      "Shaytan declares to his companions: \"There is no lodging for you here tonight!\"",
      "Infuses domestic tranquility and barakah into family relations.",
      "Followed by giving Salam to the inhabitants of the home."
    ],
    "steps": [
      {
        "title": "Step 1: Step with Right Foot",
        "desc": "Enter through the doorway leading with your right foot."
      },
      {
        "title": "Step 2: Recite the Dua",
        "desc": "Utter Bismillah and the full invocation."
      },
      {
        "title": "Step 3: Greet Family with Salam",
        "desc": "Say \"As-salamu ‘alaykum wa rahmatullah\"."
      }
    ],
    "faqs": [
      {
        "question": "What if no one is inside the house?",
        "answer": "You should still say: \"As-salamu ‘alayna wa ‘ala ‘ibadillahis-salihin\" (Peace be upon us and upon the righteous servants of Allah)."
      }
    ]
  },
  {
    "id": "home-exit-dua",
    "slug": "home-exit-dua",
    "title": "Dua for Leaving the Home (Ghar Se Nikalne Ki Dua)",
    "titleEnglish": "Dua for Leaving the Home (Ghar Se Nikalne Ki Dua)",
    "titleArabic": "دُعَاءُ الْخُرُوجِ مِنَ الْمَنْزِلِ",
    "titleUrdu": "گھر سے باہر نکلنے کی دعا",
    "arabicText": "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
    "transliteration": "Bismillahi, tawakkaltu ‘alallahi, wa la hawla wa la quwwata illa billah.",
    "translation": "In the Name of Allah, I place my trust in Allah; there is no power and no might except through Allah.",
    "translationEnglish": "In the Name of Allah, I place my trust in Allah; there is no power and no might except through Allah.",
    "translationUrdu": "Allah ke naam ke sath, maine Allah par bharosa kiya, aur burai se bachne ki taaqat aur neki karne ki quwwat Allah hi ki madad se hai.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "An angelic guardian responds: \"You are guided, defended, and protected,\" and the devils step aside from your path.",
    "meaning": "Surrendering your safety, direction, and encounters to Allah before stepping into the external world.",
    "tldr": "An angelic guardian responds: \"You are guided, defended, and protected,\" and the devils step aside from your path.",
    "source": "Sunan Abi Dawud (Hadith 5095) & Jami` At-Tirmidhi (3426)",
    "sourceBook": "Sunan Abi Dawud - Kitab al-Adab",
    "hadithNumber": "Hadith 5095",
    "authenticity": "Sahih",
    "badge": "Daily Shield",
    "benefits": [
      "Angels surround the traveler with spiritual guidance and protection.",
      "Devils turn away saying: \"How can you harm a person who has been guided, defended, and protected?\"",
      "Protection from car accidents, street dangers, and fraudulent encounters."
    ],
    "steps": [
      {
        "title": "Step 1: Step with Left Foot Out",
        "desc": "Cross the threshold placing your trust in Allah."
      },
      {
        "title": "Step 2: Recite Aloud",
        "desc": "Utter Bismillahi tawakkaltu ‘alallah..."
      }
    ],
    "faqs": [
      {
        "question": "Can I add \"Allahumma inni a’udhu bika an adilla...\"?",
        "answer": "Yes, adding the supplication against being misled or causing oppression is also an established authentic Sunnah."
      }
    ]
  },
  {
    "id": "mosque-entrance-dua",
    "slug": "mosque-entrance-dua",
    "title": "Dua for Entering the Mosque (Masjid Mein Dakhil Hone Ki Dua)",
    "titleEnglish": "Dua for Entering the Mosque (Masjid Mein Dakhil Hone Ki Dua)",
    "titleArabic": "دُعَاءُ دُخُولِ الْمَسْجِدِ",
    "titleUrdu": "مسجد میں داخل ہونے کی دعا",
    "arabicText": "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
    "transliteration": "Allahummaf-tah li abwaba rahmatik.",
    "translation": "O Allah, open for me the gates of Your mercy.",
    "translationEnglish": "O Allah, open for me the gates of Your mercy.",
    "translationUrdu": "Ae Allah! Mere liye Apni rehmat ke darwaze khol de.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The sacred Sunnah supplication recited with the right foot when entering any house of Allah.",
    "meaning": "Asking Allah to open His boundless fountains of spiritual mercy upon entering His sanctuary.",
    "tldr": "The sacred Sunnah supplication recited with the right foot when entering any house of Allah.",
    "source": "Sahih Muslim (Hadith 713)",
    "sourceBook": "Sahih Muslim - Kitab Salat al-Musafirin",
    "hadithNumber": "Hadith 713",
    "authenticity": "Sahih",
    "badge": "Mosque Sunnah",
    "benefits": [
      "Welcomed by angelic mercy in the house of Allah.",
      "Purifies spiritual intention for prayer and Dhikr.",
      "Revives the authentic etiquette of entering sacred spaces."
    ],
    "steps": [
      {
        "title": "Step 1: Lead with Right Foot",
        "desc": "Step through the mosque door with right foot."
      },
      {
        "title": "Step 2: Send Salutations & Recite Dua",
        "desc": "Say Bismillah, Durood on Prophet (PBUH), and Allahummaftah li abwaba rahmatik."
      }
    ],
    "faqs": [
      {
        "question": "What prayer should be offered immediately upon entering?",
        "answer": "Pray two Rak’ahs of Tahiyyatul Masjid before sitting down."
      }
    ]
  },
  {
    "id": "mosque-exit-dua",
    "slug": "mosque-exit-dua",
    "title": "Dua for Leaving the Mosque (Masjid Se Nikalne Ki Dua)",
    "titleEnglish": "Dua for Leaving the Mosque (Masjid Se Nikalne Ki Dua)",
    "titleArabic": "دُعَاءُ الْخُرُوجِ مِنَ الْمَسْجِدِ",
    "titleUrdu": "مسجد سے نکلنے کی دعا",
    "arabicText": "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.",
    "transliteration": "Allahumma inni as’aluka min fadlik.",
    "translation": "O Allah, I ask You from Your bounty.",
    "translationEnglish": "O Allah, I ask You from Your bounty.",
    "translationUrdu": "Ae Allah! Beshak main Tujh se Tere fazl ka talabgaar hoon.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The Sunnah exit supplication recited with the left foot when leaving the mosque.",
    "meaning": "Seeking Allah’s lawful bounty (Halal provision and success) as you transition back into worldly endeavors.",
    "tldr": "The Sunnah exit supplication recited with the left foot when leaving the mosque.",
    "source": "Sahih Muslim (Hadith 713)",
    "sourceBook": "Sahih Muslim - Kitab Salat al-Musafirin",
    "hadithNumber": "Hadith 713",
    "authenticity": "Sahih",
    "badge": "Mosque Sunnah",
    "benefits": [
      "Directs your post-worship pursuits toward lawful Rizq and blessing.",
      "Shields from Satanic distractions in marketplace and streets.",
      "Sustains the spiritual charge received during prayer."
    ],
    "steps": [
      {
        "title": "Step 1: Step with Left Foot",
        "desc": "Exit the doorway leading with your left foot."
      },
      {
        "title": "Step 2: Recite the Dua",
        "desc": "Utter Allahumma inni as’aluka min fadlik."
      }
    ],
    "faqs": [
      {
        "question": "Why does entrance ask for mercy and exit ask for bounty?",
        "answer": "Inside the mosque is the place for spiritual mercy and forgiveness; outside is the sphere of seeking worldly provision (Fadl)."
      }
    ]
  },
  {
    "id": "eating-dua",
    "slug": "eating-dua",
    "title": "Dua Before & After Eating (Khane Se Pehle Aur Baad Ki Dua)",
    "titleEnglish": "Dua Before & After Eating (Khane Se Pehle Aur Baad Ki Dua)",
    "titleArabic": "دُعَاءُ الطَّعَامِ",
    "titleUrdu": "کھانے سے پہلے اور بعد کی مسنون دعا",
    "arabicText": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ.",
    "transliteration": "Alhamdulillahi-lladhi at’amana wa saqana wa ja’alana Muslimeen.",
    "translation": "All praise is due to Allah Who has fed us, given us drink, and made us Muslims.",
    "translationEnglish": "All praise is due to Allah Who has fed us, given us drink, and made us Muslims.",
    "translationUrdu": "Tamam tareefein Allah ke liye hain jis ne hamein khilaya, aur pilaya, aur hamein Musalman banaya.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "Converts ordinary nourishment into divine worship and ensures Shaytan cannot partake in your meal.",
    "meaning": "Before eating say \"Bismillah\"; after concluding, express profound gratitude for food, drink, and the gift of Islam.",
    "tldr": "Converts ordinary nourishment into divine worship and ensures Shaytan cannot partake in your meal.",
    "source": "Sunan Abi Dawud (Hadith 3850) & Tirmidhi",
    "sourceBook": "Sunan Abi Dawud - Kitab al-At’imah",
    "hadithNumber": "Hadith 3850",
    "authenticity": "Hasan / Sahih",
    "badge": "Daily Etiquette",
    "benefits": [
      "Prevents Shaytan from sharing in the barakah of food.",
      "Brings physical nourishment and cures over-eating.",
      "Past minor sins are forgiven upon praising Allah after the meal (Tirmidhi)."
    ],
    "steps": [
      {
        "title": "Step 1: Before Eating",
        "desc": "Eat with right hand and say \"Bismillah\"."
      },
      {
        "title": "Step 2: If Forgotten at Start",
        "desc": "Say \"Bismillahi awwalahu wa akhirahu\"."
      },
      {
        "title": "Step 3: After Eating",
        "desc": "Recite Alhamdulillahi-lladhi at’amana..."
      }
    ],
    "faqs": [
      {
        "question": "Is it Sunnah to eat with three fingers?",
        "answer": "Yes, eating with three fingers of the right hand and licking them cleanly before wiping is an authenticated Sunnah."
      }
    ]
  },
  {
    "id": "bathroom-dua",
    "slug": "bathroom-dua",
    "title": "Dua for Entering & Exiting the Bathroom",
    "titleEnglish": "Dua for Entering & Exiting the Bathroom",
    "titleArabic": "دُعَاءُ دُخُولِ وَخُرُوجِ الْخَلَاءِ",
    "titleUrdu": "بیت الخلاء میں داخل ہونے اور نکلنے کی دعا",
    "arabicText": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ - غُفْرَانَكَ",
    "transliteration": "Entrance: Allahumma inni a’udhu bika minal-khubuthi wal-khaba’ith. Exit: Ghufranaka.",
    "translation": "Entrance: O Allah, I seek refuge in You from impure male and female devils. Exit: I seek Your forgiveness.",
    "translationEnglish": "Entrance: O Allah, I seek refuge in You from impure male and female devils. Exit: I seek Your forgiveness.",
    "translationUrdu": "Dakhil hote waqt: Ae Allah! Main Teri panaah chahta hoon napak jinnat (mard o aurat) se. Nikalte waqt: Main Teri bakhshish chahta hoon.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The essential barrier between the eyes of jinn and human private parts.",
    "meaning": "Shielding physical Awrah from unseen entities before entering places of filth, and seeking forgiveness upon exit.",
    "tldr": "The essential barrier between the eyes of jinn and human private parts.",
    "source": "Sahih Al-Bukhari (Hadith 142) & Abu Dawud (30)",
    "sourceBook": "Sahih Al-Bukhari - Kitab al-Wudu",
    "hadithNumber": "Hadith 142",
    "authenticity": "Sahih",
    "badge": "Purity & Shield",
    "benefits": [
      "Veils human Awrah from the sight of evil spirits and jinn.",
      "Protects from spiritual defilement in unclean environments.",
      "Expresses gratitude for the elimination of bodily waste."
    ],
    "steps": [
      {
        "title": "Step 1: Enter with Left Foot",
        "desc": "Recite Allahumma inni a’udhu bika minal-khubuthi wal-khaba’ith."
      },
      {
        "title": "Step 2: Exit with Right Foot",
        "desc": "Step out with right foot and utter \"Ghufranaka\"."
      }
    ],
    "faqs": [
      {
        "question": "Why do we ask for forgiveness (Ghufranaka) upon leaving?",
        "answer": "Because during relieving oneself one was unable to engage in the continuous remembrance of Allah, and in gratitude for bodily relief that no medicine can match."
      }
    ]
  },
  {
    "id": "dressing-dua",
    "slug": "dressing-dua",
    "title": "Dua for Wearing Clothes (Libas Pehanne Ki Dua)",
    "titleEnglish": "Dua for Wearing Clothes (Libas Pehanne Ki Dua)",
    "titleArabic": "دُعَاءُ لِبْسِ الثَّوْبِ",
    "titleUrdu": "لباس پہننے کی مسنون دعا",
    "arabicText": "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.",
    "transliteration": "Alhamdulillahi-lladhi kasani hadhath-thawba wa razaqanihi min ghayri hawlim-minni wa la quwwah.",
    "translation": "All praise is due to Allah Who has clothed me with this garment and provided it for me without any power or might of my own.",
    "translationEnglish": "All praise is due to Allah Who has clothed me with this garment and provided it for me without any power or might of my own.",
    "translationUrdu": "Tamam tareefein Allah ke liye hain jis ne mujhe yeh kapra pehnaya aur bina meri quwwat aur taaqat ke mujhe yeh rizq ata kiya.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "Whoever recites this when wearing a garment, all their past minor sins are expiated.",
    "meaning": "Recognizing that clothing for dignity and warmth is a divine favor and grace.",
    "tldr": "Whoever recites this when wearing a garment, all their past minor sins are expiated.",
    "source": "Sunan Abi Dawud (Hadith 4023) & At-Tirmidhi",
    "sourceBook": "Sunan Abi Dawud - Kitab al-Libas",
    "hadithNumber": "Hadith 4023",
    "authenticity": "Hasan / Sahih",
    "badge": "Daily Gratitude",
    "benefits": [
      "Forgiveness of all past misdeeds upon donning clothing.",
      "Shields from arrogance and vanity in fashion.",
      "Transforms daily attire into an act of divine worship."
    ],
    "steps": [
      {
        "title": "Step 1: Begin with Right Sleeve/Side",
        "desc": "Put on clothes starting from the right side."
      },
      {
        "title": "Step 2: Recite the Prophetic Praise",
        "desc": "Utter the full supplication with heartfelt gratitude."
      }
    ],
    "faqs": [
      {
        "question": "Is there a specific dua for new clothes?",
        "answer": "Yes, the Prophet (PBUH) recited: \"Allahumma lakal-hamdu Anta kasawtanihi, as’aluka min khayrihi wa khayri ma suni’a lah...\""
      }
    ]
  },
  {
    "id": "anxiety-relief-dua",
    "slug": "anxiety-relief-dua",
    "title": "Dua for Relief from Anxiety, Sorrow & Heavy Debt",
    "titleEnglish": "Dua for Relief from Anxiety, Sorrow & Heavy Debt",
    "titleArabic": "دُعَاءُ الْهَمِّ وَالْحَزَنِ وَالدَّيْنِ",
    "titleUrdu": "غم، پریشانی اور قرض سے نجات کی دعا",
    "arabicText": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ.",
    "transliteration": "Allahumma inni a’udhu bika minal-hammi wal-hazan, wa a’udhu bika minal-’ajzi wal-kasal, wa a’udhu bika minal-jubni wal-bukhl, wa a’udhu bika min ghalabatid-dayni wa qahrir-rijal.",
    "translation": "O Allah, I seek refuge in You from anxiety and sorrow, I seek refuge in You from incapacity and laziness, I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overcome by debt and the oppression of men.",
    "translationEnglish": "O Allah, I seek refuge in You from anxiety and sorrow, I seek refuge in You from incapacity and laziness, I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overcome by debt and the oppression of men.",
    "translationUrdu": "Ae Allah! Main Teri panaah chahta hoon fikr aur gham se, aur main Teri panaah chahta hoon aajizi aur susti se, aur main Teri panaah chahta hoon buzdili aur kanjoosi se, aur main Teri panaah chahta hoon qarz ke bojh aur logon ke dabao se.",
    "category": "protection",
    "categoryLabel": "Protection & Mental Peace",
    "content": "The comprehensive daily fortress recited by Prophet Muhammad (PBUH) for emotional tranquility and freedom from financial oppression.",
    "meaning": "Holistic psychiatric and financial sanctuary treating eight root causes of human paralysis.",
    "tldr": "The comprehensive daily fortress recited by Prophet Muhammad (PBUH) for emotional tranquility and freedom from financial oppression.",
    "source": "Sahih Al-Bukhari (Hadith 6369)",
    "sourceBook": "Sahih Al-Bukhari - Kitab ad-Da’awat",
    "hadithNumber": "Hadith 6369",
    "authenticity": "Sahih",
    "badge": "Mental Peace",
    "benefits": [
      "Lifts the crushing weight of depression and future anxiety (Hamm & Hazan).",
      "Cures chronic procrastination, inertia, and lack of motivation (Kasal).",
      "Delivers divine openings to discharge insurmountable financial debts."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Morning & Evening",
        "desc": "Repeat 3 times after Fajr and Asr prayers."
      },
      {
        "title": "Step 2: Couple with Practical Action",
        "desc": "Take practical steps toward debt repayment and constructive habits."
      }
    ],
    "faqs": [
      {
        "question": "Who did the Prophet (PBUH) teach this to?",
        "answer": "He taught this to Abu Umamah (RA) when he found him grieving in the mosque with overwhelming debt; soon after, all his debts were paid off."
      }
    ]
  },
  {
    "id": "illness-shifa-dua",
    "slug": "illness-shifa-dua",
    "title": "Dua for the Sick & Physical Healing (Shifa Ki Dua)",
    "titleEnglish": "Dua for the Sick & Physical Healing (Shifa Ki Dua)",
    "titleArabic": "دُعَاءُ الشِّفَاءِ لِلْمَرِيضِ",
    "titleUrdu": "بیمار کی شفایابی کی دعا",
    "arabicText": "أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا.",
    "transliteration": "Adh-hibil-ba’sa Rabban-nas, ishfi wa Antash-Shafi, la shifa’a illa shifa’uk, shifa’al-la yughadiru saqama.",
    "translation": "Remove the suffering, O Lord of mankind, and heal; You are the Healer. There is no healing except Your healing—a cure that leaves behind no ailment.",
    "translationEnglish": "Remove the suffering, O Lord of mankind, and heal; You are the Healer. There is no healing except Your healing—a cure that leaves behind no ailment.",
    "translationUrdu": "Takleef ko door farma de ae logon ke Rab! Shifa ata farma aur Tu hi shifa dene wala hai, Teri shifa ke siwa koi shifa nahi, aisi shifa jo kisi bimari ko baqi na chhore.",
    "category": "protection",
    "categoryLabel": "Protection & Healing",
    "content": "The sacred Prophetic healing prayer recited when wiping right hand over afflicted areas or visiting sick patients.",
    "meaning": "Invoking the Lord of all creation to bestow complete, permanent cellular and spiritual recovery.",
    "tldr": "The sacred Prophetic healing prayer recited when wiping right hand over afflicted areas or visiting sick patients.",
    "source": "Sahih Al-Bukhari (Hadith 5743) & Sahih Muslim (2191)",
    "sourceBook": "Sahih Al-Bukhari - Kitab at-Tibb",
    "hadithNumber": "Hadith 5743",
    "authenticity": "Sahih",
    "badge": "Health & Recovery",
    "benefits": [
      "Draws direct divine cure (Shifa) onto the ailing limb.",
      "Provides comfort and hope to patients facing severe diagnoses.",
      "Reward of visiting the sick: 70,000 angels pray for the visitor until night."
    ],
    "steps": [
      {
        "title": "Step 1: Place Right Hand on Pain",
        "desc": "Put your right hand over the bodily area causing distress."
      },
      {
        "title": "Step 2: Recite Bismillah 3 Times",
        "desc": "Say Bismillah, Bismillah, Bismillah."
      },
      {
        "title": "Step 3: Recite the Healing Invocation",
        "desc": "Utter Adh-hibil-ba’sa Rabban-nas..."
      }
    ],
    "faqs": [
      {
        "question": "Can this be recited over water and consumed?",
        "answer": "Yes, reciting Quranic verses and authentic duas over water and drinking or bathing with it is valid Ruqyah."
      }
    ]
  },
  {
    "id": "parents-forgiveness-dua",
    "slug": "parents-forgiveness-dua",
    "title": "Dua for Parents (Walidain Ki Maghfirat Ki Dua)",
    "titleEnglish": "Dua for Parents (Walidain Ki Maghfirat Ki Dua)",
    "titleArabic": "دُعَاءُ الْوَالِدَيْنِ",
    "titleUrdu": "والدین کی بخشش اور رحمت کی دعا",
    "arabicText": "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا.",
    "transliteration": "Rabbir-hamhuma kama rabbayani sagheera.",
    "translation": "My Lord, have mercy upon them both as they brought me up when I was small.",
    "translationEnglish": "My Lord, have mercy upon them both as they brought me up when I was small.",
    "translationUrdu": "Ae mere Rab! Un dono par reham farma jaisa ke un dono ne bachpan mein meri parwarish ki.",
    "category": "forgiveness",
    "categoryLabel": "Forgiveness & Family",
    "content": "Revealed in Surah Al-Isra (17:24), this timeless verse repays parental sacrifices with infinite divine mercy.",
    "meaning": "A divine Quranic supplication fulfilling filial piety (Birr al-Walidayn) throughout life and after death.",
    "tldr": "Revealed in Surah Al-Isra (17:24), this timeless verse repays parental sacrifices with infinite divine mercy.",
    "source": "Holy Quran - Surah Al-Isra [17:24]",
    "sourceBook": "Quran Karim - Juz 15",
    "hadithNumber": "Surah 17:24",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Filial Piety",
    "benefits": [
      "Elevates parents’ ranks in Jannah continuously after their demise.",
      "Acts as ongoing charity (Sadaqah Jariyah) for deceased mothers and fathers.",
      "Spreads blessings and tranquility in the lives of righteous children."
    ],
    "steps": [
      {
        "title": "Step 1: Recite in Every Salah",
        "desc": "Make it a habit during Sujood or before final Taslim."
      },
      {
        "title": "Step 2: Combine with Ibrahimic Supplication",
        "desc": "Add: \"Rabbanagh-fir li wa li-walidayya wa lil-mu’minina yawma yaqumul-hisab\"."
      }
    ],
    "faqs": [
      {
        "question": "Does this benefit deceased parents?",
        "answer": "Yes, the Prophet (PBUH) said a man’s status in Paradise will be raised, and when he asks why, he will be told: \"Because of your child seeking forgiveness for you.\""
      }
    ]
  },
  {
    "id": "knowledge-increase-dua",
    "slug": "knowledge-increase-dua",
    "title": "Dua for Increasing Knowledge & Memory",
    "titleEnglish": "Dua for Increasing Knowledge & Memory",
    "titleArabic": "دُعَاءُ طَلَبِ الْعِلْمِ",
    "titleUrdu": "علم اور حافظہ میں اضافے کی دعا",
    "arabicText": "رَّبِّ زِدْنِي عِلْمًا.",
    "transliteration": "Rabbi zidni ‘ilma.",
    "translation": "My Lord, increase me in knowledge.",
    "translationEnglish": "My Lord, increase me in knowledge.",
    "translationUrdu": "Ae mere Rab! Mere ilm mein izafa farma.",
    "category": "guidance",
    "categoryLabel": "Guidance & Wisdom",
    "content": "Surah Ta-Ha (20:114) — the ultimate concise supplication for students, researchers, and seekers of truth.",
    "meaning": "The only thing Allah commanded Prophet Muhammad (PBUH) to pray for an increase in was beneficial knowledge.",
    "tldr": "Surah Ta-Ha (20:114) — the ultimate concise supplication for students, researchers, and seekers of truth.",
    "source": "Holy Quran - Surah Ta-Ha [20:114]",
    "sourceBook": "Quran Karim - Juz 16",
    "hadithNumber": "Surah 20:114",
    "authenticity": "Mutawatir Quranic Revelation",
    "badge": "Students & Scholars",
    "benefits": [
      "Enhances memory retention, conceptual understanding, and focus.",
      "Transforms worldly studies into a pathway leading to Paradise.",
      "Supplication commanded directly by Allah to His Messenger (PBUH)."
    ],
    "steps": [
      {
        "title": "Step 1: Recite Before Study Sessions",
        "desc": "Utter 3 times before opening books or starting examinations."
      },
      {
        "title": "Step 2: Follow with Sincere Action",
        "desc": "Diligently study beneficial knowledge that benefits society."
      }
    ],
    "faqs": [
      {
        "question": "What additional dua is recommended for exams?",
        "answer": "Recite: \"Rabbish-rah li sadri, wa yassir li amri, wahlul ‘uqdatam-mil-lisani yafqahu qawli\" (Surah Ta-Ha 25-28)."
      }
    ]
  },
  {
    "id": "rain-dua",
    "slug": "rain-dua",
    "title": "Dua When It Rains (Barish Ki Dua)",
    "titleEnglish": "Dua When It Rains (Barish Ki Dua)",
    "titleArabic": "دُعَاءُ نُزُولِ الْمَطَرِ",
    "titleUrdu": "بارش برستے وقت کی دعا",
    "arabicText": "اللَّهُمَّ صَيِّبًا نَافِعًا.",
    "transliteration": "Allahumma sayyiban nafi’a.",
    "translation": "O Allah, make it a beneficial and productive rain.",
    "translationEnglish": "O Allah, make it a beneficial and productive rain.",
    "translationUrdu": "Ae Allah! Isay nafa bakhshne wali barish bana de.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "Recited when rainfall begins to fall from the skies, welcoming divine mercy.",
    "meaning": "Praying that rainfall brings agricultural life, drinking water, and mercy rather than flooding and destruction.",
    "tldr": "Recited when rainfall begins to fall from the skies, welcoming divine mercy.",
    "source": "Sahih Al-Bukhari (Hadith 1032)",
    "sourceBook": "Sahih Al-Bukhari - Kitab al-Istisqa",
    "hadithNumber": "Hadith 1032",
    "authenticity": "Sahih",
    "badge": "Nature & Mercy",
    "benefits": [
      "The time of rain is one of the premier windows where supplications are answered.",
      "Protects property, homes, and livestock from destructive flash floods.",
      "Invokes agricultural growth and economic prosperity."
    ],
    "steps": [
      {
        "title": "Step 1: Look at Rainfall",
        "desc": "Notice the descent of raindrops."
      },
      {
        "title": "Step 2: Recite the Dua",
        "desc": "Utter Allahumma sayyiban nafi’an."
      },
      {
        "title": "Step 3: Make Personal Supplications",
        "desc": "Pour out personal prayers while the rain continues."
      }
    ],
    "faqs": [
      {
        "question": "Did the Prophet (PBUH) expose himself to rain?",
        "answer": "Yes, Anas (RA) narrated that the Prophet (PBUH) would uncover part of his garment so rain fell upon him, saying: \"It has just recently come from its Lord.\""
      }
    ]
  },
  {
    "id": "thunder-dua",
    "slug": "thunder-dua",
    "title": "Dua When Hearing Thunder (Garaj Ke Waqt Ki Dua)",
    "titleEnglish": "Dua When Hearing Thunder (Garaj Ke Waqt Ki Dua)",
    "titleArabic": "دُعَاءُ سَمَاعِ الرَّعْدِ",
    "titleUrdu": "بادل کی گرج سنتے وقت کی دعا",
    "arabicText": "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ.",
    "transliteration": "Subhanallazi yusabbihur-ra’du bi hamdihi wal-mala’ikatu min kheefatih.",
    "translation": "Glory be to Him Whom the thunder glorifies with His praise, and the angels glorify out of awe of Him.",
    "translationEnglish": "Glory be to Him Whom the thunder glorifies with His praise, and the angels glorify out of awe of Him.",
    "translationUrdu": "Pak hai Woh Zaat jis ki hamd ke sath garaj tasbeeh karti hai aur farishtay Us ke khauf se kaanpte hue tasbeeh karte hain.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "The awe-inspiring invocation recited upon hearing lightning and rumbling thunder.",
    "meaning": "Aligning your praise with the natural universe that trembles and glorifies the Creator during violent storms.",
    "tldr": "The awe-inspiring invocation recited upon hearing lightning and rumbling thunder.",
    "source": "Al-Muwatta (Imam Malik 1808) & Al-Adab Al-Mufrad (723)",
    "sourceBook": "Muwatta Malik - Kitab al-Kalam",
    "hadithNumber": "Muwatta 1808",
    "authenticity": "Sahih",
    "badge": "Awe of Allah",
    "benefits": [
      "Replaces fear of storms with sublime awe and worship of Allah.",
      "Preserves the listener from lightning strikes and storm damage.",
      "Follows the established practice of Abdullah ibn az-Zubayr and the Sahabah."
    ],
    "steps": [
      {
        "title": "Step 1: Cease Conversation",
        "desc": "When hearing thunder, pause speech."
      },
      {
        "title": "Step 2: Recite Subhanallazi...",
        "desc": "Glorify Allah with this sacred phrase."
      }
    ],
    "faqs": [
      {
        "question": "Where is this mentioned in the Quran?",
        "answer": "Surah Ar-Ra’d (13:13): \"And the thunder exalts [Allah] with praise of Him - and the angels as well from fear of Him...\""
      }
    ]
  },
  {
    "id": "sneezing-dua",
    "slug": "sneezing-dua",
    "title": "Dua for Sneezing & Responding (Chheenk Ki Dua)",
    "titleEnglish": "Dua for Sneezing & Responding (Chheenk Ki Dua)",
    "titleArabic": "دُعَاءُ الْعُطَاسِ",
    "titleUrdu": "چھینک آنے اور جواب دینے کی دعا",
    "arabicText": "الْحَمْدُ لِلَّهِ - يَرْحَمُكَ اللَّهُ - يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ",
    "transliteration": "Sneezer: Al-hamdu lillah. Listener: Yarhamukallah. Sneezer replies: Yahdeekumullahu wa yuslihu balakum.",
    "translation": "Sneezer says: All praise is due to Allah. Muslim brother replies: May Allah have mercy upon you. Sneezer rejoins: May Allah guide you and rectify your condition.",
    "translationEnglish": "Sneezer says: All praise is due to Allah. Muslim brother replies: May Allah have mercy upon you. Sneezer rejoins: May Allah guide you and rectify your condition.",
    "translationUrdu": "Chheenkne wala kahe: Al-hamdu lillah. Sunne wala kahe: Yarhamukallah. Phir chheenkne wala kahe: Yahdeekumullahu wa yuslihu balakum.",
    "category": "daily-routine",
    "categoryLabel": "Daily Routine",
    "content": "Fulfills one of the five mandatory rights of a Muslim upon his brother.",
    "meaning": "The mutual bond of social and spiritual brotherhood enacted upon the natural reflex of sneezing.",
    "tldr": "Fulfills one of the five mandatory rights of a Muslim upon his brother.",
    "source": "Sahih Al-Bukhari (Hadith 6224)",
    "sourceBook": "Sahih Al-Bukhari - Kitab al-Adab",
    "hadithNumber": "Hadith 6224",
    "authenticity": "Sahih",
    "badge": "Islamic Manners",
    "benefits": [
      "Sneezing is beloved to Allah because it relieves bodily congestion and induces agility.",
      "Sows deep mutual affection and prayer among believers.",
      "Fulfills a direct right of Islamic companionship."
    ],
    "steps": [
      {
        "title": "Step 1: Lower Voice & Cover Face",
        "desc": "Cover mouth with cloth or arm when sneezing."
      },
      {
        "title": "Step 2: Praise Allah",
        "desc": "Say Alhamdulillahi Rabbil-’Alamin."
      },
      {
        "title": "Step 3: Respond with Mercy",
        "desc": "Listeners reply: Yarhamukallah."
      }
    ],
    "faqs": [
      {
        "question": "What if someone sneezes more than three times?",
        "answer": "The Prophet (PBUH) replied up to three times; beyond that, he said: \"He has a cold,\" and prayed for his recovery."
      }
    ]
  },
  {
    "id": "market-entrance-dua",
    "slug": "market-entrance-dua",
    "title": "Dua for Entering the Marketplace / Shopping Mall",
    "titleEnglish": "Dua for Entering the Marketplace / Shopping Mall",
    "titleArabic": "دُعَاءُ دُخُولِ السُّوقِ",
    "titleUrdu": "بازار اور شاپنگ مال میں داخل ہونے کی دعا",
    "arabicText": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    "transliteration": "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, yuhyi wa yumeetu, wa Huwa hayyul-la yamut, bi yadihil-khayr, wa Huwa ‘ala kulli shay’in Qadir.",
    "translation": "There is no deity worthy of worship except Allah alone, without partner. His is the sovereignty, and His is the praise; He gives life and causes death, and He is the Ever-Living Who never dies. In His hand is all good, and He is over all things omnipotent.",
    "translationEnglish": "There is no deity worthy of worship except Allah alone, without partner. His is the sovereignty, and His is the praise; He gives life and causes death, and He is the Ever-Living Who never dies. In His hand is all good, and He is over all things omnipotent.",
    "translationUrdu": "Allah ke siwa koi ma’bood nahi, Woh akela hai, Us ka koi shareek nahi, Usi ki baadshahi hai aur Usi ke liye tareef hai...",
    "category": "protection",
    "categoryLabel": "Protection & Commerce",
    "content": "Prophet Muhammad (PBUH) promised that whoever recites this upon entering a market, Allah writes for them one million good deeds and erases one million sins.",
    "meaning": "Remembering Allah amidst places of worldly heedlessness, materialism, and distraction.",
    "tldr": "Prophet Muhammad (PBUH) promised that whoever recites this upon entering a market, Allah writes for them one million good deeds and erases one million sins.",
    "source": "Jami` At-Tirmidhi (Hadith 3428) & Sunan Ibn Majah",
    "sourceBook": "Jami` At-Tirmidhi - Kitab ad-Da’awat",
    "hadithNumber": "Hadith 3428",
    "authenticity": "Hasan / Authenticated by Scholars",
    "badge": "Million Deeds Reward",
    "benefits": [
      "One million (1,000,000) good deeds recorded on your heavenly scale.",
      "One million misdeeds erased, and rank elevated by one million degrees.",
      "A house constructed in Paradise (Jannah)."
    ],
    "steps": [
      {
        "title": "Step 1: Enter Commercial Area",
        "desc": "As you enter the bazaar, supermarket, or mall."
      },
      {
        "title": "Step 2: Recite Sincerely",
        "desc": "Declare the oneness and immortality of Allah amidst the bustle of commerce."
      }
    ],
    "faqs": [
      {
        "question": "Why is the reward for this dua so massive?",
        "answer": "Because markets are places where people forget the Hereafter in pursuit of money; remembering Allah there shines as a rare beacon of sincere faith."
      }
    ]
  },
  {
    "id": "protection-from-calamity-dua",
    "slug": "protection-from-calamity-dua",
    "title": "Dua for Total Protection from Sudden Calamities",
    "titleEnglish": "Dua for Total Protection from Sudden Calamities",
    "titleArabic": "دُعَاءُ التَّحْصِينِ وَالْحِفْظِ مِنَ الْفَجْأَةِ",
    "titleUrdu": "ہر قسم کے ناگہانی نقصان اور مصیبت سے حفاظت کی دعا",
    "arabicText": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    "transliteration": "Bismillahilladhi la yadurru ma’asmihi shay’un fil-ardi wa la fis-sama’i wa Huwas-Sami’ul-’Aleem.",
    "translation": "In the Name of Allah, with Whose Name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
    "translationEnglish": "In the Name of Allah, with Whose Name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
    "translationUrdu": "Allah ke naam ke sath jis ke naam ki barkat se zameen o aasmaan mein koi cheez nuqsan nahi pohancha sakti, aur Woh khoob sunne wala, khoob janne wala hai.",
    "category": "protection",
    "categoryLabel": "Protection & Safety",
    "content": "Prophet Muhammad (PBUH) stated that whoever recites this 3 times in the morning and 3 times in the evening will not be harmed by anything.",
    "meaning": "Infallible spiritual immunity against poisons, sudden tragedies, natural disasters, and malevolent attacks.",
    "tldr": "Prophet Muhammad (PBUH) stated that whoever recites this 3 times in the morning and 3 times in the evening will not be harmed by anything.",
    "source": "Sunan Abi Dawud (Hadith 5088) & Jami` At-Tirmidhi (3388)",
    "sourceBook": "Sunan Abi Dawud - Kitab al-Adab",
    "hadithNumber": "Hadith 5088",
    "authenticity": "Sahih",
    "badge": "Universal Shield",
    "benefits": [
      "Complete immunity against sudden calamity (Faj’at al-Bala).",
      "Protection from poisonous venomous stings, food poisoning, and toxins.",
      "Unbroken peaceful reassurance throughout day and night."
    ],
    "steps": [
      {
        "title": "Step 1: Recite 3 Times at Dawn",
        "desc": "After Fajr prayer."
      },
      {
        "title": "Step 2: Recite 3 Times at Dusk",
        "desc": "After Maghrib prayer."
      }
    ],
    "faqs": [
      {
        "question": "What did Uthman ibn Affan (RA) say about this Dua?",
        "answer": "He reported directly from the Prophet (PBUH) that nothing on earth or heaven will harm the reciter if repeated three times daily."
      }
    ]
  }
];

export const duasData = DUAS_DATA;

export function getDuaBySlug(slug: string): DuaItemDetail | undefined {
  const cleanSlug = slug.toLowerCase().trim().replace(/^\/duas\//, '').replace(/^\//, '').replace(/\/$/, '');
  return DUAS_DATA.find(d => d.slug === cleanSlug || d.id === cleanSlug);
}

export function getAllDuaSlugs(): string[] {
  return DUAS_DATA.map(d => d.slug);
}
