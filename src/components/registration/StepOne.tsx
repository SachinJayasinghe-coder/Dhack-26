"use client";

interface StepOneProps {
  category: string;
  formData: any;
  setFormData: any;
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepOne({
  category,
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepOneProps) {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">

      {/* Heading */}

      <div className="mb-20 text-center">

        <h2 className="text-5xl font-black text-white">
          Team Information
        </h2>

        <p className="mt-5 text-lg text-slate-400">
          Complete the details below to continue your registration.
        </p>

        <div className="mt-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3">

          <span className="font-semibold text-cyan-300">
            {category || "No Category Selected"}
          </span>

        </div>

      </div>

      {/* Form */}

      <div className="registration-form mx-auto max-w-2xl">

        {/* Team Name */}

        <div className="mb-12">

          <label className="mb-4 block text-center text-lg font-semibold text-white">
            Team Name *
          </label>

          <input
            type="text"
            name="teamName"
            value={formData.teamName || ""}
            onChange={handleChange}
            placeholder="Enter your team name"
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

        </div>

        {/* Institution */}

        <div className="mb-12">

          <label className="mb-4 block text-center text-lg font-semibold text-white">
            Institution *
          </label>

          <input
            type="text"
            name="institution"
            value={formData.institution || ""}
            onChange={handleChange}
            placeholder="Enter your institution"
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

        </div>
                {/* Team Leader Name */}

        <div className="mb-12">

          <label className="mb-4 block text-center text-lg font-semibold text-white">
            Team Leader Name *
          </label>

          <input
            type="text"
            name="leaderName"
            value={formData.leaderName || ""}
            onChange={handleChange}
            placeholder="Enter team leader's full name"
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

        </div>

        {/* Team Leader Email */}

        <div className="mb-12">

          <label className="mb-4 block text-center text-lg font-semibold text-white">
            Team Leader Email *
          </label>

          <input
            type="email"
            name="leaderEmail"
            value={formData.leaderEmail || ""}
            onChange={handleChange}
            placeholder="example@email.com"
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

        </div>

        {/* Team Leader Contact Number */}

        <div className="mb-16">

          <label className="mb-4 block text-center text-lg font-semibold text-white">
            Team Leader Contact Number *
          </label>

          <input
            type="tel"
            name="leaderContact"
            value={formData.leaderContact || ""}
            onChange={handleChange}
            placeholder="+94 XX XXX XXXX"
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />

        </div>
                {/* Navigation */}

        <div className="registration-navigation flex items-center justify-center gap-8">

          <button
            type="button"
            onClick={previousStep}
            className="flex h-14 min-w-[170px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={nextStep}
            className="flex h-14 min-w-[170px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,.35)]"
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}