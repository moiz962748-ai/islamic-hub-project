'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Moon, 
  Calculator, 
  ArrowRight
} from 'lucide-react';

type DropdownItem = {
  label: string;
  href: string;
  featured?: boolean;
};

type DropdownColumn = {
  title?: string;
  href?: string;
  links: DropdownItem[];
};

type DropdownMenu = {
  title: string;
  href?: string;
  align?: 'left' | 'right';
  columns: DropdownColumn[];
};

const navMenus: DropdownMenu[] = [
  {
    title: "Home",
    href: "/",
    align: "left",
    columns: []
  },
  {
    title: "Zakat",
    href: "/zakat/",
    align: "left",
    columns: [
      {
        title: "Calculators & Tools",
        links: [
          { label: "Universal Calculator", href: "/zakat-calculator/", featured: true },
          { label: "Gold & Silver Tool", href: "/zakat/gold-silver/" },
          { label: "Stocks & Wealth Tool", href: "/zakat/stocks-investments/" },
          { label: "Crypto Zakat Tool", href: "/zakat/crypto/" },
          { label: "Business Zakat Tool", href: "/zakat/business/" },
          { label: "Fitrana Tool", href: "/zakat/fitrana/" },
        ]
      },
      {
        title: "Core Guidance",
        links: [
          { label: "Live Nisab Rates Today", href: "/zakat/nisab-threshold/" },
          { label: "Rules & Eligibility Criteria", href: "/zakat/rules-eligibility/" },
        ]
      },
      {
        title: "Knowledge Base",
        links: [
          { label: "Browse All Zakat Guides", href: "/zakat/guides/" },
          { label: "401(k) & Retirement Fiqh", href: "/zakat/guides/zakat-on-401k-ira-retirement/" },
          { label: "Crypto Staking & DeFi Rules", href: "/zakat/guides/crypto-staking-and-defi-zakat/" },
          { label: "Gold Karat Conversion Guide", href: "/zakat/guides/gold-jewelry-hanafi-vs-shafii/" },
        ]
      }
    ]
  },
  {
    title: "Ramadan & Eid",
    align: "left",
    columns: [
      {
        title: "Timings & Rules",
        links: [
          { label: "Fasting Rules & Guidelines", href: "/ramadan/rules/" },
          { label: "Suhoor & Iftar Timings", href: "/ramadan/timings/" },
        ]
      },
      {
        title: "Seasonal Guides",
        links: [
          { label: "Ramadan 2026 Overview", href: "/ramadan" },
          { label: "Eid Al-Fitr Guide", href: "/eid/fitr/" },
          { label: "Eid Al-Adha & Qurbani", href: "/eid/eid-al-adha/" },
        ]
      }
    ]
  },
  {
    title: "Daily Duas",
    href: "/duas/",
    align: "left",
    columns: [
      {
        title: "Most Searched Duas",
        links: [
          { label: "Dua e Qunoot", href: "/resources/duas/namaz/dua-e-qunoot/" },
          { label: "Safar Ki Dua", href: "/resources/duas/daily-life/safar-ki-dua/" },
          { label: "Dua e Istikhara", href: "/resources/duas/namaz/dua-e-istikhara/" },
          { label: "Nazar Ki Dua", href: "/resources/duas/protection/nazar-ki-dua/" },
          { label: "Roza Rakhne / Kholne Ki Dua", href: "/resources/duas/ramadan/roza-dua/" },
        ]
      },
      {
        title: "Dua Hubs",
        links: [
          { label: "All Duas Directory Hub", href: "/duas/", featured: true },
          { label: "Morning & Evening Azkar", href: "/resources/duas/azkar/" },
          { label: "Protection Duas", href: "/resources/duas/protection/" },
        ]
      }
    ]
  },
  {
    title: "Sacred Ayats",
    href: "/ayats/",
    align: "right",
    columns: [
      {
        title: "Essential Ayats",
        links: [
          { label: "Ayat al-Kursi", href: "/ayats/ayat-al-kursi" },
          { label: "Last 2 Ayats of Surah Baqarah", href: "/ayats/surah-baqarah-last-2-ayats" },
          { label: "Ayat Karima (Prophet Yunus)", href: "/ayats/ayat-karima" },
        ]
      },
      {
        title: "Protection & Healing",
        links: [
          { label: "All Sacred Ayats Hub", href: "/ayats/", featured: true },
          { label: "Ayat ash-Shifa (Healing)", href: "/ayats/ayat-ash-shifa" },
          { label: "Ayat al-Mulk (Dominion)", href: "/ayats/ayat-al-mulk" },
          { label: "Ayat of Rizq & Way Out", href: "/ayats/ayat-at-talaq-rizq" },
        ]
      }
    ]
  },
  {
    title: "Islamic Baby Names",
    href: "/tools/islamic-baby-names/",
    align: "right",
    columns: [
      {
        links: [
          { label: "Islamic Baby Boy Names", href: "/tools/islamic-baby-names/boys/" },
          { label: "Islamic Baby Girl Names", href: "/tools/islamic-baby-names/girls/" },
        ]
      }
    ]
  },
  {
    title: "Islamic Tools",
    href: "/tools/",
    align: "right",
    columns: [
      {
        title: "Interactive Tools",
        links: [
          { label: "All Islamic Tools Hub", href: "/tools/", featured: true },
          { label: "Digital Tasbeeh Counter", href: "/tools/tasbeeh-counter/" },
          { label: "Online Qibla Finder", href: "/tools/qibla-finder/" },
          { label: "Islamic Calendar 2026", href: "/tools/islamic-calendar-2026/" },
        ]
      }
    ]
  },
  {
    title: "Ibadat",
    href: "/guides",
    align: "right",
    columns: [
      {
        title: "🕌 Daily & Sunnah Salah",
        links: [
          { label: "Step-by-Step Namaz Guide", href: "/guides/namaz" },
          { label: "How to Pray Tahajjud", href: "/guides/tahajjud" },
          { label: "Salat ul Tasbeeh Guide", href: "/guides/tasbeeh" },
          { label: "Nafl Prayers (Ishraq, Duha)", href: "/guides/nafl" },
        ]
      },
      {
        title: "🕋 Sacred Pilgrimages",
        links: [
          { label: "Step-by-Step Umrah Guide", href: "/guides/umrah" },
          { label: "Step-by-Step Hajj Guide", href: "/guides/hajj" },
        ]
      },
      {
        title: "📿 Dhikr, Names & Pillars",
        links: [
          { label: "99 Names of Allah", href: "/guides/99-names" },
          { label: "5 Pillars of Islam Overview", href: "/guides/5-pillars" },
          { label: "Tasbeeh Fatima & Daily Adhkar", href: "/guides/tasbih-fatima-adhkar" },
        ]
      },
      {
        title: "🤲 Funeral & Special Prayers",
        links: [
          { label: "Namaz-e-Janazah Guide", href: "/guides/namaz-janaza" },
          { label: "Eid & Eclipse Prayer Guides", href: "/guides/eid-prayer" },
        ]
      }
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  const isMenuSectionActive = (title: string, href?: string) => {
    if (title === "Home") return pathname === "/";
    if (title === "Zakat") return pathname.startsWith("/zakat");
    if (title === "Ramadan & Eid") return pathname.startsWith("/ramadan") || pathname.startsWith("/eid");
    if (title === "Daily Duas") return pathname.startsWith("/duas") || pathname.startsWith("/resources/duas");
    if (title === "Sacred Ayats") return pathname.startsWith("/ayats");
    if (title === "Islamic Baby Names") return pathname.startsWith("/tools/islamic-baby-names") || pathname.startsWith("/baby-names");
    if (title === "Islamic Tools") return pathname.startsWith("/tools") && !pathname.startsWith("/tools/islamic-baby-names");
    if (title === "Ibadat") return pathname.startsWith("/guides");
    if (href && href !== "/") return pathname === href || pathname.startsWith(href);
    return false;
  };

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px] sm:h-[72px]">
            
            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-white text-black p-2 rounded-xl group-hover:bg-neutral-200 transition-all shadow-sm">
                  <Moon className="w-5 h-5 text-black font-bold" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Islam<span className="text-white font-extrabold">Hub</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation (>= 1280px xl breakpoint for 8 items) */}
            <div className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5">
              {navMenus.map((menu) => {
                const isSectionActive = isMenuSectionActive(menu.title, menu.href);

                return (
                  <div key={menu.title} className="relative group">
                    {menu.href ? (
                      <Link
                        href={menu.href}
                        aria-current={isSectionActive ? 'page' : undefined}
                        className={`flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm transition-all duration-150 rounded-lg focus:outline-none whitespace-nowrap shrink-0 ${
                          isSectionActive
                            ? 'text-white bg-neutral-900 font-semibold border border-neutral-700/80 shadow-sm'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80 font-medium'
                        }`}
                      >
                        {menu.title}
                        {menu.columns.length > 0 && (
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:-rotate-180 ${
                            isSectionActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                          }`} />
                        )}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        aria-current={isSectionActive ? 'page' : undefined}
                        className={`flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm transition-all duration-150 rounded-lg focus:outline-none whitespace-nowrap shrink-0 ${
                          isSectionActive
                            ? 'text-white bg-neutral-900 font-semibold border border-neutral-700/80 shadow-sm'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80 font-medium'
                        }`}
                      >
                        {menu.title}
                        {menu.columns.length > 0 && (
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:-rotate-180 ${
                            isSectionActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                          }`} />
                        )}
                      </button>
                    )}
                    
                    {/* Dropdown Mega Menu */}
                    {menu.columns.length > 0 && (
                      <div className={`absolute top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50 ${menu.align === 'right' ? 'right-0' : 'left-0'}`}>
                        <div 
                          className={`grid gap-5 p-5 bg-neutral-900/98 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-neutral-800 backdrop-blur-xl ${
                            menu.columns.length === 1
                              ? 'grid-cols-1 min-w-[280px]'
                              : menu.columns.length === 4
                                ? 'grid-cols-2 lg:grid-cols-4 min-w-[780px] lg:min-w-[880px]'
                                : menu.columns.length === 3
                                  ? 'grid-cols-3 min-w-[750px]'
                                  : 'grid-cols-2 min-w-[550px]'
                          }`}
                        >
                          {menu.columns.map((column, colIdx) => (
                            <div key={column.title || colIdx}>
                              {column.title && (
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-1.5 font-mono">
                                  <span>{column.title}</span>
                                </h4>
                              )}
                              <div className="flex flex-col gap-1">
                                {column.links.map((link) => {
                                  const isLinkActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                                  return (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                                        isLinkActive
                                          ? 'text-white font-semibold bg-neutral-800 border-l-2 border-white pl-2.5'
                                          : link.featured 
                                            ? 'text-white font-medium bg-neutral-850 hover:bg-neutral-800 border border-neutral-700/60' 
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800/70'
                                      }`}
                                    >
                                      {link.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                          
                          {/* Footers for specific dropdowns */}
                          {(menu.title === "Ibadat" || menu.title === "Worship Guides") && (
                            <div className="col-span-full border-t border-neutral-800 pt-3 mt-2 flex items-center justify-between text-xs">
                              <span className="text-neutral-400 font-medium">Looking for complete prayer &amp; worship instructions?</span>
                              <Link href="/guides" className="text-white hover:text-neutral-200 font-semibold transition-colors flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700">
                                <span>View All Ibadat Guides Directory</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                          {menu.title === "Zakat" && (
                            <div className="col-span-3 mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                              <span className="text-neutral-400">Need comprehensive Zakat calculation &amp; fiqh rules?</span>
                              <Link href="/zakat/" className="text-white hover:text-neutral-200 font-semibold transition-colors flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700">
                                <span>Explore Master Zakat Hub</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                          {menu.title === "Daily Duas" && (
                            <div className="col-span-2 mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                              <span className="text-neutral-400">Looking for complete supplications directory?</span>
                              <Link href="/duas/" className="text-white hover:text-neutral-200 font-semibold transition-colors flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700">
                                <span>Explore Daily Duas Hub</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA Button (Calculate Zakat) - Perfectly sized, never wrapping */}
            <div className="hidden xl:flex items-center ml-2 2xl:ml-4 shrink-0">
              <Link 
                href="/zakat-calculator/"
                className="group inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-black font-semibold text-xs 2xl:text-sm px-4 2xl:px-5 py-2.5 rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:rotate-12 transition-transform duration-200 shrink-0">
                  <Calculator className="w-3 h-3" />
                </div>
                <span>Calculate Zakat</span>
              </Link>
            </div>

            {/* Mobile menu button (< xl) */}
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6 text-white" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-y-auto ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-120px)] border-t border-neutral-800 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden border-t-0'
          }`}
        >
          <div className="px-3 pt-3 pb-8 space-y-1 bg-black shadow-2xl">
            {navMenus.map((menu) => {
              const isSectionActive = isMenuSectionActive(menu.title, menu.href);
              const isOpen = openMobileDropdown === menu.title;

              return (
                <div key={menu.title} className="space-y-1">
                  {menu.href ? (
                    <div className={`flex w-full rounded-xl transition-colors ${
                      isSectionActive
                        ? 'bg-neutral-900 border border-neutral-800'
                        : 'hover:bg-neutral-900/60'
                    }`}>
                      <Link
                        href={menu.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex-1 flex items-center px-4 py-3 text-base rounded-l-xl transition-colors ${
                          isSectionActive
                            ? 'text-white font-bold'
                            : 'text-neutral-200 font-medium hover:text-white'
                        }`}
                      >
                        {menu.title}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(menu.title)}
                        className={`flex items-center justify-center px-4 py-3 rounded-r-xl transition-colors ${
                          isSectionActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                        }`}
                        aria-label={`Toggle ${menu.title} sub-menu`}
                        aria-expanded={isOpen}
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '-rotate-180 text-white' : 'text-neutral-400'}`} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(menu.title)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                        isSectionActive
                          ? 'text-white bg-neutral-900 font-bold border border-neutral-800'
                          : 'text-neutral-200 font-medium hover:bg-neutral-900/60 hover:text-white'
                      }`}
                      aria-label={`Toggle ${menu.title} sub-menu`}
                      aria-expanded={isOpen}
                    >
                      <span>{menu.title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '-rotate-180 text-white' : 'text-neutral-400'}`} />
                    </button>
                  )}
                  
                  {/* Submenu Accordion */}
                  {menu.columns.length > 0 && (
                    <div className={`space-y-4 pl-4 pr-3 transition-all duration-200 ${isOpen ? 'block pb-3 pt-1' : 'hidden'}`}>
                      {menu.columns.map((column, idx) => (
                        <div key={column.title || idx} className={idx > 0 && column.title ? 'pt-3 border-t border-neutral-850' : ''}>
                          {column.title && (
                            <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2 font-mono">
                              {column.title}
                            </h4>
                          )}
                          <div className="space-y-1">
                            {column.links.map((link) => {
                              const isLinkActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                              return (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                    isLinkActive
                                      ? 'text-white font-bold bg-neutral-850 border-l-2 border-white pl-2.5'
                                      : link.featured 
                                        ? 'text-white font-medium bg-neutral-850 border border-neutral-700/60' 
                                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      {(menu.title === "Ibadat" || menu.title === "Worship Guides") && (
                        <div className="pt-2 border-t border-neutral-800 mt-2">
                          <Link
                            href="/guides"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-850 transition-colors"
                          >
                            ➔ View All Ibadat Guides Directory
                          </Link>
                        </div>
                      )}
                      {menu.title === "Zakat" && (
                        <div className="pt-2 border-t border-neutral-800 mt-2">
                          <Link
                            href="/zakat/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-850 transition-colors"
                          >
                            ➔ Explore Master Zakat Hub
                          </Link>
                        </div>
                      )}
                      {menu.title === "Daily Duas" && (
                        <div className="pt-2 border-t border-neutral-800 mt-2">
                          <Link
                            href="/duas/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-850 transition-colors"
                          >
                            ➔ Explore Daily Duas Hub
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Bottom Full-width CTA Button */}
            <div className="pt-5 px-1 pb-2">
              <Link
                href="/zakat-calculator/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-5 py-3.5 text-base font-semibold rounded-full text-black bg-white hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98]"
              >
                Calculate Zakat
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
