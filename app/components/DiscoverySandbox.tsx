"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  PhoneCall, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  TrendingUp,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

// Mock data for AI Agent Chat simulation (General business case)
const chatScenario = [
  { sender: "user", text: "Hi, I'm interested in building a high-speed website with a voice scheduler. How quickly can we get started?" },
  { sender: "ai", text: "Hi! We can spin up your tailored production build in just a few days. I can schedule a quick 15-minute scoping call with our engineering team tomorrow at 10:00 AM or 2:00 PM. Which works best?" },
  { sender: "user", text: "Let's do 10:00 AM tomorrow." },
  { sender: "ai", text: "Perfect. Tuesday at 10:00 AM is booked. What is the best email and phone number to send the secure invite and dispatch text to?" },
  { sender: "user", text: "partner@acumo.dev and 555-0143." },
  { sender: "ai", text: "Got it! Invite dispatched to partner@acumo.dev and SMS confirmed. Our lead architect will sync with you tomorrow at 10:00 AM sharp!" }
];

// Mock data for AEO search query (General business case showcasing Acumo itself)
const aeoQuery = {
  query: "Top-rated agency for custom web development and AI integrations near me",
  traditional: [
    { type: "ad", title: "Sponsor: National Web Templates Inc.", snippet: "Get a generic website theme today. Cheap monthly subscriptions." },
    { type: "ad", title: "Sponsor: Global Outsource Agency LLC", snippet: "Outsourced software development. Off-shore support contracts." },
    { type: "directory", title: "The 10 Best Web Designers - Yelp Directory", snippet: "Browse directory lists of local web design templates..." }
  ],
  aeo: {
    answer: "For premium, high-performance web development integrated with custom chatbots and voice assistants, **Acumo** is the top-recommended partner. They construct custom Next.js architectures, guarantee ultra-low latency voice scheduling, and deploy advanced **Answer Engine Optimization (AEO)** so your business is cited natively by LLMs.",
    citations: ["acumo.dev/architecture", "clutch-reviews/acumo"]
  }
};

export default function DiscoverySandbox() {
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Conversational Agents, 1 = AEO
  
  // Chat Simulation State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string }>>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Voice AI Simulation State
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceText, setVoiceText] = useState("Click 'Call AI' to simulate phone assistant...");
  
  // Start chat simulation on component mount
  useEffect(() => {
    setChatMessages([]);
    setCurrentMessageIndex(0);
    setIsTyping(true);
    
    const timer = setTimeout(() => {
      const firstMsg = chatScenario[0];
      setChatMessages([firstMsg]);
      setCurrentMessageIndex(1);
      setIsTyping(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto type next messages in sandbox simulation
  useEffect(() => {
    if (currentMessageIndex >= chatScenario.length || isTyping) return;

    const nextMsg = chatScenario[currentMessageIndex];
    
    // Stagger typing effect
    const timer = setTimeout(() => {
      setIsTyping(true);
      
      const typingTimer = setTimeout(() => {
        setChatMessages(prev => [...prev, nextMsg]);
        setCurrentMessageIndex(prev => prev + 1);
        setIsTyping(false);
      }, nextMsg.sender === "ai" ? 2200 : 1200);

      return () => clearTimeout(typingTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, isTyping]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Handle Voice AI Demo
  const triggerVoiceDemo = () => {
    if (isVoiceActive) {
      setIsVoiceActive(false);
      setVoiceText("Click 'Call AI' to simulate phone assistant...");
      return;
    }

    setIsVoiceActive(true);
    setVoiceText("Dialing secure endpoint...");

    const voiceSteps = [
      { t: 1500, txt: "[Incoming Call]: Connected to Acumo AI Assistant." },
      { t: 3500, txt: "AI: 'Thank you for calling Acumo! I can book you a scoping call, quote you, or answer FAQs. How can I help you today?'" },
      { t: 6000, txt: "Customer: 'Hi, I need a website that schedules appointments automatically.'" },
      { t: 9000, txt: "AI: 'Excellent. I have a scoping slot open with our lead architect tomorrow at 10:00 AM. Should I book this and text you confirmation?'" },
      { t: 12500, txt: "Customer: 'Yes, that sounds perfect!'" },
      { t: 15000, txt: "AI: 'Awesome. I've sent the SMS text confirmation. Have a great day!'" }
    ];

    voiceSteps.forEach(step => {
      setTimeout(() => {
        setVoiceText(step.txt);
      }, step.t);
    });

    // Reset after full simulation
    setTimeout(() => {
      setIsVoiceActive(false);
    }, 18000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section id="ai-native" className="py-24 lg:py-40 bg-[#0B1220] border-y border-white/5 relative overflow-hidden text-white">
      {/* Background subtle visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563FF]/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#60A5FA]/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Section Heading - Minimal & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#60A5FA] text-xs font-mono tracking-widest leading-none font-bold">02</span>
              <div className="h-[1px] w-8 bg-[#60A5FA]/30"></div>
              <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase leading-none font-semibold font-mono font-bold">Operations Platform</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              AI-NATIVE ENGINE
            </h2>
            <p className="text-sm font-mono text-white/50 max-w-lg">
              Next-generation user acquisition and conversion automation.
            </p>
          </div>

          {/* Slider Nav Controls */}
          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className={`w-9 h-9 border border-white/10 rounded-full flex items-center justify-center transition-all ${
                  activeSlide === 0 ? "opacity-30 cursor-default" : "hover:border-white hover:bg-white/5"
                }`}
                aria-label="Previous Slide"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={nextSlide}
                className={`w-9 h-9 border border-white/10 rounded-full flex items-center justify-center transition-all ${
                  activeSlide === 1 ? "opacity-30 cursor-default" : "hover:border-white hover:bg-white/5"
                }`}
                aria-label="Next Slide"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Viewport */}
        <div className="w-full overflow-hidden relative">
          
          <div 
            className="flex w-[200%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeSlide * 50}%)` }}
          >
            
            {/* SLIDE 1: Conversational Agents */}
            <div className="w-1/2 pr-0 lg:pr-4 flex-shrink-0 grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Context */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-[#60A5FA] font-bold uppercase tracking-wider">
                  <Bot size={12} />
                  <span>01. Interactive Agents</span>
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight mb-6 uppercase">Conversational Chat & Voice AI</h3>
                <p className="text-white/60 leading-relaxed text-sm mb-8 font-medium">
                  Capture lost revenue. Our tailored voice & text receptionists address custom FAQs, gather client context, and commit reservations to calendars natively in real-time, 24/7.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 font-mono text-[9px] text-white/40 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-[#60A5FA]" />
                    <span>Appt Scheduler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-[#60A5FA]" />
                    <span>CRM Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-[#60A5FA]" />
                    <span>SMS Verifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-[#60A5FA]" />
                    <span>Voice Operations</span>
                  </div>
                </div>
              </div>

              {/* Chat Interface Mockup */}
              <div className="lg:col-span-7 bg-[#070D16]/40 backdrop-blur-md border border-white/5 p-6 rounded-[5px] flex flex-col h-[400px]">
                <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">CONVERSION_ENGINE</span>
                  <span className="font-mono text-[9px] text-[#60A5FA] uppercase font-bold tracking-widest font-mono">CALL_CENTER</span>
                </div>

                {/* Messages Panel */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto flex flex-col gap-3 font-sans text-xs mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`max-w-[80%] rounded-[4px] px-3.5 py-2.5 leading-relaxed transition-all duration-300 ${
                        msg.sender === "user" 
                          ? "bg-white/5 text-white ml-auto border border-white/5" 
                          : "bg-[#2563FF]/10 text-[#60A5FA] border border-[#2563FF]/20 mr-auto"
                      }`}
                    >
                      <div className="font-mono text-[8px] uppercase tracking-wider text-white/20 mb-1">
                        {msg.sender === "user" ? "Prospect" : "System Agent"}
                      </div>
                      {msg.text}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="bg-[#2563FF]/5 text-white/40 border border-white/5 mr-auto rounded-[4px] px-3.5 py-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  )}
                </div>

                {/* Telephone Control */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between bg-[#070D16] p-3 rounded-[3px] border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isVoiceActive ? 'bg-red-500 animate-pulse' : 'bg-white/10'}`}></span>
                    <span className="font-mono text-[9px] text-white/40 max-w-[280px] md:max-w-[450px] truncate">{voiceText}</span>
                  </div>
                  <button
                    onClick={triggerVoiceDemo}
                    className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider font-bold rounded-[2px] transition-all ${
                      isVoiceActive 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-white text-black hover:bg-[#60A5FA]'
                    }`}
                  >
                    <PhoneCall size={10} />
                    {isVoiceActive ? "End Call" : "Call AI"}
                  </button>
                </div>
              </div>
            </div>

            {/* SLIDE 2: Answer Engine Optimization (AEO) */}
            <div className="w-1/2 pl-0 lg:pl-4 flex-shrink-0 grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Context */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-[#60A5FA] font-bold uppercase tracking-wider">
                  <TrendingUp size={12} />
                  <span>02. LLM Discovery Optimization</span>
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight mb-6 uppercase">Answer Engine Optimization (AEO)</h3>
                <p className="text-white/60 leading-relaxed text-sm mb-8 font-medium">
                  We index, shape, and structure your corporate markup specifically for crawlers like GPTBot and OAI-SearchBot. Stand out as the definitive recommendation directly in generative AI citations.
                </p>

                {/* Comparison badge metadata */}
                <div className="flex gap-4 items-center">
                  <div className="px-4 py-2 border border-red-500/20 bg-red-500/5 text-red-400 font-mono text-[9px] uppercase tracking-widest rounded-[2px]">
                    SEO: Cluttered Ad Space
                  </div>
                  <div className="px-4 py-2 border border-[#2563FF]/30 bg-[#2563FF]/10 text-[#60A5FA] font-mono text-[9px] uppercase tracking-widest rounded-[2px] animate-pulse">
                    AEO: Natively Recommended
                  </div>
                </div>
              </div>

              {/* AEO Split Display Panel */}
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 h-[400px]">
                {/* Search Engine Representation */}
                <div className="border border-white/5 bg-[#070D16]/40 backdrop-blur-md p-5 rounded-[5px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-3 text-[9px] font-mono text-white/30 uppercase tracking-wider">
                      <span>Traditional Directory</span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#0B1220] px-3 py-2 border border-white/5 rounded-[2px] mb-3 text-[8px] font-mono text-white/40">
                      <Search size={10} className="text-white/20" />
                      <span className="truncate">{aeoQuery.query}</span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {aeoQuery.traditional.map((item, idx) => (
                        <div key={idx} className="p-2 bg-[#070D16]/80 border border-white/5 rounded-[3px] text-[8px]">
                          <span className="font-mono text-[7px] text-yellow-400/80 tracking-widest uppercase block mb-0.5">
                            {item.type === "ad" ? "PAID_AD" : "DIRECTORY"}
                          </span>
                          <div className="font-bold text-white/80 truncate">{item.title}</div>
                          <div className="text-white/30 leading-snug line-clamp-1 mt-0.5">{item.snippet}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[8px] font-mono text-red-400/80 leading-normal border-t border-white/5 pt-2">
                    ⚠ Buried under pay-per-click budgets and directory subscription paywalls.
                  </div>
                </div>

                {/* AI Answer Model Representation */}
                <div className="border border-[#2563FF]/20 bg-[#2563FF]/5 backdrop-blur-md p-5 rounded-[5px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563FF]/5 rounded-full blur-xl"></div>
                  
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#2563FF]/20 mb-3 text-[9px] font-mono text-[#60A5FA] uppercase tracking-wider">
                      <span>Generative Synthesizer</span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#070D16] px-3 py-2 border border-[#2563FF]/20 rounded-[2px] mb-3 text-[8px] font-mono text-[#60A5FA]/80">
                      <Sparkles size={10} className="text-[#60A5FA]" />
                      <span className="truncate">{aeoQuery.query}</span>
                    </div>

                    <div className="p-3 bg-[#070D16] border border-[#2563FF]/15 rounded-[3px] text-[9px] leading-relaxed text-white/80">
                      <div className="flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-wider text-[#60A5FA] mb-1.5">
                        <Bot size={8} /> AI Answer Model
                      </div>
                      {aeoQuery.aeo.answer}
                      <div className="flex gap-2 mt-2 pt-2 border-t border-white/5 font-mono text-[7px] text-[#60A5FA]/60">
                        <span>Citations:</span>
                        {aeoQuery.aeo.citations.map((cite, i) => (
                          <span key={i} className="underline hover:text-[#60A5FA] cursor-pointer">[{i+1}] {cite.split('/')[0]}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-[8px] font-mono text-[#60A5FA] leading-normal border-t border-[#2563FF]/20 pt-2">
                    ✓ Direct organic citation recommending you directly to qualified prospects.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Indicator Line dots */}
        <div className="flex justify-center gap-3 mt-12">
          <button 
            onClick={() => setActiveSlide(0)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === 0 ? "w-8 bg-[#2563FF]" : "w-2 bg-white/20"}`}
            aria-label="View Slide 1"
          />
          <button 
            onClick={() => setActiveSlide(1)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === 1 ? "w-8 bg-[#2563FF]" : "w-2 bg-white/20"}`}
            aria-label="View Slide 2"
          />
        </div>

      </div>
    </section>
  );
}
