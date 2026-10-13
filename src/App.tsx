/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import NavigationLayout from './components/layout/NavigationLayout';
import HomePage from './views/HomePage';
import ZakatHubPage from '../app/zakat/page';
import ZakatCalculatorPage from '../app/zakat-calculator/page';
import GoldSilverCalculatorPage from '../app/zakat/gold-silver/page';
import StocksInvestmentsCalculatorPage from '../app/zakat/stocks-investments/page';
import BusinessZakatCalculatorPage from '../app/zakat/business/page';
import CryptoZakatCalculatorPage from '../app/zakat/crypto/page';
import NisabThresholdRulesPage from '../app/zakat/nisab-threshold/page';
import RulesEligibilityPage from '../app/zakat/rules-eligibility/page';
import FitranaPage from '../app/zakat/fitrana/page';
import ZakatGuidesPage from '../app/zakat/guides/page';
import GuideArticlePage from '../app/zakat/guides/[slug]/page';
import { useState, useEffect } from 'react';

import RamadanHubPage from '../app/ramadan/page';
import RamadanTimingsPage from '../app/ramadan/timings/page';
import FastingRulesPage from '../app/ramadan/rules/page';
import EidAlFitrPage from '../app/eid/fitr/page';

import EidAlAdhaPage from '../app/eid/adha-qurbani/page';
import NullifiersPage from '../app/ramadan/rules/nullifiers/page';
import RamadanOverviewPage from '../app/ramadan/overview/page';
import EidPrayerGuidePage from '../app/eid/fitr/prayer-guide/page';
import QurbaniSlaughterGuidelinesPage from '../app/eid/adha-qurbani/slaughter-guidelines/page';
import CityTimingsPage from '../app/ramadan/timings/[country]/[city]/page';
import DuasHubPage from '../app/duas/page';
import SingleDuaPage from '../app/duas/[slug]/page';
import AyatsHubPage from '../app/ayats/page';
import SingleAyatPage from '../app/ayats/[slug]/page';
import ToolsHubPage from '../app/tools/page';
import TasbeehCounterPage from '../app/tools/tasbeeh-counter/page';
import QiblaFinderPage from '../app/tools/qibla-finder/page';
import IslamicCalendarPage from '../app/tools/islamic-calendar-2026/page';
import IslamicBabyNamesPage from '../app/tools/islamic-baby-names/page';
import IslamicBabyBoyNamesPage from '../app/tools/islamic-baby-names/boys/page';
import IslamicBabyGirlNamesPage from '../app/tools/islamic-baby-names/girls/page';
import WorshipGuidesPage from '../app/guides/page';
import GuideDynamicPage from '../app/guides/[slug]/page';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };
    
    // Intercept clicks on links to enable client-side routing
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('target')) {
        e.preventDefault();
        const url = new URL(anchor.href);
        const fullPath = url.pathname + url.search;
        window.history.pushState({}, '', fullPath);
        setCurrentPath(fullPath);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Extract pure pathname and search params
  const pathname = currentPath.split('?')[0];
  const searchString = currentPath.includes('?') 
    ? currentPath.slice(currentPath.indexOf('?') + 1) 
    : (typeof window !== 'undefined' ? window.location.search.replace(/^\?/, '') : '');
  const searchParamsObj = Object.fromEntries(new URLSearchParams(searchString).entries());

  // Simple router logic
  let PageComponent = <HomePage />;
  
  const timingsMatch = 
    pathname.match(/^\/ramadan\/timings\/([^/]+)\/([^/]+)\/?$/) ||
    (!pathname.startsWith('/prayer-times/qibla') ? pathname.match(/^\/prayer-times\/([^/]+)\/([^/]+)\/?$/) : null);

  if (pathname === '/zakat' || pathname === '/zakat/') {
    PageComponent = <ZakatHubPage />;
  } else if (pathname === '/ramadan' || pathname === '/ramadan/') {
    PageComponent = <RamadanHubPage />;
  } else if (pathname === '/ramadan/overview' || pathname === '/ramadan/overview/') {
    PageComponent = <RamadanOverviewPage />;
  } else if (
    pathname === '/ramadan/timings' || 
    pathname === '/ramadan/timings/' ||
    pathname === '/prayer-times' || 
    pathname === '/prayer-times/'
  ) {
    PageComponent = <RamadanTimingsPage />;
  } else if (timingsMatch) {
    PageComponent = <CityTimingsPage params={{ country: timingsMatch[1], city: timingsMatch[2] }} />;
  } else if (pathname === '/ramadan/rules' || pathname === '/ramadan/rules/') {
    PageComponent = <FastingRulesPage />;
  } else if (pathname === '/ramadan/rules/nullifiers' || pathname === '/ramadan/rules/nullifiers/') {
    PageComponent = <NullifiersPage />;
  } else if (pathname === '/eid/fitr' || pathname === '/eid/fitr/') {
    PageComponent = <EidAlFitrPage />;
  } else if (pathname === '/eid/fitr/prayer-guide' || pathname === '/eid/fitr/prayer-guide/') {
    PageComponent = <EidPrayerGuidePage />;
  } else if (pathname === '/eid/adha-qurbani/slaughter-guidelines' || pathname === '/eid/adha-qurbani/slaughter-guidelines/') {
    PageComponent = <QurbaniSlaughterGuidelinesPage />;
  } else if (pathname === '/eid/adha-qurbani' || pathname === '/eid/adha-qurbani/' || pathname === '/eid/eid-al-adha' || pathname === '/eid/eid-al-adha/') {
    PageComponent = <EidAlAdhaPage />;
  } else if (
    pathname === '/duas' || 
    pathname === '/duas/' || 
    pathname === '/resources/duas' || 
    pathname === '/resources/duas/' ||
    pathname === '/daily-duas' || 
    pathname === '/daily-duas/'
  ) {
    PageComponent = <DuasHubPage searchParams={searchParamsObj} />;
  } else if (pathname.startsWith('/duas/')) {
    const slug = pathname.replace('/duas/', '').replace(/\/$/, '');
    if (slug) {
      PageComponent = <SingleDuaPage params={{ slug }} />;
    } else {
      PageComponent = <DuasHubPage searchParams={searchParamsObj} />;
    }
  } else if (
    pathname === '/ayats' || 
    pathname === '/ayats/' || 
    pathname === '/resources/ayats' || 
    pathname === '/resources/ayats/' ||
    pathname === '/sacred-ayats' || 
    pathname === '/sacred-ayats/' ||
    pathname === '/resources/quran/ayats' ||
    pathname === '/resources/quran/ayats/'
  ) {
    PageComponent = <AyatsHubPage searchParams={searchParamsObj} />;
  } else if (pathname.startsWith('/ayats/')) {
    const slug = pathname.replace('/ayats/', '').replace(/\/$/, '');
    if (slug) {
      PageComponent = <SingleAyatPage params={{ slug }} />;
    } else {
      PageComponent = <AyatsHubPage searchParams={searchParamsObj} />;
    }
  } else if (pathname.includes('ayat-al-kursi')) {
    PageComponent = <SingleAyatPage params={{ slug: 'ayat-al-kursi' }} />;
  } else if (pathname.includes('surah-baqarah-last-2-ayats')) {
    PageComponent = <SingleAyatPage params={{ slug: 'surah-baqarah-last-2-ayats' }} />;
  } else if (pathname.includes('ayat-karima')) {
    PageComponent = <SingleAyatPage params={{ slug: 'ayat-karima' }} />;
  } else if (pathname.includes('ayat-ash-shifa')) {
    PageComponent = <SingleAyatPage params={{ slug: 'ayat-ash-shifa' }} />;
  } else if (pathname.includes('ayat-al-mulk')) {
    PageComponent = <SingleAyatPage params={{ slug: 'ayat-al-mulk' }} />;
  } else if (pathname.includes('ayat-at-talaq') || pathname.includes('rizq-ayat')) {
    PageComponent = <SingleAyatPage params={{ slug: 'ayat-at-talaq-rizq' }} />;
  } else if (pathname === '/zakat-calculator' || pathname === '/zakat-calculator/') {
    PageComponent = <ZakatCalculatorPage />;
  } else if (pathname === '/zakat/gold-silver' || pathname === '/zakat/gold-silver/') {
    PageComponent = <GoldSilverCalculatorPage />;
  } else if (pathname === '/zakat/stocks-investments' || pathname === '/zakat/stocks-investments/') {
    PageComponent = <StocksInvestmentsCalculatorPage />;
  } else if (pathname === '/zakat/business' || pathname === '/zakat/business/') {
    PageComponent = <BusinessZakatCalculatorPage />;
  } else if (pathname === '/zakat/crypto' || pathname === '/zakat/crypto/') {
    PageComponent = <CryptoZakatCalculatorPage />;
  } else if (pathname === '/zakat/nisab-threshold' || pathname === '/zakat/nisab-threshold/') {
    PageComponent = <NisabThresholdRulesPage />;
  } else if (pathname === '/zakat/rules-eligibility' || pathname === '/zakat/rules-eligibility/') {
    PageComponent = <RulesEligibilityPage />;
  } else if (pathname === '/zakat/fitrana' || pathname === '/zakat/fitrana/') {
    PageComponent = <FitranaPage />;
  } else if (pathname === '/zakat/guides' || pathname === '/zakat/guides/') {
    PageComponent = <ZakatGuidesPage />;
  } else if (pathname.startsWith('/zakat/guides/')) {
    // Dynamic routing for /zakat/guides/[slug]
    const slug = pathname.replace('/zakat/guides/', '').replace(/\/$/, '');
    if (slug) {
      PageComponent = <GuideArticlePage params={{ slug }} />;
    } else {
      PageComponent = <ZakatGuidesPage />;
    }
  } else if (
    pathname === '/tools/tasbeeh-counter' ||
    pathname === '/tools/tasbeeh-counter/' ||
    pathname.startsWith('/tools/tasbeeh-counter') ||
    pathname === '/resources/tools/tasbeeh' ||
    pathname.startsWith('/resources/tools/tasbeeh')
  ) {
    PageComponent = <TasbeehCounterPage />;
  } else if (
    pathname === '/tools/qibla-finder' ||
    pathname === '/tools/qibla-finder/' ||
    pathname.startsWith('/tools/qibla-finder') ||
    pathname === '/prayer-times/qibla' ||
    pathname === '/prayer-times/qibla/' ||
    pathname.startsWith('/prayer-times/qibla') ||
    pathname === '/resources/tools/qibla' ||
    pathname.startsWith('/resources/tools/qibla')
  ) {
    PageComponent = <QiblaFinderPage />;
  } else if (
    pathname === '/tools/islamic-calendar-2026' ||
    pathname === '/tools/islamic-calendar-2026/' ||
    pathname.startsWith('/tools/islamic-calendar-2026') ||
    pathname === '/calendar' ||
    pathname === '/calendar/' ||
    pathname.startsWith('/calendar') ||
    pathname.startsWith('/resources/calendar')
  ) {
    PageComponent = <IslamicCalendarPage />;
  } else if (
    pathname === '/tools/islamic-baby-names/boys' ||
    pathname === '/tools/islamic-baby-names/boys/' ||
    pathname.startsWith('/tools/islamic-baby-names/boys') ||
    pathname === '/baby-names/boys' ||
    pathname === '/baby-names/boys/' ||
    pathname.startsWith('/baby-names/boys') ||
    pathname.startsWith('/resources/baby-names/boys')
  ) {
    PageComponent = <IslamicBabyBoyNamesPage />;
  } else if (
    pathname === '/tools/islamic-baby-names/girls' ||
    pathname === '/tools/islamic-baby-names/girls/' ||
    pathname.startsWith('/tools/islamic-baby-names/girls') ||
    pathname === '/baby-names/girls' ||
    pathname === '/baby-names/girls/' ||
    pathname.startsWith('/baby-names/girls') ||
    pathname.startsWith('/resources/baby-names/girls')
  ) {
    PageComponent = <IslamicBabyGirlNamesPage />;
  } else if (
    pathname === '/tools/islamic-baby-names' ||
    pathname === '/tools/islamic-baby-names/' ||
    pathname.startsWith('/tools/islamic-baby-names') ||
    pathname === '/baby-names' ||
    pathname === '/baby-names/' ||
    pathname.startsWith('/baby-names') ||
    pathname.startsWith('/resources/baby-names')
  ) {
    PageComponent = <IslamicBabyNamesPage />;
  } else if (
    pathname === '/guides' ||
    pathname === '/guides/'
  ) {
    PageComponent = <WorshipGuidesPage />;
  } else if (pathname.startsWith('/guides/')) {
    const slug = pathname.replace('/guides/', '').replace(/\/$/, '');
    if (slug) {
      PageComponent = <GuideDynamicPage params={{ slug }} />;
    } else {
      PageComponent = <WorshipGuidesPage />;
    }
  } else if (
    pathname === '/tools' || 
    pathname === '/tools/' ||
    pathname.startsWith('/tools/') ||
    pathname.startsWith('/resources/tools/')
  ) {
    PageComponent = <ToolsHubPage searchParams={searchParamsObj} />;
  }

  return (
    <NavigationLayout>
      {PageComponent}
    </NavigationLayout>
  );
}
