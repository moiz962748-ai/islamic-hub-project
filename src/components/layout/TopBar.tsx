import Link from 'next/link';
import { MapPin, Clock, BookOpen, Moon, Compass, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-black border-b border-neutral-800 py-2 text-xs font-medium text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 text-neutral-300">
          <MapPin className="w-3.5 h-3.5 text-white" />
          <span>Detect Location: London, UK</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/prayer-times/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <Clock className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
            <span>Prayer Times</span>
          </Link>
          
          <Link 
            href="/tools/qibla-finder/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
            <span>Qibla Finder</span>
          </Link>
          
          <Link 
            href="/duas/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
            <span>🤲 All Duas</span>
          </Link>

          <Link 
            href="/tools/islamic-baby-names/" 
            className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
            <span>Baby Names</span>
          </Link>
          
          <Link 
            href="/ramadan" 
            className="group flex items-center gap-1.5 text-white hover:text-neutral-200 font-medium transition-colors"
          >
            <Moon className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
            <span>Ramadan 2026</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
