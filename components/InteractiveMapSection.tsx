'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import Image from 'next/image';
interface MapLocation {
  id: string;
  stateName: string;
  projectTitle: string;
  description: string;
  tag: string;
  sdg: string;
  // Percentage positions relative to the SVG container (top/left)
  mapCoordinates: { top: string; left: string };
}

// Coordinates derived from geographic position within Nigeria's bounding box:
// lon: 2.65–14.68°E  →  x = (lon - 2.65) / 12.03 * 100 %
// lat: 4.24–13.88°N  →  y = (13.88 - lat) / 9.64  * 100 %
const LOCATIONS: MapLocation[] = [
  {
    id: 'imo',
    stateName: 'Imo State',
    projectTitle: 'Solar Hybrid Mini Grid Solution',
    description: 'Providing constant power to a cluster of 15 SMEs, specializing in localized palm oil processing and packaging.',
    tag: 'Renewable Energy',
    sdg: 'SDG 7',
    mapCoordinates: { top: '82%', left: '37%' }   // ~7.0°E, 5.5°N
  },
  {
    id: 'niger',
    stateName: 'Niger State',
    projectTitle: 'Hydro-Agri Integration Hub',
    description: 'A pioneer project linking small-scale hydro-power to rice milling facilities, reducing diesel dependency by 95%.',
    tag: 'Sustainable Infrastructure',
    sdg: 'SDG 9',
    mapCoordinates: { top: '40%', left: '28%' }   // ~6.0°E, 10.0°N
  },
  {
    id: 'ogun',
    stateName: 'Ogun State',
    projectTitle: 'Industrial Cold Storage Cluster',
    description: 'Powering a network of 10 modular cold rooms to eliminate waste in the perishables supply chain for urban markets.',
    tag: 'Agro-Logistics',
    sdg: 'SDG 12',
    mapCoordinates: { top: '70%', left: '8%' }    // ~3.5°E, 7.0°N
  },
  {
    id: 'kaduna',
    stateName: 'Kaduna State',
    projectTitle: 'Grain Processing Grid',
    description: 'Integrated milling and threshing units powered by solar, allowing farmers to process harvest at point-of-sale.',
    tag: 'PUE-as-a-Service',
    sdg: 'SDG 1',
    mapCoordinates: { top: '34%', left: '40%' }   // ~7.5°E, 10.5°N
  },
  {
    id: 'kano',
    stateName: 'Kano State',
    projectTitle: 'Tomato Preservation Node',
    description: 'Solar blast cooling units that preserve tomato harvest for up to 3 weeks, stabilizing market prices.',
    tag: 'Food Security',
    sdg: 'SDG 2',
    mapCoordinates: { top: '19%', left: '48%' }   // ~8.5°E, 12.0°N
  }
];

interface InteractiveMapSectionProps {
  onNavigate?: (page: any, id?: any) => void;
}

const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ onNavigate }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(LOCATIONS[0]);

  return (
    <section className="bg-gray-50 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[600px]">
          {/* COLUMN 1: State Selector */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">
              Select Location
            </h4>
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 font-medium text-sm flex items-center justify-between group ${
                  selectedLocation.id === loc.id
                    ? 'bg-ag-lime text-ag-green-950 shadow-lg shadow-ag-lime/20'
                    : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-100 hover:text-ag-green-950'
                }`}
              >
                <span>{loc.stateName}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    selectedLocation.id === loc.id
                      ? 'translate-x-0'
                      : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* COLUMN 2: Nigeria SVG Map */}
          <div className="lg:col-span-6 relative flex items-start justify-center">
            <div className="relative w-full max-w-[460px]">
             <Image width={600} height={524} src="/ng.svg" alt="Map of Nigeria" className="w-full h-auto drop-shadow-md" />
              {/* Location pins — positioned over the SVG */}
              {LOCATIONS.map((loc) => (
                <button
                  key={`pin-${loc.id}`}
                  onClick={() => setSelectedLocation(loc)}
                  className="absolute transition-transform duration-300 hover:scale-150 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: loc.mapCoordinates.top, left: loc.mapCoordinates.left }}
                  aria-label={loc.stateName}
                >
                  <div className="relative flex items-center justify-center">
                    {selectedLocation.id === loc.id && (
                      <div className="absolute w-6 h-6 bg-ag-lime rounded-full animate-ping opacity-75" />
                    )}
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${
                        selectedLocation.id === loc.id ? 'bg-ag-lime' : 'bg-ag-green-950'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Project Detail Card */}
          <div className="lg:col-span-3 flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-xl w-full"
              >
                <div className="mb-6">
                  <span className="bg-ag-lime/20 text-ag-green-950 text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    {selectedLocation.tag}
                  </span>
                </div>

                <div className="mb-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {selectedLocation.stateName}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ag-green-950 mb-4 leading-tight">
                  {selectedLocation.projectTitle}
                </h3>

                <p className="text-sm text-gray-500 font-light leading-relaxed mb-10">
                  {selectedLocation.description}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <button
                    onClick={() => onNavigate?.('project-detail', selectedLocation.id)}
                    className="w-12 h-12 rounded-full bg-ag-lime flex items-center justify-center text-ag-green-950 shadow-lg shadow-ag-lime/30 hover:scale-105 transition-transform"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-ag-green-950 rounded flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-ag-green-950 uppercase tracking-widest">
                      {selectedLocation.sdg}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;
