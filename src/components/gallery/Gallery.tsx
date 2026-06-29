"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/8.jpeg",
  "/images/gallery/10.jpeg",
  "/images/gallery/11.jpeg",
  "/images/gallery/12.jpeg",
  "/images/gallery/13.jpeg",
  "/images/gallery/14.jpeg",
  "/images/gallery/19.jpeg",
  "/images/gallery/20.jpeg",
  "/images/gallery/21.jpeg",
  "/images/gallery/23.jpeg",
  "/images/gallery/24.jpeg",
  "/images/gallery/25.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            DHACK 2025 HIGHLIGHTS
          </span>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Moments That Inspired
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A glimpse into the innovation, teamwork,
            presentations and celebrations that made
            DHACK unforgettable.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative mb-12 overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/gallery/8.jpeg"
            alt="DHACK Winner"
            width={1600}
            height={900}
            className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-10">
            <h3 className="text-4xl font-black text-white">
              DHACK 2025 Grand Finale
            </h3>

            <p className="mt-2 text-gray-300">
              Celebrating innovation and excellence.
            </p>
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {images.map((image, index) => (
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
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index}`}
                width={1000}
                height={1000}
                className="w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition duration-500 group-hover:translate-y-0">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <h4 className="font-bold text-white">
                    DHACK 2025
                  </h4>

                  <p className="text-sm text-gray-300">
                    Innovation • Collaboration • Impact
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
          className="mt-16 text-center"
        >
          <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105">
            View Full DHACK Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
}