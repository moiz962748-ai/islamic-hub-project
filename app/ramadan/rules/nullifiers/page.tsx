import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, Clock, Calendar, 
  Info, AlertTriangle, CheckCircle2, XCircle, 
  PlayCircle, FileText, ExternalLink, Download,
  Ban, ShieldAlert, ArrowLeft
} from 'lucide-react';

export const metadata = {
  title: "Actions That Nullify Fasting (Mufattirat): Fiqh Rulings & Exceptions",
  description: "Learn about the actions that invalidate fasting in Ramadan (Mufattirat), deliberate vs. unintentional acts, and rules for Qadha and Kaffarah.",
  alternates: {
    canonical: "https://yourdomain.com/ramadan/rules/nullifiers",
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
      "@id": "https://yourdomain.com/ramadan/rules/nullifiers/#article",
      "headline": "Actions That Nullify Fasting (Mufattirat): Fiqh Rulings & Exceptions",
      "image": "https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80",
      "datePublished": "2026-02-01T08:00:00+00:00",
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
      "@id": "https://yourdomain.com/ramadan/rules/nullifiers/#video",
      "name": "Visual Guide: Actions That Break Your Fast",
      "description": "A comprehensive visual guide detailing deliberate acts, accidental consumption, and medical exceptions that affect the validity of a fast.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "uploadDate": "2026-02-20T10:00:00+00:00",
      "duration": "PT5M30S",
      "embedUrl": "https://yourdomain.com/embed/nullifiers-guide"
    },
    {
      "@type": "HowTo",
      "name": "How to Rectify a Broken Fast",
      "description": "Step-by-step guidance on what to do if your fast is accidentally or deliberately broken.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Identify the Cause",
          "text": "Determine if the fast was broken intentionally or out of forgetfulness. If you ate or drank purely out of forgetfulness, continue your fast; it is not broken."
        },
        {
          "@type": "HowToStep",
          "name": "Determine Expiation (Qadha or Kaffarah)",
          "text": "If broken intentionally by eating or drinking, you must make up the day later (Qadha). If broken intentionally by marital relations, severe expiation (Kaffarah) is required."
        },
        {
          "@type": "HowToStep",
          "name": "Seek Forgiveness",
          "text": "If the fast was broken deliberately without a valid excuse, sincerely repent to Allah and commit to making up the missed day."
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan Hub", "item": "https://yourdomain.com/ramadan/" },
        { "@type": "ListItem", "position": 3, "name": "Rules & Guidelines", "item": "https://yourdomain.com/ramadan/rules/" },
        { "@type": "ListItem", "position": 4, "name": "Actions That Nullify Fasting", "item": "https://yourdomain.com/ramadan/rules/nullifiers/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does eating out of forgetfulness break the fast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. According to authentic Hadith, if someone eats or drinks out of forgetfulness, they should complete their fast, for it is Allah who has fed them."
          }
        },
        {
          "@type": "Question",
          "name": "Do eye drops invalidate the fast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to the majority of contemporary scholars, eye drops do not invalidate the fast because the eye is not considered a primary passageway to the stomach."
          }
        }
      ]
    }
  ]
};

export default function NullifiersPage() {
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
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/ramadan" className="hover:text-white transition-colors">Ramadan</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/ramadan/rules" className="hover:text-white transition-colors hidden sm:block">Rules & Guidelines</Link>
            <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:block" />
            <span className="text-slate-200">Nullifiers</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Actions That Nullify Fasting (Mufattirat): <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              Fiqh Rulings & Exceptions
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
              Fasting is invalidated (Mufattirat) by <strong className="text-white">deliberate eating, drinking, or marital relations</strong> from dawn until sunset. <strong className="text-white">Unintentional acts</strong> (like eating out of forgetfulness) do not break the fast. Medical necessities like <strong className="text-white">non-nutritional injections or eye drops</strong> are excused by majority consensus. Deliberate invalidation requires making up the day (Qadha), and in severe cases, Kaffarah (expiation).
            </p>
          </div>
        </header>

        {/* PHASE 3: HERO FEATURED IMAGE */}
        <div className="w-full aspect-[21/9] md:aspect-[3/1] relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1598462002347-1906a5b6728c?auto=format&fit=crop&q=80"
            alt="Islamic architecture representing fasting rules and fiqh"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* PHASE 2: CONTENT & ENTITY ARCHITECTURE */}
        <div className="max-w-4xl space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <AlertTriangle className="w-7 h-7 mr-3 text-amber-400" />
              Deliberate vs. Unintentional Nullifiers
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              The fundamental principle of fasting is the intention to abstain from physical needs. The ruling on breaking the fast heavily depends on whether the action was intentional or accidental.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <XCircle className="w-6 h-6 text-rose-400 mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-400 text-lg block mb-1">Deliberate Acts (Nullifies Fast)</strong>
                  <span className="text-slate-400">Intentionally eating, drinking, taking oral medication, or engaging in marital relations during daylight hours completely invalidates the fast.</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-6 h-6 text-white mr-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-lg block mb-1">Unintentional Acts (Excused)</strong>
                  <span className="text-slate-400">Eating or drinking out of pure forgetfulness does not break the fast. The Prophet (PBUH) stated that whoever does this should complete their fast, as Allah has fed them.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center border-b border-slate-800 pb-3">
              <ShieldAlert className="w-7 h-7 mr-3 text-sky-400" />
              Medical Exceptions & Non-Invalidators
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Modern medicine poses contemporary Fiqh questions. Islamic jurisprudence panels (such as the IFA) have established clear guidelines on which medical procedures invalidate the fast.
            </p>

            {/* HTML Data Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-700">
                    <th className="p-4 text-slate-300 font-semibold w-2/5">Action / Procedure</th>
                    <th className="p-4 text-slate-300 font-semibold">Nullifies Fast?</th>
                    <th className="p-4 text-slate-300 font-semibold">Requires Qadha?</th>
                    <th className="p-4 text-slate-300 font-semibold">Requires Kaffarah?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">Eye, Ear, or Nose Drops</td>
                    <td className="p-4 text-white font-medium">No*</td>
                    <td className="p-4 text-slate-400">-</td>
                    <td className="p-4 text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">Non-Nutritional Injections (Vaccines, Penicillin)</td>
                    <td className="p-4 text-white font-medium">No</td>
                    <td className="p-4 text-slate-400">-</td>
                    <td className="p-4 text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">Nutritional IV Drips</td>
                    <td className="p-4 text-rose-400 font-medium">Yes</td>
                    <td className="p-4 text-white font-medium">Yes</td>
                    <td className="p-4 text-slate-400">No</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">Deliberate Vomiting</td>
                    <td className="p-4 text-rose-400 font-medium">Yes</td>
                    <td className="p-4 text-white font-medium">Yes</td>
                    <td className="p-4 text-slate-400">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">* Unless the taste of the drops reaches the throat (specifically for nose drops), according to certain schools of thought.</p>
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
              <span className="text-white font-semibold tracking-wide text-sm drop-shadow-md text-center px-4">Watch: Visual Guide to Actions That Break Your Fast</span>
            </button>
          </div>
          
          {/* RIGHT COLUMN: Key Takeaways */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Key Video Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Deliberate Acts:</strong> Eating or drinking intentionally invalidates the fast and obligates you to make up the day (Qadha).
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Accidental Consumption:</strong> Eating or drinking out of forgetfulness does NOT break the fast; continue fasting immediately upon remembering.
                </span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-white mr-3 font-bold mt-0.5 text-lg">•</span>
                <span className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Medical Items:</strong> Non-nutritional injections (like vaccines) and eye/ear drops are excused according to majority consensus.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* PHASE 5: INTERNAL & EXTERNAL LINKING + UTILITIES */}
        
        {/* Link UP (Parent Hub) */}
        <div className="pt-8 pb-4 border-t border-slate-800">
          <Link href="/ramadan/rules/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Fasting Rules & Guidelines
          </Link>
        </div>

        {/* Links ACROSS (Sibling Navigation Module) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides in This Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/ramadan/rules/accidental-nullification/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Unintentional vs. Deliberate Fast Breaking</h4>
              <div className="text-white text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/ramadan/rules/kaffarah-qadha/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Kaffarah & Qadha: Major Expiation Rules</h4>
              <div className="text-white text-xs font-semibold flex items-center mt-auto pt-4">Read Guide <ChevronRight className="w-3 h-3 ml-1" /></div>
            </Link>
            <Link href="/ramadan/rules/medical-inhalers-drops/" className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-neutral-600 hover:bg-slate-800/80 transition-all group flex flex-col">
              <h4 className="text-slate-200 font-semibold mb-2 group-hover:text-white transition-colors text-sm">Inhalers, Eye/Ear Drops & Nasal Sprays</h4>
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
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-white" /> Rulings based on the International Islamic Fiqh Academy resolutions.</li>
              <li className="flex items-start"><ExternalLink className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-white" /> Consensus derived from major classical texts (Hanafi, Shafi'i, Maliki, Hanbali).</li>
            </ul>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <Download className="w-8 h-8 text-white mb-3" />
            <h4 className="text-white font-bold mb-2">Offline Reading Material</h4>
            <p className="text-sm text-slate-400 mb-5">Get a complete PDF summary of fasting nullifiers to keep on your device.</p>
            <button className="bg-white text-black hover:bg-neutral-800 text-slate-950 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center text-sm w-full sm:w-auto justify-center">
              Download Printable Fiqh Summary (PDF)
            </button>
          </div>
        </div>

        {/* AEO FAQ Accordion */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <Info className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Does eating out of forgetfulness break the fast?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                No. According to authentic Hadith, if someone eats or drinks out of pure forgetfulness, they should continue to complete their fast without any penalty. It is considered that Allah provided for them.
              </div>
            </details>

            <details className="group border border-slate-800/80 bg-slate-900/40 rounded-xl open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-white transition-colors select-none">
                Do eye drops invalidate the fast?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-white" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4 mt-2">
                According to the majority of contemporary scholars and Fiqh councils, eye drops do not invalidate the fast because the eye is not considered a primary natural passageway to the stomach, and the amount absorbed is negligible.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}
