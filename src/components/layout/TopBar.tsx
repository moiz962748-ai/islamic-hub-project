import Link from 'next/link';
import { MapPin, Clock, BookOpen, Moon, Compass, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-neutral-950/90 border-b border-neutral-850 py-1.5 sm:py-2 text-xs font-medium text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
        
        {/* Location Indicator */}
        <div className="flex items-center gap-1.5 text-neutral-300 shrink-0 text-[11px] sm:text-xs">
          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="truncate">
            Detect Location: <span className="text-white font-medium">London, UK</span>
          </span>
        </div>
        
        {/* Quick Utility Links - Horizontally scrollable on small mobile screens without breaking */}
        <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto max-w-full no-scrollbar py-0.5 px-1 -mx-1 text-[11px] sm:text-xs">
          <Link 
            href="/prayer-times/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors shrink-0 whitespace-nowrap"
          >
            <Clock className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
            <span>Prayer Times</span>
          </Link>
          
          <Link 
            href="/tools/qibla-finder/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors shrink-0 whitespace-nowrap"
          >
            <Compass className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
            <span>Qibla Finder</span>
          </Link>
          
          <Link 
            href="/duas/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors shrink-0 whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
            <span>Duas Hub</span>
          </Link>

          <Link 
            href="/tools/islamic-baby-names/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors shrink-0 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
            <span>Baby Names</span>
          </Link>
          
          <Link 
            href="/ramadan" 
            className="group flex items-center gap-1.5 text-amber-200 hover:text-amber-100 font-medium transition-colors shrink-0 whitespace-nowrap bg-neutral-900/90 hover:bg-neutral-850 px-2.5 py-0.5 rounded-full border border-neutral-800"
          >
            <Moon className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform shrink-0" />
            <span>Ramadan 2026</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

