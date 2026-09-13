import React from 'react';

export default function SectionEyebrow({ 
  text, 
  center = false, 
  dark = false,
  badge = null 
}) {
  return (
    <div className={`flex items-center gap-2.5 mb-2 ${center ? 'justify-center' : 'justify-start'}`}>
      <span className="w-4 h-[2px] bg-shield-gold inline-block"></span>
      <span 
        className={`text-xs uppercase font-bold tracking-widest ${
          dark ? 'text-blue-300' : 'text-accent-blue'
        }`}
      >
        {text}
      </span>
      {badge && (
        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
          {badge}
        </span>
      )}
      {center && <span className="w-4 h-[2px] bg-shield-gold inline-block"></span>}
    </div>
  );
}
