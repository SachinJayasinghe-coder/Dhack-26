"use client";

import { motion } from "framer-motion";

interface CategorySelectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  nextStep: () => void;
}

export default function CategorySelection({
  selectedCategory,
  setSelectedCategory,
  nextStep,
}: CategorySelectionProps) {
  const categories = [
    {
      id: "inter-university",
      title: "Inter-University Hackathon",
      description:
        "Collaborate with university students to solve real-world problems through innovative technology and teamwork.",
      members: "3–5 Members",
      prize: "LKR 100,000+",
    },

    {
      id: "school-level",
      title: "School-Level Hackathon",
      description:
        "Encourage school students to solve real-world challenges through creativity, collaboration and innovation.",
      members: "2–4 Members",
      prize: "LKR 75,000+",
    },

    {
      id: "rebrand",
      title: "ReBrand Challenge",
      description:
        "Transform an existing brand through strategic thinking, visual identity and customer-focused innovation.",
      members: "5 Members",
      prize: "LKR 50,000+",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);

    setTimeout(() => {
      nextStep();
    }, 250);
  };

  return (
    <div className="mx-auto max-w-7xl">

      {/* Heading */}

      <h2 className="mb-14 text-center text-5xl font-black text-white">
        Select Competition Category
      </h2>

      {/* Cards */}

      <div className="grid gap-10 lg:grid-cols-3">

        {categories.map((category) => (

          <motion.div
            key={category.id}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => handleCategorySelect(category.id)}
            className={`group relative cursor-pointer overflow-hidden rounded-[30px] border transition-all duration-300 backdrop-blur-xl

            ${
              selectedCategory === category.id
                ? "border-cyan-400 bg-cyan-500/10 shadow-[0_20px_60px_rgba(6,182,212,.25)]"
                : "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10"
            }`}
          >

            {/* Selected Badge */}

            {selectedCategory === category.id && (

              <div className="absolute right-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Selected
              </div>

            )}

            <div className="p-10">

              {/* Title */}

              <h3 className="text-center text-3xl font-black text-white">
                {category.title}
              </h3>

              {/* Accent Line */}

              <div className="mx-auto my-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              {/* Description */}

              <p className="min-h-[130px] text-center text-lg leading-9 text-slate-300">
                {category.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}