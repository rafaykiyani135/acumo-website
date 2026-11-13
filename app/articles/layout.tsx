import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
