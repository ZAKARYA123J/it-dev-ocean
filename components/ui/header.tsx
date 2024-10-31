"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-700/90 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white w-21 h-10"
            onClick={toggleMobileMenu}
          
          >
            ☰
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link href="/signin" className="btn-sm text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-white bg-indigo-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-gray-300">
                About Us
              </Link>
            </li>
          </ul>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <ul className="absolute top-14 left-0 w-full bg-gray-900 rounded-lg shadow-md md:hidden">
              <li>
                <Link href="/signin" className="block px-4 py-2 text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/signup" className="block px-4 py-2 text-white bg-indigo-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/signup" className="block px-4 py-2 text-gray-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/signup" className="block px-4 py-2 text-gray-300">
                  About Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
