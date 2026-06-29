"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#050816] py-36"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            COMPETITION CATEGORIES
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Choose Your Challenge
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Discover the competition category that best matches your
            passion, creativity and technical skills. Every challenge
            offers a unique opportunity to innovate, collaborate and
            create real-world impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="flex"
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                participants={category.participants}
                prize={category.prize}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}