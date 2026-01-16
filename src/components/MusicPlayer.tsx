import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a free lofi music from a CDN
  const musicUrl = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user needs to interact first
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <audio ref={audioRef} src={musicUrl} preload="auto" />
      
      <div className="glass-card rounded-full p-2 shadow-kawaii flex items-center gap-2">
        <motion.button
          onClick={togglePlay}
          className={`p-3 rounded-full transition-all ${
            isPlaying 
              ? "bg-gradient-to-r from-kawaii-pink to-kawaii-purple text-white" 
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Music className="w-5 h-5" />
            </motion.div>
          ) : (
            <Music className="w-5 h-5" />
          )}
        </motion.button>

        {isPlaying && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            className="flex items-center gap-2 pr-2"
          >
            <button
              onClick={() => setVolume(volume > 0 ? 0 : 0.3)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {volume > 0 ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 rounded-full appearance-none bg-muted cursor-pointer accent-kawaii-pink"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
