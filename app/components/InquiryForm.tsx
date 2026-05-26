"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, scope }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Transmission failed. Please try again.");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setScope("");
      
      // Auto clear success indicator after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to dispatch inquiry.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-24 lg:py-40 bg-[#0b1220] border-t border-white/5 w-full overflow-hidden text-text-primary">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column - Typography & Info */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div>
              <h2 className="text-text-primary font-spartan text-[clamp(3rem,11vw,7.5rem)] font-black leading-[0.8] tracking-tighter uppercase mb-10 select-none">
                START A <br />
                <span className="text-transparent italic font-display font-bold block mt-3" style={{ WebkitTextStroke: '1px hsl(var(--text))' }}>
                  PROJECT.
                </span>
              </h2>

              <p className="text-muted max-w-sm text-[15px] leading-[1.6] font-medium font-sans">
                Tell us about your technical challenges. We deploy dedicated architecture teams to respond to qualified inquiries within 12 hours.
              </p>
            </div>

            <div className="mt-20 lg:mt-32 pt-8 border-t border-white/5">
              <div className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-3 font-bold">Direct Channel</div>
              <a href="mailto:teamacumo@gmail.com" className="text-xl font-bold tracking-tight text-text-primary hover:text-[#1e3a8a] transition-all duration-300 font-mono">
                teamacumo@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1e3a8a] to-transparent opacity-40"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:gap-14">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name field */}
                  <div className="flex flex-col group relative">
                    <label className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mb-4 group-focus-within:text-text-primary transition-colors font-bold">Full Name</label>
                    <input
                      type="text"
                      placeholder="Engineering Manager"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent border-b border-stroke pb-4 text-[1.05rem] text-text-primary placeholder:text-white/10 focus:outline-none focus:border-text-primary transition-colors font-sans"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col group relative">
                    <label className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mb-4 group-focus-within:text-text-primary transition-colors font-bold">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-b border-stroke pb-4 text-[1.05rem] text-text-primary placeholder:text-white/10 focus:outline-none focus:border-text-primary transition-colors font-sans"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Scope field */}
                <div className="flex flex-col group relative">
                  <label className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] mb-4 group-focus-within:text-text-primary transition-colors font-bold">Project Scope & Constraints</label>
                  <textarea
                    rows={4}
                    placeholder="System architecture requirements, latency goals, or infrastructure constraints..."
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="bg-transparent border-b border-stroke pb-4 text-[1.05rem] text-text-primary placeholder:text-white/10 focus:outline-none focus:border-text-primary transition-colors resize-none font-sans"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-4 gap-6">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full sm:w-auto px-10 py-4.5 bg-text-primary text-bg font-bold text-[11px] tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-100 shadow-md uppercase border border-white/5 hover:border-[#1e3a8a] disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  >
                    {isLoading ? "Transmitting..." : "Dispatch Inquiry"}
                  </button>

                  {isSuccess && (
                    <div className="flex items-center gap-3 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 px-4 py-2 rounded-full transform transition-all sm:mt-2">
                      <div className="w-2 h-2 rounded-full bg-[#1e3a8a] animate-pulse"></div>
                      <div className="font-mono text-[9px] text-text-primary uppercase tracking-widest font-bold">Transmitted</div>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="flex items-center gap-3 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full transform transition-all sm:mt-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="font-mono text-[9px] text-red-400 uppercase tracking-widest font-bold truncate max-w-[200px]" title={errorMessage}>
                        Failed: {errorMessage}
                      </div>
                    </div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
