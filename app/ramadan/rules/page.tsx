import Link from 'next/link';
import FastingVirtuesBlock from '@/src/components/FastingVirtuesBlock';
import { 
  ChevronRight, ShieldCheck, CheckCircle2, 
  XCircle, AlertCircle, PlayCircle, 
  Ban, Baby, Scale, Stethoscope, 
  HelpCircle, Info, Globe, Compass,
  BookOpen, Users, Clock, Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Fasting Rules & Guidelines 2026: Fiqh Rulings, Exemptions & Invalidators",
  description: "Comprehensive guide to Ramadan fasting rules. Explore core Fiqh rulings, exemptions, medical advice, and valid/invalid conditions according to major Islamic schools of thought.",
  openGraph: {
    title: "Fasting Rules & Guidelines 2026: Fiqh Rulings, Exemptions & Invalidators",
    description: "Comprehensive guide to Ramadan fasting rules. Explore core Fiqh rulings, exemptions, medical advice, and valid/invalid conditions.",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/ramadan/rules",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://yourdomain.com/ramadan/rules/#webpage",
      "url": "https://yourdomain.com/ramadan/rules",
      "name": "Fasting Rules & Guidelines: Fiqh Rulings, Exemptions & Medical Advice",
      "description": "Essential fasting guidelines, nullifiers, and exemptions for Ramadan."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan Hub", "item": "https://yourdomain.com/ramadan" },
        { "@type": "ListItem", "position": 3, "name": "Rules & Guidelines", "item": "https://yourdomain.com/ramadan/rules" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does using an asthma inhaler break the fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "According to the majority of contemporary scholars across Hanafi, Shafi'i, Maliki, and Hanbali schools, using an asthma inhaler breaks the fast because physical particles enter the stomach via the throat. Those who must use it are exempt and must pay Fidya or make up the fast later." }
        },
        {
          "@type": "Question",
          "name": "Is brushing teeth allowed while fasting?",
          "acceptedAnswer": { "@type": "Answer", "text": "Brushing teeth with toothpaste is permissible but generally disliked (makruh) due to the risk of swallowing. Using a Miswak is highly encouraged. If any paste or water is swallowed, the fast is nullified." }
        },
        {
          "@type": "Question",
          "name": "Does swallowing saliva break the fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "Swallowing your own natural saliva does not break the fast, as it is unavoidable. However, swallowing mucus that has entered the mouth, or gathering saliva deliberately to swallow, is disliked or prohibited depending on the school of thought." }
        },
        {
          "@type": "Question",
          "name": "What happens if I miss fasts due to chronic illness?",
          "acceptedAnswer": { "@type": "Answer", "text": "If a chronic illness prevents you from fasting and there is no hope for recovery to make up the fasts, you are exempt. Instead, you must pay Fidya, which is feeding one person in need for each missed day." }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Essential Fiqh Rulings of Sawm Explained",
      "description": "Understand the core principles, nullifiers, and exemptions of Ramadan fasting according to major Islamic schools of jurisprudence.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "uploadDate": "2026-02-15T10:00:00+00:00",
      "embedUrl": "https://yourdomain.com/embed/ramadan-fasting-rules"
    }
  ]
};

export default function FastingRulesPage() {
  return (
    <main className="min-h-screen bg-black text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. METADATA & E-E-A-T TRUST HEADER */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/ramadan" className="hover:text-white transition-colors">Ramadan</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-slate-200">Rules & Guidelines</span>
          </nav>

          <Link href="/about/scholarly-board/" className="flex items-center space-x-2 w-fit bg-neutral-800 border border-neutral-800 rounded-full px-3 py-1.5 hover:bg-neutral-800 transition-colors group">
            <ShieldCheck className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh & Shariah Advisory Council</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Fasting Rules & Guidelines: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">
              Fiqh Rulings, Exemptions & Medical Advice
            </span>
          </h1>

          <div className="max-w-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Fasting (Sawm) during Ramadan requires a clear intention (Niyyah) and complete abstinence from food, drink, and intimate relations from true dawn (Fajr) until sunset (Maghrib). Understanding the specific Fiqh rulings ensures your fast remains valid and spiritually fulfilling.
            </p>
          </div>
        </header>

        {/* FASTING ESSENTIALS & OVERVIEW */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 my-8 font-sans">
          <div className="border-b border-neutral-800 pb-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-50 tracking-tight">
              Fasting Essentials &amp; Overview
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Foundational principles, obligations, and daily rhythms of Sawm in Islamic tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 - What is Sawm? */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
                  <BookOpen className="w-5 h-5 text-neutral-200" />
                </div>
                <h3 className="text-base font-semibold text-neutral-100 mb-2">
                  What is Sawm?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Islamic fasting (<span className="text-neutral-200 font-medium">Sawm</span>) is the intentional abstinence from food, drink, and intimate relations from the break of dawn (<span className="text-neutral-200">Fajr</span>) until sunset (<span className="text-neutral-200">Maghrib</span>), undertaken solely for Allah&apos;s sake with sincere devotion.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Pillar of Sincerity • Imsak
              </div>
            </article>

            {/* Card 2 - Age & Obligation */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
                  <Users className="w-5 h-5 text-neutral-200" />
                </div>
                <h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Age &amp; Obligation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Fasting is an obligatory duty upon every adult, sane, and physically capable Muslim upon reaching puberty (<span className="text-neutral-200 font-medium">Baligh</span>). Children prior to puberty are encouraged to practice half-day or intermittent fasts gradually to nurture stamina.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Adulthood • Gradual Training
              </div>
            </article>

            {/* Card 3 - Daily Timings */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
                  <Clock className="w-5 h-5 text-neutral-200" />
                </div>
                <h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Daily Timings
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Each fasting day centers around two key meals: <span className="text-neutral-200 font-medium">Suhoor</span>, the blessed pre-dawn meal consumed before the Fajr adhan, and <span className="text-neutral-200 font-medium">Iftar</span>, the celebratory fast-breaking meal taken immediately at sunset with Maghrib.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Suhoor (Fajr) → Iftar (Maghrib)
              </div>
            </article>

            {/* Card 4 - Key Significance */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
                  <Sparkles className="w-5 h-5 text-neutral-200" />
                </div>
                <h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Key Significance
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Ramadan is the <span className="text-neutral-200 font-medium">4th Pillar of Islam</span> and the sacred month wherein the Holy Qur&apos;an was first revealed upon the Night of Decree (<span className="text-neutral-200">Laylat al-Qadr</span>), serving as an annual spiritual renewal and moral reset.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                4th Pillar • Qur&apos;anic Revelation
              </div>
            </article>
          </div>
        </section>

        {/* ESSENTIAL FASTING DUAS (SUHOOR & IFTAR) */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 my-8 font-sans">
          <div className="border-b border-neutral-800 pb-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-50 tracking-tight">
              Essential Fasting Duas
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Authentic supplications for starting and breaking your fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Suhoor / Intention Dua */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-900">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                    Dua for Suhoor (Intention)
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    Pre-Dawn / Fajr
                  </span>
                </div>

                {/* Arabic */}
                <div className="my-4 text-right" dir="rtl">
                  <p className="text-xl sm:text-2xl font-serif text-neutral-100 leading-loose tracking-wide">
                    وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
                  </p>
                </div>

                {/* Transliteration */}
                <div className="mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Transliteration
                  </span>
                  <p className="text-sm sm:text-base text-neutral-300 font-medium italic">
                    &ldquo;Wa bi-sawmi ghadin nawaytu min shahri Ramadan.&rdquo;
                  </p>
                </div>

                {/* Translation */}
                <div className="pt-3 border-t border-neutral-900">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Translation
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    &ldquo;I intend to keep the fast tomorrow for the month of Ramadan.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Niyyah (Heart Intention)</span>
                <span>Before Dawn</span>
              </div>
            </article>

            {/* Card 2: Iftar / Fast Breaking Dua */}
            <article className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-900">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                    Dua for Iftar (Breaking Fast)
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    Sunset / Maghrib
                  </span>
                </div>

                {/* Arabic */}
                <div className="my-4 text-right" dir="rtl">
                  <p className="text-xl sm:text-2xl font-serif text-neutral-100 leading-loose tracking-wide">
                    ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ
                  </p>
                </div>

                {/* Transliteration */}
                <div className="mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Transliteration
                  </span>
                  <p className="text-sm sm:text-base text-neutral-300 font-medium italic">
                    &ldquo;Dhahaba adh-dhama&#39;u wabtallati-l-&#39;urooqu wa thabata-l-ajru in sha&#39; Allah.&rdquo;
                  </p>
                </div>

                {/* Translation */}
                <div className="pt-3 border-t border-neutral-900">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Translation
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    &ldquo;The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Sunan Abi Dawud (2357)</span>
                <span>Authentic (Sahih)</span>
              </div>
            </article>
          </div>
        </section>

        {/* CORE VIRTUES & HEALTH BENEFITS OF FASTING */}
        <FastingVirtuesBlock />

        {/* 2. AEO DIRECT ANSWER BOX */}
        <section className="w-full bg-neutral-800 border-2 border-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <CheckCircle2 className="w-48 h-48 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
            <Info className="w-6 h-6 mr-3 text-white" />
            Core Fasting Conditions (At a Glance)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-3">
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Essential Pillars (Arkan)
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <strong>Intention (Niyyah):</strong> Must be made before Fajr for mandatory fasts.</li>
                <li>• <strong>Abstinence (Imsak):</strong> Complete cessation of all invalidators from Fajr to Maghrib.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-rose-400 font-semibold uppercase tracking-wider text-sm flex items-center">
                <XCircle className="w-4 h-4 mr-2" /> What Nullifies Fasting
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Eating or drinking deliberately.</li>
                <li>• Marital relations during fasting hours.</li>
                <li>• Deliberately inducing vomiting.</li>
                <li>• Menstruation or postpartum bleeding.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-amber-400 font-semibold uppercase tracking-wider text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" /> Does NOT Nullify
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Unintentional eating or drinking (forgetfulness).</li>
                <li>• Non-nutritional injections (e.g., vaccines).</li>
                <li>• Eye or ear drops (unless tasted in the throat).</li>
                <li>• Brushing teeth (provided nothing is swallowed).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. FEATURED MEDIA & METHODOLOGY SECTION */}
        <section className="w-full p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left Column: Video */}
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800/80 group hover:border-slate-700 transition-colors cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10" />
              
              <button className="z-20 relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-neutral-800 rounded-full blur-2xl animate-pulse" />
                <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-90 drop-shadow-2xl mb-4" />
                <span className="text-white font-semibold tracking-wide drop-shadow-md text-center px-4">Watch: Essential Fiqh Rulings of Sawm</span>
              </button>
            </div>
            
            {/* Right Column: Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Key Fiqh Principles</h3>
              <ul className="space-y-5">
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">School Differences (Madhahib)</strong>
                    <span className="text-slate-400 leading-relaxed">While core principles are universal, minor rulings (like the validity of inhalers or ear drops) vary across Hanafi, Shafi'i, Maliki, and Hanbali consensus. Follow your local scholar's guidance consistently.</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Exemption Obligations</strong>
                    <span className="text-slate-400 leading-relaxed">Temporary exemptions (travel, sickness) require making up the fasts (Qadha). Permanent exemptions (chronic illness, old age) require paying compensation (Fidya).</span>
                  </div>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                  <div>
                    <strong className="text-slate-200 text-base block mb-1">Accidental vs. Deliberate Actions</strong>
                    <span className="text-slate-400 leading-relaxed">Prophetic tradition dictates that forgetting you are fasting and eating does not break the fast. However, deliberate nullification without valid excuse requires severe expiation (Kaffarah).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. COMPREHENSIVE CONTENT SILO DIRECTORY */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Explore Detailed Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* SILO 1: INVALIDATORS & NULLIFIERS */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Ban className="w-4 h-4 mr-2 text-rose-400" /> Invalidators & Nullifiers
              </h3>
              <Link href="/ramadan/rules/nullifiers/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Actions That Nullify Fasting (Mufattirat)</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/accidental-nullification/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Unintentional vs. Deliberate Fast Breaking</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/kaffarah-qadha/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Kaffarah & Qadha: Major Expiation Rules</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 2: MEDICAL & HEALTHCARE FIQH */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Stethoscope className="w-4 h-4 mr-2 text-white" /> Medical & Healthcare
              </h3>
              <Link href="/ramadan/rules/medical-inhalers-drops/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Inhalers, Eye/Ear Drops & Nasal Sprays</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/injections-iv/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Injections, Vaccines & IV Fluids Rulings</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/blood-tests-cupping/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Blood Tests, Cupping & Donating Blood</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 3: EXEMPTIONS & SPECIAL CASES */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Baby className="w-4 h-4 mr-2 text-sky-400" /> Exemptions & Cases
              </h3>
              <Link href="/ramadan/rules/pregnancy-breastfeeding/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Fasting Rules for Pregnant & Breastfeeding Women</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/travelers-safar/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Travelers' Exemption & Distance Rules (Safar)</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/elderly-chronic-illness/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Elderly, Chronic Illness & Fidya Calculations</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

            {/* SILO 4: DAILY HYGIENE & CONTEMPORARY FIQH */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold uppercase tracking-wider text-xs flex items-center mb-2">
                <Info className="w-4 h-4 mr-2 text-indigo-400" /> Daily Hygiene
              </h3>
              <Link href="/ramadan/rules/toothpaste-miswak/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Using Toothpaste, Miswak & Mouthwash</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/swallowing-saliva/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Swallowing Saliva, Phlegm & Mucus</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
              <Link href="/ramadan/rules/cosmetics-perfume/" className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-neutral-700 hover:bg-slate-800/80 transition-all group shadow-sm flex flex-col h-full">
                <h4 className="text-slate-200 font-semibold mb-3 group-hover:text-white transition-colors text-sm flex-1">Cosmetics, Perfume & Personal Care Rulings</h4>
                <div className="text-white text-xs font-semibold flex items-center mt-auto">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
              </Link>
            </div>

          </div>
        </section>

        {/* 4.5 NEW SECTION: RULES BY DEMOGRAPHIC QUICK-ACCESS MATRIX */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-white mb-6">Rules by Demographic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-black border border-slate-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Globe className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 flex items-center">
                For Travelers
              </h3>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2 relative z-10">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Distance thresholds (Safar)</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> When to legally break the fast</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Obligations for making up days (Qadha)</li>
              </ul>
            </div>

            <div className="bg-black border border-slate-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Stethoscope className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 flex items-center">
                For Patients & Elderly
              </h3>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2 relative z-10">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Chronic vs. temporary illness</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Fidya rates and compensation</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Following expert medical advice</li>
              </ul>
            </div>

            <div className="bg-black border border-slate-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Baby className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 flex items-center">
                For Women
              </h3>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2 relative z-10">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Rules regarding menses (Hayd)</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Post-natal bleeding (Nifas) exceptions</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-white mr-2 mt-0.5 shrink-0"/> Pregnancy and nursing safety rulings</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 5. FIQH COMPARISON MATRIX */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-6">Fiqh Comparison: Common Scenarios</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900/80 border-b-2 border-slate-700">
                  <th className="p-4 text-slate-300 font-semibold w-1/3 rounded-tl-xl">Scenario</th>
                  <th className="p-4 text-slate-300 font-semibold w-1/3">Hanafi Ruling</th>
                  <th className="p-4 text-slate-300 font-semibold w-1/3 rounded-tr-xl">Shafi'i Ruling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-200 font-medium">Asthma Inhalers</td>
                  <td className="p-4 text-rose-400 text-sm">Breaks the fast (requires Qadha/Fidya)</td>
                  <td className="p-4 text-rose-400 text-sm">Breaks the fast (requires Qadha/Fidya)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-200 font-medium">Blood Tests & IVs (Non-Nutritional)</td>
                  <td className="p-4 text-white text-sm">Does not break the fast</td>
                  <td className="p-4 text-white text-sm">Does not break the fast</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-200 font-medium">Cupping (Hijama) / Donating Blood</td>
                  <td className="p-4 text-amber-400 text-sm">Allowed, but disliked (Makruh) if it causes extreme weakness</td>
                  <td className="p-4 text-white text-sm">Does not break the fast</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-200 font-medium">Accidental Swallowing (Forgetting fast)</td>
                  <td className="p-4 text-white text-sm">Does not break the fast</td>
                  <td className="p-4 text-white text-sm">Does not break the fast</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">
            * Note: These are general summaries. Always consult your local qualified scholar for specific personal circumstances.
          </p>
        </section>

        {/* 6. AEO FAQS & JSON-LD SCHEMA */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Does using an asthma inhaler break the fast?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                According to the majority of contemporary scholars across Hanafi, Shafi'i, Maliki, and Hanbali schools, using an asthma inhaler breaks the fast because physical particles enter the stomach via the throat. Those who must use it are exempt and must pay Fidya or make up the fast later.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Is brushing teeth allowed while fasting?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Brushing teeth with toothpaste is permissible but generally disliked (makruh) due to the risk of swallowing. Using a Miswak is highly encouraged. If any paste or water is swallowed, the fast is nullified.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Does swallowing saliva break the fast?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Swallowing your own natural saliva does not break the fast, as it is unavoidable. However, swallowing mucus that has entered the mouth, or gathering saliva deliberately to swallow, is disliked or prohibited depending on the school of thought.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                What happens if I miss fasts due to chronic illness?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                If a chronic illness prevents you from fasting and there is no hope for recovery to make up the fasts, you are exempt. Instead, you must pay Fidya, which is feeding one person in need for each missed day.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
