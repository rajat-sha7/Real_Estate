"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/rent", label: "Rent" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  {
    href: "/property",
    label: "Manage Property",
    submenu: [
      { href: "/rent", label: "Rent" },
      { href: "/buy", label: "Buy" },
      { href: "/sell", label: "Sell" },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    submenu: [
      { href: "/property", label: "Manage Property", submenu: [] },
      { href: "/resources", label: "Resources" },
    ],
  },
];

const authButtons = [
  {
    href: "/login",
    label: "Login",
    style: "border-2 border-[#E0DEF7] text-[#000929]",
  },
  { href: "/signup", label: "Signup", style: "bg-[#7065F0] text-white" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="max-w-[1440px] mx-auto py-6 px-4 font-sans border-b-[1.5px] border-[#F0EFFB]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.png" width={118} height={32} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex lg:gap-12 gap-6 px-3">
          {navLinks?.map(({ href, label, submenu }) => (
            <Link
              key={href}
              href={href}
              className="md:leading-6 font-normal text-[#000929] flex items-center lg:text-[16px] text-[14px] md:gap-2 hover:text-[#7065F0] transition-colors duration-200"
            >
              {label}
              {submenu && (
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-colors duration-200 hover:stroke-[#7065F0]"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1667 1.83333L6.00004 6L1.83337 1.83333"
                    stroke="currentColor"
                  ></path>
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center lg:gap-4 gap-2">
          {authButtons.map(({ href, label, style }) => (
            <Link key={href} href={href}>
              <button
                className={`lg:px-6 lg:py-3 px-4 py-2 lg:text-[16px] text-[14px] lg:leading-6 leading-3 font-bold rounded-lg ${style} hover:opacity-80 transition-opacity duration-200`}
              >
                {label}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-start mt-4 gap-4 bg-[#F7F7FD] w-screen h-screen p-4"
          >
            {navLinks.map(({ href, label, submenu }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-[#7065F0] pl-[10px] transition-colors duration-200"
              >
                {label}
                {submenu && (
                  <svg
                    className="w-4 h-4 flex-shrink-0 transition-colors duration-200 hover:stroke-[#7065F0]"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1667 1.83333L6.00004 6L1.83337 1.83333"
                      stroke="currentColor"
                    ></path>
                  </svg>
                )}
              </Link>
            ))}
            {authButtons.map(({ href, label, style }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                <button
                  className={`px-6 py-3 flex items-start justify-start leading-6 font-bold rounded-lg w-full ${style} hover:opacity-80 transition-opacity duration-200`}
                >
                  {label}
                </button>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
