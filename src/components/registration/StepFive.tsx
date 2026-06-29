"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { registerTeam } from "@/services/registrationService";

interface StepFiveProps {
  category: string;
  formData: any;
  previousStep: () => void;
}

export default function StepFive({
  category,
  formData,
  previousStep,
}: StepFiveProps) {

  const members =
    formData.members || [];

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [accepted, setAccepted] =
    useState(false);

  const submitRegistration =
    async () => {

      if (!accepted) {

        alert(
          "Please accept the declaration before submitting."
        );

        return;

      }

      try {

        setLoading(true);

        await registerTeam(
          category,
          formData
        );

        setSubmitted(true);

      } catch (error) {

        console.error(error);

        alert(
          "Registration failed. Please try again."
        );

      } finally {

        setLoading(false);

      }

    };

  /* =====================================
      SUCCESS SCREEN
  ===================================== */

  if (submitted) {

    return (

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">

        {/* Background Glow */}

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[140px]" />

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl"
        >
                    {/* Success Icon */}

          <motion.div

            initial={{
              scale: 0,
              rotate: -180,
            }}

            animate={{
              scale: 1,
              rotate: 0,
            }}

            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
            }}

            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-6xl font-bold text-white shadow-[0_0_50px_rgba(6,182,212,.35)]"
          >

            ✓

          </motion.div>

          {/* Heading */}

          <h1 className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-black text-transparent">

            Registration Successful!

          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">

            Congratulations! Your team has successfully
            completed the registration process for

            <span className="font-semibold text-white">
              {" "}DHACK 2026
            </span>.

          </p>

          {/* Status */}

          <div className="mt-10 flex justify-center">

            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">

              Pending Verification

            </span>

          </div>

          {/* Next Steps */}

          <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8">

            <h3 className="text-2xl font-bold text-cyan-400">

              What Happens Next?

            </h3>

            <p className="mt-6 leading-8 text-slate-300">

              Our organizing committee will review your
              registration and verify the submitted
              information.

              <br /><br />

              Once your registration has been approved,
              an official confirmation email containing
              competition updates and important instructions
              will be sent to the team leader's email address.

            </p>

          </div>

          {/* Action Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/"
              className="flex h-14 min-w-[220px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,.35)]"
            >
              Return Home
            </Link>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="flex h-14 min-w-[220px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              Register Another Team
            </button>

          </div>

          <p className="mt-10 text-sm text-slate-500">

            Thank you for participating in DHACK 2026.

          </p>

        </motion.div>

      </section>

    );

  }

  /* =====================================
      REVIEW PAGE
  ===================================== */

  return (

    <div className="review-sections">
            {/* Header */}

      <div className="mb-10">

        <h2 className="text-4xl font-black text-white">
          Review & Submit
        </h2>

        <p className="mt-2 text-gray-400">
          Please review your registration details
          before submitting your application.
        </p>

      </div>

      {/* Competition Category */}

      <div className="mb-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

        <h3 className="mb-3 text-2xl font-bold text-cyan-400">
          Competition Category
        </h3>

        <p className="text-lg capitalize text-white">
          {category.replace(/-/g, " ")}
        </p>

      </div>

      {/* Team Information */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
          Team Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">

          <p>
            <span className="text-cyan-400">
              Team Name:
            </span>{" "}
            {formData.teamName}
          </p>

          <p>
            <span className="text-cyan-400">
              Institution:
            </span>{" "}
            {formData.institution}
          </p>

          <p>
            <span className="text-cyan-400">
              Team Leader:
            </span>{" "}
            {formData.leaderName}
          </p>

          <p>
            <span className="text-cyan-400">
              Leader Email:
            </span>{" "}
            {formData.leaderEmail}
          </p>

          <p>
            <span className="text-cyan-400">
              Contact Number:
            </span>{" "}
            {formData.leaderContact}
          </p>

        </div>

      </div>

      {/* Team Members */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
          Team Members
        </h3>

        <div className="space-y-4">

          {members.map(
            (
              member: any,
              index: number
            ) => (

              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >

                <h4 className="mb-4 font-bold text-cyan-400">
                  Member {index + 1}
                </h4>

                <div className="grid gap-3 md:grid-cols-2">

                  <p>
                    <span className="text-cyan-400">
                      Name:
                    </span>{" "}
                    {member.name || "-"}
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      Email:
                    </span>{" "}
                    {member.email || "-"}
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      Contact:
                    </span>{" "}
                    {member.contact || "-"}
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      Student ID:
                    </span>{" "}
                    {member.studentId || "-"}
                  </p>

                  <p className="md:col-span-2">
                    <span className="text-cyan-400">
                      Degree Programme:
                    </span>{" "}
                    {member.degreeProgramme || "-"}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>
            {/* Verification */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
          Verification
        </h3>

        {category === "inter-university" && (

          <p className="text-green-400">
            ✓ University Team Verification Completed
          </p>

        )}

        {category === "school-level" && (

          <div className="space-y-3">

            <p>
              <span className="text-cyan-400">
                Teacher In Charge:
              </span>{" "}
              {formData.teacherName}
            </p>

            <p>
              <span className="text-cyan-400">
                Teacher Contact:
              </span>{" "}
              {formData.teacherContact}
            </p>

            <p>
              <span className="text-cyan-400">
                Teacher Email:
              </span>{" "}
              {formData.teacherEmail}
            </p>

          </div>

        )}

        {category === "rebrand" && (

          <div className="space-y-3">

            <p>
              <span className="text-cyan-400">
                BIS Student 1 CPM:
              </span>{" "}
              {formData.cpmOne}
            </p>

            <p>
              <span className="text-cyan-400">
                BIS Student 2 CPM:
              </span>{" "}
              {formData.cpmTwo}
            </p>

            <p>
              <span className="text-cyan-400">
                BIS Student 3 CPM:
              </span>{" "}
              {formData.cpmThree}
            </p>

          </div>

        )}

      </div>

      {/* Project Information */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
          Project Information
        </h3>

        <div className="space-y-4">

          <p>

            <span className="text-cyan-400">
              Project Title:
            </span>{" "}

            {formData.projectTitle || "-"}

          </p>

          <p>

            <span className="text-cyan-400">
              Technology Stack:
            </span>

            <br />

            {formData.technologyStack || "-"}

          </p>

          <p>

            <span className="text-cyan-400">
              Project Proposal:
            </span>{" "}

            {formData.proposalPdf
              ? formData.proposalPdf.name
              : "No PDF Uploaded"}

          </p>

          {formData.githubLink && (

            <p>

              <span className="text-cyan-400">
                GitHub Repository:
              </span>{" "}

              <a
                href={formData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline"
              >
                {formData.githubLink}
              </a>

            </p>

          )}

        </div>

      </div>

      {/* Declaration */}

      <div className="mb-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

        <label className="flex cursor-pointer items-start gap-4">

          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) =>
              setAccepted(e.target.checked)
            }
            className="mt-1 h-5 w-5 accent-cyan-500"
          />

          <span className="leading-7 text-gray-300">

            I confirm that all information provided
            in this registration is accurate and that
            our team agrees to abide by the rules and
            regulations of DHACK 2026.

          </span>

        </label>

      </div>

      {/* Navigation */}

      <div className="flex items-center justify-center gap-6">

        <button
          type="button"
          onClick={previousStep}
          disabled={loading}
          className="flex h-14 min-w-[180px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={submitRegistration}
          disabled={loading || !accepted}
          className="flex h-14 min-w-[240px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,.35)] disabled:cursor-not-allowed disabled:opacity-50"
        >

          {loading
            ? "Submitting..."
            : "Submit Registration"}

        </button>

      </div>

    </div>

  );

}