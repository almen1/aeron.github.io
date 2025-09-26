import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-8" style={{ borderBottom: '1px solid var(--color-secondary)' }}>
      <div className="flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="inline-flex items-center px-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-light" style={{ color: 'var(--color-secondary)' }}>
                LET'S TALK 
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
