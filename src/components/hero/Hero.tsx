"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroScene from "./HeroScene";
import Particles from "./Particles";
import Countdown from "./Countdown";
import RobotCanvas from "@/components/robot/RobotCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background */}
      <Particles />

      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/40 to-[#050816]" />

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Hero */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start">

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-7 py-3 backdrop-blur-xl"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                INNOVATE • DESIGN • IMPACT
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="mt-8 text-center leading-none lg:text-left"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl xl:text-[9rem]">
                DHACK'26
              </span>
            </motion.h1>

            {/* Information Cards */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="mt-10 flex w-full flex-col gap-5"
>

  {/* What is DHACK */}
  <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10">
    <h3 className="mb-3 text-lg font-bold text-cyan-400">
      What is DHACK?
    </h3>

    <p className="text-sm leading-7 text-slate-300">
      DHACK'26 is Sri Lanka's premier business idea generation and
      mobile application design competition, bringing together
      innovators to transform bold ideas into impactful digital
      solutions.
    </p>
  </div>

  {/* Our Mission */}
  <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10">
    <h3 className="mb-3 text-lg font-bold text-cyan-400">
      Our Mission
    </h3>

    <p className="text-sm leading-7 text-slate-300">
      Empower future innovators through creativity, collaboration,
      design thinking and entrepreneurship to solve meaningful
      real-world challenges that create positive impact for society.
    </p>
  </div>

</motion.div>
            

          </div>
                    {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center lg:justify-end">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="relative flex h-[700px] w-full items-center justify-center"
            >

              {/* Robot Container */}
              <div className="relative h-[650px] w-full max-w-[650px]">

                <RobotCanvas />

              </div>

              {/* Platform Glow */}
              <div className="absolute bottom-24 left-1/2 h-16 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />

            </motion.div>

          </div>
                  </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">

          <div className="mt-2 h-3 w-1 rounded-full bg-white" />

        </div>
      </motion.div>

    </section>
  );
}