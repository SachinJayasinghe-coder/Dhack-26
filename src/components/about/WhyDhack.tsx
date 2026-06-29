"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  BrainCircuit,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function WhyDhack() {
  const features = [
    {
      number: "01",
      title: "Innovation",
      description:
        "Build creative solutions for real-world problems through technology, collaboration and entrepreneurship.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Design Thinking",
      description:
        "Learn industry-standard design thinking methodologies and transform ideas into meaningful user experiences.",
      icon: BrainCircuit,
    },
    {
      number: "03",
      title: "Real-World Impact",
      description:
        "Develop projects that solve genuine societal and business challenges while building your professional portfolio.",
      icon: Rocket,
    },
  ];

  return (
    <section
      id="why-dhack"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-24 top-16 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">

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
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            WHY PARTICIPATE
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why DHACK'26?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            DHACK'26 is more than a hackathon. It is where innovators,
            designers and future entrepreneurs collaborate to solve
            meaningful real-world challenges.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  y: -8,
                  scale: 1.02,
                }}
                                className="group relative flex min-h-[340px] flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_18px_45px_rgba(6,182,212,0.15)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-5xl font-black text-white/5">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-center text-2xl font-black text-white">
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className="mx-auto my-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                {/* Description */}
                <div className="flex flex-1 items-center justify-center">
                  <p className="max-w-[260px] text-center text-base leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                  <button className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                    Discover More

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

              </motion.div>

            );
          })}
                  </div>

                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 flex justify-center"
        >
          <div className="w-full rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 px-10 py-14 backdrop-blur-xl">

            <div className="flex flex-col items-center">

              <h3 className="max-w-4xl text-center text-5xl font-black leading-tight text-white">
                Ready to Shape the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future?
                </span>
              </h3>

              <p className="mt-8 max-w-3xl text-center text-xl leading-10 text-slate-300">
                Join hundreds of passionate innovators, designers and future entrepreneurs.
                Transform your ideas into impactful solutions while collaborating
                with the brightest minds across Sri Lanka.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-6">

                <a
                  href="/register"
                  className="primary-btn"
                >
                  Register Now
                </a>

                <a
                  href="#categories"
                  className="secondary-btn"
                >
                  Explore Categories
                </a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}