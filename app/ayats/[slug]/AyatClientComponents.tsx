'use client';

import React from 'react';
import { Printer, Download, Copy, Play } from 'lucide-react';

export function AyatQuickActions({ titleArabic }: { titleArabic: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Print Ayat Button */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.print();
          }
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
        title="Print Sacred Ayat"
      >
        <Printer className="w-3.5 h-3.5 text-sky-400" />
        <span>Print Ayat</span>
      </button>

      {/* Download PDF Card Button */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.print();
          }
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
        title="Save or Print as PDF Document"
      >
        <Download className="w-3.5 h-3.5 text-sky-400" />
        <span>Download PDF</span>
      </button>

      {/* Copy Arabic Text Button */}
      <button
        type="button"
        onClick={() => {
          if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(titleArabic);
            alert('Arabic Quranic text successfully copied to clipboard!');
          }
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors shadow-sm"
        title="Copy the pure Arabic text"
      >
        <Copy className="w-3.5 h-3.5 text-emerald-400" />
        <span>Copy Arabic</span>
      </button>
    </div>
  );
}

export function AyatVideoFacade({ titleEnglish }: { titleEnglish: string }) {
  return (
    <div 
      className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-950 group cursor-pointer shadow-xl"
      onClick={() => {
        if (typeof window !== 'undefined') {
          alert(`Streaming Tajweed tutorial for: ${titleEnglish}. Master Qari will guide pronunciation phrase-by-phrase.`);
        }
      }}
      title="Click to play video tutorial with Tajweed"
    >
      <img
        src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80"
        alt={`Tajweed video guide illustrating ${titleEnglish}`}
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      {/* Play Icon Badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/90 group-hover:bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-950/80 transition-transform group-hover:scale-110">
          <Play className="w-7 h-7 text-slate-950 fill-slate-950 ml-1" />
        </div>
      </div>

      {/* Video Metadata Overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
        <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-xs">{titleEnglish} Tajweed Recitation</span>
        <span className="text-emerald-400 font-mono">5:30 • Full HD</span>
      </div>
    </div>
  );
}
