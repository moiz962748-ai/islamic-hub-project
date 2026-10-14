import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Compass,
  Sparkles,
  Heart,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
  HelpCircle,
  Award,
  Layers,
  Check,
  ArrowLeft,
  Book,
  Flame,
  FileText
} from 'lucide-react';
import { guidesData, getGuideBySlug, getAllGuideSlugs, GuideItem } from './guidesData';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const allSlugs = getAllGuideSlugs();
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const guide = getGuideBySlug(params?.slug || 'namaz');

  if (!guide) {
    return {
      title: 'Guide Not Found | IslamHub',
      description: 'The requested Islamic worship guide was not found.',
    };
  }

  const canonicalUrl = `https://islamhub.example.com/guides/${guide.slug}`;

  return {
    title: `${guide.title} — IslamHub`,
    description: guide.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${guide.title} | Authentic Worship Guides`,
      description: guide.description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'IslamHub',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | IslamHub`,
      description: guide.description,
    },
  };
}

export default function GuideDynamicPage({ params }: PageProps) {
  const rawSlug = params?.slug || 'namaz';
  const guide = getGuideBySlug(rawSlug);

  if (!guide) {
    return (
      <div className="min-h-[70vh] bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white">
            <Compass className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Guide Not Found</h1>
            <p className="text-slate-400 text-sm">
              The requested guide <span className="font-mono text-white font-semibold">"{rawSlug}"</span> was not found in our directory.
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold font-medium text-sm transition-colors shadow-lg shadow-neutral-950/50"
            >
              <BookOpen className="w-4 h-4" />
              Browse All Ibadat Guides
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://islamhub.com/guides/${guide.slug}`;

  // Structured Data Schema for Google Search, AI Overviews, and Rich Results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        url: canonicalUrl,
        headline: guide.title,
        description: guide.description,
        image: [
          'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80'
        ],
        datePublished: '2026-01-15T08:00:00+00:00',
        dateModified: '2026-02-28T12:00:00+00:00',
        inLanguage: ['en', 'ar'],
        author: {
          '@type': 'Organization',
          name: 'IslamHub Islamic Research & Scholarly Board',
          url: 'https://islamhub.com/about/scholarly-board/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'IslamHub Islamic Research & Scholarly Board',
          url: 'https://islamhub.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://islamhub.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
      {
        '@type': 'VideoObject',
        '@id': `${canonicalUrl}#video`,
        name: `${guide.title} - Step-by-Step Practical Demonstration`,
        description: `Complete instructional video demonstrating how to perform ${guide.title} with proper Sunni Fiqh posture and rulings.`,
        thumbnailUrl: [
          'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80'
        ],
        uploadDate: '2026-01-15T08:00:00+00:00',
        duration: 'PT8M20S',
        contentUrl: `https://islamhub.com/videos/guides/${guide.slug}.mp4`,
        embedUrl: 'https://www.youtube.com/embed/placeholder',
      },
      {
        '@type': 'HowTo',
        '@id': `${canonicalUrl}#howto`,
        name: guide.title,
        description: guide.description,
        step: guide.steps.map((s, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: s.title,
          text: s.instruction,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://islamhub.example.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Worship Guides (Ibadat)',
            item: 'https://islamhub.example.com/guides',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  const otherGuides = guidesData.filter((g) => g.slug !== guide.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-white selection:text-black selection:text-white pb-24">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner Navigation & Breadcrumbs */}
      <div className="bg-slate-900/80 border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
            <Link href="/guides" className="hover:text-white transition-colors">
              Ibadat Guides
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">
              {guide.slug.replace(/-/g, ' ')}
            </span>
          </nav>

          <Link
            href="/guides"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-medium ml-4 flex-shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            All Guides Directory
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Header Hero Container */}
        <header className="space-y-6 text-center sm:text-left border-b border-slate-800 pb-10">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-white border border-neutral-800">
              <Sparkles className="w-3 h-3" />
              {guide.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <Clock className="w-3 h-3 text-slate-400" />
              {guide.readTime}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-white border border-slate-700/60">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              Verified Sunnah
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-2xl sm:text-3xl font-serif text-white tracking-wide font-normal" dir="rtl">
              {guide.titleArabic}
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {guide.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {guide.subtitle}
            </p>
          </div>

          {/* E-E-A-T Authenticity Callout Box */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-white flex-shrink-0" />
              <span>
                <strong className="text-white">Authentic Hadith Citation:</strong> {guide.authenticity}
              </span>
            </div>
            <div className="text-slate-400 text-xs flex items-center gap-2">
              <span>Reviewed by Islamic Scholars</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white text-black"></span>
            </div>
          </div>
        </header>

        {/* Virtues & Prerequisites Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {/* Virtues Card */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2.5 mb-4 text-white">
              <Heart className="w-5 h-5" />
              <h2 className="font-bold text-base sm:text-lg text-white">Spiritual Virtues &amp; Rewards</h2>
            </div>
            <ul className="space-y-3">
              {guide.virtues.map((v, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites Card */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2.5 mb-4 text-amber-400">
              <Compass className="w-5 h-5" />
              <h2 className="font-bold text-base sm:text-lg text-white">Prerequisites &amp; Conditions (Shurut)</h2>
            </div>
            <ul className="space-y-3">
              {guide.prerequisites.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Practical Instructions */}
        <section className="my-12 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-white" />
              Step-by-Step Practical Method
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Follow each step in sequential order according to authentic prophetic transmissions.
            </p>
          </div>

          <div className="space-y-6">
            {guide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 transition-all hover:border-slate-700/80 shadow-lg shadow-black/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white text-black font-semibold font-bold flex items-center justify-center text-sm shadow-md shadow-neutral-950/50">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Optional Arabic Calligraphy Block */}
                {step.arabic && (
                  <div className="bg-slate-950/90 border border-slate-800/80 rounded-xl p-5 my-4 text-center sm:text-right" dir="rtl">
                    <p className="text-xl sm:text-2xl font-serif text-white leading-loose">
                      {step.arabic}
                    </p>
                    {step.transliteration && (
                      <p className="text-xs sm:text-sm text-slate-400 font-mono italic mt-2 text-left" dir="ltr">
                        {step.transliteration}
                      </p>
                    )}
                    {step.translation && (
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 text-left" dir="ltr">
                        <strong className="text-slate-400 font-semibold">Meaning:</strong> {step.translation}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                  {step.instruction}
                </p>

                {step.tips && (
                  <div className="mt-4 p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5 text-xs sm:text-sm text-white">
                    <Sparkles className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-white">Sunnah Insight:</strong> {step.tips}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hadith Proof Banner */}
        <section className="my-10 bg-gradient-to-r from-neutral-900 via-neutral-900 to-black p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-neutral-800 text-white border border-neutral-800 flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Prophetic Hadith Authority
              </h3>
              <p className="text-base sm:text-lg text-slate-200 italic font-serif leading-relaxed">
                {guide.hadithReference.text}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
                — {guide.hadithReference.source}
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="my-12">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-white" />
                Scholarly FAQs &amp; Common Queries
              </h2>
            </div>

            <div className="space-y-4">
              {guide.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
                  <h4 className="font-semibold text-base text-white mb-2 flex items-start gap-2">
                    <span className="text-white font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Explore Other Guides Directory */}
        <section className="my-14 border-t border-slate-800 pt-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Explore More Ibadat Guides
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Deepen your knowledge of authentic Islamic worship
              </p>
            </div>
            <Link
              href="/guides"
              className="text-xs sm:text-sm text-white hover:text-white font-medium flex items-center gap-1"
            >
              Browse All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}`}
                className="group block p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-neutral-600 hover:bg-slate-900 transition-all shadow-md"
              >
                <div className="text-xs text-white font-medium mb-1">
                  {item.categoryLabel}
                </div>
                <h4 className="font-semibold text-white text-sm group-hover:text-white transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
