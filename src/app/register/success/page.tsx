"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegistrationSuccess() {

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 py-20">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* Card */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
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

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">

          Thank you for registering for
          <span className="font-semibold text-white">
            {" "}DHACK 2026
          </span>.

          <br />

          Your registration has been received successfully and is now awaiting verification by our organizing committee.

        </p>

        {/* Status */}

        <div className="mt-10 flex justify-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-yellow-300">

            Pending Verification

          </span>

        </div>

        {/* Information */}

        <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">

          <h3 className="text-2xl font-bold text-cyan-400">

            What Happens Next?

          </h3>

          <p className="mt-5 leading-8 text-slate-300">

            Our organizing committee will review your registration
            and verify your submitted information.

            <br /><br />

            Once verification is complete, your team will receive
            an official confirmation email with further instructions
            regarding DHACK 2026.

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

          <Link
            href="/register"
            className="flex h-14 min-w-[220px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Register Another Team
          </Link>

        </div>

        {/* Footer */}

        <p className="mt-10 text-sm text-slate-500">

          © 2026 DHACK. All Rights Reserved.

        </p>

      </motion.div>

    </section>

  );

}