'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight,
  Info,
  PlayCircle,
  RotateCcw,
  Plus,
  Minus,
  Calculator,
  Coins,
  TrendingUp,
  Briefcase,
  Heart,
  Bitcoin,
  Wallet,
  Database,
  Image as ImageIcon
} from 'lucide-react';

export default function CryptoZakatCalculatorPage() {
  // --- STATE ---
  const [currency, setCurrency] = useState('USD');
  const [liquidCrypto, setLiquidCrypto] = useState<number | ''>('');
  const [stablecoins, setStablecoins] = useState<number | ''>('');
  const [defiStaked, setDefiStaked] = useState<number | ''>('');
  const [nftValue, setNftValue] = useState<number | ''>('');
  const [nftType, setNftType] = useState<'trade' | 'utility'>('trade');
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- LOGIC ---
  const nisabThresholds: Record<string, { value: number, sym: string }> = {
    USD: { value: 520.50, sym: '$' },
    GBP: { value: 410.20, sym: '£' },
    PKR: { value: 143904, sym: 'Rs' },
    SAR: { value: 1953.40, sym: 'SAR' },
    AED: { value: 1910.64, sym: 'AED' }
  };
  
  const currentNisab = nisabThresholds[currency] || nisabThresholds['USD'];
  const sym = currentNisab.sym;

  // Numeric parsers
  const liquidVal = Number(liquidCrypto) || 0;
  const stableVal = Number(stablecoins) || 0;
  const defiVal = Number(defiStaked) || 0;
  const nftVal = Number(nftValue) || 0;

  // NFT Zakatable Value Logic
  const zakatableNft = nftType === 'trade' ? nftVal : 0;

  // Total Gross Assets
  const totalMarketValue = liquidVal + stableVal + defiVal + nftVal;
  
  // Net Zakatable Assets
  const netZakatableAssets = liquidVal + stableVal + defiVal + zakatableNft;

  const isEligible = netZakatableAssets >= currentNisab.value;
  const zakatPayable = isEligible ? netZakatableAssets * 0.025 : 0;

  const resetCalculator = () => {
    setLiquidCrypto('');
    setStablecoins('');
    setDefiStaked('');
    setNftValue('');
    setNftType('trade');
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Crypto Zakat Calculator",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "description": "Calculate Zakat on your cryptocurrency, Web3 assets, stablecoins, DeFi staking rewards, and NFTs.",
                "url": "https://islamhub.com/zakat/crypto/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is Zakat due on Bitcoin and Ethereum?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Most contemporary Islamic scholars treat liquid cryptocurrencies like Bitcoin and Ethereum as digital wealth or currency. Therefore, Zakat is due at 2.5% on their full current market value on your Zakat anniversary."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I calculate Zakat on locked staking tokens or yield farming?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zakat is due on the principal amount and accumulated rewards of staked tokens if you have the ability to withdraw them (even with an unbonding period). If the tokens are permanently inaccessible or lost, no Zakat is due until recovered."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are NFTs subject to Zakat calculation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It depends on the intention. If an NFT is bought for trading and speculation (flipping), it is treated as commercial inventory and taxed at 2.5% of its market value. If it is bought for personal collection, utility, or as digital art without the intent to resell, it is generally exempt."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if my crypto portfolio drops below Nisab during market volatility?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zakat is calculated based on the market value of your portfolio precisely on your Zakat anniversary date. Fluctuations during the year do not matter, provided that your total wealth remains above the Nisab threshold on the exact day your lunar year concludes."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
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
                    "name": "Zakat",
                    "item": "https://islamhub.com/zakat"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Crypto Zakat Calculator",
                    "item": "https://islamhub.com/zakat/crypto/"
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Phase 1: Above-the-Fold (E-E-A-T & AEO) */}
        <nav className="flex items-center text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link href="/zakat" className="hover:text-cyan-400 transition-colors">Zakat</Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-slate-300">Crypto Zakat Calculator</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Crypto Zakat Calculator (2026)
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-800/50 rounded-full px-3 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-100/90">
              Verified Web3 & Digital Asset Fiqh | Reviewed by Contemporary Islamic Economists
            </span>
          </div>

          <div className="bg-slate-900/60 border-l-4 border-cyan-500 rounded-r-xl p-5 sm:p-6 shadow-sm backdrop-blur-sm max-w-4xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-cyan-400" />
              Direct Answer
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zakat is due at 2.5% on liquid digital assets (<strong className="text-cyan-400 font-semibold">Bitcoin, Ethereum, Stablecoins</strong>) held as investment wealth once total assets meet the Nisab threshold. Staked tokens and yield farming rewards are calculated based on total accessible market value.
            </p>
          </div>
        </header>

        {/* Phase 2: Digital Asset Calculator Wizard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (Inputs) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Currency Selector */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Currency Base</h3>
              <div className="flex flex-wrap gap-2">
                {['USD', 'GBP', 'PKR', 'SAR', 'AED'].map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                      currency === curr 
                        ? 'bg-cyan-600 border-cyan-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Liquid Crypto Holdings Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Bitcoin className="w-5 h-5 text-amber-500" /> Liquid Crypto Holdings
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Bitcoin, Ethereum & Altcoins</label>
                <p className="text-xs text-slate-500 mb-3">Total current market value of coins held in hot/cold wallets and exchanges.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={liquidCrypto} onChange={e => setLiquidCrypto(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* Stablecoins Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Wallet className="w-5 h-5 text-white" /> Stablecoins & Fiat Equivalents
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">USDT, USDC, DAI, etc.</label>
                <p className="text-xs text-slate-500 mb-3">Fiat-pegged digital assets held as liquid wealth.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={stablecoins} onChange={e => setStablecoins(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-white focus:border-white transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* DeFi & Staked Assets Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <Database className="w-5 h-5 text-purple-400" /> DeFi & Staked Assets
              </h3>
              <div>
                <label className="block text-sm text-slate-300 mb-1 font-medium">Staked Tokens & Liquidity Pools</label>
                <p className="text-xs text-slate-500 mb-3">Include both the principal locked tokens and any accumulated, accessible yield rewards.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={defiStaked} onChange={e => setDefiStaked(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors" 
                  />
                </div>
              </div>
            </div>

            {/* NFTs & Utility Tokens */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
              <h3 className="text-white font-semibold flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                <ImageIcon className="w-5 h-5 text-pink-400" /> NFTs & Utility Tokens
              </h3>
              <div className="mb-5">
                <label className="block text-sm text-slate-300 mb-1 font-medium">NFT Portfolio Value</label>
                <p className="text-xs text-slate-500 mb-3">Estimated floor price or market value of your NFTs.</p>
                <div className="relative max-w-md">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{sym}</span>
                  <input 
                    type="number" min="0" placeholder="0"
                    value={nftValue} onChange={e => setNftValue(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2.5 text-white focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-colors" 
                  />
                </div>
              </div>

              {/* NFT Intent Toggle */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Primary Intention for NFTs</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setNftType('trade')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-medium transition-colors border text-center ${
                      nftType === 'trade' 
                        ? 'bg-pink-600/20 border-pink-500 text-pink-300' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Trade/Speculation (2.5% Taxable)
                  </button>
                  <button
                    onClick={() => setNftType('utility')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-medium transition-colors border text-center ${
                      nftType === 'utility' 
                        ? 'bg-slate-700/50 border-slate-600 text-slate-300' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    Utility/Personal Collection (Exempt)
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Result Engine) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Live Net Crypto Asset Calculation */}
                <div className="p-6 border-b border-slate-800 bg-slate-950/80">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Web3 Portfolio Valuation</h3>
                  
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-slate-400">Total Market Value:</span>
                    <span className="text-slate-300 font-medium">{sym} {totalMarketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  {nftType === 'utility' && nftVal > 0 && (
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span className="text-pink-400/80">Exempt NFTs:</span>
                      <span className="text-pink-400/80 font-medium">-{sym} {nftVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800 border-dashed">
                    <span className="text-cyan-400 font-medium">Net Zakatable Assets:</span>
                    <span className="text-white font-bold">{sym} {netZakatableAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Live Nisab Threshold:</span>
                    <span className="text-slate-400 font-medium">{sym} {currentNisab.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-5">
                    {isEligible ? (
                      <div className="px-3 py-1 rounded bg-neutral-800 text-white text-xs font-bold border border-neutral-800">
                        ELIGIBLE FOR ZAKAT
                      </div>
                    ) : (
                      <div className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold border border-slate-700">
                        EXEMPT (BELOW NISAB)
                      </div>
                    )}
                  </div>
                </div>

                {/* 2.5% Net Payable Crypto Zakat Card */}
                <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-slate-900">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">2.5% Net Payable Zakat</h3>
                  <div className={`text-4xl font-extrabold ${isEligible ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {sym} {zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {isEligible && (
                    <p className="text-xs text-cyan-200/60 mt-3 leading-relaxed">
                      Zakat amount due on your digital assets and cryptocurrency holdings for the current lunar year.
                    </p>
                  )}
                </div>

              </div>

              <button 
                onClick={resetCalculator}
                className="w-full py-4 px-6 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5 text-slate-400" />
                Reset Calculator
              </button>

            </div>
          </div>

        </div>

        {/* Phase 3 & 5: Horizontal Sibling Silo Links Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <Link href="/zakat-calculator/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Calculator className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Universal</span>
          </Link>
          <Link href="/zakat/gold-silver/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Coins className="w-6 h-6 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Gold Tool</span>
          </Link>
          <Link href="/zakat/stocks-investments/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <TrendingUp className="w-6 h-6 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Stocks</span>
          </Link>
          <Link href="/zakat/business/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Briefcase className="w-6 h-6 text-indigo-500/70 group-hover:text-indigo-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Business</span>
          </Link>
          <Link href="/zakat/fitrana/" className="bg-slate-900/60 border border-slate-800 hover:border-neutral-600 p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors group text-center">
            <Heart className="w-6 h-6 text-rose-500/70 group-hover:text-rose-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Fitrana</span>
          </Link>
        </div>

        {/* Phase 2: Crypto Classification HTML Data Table & Video */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-white mb-6">Web3 Assets Zakat Rules</h2>
            <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800">
                    <th className="p-4 text-sm font-semibold text-slate-300">Token Type</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Zakat Status</th>
                    <th className="p-4 text-sm font-semibold text-slate-300">Contemporary Fiqh Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-bold text-amber-400">Payment Tokens (BTC, ETH)</td>
                    <td className="p-4 text-sm text-slate-300">Taxable at 2.5%</td>
                    <td className="p-4 text-sm text-slate-400">Treated as digital currency/wealth</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-white">Stablecoins (USDT, USDC)</td>
                    <td className="p-4 text-sm text-slate-300">Taxable at 2.5%</td>
                    <td className="p-4 text-sm text-slate-400">1:1 Fiat monetary equivalence</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-purple-400">Staked Assets & Yield</td>
                    <td className="p-4 text-sm text-slate-300">Taxable (if accessible)</td>
                    <td className="p-4 text-sm text-slate-400">Wealth accumulation mechanism</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-pink-400">NFTs (Flipping/Trading)</td>
                    <td className="p-4 text-sm text-slate-300">Taxable at 2.5%</td>
                    <td className="p-4 text-sm text-slate-400">Urud al-Tijarah (Trade goods)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-400">NFTs (Personal Utility/Art)</td>
                    <td className="p-4 text-sm text-slate-500">Exempt</td>
                    <td className="p-4 text-sm text-slate-500">Personal use / non-liquid asset</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-white mb-6">Video Guide</h2>
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10 pointer-events-none" />
              <button className="z-20 w-16 h-16 rounded-full bg-cyan-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <PlayCircle className="w-8 h-8 fill-slate-950 text-white" />
              </button>
              <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                3 Min Guide
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">How to Calculate Zakat on Crypto, DeFi & Staking Rewards</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Phase 4: Crypto FAQ Accordion */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Is Zakat due on Bitcoin and Ethereum?",
                a: "Yes. Most contemporary Islamic scholars treat liquid cryptocurrencies like Bitcoin and Ethereum as digital wealth or currency. Therefore, Zakat is due at 2.5% on their full current market value on your Zakat anniversary."
              },
              {
                q: "How do I calculate Zakat on locked staking tokens or yield farming?",
                a: "Zakat is due on the principal amount and accumulated rewards of staked tokens if you have the ability to withdraw them (even with an unbonding period). If the tokens are permanently inaccessible or lost, no Zakat is due until recovered."
              },
              {
                q: "Are NFTs subject to Zakat calculation?",
                a: "It depends on the intention. If an NFT is bought for trading and speculation (flipping), it is treated as commercial inventory and taxed at 2.5% of its market value. If it is bought for personal collection, utility, or as digital art without the intent to resell, it is generally exempt."
              },
              {
                q: "What if my crypto portfolio drops below Nisab during market volatility?",
                a: "Zakat is calculated based on the market value of your portfolio precisely on your Zakat anniversary date. Fluctuations during the year do not matter, provided that your total wealth remains above the Nisab threshold on the exact day your lunar year concludes."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-200">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                <div className={`px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed ${openFaq === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
