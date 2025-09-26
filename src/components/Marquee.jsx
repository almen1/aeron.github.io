import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const [scrollY, setScrollY] = useState(0);
  const marqueeRef = useRef(null);

  // Skills data with SimpleIcon logos and names
  const skillIcons = {
    "React": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
    "JavaScript": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
    "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
    "Laravel": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
    "TailwindCSS": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
    "Python": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
    "C#": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg",
    "ASP.NET": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg",
    "Figma": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
    "Canva": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg",
    "Microsoft Azure": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg",
    "Amazon Lightsail": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
    "Vercel": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
    "Docker": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
    "MySQL": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg",
    "Supabase": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg",
    "Firebase": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg"
  };

  // Different content for each row
  const row1Skills = [
    'React', 'Next.js', 'JavaScript', 'Node.js', 'Laravel', 'TailwindCSS'
  ];

  const row2Skills = [
    'Python', 'C#', 'ASP.NET', 'Figma', 'Canva', 'Microsoft Azure'
  ];

  const row3Skills = [
    'Amazon Lightsail', 'Vercel', 'Docker', 'MySQL', 'Supabase', 'Firebase'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate speed multiplier based on scroll position
  const getSpeedMultiplier = (baseSpeed) => {
    const scrollFactor = Math.min(scrollY / 1000, 3); // Max 3x speed
    return baseSpeed * (1 + scrollFactor);
  };

  return (
    <div className="w-full overflow-hidden py-8 border-t" style={{
      borderBottom: '1px solid var(--color-secondary)',
      borderTopColor: 'var(--color-secondary)'
    }}>
      {/* Row 1 - Scroll to the right */}
      <div className="flex items-center mb-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: getSpeedMultiplier(400),
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex">
              {row1Skills.map((skill, idx) => (
                <div key={`row1-${i}-${idx}`} className="inline-flex items-center px-8 mx-4">
                  <img
                    src={skillIcons[skill]}
                    alt={skill}
                    className="w-10 h-10 mr-4"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%)' }}
                  />
                  <span className="text-2xl font-medium uppercase tracking-wide" style={{ color: 'var(--color-secondary)' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 – Scroll to the right, already filled */}
      <div className="flex items-center mb-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: '0%' }}               // content is already visible/filling the row
          animate={{ x: ['0%', '100%'] }}     // move everything to the right
          transition={{
            repeat: Infinity,
            duration: getSpeedMultiplier(400),
            ease: 'linear',
          }}
        >
          {/* Duplicate enough times to cover the container width */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex">
              {row2Skills.map((skill, idx) => (
                <div
                  key={`row2-${i}-${idx}`}
                  className="inline-flex items-center px-8 mx-4"
                >
                  <img
                    src={skillIcons[skill]}
                    alt={skill}
                    className="w-10 h-10 mr-4"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%)' }}
                  />
                  <span
                    className="text-2xl font-medium uppercase tracking-wide"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>


      {/* Row 3 - Scroll to the right */}
      <div className="flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: getSpeedMultiplier(400),
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex">
              {row3Skills.map((skill, idx) => (
                <div key={`row3-${i}-${idx}`} className="inline-flex items-center px-8 mx-4">
                  <img
                    src={skillIcons[skill]}
                    alt={skill}
                    className="w-10 h-10 mr-4"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%)' }}
                  />
                  <span className="text-2xl font-medium uppercase tracking-wide" style={{ color: 'var(--color-secondary)' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
