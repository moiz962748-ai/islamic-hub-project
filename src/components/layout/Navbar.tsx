'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Moon } from 'lucide-react';

type DropdownItem = {
  label: string;
  href: string;
  featured?: boolean;
};

type DropdownColumn = {
  title: string;
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
        title: "Name Directories",
        links: [
          { label: "All Islamic Baby Names", href: "/tools/islamic-baby-names/", featured: true },
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
    <nav className="bg-black/95 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white text-black p-2 rounded-xl group-hover:bg-neutral-200 transition-all shadow-sm">
                <Moon className="w-5 h-5 text-black font-bold" />
              </div>
              <span className="font-bold text-xl tracking-tight text-neutral-50">
                Islam<span className="text-white font-extrabold">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1.5 xl:space-x-2">
            {navMenus.map((menu) => {
              const isSectionActive = isMenuSectionActive(menu.title, menu.href);

              return (
                <div key={menu.title} className="relative group">
                  {menu.href ? (
                    <Link
                      href={menu.href}
                      aria-current={isSectionActive ? 'page' : undefined}
                      className={`flex items-center gap-1 px-2.5 lg:px-3 py-2 text-xs lg:text-sm transition-colors duration-150 rounded-md focus:outline-none whitespace-nowrap ${
                        isSectionActive
                          ? 'text-white bg-neutral-900 font-semibold border border-neutral-800'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80 font-medium'
                      }`}
                    >
                      {menu.title}
                      {menu.columns.length > 0 && (
                        <ChevronDown className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:-rotate-180 ${
                          isSectionActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`} />
                      )}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-current={isSectionActive ? 'page' : undefined}
                      className={`flex items-center gap-1 px-2.5 lg:px-3 py-2 text-xs lg:text-sm transition-colors duration-150 rounded-md focus:outline-none whitespace-nowrap ${
                        isSectionActive
                          ? 'text-white bg-neutral-900 font-semibold border border-neutral-800'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80 font-medium'
                      }`}
                    >
                      {menu.title}
                      {menu.columns.length > 0 && (
                        <ChevronDown className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:-rotate-180 ${
                          isSectionActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`} />
                      )}
                    </button>
                  )}
                  
                  {/* Dropdown Mega Menu */}
                  {menu.columns.length > 0 && (
                    <div className={`absolute top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 ${menu.align === 'right' ? 'right-0' : 'left-0'}`}>
                      <div 
                        className={`grid gap-5 p-5 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 backdrop-blur-lg ${
                          menu.columns.length === 1
                            ? 'grid-cols-1 min-w-[280px]'
                            : menu.columns.length === 4
                              ? 'grid-cols-2 lg:grid-cols-4 min-w-[780px] lg:min-w-[880px]'
                              : menu.columns.length === 3
                                ? 'grid-cols-3 min-w-[750px]'
                                : 'grid-cols-2 min-w-[550px]'
                        }`}
                      >
                        {menu.columns.map(column => (
                          <div key={column.title}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100 mb-3 flex items-center gap-1 font-mono">
                              {column.title}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {column.links.map((link) => {
                                const isLinkActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                                return (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                                      isLinkActive
                                        ? 'text-white font-semibold bg-neutral-800 border-l-2 border-white pl-2.5'
                                        : link.featured 
                                          ? 'text-neutral-100 font-medium bg-neutral-850 hover:bg-neutral-800 border border-neutral-700/60' 
                                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
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
                          <div className="col-span-full border-t border-neutral-800 pt-3 mt-2 flex items-center justify-between text-xs">
                            <span className="text-neutral-400 font-medium">Looking for complete prayer &amp; worship instructions?</span>
                            <Link href="/guides" className="text-white hover:text-neutral-200 font-medium transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-white rounded px-1.5 py-0.5">
                              <span>➔ View All Ibadat Guides Directory</span>
                            </Link>
                          </div>
                        )}
                        {menu.title === "Zakat" && (
                          <div className="col-span-3 mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Looking for complete Zakat management?</span>
                            <Link href="/zakat/" className="text-white hover:text-neutral-200 font-medium transition-colors">
                              Explore Master Hub &rarr;
                            </Link>
                          </div>
                        )}
                        {menu.title === "Daily Duas" && (
                          <div className="col-span-2 mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Looking for complete supplications directory?</span>
                            <Link href="/duas/" className="text-white hover:text-neutral-200 font-medium transition-colors">
                              Explore Daily Duas Hub &rarr;
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/zakat-calculator/"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-black font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
            >
              Calculate Zakat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'max-h-screen border-t border-neutral-800' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-6 space-y-1 bg-black shadow-2xl">
          {navMenus.map((menu) => {
            const isSectionActive = isMenuSectionActive(menu.title, menu.href);

            return (
              <div key={menu.title} className="space-y-1">
                {menu.href ? (
                  <div className="flex w-full">
                    <Link
                      href={menu.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex-1 flex items-center px-3 py-3 text-base rounded-l-md transition-colors ${
                        isSectionActive
                          ? 'text-white bg-neutral-900 font-bold border-l-2 border-white'
                          : 'text-neutral-200 font-medium hover:bg-neutral-900'
                      }`}
                    >
                      {menu.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(menu.title)}
                      className={`flex items-center justify-center px-4 py-3 rounded-r-md transition-colors ${
                        isSectionActive ? 'bg-neutral-900 text-white' : 'text-neutral-200 hover:bg-neutral-900'
                      }`}
                    >
                      <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${openMobileDropdown === menu.title ? '-rotate-180' : ''}`} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(menu.title)}
                    className={`w-full flex items-center justify-between px-3 py-3 text-base rounded-md transition-colors ${
                      isSectionActive
                        ? 'text-white bg-neutral-900 font-bold border-l-2 border-white'
                        : 'text-neutral-200 font-medium hover:bg-neutral-900'
                    }`}
                  >
                    {menu.title}
                    <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${openMobileDropdown === menu.title ? '-rotate-180' : ''}`} />
                  </button>
                )}
                
                <div className={`space-y-4 pl-4 pr-3 transition-all duration-200 ${openMobileDropdown === menu.title ? 'block pb-3 pt-1' : 'hidden'}`}>
                  {menu.columns.map((column, idx) => (
                    <div key={column.title} className={idx > 0 ? 'pt-3 border-t border-neutral-800' : ''}>
                      <h4 className="text-xs font-semibold text-neutral-100 uppercase tracking-wider mb-2 font-mono">
                        {column.title}
                      </h4>
                      <div className="space-y-1">
                        {column.links.map((link) => {
                          const isLinkActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                          return (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
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
                        className="block px-3 py-2.5 rounded-md text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
                      >
                        ➔ View All Ibadat Guides Directory
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          <div className="pt-4 px-3">
            <Link
              href="/zakat-calculator/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-full text-black bg-white hover:bg-neutral-200 transition-all"
            >
              Calculate Zakat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
