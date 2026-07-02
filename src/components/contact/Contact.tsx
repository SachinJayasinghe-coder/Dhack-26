"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "Avindi Getawakanda",
      role: "Co-Chairperson • DHACK 2026",
      phone: "0772615050",
      email: "avindigetawakanda@gmail.com",
    },
    {
      name: "Minoli Fernando",
      role: "PR & Delegates Crew Head",
      phone: "0765449807",
      email: "minolifernando@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-36"
    >

      {/* ======================================
                BACKGROUND GLOW
      ====================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================
                    SECTION HEADER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
              Get In Touch
            </span>

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500" />

          </div>

          <h2 className="text-6xl font-black md:text-8xl">

            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">

              Contact Us

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Have questions about
            <span className="font-semibold text-cyan-400">
              {" "}DHACK 2026
            </span>?
            Our organizing committee is always ready to assist you.

          </p>

        </motion.div>

        {/* ======================================
                CONTACT CARDS
        ====================================== */}

        <div className="grid gap-10 lg:grid-cols-2">
                    {contacts.map((person, index) => (

            <motion.div
              key={person.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[34px] border backdrop-blur-xl transition-all duration-500

              ${
                index === 0
                  ? "border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-[#09111f] to-[#0b1020] hover:shadow-[0_0_40px_rgba(6,182,212,.22)]"
                  : "border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-[#09111f] to-[#0b1020] hover:shadow-[0_0_40px_rgba(168,85,247,.22)]"
              }`}
            >

              {/* Animated Border */}

              <div
                className={`absolute left-0 top-0 h-[3px] w-full

                ${
                  index === 0
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                    : "bg-gradient-to-r from-purple-400 to-fuchsia-500"
                }`}
              />

              <div className="relative p-12">

                <h3 className="text-center text-4xl font-black text-white">

                  {person.name}

                </h3>

                <p
                  className={`mt-5 text-center text-sm font-medium uppercase tracking-[0.35em]

                  ${
                    index === 0
                      ? "text-cyan-400"
                      : "text-purple-400"
                  }`}
                >

                  {person.role}

                </p>

                <div
                  className={`mx-auto mt-8 h-px w-24

                  ${
                    index === 0
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  }`}
                />

                <div className="mt-10 space-y-6 text-center">

                  <a
                    href={`tel:${person.phone}`}
                    className="block text-3xl font-semibold text-slate-200 transition hover:text-white"
                  >

                    {person.phone}

                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="block break-all text-lg text-slate-400 transition hover:text-white"
                  >

                    {person.email}

                  </a>

                </div>

              </div>

            </motion.div>

          ))}
                  </div>

        {/* ======================================
                COMMUNITY SECTION
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="relative mt-24 overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#0B1326] via-[#09111F] to-[#111827] px-8 py-20 backdrop-blur-xl"
        >

          {/* Background Glow */}

          <div className="absolute inset-0">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

          </div>

          <div className="relative text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-cyan-400">

              Stay Connected

            </p>

            <h3 className="mt-6 text-5xl font-black text-white">

              Join Our Community

            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

              Become a part of the official DHACK 2026 community to receive
              announcements, important updates, competition reminders,
              workshop information and connect with fellow participants.

            </p>

                        {/* Premium Button */}

            <div className="mt-14 flex justify-center">

              <a
                href="https://chat.whatsapp.com/BTTmYsMJV2N65GU40vMDoe"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >

                <button
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-12 py-5 text-lg font-bold tracking-wide text-white shadow-[0_15px_40px_rgba(59,130,246,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_25px_60px_rgba(59,130,246,.55)]"
                >

                  {/* Shine Effect */}

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex items-center gap-3">

                    Join Our WhatsApp Community

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>

                  </span>

                </button>

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}