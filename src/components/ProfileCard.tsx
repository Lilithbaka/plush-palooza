import { motion } from "framer-motion";
import profilePic from "@/assets/profile-pic.png";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 md:p-8 shadow-kawaii-lg max-w-md mx-auto"
    >
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kawaii-pink to-kawaii-purple opacity-50 blur-xl" />
        <img
          src={profilePic}
          alt="Foto de perfil"
          className="relative w-full h-full rounded-full object-cover border-4 border-kawaii-softPink shadow-kawaii"
        />
        
        {/* Decorative ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-kawaii-pink/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <h2 className="text-2xl md:text-3xl font-bold font-comfortaa text-center text-gradient mb-4">
        Sobre Mim 💕
      </h2>
      
      <p className="text-center text-foreground/80 leading-relaxed">
        Ado lover, Pessoa cheia de problema não consertável, não gosto de pessoa enchendo o saco
      </p>
    </motion.div>
  );
};

export default ProfileCard;
