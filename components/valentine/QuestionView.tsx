// components/valentine/QuestionView.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDecor } from "./FloatingDecor";

interface QuestionViewProps {
  onYes: () => void;
  onNo: () => void;
  noCount: number;
  diagonalPattern: string;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  onYes,
  onNo,
  noCount,
  diagonalPattern,
}) => {
  // État pour stocker la position (top, left) du bouton Non
  // null = position initiale (dans le flux normal)
  const [noButtonPos, setNoButtonPos] = useState<{ top: string; left: string } | null>(null);

  const phrases = [
    "Oui", "Tu es sûre ?", "Vraiment sûre ?", "Pense-y bien !", 
    "Dernière chance !", "Please...", "Je vais pleurer...", 
    "STOP OH !", "S'il te plaît...", "OUI"
  ];
  
  const yesButtonText = phrases[Math.min(noCount, phrases.length - 1)];
  const yesButtonScale = 1 + noCount * 0.2;
  const showNoButton = noCount < phrases.length - 1;

  // Fonction pour bouger le bouton à une position aléatoire
  const moveNoButton = () => {
    // On génère une position aléatoire entre 10% et 90% de l'écran
    // pour éviter qu'il soit collé au bord
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10% à 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% à 90%

    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
    
    // On appelle aussi la fonction parente pour augmenter le compteur
    onNo();
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden relative"
      style={{
        backgroundColor: "#f9e6ea",
        backgroundImage: `url("${diagonalPattern}")`,
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');`}</style>

      {/* Conteneur principal */}
      <div className="relative w-full max-w-md md:max-w-2xl flex flex-col items-center text-center">
        
        {/* --- DÉCORATIONS (Code inchangé) --- */}
        <FloatingDecor
          src="/cute-teddy-bear-holding-heart-symbolizing-love-free-png.png"
          alt="Ourson mignon"
          className="z-10 w-36 -top-16 -left-4 md:w-56 md:-top-32 md:-left-20"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        <FloatingDecor src="/ballon-coeur.png" alt="Ballon" className="z-0 w-16 -top-8 -left-2 md:w-48 md:-top-40 md:-left-32 rotate-[-15deg]" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
        <FloatingDecor src="/coeur-ailes.png" alt="Ailes" className="z-0 w-16 -top-6 -right-1 md:w-40 md:-top-36 md:-right-24 rotate-15" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }} />
        <FloatingDecor src="/lettre.png" alt="Lettre" className="z-0 w-18 -bottom-12 left-0 md:w-44 md:-bottom-40 md:-left-28 rotate-[-10deg]" animate={{ rotate: [-10, -5, -10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
        <FloatingDecor src="/coeur-fleche.png" alt="Fleche" className="z-0 w-18 -bottom-10 -right-1 md:w-44 md:-bottom-32 md:-right-24 rotate-10" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />


        {/* --- TITRE --- */}
        <h1
          className="relative z-10 text-5xl md:text-7xl font-bold text-[#800020] mb-8 md:mb-12 drop-shadow-sm leading-tight select-none my-4"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Veux-tu être <br /> ma Valentine ?
        </h1>

        {/* --- BOUTONS --- */}
        <div className="max-w-[95%] w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center relative z-20 mb-4 h-20">
          
          {/* BOUTON OUI (Reste centré) */}
          <motion.button
            layout
            onClick={onYes}
            style={{ scale: yesButtonScale, backgroundColor: "#800020" }}
            whileHover={{ scale: yesButtonScale * 1.05 }}
            whileTap={{ scale: yesButtonScale * 0.95 }}
            className="px-8 py-3 rounded-full text-white font-bold shadow-lg transition-colors z-30"
          >
            {yesButtonText}
          </motion.button>

          {/* BOUTON NON (Devient fou) */}
          <AnimatePresence>
            {showNoButton && (
              <motion.button
                // Si noButtonPos est null, on n'anime pas la position (position static par défaut)
                // Sinon, on anime vers les nouvelles coordonnées top/left
                initial={false}
                animate={
                  noButtonPos 
                    ? { top: noButtonPos.top, left: noButtonPos.left, position: "fixed" } 
                    : {}
                }
                transition={{ type: "spring", stiffness: 400, damping: 25 }} // Mouvement rapide et rebondissant
                
                onClick={moveNoButton} // Au clic, on change la position
                onHoverStart={moveNoButton} // Optionnel : bouge aussi au survol (version Hardcore !)
                
                // Style de base
                className={`
                    px-8 py-3 rounded-full bg-white text-gray-700 font-bold shadow-md 
                    hover:bg-gray-100 transition-colors border-2 border-transparent 
                    hover:border-gray-200 min-w-25 z-50
                    ${noButtonPos ? "fixed" : "relative"} 
                `}
              >
                Non
              </motion.button>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
};