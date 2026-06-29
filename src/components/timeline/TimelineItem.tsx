"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  index: number;
}

export default function TimelineItem({
  title,
  date,
  description,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="relative flex items-center"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 z-20 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-[0_0_25px_#00bfff]" />

      {/* Content */}
      <div
        className={`w-full md:w-[45%] ${
          index % 2 === 0
            ? "mr-auto md:text-right"
            : "ml-auto md:text-left"
        }`}
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {date}
          </p>

          <h3 className="mb-3 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="leading-relaxed text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}