"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-3xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DHACK'26
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <NavLinks />
        </nav>

        {/* Register Button */}
        <div className="hidden lg:block">
          <Link
            href="/register"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.35)]"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}
