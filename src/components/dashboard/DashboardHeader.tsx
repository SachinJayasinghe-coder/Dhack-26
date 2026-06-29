"use client";

import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <p className="mb-2 text-cyan-400 uppercase tracking-[0.25em] text-sm">
        Team Dashboard
      </p>

      <h1 className="text-4xl font-black text-white">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-gray-400">
        Manage your team, submissions and competition progress.
      </p>
    </motion.div>
  );
}