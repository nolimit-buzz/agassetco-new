'use client';


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Globe } from 'lucide-react';

interface MapLocation {
  id: string;
  stateName: string;
  projectTitle: string;
  description: string;
  tag: string;
  sdg: string;
  mapCoordinates: { top: string; left: string };
}

const LOCATIONS: MapLocation[] = [
  {
    id: 'imo',
    stateName: 'Imo State',
    projectTitle: 'Solar Hybrid Mini Grid Solution',
    description: 'Providing constant power to a cluster of 15 SMEs, specializing in localized palm oil processing and packaging.',
    tag: 'Renewable Energy',
    sdg: 'SDG 7',
    mapCoordinates: { top: '65%', left: '42%' }
  },
  {
    id: 'niger',
    stateName: 'Niger State',
    projectTitle: 'Hydro-Agri Integration Hub',
    description: 'A pioneer project linking small-scale hydro-power to rice milling facilities, reducing diesel dependency by 95%.',
    tag: 'Sustainable Infrastructure',
    sdg: 'SDG 9',
    mapCoordinates: { top: '45%', left: '30%' }
  },
  {
    id: 'ogun',
    stateName: 'Ogun State',
    projectTitle: 'Industrial Cold Storage Cluster',
    description: 'Powering a network of 10 modular cold rooms to eliminate waste in the perishables supply chain for urban markets.',
    tag: 'Agro-Logistics',
    sdg: 'SDG 12',
    mapCoordinates: { top: '72%', left: '15%' }
  },
  {
    id: 'kaduna',
    stateName: 'Kaduna State',
    projectTitle: 'Grain Processing Grid',
    description: 'Integrated milling and threshing units powered by solar, allowing farmers to process harvest at point-of-sale.',
    tag: 'PUE-as-a-Service',
    sdg: 'SDG 1',
    mapCoordinates: { top: '35%', left: '40%' }
  },
  {
    id: 'kano',
    stateName: 'Kano State',
    projectTitle: 'Tomato Preservation Node',
    description: 'Solar blast cooling units that preserve tomato harvest for up to 3 weeks, stabilizing market prices.',
    tag: 'Food Security',
    sdg: 'SDG 2',
    mapCoordinates: { top: '15%', left: '48%' }
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
          
          {/* COLUMN 1: State Selector (25%) */}
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
                    selectedLocation.id === loc.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* COLUMN 2: Map Visualization (50%) */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-4">
            <div className="relative w-full max-w-[500px] aspect-[5/4]">
              {/* Simplified high-quality Nigeria SVG */}
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-sm">
                <path 
                  d="M166 38.6C163.6 37.1 161.4 35.8 159.2 34.6L129.4 46.1L107.1 76.2L85.9 104.7L64.8 133.3L43.6 161.8L22.5 190.4L1.3 218.9L1.4 219.1L4.8 223.5L8.1 227.9L11.5 232.3L14.9 236.7L18.2 241.1L21.6 245.5L25 249.9L28.3 254.3L31.7 258.7L35.1 263.1L38.4 267.5L41.8 271.9L45.2 276.3L48.6 280.7L52.1 285.1L55.5 289.5L58.9 293.9L62.3 298.3L65.7 302.7L69.1 307.1L72.6 311.5L76 315.9L79.4 320.3L82.8 324.7L86.2 329.1L89.6 333.5L93.1 337.9L96.5 342.3L101.4 348.1L106.3 353.9L111.1 359.7L116 365.5L120.9 371.3L125.7 377.1L130.6 382.9L135.5 388.7L140.4 394.5L145.2 400.3L150.1 406.1L155 411.9L159.9 417.7L164.7 423.5L169.6 429.3L174.5 435.1L179.3 440.9L184.2 446.7L189.1 452.5L194 458.3L198.8 464.1L203.7 469.9L208.6 475.7L213.5 481.5L218.3 487.3L223.2 493.1L228.1 498.9V498.9L231.1 497.1L234.1 495.2L237.1 493.4L240.1 491.5L243.1 489.7L246.1 487.9L249.1 486L252.1 484.2L255.1 482.3L258.1 480.5L261.1 478.7L264.1 476.8L267.1 475L270.1 473.1L273.1 471.3L276.1 469.5L279.1 467.6L282.1 465.8L285.1 463.9L288.1 462.1L291.1 460.3L294.1 458.4L297.1 456.6L300.1 454.7L303.1 452.9L306.1 451.1L309.1 449.2L312.1 447.4L315.1 445.5L318.1 443.7L321.1 441.9L324.1 440L327.1 438.2L330.1 436.3L333.1 434.5L336.1 432.7L339.1 430.8L342.1 429L345.1 427.1L348.1 425.3L351.1 423.5L354.1 421.6L357.1 419.8L360.1 417.9L363.1 416.1L366.1 414.3L369.1 412.4L372.1 410.6L375.1 408.7L378.1 406.9L381.1 405.1L384.1 403.2L387.1 401.4L390.1 399.5L393.1 397.7L396.1 395.9L399.1 394L402.1 392.2L405.1 390.3L408.1 388.5L411.1 386.7L414.1 384.8L417.1 383L420.1 381.1L423.1 379.3L426.1 377.5L429.1 375.6L432.1 373.8L435.1 371.9L438.1 370.1L441.1 368.3L444.1 366.4L447.1 364.6L450.1 362.7L453.1 360.9L456.1 359.1L459.1 357.2L462.1 355.4L465.1 353.5L468.1 351.7L471.1 349.9L474.1 348L477.1 346.2L480.1 344.3L483.1 342.5L486.1 340.7L489.1 338.8L492.1 337L495.1 335.1L498.1 333.3L500 332.2V332.2L498.6 329.1L497.1 325.9L495.7 322.8L494.2 319.6L492.8 316.5L491.3 313.3L489.9 310.2L488.4 307.1L487 303.9L485.5 300.8L484.1 297.6L482.6 294.5L481.2 291.3L479.7 288.2L478.3 285.1L476.8 281.9L475.4 278.8L473.9 275.6L472.5 272.5L471.1 269.4L469.6 266.2L468.2 263.1L466.7 259.9L465.3 256.8L463.8 253.6L462.4 250.5L460.9 247.3L459.5 244.2L458 241.1L456.6 237.9L455.1 234.8L453.7 231.6L452.2 228.5L450.8 225.3L449.3 222.2L447.9 219.1L446.4 215.9L445 212.8L443.5 209.6L442.1 206.5L440.6 203.3L439.2 200.2L437.7 197.1L436.3 193.9L434.8 190.8L433.4 187.6L431.9 184.5L430.5 181.3L429 178.2L427.6 175L426.1 171.9L424.7 168.8L423.2 165.6L421.8 162.5L420.3 159.3L418.9 156.2L417.4 153L416 149.9L414.5 146.8L413.1 143.6L411.6 140.5L410.2 137.3L408.7 134.2L407.3 131L405.8 127.9L404.4 124.7L402.9 121.6L401.5 118.5L400 115.3L398.6 112.2L397.1 109L395.7 105.9L394.2 102.7L392.8 99.6L391.3 96.5L389.9 93.3L388.4 90.2L387 87L385.5 83.9L384.1 80.8L382.6 77.6L381.2 74.5L379.7 71.3L378.3 68.2L376.8 65L375.4 61.9L373.9 58.7L372.5 55.6L371.1 52.5L369.6 49.3L368.2 46.2L366.7 43L365.3 39.9L363.8 36.8L362.4 33.6L360.9 30.5L359.5 27.3L358 24.2L356.6 21.1L355.1 17.9L353.7 14.8L352.2 11.6L350.8 8.5L349.3 5.3L347.9 2.2L346.9 0L343.3 0.7L339.7 1.4L336.1 2.2L332.5 2.9L328.9 3.6L325.3 4.4L321.7 5.1L318.1 5.8L314.5 6.5L310.9 7.3L307.3 8L303.7 8.7L300.1 9.5L296.5 10.2L292.9 11L289.3 11.7L285.7 12.4L282.1 13.2L278.5 13.9L274.9 14.6L271.3 15.4L267.7 16.1L264.1 16.8L260.5 17.6L256.9 18.3L253.3 19.1L249.7 19.8L246.1 20.5L242.5 21.3L238.9 22L235.3 22.7L231.7 23.5L228.1 24.2L224.5 24.9L220.9 25.7L217.3 26.4L213.7 27.2L210.1 27.9L206.5 28.6L202.9 29.4L199.3 30.1L195.7 30.8L192.1 31.6L188.5 32.3L184.9 33.1L181.3 33.8L177.7 34.5L174.1 35.3L170.5 36L166.9 36.7L166 38.6Z" 
                  fill="#BFDBFE" 
                  stroke="#60A5FA" 
                  strokeWidth="2" 
                />
              </svg>

              {/* Location Pins */}
              {LOCATIONS.map((loc) => (
                <button
                  key={`pin-${loc.id}`}
                  onClick={() => setSelectedLocation(loc)}
                  className="absolute transition-transform duration-300 hover:scale-150"
                  style={{ top: loc.mapCoordinates.top, left: loc.mapCoordinates.left }}
                >
                  <div className="relative flex items-center justify-center">
                    {selectedLocation.id === loc.id && (
                      <div className="absolute w-6 h-6 bg-ag-lime rounded-full animate-ping opacity-75" />
                    )}
                    <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${
                      selectedLocation.id === loc.id ? 'bg-ag-lime' : 'bg-ag-green-950'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Project Detail Card (25%) */}
          <div className="lg:col-span-3 flex items-center">
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
