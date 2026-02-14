"use client";
import HandWrittenText from "@/components/HandwrittenText";
import { motion } from "framer-motion";

const Home = () => {
  // Explication du SVG :
  // On crée un carré de 20x20.
  // On dessine deux lignes diagonales qui se croisent (une croix).
  // En se répétant, ces croix forment un quadrillage diagonal parfait.
  // Couleur des lignes : %23cfb8c0 (un rose/gris un peu plus foncé que le fond)
  const diagonalPattern = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23cfb8c0' stroke-width='0.5' stroke-opacity='0.6'%3E%3Cpath d='M0 20L20 0'/%3E%3Cpath d='M0 0L20 20'/%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div 
      className="cursor-pointer h-full w-full flex flex-col items-center justify-center p-4 gap-6" 
      onClick={() => window.location.href="/ma-valentine"}
      style={{
        backgroundColor: "#f9e6ea", // Votre fond rose pâle de base
        backgroundImage: `url("${diagonalPattern}")`, // Le quadrillage SVG
      }}
    >
      <HandWrittenText className="active:scale-90 transition-all"/>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="text-gray-500/70 text-xs font-medium mt-4 animate-bounce"
      >
        Clique n'importe où ma choubidou d'amour...
      </motion.p>
    </div>
  );
};

export default Home;