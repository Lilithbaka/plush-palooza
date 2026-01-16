import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%,
              hsl(340 80% 85% / 0.6) 0%,
              hsl(320 70% 80% / 0.4) 25%,
              hsl(280 60% 75% / 0.5) 50%,
              hsl(270 50% 85% / 0.4) 75%,
              hsl(320 60% 90% / 0.3) 100%
            )
          `,
        }}
      />
      
      {/* Sparkle dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="sparkle-dot"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Soft glow orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(340 80% 80% / 0.2) 0%, transparent 70%)",
          left: `${mousePosition.x - 10}%`,
          top: `${mousePosition.y - 10}%`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default MouseBackground;
