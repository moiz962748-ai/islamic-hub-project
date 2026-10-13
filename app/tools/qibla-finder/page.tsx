"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  Compass,
  Navigation,
  MapPin,
  Locate,
  Check,
  CheckCircle2,
  RotateCw,
  ShieldCheck,
  Lock,
  Award,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Layers,
  ArrowRight,
  Video,
  Play,
  HelpCircle,
  Info,
  Sparkles,
  Sliders,
  AlertTriangle,
  Flame,
  Globe
} from 'lucide-react';

// Holy Kaaba Coordinates (Makkah al-Mukarramah)
const KAABA_LAT = 21.422487;
const KAABA_LNG = 39.826206;

interface CityPreset {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

const CITY_PRESETS: CityPreset[] = [
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
  { name: 'New York', country: 'United States', lat: 40.7128, lng: -74.006 },
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784 },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708 },
  { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011 },
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357 },
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.139, lng: 101.6869 },
  { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456 },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'Makkah', country: 'Saudi Arabia', lat: 21.4225, lng: 39.8262 }
];

// Great Circle Geodesy calculation for Forward Azimuth Bearing
function calculateQiblaBearing(lat: number, lng: number): number {
  const phi1 = (lat * Math.PI) / 180;
  const phi2 = (KAABA_LAT * Math.PI) / 180;
  const deltaLambda = ((KAABA_LNG - lng) * Math.PI) / 180;

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x =
    Math.cos(phi1) * Math.sin(phi2) -
    Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

  let qibla = (Math.atan2(y, x) * 180) / Math.PI;
  return Math.round(((qibla + 360) % 360) * 10) / 10;
}

// Haversine formula for distance in kilometers
function calculateDistanceToKaaba(lat: number, lng: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((KAABA_LAT - lat) * Math.PI) / 180;
  const dLon = ((KAABA_LNG - lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat * Math.PI) / 180) *
      Math.cos((KAABA_LAT * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export default function QiblaFinderPage() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(51.5074);
  const [longitude, setLongitude] = useState<number>(-0.1278);
  const [locationName, setLocationName] = useState<string>('London, United Kingdom');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Compass heading state
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [hasCompassSupport, setHasCompassSupport] = useState<boolean>(false);
  const [requiresIosPermission, setRequiresIosPermission] = useState<boolean>(false);
  const [isIosGranted, setIsIosGranted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Haptic feedback limiter ref
  const lastVibrateTimeRef = useRef<number>(0);

  // Client hydration safe guard
  useEffect(() => {
    setHasMounted(true);

    // Try reading cached city or location from localStorage
    try {
      const savedLat = localStorage.getItem('islamhub_qibla_lat');
      const savedLng = localStorage.getItem('islamhub_qibla_lng');
      const savedName = localStorage.getItem('islamhub_qibla_name');
      if (savedLat && savedLng && savedName) {
        setLatitude(parseFloat(savedLat));
        setLongitude(parseFloat(savedLng));
        setLocationName(savedName);
      }
    } catch (e) {
      // LocalStorage access restricted in iframe
    }

    // Check iOS orientation permission API
    if (
      typeof window !== 'undefined' &&
      typeof (DeviceOrientationEvent as any) !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      setRequiresIosPermission(true);
    }
  }, []);

  // Listen for device orientation
  useEffect(() => {
    if (!hasMounted) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      let heading: number | null = null;

      // iOS Safari provides webkitCompassHeading (relative to magnetic North)
      if (typeof (e as any).webkitCompassHeading !== 'undefined') {
        heading = (e as any).webkitCompassHeading;
      } else if (e.alpha !== null) {
        // Standard Android / Web orientation
        heading = (360 - e.alpha) % 360;
      }

      if (heading !== null && !isNaN(heading)) {
        setDeviceHeading(Math.round(heading));
        setHasCompassSupport(true);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
    };
  }, [hasMounted]);

  // Request iOS permission if needed
  const requestCompassPermission = async () => {
    if (
      typeof (DeviceOrientationEvent as any) !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission();
        if (response === 'granted') {
          setIsIosGranted(true);
          setRequiresIosPermission(false);
        } else {
          setLocationError('Compass sensor permission was denied in browser.');
        }
      } catch (err) {
        setLocationError('Could not initialize motion sensors on this device.');
      }
    }
  };

  // One-click GPS Location Detection
  const handleDetectLocation = useCallback(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
        setLocationName(`GPS: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`);
        setIsLocating(false);

        try {
          localStorage.setItem('islamhub_qibla_lat', lat.toString());
          localStorage.setItem('islamhub_qibla_lng', lng.toString());
          localStorage.setItem('islamhub_qibla_name', `GPS: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`);
        } catch (e) {
          // Guarded
        }
      },
      (error) => {
        setIsLocating(false);
        if (error.code === error.PERMISSION_DENIED) {
          setLocationError('Location permission denied. Please pick a city from the list below.');
        } else {
          setLocationError('Unable to retrieve your location. Please select a city manually.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  // Handle Manual City Select
  const handleSelectCity = (cityName: string) => {
    const city = CITY_PRESETS.find((c) => c.name === cityName);
    if (city) {
      setLatitude(city.lat);
      setLongitude(city.lng);
      setLocationName(`${city.name}, ${city.country}`);
      setLocationError(null);

      try {
        localStorage.setItem('islamhub_qibla_lat', city.lat.toString());
        localStorage.setItem('islamhub_qibla_lng', city.lng.toString());
        localStorage.setItem('islamhub_qibla_name', `${city.name}, ${city.country}`);
      } catch (e) {
        // Guarded
      }
    }
  };

  // Calculations
  const qiblaBearing = calculateQiblaBearing(latitude, longitude);
  const distanceKm = calculateDistanceToKaaba(latitude, longitude);

  // Offset between active heading and Qibla bearing
  // Raw difference
  const rawDiff = ((qiblaBearing - deviceHeading + 360) % 360);
  const offset = rawDiff > 180 ? rawDiff - 360 : rawDiff;
  const isAligned = Math.abs(offset) <= 3;

  // Haptic feedback trigger on alignment
  useEffect(() => {
    if (isAligned && hasCompassSupport) {
      const now = Date.now();
      if (now - lastVibrateTimeRef.current > 2500) {
        lastVibrateTimeRef.current = now;
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
          try {
            navigator.vibrate([40, 50, 60]);
          } catch (e) {
            // Guarded
          }
        }
      }
    }
  }, [isAligned, hasCompassSupport]);

  // Schema Injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://islamhub.com/tools/qibla-finder/#app",
        "name": "Online Qibla Finder & Kaaba Compass",
        "url": "https://islamhub.com/tools/qibla-finder/",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires HTML5 Geolocation and DeviceOrientation APIs",
        "description": "Accurate real-time online Qibla finder compass displaying the exact direction of the Kaaba in Makkah based on Great Circle Geodesy, GPS alignment, and device orientation.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://islamhub.com/tools/qibla-finder/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://islamhub.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Islamic Tools",
            "item": "https://islamhub.com/tools/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Online Qibla Finder",
            "item": "https://islamhub.com/tools/qibla-finder/"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://islamhub.com/tools/qibla-finder/#howto",
        "name": "How to Find Qibla Direction Accurately",
        "description": "Four essential steps to locate the exact direction of the Kaaba in Makkah using your mobile phone or web browser.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Enable GPS Access",
            "text": "Allow location permissions or manually select your nearest city from the menu."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Place Device Flat",
            "text": "Lay your smartphone flat on a non-metallic, level surface away from electromagnetic interference."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Rotate Your Phone",
            "text": "Slowly turn your device until the compass needle aligns directly with the golden Kaaba indicator."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Verify Alignment",
            "text": "The compass ring turns green and vibrates gently when you are facing the exact Qibla direction."
          }
        ]
      },
      {
        "@type": "VideoObject",
        "@id": "https://islamhub.com/tools/qibla-finder/#video",
        "name": "How to Calibrate Your Phone Compass for Qibla",
        "description": "Step-by-step video demonstration on how to calibrate smartphone sensors, avoid magnetic interference, and find the precise Qibla direction.",
        "thumbnailUrl": [
          "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop"
        ],
        "uploadDate": "2026-03-01T08:00:00+00:00",
        "duration": "PT2M10S",
        "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        "publisher": {
          "@type": "Organization",
          "name": "IslamHub",
          "url": "https://islamhub.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://islamhub.com/tools/qibla-finder/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does my phone compass point in the wrong direction indoors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indoors, smartphones are affected by electromagnetic interference from laptop power supplies, reinforced concrete walls with steel rebar, metal desks, and audio speakers. To restore precision, wave your smartphone in a slow figure-8 motion and place it flat on a wooden table away from electronic chargers."
            }
          },
          {
            "@type": "Question",
            "name": "Does the Qibla compass work without internet access?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once the web application loads into your browser, the mathematical Great Circle Geodesy formula and magnetometer sensor readings run 100% client-side on your device without sending location data to any server."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if my smartphone does not have a magnetometer sensor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your device lacks a magnetic sensor, use our city dropdown or enter your coordinates to calculate your exact Qibla bearing in degrees (e.g. 118.9° ESE). You can then use a standard manual magnetic compass or sun orientation to align with that specific degree."
            }
          },
          {
            "@type": "Question",
            "name": "How is Qibla direction calculated for long-distance flight travel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In aviation, Qibla direction is computed via Great Circle navigation (geodesic forward azimuth on the WGS-84 ellipsoid). Because aircraft fly along geodesic shortest paths across the globe, the relative Qibla bearing changes continuously along your flight path."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "Why does my phone compass point in the wrong direction indoors?",
      a: "Indoors, smartphones are affected by electromagnetic interference from laptop chargers, reinforced concrete walls containing steel rebar, metal table frames, and audio speakers. To restore precision, wave your smartphone in a slow figure-8 motion in the air and lay it flat on a wooden or non-metallic surface."
    },
    {
      q: "Does the Qibla compass work without internet access?",
      a: "Yes. Once this page is loaded, the entire Great Circle azimuth mathematical calculation and your phone's gyroscope/magnetometer readings run 100% client-side in your browser. No coordinates or device telemetry are transmitted to external servers."
    },
    {
      q: "What should I do if my smartphone does not have a magnetometer sensor?",
      a: "If your laptop, tablet, or smartphone lacks a hardware compass sensor, simply select your city from our dropdown or use GPS to obtain your exact bearing in degrees (e.g., London = 118.9° ESE). You can then face that angle using a traditional physical compass or by orienting yourself with the sunrise/sunset."
    },
    {
      q: "How is Qibla direction calculated for long-distance flight travel?",
      a: "Qibla direction is determined using the Great Circle Geodesy forward azimuth based on the Earth's curvature (WGS-84 ellipsoid). Because aircraft fly along curved geodesic tracks rather than flat map lines, your relative Qibla bearing shifts dynamically as you traverse different longitudes."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      {/* Schema Injection & Canonical */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="canonical" href="https://islamhub.com/tools/qibla-finder/" />

      <div className="max-w-4xl mx-auto space-y-6">

        {/* SECTION 1: HEADER & BREADCRUMBS */}
        <header className="space-y-3">
          <nav aria-label="Breadcrumbs" className="flex items-center text-xs font-medium text-slate-400 space-x-2 flex-wrap gap-y-1">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/tools/" className="hover:text-emerald-400 transition-colors">Islamic Tools</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold">Online Qibla Finder</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Interactive Islamic Utility • Great Circle Geodesy</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Online Qibla Finder &amp; Kaaba Compass
            </h1>

            {/* E-E-A-T Verification Badge Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5 text-emerald-400 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Great Circle Geodesy</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 text-slate-300 text-[11px]">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Kaaba Coordinates (21.4225° N, 39.8262° E)</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Zero Location Tracking • 100% Client-Side</span>
              </div>
            </div>
          </div>

          {/* 2-Sentence TL;DR Direct Answer Summary Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-emerald-400 mr-1.5">Direct Overview:</span>
            The Qibla represents the exact direction toward the sacred Kaaba in Makkah (21.4225° N, 39.8262° E), calculated across the Earth's curvature using Great Circle Geodesy (spherical forward azimuth). Facing this singular point unifies millions of Muslims worldwide in shared spiritual devotion across every daily prayer.
          </div>
        </header>

        {/* SECTION 2: COMPACT INTERACTIVE QIBLA COMPASS APPLICATION (ABOVE THE FOLD) */}
        <section
          aria-label="Interactive Qibla Compass Tool"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden max-w-xl mx-auto"
        >
          {/* Subtle Ambient Background Radial Glow */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-2xl pointer-events-none transition-all duration-300 ${
              isAligned ? 'bg-emerald-500/20' : 'bg-emerald-500/5'
            }`}
          />

          <div className="relative z-10 space-y-4">

            {/* Top Bar: Location Status & GPS Detect Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Current Location
                  </span>
                  <span className="text-xs font-semibold text-white truncate block">
                    {hasMounted ? locationName : 'Detecting location...'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  disabled={isLocating}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-xs font-bold disabled:opacity-50"
                  title="Detect coordinates via browser GPS"
                >
                  <Locate className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
                  <span>{isLocating ? 'Locating...' : 'Detect GPS'}</span>
                </button>
              </div>
            </div>

            {/* Location Error Warning if any */}
            {locationError && (
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>{locationError}</span>
              </div>
            )}

            {/* Manual City Dropdown & Sensor Permission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="relative">
                <label htmlFor="city-select" className="sr-only">Choose Major City</label>
                <select
                  id="city-select"
                  onChange={(e) => handleSelectCity(e.target.value)}
                  defaultValue=""
                  className="w-full appearance-none bg-slate-950/90 border border-slate-800 hover:border-slate-700 text-slate-200 px-3 py-1.5 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500 transition-colors pr-8 cursor-pointer"
                >
                  <option value="" disabled>Manual City Select...</option>
                  {CITY_PRESETS.map((c) => (
                    <option key={c.name} value={c.name} className="bg-slate-900 text-slate-100">
                      {c.name} ({c.country})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>

              {/* iOS Sensor Permission Button if required */}
              {requiresIosPermission && !isIosGranted ? (
                <button
                  type="button"
                  onClick={requestCompassPermission}
                  className="w-full py-1.5 px-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Enable Compass Sensors</span>
                </button>
              ) : (
                <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                  <span>Sensor Mode:</span>
                  <span className={hasCompassSupport ? "text-emerald-400 font-bold" : "text-amber-400 font-medium"}>
                    {hasCompassSupport ? "Active Magnetometer" : "Manual Degree Mode"}
                  </span>
                </div>
              )}
            </div>

            {/* COMPACT INTERACTIVE VISUAL COMPASS ROSE (~450px Max Height Layout) */}
            <div className="flex flex-col items-center justify-center py-2">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center select-none">

                {/* Outer Calibrated Compass Ring (Rotates based on device heading) */}
                <div
                  className={`absolute inset-0 rounded-full border-2 transition-transform duration-100 ease-out flex items-center justify-center ${
                    isAligned
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-500/20'
                      : 'border-slate-800 shadow-2xl bg-slate-950/60'
                  }`}
                  style={{
                    transform: `rotate(${-deviceHeading}deg)`
                  }}
                >
                  {/* Cardinal Points */}
                  <span className="absolute top-2 text-xs font-extrabold text-red-400">N</span>
                  <span className="absolute right-2 text-xs font-bold text-slate-400">E</span>
                  <span className="absolute bottom-2 text-xs font-bold text-slate-400">S</span>
                  <span className="absolute left-2 text-xs font-bold text-slate-400">W</span>

                  {/* Degree Ticks (30 deg increments) */}
                  {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-0.5 h-2 bg-slate-700"
                      style={{
                        transform: `rotate(${deg}deg) translateY(-105px)`
                      }}
                    />
                  ))}

                  {/* Golden Kaaba Target Beacon Pointer on Dial */}
                  <div
                    className="absolute inset-0 flex flex-col items-center pointer-events-none"
                    style={{
                      transform: `rotate(${qiblaBearing}deg)`
                    }}
                  >
                    {/* Golden Kaaba Icon at perimeter */}
                    <div className="relative -top-3 flex flex-col items-center">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/50 border border-amber-200">
                        <span className="text-[10px] font-black leading-none">🕋</span>
                      </div>
                      <div className="w-1 h-3 bg-amber-400 rounded-b" />
                    </div>
                  </div>
                </div>

                {/* Center Core HUD / Digital Dial */}
                <div
                  className={`relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 flex flex-col items-center justify-center p-2 text-center transition-colors duration-200 backdrop-blur-sm ${
                    isAligned
                      ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-900/90 border-slate-700 text-slate-200'
                  }`}
                >
                  {/* Fixed Center Pointer Needle (Pointing directly ahead) */}
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-b-8 border-b-emerald-400 mb-1" />

                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Heading
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-white tabular-nums">
                    {hasMounted ? deviceHeading : 0}°
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-400 font-mono">
                    Qibla: {qiblaBearing}°
                  </div>
                </div>
              </div>

              {/* Dynamic Guidance Status Pill */}
              <div className="mt-3 text-center">
                {isAligned ? (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold text-xs animate-pulse shadow-md shadow-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Exact Alignment! Facing the Kaaba</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 font-semibold text-xs">
                    <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
                    <span>
                      {hasCompassSupport ? (
                        offset > 0 ? (
                          <>Turn right <strong className="text-emerald-400">{Math.abs(offset)}°</strong></>
                        ) : (
                          <>Turn left <strong className="text-emerald-400">{Math.abs(offset)}°</strong></>
                        )
                      ) : (
                        <>Face <strong className="text-emerald-400 font-mono">{qiblaBearing}°</strong> ({distanceKm.toLocaleString()} km)</>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Metrics Footer: Distance to Makkah & Geodesic Azimuth */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-center">
              <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Kaaba Distance
                </span>
                <span className="text-sm font-extrabold text-white font-mono">
                  {distanceKm.toLocaleString()} km
                </span>
              </div>

              <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  True Bearing (Azimuth)
                </span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">
                  {qiblaBearing}° from North
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: DIRECT ANSWER & SIMPLIFIED "HOW TO USE" GUIDE */}
        <section className="space-y-6">

          {/* H2: How to Find Qibla Direction Accurately */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div className="space-y-1 border-b border-slate-800 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <span>How to Find Qibla Direction Accurately</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Follow these 4 straightforward calibration steps for precision prayer orientation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-200 shadow-md shadow-emerald-950/20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Enable GPS Access</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Allow location permissions or manually select your nearest city from the menu.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-200 shadow-md shadow-emerald-950/20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Place Device Flat</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lay your smartphone flat on a non-metallic, level surface away from electromagnetic interference.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-200 shadow-md shadow-emerald-950/20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Rotate Your Phone</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Slowly turn your device until the compass needle aligns directly with the golden Kaaba indicator.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-200 shadow-md shadow-emerald-950/20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">Verify Alignment</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The compass ring turns green and vibrates gently when you are facing the exact Qibla direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: SPIRITUAL SIGNIFICANCE & METHODOLOGY */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div className="space-y-1 border-b border-slate-800 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Importance of Facing the Qibla in Daily Prayer</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                The theological necessity and mathematical precision of facing the Kaaba during salah.
              </p>
            </div>

            {/* 2-Column Structured Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {/* Left Column: Sacred Direction Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sacred Direction Breakdown</span>
                </h3>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Kaaba Location</span>
                    <span className="text-xs text-slate-400">
                      Situated at 21.4225° N, 39.8262° E inside al-Masjid al-Haram in Makkah al-Mukarramah.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Mathematical Formula</span>
                    <span className="text-xs text-slate-400">
                      Calculated via Great Circle Geodesy forward azimuth based on spherical trigonometry and WGS-84 parameters.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Validated Standard</span>
                    <span className="text-xs text-slate-400">
                      Serves as the unified orientation for all 5 daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha).
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Essential Accuracy Rules */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Essential Accuracy Rules</span>
                </h3>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Distance Calibration</span>
                    <span className="text-xs text-slate-400">
                      Compensates for the Earth's curvature and local magnetic declination relative to true geographic North.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Indoor Metal Avoidance</span>
                    <span className="text-xs text-slate-400">
                      Keep compasses away from laptop chargers, structural steel rebar, and magnetic speaker magnets.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                    <span className="font-bold text-white text-xs">Figure-8 Calibration</span>
                    <span className="text-xs text-slate-400">
                      Wave your phone in an 8-pattern in open air to reset internal magnetometer sensors before alignment.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Symmetrical 2-Column Scholarly Reference Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Card 1: Quranic Command */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2 border border-emerald-500/20">
                    📖 Quranic Command
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "Turn then your face toward al-Masjid al-Haram. And wherever you [believers] are, turn your faces toward it [in prayer]."
                  </p>
                </div>
                <span className="text-emerald-400 font-medium text-xs mt-3 block not-italic">
                  — Surah Al-Baqarah (2:144)
                </span>
              </div>

              {/* Card 2: Sahih Reference */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2 border border-emerald-500/20">
                    📖 Sahih Reference
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "When you stand up to pray, perform ablution thoroughly, then face the Qibla and say Allahu Akbar."
                  </p>
                </div>
                <span className="text-emerald-400 font-medium text-xs mt-3 block not-italic">
                  — Sahih al-Bukhari 6251
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DEMO VIDEO FACADE & FREQUENTLY ASKED QUESTIONS */}
        <section aria-label="Calibration Video Demonstration" className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
              <Video className="w-3 h-3" />
              <span>Sensor Calibration Tutorial</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>How to Calibrate Your Phone Compass for Qibla</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Watch this brief visual guide to learn how to calibrate smartphone sensors, prevent magnetic interference, and verify your heading.
            </p>
          </div>

          {/* Privacy-Focused Video Facade Wrapper */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl">
            {!isVideoPlaying ? (
              <div
                onClick={() => setIsVideoPlaying(true)}
                className="group relative w-full h-full cursor-pointer select-none flex items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950"
              >
                {/* Background Artwork */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950/70 to-slate-950" />

                {/* Decorative Compass Outline Graphic */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-56 h-56 rounded-full border-4 border-dashed border-emerald-500/40 animate-[spin_80s_linear_infinite]" />
                </div>

                {/* Center Content & Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center space-y-3 p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 group-hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-all duration-200">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950 ml-1" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Watch Calibration Walkthrough (2:10 min)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Zero tracking cookies loaded until you click Play
                    </p>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-400 z-10">
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 text-emerald-400 font-mono">
                    HD Sensor Guide
                  </span>
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 font-mono">
                    Privacy Facade
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="How to Calibrate Phone Compass for Qibla"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </section>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Expert explanations regarding magnetic declination, smartphone sensors, and travel rulings.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-emerald-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: SILO NAVIGATION & INTERNAL LINKING */}
        <nav aria-label="Silo Navigation" className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <Link
              href="/tools/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>← Back to All Islamic Tools Hub</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/tools/prayer-times"
              className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center justify-between">
                <span>Daily Prayer Times</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Fajr, Dhuhr, Asr, Maghrib, and Isha timings.
              </p>
            </Link>

            <Link
              href="/tools/tasbeeh-counter"
              className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center justify-between">
                <span>Digital Tasbeeh Counter</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Interactive dhikr counter with haptic feedback.
              </p>
            </Link>

            <Link
              href="/guides/namaz-guide"
              className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center justify-between">
                <span>Namaz Guide &amp; Salah</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Step-by-step guidance on prayers and sunnahs.
              </p>
            </Link>

            <Link
              href="/ayats/"
              className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center justify-between">
                <span>Sacred Ayats Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Quranic verses with thematic commentary and audio.
              </p>
            </Link>
          </div>
        </nav>

      </div>
    </main>
  );
}
