// Full "Actions That Break the Fast (Mufattirat)" article page.
// Matches the approved design screenshot with all sections.

import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ChevronRight, ShieldCheck, Clock, BookOpen,
  CheckCircle2, XCircle, AlertTriangle, Play,
  ArrowRight, HelpCircle, ExternalLink, Share2,
  AlertCircle, Eye, Droplets, Pill, Syringe,
  Wind, Stethoscope, Heart
} from 'lucide-react';
import { CollapsibleFaq } from '../FastingRulesInteractive';

export const metadata: Metadata = {
  title: "Actions That Break the Fast (Mufattirat): Fiqh Rulings and Exceptions – IslamHub",
  description: "Complete guide to actions that nullify the Ramadan fast. Covers deliberate vs accidental, four madhab rulings, medical questions, and what to do if it happens.",
  alternates: {
    canonical: "https://yourdomain.com/ramadan/rules/breaking-fast",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://yourdomain.com/ramadan/rules/breaking-fast/#article",
      "headline": "Actions That Break the Fast (Mufattirat): Fiqh Rulings and Exceptions",
      "description": "Comprehensive guide to what invalidates the Ramadan fast according to the four schools of thought.",
      "author": { "@type": "Organization", "name": "IslamHub" },
      "publisher": { "@type": "Organization", "name": "IslamHub" },
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-01",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan", "item": "https://yourdomain.com/ramadan" },
        { "@type": "ListItem", "position": 3, "name": "Fasting Rules", "item": "https://yourdomain.com/ramadan/rules" },
        { "@type": "ListItem", "position": 4, "name": "Actions That Break the Fast" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does swallowing saliva break the fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Swallowing your own saliva does not break the fast according to scholarly consensus." }
        },
        {
          "@type": "Question",
          "name": "What if I eat or drink by mistake?",
          "acceptedAnswer": { "@type": "Answer", "text": "If you eat or drink forgetfully, your fast remains valid. Simply stop as soon as you remember and continue fasting." }
        },
        {
          "@type": "Question",
          "name": "Does vomiting break the fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "Only deliberate (self-induced) vomiting breaks the fast. If vomiting occurs involuntarily, the fast remains valid." }
        },
        {
          "@type": "Question",
          "name": "Do eye drops or ear drops break the fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "The majority of scholars hold that eye drops do not break the fast. Ear drops are also generally considered permissible, though some scholars advise caution." }
        },
        {
          "@type": "Question",
          "name": "Does a blood test break my fast?",
          "acceptedAnswer": { "@type": "Answer", "text": "A small blood test does not break the fast. However, donating a large amount of blood may weaken the fasting person, so scholars advise deferring it if possible." }
        },
      ],
    },
  ],
};

/* ─── At-a-glance data ─── */
const nullifierRows = [
  { action: "Eating or drinking deliberately", breaks: true, qadha: true, kaffarah: true, icon: "🍽️" },
  { action: "Sexual intercourse", breaks: true, qadha: true, kaffarah: true, icon: "⚠️" },
  { action: "Deliberate vomiting", breaks: true, qadha: true, kaffarah: false, icon: "🤮" },
  { action: "Menstruation / nifas", breaks: true, qadha: true, kaffarah: false, icon: "🩸" },
  { action: "Injecting nutrients (IV drip)", breaks: true, qadha: true, kaffarah: false, icon: "💉" },
  { action: "Smoking or vaping", breaks: true, qadha: true, kaffarah: false, icon: "🚬" },
  { action: "Swallowing saliva", breaks: false, qadha: false, kaffarah: false, icon: "💧" },
  { action: "Eating or drinking by mistake", breaks: false, qadha: false, kaffarah: false, icon: "😯" },
  { action: "Involuntary vomiting", breaks: false, qadha: false, kaffarah: false, icon: "🤢" },
  { action: "Tasting food (without swallowing)", breaks: false, qadha: false, kaffarah: false, icon: "👅" },
  { action: "Using miswak / toothbrush", breaks: false, qadha: false, kaffarah: false, icon: "🪥" },
  { action: "Applying kohl / eye drops", breaks: false, qadha: false, kaffarah: false, icon: "👁️" },
];

/* ─── Four madhab comparison ─── */
const madhabComparison = [
  {
    madhab: "Hanafi",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    ruling: "Deliberate eating or drinking requires both Qadha and Kaffarah. Kaffarah = 60 consecutive fasts or feeding 60 poor people.",
  },
  {
    madhab: "Shafi'i",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    ruling: "Deliberate eating or drinking requires Qadha only. Kaffarah is only for sexual intercourse during fasting hours.",
  },
  {
    madhab: "Maliki",
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    ruling: "Deliberate eating or drinking requires both Qadha and Kaffarah. Similar to Hanafi in scope of kaffarah obligation.",
  },
  {
    madhab: "Hanbali",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    ruling: "Deliberate eating or drinking requires Qadha only. Kaffarah applies exclusively to sexual intercourse.",
  },
];

/* ─── Medical questions ─── */
const medicalItems = [
  {
    question: "Inhalers (asthma)",
    ruling: "Majority: does NOT break the fast. The inhaler delivers medication to the lungs, not the stomach.",
    verdict: "safe",
  },
  {
    question: "Eye drops",
    ruling: "Majority: does NOT break the fast. Even if a taste is felt in the throat, the amount is negligible.",
    verdict: "safe",
  },
  {
    question: "Ear drops",
    ruling: "Majority: does NOT break the fast. Unless there is a perforated eardrum allowing liquid to reach the throat.",
    verdict: "safe",
  },
  {
    question: "Nasal sprays",
    ruling: "Disputed. Some scholars say it breaks the fast because the nose connects to the throat. Others permit it.",
    verdict: "disputed",
  },
  {
    question: "Injections (non-nutritive)",
    ruling: "Does NOT break the fast. Intramuscular and subcutaneous injections that are not nutritive are permissible.",
    verdict: "safe",
  },
  {
    question: "IV drip (nutritive)",
    ruling: "BREAKS the fast. Intravenous fluids that provide nourishment act as a substitute for food and drink.",
    verdict: "breaks",
  },
  {
    question: "Blood test",
    ruling: "Does NOT break the fast. A small blood sample drawn for testing does not invalidate the fast.",
    verdict: "safe",
  },
  {
    question: "Dental fillings / extraction",
    ruling: "Does NOT break the fast as long as nothing is swallowed. Rinse without swallowing.",
    verdict: "safe",
  },
];

/* ─── What to do steps ─── */
const whatToDoSteps = [
  {
    step: 1,
    title: "Stop immediately",
    desc: "As soon as you realise you have broken your fast, stop the action right away.",
  },
  {
    step: 2,
    title: "Make sincere repentance (Tawbah)",
    desc: "Ask Allah for forgiveness sincerely. Resolve not to repeat the action.",
  },
  {
    step: 3,
    title: "Continue abstaining for the rest of the day",
    desc: "Out of respect for Ramadan, refrain from eating and drinking until Maghrib even though the fast is broken.",
  },
  {
    step: 4,
    title: "Make up the fast (Qadha)",
    desc: "Fast one day after Ramadan to replace the missed day. This is obligatory.",
  },
  {
    step: 5,
    title: "Pay Kaffarah if applicable",
    desc: "If the fast was broken by sexual intercourse (or deliberate eating per Hanafi/Maliki), kaffarah is required: fasting 60 consecutive days or feeding 60 poor people.",
  },
];

/* ─── FAQ data ─── */
const faqItems = [
  {
    question: "Does swallowing saliva break the fast?",
    answer: "No. Swallowing your own saliva does not break the fast according to scholarly consensus. However, if saliva is mixed with blood or another substance, it should not be swallowed.",
  },
  {
    question: "What if I eat or drink by mistake?",
    answer: "If you eat or drink forgetfully while fasting, your fast remains valid. Simply stop as soon as you remember and continue fasting. The Prophet ﷺ said: 'If somebody eats or drinks forgetfully, then he should complete his fast, for it is Allah Who has fed him and given him drink.' (Bukhari & Muslim)",
  },
  {
    question: "Does vomiting break the fast?",
    answer: "Only deliberate (self-induced) vomiting breaks the fast and requires qadha. If vomiting occurs involuntarily — you could not control it — the fast remains valid and no make-up is required.",
  },
  {
    question: "Do eye drops or ear drops break the fast?",
    answer: "The majority of scholars hold that eye drops do not break the fast because the eye is not a normal pathway for food or drink. Ear drops are also generally considered permissible unless there is a perforated eardrum.",
  },
  {
    question: "Does a blood test break my fast?",
    answer: "A small blood test (such as a finger prick or vial draw) does not break the fast. However, donating a large amount of blood is analogous to cupping (hijama), which some scholars say invalidates the fast. It is best to defer large blood donations to after iftar.",
  },
  {
    question: "Does brushing teeth or using toothpaste break the fast?",
    answer: "Using a miswak is sunnah and does not break the fast. Using toothpaste is permissible as long as nothing is swallowed. However, many scholars recommend using it before Fajr to avoid the risk of swallowing.",
  },
];

/* ─── Related guides ─── */
const relatedGuides = [
  { title: "Eating by mistake while fasting", href: "/ramadan/rules#accidental-nullification" },
  { title: "Qadha and Kaffarah explained", href: "/ramadan/rules#kaffarah-qadha" },
  { title: "Fasting with diabetes", href: "/ramadan/rules#elderly-chronic-illness" },
  { title: "Inhalers and drops while fasting", href: "/ramadan/rules#medical-inhalers-drops" },
  { title: "Pregnancy and nursing exemptions", href: "/ramadan/rules#pregnancy-breastfeeding" },
  { title: "Travellers and fasting rules", href: "/ramadan/rules#travelers-safar" },
];

export default function BreakingFastArticle() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-5xl mx-auto space-y-16">

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* BREADCRUMB                                                 */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <nav className="flex items-center text-xs sm:text-sm font-medium text-neutral-400 space-x-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <Link href="/ramadan" className="hover:text-white transition-colors">Ramadan</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <Link href="/ramadan/rules" className="hover:text-white transition-colors">Fasting Rules</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-neutral-200">Actions that break the fast</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HERO                                                       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Actions That Break the Fast<br className="hidden sm:inline" />
            <span className="text-neutral-300">(Mufattirat):</span><br />
            <span className="text-neutral-200 text-2xl sm:text-3xl lg:text-4xl">Fiqh Rulings and Exceptions</span>
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 border-y border-neutral-900 py-3.5">
            <div className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800 rounded-full px-3 py-1 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Reviewed by FIQH Advisory Board</span>
            </div>
            <span className="text-neutral-600">•</span>
            <div className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>8 min read</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span>Updated: Ramadan 2026 / 1447 AH</span>
          </div>

          {/* Intro text */}
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            Certain actions invalidate the Ramadan fast and require making it up later (Qadha) or, in more serious cases, paying an expiation (Kaffarah). This guide covers every nullifier, explains the difference between deliberate and accidental breaking, compares the four madhab rulings, and answers modern medical questions — so you can fast with confidence.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* WHAT BREAKS THE FAST AT A GLANCE                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="at-a-glance" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What breaks the fast at a glance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Quick-reference table — green means safe, red means it breaks the fast.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-neutral-950 text-neutral-400 text-[11px] uppercase tracking-wider font-mono">
                  <th className="text-left px-4 py-3 border-b border-neutral-800">Action</th>
                  <th className="text-center px-3 py-3 border-b border-neutral-800">Breaks fast?</th>
                  <th className="text-center px-3 py-3 border-b border-neutral-800">Qadha</th>
                  <th className="text-center px-3 py-3 border-b border-neutral-800">Kaffarah</th>
                </tr>
              </thead>
              <tbody>
                {nullifierRows.map((row, i) => (
                  <tr
                    key={row.action}
                    className={`border-b border-neutral-900 ${i % 2 === 0 ? 'bg-neutral-950/50' : 'bg-neutral-950/30'} hover:bg-neutral-900/60 transition-colors`}
                  >
                    <td className="px-4 py-3 text-neutral-200 flex items-center gap-2">
                      <span className="text-base">{row.icon}</span>
                      {row.action}
                    </td>
                    <td className="text-center px-3 py-3">
                      {row.breaks ? (
                        <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      )}
                    </td>
                    <td className="text-center px-3 py-3">
                      {row.qadha ? (
                        <span className="text-red-400 text-xs font-semibold">Yes</span>
                      ) : (
                        <span className="text-emerald-400 text-xs font-semibold">No</span>
                      )}
                    </td>
                    <td className="text-center px-3 py-3">
                      {row.kaffarah ? (
                        <span className="text-red-400 text-xs font-semibold">Yes</span>
                      ) : (
                        <span className="text-neutral-500 text-xs">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* IS IT DELIBERATE OR BY MISTAKE?                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="deliberate-vs-mistake" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Is it deliberate or by mistake?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Intent matters. The Prophet ﷺ distinguished between deliberate and forgetful actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Deliberate */}
            <div className="bg-neutral-950 border border-red-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-white">Deliberate breaking</h3>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>Eating, drinking, or smoking <strong className="text-white">knowingly and willingly</strong> while aware you are fasting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>Sexual intercourse during fasting hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>Self-induced vomiting.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-red-500/10 text-xs text-neutral-400">
                <strong className="text-red-400">Consequence:</strong> Qadha is required. Kaffarah may also be required depending on the action and madhab.
              </div>
            </div>

            {/* By mistake / forgetful */}
            <div className="bg-neutral-950 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">By mistake / forgetful</h3>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Eating or drinking <strong className="text-white">forgetfully</strong> — fast remains valid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Involuntary vomiting — fast is not broken.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Accidentally swallowing water during wudu.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-emerald-500/10 text-xs text-neutral-400">
                <strong className="text-emerald-400">Hadith:</strong> "Whoever forgets he is fasting and eats or drinks, let him complete his fast, for it is Allah Who has fed him and given him drink." — Bukhari & Muslim
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* WHAT THE FOUR MADHABS SAY                                  */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="four-madhabs" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What the four madhabs say about deliberate eating or drinking
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              While all four schools agree that deliberate eating/drinking breaks the fast, they differ on whether kaffarah is required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {madhabComparison.map((m) => (
              <div key={m.madhab} className={`bg-neutral-950 border ${m.borderColor} rounded-xl p-5 hover:bg-neutral-900/40 transition-colors`}>
                <h3 className={`text-base font-bold ${m.color} mb-2`}>{m.madhab}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{m.ruling}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* MEDICAL ITEMS AND MODERN QUESTIONS                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="medical" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Medical items and modern questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Contemporary scholarly rulings on medical treatments, devices, and procedures during fasting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {medicalItems.map((item) => (
              <div key={item.question} className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  {item.verdict === 'safe' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {item.verdict === 'disputed' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                  {item.verdict === 'breaks' && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                  <h3 className="text-sm font-bold text-white">{item.question}</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.ruling}</p>
                <div className="mt-3">
                  {item.verdict === 'safe' && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Does not break fast
                    </span>
                  )}
                  {item.verdict === 'disputed' && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      Disputed
                    </span>
                  )}
                  {item.verdict === 'breaks' && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full">
                      Breaks the fast
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* WATCH: VISUAL GUIDE                                        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="video" className="space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              WATCH: visual guide to what breaks the fast
            </h2>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
            <div className="relative aspect-video flex items-center justify-center bg-neutral-900/50 group cursor-pointer">
              {/* Decorative background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-white rounded-full"></div>
                <div className="w-36 h-36 border-2 border-white rounded-t-full absolute"></div>
              </div>

              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10">
                <Play className="w-8 h-8 fill-black ml-1 text-black" />
              </div>
            </div>
            <div className="px-5 py-3 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800">
              <span>Visual Guide: Actions That Break the Fast — Animated Explainer</span>
              <span className="text-neutral-500 font-mono">8:32</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* CHECK ALL FILES / RELATED ARTICLES                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="check-articles" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Check all files
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Eating by mistake — does it break the fast?", href: "/ramadan/rules#accidental-nullification", tag: "Ruling" },
              { title: "Qadha and Kaffarah: complete breakdown", href: "/ramadan/rules#kaffarah-qadha", tag: "Deep-dive" },
            ].map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition-all group block"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 mb-2 block">{article.tag}</span>
                <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">{article.title}</h3>
                <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* WHAT TO DO IF IT HAPPENS TO YOU                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="what-to-do" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            What to do if it happens to you
          </h2>

          <div className="space-y-4">
            {whatToDoSteps.map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
                <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* FAQ                                                        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="faq" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqItems.map((faq) => (
              <CollapsibleFaq key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* RELATED GUIDES                                             */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="related" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Related guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="flex items-center gap-3 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 hover:border-neutral-600 hover:bg-neutral-900/50 transition-all group"
              >
                <BookOpen className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors shrink-0" />
                <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{guide.title}</span>
                <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-amber-400 ml-auto transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* TRUST & REVIEW                                             */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="trust" className="space-y-5 pb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Trust me and review
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Reviewed badge */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Fiqh Advisory Board</p>
                  <p className="text-[10px] text-neutral-500">Reviewed & Verified</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                This article has been reviewed by qualified Islamic scholars specialising in the Fiqh of fasting. All rulings are cross-referenced against classical texts and contemporary fatwa councils.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-3">Sources</h3>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-neutral-600 shrink-0" />
                  Sahih al-Bukhari — Kitab al-Sawm
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-neutral-600 shrink-0" />
                  Sahih Muslim — Kitab al-Siyam
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-neutral-600 shrink-0" />
                  Al-Mughni by Ibn Qudamah
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-neutral-600 shrink-0" />
                  Al-Fiqh al-Islami wa Adillatuhu — Wahbah al-Zuhayli
                </li>
                <li className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-neutral-600 shrink-0" />
                  Islamic Fiqh Academy (OIC) Resolutions
                </li>
              </ul>
            </div>
          </div>

          {/* Share bar */}
          <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3">
            <span className="text-xs text-neutral-400">Was this article helpful? Share it with others.</span>
            <div className="flex items-center gap-3">
              <button className="text-neutral-500 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Back to hub */}
          <div className="text-center pt-4">
            <Link
              href="/ramadan/rules"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Fasting Rules Hub
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
