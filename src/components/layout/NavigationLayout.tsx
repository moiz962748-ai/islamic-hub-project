import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

interface NavigationLayoutProps {
  children: React.ReactNode;
}

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-neutral-50 font-sans antialiased selection:bg-white selection:text-black">
      <header className="w-full flex flex-col z-50">
        <TopBar />
        <Navbar />
      </header>
      
      <main className="flex-grow flex flex-col relative w-full bg-black text-neutral-50">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
