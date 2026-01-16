import { motion } from "framer-motion";

interface FloatingPlushProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const FloatingPlush = ({ src, alt, className = "", size = "md", delay = 0, position }: FloatingPlushProps) => {
  const sizes = {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-32 h-32 md:w-40 md:h-40",
  };

  return (
    <motion.div
      className={`absolute z-10 pointer-events-none ${className}`}
      style={position}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { 
          duration: 4 + Math.random() * 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${sizes[size]} object-contain drop-shadow-lg`}
      />
    </motion.div>
  );
};

export default FloatingPlush;
