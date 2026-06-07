"use client";

import React, { useEffect, useState } from 'react';

type Heading = { id: string; title: string; level: number };

export default function SectionIndex({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
      <h4 className="font-spartan text-sm font-bold uppercase tracking-widest text-white/50 mb-6 pb-4 border-b border-white/10">
        Index
      </h4>
      <ul className="flex flex-col gap-3 font-sans text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}
          >
            <a
              href={`#${heading.id}`}
              className={`block transition-all duration-300 hover:text-[#1e3a8a] ${activeId === heading.id
                  ? 'text-[#1e3a8a] font-bold border-l-2 border-[#1e3a8a] pl-3 -ml-[14px]'
                  : 'text-white/70'
                }`}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
