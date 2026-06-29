"use client";

interface StepTwoProps {
  category: string;
  formData: any;
  setFormData: any;
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepTwo({
  category,
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepTwoProps) {
  const memberCount =
    category === "rebrand" ? 5 : 5;

  const members =
    formData.members ||
    Array.from(
      { length: memberCount },
      () => ({
        name: "",
        email: "",
        contact: "",
        studentId: "",
        degreeProgramme: "",
      })
    );

  const updateMember = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedMembers = [...members];

    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  const degreeOptions = [
    "BIS",
    "Accounting",
    "Finance",
    "Marketing",
    "HRM",
    "Business Administration",
    "Public Administration",
    "Entrepreneurship",
    "Other",
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="mb-10">

        <h2 className="text-4xl font-black text-white">
          Team Members
        </h2>

        <p className="mt-2 text-gray-400">
          Please complete the details of all team members.
        </p>

        {category === "rebrand" && (
          <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
            ReBrand Challenge requires exactly 5 members.
          </div>
        )}

      </div>

      {/* Member 1 Information */}

      <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6">

        <h3 className="text-xl font-bold text-cyan-300">
          Member 1 (Group Leader)
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Please fill in the details of <span className="font-semibold text-white">Member 1</span>.
          This participant will serve as the
          <span className="font-semibold text-white"> Group Leader </span>
          and the primary contact person throughout the competition.
        </p>

      </div>

      <div className="space-y-8">

        {members.map(
          (
            member: any,
            index: number
          ) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
            >

              <h3 className="mb-6 text-xl font-bold text-cyan-400">
                Member {index + 1}
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                                {/* Full Name */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) =>
                      updateMember(
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400"
                    placeholder="Enter full name"
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    value={member.email}
                    onChange={(e) =>
                      updateMember(
                        index,
                        "email",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400"
                    placeholder="Enter email address"
                  />

                </div>

                {/* Contact Number */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Contact Number *
                  </label>

                  <input
                    type="tel"
                    value={member.contact}
                    onChange={(e) =>
                      updateMember(
                        index,
                        "contact",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400"
                    placeholder="+94 XX XXX XXXX"
                  />

                </div>

                {/* Student ID */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Student Registration Number *
                  </label>

                  <input
                    type="text"
                    value={member.studentId}
                    onChange={(e) =>
                      updateMember(
                        index,
                        "studentId",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400"
                    placeholder="Enter registration number"
                  />

                </div>
                                {/* Degree Programme */}

                <div className="md:col-span-2">

                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Degree Programme *
                  </label>

                  <select
                    value={member.degreeProgramme}
                    onChange={(e) =>
                      updateMember(
                        index,
                        "degreeProgramme",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-cyan-400"
                  >

                    <option value="">
                      Select Degree Programme
                    </option>

                    {degreeOptions.map((option) => (

                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>

                    ))}

                  </select>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    If your current degree programme is not listed,
                    please select
                    <span className="font-semibold text-cyan-300">
                      {" "}Other
                    </span>
                    {" "}to continue.
                  </p>

                </div>

              </div>

            </div>

          )

        )}

      </div>
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