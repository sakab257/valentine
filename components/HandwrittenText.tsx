"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HandwritingProps {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}

const HandwritingViewer: React.FC<HandwritingProps> = ({
  color = "#000000",
  strokeWidth = 15,
  duration = 3,
  className = ""
}) => {
  
  // CORRECTION ICI :
  // 1. On commence à x=-50 et y=-50 pour laisser de la marge à gauche et en haut
  // 2. On augmente la largeur (950) et la hauteur (400) pour tout inclure
  const myViewBox = "-50 -50 1000 450"; 
  
  const path1_d = "M3.00046 255.5C48.5005 228.167 137.8 152 131 66C122.5 -41.5 12.5005 142.5 39.5005 199C66.5005 255.5 140 291 148.5 215C157 139 75.5005 183 82.5005 199C88.1005 211.8 161.167 185 197 170L282.5 129.5C245.334 142.333 159.714 195.158 203.5 229.5C254.5 269.5 284.5 160 284.5 133C284.5 106 289 252.5 361 229.5C418.6 211.1 419 138.5 384 122C400.334 125.667 436.6 130.3 451 119.5C447.834 155.833 449.6 227.7 482 224.5C522.5 220.5 549 52 549 3C545.5 64.6667 546.843 219.3 590 224.5C631.5 229.5 731.834 153 776 122C738.667 143.333 676.69 186.77 708 215C738.5 242.5 790.5 215 776 126.5C773.167 159.667 793.7 232.1 848.5 224.5";
  const path2_d = "M477.5 59.5H617.5"; 

  const mainTextVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: duration, ease: "easeInOut" },
        opacity: { duration: 0.01 }
      }
    }
  };

  const tBarVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: duration, duration: 0.5, ease: "easeOut" },
        opacity: { delay: duration, duration: 0.01 }
      }
    }
  };

  return (
    // J'ai enlevé la hauteur fixe et le background rouge pour que ce soit propre
    <div className={className} style={{ width: '100%', maxWidth: '1000px' }}>
      <motion.svg
        viewBox={myViewBox}
        // IMPORTANT : height: 'auto' permet de respecter le ratio du viewBox sans écraser le texte
        style={{ width: '100%', height: 'auto', display: 'block' }}
        initial="hidden"
        animate="visible"
      >
        <motion.path 
          d={path1_d} 
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={mainTextVariants} 
        />

        {path2_d && (
           <motion.path 
             d={path2_d} 
             fill="transparent"
             stroke={color}
             strokeWidth={strokeWidth}
             strokeLinecap="round"
             strokeLinejoin="round"
             variants={tBarVariants} 
           />
        )}
      </motion.svg>
    </div>
  );
};

export default HandwritingViewer;