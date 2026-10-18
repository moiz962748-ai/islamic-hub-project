import React from 'react';
import { Sparkles, Activity, Heart } from 'lucide-react';

export default function FastingVirtuesBlock() {
  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 my-10 font-sans">
      {/* Header */}
      <header className="border-b border-neutral-800 pb-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-50">
          Core Virtues &amp; Health Benefits of Fasting
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1">
          Fasting in Ramadan combines spiritual purification with medically documented physical renewal.
        </p>
      </header>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Spiritual Purification */}
        <article className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 flex flex-col justify-between transition-colors hover:border-neutral-700">
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
              <Sparkles className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-base font-semibold text-neutral-100 mb-2">
              Spiritual Purification &amp; Taqwa
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
              Prescribed in Surah Al-Baqarah (2:183) so that believers may attain <span className="text-neutral-200 font-medium">Taqwa</span> (God-consciousness). Fasting shields the soul from sin, cleanses inner intentions, and deepens intimacy with the Divine.
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
            Quran 2:183 • Taqwa &amp; Sincerity
          </div>
        </article>

        {/* Card 2: Physical & Cellular Health */}
        <article className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 flex flex-col justify-between transition-colors hover:border-neutral-700">
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
              <Activity className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-base font-semibold text-neutral-100 mb-2">
              Physical &amp; Cellular Renewal
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
              Scientific research shows intermittent abstinence triggers <span className="text-neutral-200 font-medium">autophagy</span>—clearing damaged cellular debris. It also promotes insulin sensitivity, stabilizes blood glucose, and supports metabolic detoxification.
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
            Autophagy • Metabolic Reset
          </div>
        </article>

        {/* Card 3: Self-Discipline & Empathy */}
        <article className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 flex flex-col justify-between transition-colors hover:border-neutral-700">
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
              <Heart className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-base font-semibold text-neutral-100 mb-2">
              Self-Discipline &amp; Empathy
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
              Fasting exercises rigorous impulse control, reigning in speech and temper. Experiencing hunger firsthand nurtures profound compassion and actionable empathy for food-insecure and impoverished communities worldwide.
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
            Willpower • Compassion for Poor
          </div>
        </article>
      </div>
    </section>
  );
}
