"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Avindi Getawakanda",
      role: "Co-Chairperson - DHack",
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
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have questions about DHACK 2026?
            Our organizing team is ready to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-2">
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
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">
                {person.name}
              </h3>

              <p className="mt-2 text-cyan-400">
                {person.role}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone
                    size={18}
                    className="text-cyan-400"
                  />
                  <a
                    href={`tel:${person.phone}`}
                    className="hover:text-white"
                  >
                    {person.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Mail
                    size={18}
                    className="text-purple-400"
                  />
                  <a
                    href={`mailto:${person.email}`}
                    className="hover:text-white"
                  >
                    {person.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MessageCircle
                    size={18}
                    className="text-green-400"
                  />
                  <a
                    href={`https://wa.me/94${person.phone.slice(
                      1
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
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
          }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
        >
          <MapPin
            className="mx-auto mb-4 text-cyan-400"
            size={32}
          />

          <h3 className="text-xl font-bold text-white">
            University of Sri Jayewardenepura
          </h3>

          <p className="mt-3 text-gray-400">
            Faculty of Management Studies and Commerce
          </p>

          <a
            href="https://chat.whatsapp.com/BTTmYsMJV2N65GU40vMDoe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Join WhatsApp Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}