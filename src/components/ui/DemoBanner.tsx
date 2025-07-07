import React from 'react';
import { Info, X } from 'lucide-react';

interface DemoBannerProps {
  onClose: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4" />
          <span className="text-sm font-medium">
            Demo Mode: Currently using mock data. 
            <span className="hidden sm:inline"> Deploy Firebase rules and add sample data to use real database.</span>
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close demo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
