"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface SubmissionCardProps {
  round: string;
  status: string;
  deadline: string;
}

export default function SubmissionCard({
  round,
  status,
  deadline,
}: SubmissionCardProps) {
  const color =
    status === "Submitted"
      ? "text-green-400"
      : status === "Pending"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <FileText className="text-purple-400" />
        <h2 className="text-xl font-bold text-white">
          {round}
        </h2>
      </div>

      <div className="space-y-2">
        <p className="text-gray-300">
          Status:
          <span className={`ml-2 ${color}`}>
            {status}
          </span>
        </p>

        <p className="text-gray-300">
          Deadline:
          <span className="ml-2 text-cyan-400">
            {deadline}
          </span>
        </p>
      </div>
    </motion.div>
  );
}