import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React","Next.js","JavaScript","Node.js","Laravel","TailwindCSS",
  "Python","C#","ASP.NET","Figma","Canva","Microsoft Azure",
  "Amazon Lightsail","Vercel","Docker","MySQL","Supabase","Firebase"
];

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

const Skills = () => {
  const sectionRef = useRef(null);
  const trailContainerRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    let lastX = 0;
    let lastY = 0;
    let lastSpawnTime = 0;
    const distanceThreshold = 70;   // px movement before new icon
    const timeThreshold = 180;      // ms between spawns

    const createTrailIcon = (x, y) => {
      const icon = document.createElement("img");
      const skill = skills[Math.floor(Math.random() * skills.length)];
      icon.src = skillIcons[skill];
      icon.alt = skill;
      icon.className = "fixed w-7 h-7 pointer-events-none";
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
      icon.style.transform = "translate(-50%, -50%)";
      icon.style.filter = "brightness(0) saturate(100%) invert(1)";
      trailContainerRef.current.appendChild(icon);

      // GSAP animation: longer linger
      gsap.fromTo(
        icon,
        { scale: 3, opacity: 1 },
        {
          scale: 2.5,
          opacity: 0,
          duration: 2,      // longer duration for lingering effect
          ease: "power2.out",
          onComplete: () => icon.remove()
        }
      );
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const now = Date.now();

      // Spawn only if distance & time thresholds met
      if (dist > distanceThreshold && now - lastSpawnTime > timeThreshold) {
        createTrailIcon(x, y);
        lastX = x;
        lastY = y;
        lastSpawnTime = now;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".skill-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen px-9 border-t border-b flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-primary)",
        borderTopColor: "var(--color-secondary)",
        borderBottomColor: "var(--color-secondary)",
      }}
    >
      <div className="w-full max-w-6xl grid grid-cols-2 gap-8">
        <h2
          className="font-main text-6xl font-medium"
          style={{ color: "var(--color-background)" }}
        >
          MY EXPERTISE ↗
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-item font-main text-sm uppercase tracking-wide"
              style={{ color: "var(--color-background)" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Container for animated trail icons */}
      <div
        ref={trailContainerRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </section>
  );
};

export default Skills;
