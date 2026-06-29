"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

interface CategoryCardProps {
  title: string;
  description: string;
  participants: string;
  prize: string;
}

export default function CategoryCard({
  title,
  description,
  participants,
  prize,
}: CategoryCardProps) {
  return (
    <TiltCard>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_18px_50px_rgba(6,182,212,0.15)]"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative flex h-full flex-col items-center text-center">

          {/* Title */}
          <h3 className="text-3xl font-black leading-tight whitespace-pre-line text-white">
            {title}
          </h3>

          {/* Divider */}
          <div className="my-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          {/* Description */}
          <p className="max-w-[320px] text-base leading-8 text-slate-300">
            {description}
          </p>

          {/* Details */}
          <div className="mt-8 space-y-2">

            <p className="text-2xl font-bold text-cyan-400">
              {participants}
            </p>

            <p className="text-xl font-semibold text-purple-400">
              {prize}
            </p>

          </div>

          {/* Button */}
          <div className="mt-auto pt-8">

            <button className="rounded-full border border-cyan-500/40 px-7 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white">
              Learn More →
            </button>

          </div>

        </div>
      </motion.div>
    </TiltCard>
  );
}