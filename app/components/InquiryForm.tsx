"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="inquiry" className="py-40 section-border">
      <div className="site-grid">
        <div className="col-span-12 md:col-span-4 mb-20 md:mb-0">
          <div className="label-tech mb-8">Contact</div>
          <h2 className="text-7xl font-bold tracking-tighter mb-10 leading-[0.95]">Start a <br />Project.</h2>
          <p className="text-neutral-500 max-w-xs text-lg leading-relaxed">Tell us about your technical challenges. We respond to qualified inquiries within 12 hours.</p>
        </div>
        
        <div className="col-span-12 md:col-span-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Full Name</label>
              <input type="text" placeholder="Engineering Manager" className="input-sleek" required />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Email Address</label>
              <input type="email" placeholder="name@company.com" className="input-sleek" required />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Project Scope</label>
              <textarea rows={5} placeholder="System architecture requirements, AI goals, or infrastructure constraints..." className="input-sleek" required></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-start items-center">
              <button type="submit" className="btn-sleek w-full md:w-auto">Dispatch Inquiry</button>
              {isSuccess && (
                <div className="ml-8 font-mono text-[11px] text-indigo-400 uppercase tracking-widest animate-pulse">Inquiry Transmitted Successfully</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
