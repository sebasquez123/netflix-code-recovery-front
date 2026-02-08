'use client';

import React from 'react';

const companies = [
  { name: 'Netflix', file: 'netflix-4.svg' },
  { name: 'Disney', file: 'disney-2.svg' },
  { name: 'HBO', file: 'max-8.svg' },
  { name: 'Paramount', file: 'paramount.svg' },
  { name: 'Amazon', file: 'amazon.svg' },
  { name: 'Universal', file: 'universal.svg' },
  { name: 'YouTube', file: 'youtube.svg' },
  { name: 'Spotify', file: 'spotify.svg' },
];

export function Companies() {
  return (
    <section id="companies">
      <div className="py-[5rem] pb-10">
        <div className="container w-full">
          <div className="relative mt-6 overflow-hidden w-full h-[5rem] items-center flex">
            <div className="flex animate-infinite-scroll">
              {companies.map((logo, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={`/icons/${logo.file}`}
                    className="h-10 dark:brightness-0 dark:invert"
                    alt={logo.name}
                  />
                </div>
              ))}
              {/* Segunda set de logos para loop infinito */}
              {companies.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={`/icons/${logo.file}`}
                    className="h-10 dark:brightness-0 dark:invert"
                    alt={logo.name}
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
