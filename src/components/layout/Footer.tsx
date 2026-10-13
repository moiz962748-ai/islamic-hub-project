import Link from 'next/link';
import { Moon, Mail, MapPin } from 'lucide-react';

const footerColumns = [
  {
    title: "ZAKAT & WEALTH",
    links: [
      { label: "Today's Nisab Rates", href: "/zakat/nisab-threshold/" },
      { label: "Real Estate Zakat", href: "/zakat/real-estate/" },
      { label: "Crypto & Stocks Zakat", href: "/zakat/crypto/" },
      { label: "UK & USA Zakat Guides", href: "/zakat/uk/" },
    ]
  },
  {
    title: "RAMADAN & FASTING",
    links: [
      { label: "Travelers Fasting Rules", href: "/ramadan/travelers-fasting/" },
      { label: "Fidya & Kaffarah", href: "/zakat/fidya-kaffarah/" },
      { label: "Laylatul Qadr Worship", href: "/ramadan/laylatul-qadr/" },
      { label: "London & NY Timings", href: "/ramadan/uk/london/" },
    ]
  },
  {
    title: "GLOBAL PRAYER TIMES",
    links: [
      { label: "London Prayer Times", href: "/prayer-times/uk/london/" },
      { label: "New York Prayer Times", href: "/prayer-times/us/new-york/" },
      { label: "Dubai Prayer Times", href: "/prayer-times/ae/dubai/" },
      { label: "Qibla Direction Compass", href: "/prayer-times/qibla/" },
    ]
  },
  {
    title: "DUAS & RUQYAH",
    links: [
      { label: "Dua for Anxiety & Stress", href: "/resources/duas/anxiety-stress/" },
      { label: "Sayyidul Istighfar", href: "/resources/duas/sayyidul-istighfar/" },
      { label: "Ruqyah for Evil Eye", href: "/resources/duas/ruqyah-evil-eye/" },
      { label: "Morning & Night Adhkar", href: "/resources/duas/morning-adhkar/" },
    ]
  },
  {
    title: "PLATFORM & TRUST",
    links: [
      { label: "About IslamHub", href: "/about/" },
      { label: "Shariah Methodology", href: "/shariah-board/" },
      { label: "Contact Us", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy/" },
    ]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-400 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6 lg:pt-1">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-white text-black p-2 rounded-xl shadow-sm">
                <Moon className="w-6 h-6 text-black font-bold" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-neutral-50">
                Islam<span className="text-white font-extrabold">Hub</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Your comprehensive platform for accurate prayer times, reliable Zakat calculation, and authentic Islamic knowledge. Built for the modern Muslim ummah.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <MapPin className="w-4 h-4 text-white" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Mail className="w-4 h-4 text-white" />
                <span>contact@islamhub.example.com</span>
              </div>
            </div>
          </div>
          
          {/* 5 Column Link Grids */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 gap-y-12">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-5 min-w-0">
                <h3 className="text-neutral-50 font-semibold text-xs tracking-wider uppercase font-mono">
                  {column.title}
                </h3>
                <ul className="space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-neutral-400 hover:text-white text-sm transition-colors block truncate"
                        title={link.label}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} IslamHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-neutral-500">
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies/" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
