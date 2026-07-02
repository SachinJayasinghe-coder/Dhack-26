"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050816] px-6 py-36"
    >
      {/* ==========================================
                BACKGROUND EFFECTS
      =========================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-220px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-[-180px] bottom-0 h-[380px] w-[380px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ==========================================
                    SECTION HEADER
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mb-24 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-6">

            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500" />

            <span className="text-sm uppercase tracking-[0.55em] text-cyan-400">
              Frequently Asked Questions
            </span>

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />

          </div>

          <h2 className="text-6xl font-black md:text-8xl">

            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">

              FAQ

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Everything you need to know before participating in
            <span className="font-semibold text-cyan-400">
              {" "}DHACK 2026
            </span>.
            Browse the answers below, and if you still have questions,
            feel free to contact our organizing committee.

          </p>

        </motion.div>

        {/* ==========================================
                  FAQ ACCORDION
        =========================================== */}

        <div className="space-y-10">
                    {faqData.map((item, index) => {
            const isOpen = active === index;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500

                ${
                  isOpen
                    ? "border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 via-[#0c1226] to-purple-500/10 shadow-[0_0_40px_rgba(6,182,212,.18)]"
                    : "border-white/10 bg-white/[0.04] hover:border-cyan-500/30 hover:bg-white/[0.06]"
                }`}
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100

                  ${
                    isOpen
                      ? "opacity-100"
                      : ""
                  }`}
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

                </div>

                {/* Top Border */}

                <div
                  className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500

                  ${
                    isOpen
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Question */}

                <button
                  onClick={() =>
                    setActive(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  className="relative flex w-full items-center justify-center px-10 py-8"
                >

                  <span
                    className={`mx-auto text-center text-2xl font-bold leading-9 transition-colors duration-300

                    ${
                      isOpen
                        ? "text-cyan-300"
                        : "text-white group-hover:text-cyan-300"
                    }`}
                  >

                    {item.question}

                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300

                    ${
                      isOpen
                        ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-300"
                        : "border-white/10 bg-white/5 text-white group-hover:border-cyan-500/40 group-hover:text-cyan-300"
                    }`}
                  >

                    <ChevronDown
                      size={22}
                      strokeWidth={2.5}
                    />

                  </motion.div>

                </button>
                                <AnimatePresence initial={false}>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >

                      {/* Divider */}

                      <div className="mx-8 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

                      {/* Answer */}

                      <motion.div
                        initial={{
                          y: -10,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                        }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: 0.05,
                        }}
                        className="relative px-8 pb-8 pt-7"
                      >

                        {/* Background Glow */}

                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-purple-500/[0.03]" />

                        <p className="relative text-[17px] leading-9 text-slate-300">

                          {item.answer}

                        </p>

                      </motion.div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}
                  </div>

        {/* ==========================================
                NEED MORE HELP
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mt-24 overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#08101f] to-purple-500/10 px-10 py-16 backdrop-blur-xl"
        >

          {/* Glow */}

          <div className="absolute inset-0">

            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[120px]" />

          </div>

        </motion.div>

      </div>

    </section>

  );

}