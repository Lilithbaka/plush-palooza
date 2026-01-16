import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartParticle {
  id: number;
  x: number;
  y: number;
}

const HeartCursor = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const minInterval = 100; // Minimum ms between hearts

    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;

      const newHeart: HeartParticle = {
        id: now,
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => [...prev.slice(-10), newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none z-50"
          initial={{ 
            x: heart.x - 10, 
            y: heart.y - 10, 
            opacity: 1, 
            scale: 0 
          }}
          animate={{ 
            y: heart.y - 60, 
            opacity: 0, 
            scale: 1.5,
            rotate: Math.random() * 40 - 20,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heart 
            className="w-5 h-5 fill-kawaii-pink text-kawaii-pink" 
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default HeartCursor;
