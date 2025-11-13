"use client";

import { useState } from "react";
import Link from "next/link";
import { IoGlobeOutline, IoChevronDown } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // HiX is already imported, good!
import logo from "@/public/NavbarLogo.png";
import Image from "next/image";
import Banner from "./Banner";
import { HiArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to close the menu
  // This will be used by links, the X button, and the backdrop
  const closeMenu = () => setIsOpen(false);

  return (
    // Add relative positioning for the absolute mobile menu
    <header className="w-full relative">
      <nav className="w-full bg-stone-100 text-zinc-800 flex items-center justify-between px-4 lg:px-10 py-4">
        {/* Left Navigation (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-sm uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
          >
            Events
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex items-center cursor-pointer">
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="logo" className="h-6 w-auto" />
          </Link>
        </div>

        {/* Right Actions (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
            <IoGlobeOutline size={18} />
            <span className="text-sm font-medium">EN</span>
            <IoChevronDown size={16} />
          </button>
          <span className="text-zinc-300 h-6">|</span>
          <a
            href="tel:+12375648970"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            +123 7564 8970
          </a>
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-sm font-medium group pb-0.5 border-b-[1.5px] border-zinc-800"
          >
            <span className="border-current group-hover:opacity-70 transition-opacity">
              LOGIN
            </span>
            <HiArrowUpRight
              size={16}
              className="group-hover:opacity-70 transition-opacity"
            />
          </Link>
        </div>

        {/* Mobile Menu Button (Visible on mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} // This just toggles the state
            aria-label="Toggle menu"
            className="text-zinc-800"
          >
            {/* Show X only if menu is open */}
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu (Flyout Panel) --- */}

      {/* 1. Backdrop (dimmed background) */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-black z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMenu} // Click backdrop to close
      ></div>

      {/* 2. Panel (the menu itself) */}
      <div
        className={`
          lg:hidden fixed top-0 right-0 w-full max-w-xs h-full 
          bg-stone-100 text-zinc-800 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* We add a relative container to position the X button inside */}
        <div className="relative h-full">
          {/* Close Button (inside the panel) */}
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-zinc-800"
          >
            <HiX size={28} />
          </button>

          {/* Menu Content */}
          <div className="flex flex-col items-center gap-6 px-10 py-8 pt-20">
            {/* Mobile Links */}
            <Link
              href="/"
              className="text-base uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-base uppercase font-medium tracking-wider hover:opacity-70 transition-opacity"
              onClick={closeMenu}
            >
              Events
            </Link>

            {/* Divider */}
            <hr className="w-full border-zinc-300 my-2" />

            {/* Mobile Actions */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-base font-medium group"
              onClick={closeMenu}
            >
              <span>LOGIN</span>
              <HiArrowUpRight size={16} />
            </Link>
            <a
              href="tel:+12375648970"
              className="text-base font-medium hover:opacity-70 transition-opacity"
              onClick={closeMenu}
            >
              +123 7564 8970
            </a>
            <button className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <IoGlobeOutline size={18} />
              <span className="text-sm font-medium">EN</span>
              <IoChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* The Banner remains part of the header */}
      <Banner />
    </header>
  );
};

export default Navbar;
