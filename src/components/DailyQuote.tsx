import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Edit3, Check } from "lucide-react";

const DEFAULT_QUOTE = "✨ Hoje é um dia fofo para ser feliz! 💕";

const DailyQuote = () => {
  const [quote, setQuote] = useState(DEFAULT_QUOTE);
  const [isEditing, setIsEditing] = useState(false);
  const [tempQuote, setTempQuote] = useState(quote);

  useEffect(() => {
    const savedQuote = localStorage.getItem("dailyQuote");
    if (savedQuote) {
      setQuote(savedQuote);
      setTempQuote(savedQuote);
    }
  }, []);

  const handleSave = () => {
    setQuote(tempQuote);
    localStorage.setItem("dailyQuote", tempQuote);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
    if (e.key === "Escape") {
      setTempQuote(quote);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-card rounded-2xl p-6 shadow-kawaii max-w-md mx-auto relative overflow-hidden"
    >
      {/* Decorative sparkles */}
      <motion.div
        className="absolute top-2 left-4 text-kawaii-pink"
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        className="absolute top-2 right-4 text-kawaii-purple"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <h3 className="text-lg font-bold font-comfortaa text-center text-gradient mb-4">
        Frase do Dia 🌸
      </h3>

      <div className="relative min-h-[60px] flex items-center justify-center">
        {isEditing ? (
          <div className="w-full flex gap-2">
            <input
              type="text"
              value={tempQuote}
              onChange={(e) => setTempQuote(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-4 py-2 rounded-xl bg-background/50 border border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none text-center text-foreground"
              autoFocus
              placeholder="Digite sua frase..."
            />
            <motion.button
              onClick={handleSave}
              className="p-2 rounded-xl bg-gradient-to-r from-kawaii-pink to-kawaii-purple text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Check className="w-5 h-5" />
            </motion.button>
          </div>
        ) : (
          <motion.p
            className="text-center text-foreground/90 italic text-lg"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            "{quote}"
          </motion.p>
        )}
      </div>

      {!isEditing && (
        <motion.button
          onClick={() => setIsEditing(true)}
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-kawaii-lavender/50 text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          title="Editar frase"
        >
          <Edit3 className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default DailyQuote;
