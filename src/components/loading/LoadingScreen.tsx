"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(Math.floor(value));
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Content */}
      <div className="relative flex w-full max-w-xl flex-col items-center px-8">

        {/* Logo */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center text-6xl font-black tracking-tight md:text-8xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DHACK'26
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-6 text-center text-sm uppercase tracking-[0.45em] text-cyan-300"
        >
          Initializing Experience...
        </motion.p>

        {/* Loading Bar */}

        <div className="mt-14 h-[12px] w-full overflow-hidden rounded-full bg-white/10">

          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              ease: "easeOut",
            }}
            className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >

            {/* Glow */}

            <div className="absolute right-0 top-0 h-full w-16 bg-white/40 blur-lg" />

          </motion.div>

        </div>

        {/* Percentage */}

        <motion.h2
          key={progress}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8 text-4xl font-black text-white"
        >
          {progress}%
        </motion.h2>

        {/* Bottom Text */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-4 text-center text-lg text-slate-400"
        >
          Innovate • Design • Impact
        </motion.p>

      </div>
    </motion.div>
  );
}