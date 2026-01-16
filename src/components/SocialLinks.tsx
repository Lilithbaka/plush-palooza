import { motion } from "framer-motion";
import { Music, Gamepad2 } from "lucide-react";

const socials = [
  {
    name: "Steam",
    url: "https://steamcommunity.com/profiles/76561198997956452/",
    icon: Gamepad2,
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:shadow-blue-400/40",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31ue3nq5omp2vugddengsjhq6hfq?si=cdc43fcaef734dcd",
    icon: Music,
    color: "from-green-400 to-green-600",
    hoverColor: "hover:shadow-green-400/40",
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card rounded-2xl p-6 shadow-kawaii max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold font-comfortaa text-center text-gradient mb-6">
        Me Encontre ✨
      </h3>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${social.color} text-white font-medium shadow-lg transition-all duration-300 ${social.hoverColor} hover:shadow-xl hover:-translate-y-1`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5" />
            {social.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
