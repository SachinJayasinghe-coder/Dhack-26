"use client";

interface StepFourProps {
  category: string;
  formData: any;
  setFormData: any;
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepFour({
  category,
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepFourProps) {

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="mb-10">

        <h2 className="text-4xl font-black text-white">
          Project Information
        </h2>

        <p className="mt-2 text-gray-400">
          Upload your project proposal and provide
          the required project information.
        </p>

      </div>

      {/* Form */}

      <div className="project-form mx-auto max-w-3xl">

        {/* Project Title */}

        <div>

          <label className="mb-3 block text-sm font-medium text-gray-300">
            Project Title *
          </label>

          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle || ""}
            onChange={handleChange}
            placeholder="Enter your project title"
            className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />

        </div>
        {/* Project Proposal */}

<div>

  <label className="mb-3 block text-sm font-medium text-gray-300">
    Project Proposal (PDF) *
  </label>

  <input
    id="proposalPdf"
    type="file"
    accept="application/pdf,.pdf"
    className="hidden"
    onChange={(e) => {

      const file = e.target.files?.[0] || null;

      console.log("Selected File:", file);

      setFormData({
        ...formData,
        proposalPdf: file,
      });

    }}
  />

  <label
    htmlFor="proposalPdf"
    className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-500/40 bg-black/20 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/5"
  >

    <div className="mb-4 text-5xl">
      📄
    </div>

    <h3 className="text-lg font-semibold text-white">

      {formData.proposalPdf
        ? formData.proposalPdf.name
        : "Upload Project Proposal"}

    </h3>

    <p className="mt-2 text-sm text-slate-400">

      {formData.proposalPdf
        ? "PDF selected successfully"
        : "Click here to browse for a PDF"}

    </p>

    <p className="mt-2 text-xs text-cyan-300">
      Only PDF files are accepted (Maximum 10 MB)
    </p>

  </label>

</div>

        {/* Technology Stack */}

        <div>

          <label className="mb-3 block text-sm font-medium text-gray-300">
            Technology Stack
          </label>

          <textarea
            rows={4}
            name="technologyStack"
            value={formData.technologyStack || ""}
            onChange={handleChange}
            placeholder="React, Next.js, Python, Flutter, AI, IoT..."
            className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />

        </div>
                {/* GitHub Repository */}

        <div>

          <label className="mb-3 block text-sm font-medium text-gray-300">
            GitHub Repository (Optional)
          </label>

          <input
            type="url"
            name="githubLink"
            value={formData.githubLink || ""}
            onChange={handleChange}
            placeholder="https://github.com/username/repository"
            className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />

        </div>

      </div>

      {/* Submission Guidelines */}

      <div className="submission-guidelines rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
        <h4 className="mb-3 text-lg font-bold text-cyan-400">
          Submission Guidelines
        </h4>

        <p className="leading-7 text-gray-300">
          Please upload your project proposal as a PDF document.
          Ensure that your proposal clearly explains your idea,
          objectives, implementation approach, and expected impact.
          If available, you may also provide your GitHub repository
          link to help the judges review your progress.
        </p>

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