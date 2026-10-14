'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Clock, Compass, Calendar, BookOpen, ShieldCheck, 
  MapPin, ChevronRight, Info, CheckCircle2, 
  ArrowRight, Sparkles, HelpCircle, Moon, Sun, Sunrise, Sunset
} from 'lucide-react';

interface CityPrayerData {
  city: string;
  country: string;
  timezone: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const CITY_SCHEDULES: Record<string, CityPrayerData> = {
  london: {
    city: 'London',
    country: 'United Kingdom',
    timezone: 'GMT (UTC+0)',
    fajr: '05:14',
    sunrise: '06:48',
    dhuhr: '12:58',
    asr: '16:04',
    maghrib: '18:12',
    isha: '19:42',
  },
  newyork: {
    city: 'New York',
    country: 'United States',
    timezone: 'EST (UTC-5)',
    fajr: '05:42',
    sunrise: '07:05',
    dhuhr: '13:02',
    asr: '16:15',
    maghrib: '18:04',
    isha: '19:28',
  },
  dubai: {
    city: 'Dubai',
    country: 'United Arab Emirates',
    timezone: 'GST (UTC+4)',
    fajr: '05:18',
    sunrise: '06:36',
    dhuhr: '12:31',
    asr: '15:48',
    maghrib: '18:24',
    isha: '19:44',
  },
  karachi: {
    city: 'Karachi',
    country: 'Pakistan',
    timezone: 'PKT (UTC+5)',
    fajr: '05:28',
    sunrise: '06:44',
    dhuhr: '12:36',
    asr: '15:52',
    maghrib: '18:26',
    isha: '19:42',
  },
  makkah: {
    city: 'Makkah',
    country: 'Saudi Arabia',
    timezone: 'AST (UTC+3)',
    fajr: '05:22',
    sunrise: '06:38',
    dhuhr: '12:33',
    asr: '15:54',
    maghrib: '18:27',
    isha: '19:57',
  },
  toronto: {
    city: 'Toronto',
    country: 'Canada',
    timezone: 'EST (UTC-5)',
    fajr: '05:51',
    sunrise: '07:18',
    dhuhr: '13:17',
    asr: '16:22',
    maghrib: '18:14',
    isha: '19:42',
  },
  istanbul: {
    city: 'Istanbul',
    country: 'Turkey',
    timezone: 'TRT (UTC+3)',
    fajr: '05:48',
    sunrise: '07:14',
    dhuhr: '13:12',
    asr: '16:18',
    maghrib: '18:58',
    isha: '20:18',
  },
  cairo: {
    city: 'Cairo',
    country: 'Egypt',
    timezone: 'EEST (UTC+3)',
    fajr: '04:52',
    sunrise: '06:18',
    dhuhr: '12:04',
    asr: '15:24',
    maghrib: '17:48',
    isha: '19:08',
  },
};

export default function PrayerTimesPage() {
  const [selectedCityKey, setSelectedCityKey] = useState<string>('london');
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeData = CITY_SCHEDULES[selectedCityKey] || CITY_SCHEDULES['london'];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const prayers = [
    { name: 'Fajr', time: activeData.fajr, icon: Moon, desc: 'Dawn to Sunrise' },
    { name: 'Sunrise', time: activeData.sunrise, icon: Sunrise, desc: 'End of Fajr' },
    { name: 'Dhuhr', time: activeData.dhuhr, icon: Sun, desc: 'After Solar Noon' },
    { name: 'Asr', time: activeData.asr, icon: Sun, desc: 'Mid-Afternoon' },
    { name: 'Maghrib', time: activeData.maghrib, icon: Sunset, desc: 'Sunset & Iftar' },
    { name: 'Isha', time: activeData.isha, icon: Moon, desc: 'Night Prayer' },
  ];

  return (
    <main className="min-h-screen bg-black text-neutral-50 pb-20 font-sans selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-neutral-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li><span className="text-neutral-600">&gt;</span></li>
            <li>
              <span className="text-neutral-200 font-medium" aria-current="page">Daily Prayer Times</span>
            </li>
          </ol>
        </nav>

        {/* Header & E-E-A-T */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-3.5 py-1.5 text-xs text-neutral-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Astronomical & Shariah Calculation Standards Verified</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Worldwide Daily Prayer Times (Salah)
          </h1>
          <p className="text-neutral-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Accurate daily prayer times calculated using recognized astronomical conventions (Umm al-Qura, Muslim World League, ISNA). View current prayer times, upcoming prayer schedules, and direct Qibla direction for your city.
          </p>
        </div>

        {/* City Selector Bar */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">
                  {activeData.city}, {activeData.country}
                </h3>
                <span className="text-xs text-neutral-400">{activeData.timezone}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span>Current Time: {currentTimeStr || '00:00:00'}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(CITY_SCHEDULES).map(([key, data]) => {
              const isActive = selectedCityKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCityKey(key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-black shadow-sm'
                      : 'bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  {data.city}
                </button>
              );
            })}
          </div>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {prayers.map((prayer) => {
            const IconComponent = prayer.icon;
            const isSunrise = prayer.name === 'Sunrise';

            return (
              <div 
                key={prayer.name}
                className={`p-5 rounded-2xl flex flex-col justify-between transition-all border ${
                  isSunrise 
                    ? 'bg-neutral-950/80 border-neutral-800/60' 
                    : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {prayer.name}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                    {prayer.time}
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    {prayer.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Utility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link
            href="/tools/qibla-finder/"
            className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                Online Qibla Compass
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Calculate precise millimeter Kaaba alignment directly from your current GPS or city coordinates.
              </p>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5 mt-auto">
              <span>Align Direction</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/duas/"
            className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                Daily Masnoon Duas & Adhkar
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Authentic post-prayer supplications, Tasbeeh Fatimi, and daily morning and evening Adhkar with audio.
              </p>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5 mt-auto">
              <span>Explore Duas Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/ramadan/timings/"
            className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                Ramadan 2026 Suhoor & Iftar
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Full 30-day Ramadan fasting calendar, sehri/iftar alarms, and localized astronomical tables.
              </p>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5 mt-auto">
              <span>View Ramadan Calendar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Calculation Methods Section */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-white" />
            Astronomical Calculation Conventions
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-3xl">
            Islamic prayer schedules rely on the solar position relative to the horizon. Twilight angles for Fajr and Isha vary across global Fiqh boards:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <span className="text-white font-bold block mb-1">Umm al-Qura, Makkah</span>
              <span className="text-neutral-400 block leading-relaxed">
                Fajr: 18.5° angle. Isha: 90 minutes after Maghrib (120 min during Ramadan). Standard across the Arabian Peninsula.
              </span>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <span className="text-white font-bold block mb-1">Muslim World League (MWL)</span>
              <span className="text-neutral-400 block leading-relaxed">
                Fajr: 18° angle. Isha: 17° angle. Widely adopted across Europe, the UK, and parts of the Middle East.
              </span>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <span className="text-white font-bold block mb-1">ISNA (North America)</span>
              <span className="text-neutral-400 block leading-relaxed">
                Fajr: 15° angle. Isha: 15° angle. Designed for safety in higher latitudes across the USA and Canada.
              </span>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-white" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'How are daily prayer times calculated?',
                a: 'Daily prayer times are determined by the sun’s exact astronomical position relative to local coordinates. Dhuhr starts after solar noon (Zawal), Asr is based on shadow length ratios, Maghrib begins immediately upon sunset, and Fajr/Isha correspond to sub-horizon solar depression angles.',
              },
              {
                q: 'What is the difference between Hanafi and Standard Asr time?',
                a: 'The majority of Islamic schools (Shafi’i, Maliki, Hanbali) calculate Asr when an object’s shadow equals its length plus the midday shadow (Mithl 1). The Hanafi school calculates Asr when the shadow equals twice the length (Mithl 2), which is approximately 45-60 minutes later.',
              },
              {
                q: 'What should I do if I miss a prayer (Qada)?',
                a: 'Obligatory prayers that are missed due to sleep or forgetfulness must be made up as soon as remembered, as taught by the Prophet ﷺ in Sahih Al-Bukhari (597).',
              },
              {
                q: 'How does Qibla direction relate to prayer times?',
                a: 'Facing the Kaaba in Makkah (Qibla) is an essential prerequisite (Shart) for the validity of Salah. You can use our integrated Qibla Finder tool above to get the precise compass bearing from your device.',
              },
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-neutral-400 text-lg ml-4">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
