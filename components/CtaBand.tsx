'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBand: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-ag-green-900 to-ag-green-950 py-24 px-6 relative overflow-hidden snap-start">
       {/* Top Separator */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Ready to Deploy Capital?</h2>
          <p className="text-ag-green-100">Join the platform bridging the gap between energy and economy.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-ag-lime hover:bg-ag-lime-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-ag-lime/20 flex items-center gap-2 group transform hover:scale-105">
            Partner With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;