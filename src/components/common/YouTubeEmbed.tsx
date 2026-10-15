'use client';

import React, { useState } from 'react';
import { Play, Video } from 'lucide-react';

export interface YouTubeEmbedProps {
  videoId?: string;
  title: string;
  description: string;
  uploadDate?: string;
  duration?: string;
  badgeText?: string;
  thumbnailUrl?: string[];
  className?: string;
  includeSchema?: boolean;
}

export default function YouTubeEmbed({
  videoId = 'dQw4w9WgXcQ',
  title,
  description,
  uploadDate = '2026-10-15T08:00:00+05:00',
  duration = 'PT10M30S',
  badgeText = 'Video Guide',
  thumbnailUrl,
  className = '',
  includeSchema = true,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanVideoId = videoId || 'dQw4w9WgXcQ';

  const defaultThumbnails = [
    `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`,
  ];

  const thumbnails = thumbnailUrl && thumbnailUrl.length > 0 ? thumbnailUrl : defaultThumbnails;

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': title,
    'description': description,
    'thumbnailUrl': thumbnails,
    'uploadDate': uploadDate,
    'duration': duration,
    'contentUrl': `https://www.youtube.com/watch?v=${cleanVideoId}`,
    'embedUrl': `https://www.youtube.com/embed/${cleanVideoId}`,
    'publisher': {
      '@type': 'Organization',
      'name': 'IslamHub',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://islamhub.com/logo.png',
      },
    },
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      <section
        aria-label={title}
        className={`bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl transition-all ${className}`}
      >
        <div className="space-y-1.5 border-b border-slate-800 pb-3.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-white text-[11px] font-semibold font-mono">
            <Video className="w-3 h-3 text-neutral-300" />
            <span>{badgeText}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Video Player Facade / YouTube Iframe */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
          {!isPlaying ? (
            <div
              role="button"
              tabIndex={0}
              onClick={() => setIsPlaying(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
              className="group relative w-full h-full cursor-pointer select-none flex items-center justify-center bg-slate-950 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Play video: ${title}`}
            >
              {/* Background Thumbnail Image with Fallback */}
              <img
                src={thumbnails[0]}
                alt={title}
                onError={(e) => {
                  // Fallback to HQ thumbnail if maxresdefault is unavailable
                  if (thumbnails[1] && e.currentTarget.src !== thumbnails[1]) {
                    e.currentTarget.src = thumbnails[1];
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 pointer-events-none" />

              {/* Pulsing Play Button */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-3 p-4 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black group-hover:bg-neutral-100 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-black text-black ml-1" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block text-sm sm:text-base font-bold text-white group-hover:text-neutral-200 transition-colors drop-shadow-md">
                    Watch Video Guide
                  </span>
                  <p className="text-[11px] text-slate-300 drop-shadow">
                    Zero cookies loaded until you click Play
                  </p>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] z-10 pointer-events-none">
                <span className="bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700/80 text-white font-mono font-medium shadow-sm">
                  HD Walkthrough
                </span>
                <span className="bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700/80 text-slate-300 font-mono shadow-sm">
                  YouTube Player
                </span>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full border-0 absolute inset-0"
              src={`https://www.youtube-nocookie.com/embed/${cleanVideoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </section>
    </>
  );
}
