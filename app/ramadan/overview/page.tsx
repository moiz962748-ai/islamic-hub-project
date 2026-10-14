import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, Clock, Calendar, 
  Info, BookOpen, Star, Moon, Heart, 
  PlayCircle, FileText, ExternalLink, Download,
  ArrowLeft, HelpCircle
} from 'lucide-react';

export const metadata = {
  title: "Ramadan 2026 Overview: History, Significance & Spiritual Obligations",
  description: "Explore the history, significance, and spiritual obligations of Ramadan. Learn about the 4th pillar of Islam, Taqwa, and daily observances.",
  alternates: {
    canonical: "https://yourdomain.com/ramadan/overview",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://yourdomain.com/ramadan/overview/#article",
      "headline": "Ramadan 2026 Overview: History, Significance & Spiritual Obligations",
      "image": "https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80",
      "datePublished": "2026-01-10T08:00:00+00:00",
      "dateModified": "2026-02-15T10:00:00+00:00",
      "author": {
        "@type": "Organization",
        "name": "Fiqh & Shariah Advisory Council",
        "url": "https://yourdomain.com/about/scholarly-board/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ramadan Hub",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"
        }
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://yourdomain.com/ramadan/overview/#video",
      "name": "Visual Guide: Understanding Ramadan & Spiritual Renewal",
      "description": "An essential guide to the purpose of Ramadan, gaining Taqwa, and the holistic nature of fasting.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "uploadDate": "2026-02-01T10:00:00+00:00",
      "duration": "PT4M15S",
      "embedUrl": "https://yourdomain.com/embed/ramadan-overview"
    },
    {
      "@type": "HowTo",
      "name": "How to Prepare Spiritually and Physically for Ramadan",
      "description": "Step-by-step guidance on aligning your mind, body, and schedule for the holy month.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Purify Your Intentions (Niyyah)",
          "text": "Renew your intention to fast solely for the sake of Allah, seeking His forgiveness and pleasure."
        },
        {
          "@type": "HowToStep",
          "name": "Adjust Your Daily Schedule",
          "text": "Begin shifting your sleep and meal times a few weeks prior to adapt to Suhoor and Taraweeh hours."
        },
        {
          "@type": "HowToStep",
          "name": "Set Spiritual Goals",
          "text": "Create a realistic plan for Quran recitation, daily Dhikr, and charitable acts (Sadaqah) throughout the 30 days."
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan", "item": "https://yourdomain.com/ramadan/" },
        { "@type": "ListItem", "position": 3, "name": "Ramadan Essentials", "item": "https://yourdomain.com/ramadan/essentials/" },
        { "@type": "ListItem", "position": 4, "name": "Ramadan Overview", "item": "https://yourdomain.com/ramadan/overview/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does the date of Ramadan change every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ramadan is the ninth month of the Islamic lunar calendar. Because the lunar year is about 11 days shorter than the Gregorian solar year, Ramadan begins approximately 11 days earlier each year."
          }
        },
        {
          "@type": "Question",
          "name": "What is the main purpose of Ramadan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary objective of Ramadan is to attain Taqwa (God-consciousness), self-discipline, and spiritual purification through fasting, prayer, and charity."
          }
        },
        {
          "@type": "Question",
          "name": "Who is required to fast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fasting during Ramadan is obligatory for every sane, healthy, adult Muslim who is not traveling. Exceptions include the sick, elderly, pregnant or nursing women, and those menstruating."
          }
        }
      ]
    }
  ]
};

export default function RamadanOverviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* PHASE 4: TECHNICAL & AI CRAWLABILITY (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PHASE 1: ABOVE-THE-FOLD RESOLUTION */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <Link href="/ramadan" className="hover:text-white transition-colors">Ramadan</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-400">Ramadan Essentials</span>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-200">Ramadan Overview</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ramadan 2026 Overview: <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              History, Significance & Spiritual Obligations
            </span>
          </h1>

          {/* Article Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-y border-slate-800/60 py-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-white" />
              <span>6 Min Read</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-white" />
              <span>Updated: Ramadan 1447 / 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <Link href="/about/scholarly-board/" className="flex items-center space-x-1.5 bg-neutral-800 border border-neutral-800 rounded-full px-3 py-1 hover:bg-neutral-800 transition-colors group">
              <ShieldCheck className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh Board</span>
            </Link>
          </div>

          {/* AEO Direct Answer / TL;DR Box */}
          <div className="w-full bg-neutral-900 border-l-4 border-white rounded-r-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
              <Info className="w-6 h-6 mr-3 text-white" />
              Quick Summary (TL;DR)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Ramadan is the <strong className="text-white">4th Pillar of Islam</strong>, a sacred month commemorating the revelation of the Quran. Its primary spiritual purpose is cultivating <strong className="text-white">Taqwa (God-consciousness)</strong> through absolute abstention from food, drink, and intimate relations from dawn until sunset. Core observances include daily fasting (Sawm), pre-dawn meals (Suhoor), sunset breaking of the fast (Iftar), and nightly congregational prayers (Taraweeh).
            </p>
          </div>
        </header>

        {/* PHASE 3: HERO FEATURED IMAGE */}
        <div className="w-full aspect-[21/9] md:aspect-[3/1] relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80"
            alt="Islamic architecture representing Ramadan and fasting"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* PHASE 2: CONTENT & ENTITY ARCHITECTURE */}
        <div className="max-w-4xl space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <BookOpen className="w-7 h-7 mr-3 text-indigo-400" />
              The Spiritual & Historical Origins of Sawm
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Fasting (Sawm) was officially prescribed for Muslims during the second year after the Hijrah (migration to Medina). However, the practice of fasting spans across previous Abrahamic traditions, unifying believers in the pursuit of spiritual purification.
            </p>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80 italic text-slate-400 border-l-4 border-l-white">
              "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous." <br/>
              <span className="text-white text-sm font-semibold mt-2 block">— Surah Al-Baqarah [2:183-185]</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Ramadan is universally celebrated as the Month of the Quran, honoring the period when the Angel Jibril (Gabriel) descended to reveal the first verses to Prophet Muhammad (PBUH) in the Cave of Hira.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Star className="w-7 h-7 mr-3 text-amber-400" />
              Core Pillars & Daily Observances
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The rhythm of Ramadan reshapes a Muslim's daily life, shifting focus from physical nourishment to spiritual elevation through specific structured practices.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <Moon className="w-6 h-6 text-white mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-lg block mb-1">Suhoor & Iftar</strong>
                  <span className="text-slate-400">The pre-dawn meal (Suhoor) provides physical strength for the day's fast, while the sunset meal (Iftar), traditionally broken with dates, is a moment of immense spiritual joy and answered prayers.</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <Heart className="w-6 h-6 text-white mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-lg block mb-1">Taraweeh & Itikaf</strong>
                  <span className="text-slate-400">Special nightly congregational prayers (Taraweeh) involve extensive Quranic recitation. In the final ten days, many undertake Itikaf (spiritual seclusion) in the mosque to maximize worship.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Calendar className="w-7 h-7 mr-3 text-sky-400" />
              Key Milestones of the Holy Month
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The Prophet (PBUH) described Ramadan as a month whose beginning is mercy, its middle is forgiveness, and its end is liberation from the Hellfire.
            </p>

            {/* HTML Data Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-700">
                    <th className="p-4 text-slate-300 font-semibold w-1/4">Ramadan Phase</th>
                    <th className="p-4 text-slate-300 font-semibold w-1/4">Primary Focus</th>
                    <th className="p-4 text-slate-300 font-semibold">Recommended Actions & Prayers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-white font-medium">First 10 Days</td>
                    <td className="p-4 text-slate-200">Mercy (Rahmah)</td>
                    <td className="p-4 text-slate-400">Seeking God's immense mercy, increasing voluntary charity, and showing kindness to relatives.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-white font-medium">Middle 10 Days</td>
                    <td className="p-4 text-slate-200">Forgiveness (Maghfirah)</td>
                    <td className="p-4 text-slate-400">Intense repentance, reciting Istighfar, and forgiving others to attain divine pardon.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-white font-medium">Last 10 Days</td>
                    <td className="p-4 text-slate-200">Refuge from Fire (Itq min An-Nar)</td>
                    <td className="p-4 text-slate-400">Seeking Laylat al-Qadr (The Night of Decree), performing Itikaf, and dedicating nights to continuous worship.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* PHASE 3: 2-COLUMN LIGHT VIDEO FACADE WRAPPER */}
        <section className="w-full p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-lg">
          {/* LEFT COLUMN: Light Video Facade */}
          <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800/80 group hover:border-slate-700 transition-colors cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80"
              alt="Visual guide thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            
            <button className="z-20 relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-neutral-800 rounded-full blur-2xl animate-pulse" />
              <PlayCircle className="w-16 h-16 text-white opacity-90 drop-shadow-2xl mb-3" />
              <span className="text-white font-semibold tracking-wide text-sm drop-shadow-md text-center px-4">Watch: Understanding Ramadan & Spiritual Renewal</span>
            </button>
          </div>
          
          {/* RIGHT COLUMN: Key Takeaways */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Key Video Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Pillar of Islam:</strong> Fasting during Ramadan is mandatory for every healthy, adult Muslim, serving as a core foundation of faith.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Spiritual Goal:</strong> The primary objective is gaining Taqwa (God-consciousness) and elevating self-discipline above worldly desires.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Holistic Abstinence:</strong> True fasting encompasses refraining not just from food and drink, but also from negative speech, anger, and harmful actions.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* PHASE 5: INTERNAL & EXTERNAL LINKING + UTILITIES */}
        
        {/* Link UP (Parent Hub) */}
        <div className="pt-8 pb-4 border-t border-slate-800">
          <Link href="/ramadan/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ramadan Hub
          </Link>
        </div>

        {/* Links ACROSS (Sibling Navigation Module) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides in This Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/ramadan/prep-checklist/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Ramadan Preparation Checklist</h4>
              <div className="text-white text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/ramadan/taraweeh-guide/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Taraweeh Prayers: Rules & Etiquette</h4>
              <div className="text-white text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/ramadan/laylat-al-qadr/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Laylat al-Qadr: The Night of Decree</h4>
              <div className="text-white text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
          </div>
        </section>

        {/* Utilities: External Sources & Downloadable Asset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col h-full">
            <h4 className="text-slate-100 font-bold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-slate-400" /> References & Citations
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 mb-6 flex-1">
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-white" /> Quranic texts primarily drawn from Surah Al-Baqarah.</li>
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-white" /> Hadith references authenticated via Sahih Al-Bukhari & Sahih Muslim.</li>
            </ul>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <Download className="w-8 h-8 text-white mb-3" />
            <h4 className="text-white font-bold mb-2">Offline Reading Material</h4>
            <p className="text-sm text-slate-400 mb-5">Organize your holy month with our comprehensive daily planner.</p>
            <button className="bg-white text-black hover:bg-neutral-800 text-slate-950 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center text-sm w-full sm:w-auto justify-center">
              Download Printable Ramadan Daily Planner (PDF)
            </button>
          </div>
        </div>

        {/* AEO FAQ Accordion */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Why does the date of Ramadan change every year?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Ramadan is the ninth month of the Islamic lunar calendar. Because the lunar year is about 11 days shorter than the Gregorian solar year, Ramadan begins approximately 11 days earlier each year in the solar calendar.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                What is the main purpose of Ramadan?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                The primary objective of Ramadan is to attain Taqwa (God-consciousness), self-discipline, and spiritual purification through fasting, prayer, and charity, realigning oneself with the teachings of the Quran.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Who is required to fast?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Fasting during Ramadan is obligatory for every sane, healthy, adult Muslim who is not traveling. Exceptions include the sick, elderly, pregnant or nursing women, and those menstruating, who must either make up the days later or provide charity (Fidyah).
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
