// components/valentine/SuccessView.tsx
import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Heart } from 'lucide-react';


interface SuccessViewProps {
  diagonalPattern: string;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ diagonalPattern }) => {
  const { width, height } = useWindowSize();

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4"
      style={{
        backgroundColor: "#f9e6ea",
        backgroundImage: `url("${diagonalPattern}")`,
      }}
    >
      <Confetti width={width} height={height} numberOfPieces={500} recycle={false} />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative z-10 text-center w-full max-w-lg"
      >
        <motion.img
          src="/coeur-ailes.png"
          alt="Coeur ailé"
          className="w-32 md:w-40 mx-auto mb-6"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        <h1
          className="text-4xl md:text-5xl font-bold text-[#800020] mb-6 drop-shadow-sm leading-tight"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          LETSGOOOOOOOO !!! <br />
          
          <span className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
            <span className="flex items-center gap-6">
                <Heart className="h-8 w-8 md:h-10 md:w-10 animate-ping fill-[#800020] stroke-none"/> 
                Je t'aime ! 
                <Heart className="h-8 w-8 md:h-10 md:w-10 animate-ping fill-[#800020] stroke-none"/>
            </span>
          </span>
          <span className="text-lg">
            C'est parti pour vivre une looooongue et heureuse vie à deux heheheheheheh
          </span>
        </h1>
      </motion.div>
    </div>
  );
};