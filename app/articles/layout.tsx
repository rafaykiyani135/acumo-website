import React from 'react';
import Navbar from '../components/Navbar';

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      <main className="pt-24 pb-16 lg:pt-32">
        {children}
      </main>
    </div>
  );
}
