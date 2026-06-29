"use client";

import { motion } from "framer-motion";
import WorkshopCard from "./WorkshopCards";

export default function Workshops() {
  const workshops = [
    {
      title: "Artificial Intelligence",
      speaker: "Industry AI Expert",
      image: "/images/workshops/1.jpg",

      date: "15 Aug 2026",
      time: "7.00 PM",

      venue: "Online",

      description:
        "Discover how AI is transforming industries and learn how to integrate intelligent solutions into your DHACK project.",

      color:
        "from-cyan-500 to-blue-600",
    },

    {
      title: "UI/UX Design Thinking",

      speaker: "Product Designer",

      image: "/images/workshops/2.jpg",

      date: "20 Aug 2026",

      time: "7.00 PM",

      venue: "Online",

      description:
        "Master human-centered design principles and create user experiences that make an impact.",

      color:
        "from-purple-500 to-pink-600",
    },

    {
      title: "Pitching & Presentation",

      speaker: "Startup Mentor",

      image: "/images/workshops/3.jpg",

      date: "25 Aug 2026",

      time: "7.00 PM",

      venue: "Online",

      description:
        "Learn how to present ideas confidently and impress judges with a compelling project pitch.",

      color:
        "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="workshops"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            LEARN FROM EXPERTS
          </span>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Workshops
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Prepare for DHACK through
            exclusive workshops, mentorship
            sessions and expert guidance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {workshops.map(
            (workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.15,
                }}
              >
                <WorkshopCard
                  {...workshop}
                />
              </motion.div>
            )
          )}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-black text-white">
            Gain The Skills To Win
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Every registered participant
            will gain access to learning
            opportunities designed to
            improve technical, creative and
            presentation skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}