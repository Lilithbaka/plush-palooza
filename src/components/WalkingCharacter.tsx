import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import natsukiChibi from "@/assets/natsuki-chibi.png";

const messages = [
  "Oiii! Bem-vindo! ✨",
  "Gostou do site? 💕",
  "Não esquece de seguir! 🌸",
  "Que fofoo você aqui! 💖",
  "Ado é a melhor! 🎵",
  "Curti ficar aqui! ☁️",
  "Volta sempre! 🌟",
];

const WalkingCharacter = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState(messages[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 22000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 8000);

    return () => {
      clearTimeout(bubbleTimer);
      clearTimeout(hideTimer);
    };
  }, [key]);

  return (
    <motion.div
      key={key}
      className="fixed bottom-8 z-50 pointer-events-none"
      initial={{ x: -200 }}
      animate={{ x: "calc(100vw + 200px)" }}
      transition={{
        duration: 20,
        ease: "linear",
      }}
    >
      <div className="relative">
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="glass-card px-4 py-2 rounded-2xl text-sm font-medium text-foreground shadow-kawaii">
                {message}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-card/80 backdrop-blur-md border-r border-b border-border/50" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.img
          src={natsukiChibi}
          alt="Natsuki walking"
          className="w-28 h-28 object-contain"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default WalkingCharacter;
