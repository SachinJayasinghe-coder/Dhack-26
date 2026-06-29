"use client";

interface StepThreeProps {
  category: string;
  formData: any;
  setFormData: any;
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepThree({
  category,
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepThreeProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white">
          Category Verification
        </h2>

        <p className="mt-2 text-gray-400">
          Complete the verification requirements
          for your selected competition category.
        </p>

      </div>
            {/* INTER UNIVERSITY */}

      {category === "inter-university" && (

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <h3 className="mb-3 text-2xl font-bold text-cyan-400">
            Eligibility Verification
          </h3>

          <p className="text-gray-300">
            By proceeding, you confirm that all
            team members are currently enrolled
            in a recognized university or higher
            education institution.
          </p>

          <div className="mt-6 rounded-xl bg-green-500/10 p-4 text-green-400">
            ✓ University Team Verification Complete
          </div>

        </div>

      )}

      {/* SCHOOL LEVEL */}

      {category === "school-level" && (

        <div>

          <div className="mb-8 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4 text-purple-400">
            Teacher-in-Charge verification is
            required for School-Level teams.
          </div>

          <div className="grid gap-6">

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Teacher In Charge Name *
              </label>

              <input
                type="text"
                name="teacherName"
                value={formData.teacherName || ""}
                onChange={handleChange}
                placeholder="Enter teacher name"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Teacher Contact Number *
              </label>

              <input
                type="tel"
                name="teacherContact"
                value={formData.teacherContact || ""}
                onChange={handleChange}
                placeholder="+94XXXXXXXXX"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Teacher Email *
              </label>

              <input
                type="email"
                name="teacherEmail"
                value={formData.teacherEmail || ""}
                onChange={handleChange}
                placeholder="teacher@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

          </div>

        </div>

      )}

      {/* REBRAND */}

      {category === "rebrand" && (

        <div>

          <div className="mb-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
            ReBrand Challenge requires at least
            3 BIS students in the team.
          </div>

          <div className="grid gap-6">
                        <div>

              <label className="mb-2 block text-sm text-gray-300">
                BIS Student 1 CPM Number *
              </label>

              <input
                type="text"
                name="cpmOne"
                value={formData.cpmOne || ""}
                onChange={handleChange}
                placeholder="Enter CPM Number"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                BIS Student 2 CPM Number *
              </label>

              <input
                type="text"
                name="cpmTwo"
                value={formData.cpmTwo || ""}
                onChange={handleChange}
                placeholder="Enter CPM Number"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                BIS Student 3 CPM Number *
              </label>

              <input
                type="text"
                name="cpmThree"
                value={formData.cpmThree || ""}
                onChange={handleChange}
                placeholder="Enter CPM Number"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

          </div>

          <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

            <h4 className="mb-2 font-bold text-cyan-400">
              ReBrand Team Requirement
            </h4>

            <p className="text-gray-300">
              • Total Team Members: 5
              <br />
              • BIS Students: Minimum 3
              <br />
              • Remaining Members: Faculty of Management Studies & Commerce
            </p>

          </div>

        </div>

      )}

      {/* Navigation */}

      <div className="mt-16 flex items-center justify-center gap-6">

        <button
          type="button"
          onClick={previousStep}
          className="flex h-14 min-w-[180px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="flex h-14 min-w-[180px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,.35)]"
        >
          Continue
        </button>

      </div>

    </div>
  );
}