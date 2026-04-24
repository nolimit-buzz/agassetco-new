'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import Image from 'next/image';
import { ReachSection } from '@/lib/strapi';

interface MapLocation {
  id: string;
  stateName: string;
  projectTitle: string;
  description: string;
  tag: string;
  sdg: string;
  mapCoordinates: { top: string; left: string };
}

// Nigeria bounding box: lon 2.65–14.68°E, lat 4.24–13.88°N
function geoToMapCoords(position: string): { top: string; left: string } | null {
  const nums = position.replace(/[°ENSW\s]/g, '').split(',').map(Number);
  if (nums.length < 2 || isNaN(nums[0]) || isNaN(nums[1])) return null;
  const [lon, lat] = nums;
  return {
    left: `${((lon - 2.65) / 12.03 * 100).toFixed(1)}%`,
    top:  `${((13.88 - lat) / 9.64  * 100).toFixed(1)}%`,
  };
}

// Fallback hardcoded locations (used when CMS location has no position string)
interface InteractiveMapSectionProps {
  onNavigate?: (page: any, id?: any) => void;
  reachData?: ReachSection | null;
}

const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ onNavigate, reachData }) => {
  // Merge CMS locations with fallback data.
  // If a CMS location has a `position` string, compute its map pin from geographic coords.
  // Otherwise fall back to the matching hardcoded entry (matched by name).
  const locations = useMemo<MapLocation[]>(() => {
    const cms = reachData?.projects_showcase;
    if (!cms?.length) return [];

    return cms.map((item, i): MapLocation => {
      const mapCoordinates = (item.position ? geoToMapCoords(item.position) : null);

      const sdgNums = item.sdgs;
      const sdgLabel = Array.isArray(sdgNums)
        && `SDG ${sdgNums[0]}`
        ;

      return {
        id: String(item.id),
        stateName:    item.state_deployed,
        projectTitle: item.title,
        description:  item.description,
        tag:          item.sector,
        sdg:          sdgLabel,
        mapCoordinates,
      };
    });
  }, [reachData]);

  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(locations[0]);

  return (
    <section className="bg-gray-50 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[600px]">
          {/* COLUMN 1: State Selector */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">
              Select Location
            </h4>
            {locations.map((loc) => (
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
              {locations.map((loc) => (
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
              {selectedLocation.projectTitle && selectedLocation.description ? (
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
              ) : (
                <motion.div
                  key={`${selectedLocation.id}-pending`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-xl w-full"
                >
                  <div className="mb-6">
                    <span className="bg-ag-lime/20 text-ag-green-950 text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                      Pipeline
                    </span>
                  </div>

                  <div className="mb-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {selectedLocation.stateName}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ag-green-950 mb-4 leading-tight">
                    Deployment in Progress.
                  </h3>

                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-10">
                    We are actively scoping and structuring productive use assets for this region. Site assessments are underway.
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ag-lime opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-ag-lime" />
                      </span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                        Coming Soon
                      </span>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-6 h-6 bg-ag-green-950 rounded flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-ag-green-950 uppercase tracking-widest">
                        2025 — 26
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;
