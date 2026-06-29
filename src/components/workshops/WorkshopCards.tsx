"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

interface WorkshopCardProps {
  title: string;
  speaker: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  color: string;
}

export default function WorkshopCard({
  title,
  speaker,
  image,
  date,
  time,
  venue,
  description,
  color,
}: WorkshopCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition duration-500 group-hover:opacity-10`}
      />

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={speaker}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="mb-2 text-2xl font-black text-white">
          {title}
        </h3>

        <p className="mb-5 font-semibold text-cyan-400">
          {speaker}
        </p>

        <p className="mb-6 text-gray-300">
          {description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <Calendar size={18} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <Clock size={18} />
            <span>{time}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={18} />
            <span>{venue}</span>
          </div>
        </div>

        <button
          className={`mt-8 rounded-xl bg-gradient-to-r ${color} px-5 py-3 font-semibold text-white transition hover:scale-105`}
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
}