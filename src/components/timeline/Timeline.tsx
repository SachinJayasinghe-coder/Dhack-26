"use client";

import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-32 bg-gradient-to-b from-[#050816] to-[#0a0f2c]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Event Journey
          </p>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-cyan-400">
              DHACK
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Follow the complete competition journey from registration to the
            grand finale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-400 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-24 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%]">
                <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:scale-105 transition-all duration-300">

                  <p className="text-cyan-400 font-bold tracking-widest mb-3">
                    {item.date}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-lg">
                    {item.description}
                  </p>

                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-cyan-400 border-4 border-[#050816] shadow-[0_0_30px_#00d4ff]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}