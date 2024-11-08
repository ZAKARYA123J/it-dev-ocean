"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClassName = (path: string) =>
    pathname === path ? "btn-sm text-white bg-indigo-500" : "btn-sm text-gray-300";

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between  gap-1 sm:gap-3 rounded-2xl bg-gray-700/90 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop links */}
        <ul className="flex flex-1 items-center justify-end gap-0 sm:gap-3">

            <li>
              <Link href="/" className={getLinkClassName("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/team" className={getLinkClassName("/team")}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClassName("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}