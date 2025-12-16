'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Hiring Now For Dubai & Europe
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-emerald-950 leading-[1.1]">
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-emerald-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-emerald-950 text-white font-semibold rounded-full hover:bg-emerald-900 transition-all flex items-center gap-2 group shadow-lg shadow-emerald-900/20"
            >
              {t.hero.primaryBtn}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white text-emerald-950 border border-gray-200 font-semibold rounded-full hover:bg-gray-50 transition-all"
            >
              {t.hero.secondaryBtn}
            </a>
          </div>

          {/* Licenses Mini */}
          <div className="pt-8 border-t border-gray-200 flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="text-emerald-500 shrink-0 mt-1"
                size={20}
              />
              <div>
                <p className="text-sm font-bold text-emerald-950">
                  {t.stats.govt}
                </p>
                <p className="text-xs text-gray-500">
                  {t.stats.license1}
                </p>
                <p className="text-xs text-gray-500">
                  {t.stats.license2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?auto=format&fit=crop&q=80&w=1200"
              alt="Industrial Worker"
              className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium opacity-90">
                  Overseas Recruitment
                </span>
                <span className="text-emerald-400 font-bold">
                  98% Success
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-emerald-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
