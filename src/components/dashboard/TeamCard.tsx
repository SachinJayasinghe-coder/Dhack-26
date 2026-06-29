"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface TeamCardProps {
  teamName: string;
  category: string;
  members: number;
}

export default function TeamCard({
  teamName,
  category,
  members,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <Users className="text-cyan-400" />
        <h2 className="text-xl font-bold text-white">
          {teamName}
        </h2>
      </div>

      <div className="space-y-2">
        <p className="text-gray-300">
          Category:
          <span className="ml-2 text-cyan-400">
            {category}
          </span>
        </p>

        <p className="text-gray-300">
          Members:
          <span className="ml-2 text-purple-400">
            {members}
          </span>
        </p>
      </div>
    </motion.div>
  );
}