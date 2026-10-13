import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, Clock, Calendar, 
  Info, BookOpen, Star, Moon, Heart, 
  PlayCircle, FileText, ExternalLink, Download,
  ArrowLeft, HelpCircle, Users, CheckCircle2, AlertTriangle
} from 'lucide-react';

export const metadata = {
  title: "How to Perform Eid Al-Fitr Prayer: Step-by-Step Rulings & Takbeers",
  description: "Learn how to perform Salat al-Eid step-by-step. Discover the 2-Rak'ah structure, the extra Takbeers across Fiqh schools, and Khutbah rules.",
  alternates: {
    canonical: "https://yourdomain.com/eid/fitr/prayer-guide",
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
      "@id": "https://yourdomain.com/eid/fitr/prayer-guide/#article",
      "headline": "How to Perform Eid Al-Fitr Prayer: Step-by-Step Rulings & Takbeers",
      "image": "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80",
      "datePublished": "2026-03-01T08:00:00+00:00",
      "dateModified": "2026-03-15T10:00:00+00:00",
      "author": {
        "@type": "Organization",
        "name": "Fiqh & Shariah Advisory Council",
        "url": "https://yourdomain.com/about/scholarly-board/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eid Hub",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"
        }
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://yourdomain.com/eid/fitr/prayer-guide/#video",
      "name": "Visual Demonstration: Step-by-Step Eid Prayer Routine",
      "description": "A comprehensive visual guide detailing the Eid prayer routine, extra Takbeers, and post-prayer Khutbah.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "uploadDate": "2026-03-05T10:00:00+00:00",
      "duration": "PT6M45S",
      "embedUrl": "https://yourdomain.com/embed/eid-prayer-guide"
    },
    {
      "@type": "HowTo",
      "name": "How to Perform Eid Al-Fitr Prayer",
      "description": "Step-by-step procedure on performing Salat al-Eid with extra Takbeers.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Form the Intention (Niyyah)",
          "text": "Make a clear intention in your heart to perform two Rak'ahs of Eid Al-Fitr prayer behind the Imam, with the requisite extra Takbeers."
        },
        {
          "@type": "HowToStep",
          "name": "First Rak'ah Extra Takbeers",
          "text": "After the opening Takbeer and Thana, raise your hands and follow the Imam for the extra Takbeers (3 in Hanafi, 7 in Shafi'i) before the recitation of Al-Fatiha."
        },
        {
          "@type": "HowToStep",
          "name": "Second Rak'ah Extra Takbeers",
          "text": "Upon rising for the second Rak'ah, follow the Imam for the extra Takbeers (3 in Hanafi after recitation, 5 in Shafi'i before recitation) before bowing into Ruku."
        },
        {
          "@type": "HowToStep",
          "name": "Listen to the Khutbah",
          "text": "After the prayer concludes with Tasleem, remain seated to quietly listen to the Eid Khutbah (sermon), which is a highly emphasized Sunnah."
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Eid", "item": "https://yourdomain.com/eid/" },
        { "@type": "ListItem", "position": 3, "name": "Eid Al-Fitr", "item": "https://yourdomain.com/eid/fitr/" },
        { "@type": "ListItem", "position": 4, "name": "Step-by-Step Eid Prayer Guide", "item": "https://yourdomain.com/eid/fitr/prayer-guide/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What if I arrive late for Eid prayer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you join late, immediately say the opening Takbeer, then quickly make up any missed extra Takbeers of that Rak'ah if the Imam is still standing. If the Imam is already bowing (Ruku), join the Ruku and the Takbeers are waived. Missed Rak'ahs are made up at the end as usual."
          }
        },
        {
          "@type": "Question",
          "name": "Is listening to the Eid Khutbah mandatory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, listening to the Eid Khutbah is a highly recommended Sunnah (unlike the Friday Jumu'ah sermon, which is mandatory). However, if one chooses to stay and listen, it is obligatory to remain silent."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eid prayer be offered individually at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The majority of scholars state Eid prayer should be performed in congregation. However, if missed or if congregational prayer is impossible (e.g., due to illness), the Shafi'i and Maliki schools permit praying it individually at home without a Khutbah."
          }
        }
      ]
    }
  ]
};

export default function EidPrayerGuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      {/* PHASE 4: TECHNICAL & AI CRAWLABILITY (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PHASE 1: ABOVE-THE-FOLD RESOLUTION */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2 flex-wrap gap-y-2">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <Link href="/eid" className="hover:text-emerald-400 transition-colors">Eid</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <Link href="/eid/fitr" className="hover:text-emerald-400 transition-colors">Eid Al-Fitr</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-200">Step-by-Step Eid Prayer Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            How to Perform Eid Al-Fitr Prayer: <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Step-by-Step Rulings & Takbeers
            </span>
          </h1>

          {/* Article Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-y border-slate-800/60 py-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              <span>6 Min Read</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Updated: Shawwal 1447 / 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <Link href="/about/scholarly-board/" className="flex items-center space-x-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1 hover:bg-emerald-400/20 transition-colors group">
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh Board</span>
            </Link>
          </div>

          {/* AEO Direct Answer / TL;DR Box */}
          <div className="w-full bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
              <Info className="w-6 h-6 mr-3 text-emerald-400" />
              Quick Summary (TL;DR)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Eid Al-Fitr prayer is a congregational <strong className="text-emerald-400">2-Rak'ah prayer</strong> offered shortly after sunrise. It uniquely features <strong className="text-white">additional Takbeers</strong> (saying "Allahu Akbar")—with 6 extra in the Hanafi school and 12 extra in the Shafi'i/Hanbali schools. Unlike Friday prayers, there is <strong className="text-white">no Adhan or Iqamah</strong>, and the Khutbah (sermon) is delivered <strong className="text-emerald-400">after</strong> the prayer has concluded.
            </p>
          </div>
        </header>

        {/* PHASE 3: HERO FEATURED IMAGE */}
        <div className="w-full aspect-[21/9] md:aspect-[3/1] relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80"
            alt="Muslims gathered in congregation for Eid prayer"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* PHASE 2: CONTENT & ENTITY ARCHITECTURE */}
        <div className="max-w-4xl space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Users className="w-7 h-7 mr-3 text-indigo-400" />
              Preparation & Intention (Niyyah) for Salat al-Eid
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Before the prayer commences, it is Sunnah to have eaten something sweet (like an odd number of dates) and to have bathed and worn one's best clothes. The prayer requires a clear intention.
            </p>
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white mb-2 flex items-center text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-400" /> Forming the Niyyah
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The intention (Niyyah) must be present in the heart, though uttering it is optional. One must intend: "I am performing two Rak'ahs of Salat al-Eid, with the extra Takbeers, following this Imam, for the sake of Allah."
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Star className="w-7 h-7 mr-3 text-amber-400" />
              Step-by-Step Prayer Performance
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Eid prayer differs from regular daily prayers solely due to the addition of multiple "Takbeers" (saying Allahu Akbar and raising the hands). Here is the standard flow:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="bg-emerald-900/50 text-emerald-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mr-4 mt-0.5 border border-emerald-500/30">1</div>
                <div>
                  <strong className="text-slate-200 text-lg block mb-1">First Rak'ah Opening</strong>
                  <span className="text-slate-400">The Imam begins with the initial Takbeer (Takbeerat al-Ihram). You recite the opening supplication (Thana/Dua al-Istiftah). Immediately after, the Imam will call out the extra Takbeers. Follow him, raising your hands to your ears and dropping them to your sides (or folding them, based on Madhab). Then listen quietly as the Imam recites Surah Al-Fatiha and another Surah.</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="bg-emerald-900/50 text-emerald-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mr-4 mt-0.5 border border-emerald-500/30">2</div>
                <div>
                  <strong className="text-slate-200 text-lg block mb-1">Second Rak'ah Flow</strong>
                  <span className="text-slate-400">Upon rising for the second Rak'ah, the timing of the extra Takbeers varies by Fiqh school (either before or after the Quranic recitation). Once the extra Takbeers are complete, the Rak'ah finishes identically to normal prayers.</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="bg-emerald-900/50 text-emerald-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mr-4 mt-0.5 border border-emerald-500/30">3</div>
                <div>
                  <strong className="text-slate-200 text-lg block mb-1">The Khutbah</strong>
                  <span className="text-slate-400">After the final Tasleem (turning the head left and right to end the prayer), the Imam will stand to deliver the Eid Khutbah. It is a highly stressed Sunnah to sit silently and listen.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <BookOpen className="w-7 h-7 mr-3 text-sky-400" />
              School Variations: Hanafi vs. Shafi'i/Hanbali
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The number of extra Takbeers and when they occur differs based on classical Islamic jurisprudence. All methods are valid and grounded in the Sunnah. Follow the Imam leading your congregation.
            </p>

            {/* HTML Data Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-700">
                    <th className="p-4 text-slate-300 font-semibold w-1/4">Fiqh School</th>
                    <th className="p-4 text-slate-300 font-semibold">Extra Takbeers (1st Rak'ah)</th>
                    <th className="p-4 text-slate-300 font-semibold">Extra Takbeers (2nd Rak'ah)</th>
                    <th className="p-4 text-slate-300 font-semibold">Hand Raising Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Hanafi</td>
                    <td className="p-4 text-slate-200"><strong>3</strong> (Before Fatiha)</td>
                    <td className="p-4 text-slate-200"><strong>3</strong> (After Recitation, before Ruku)</td>
                    <td className="p-4 text-slate-400">Raise hands for each extra Takbeer. Drop to sides until the last.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Shafi'i & Hanbali</td>
                    <td className="p-4 text-slate-200"><strong>7</strong> (Before Fatiha)</td>
                    <td className="p-4 text-slate-200"><strong>5</strong> (Before Fatiha)</td>
                    <td className="p-4 text-slate-400">Raise hands for each Takbeer. Place back on chest between them.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Maliki</td>
                    <td className="p-4 text-slate-200"><strong>6</strong> (Before Fatiha)</td>
                    <td className="p-4 text-slate-200"><strong>5</strong> (Before Fatiha)</td>
                    <td className="p-4 text-slate-400">Raise hands for the first Takbeer only.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center text-sm text-slate-500 mt-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Note: The counts above represent "extra" Takbeers, excluding the opening Takbeer and the Takbeers for moving into Ruku or Sujood.
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
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl animate-pulse" />
              <PlayCircle className="w-16 h-16 text-emerald-400 opacity-90 drop-shadow-2xl mb-3" />
              <span className="text-white font-semibold tracking-wide text-sm drop-shadow-md text-center px-4">Watch: Visual Demonstration: Step-by-Step Eid Prayer Routine</span>
            </button>
          </div>
          
          {/* RIGHT COLUMN: Key Takeaways */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Key Video Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">No Adhan or Iqamah:</strong> Salat al-Eid begins directly with the opening Takbeer when the Imam stands.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Khutbah Follows Prayer:</strong> Unlike Friday prayer, the Eid sermon is delivered after the 2-Rak'ah prayer completes.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Sunnah Route:</strong> Taking different paths to and from the Musalla (prayer ground) is a highly emphasized Sunnah.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* PHASE 5: INTERNAL & EXTERNAL LINKING + UTILITIES */}
        
        {/* Link UP (Parent Hub) */}
        <div className="pt-8 pb-4 border-t border-slate-800">
          <Link href="/eid/fitr/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Eid Al-Fitr Hub
          </Link>
        </div>

        {/* Links ACROSS (Sibling Navigation Module) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides in This Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/eid/fitr/khutbah-rules/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Eid Khutbah: Rules & Sunnahs</h4>
              <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/eid/fitr/takbirat/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Takbirat al-Eid: When and What to Recite</h4>
              <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/eid/fitr/zakat-rules/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Zakat al-Fitr (Fitrana): Due Before Prayer</h4>
              <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
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
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-emerald-500/50" /> Takbeer methodology cited from authentic narrations in <strong>Sahih Al-Bukhari</strong> and <strong>Sunan Abi Dawud</strong>.</li>
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-emerald-500/50" /> Fiqh comparisons validated against classical treatises of the four Sunni schools of thought.</li>
            </ul>
          </div>
          
          <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <Download className="w-8 h-8 text-emerald-400 mb-3" />
            <h4 className="text-white font-bold mb-2">Offline Reading Material</h4>
            <p className="text-sm text-slate-400 mb-5">Never lose your place. Take a quick-reference guide to the prayer ground.</p>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center text-sm w-full sm:w-auto justify-center">
              Download Printable Eid Prayer Method Cheat Sheet (PDF)
            </button>
          </div>
        </div>

        {/* AEO FAQ Accordion */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                What if I arrive late for Eid prayer?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                If you join late, immediately say the opening Takbeer, then quickly make up any missed extra Takbeers of that Rak'ah if the Imam is still standing. If the Imam is already bowing (Ruku), join the Ruku and the Takbeers are waived. Missed Rak'ahs are made up at the end as usual.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Is listening to the Eid Khutbah mandatory?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                No, listening to the Eid Khutbah is a highly recommended Sunnah (unlike the Friday Jumu'ah sermon, which is mandatory). However, if one chooses to stay and listen, it is obligatory to remain silent.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Can Eid prayer be offered individually at home?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                The majority of scholars state Eid prayer should be performed in congregation. However, if missed or if congregational prayer is impossible (e.g., due to illness), the Shafi'i and Maliki schools permit praying it individually at home without a Khutbah.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
