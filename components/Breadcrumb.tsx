import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <div
      className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest w-fit px-4 py-2 rounded-full border ${
        isLight
          ? 'text-ag-green-950 bg-gray-50 border-gray-100'
          : 'text-white/50 bg-white/5 backdrop-blur-md border-white/10 shadow-sm'
      }`}
    >
      <Home className="w-2.5 h-2.5 shrink-0" />
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                className={`w-2.5 h-2.5 shrink-0 ${isLight ? 'opacity-50' : 'opacity-30'}`}
              />
            )}
            <span
              onClick={item.onClick}
              className={`${item.onClick ? `cursor-pointer transition-colors ${isLight ? 'hover:text-ag-lime' : 'hover:text-white'}` : ''} ${
                isLast
                  ? isLight ? 'text-ag-green-950' : 'text-white'
                  : 'opacity-50'
              }`}
            >
              {item.label}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
