"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  index: number;
}

export default function GalleryCard({
  image,
  index,
}: GalleryCardProps) {
  return (
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
  );
}