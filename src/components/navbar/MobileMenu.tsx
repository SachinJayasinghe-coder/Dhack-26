"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#050816]/95 backdrop-blur-xl p-6 flex flex-col gap-5">
          <NavLinks />
        </div>
      )}
    </>
  );
}