import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, Clock, Calendar, 
  Info, BookOpen, Heart, CheckCircle2, 
  PlayCircle, FileText, ExternalLink, Download,
  ArrowLeft, HelpCircle, ShieldAlert, Users
} from 'lucide-react';

export const metadata = {
  title: "Humane Islamic Slaughter (Halal Zabiha) Guidelines for Qurbani",
  description: "Comprehensive guide to Humane Islamic Slaughter (Halal Zabiha) for Qurbani. Learn about animal welfare rules, step-by-step methods, and valid slaughter days.",
  alternates: {
    canonical: "https://yourdomain.com/eid/adha-qurbani/slaughter-guidelines",
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
      "@id": "https://yourdomain.com/eid/adha-qurbani/slaughter-guidelines/#article",
      "headline": "Humane Islamic Slaughter (Halal Zabiha) Guidelines for Qurbani",
      "image": "https://images.unsplash.com/photo-1516246305607-4277b28dbb3a?auto=format&fit=crop&q=80",
      "datePublished": "2026-05-01T08:00:00+00:00",
      "dateModified": "2026-05-15T10:00:00+00:00",
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
      "@id": "https://yourdomain.com/eid/adha-qurbani/slaughter-guidelines/#video",
      "name": "Visual Guide: Proper Halal Zabiha Standards & Rules",
      "description": "Essential visual guidelines for performing humane Halal Zabiha during Qurbani, covering animal compassion and mandatory recitations.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "uploadDate": "2026-05-05T10:00:00+00:00",
      "duration": "PT5M15S",
      "embedUrl": "https://yourdomain.com/embed/qurbani-slaughter-guidelines"
    },
    {
      "@type": "HowTo",
      "name": "How to Perform Ethical Qurbani Slaughter (Zabiha)",
      "description": "Step-by-step procedure on ethical Qurbani slaughter and processing.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Preparation and Animal Welfare",
          "text": "Provide water to the animal. Ensure the knife is exceptionally sharp, but do not sharpen it in front of the animal. Lead it gently to the slaughter area without causing distress."
        },
        {
          "@type": "HowToStep",
          "name": "Positioning and Recitation",
          "text": "Lay the animal gently on its left side facing the Qiblah. The slaughterer must recite 'Bismillahi Allahu Akbar' (In the name of Allah, Allah is the Greatest) at the time of the cut."
        },
        {
          "@type": "HowToStep",
          "name": "The Swift Cut",
          "text": "Make a swift, continuous cut to sever the windpipe (trachea), gullet (esophagus), and both jugular veins in a single motion, without severing the spinal cord."
        },
        {
          "@type": "HowToStep",
          "name": "Rest and Bleeding",
          "text": "Allow the animal to bleed out completely and wait until all movement has entirely stopped and life has departed before beginning to skin or process the meat."
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Eid", "item": "https://yourdomain.com/eid/" },
        { "@type": "ListItem", "position": 3, "name": "Eid Al-Adha & Qurbani", "item": "https://yourdomain.com/eid/adha-qurbani/" },
        { "@type": "ListItem", "position": 4, "name": "Humane Slaughter Guidelines", "item": "https://yourdomain.com/eid/adha-qurbani/slaughter-guidelines/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a butcher keep the animal skin as payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. According to Islamic Fiqh, no part of the Qurbani animal (meat, skin, or offal) can be given to the butcher as payment for their services. They must be paid a separate wage. The skin can be kept for personal use or donated to charity."
          }
        },
        {
          "@type": "Question",
          "name": "What if the animal is slaughtered before Eid prayer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If an animal is slaughtered before the Eid Al-Adha prayer has concluded in that locality, it does not count as Qurbani. It is considered regular meat for the family, and another animal must be sacrificed for Qurbani."
          }
        },
        {
          "@type": "Question",
          "name": "Is stun-slaughter permissible for Qurbani?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Classical scholars require the animal to be alive and healthy at the time of slaughter. If stunning kills the animal before the cut, it is impermissible (Carrion). If non-lethal reversible stunning is used and the animal is fully alive at the time of the cut, it may be deemed Halal, though many scholars still highly discourage it as it opposes Prophetic welfare guidelines."
          }
        }
      ]
    }
  ]
};

export default function SlaughterGuidelinesPage() {
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
            <Link href="/eid/adha-qurbani" className="hover:text-emerald-400 transition-colors">Eid Al-Adha & Qurbani</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="text-slate-200">Humane Slaughter Guidelines</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Humane Islamic Slaughter (Halal Zabiha) <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Guidelines for Qurbani
            </span>
          </h1>

          {/* Article Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-y border-slate-800/60 py-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              <span>7 Min Read</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
              <span>Updated: Dhul Hijjah 1447 / 2026</span>
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
              Islamic slaughter (Zabiha) prioritizes <strong className="text-emerald-400">strict animal welfare</strong>. Knives must be exceptionally sharp but never sharpened in front of the animal. Slaughtering one animal in view of another is prohibited. The butcher must recite <strong className="text-white">"Bismillahi Allahu Akbar"</strong> to consecrate the sacrifice. Qurbani is only valid if performed between the <strong className="text-emerald-400">conclusion of Eid prayer on the 10th of Dhul Hijjah</strong> and sunset on the 13th.
            </p>
          </div>
        </header>

        {/* PHASE 3: HERO FEATURED IMAGE */}
        <div className="w-full aspect-[21/9] md:aspect-[3/1] relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1516246305607-4277b28dbb3a?auto=format&fit=crop&q=80"
            alt="Sheep in a serene agricultural field honoring the sanctity of the animal"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* PHASE 2: CONTENT & ENTITY ARCHITECTURE */}
        <div className="max-w-4xl space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Heart className="w-7 h-7 mr-3 text-rose-400" />
              Prophetic Compassion & Animal Welfare Rules
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Islam mandates Ihsan (excellence and compassion) in all things, especially in the taking of a life for sustenance. The Prophet Muhammad (PBUH) established strict protocols to minimize fear and pain for the animal.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <ShieldAlert className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-lg block mb-1">Concealing the Blade</strong>
                  <span className="text-slate-400">Knives must be perfectly sharp to ensure a swift, painless cut. However, it is strictly forbidden to sharpen the blade in the presence of the animal, as this causes unnecessary psychological distress.</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <Users className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 text-lg block mb-1">Avoiding Group Distress</strong>
                  <span className="text-slate-400">Animals must not be slaughtered in front of one another. They should be led gently to the slaughter area, offered water, and handled with calm respect.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <BookOpen className="w-7 h-7 mr-3 text-sky-400" />
              Step-by-Step Zabiha Method
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The mechanical method of Halal Zabiha is precise. It is designed to cause an instantaneous drop in blood pressure to the brain, leading to rapid loss of consciousness.
            </p>
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white mb-3 flex items-center text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-400" /> Anatomy of the Halal Cut
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                The animal is laid on its left side facing the Qiblah. The butcher recites <em>"Bismillahi Allahu Akbar"</em>. A single, continuous swift cut must then sever four specific passages in the neck:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div> 1. The Trachea (Windpipe)</li>
                <li className="flex items-center text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div> 2. The Esophagus (Gullet)</li>
                <li className="flex items-center text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div> 3. The Left Jugular Vein & Carotid Artery</li>
                <li className="flex items-center text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div> 4. The Right Jugular Vein & Carotid Artery</li>
              </ul>
              <p className="text-slate-500 text-sm mt-4 italic border-t border-slate-800 pt-3">
                Crucial Rule: The spinal cord must remain entirely intact during the initial cut. Severing the head completely before the animal has died is impermissible.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <Calendar className="w-7 h-7 mr-3 text-amber-400" />
              Valid Slaughter Days & Animal Requirements
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Qurbani is bound by strict timeframes and age requirements. The sacrifice is valid from the moment the Eid Al-Adha prayer concludes on the 10th of Dhul Hijjah until sunset on the 13th (Ayyam al-Tashreeq).
            </p>

            {/* HTML Data Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-700">
                    <th className="p-4 text-slate-300 font-semibold w-1/4">Animal Type</th>
                    <th className="p-4 text-slate-300 font-semibold">Minimum Age Requirement</th>
                    <th className="p-4 text-slate-300 font-semibold">Maximum Shares Allowed</th>
                    <th className="p-4 text-slate-300 font-semibold">Health Inspection Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Sheep / Goat</td>
                    <td className="p-4 text-slate-200">1 Year Old*</td>
                    <td className="p-4 text-slate-200 font-bold">1 Share</td>
                    <td className="p-4 text-slate-400 text-sm">Free from obvious defects (e.g., cannot be blind, overtly sick, or severely limping).</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Cow / Bull / Buffalo</td>
                    <td className="p-4 text-slate-200">2 Years Old</td>
                    <td className="p-4 text-slate-200 font-bold">Up to 7 Shares</td>
                    <td className="p-4 text-slate-400 text-sm">Horns intact (if not naturally polled), healthy weight, full vision.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-emerald-400 font-medium">Camel</td>
                    <td className="p-4 text-slate-200">5 Years Old</td>
                    <td className="p-4 text-slate-200 font-bold">Up to 7 Shares</td>
                    <td className="p-4 text-slate-400 text-sm">Must be able to walk to the slaughter site unassisted.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">* Exception: A sheep over 6 months old that looks as large as a one-year-old is permissible in the Hanafi school.</p>
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
              <span className="text-white font-semibold tracking-wide text-sm drop-shadow-md text-center px-4">Watch: Proper Halal Zabiha Standards & Rules</span>
            </button>
          </div>
          
          {/* RIGHT COLUMN: Key Takeaways */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Key Video Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Animal Compassion:</strong> Sharpening blades in front of the animal or slaughtering one animal before another is strictly prohibited.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Mandatory Recitation:</strong> Reciting <em>"Bismillahi Allahu Akbar"</em> at the exact moment of slaughter is an essential condition for the meat to be Halal.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-emerald-400 mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Meat Division:</strong> Dividing the meat into three equal parts (for your family, for relatives/friends, and for the needy) is highly recommended.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* PHASE 5: INTERNAL & EXTERNAL LINKING + UTILITIES */}
        
        {/* Link UP (Parent Hub) */}
        <div className="pt-8 pb-4 border-t border-slate-800">
          <Link href="/eid/adha-qurbani/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Eid Al-Adha & Qurbani Hub
          </Link>
        </div>

        {/* Links ACROSS (Sibling Navigation Module) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides in This Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/eid/adha-qurbani/animal-defects/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Animal Defects: What Invalidates Qurbani?</h4>
              <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/eid/adha-qurbani/shares-rules/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Qurbani Shares: Rules for Cows & Camels</h4>
              <div className="text-emerald-500/80 text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/eid/adha-qurbani/distribution-rules/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-sm">Meat Distribution: The 1/3 Prophetic Rule</h4>
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
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-emerald-500/50" /> Guidelines derived from classical Fiqh references regarding Halal Zabiha.</li>
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-emerald-500/50" /> Compliant with global Halal certification body standards on animal welfare.</li>
            </ul>
          </div>
          
          <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <Download className="w-8 h-8 text-emerald-400 mb-3" />
            <h4 className="text-white font-bold mb-2">Offline Reading Material</h4>
            <p className="text-sm text-slate-400 mb-5">Ensure all steps are followed correctly with our detailed checklist.</p>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center text-sm w-full sm:w-auto justify-center">
              Download Printable Qurbani Slaughter & Distribution Checklist (PDF)
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
                Can a butcher keep the animal skin as payment?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                No. According to Islamic Fiqh, no part of the Qurbani animal (meat, skin, or offal) can be given to the butcher as payment for their services. They must be paid a separate wage. The skin can be kept for personal use or donated to charity.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                What if the animal is slaughtered before Eid prayer?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                If an animal is slaughtered before the Eid Al-Adha prayer has concluded in that locality, it does not count as Qurbani. It is considered regular meat for the family, and another animal must be sacrificed for Qurbani if one is eligible.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Is stun-slaughter permissible for Qurbani?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                Classical scholars stipulate the animal must be fully alive at the time of slaughter. If stunning kills the animal prior to the cut, it is impermissible (Carrion). If non-lethal, reversible stunning is used and the animal is alive at the cut, the meat may be Halal, though many scholars highly discourage it as it conflicts with Prophetic welfare ideals.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
