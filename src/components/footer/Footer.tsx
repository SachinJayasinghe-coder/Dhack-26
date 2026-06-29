"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-4xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                DHACK'26
              </span>
            </h2>

            <p className="leading-relaxed text-gray-400">
              Sri Lanka's premier innovation and
              design thinking competition,
              empowering future innovators through
              technology, creativity and impact.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-red-500 hover:text-red-500"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <a
                href="#categories"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Categories
              </a>

              <a
                href="#timeline"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Timeline
              </a>

              <a
                href="#faq"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Competition Categories */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Categories
            </h3>

            <div className="space-y-4">
              <p className="text-gray-400">
                Inter-University Hackathon
              </p>

              <p className="text-gray-400">
                School-Level Hackathon
              </p>

              <p className="text-gray-400">
                ReBrand Challenge
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <p className="text-gray-400">
                  dhack@sjp.ac.lk
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <p className="text-gray-400">
                  +94 XX XXX XXXX
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <p className="text-gray-400">
                  Department of Information
                  Technology,
                  <br />
                  Faculty of Management Studies
                  and Commerce,
                  <br />
                  University of Sri Jayewardenepura
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-gray-500">
            © 2026 DHACK. All Rights Reserved.
          </p>

          <p className="font-medium text-gray-400">
            Designed & Developed by{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sachin Jayasinghe | S@IT
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}