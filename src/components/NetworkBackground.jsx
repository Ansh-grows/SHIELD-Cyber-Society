import React from 'react';

export default function NetworkBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Soft gradient spotlights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-shield-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle geometric node & circuit grid */}
      <svg className="w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="network-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3D6FA6" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="1.5" fill="#3D6FA6" fillOpacity="0.6" />
            <circle cx="120" cy="0" r="1.5" fill="#3D6FA6" fillOpacity="0.6" />
            <circle cx="60" cy="60" r="1.5" fill="#C5A059" fillOpacity="0.5" />
            <path d="M 60 60 L 120 0" fill="none" stroke="#3D6FA6" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
            <path d="M 0 120 L 60 60" fill="none" stroke="#3D6FA6" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-grid)" />
      </svg>
    </div>
  );
}
