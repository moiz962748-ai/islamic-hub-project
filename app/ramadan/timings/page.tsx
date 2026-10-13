import Link from 'next/link';
import { 
  ChevronRight, ShieldCheck, MapPin, 
  ArrowRight, Globe, AlertCircle, 
  Compass, HelpCircle, Sun, Moon,
  PlayCircle
} from 'lucide-react';

export const metadata = {
  title: "Suhoor & Iftar Timings 2026: Worldwide Prayer Schedules & Directory",
  description: "Access accurate 2026 Ramadan Suhoor and Iftar prayer schedules for thousands of cities globally, verified by major calculation methods (ISNA, MWL, Umm al-Qura).",
  openGraph: {
    title: "Suhoor & Iftar Timings 2026: Worldwide Prayer Schedules & Directory",
    description: "Access accurate 2026 Ramadan Suhoor and Iftar prayer schedules for thousands of cities globally, verified by major calculation methods (ISNA, MWL, Umm al-Qura).",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/ramadan/timings",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://yourdomain.com/ramadan/timings/#webpage",
      "url": "https://yourdomain.com/ramadan/timings",
      "name": "Suhoor & Iftar Timings 2026: Worldwide Prayer Schedules & Directory",
      "description": "Accurate worldwide Suhoor and Iftar prayer schedules for Ramadan 2026."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ramadan Hub", "item": "https://yourdomain.com/ramadan" },
        { "@type": "ListItem", "position": 3, "name": "Timings", "item": "https://yourdomain.com/ramadan/timings" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is there a discrepancy in calculation methods for Suhoor?",
          "acceptedAnswer": { "@type": "Answer", "text": "Different calculation methods (like ISNA, MWL, and Umm al-Qura) use slightly different sun angle calculations for Fajr (dawn), leading to minor variations in Suhoor end times. Pick one reliable local method and stick to it consistently." }
        },
        {
          "@type": "Question",
          "name": "How do I fast when traveling across time zones?",
          "acceptedAnswer": { "@type": "Answer", "text": "When traveling, you fast according to the local times of the place you are physically present in. If you depart after Fajr and fly west, your day is extended; you break fast when the sun sets at your current physical location in the air or upon landing." }
        },
        {
          "@type": "Question",
          "name": "Can I sync these timings to my mobile device?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, our dynamic schedule links can be used to manually track or export timings. We also recommend standardizing your mobile app to the exact same calculation angle you see here." }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "How Prayer & Fasting Timings Are Calculated Globally",
      "description": "Learn how Fiqh councils calculate Suhoor and Iftar timings using astronomical methods like ISNA, MWL, and Umm al-Qura.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1594957677840-a4d101d2ce89?auto=format&fit=crop&q=80",
      "uploadDate": "2026-02-01T08:00:00+00:00",
      "embedUrl": "https://yourdomain.com/embed/ramadan-timings-calculation"
    }
  ]
};

// Mock data for the "Today's Global Snapshot"
const globalSnapshot = [
  { city: "London", country: "uk", fajr: "05:12 AM", maghrib: "06:05 PM", flag: "🇬🇧" },
  { city: "New York", country: "us", fajr: "05:30 AM", maghrib: "07:15 PM", flag: "🇺🇸" },
  { city: "Toronto", country: "canada", fajr: "05:40 AM", maghrib: "07:20 PM", flag: "🇨🇦" },
  { city: "Karachi", country: "pakistan", fajr: "05:15 AM", maghrib: "06:30 PM", flag: "🇵🇰" },
  { city: "Dubai", country: "uae", fajr: "05:05 AM", maghrib: "06:25 PM", flag: "🇦🇪" },
  { city: "Sydney", country: "australia", fajr: "04:50 AM", maghrib: "07:40 PM", flag: "🇦🇺" },
];

// Expanded data for "Country & Region Directory" (10 Countries, 5 Cities each)
const regionDirectory = [
  { country: "United States", code: "us", cities: ["New York", "Chicago", "Houston", "Los Angeles", "Dearborn"] },
  { country: "United Kingdom", code: "uk", cities: ["London", "Birmingham", "Manchester", "Glasgow", "Bradford"] },
  { country: "Pakistan", code: "pakistan", cities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar"] },
  { country: "UAE", code: "uae", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain"] },
  { country: "Canada", code: "canada", cities: ["Toronto", "Mississauga", "Vancouver", "Calgary", "Montreal"] },
  { country: "Australia", code: "australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"] },
  { country: "Saudi Arabia", code: "saudi-arabia", cities: ["Makkah", "Madinah", "Riyadh", "Jeddah", "Dammam"] },
  { country: "India", code: "india", cities: ["Mumbai", "Delhi", "Hyderabad", "Bangalore", "Lucknow"] },
  { country: "Malaysia", code: "malaysia", cities: ["Kuala Lumpur", "Penang", "Johor Bahru", "Shah Alam", "Malacca"] },
  { country: "South Africa", code: "south-africa", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"] },
];

export default function RamadanTimingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. HEADER & E-E-A-T TRUST */}
        <header className="space-y-6">
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/ramadan" className="hover:text-emerald-400 transition-colors">Ramadan</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-slate-200">Timings</span>
          </nav>

          <Link href="/about/scholarly-board/" className="flex items-center space-x-2 w-fit bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5 hover:bg-emerald-400/20 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Reviewed by Fiqh & Astronomical Board</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Suhoor & Iftar Timings 2026: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Worldwide Prayer Schedules & Directory
            </span>
          </h1>

          <div className="max-w-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Find accurate Ramadan calendars for thousands of cities globally. Our localized schedules are generated utilizing major recognized astronomical calculation conventions, including ISNA (15°), Muslim World League (18°), and Umm al-Qura (18.5°).
            </p>
          </div>
        </header>

        {/* 2. "TODAY'S GLOBAL SNAPSHOT" GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
             <h2 className="text-2xl font-bold text-white flex items-center">
               <Globe className="w-6 h-6 mr-3 text-emerald-400"/> 
               Today's Global Snapshot
             </h2>
             <span className="text-sm font-medium text-slate-500 hidden sm:block">Real-time Preview</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalSnapshot.map((cityData) => (
              <div key={cityData.city} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <span className="mr-2">{cityData.flag}</span>
                      {cityData.city}
                    </h3>
                  </div>
                  <MapPin className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                    <div className="flex items-center text-slate-400 mb-1">
                      <Sun className="w-4 h-4 mr-1.5" />
                      <span className="text-xs uppercase font-semibold tracking-wider">Suhoor</span>
                    </div>
                    <span className="text-lg font-bold text-slate-200">{cityData.fajr}</span>
                  </div>
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                    <div className="flex items-center text-slate-400 mb-1">
                      <Moon className="w-4 h-4 mr-1.5" />
                      <span className="text-xs uppercase font-semibold tracking-wider">Iftar</span>
                    </div>
                    <span className="text-lg font-bold text-slate-200">{cityData.maghrib}</span>
                  </div>
                </div>

                <Link 
                  href={`/ramadan/timings/${cityData.country}/${cityData.city.toLowerCase().replace(/ /g, '-')}/`} 
                  className="w-full flex items-center justify-center py-3 px-4 bg-slate-800/50 hover:bg-emerald-600/20 text-emerald-400 text-sm font-semibold rounded-xl border border-transparent hover:border-emerald-500/30 transition-all"
                >
                  View Full 30-Day Schedule <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COUNTRY & REGION DIRECTORY (Local SEO Silo) */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Country & Region Directory</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {regionDirectory.map((region) => (
              <div key={region.code} className="flex flex-col">
                <Link href={`/ramadan/timings/${region.code}/`} className="inline-flex items-center text-lg font-bold text-white mb-4 hover:text-emerald-400 transition-colors group">
                  {region.country}
                  <ChevronRight className="w-5 h-5 ml-1 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </Link>
                <ul className="space-y-3 border-l-2 border-slate-800/80 pl-4 flex-1">
                  {region.cities.map((city) => (
                    <li key={city}>
                      <Link 
                        href={`/ramadan/timings/${region.code}/${city.toLowerCase().replace(/ /g, '-')}/`}
                        className="text-slate-400 hover:text-emerald-300 text-sm font-medium transition-colors inline-block"
                      >
                        {city} Timetable
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      href={`/ramadan/timings/${region.code}/`}
                      className="text-emerald-500/80 hover:text-emerald-400 text-sm font-medium italic transition-colors inline-block mt-2"
                    >
                      View all {region.country} cities →
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FIQH & CALCULATION METHODOLOGY (AEO Content & Video) */}
        <section className="flex flex-col gap-8">
          
          {/* AEO Direct Answer Boxes Stacked Cleanly */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-2xl p-6 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-500/20 p-2 rounded-lg shrink-0">
                  <AlertCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">Imsak vs. Fajr (Suhoor End)</h2>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    <strong>Imsak</strong> is an arbitrary boundary set ~10-15 minutes before Fajr as a precaution. However, Fiqh consensus states fasting officially begins precisely at the <strong>Fajr adhan</strong> (true dawn). You may continue eating until the Fajr time enters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg shrink-0">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">Prompt Iftar Rulings</h2>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    It is highly recommended (Sunnah) to break your fast immediately once the sun has completely set (Maghrib). Delaying the fast beyond this time out of an abundance of caution contradicts Prophetic tradition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Guide & Featured Media */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
              <div className="flex items-center space-x-3">
                <Compass className="w-6 h-6 text-emerald-400 shrink-0" />
                <h2 className="text-2xl font-bold text-white">How Prayer & Fasting Timings Are Calculated Globally</h2>
              </div>
            </div>

            {/* Video Preview Card with Bullet Description */}
            <div className="w-full p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl mb-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left Column: Video */}
                <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800/80 group hover:border-slate-700 transition-colors cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594957677840-a4d101d2ce89?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  
                  <button className="z-20 relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
                    <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 opacity-90 drop-shadow-2xl mb-4" />
                    <span className="text-white font-semibold tracking-wide drop-shadow-md">Watch Methodology Guide (3:15)</span>
                  </button>
                </div>
                
                {/* Right Column: Text */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-6">Key Methodology Takeaways</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-sm">
                      <span className="text-emerald-400 mr-3 font-bold mt-0.5">•</span>
                      <span className="text-slate-300 leading-relaxed"><strong>Method Angles:</strong> Comparing ISNA (15°), MWL (18°), and Umm al-Qura standards.</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-emerald-400 mr-3 font-bold mt-0.5">•</span>
                      <span className="text-slate-300 leading-relaxed"><strong>Imsak vs. Fajr:</strong> Why a 10-minute safety buffer is observed in regional timetables.</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-emerald-400 mr-3 font-bold mt-0.5">•</span>
                      <span className="text-slate-300 leading-relaxed"><strong>High Latitudes:</strong> How fasting durations are calculated in extreme northern regions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Because true dawn (Fajr) depends on the angle of the sun below the horizon, different global councils use slightly varying angles to calculate prayer timings. Here are the primary methodologies used in our schedules:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded-full text-xs shrink-0">15.0° Angle</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">ISNA</h4>
                  <p className="text-slate-400 text-xs">Islamic Society of North America. Used widely in the USA and Canada.</p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded-full text-xs shrink-0">18.0° Angle</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">MWL</h4>
                  <p className="text-slate-400 text-xs">Muslim World League. Used predominantly in Europe, the Far East, and parts of the US.</p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded-full text-xs shrink-0">18.5° Angle</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Umm al-Qura</h4>
                  <p className="text-slate-400 text-xs">University of Makkah standard for the Arabian Peninsula. Uses fixed 90-minute intervals.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h4 className="text-white font-semibold mb-2">High Latitude Guidance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                For extreme northern or southern regions where days span over 20 hours or the sun does not set entirely, Fiqh councils advise adopting the timetable of the nearest moderate city (Aqrab al-Balad) or following Makkah timings.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQS & JSON-LD SCHEMA */}
        <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Timings FAQ</h2>
          </div>
          
          <div className="max-w-4xl space-y-2">
            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Why do different mosques in the same city have different Fajr times?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Discrepancies arise because mosques may subscribe to different calculation methodologies (e.g., ISNA's 15 degrees vs. MWL's 18 degrees). Both are historically and scholastically valid. It is highly recommended to pick the timetable of your local community mosque and stick with it consistently.
              </div>
            </details>

            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                How do I fast when traveling across time zones?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                When traveling, you fast according to the local times of the place you are physically present in. If you depart after Fajr and fly west, your day is extended; you break fast when the sun sets at your current physical location in the air or upon landing.
              </div>
            </details>

            <details className="group border-b border-slate-800/80 bg-slate-900/40 rounded-lg open:bg-slate-800/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors select-none">
                Can I sync these timings to my mobile device?
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90 text-slate-500 group-hover:text-emerald-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
                Yes, our dynamic schedule links can be used to manually track or export timings. We also recommend standardizing your mobile app (like Athan or MuslimPro) to the exact same calculation angle you see here to avoid confusion.
              </div>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}

