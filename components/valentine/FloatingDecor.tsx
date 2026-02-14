// components/valentine/FloatingDecor.tsx
import React from "react";
import { motion, TargetAndTransition, Transition } from "framer-motion";

interface FloatingDecorProps {
  src: string;
  alt: string;
  className: string;
  animate: TargetAndTransition;
  transition: Transition;
}

export const FloatingDecor: React.FC<FloatingDecorProps> = ({
  src,
  alt,
  className,
  animate,
  transition,
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute ${className}`}
      animate={animate}
      transition={transition}
    />
  );
};