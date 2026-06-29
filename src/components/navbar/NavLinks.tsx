"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Timeline", href: "/timeline" },
  { name: "Workshops", href: "/workshops" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition hover:text-cyan-400"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}