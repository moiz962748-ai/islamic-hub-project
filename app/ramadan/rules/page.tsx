import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ChevronRight, ShieldCheck, CheckCircle2, 
  XCircle, AlertCircle, Play, 
  BookOpen, Users, Clock, Sparkles,
  ArrowRight, FileText, Check, ExternalLink,
  Heart, Compass, HelpCircle, Share2
} from 'lucide-react';
import { FastingLookupTool, CollapsibleFaq, SituationCard } from './FastingRulesInteractive';

export const metadata: Metadata = {
  title: "Fasting Rules in Ramadan: What Breaks the Fast, Exemptions and Qadha",
  description: "Comprehensive guide to Ramadan fasting rules. Explore core Fiqh rulings, exemptions, medical advice, and valid/invalid conditions according to major Islamic schools of thought.",
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
      "name": "Fasting Rules in Ramadan: What Breaks the Fast, Exemptions and Qadha",
      "description": "Essential fasting guidelines, nullifiers, and exemptions for Ramadan."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan Hub", "item": "https://yourdomain.com/ramadan" },
        { "@type": "ListItem", "position": 3, "name": "Fasting Rules", "item": "https://yourdomain.com/ramadan/rules" }
      ]
    }
  ]
};

export default function FastingRulesPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <section className="space-y-6 pt-2">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-xs sm:text-sm font-medium text-neutral-400 space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <Link href="/ramadan" className="hover:text-white transition-colors">Ramadan</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-neutral-200">Fasting Rules</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Fasting Rules in Ramadan: <br className="hidden sm:inline" />
            <span className="text-neutral-200">
              What Breaks the Fast, Exemptions and Qadha
            </span>
          </h1>

          {/* Trust Badge Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 border-y border-neutral-900 py-3.5">
            <div className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800 rounded-full px-3 py-1 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Reviewed by FIQH ADVISORY BOARD</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span>8 min read</span>
            <span className="text-neutral-600">•</span>
            <span>Updated: Ramadan 2026 / 1447</span>
          </div>

          {/* Quick Answer & Video Split Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
            {/* Quick Answer Card */}
            <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-amber-500 font-mono text-[11px] font-bold tracking-widest uppercase block mb-3">
                  QUICK ANSWER
                </span>
                <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
                  Fasting (<span className="text-white font-semibold">Sawm</span>) means abstaining from food, drink and marital relations from true dawn (Fajr) to sunset (Maghrib) with the intention to worship Allah. Deliberate eating or drinking breaks the fast. Forgetfully eating does not. Illness, travel and certain circumstances provide exemptions that require Qadha or Fidya.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-neutral-900 text-xs text-neutral-400">
                This guide covers classical consensus across the four Sunni schools of thought (Hanafi, Shafi'i, Maliki, Hanbali) alongside modern medical rulings.
              </div>
            </div>

            {/* Video / Media Preview Card */}
            <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
              {/* Background Arch Silhouette Graphic */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-white rounded-full"></div>
                <div className="w-36 h-36 border-2 border-white rounded-t-full absolute"></div>
              </div>

              {/* Center Play Button Graphic */}
              <div className="flex-1 flex flex-col items-center justify-center py-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 fill-black ml-1 text-black" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>Listen/Watch: Essential Fiqh Rulings of Sawm</span>
                <span className="text-neutral-500 font-mono">12:45</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 1: START HERE                                     */}
        {/* ========================================================= */}
        <section id="start-here" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Start here
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              First time or need a quick refresher? Start here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* 3 Step Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-500 uppercase block mb-2">
                    STEP 01
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                    WHAT IS FASTING
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Core definition, intention (Niyyah), and daily rhythm from Fajr to Maghrib.
                  </p>
                </div>
                <a href="#fast-at-a-glance" className="text-xs text-white font-medium hover:underline inline-flex items-center gap-1">
                  Read foundational guide ➔
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-sky-400 uppercase block mb-2">
                    STEP 02
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                    FOR WHOM IS IT OBLIGATORY
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Age, sanity, physical capability, and temporary conditions that defer the obligation.
                  </p>
                </div>
                <a href="#rules-by-situation" className="text-xs text-white font-medium hover:underline inline-flex items-center gap-1">
                  Check eligibility criteria ➔
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase block mb-2">
                    STEP 03
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                    SUMMARY OF RULES
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    A 3-minute executive summary of essentials, nullifiers, and makeup fasts.
                  </p>
                </div>
                <a href="#four-schools" className="text-xs text-white font-medium hover:underline inline-flex items-center gap-1">
                  Read summary guide ➔
                </a>
              </div>
            </div>

            {/* Right Mini Table of Contents */}
            <div className="lg:col-span-3 bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-3">
                  ON THIS PAGE
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  <li><a href="#start-here" className="hover:text-white transition-colors">• Start here</a></li>
                  <li><a href="#lookup-tool" className="hover:text-white transition-colors">• Does it break the fast?</a></li>
                  <li><a href="#fast-at-a-glance" className="hover:text-white transition-colors">• The fast at a glance</a></li>
                  <li><a href="#all-guides" className="hover:text-white transition-colors">• All fasting guides</a></li>
                  <li><a href="#rules-by-situation" className="hover:text-white transition-colors">• Rules by situation</a></li>
                  <li><a href="#four-schools" className="hover:text-white transition-colors">• Schools comparison</a></li>
                  <li><a href="#three-principles" className="hover:text-white transition-colors">• Three principles</a></li>
                  <li><a href="#faqs" className="hover:text-white transition-colors">• FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: DOES IT BREAK THE FAST? (LOOKUP TOOL)          */}
        {/* ========================================================= */}
        <section id="lookup-tool" className="space-y-4 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Does it break the fast?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Search an action, medicine, or scenario to see its ruling immediately.
            </p>
          </div>

          <FastingLookupTool />
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: THE FAST AT A GLANCE                           */}
        {/* ========================================================= */}
        <section id="fast-at-a-glance" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              The fast at a glance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Quick status matrix according to the consensus of scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Breaks the fast */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-900">
                  <span className="text-rose-400 font-bold text-sm flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-400" /> Breaks the fast
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Deliberate food, drink or smoking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Deliberate vomiting (mouthful)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Marital relations during fasting hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Menstruation or post-natal bleeding</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] text-neutral-400 font-mono">
                Requires Qadha makeup day
              </div>
            </div>

            {/* Card 2: Does not break the fast */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-900">
                  <span className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Does not break the fast
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Eating or drinking by pure mistake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Swallowing one's own natural saliva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Non-nutritional injections & vaccines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Brushing teeth or Miswak without swallowing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] text-neutral-400 font-mono">
                100% valid • Continue fast
              </div>
            </div>

            {/* Card 3: Depends on the situation */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-900">
                  <span className="text-amber-400 font-bold text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" /> Depends on situation
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Asthma inhaler (majority: breaks; minority: exempt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Eye or ear drops reaching the throat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Cupping (Hijama) causing severe weakness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Water accidentally entering mouth during Wudu</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-900 text-[11px] text-neutral-400 font-mono">
                Scholars differ • Consult guide
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: ALL FASTING GUIDES (4 COLUMNS)                 */}
        {/* ========================================================= */}
        <section id="all-guides" className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              All fasting guides
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              In-depth research guides and verified Fiqh rulings for every scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Column 1: What Breaks the Fast */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> What Breaks
                </span>
                <Link href="/ramadan/rules/nullifiers" className="text-[11px] text-neutral-400 hover:text-white">
                  View all ➔
                </Link>
              </div>

              <div className="space-y-2.5">
                <Link href="/ramadan/rules/nullifiers" className="block p-3.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors group">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors mb-1">
                    Actions that break the fast
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Deliberate invalidators and general Fiqh conditions.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/50 text-rose-300">
                    Breaks Fast • Qadha
                  </span>
                </Link>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Eating by mistake
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Prophetic ruling on unintentional eating out of forgetfulness.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/50 text-emerald-300">
                    Does Not Break • Excused
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Qadha and Kaffarah
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Major expiation penalties and counting makeup days.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-amber-300">
                    Expiation • Fiqh
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Saliva, toothpaste, miswak
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Daily dental hygiene and accidental swallowing rules.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800/50 text-blue-300">
                    Permissible
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Medical */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span> Medical
                </span>
                <span className="text-[11px] text-neutral-400">4 Guides</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Inhalers and drops
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Detailed rulings for asthma sprays, eye & ear drops.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-amber-300">
                    Scholars Differ
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Injections, vaccines, IV
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Nutritional glucose drips vs therapeutic shots.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/50 text-emerald-300">
                    Non-Nutritional Valid
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Blood tests and cupping
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Diagnostic blood work, Hijama, and blood donation.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800/50 text-blue-300">
                    Permissible
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Fasting with diabetes
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Monitoring blood glucose levels and medical safety advice.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-amber-300">
                    Exemption if Harmed
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Exemptions */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Exemptions
                </span>
                <span className="text-[11px] text-neutral-400">4 Guides</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Pregnancy and nursing
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Maternal and infant health considerations & makeup rules.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-amber-300">
                    Exempt if Harm Feared
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Travellers
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Safar distance thresholds (48 miles / 77 km) & concessions.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800/50 text-blue-300">
                    Concession • Defer Fast
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Elderly and Fidya
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Daily monetary compensation rates for permanent inability.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800/50 text-purple-300">
                    Pay Fidya
                  </span>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Menstruation
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Obligatory cessation during Hayd and post-natal Nifas.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/50 text-rose-300">
                    Obligatory Deferral
                  </span>
                </div>
              </div>
            </div>

            {/* Column 4: Times and Extras */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Times & Extras
                </span>
                <span className="text-[11px] text-neutral-400">4 Guides</span>
              </div>

              <div className="space-y-2.5">
                <Link href="/ramadan/timings" className="block p-3.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors group">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    Suhoor and iftar timings
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Pre-dawn blessings and hurried fast-breaking etiquette.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/50 text-emerald-300">
                    Sunnah Timetable
                  </span>
                </Link>

                <Link href="/ramadan/overview" className="block p-3.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors group">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-400 transition-colors mb-1">
                    Ramadan 2027 dates
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Astronomical calendar and crescent moon sightings.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/70 border border-sky-800/50 text-sky-300">
                    Calendar Overview
                  </span>
                </Link>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                    Laylatul Qadr
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Seeking the Night of Power in the last ten odd nights.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-amber-300">
                    Last 10 Nights
                  </span>
                </div>

                <Link href="/duas" className="block p-3.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors group">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    Duas for fasting
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">Arabic audio and Urdu/English translations of fasting Duas.</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/50 text-emerald-300">
                    Authentic Duas
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: RULES BY SITUATION                             */}
        {/* ========================================================= */}
        <section id="rules-by-situation" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Rules by situation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Fiqh rules categorized according to your life circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SituationCard
              title="Travellers"
              items={[
                { heading: "Distance Threshold (Safar)", desc: "Journeys exceeding ~48 miles (77 km) qualify for travel concessions across all schools." },
                { heading: "When to Legally Break", desc: "You may defer fasts once you physically leave the city borders of your home residence." },
                { heading: "Making Up Missed Days", desc: "Missed days during travel must be made up day-for-day before the next Ramadan begins." }
              ]}
            />

            <SituationCard
              title="Patients and Elderly"
              items={[
                { heading: "Chronic vs Temporary Illness", desc: "Temporary sickness requires Qadha makeup days; incurable chronic illness requires daily Fidya." },
                { heading: "Fidya Calculation Rates", desc: "Feeding one needy person two balanced meals (~$10-$15 per missed day) or 1.6 kg wheat." },
                { heading: "Following Medical Advice", desc: "If a qualified physician warns that fasting will cause medical damage, abstaining is obligatory." }
              ]}
            />

            <SituationCard
              title="Women"
              items={[
                { heading: "Rules on Menses (Hayd)", desc: "Fasting is strictly prohibited during menstruation. Even if bleeding begins 1 minute before Maghrib, the fast must be made up." },
                { heading: "Post-Natal Bleeding (Nifas)", desc: "Mothers are exempt during post-partum bleeding up to 40 days, making up days later." },
                { heading: "Pregnancy & Nursing Safety", desc: "If a mother fears for her own health or her child's nourishment, she is permitted to defer." }
              ]}
            />
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: HOW THE FOUR SCHOOLS COMPARE                   */}
        {/* ========================================================= */}
        <section id="four-schools" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              How the four schools compare
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Summary of rulings across Hanafi, Shafi'i, Maliki, and Hanbali schools of thought.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-neutral-900/90 border-b border-neutral-800 text-neutral-400 font-mono uppercase text-[11px]">
                    <th className="py-4 px-5 font-semibold">SCENARIO</th>
                    <th className="py-4 px-4 font-semibold">HANAFI</th>
                    <th className="py-4 px-4 font-semibold">SHAFI'I</th>
                    <th className="py-4 px-4 font-semibold">MALIKI</th>
                    <th className="py-4 px-4 font-semibold">HANBALI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-5 font-medium text-white">Asthma Inhalers</td>
                    <td className="py-4 px-4 text-rose-400 font-medium">Breaks the fast</td>
                    <td className="py-4 px-4 text-rose-400 font-medium">Breaks the fast</td>
                    <td className="py-4 px-4 text-rose-400 font-medium">Breaks the fast</td>
                    <td className="py-4 px-4 text-rose-400 font-medium">Breaks the fast</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-5 font-medium text-white">Non-Nutritional Injections</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-5 font-medium text-white">Cupping (Hijama)</td>
                    <td className="py-4 px-4 text-amber-400 font-medium">Disliked (Makruh)</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-amber-400 font-medium">Disliked (Makruh)</td>
                    <td className="py-4 px-4 text-rose-400 font-medium">Breaks the fast</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-5 font-medium text-white">Eating by Mistake (Forgetfulness)</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-amber-400 font-medium">Breaks (Qadha due)</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-5 font-medium text-white">Eye & Ear Drops</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                    <td className="py-4 px-4 text-amber-400 font-medium">Breaks if tasted</td>
                    <td className="py-4 px-4 text-emerald-400 font-medium">Does not break</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-neutral-950 border-t border-neutral-900 text-xs text-neutral-400 flex items-center justify-between">
              <span>* Consult your qualified local scholar or community Imam for specific personal circumstances.</span>
              <span className="font-mono text-neutral-400">Fiqh Council Consensus</span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: THREE PRINCIPLES TO REMEMBER                   */}
        {/* ========================================================= */}
        <section id="three-principles" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Three principles to remember
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* 3 Numbered Principles */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    The intention defines the act
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Prophet Muhammad (ﷺ) said: "Actions are by intention." Eating or drinking out of pure forgetfulness carries no spiritual blemish and does not break the fast.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    A concession is an act of mercy, not failure
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    "Allah loves that His concessions are accepted, just as He dislikes disobedience." (Musnad Ahmad). If sick or traveling, accepting the dispensation is Sunnah.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Certainty is not overturned by doubt
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    A core legal maxim: <span className="text-neutral-200 italic">Al-Yaqin la Yazulu bish-Shakk</span>. Baseless whispers (Waswasah) about accidentally swallowing moisture during Wudu do not break your fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Summary Badge Card */}
            <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                  SUMMARY MATRIX
                </span>
                <h4 className="text-base font-bold text-white mb-4">
                  What Breaks the Fast and What Does Not
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900/50">
                    <strong className="text-rose-400 block mb-1">Invalidators</strong>
                    <ul className="text-neutral-400 space-y-1 text-[11px]">
                      <li>• Eating/drinking</li>
                      <li>• Marital relations</li>
                      <li>• Induced vomiting</li>
                      <li>• Menstruation</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
                    <strong className="text-emerald-400 block mb-1">Permissible</strong>
                    <ul className="text-neutral-400 space-y-1 text-[11px]">
                      <li>• Forgetful eating</li>
                      <li>• Normal saliva</li>
                      <li>• Injections & IV</li>
                      <li>• Brushing teeth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>Verified Fiqh Knowledge Base</span>
                <span className="text-white font-medium">IslamHub Fiqh</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 8: BEYOND THE RULES                               */}
        {/* ========================================================= */}
        <section className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Beyond the rules
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Deepen your spiritual connection this Ramadan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Ramadan Overview Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Ramadan Overview &amp; Virtues
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Fasting is the vehicle, but Taqwa (God-consciousness) is the ultimate destination. Explore the history, spiritual benefits, and nightly Taraweeh prayers of the blessed month.
                </p>
              </div>
              <Link href="/ramadan" className="text-sm text-white font-semibold hover:underline inline-flex items-center gap-1.5">
                Explore Ramadan hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Daily Duas Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Daily Duas for Fasting
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Access authentic supplications for Suhoor, Iftar, the last 10 nights of Ramadan, and seeking forgiveness with audio recitations and verified Hadith sources.
                </p>
              </div>
              <Link href="/duas" className="text-sm text-white font-semibold hover:underline inline-flex items-center gap-1.5">
                Explore fasting Duas directory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 9: FREQUENTLY ASKED QUESTIONS                     */}
        {/* ========================================================= */}
        <section id="faqs" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Clear answers to the most common questions about fasting.
            </p>
          </div>

          <div className="space-y-3">
            <CollapsibleFaq
              question="Does using an asthma inhaler break the fast?"
              answer="According to the majority of classical and contemporary scholars across the Hanafi, Shafi'i, Maliki, and Hanbali schools, using an asthma inhaler invalidates the fast because physical medication particles enter the stomach via the throat. Patients who require emergency inhalers should use them immediately without hesitation for medical safety, and make up the day (Qadha) later when recovered, or pay Fidya if their asthma is permanent."
            />

            <CollapsibleFaq
              question="Is brushing teeth with toothpaste allowed while fasting?"
              answer="Brushing teeth with toothpaste is strictly permissible but generally considered disliked (Makruh) by scholars due to the severe risk of swallowing foam or flavor. If any toothpaste or flavored water is swallowed into the throat, the fast is nullified and must be made up. Using a traditional dry Miswak (Arak twig) is universally Sunnah and permissible at any time of the day."
            />

            <CollapsibleFaq
              question="What is the difference between Qadha, Fidya and Kaffarah?"
              answer="Qadha refers to making up missed days of fasting on a day-for-day basis after Ramadan. Fidya is financial compensation paid by the elderly or permanently sick who cannot fast and cannot make it up (~$10-$15 to feed one poor person per day). Kaffarah is a severe legal expiation required only when a person deliberately breaks a valid fast without any valid excuse (e.g. through marital intimacy), requiring fasting 60 consecutive days or feeding 60 needy persons."
            />

            <CollapsibleFaq
              question="Does swallowing saliva or mucus break the fast?"
              answer="Swallowing your own natural saliva inside the mouth does not break the fast by complete unanimous consensus of all scholars, as it is natural and unavoidable. Swallowing normal phlegm or mucus that drains down the throat is also excused by the vast majority of jurists. However, intentionally spitting into a cup and drinking it back, or gathering deliberate saliva in the mouth, is disliked."
            />

            <CollapsibleFaq
              question="Does vomiting break the fast?"
              answer="If vomiting occurs involuntarily (due to illness, food poisoning, or pregnancy nausea), the fast remains 100% valid and you should simply rinse your mouth and continue fasting. However, if a person deliberately induces vomiting by sticking a finger down their throat, the fast is invalidated and one day of Qadha is required."
            />

            <CollapsibleFaq
              question="If I am traveling during Ramadan, is it better to fast or break it?"
              answer="If travel is comfortable and poses no severe hardship, the majority of scholars consider completing the fast to be more virtuous. However, taking the concession to break the fast and making it up later is fully lawful and Sunnah if travel is strenuous or exhausting."
            />
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 10: REVIEW AND SOURCES                            */}
        {/* ========================================================= */}
        <section className="pt-6 border-t border-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Review Verification Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Fiqh Advisory Review
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  This hub has been reviewed and verified by senior scholars of Islamic jurisprudence in accordance with classical Sunni consensus and modern Islamic Fiqh Academy resolutions.
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                Verified Islamic Knowledge Base
              </span>
            </div>

            {/* References Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                  PRIMARY SOURCES &amp; REFERENCES
                </span>
                <ul className="text-xs text-neutral-400 space-y-1.5">
                  <li>• Sahih al-Bukhari &amp; Sahih Muslim (<span className="text-neutral-300">Kitab al-Sawm</span>)</li>
                  <li>• Al-Majmu' Sharh al-Muhadhdhab (<span className="text-neutral-300">Imam al-Nawawi</span>)</li>
                  <li>• Al-Hidayah &amp; Radd al-Muhtar (<span className="text-neutral-300">Hanafi Fiqh</span>)</li>
                  <li>• International Islamic Fiqh Academy (<span className="text-neutral-300">IFA Resolutions</span>)</li>
                </ul>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 pt-3">
                Updated: Ramadan 1447 / 2026
              </span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
