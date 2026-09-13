import React from 'react';
import { motion } from 'framer-motion';

export default function InfoCard({
  icon: Icon,
  label,
  value,
  description,
  badge = null,
  highlight = false,
  className = '',
  action = null
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white border ${
        highlight 
          ? 'border-accent-blue/40 shadow-card-hover ring-1 ring-accent-blue/20' 
          : 'border-shield-border shadow-card'
      } rounded-xl p-5 hover:border-accent-blue/50 transition-all duration-300 ${className}`}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent-subtle border border-accent-blue/20 flex items-center justify-center text-accent-blue">
            <Icon className="w-5 h-5 text-accent-blue" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-accent-blue">
              {label}
            </span>
            {badge && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-shield-bgLight text-navy-800 border border-shield-border">
                {badge}
              </span>
            )}
          </div>
          {value && (
            <h4 className="text-base sm:text-lg font-bold font-heading text-navy-800 tracking-tight mb-1">
              {value}
            </h4>
          )}
          {description && (
            <p className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
              {description}
            </p>
          )}
          {action && (
            <div className="mt-3">
              {action}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
