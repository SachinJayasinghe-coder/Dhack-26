"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
}

export default function TiltCard({
  children,
}: TiltCardProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: -8,
        rotateY: 8,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}