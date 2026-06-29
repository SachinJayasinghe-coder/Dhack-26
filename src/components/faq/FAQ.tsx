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
      className="relative py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before joining
            DHACK 2026.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqData.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() =>
                    setActive(
                      isOpen ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="font-semibold text-lg text-white">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
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
                        duration: 0.3,
                      }}
                    >
                      <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}