import MouseBackground from "@/components/MouseBackground";
import FloatingPlush from "@/components/FloatingPlush";
import WalkingCharacter from "@/components/WalkingCharacter";
import ProfileCard from "@/components/ProfileCard";
import SocialLinks from "@/components/SocialLinks";
import DailyQuote from "@/components/DailyQuote";
import MusicPlayer from "@/components/MusicPlayer";
import HeartCursor from "@/components/HeartCursor";
import { motion } from "framer-motion";

// Import all plush images
import mikuPlush from "@/assets/miku-plush.png";
import reiPlush from "@/assets/rei-plush.png";
import yuriPlush from "@/assets/yuri-plush.png";
import yuriSticker from "@/assets/yuri-sticker.png";
import monikaSticker from "@/assets/monika-sticker.png";
import sayoriSticker from "@/assets/sayori-sticker.png";
import natsukiSticker from "@/assets/natsuki-sticker.png";
import yuriChibi from "@/assets/yuri-chibi.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive Background */}
      <MouseBackground />
      
      {/* Heart particles on click */}
      <HeartCursor />
      
      {/* Walking Character */}
      <WalkingCharacter />
      
      {/* Floating Plushies */}
      <FloatingPlush
        src={mikuPlush}
        alt="Miku Plush"
        size="lg"
        position={{ top: "5%", left: "3%" }}
        delay={0}
      />
      <FloatingPlush
        src={reiPlush}
        alt="Rei Plush"
        size="md"
        position={{ top: "10%", right: "5%" }}
        delay={0.2}
      />
      <FloatingPlush
        src={yuriPlush}
        alt="Yuri Plush"
        size="lg"
        position={{ bottom: "15%", left: "2%" }}
        delay={0.4}
      />
      <FloatingPlush
        src={yuriChibi}
        alt="Yuri Chibi"
        size="md"
        position={{ bottom: "20%", right: "3%" }}
        delay={0.6}
      />
      
      {/* Small stickers */}
      <FloatingPlush
        src={yuriSticker}
        alt="Yuri Sticker"
        size="sm"
        position={{ top: "40%", left: "5%" }}
        delay={0.3}
      />
      <FloatingPlush
        src={monikaSticker}
        alt="Monika Sticker"
        size="sm"
        position={{ top: "30%", right: "8%" }}
        delay={0.5}
      />
      <FloatingPlush
        src={sayoriSticker}
        alt="Sayori Sticker"
        size="sm"
        position={{ bottom: "35%", left: "8%" }}
        delay={0.7}
      />
      <FloatingPlush
        src={natsukiSticker}
        alt="Natsuki Sticker"
        size="sm"
        position={{ top: "60%", right: "5%" }}
        delay={0.9}
      />

      {/* Main Content */}
      <main className="relative z-20 container mx-auto px-4 py-12 md:py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-comfortaa text-center text-gradient mb-12"
        >
          Bem-vindo! 🌸
        </motion.h1>

        {/* Cards Grid */}
        <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
          <ProfileCard />
          <SocialLinks />
          <DailyQuote />
        </div>

        {/* Footer decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 text-muted-foreground/60 text-sm"
        >
          <p className="font-quicksand">feito com 💕</p>
        </motion.div>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
