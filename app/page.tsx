import React from 'react';
import type { Metadata } from 'next';
import HomePage from '@/src/views/HomePage';

export const metadata: Metadata = {
  title: 'IslamHub — Daily Prayer Times, Zakat Tools, Duas & Ibadat Guides',
  description:
    'Comprehensive Islamic platform providing accurate worldwide prayer times, universal Zakat calculators, authentic audio Duas, and verified worship guides.',
  alternates: {
    canonical: 'https://islamhub.example.com/',
  },
};

export default function Page() {
  return <HomePage />;
}
