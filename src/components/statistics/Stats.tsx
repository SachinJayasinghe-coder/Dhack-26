"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Stats() {
  const stats = [
    {
      title: "Participants",
      value: 500,
      suffix: "+",
      icon: "👨‍💻",
      color: "text-cyan-400",
    },

    {
      title: "Teams",
      value: 120,
      suffix: "+",
      icon: "🚀",
      color: "text-purple-400",
    },

    {
      title: "Schools",
      value: 25,
      suffix: "+",
      icon: "🏫",
      color: "text-green-400",
    },

    {
      title: "Universities",
      value: 15,
      suffix: "+",
      icon: "🎓",
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
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
          transition={{
            duration: 0.8,
          }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Competition Impact
          </span>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DHACK By Numbers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Bringing together innovators,
            creators and future leaders from
            across Sri Lanka.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
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
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <div className="mb-4 text-5xl">
                {stat.icon}
              </div>

              <h3
                className={`mb-3 text-5xl font-black ${stat.color}`}
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="text-lg font-medium text-gray-300">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-black text-white">
            Empowering the Next Generation
            of Innovators
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            DHACK 2026 is more than a competition.
            It is a platform where creativity,
            technology and entrepreneurship come
            together to build solutions for the
            future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}