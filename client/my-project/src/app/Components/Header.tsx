"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-purple-100 shadow-sm">
      <h1 className="text-xl md:text-2xl font-bold text-purple-900">
        Cosmetics
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-9 ml-28">
        <Link href="/" className="text-purple-900 hover:text-purple-700">
          Home
        </Link>
        <Link href="/about" className="text-purple-900 hover:text-purple-700">
          About
        </Link>
        <Link href="/team" className="text-purple-900 hover:text-purple-700">
          Team
        </Link>
        <Link href="#contact" className="text-purple-900 hover:text-purple-700">
          Blogs
        </Link>
        <Link href="#contact" className="text-purple-900 hover:text-purple-700">
          Community
        </Link>
        <Link href="#contact" className="text-purple-900 hover:text-purple-700">
          Find Service
        </Link>
        <Link href="#contact" className="text-purple-900 hover:text-purple-700">
          Author
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-44 mt-2">
        <button onClick={toggleDrawer}>
          <Menu className="text-purple-900 w-6 h-6" />
        </button>
      </div>

      {/* Desktop Sign In */}
      <div className="flex gap-x-5">
        <button className="hidden md:block bg-purple-800 text-white px-4 py-2 rounded-full text-sm  border-1">
          Sign In
        </button>

        <button className="hidden md:block bg-purple-800 text-white px-4 py-2 rounded-full text-sm  border-1">
          Support
        </button>
      </div>

      {/* Drawer Navigation */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bg-white p-6"
      >
        <nav className="flex flex-col gap-4 text-purple-900">
          <Link href="/" className="text-purple-900 hover:text-purple-700">
            Home
          </Link>
          <Link href="/about" className="text-purple-900 hover:text-purple-700">
            About
          </Link>
          <Link href="/team" className="text-purple-900 hover:text-purple-700">
            Team
          </Link>
          <Link
            href="#contact"
            className="text-purple-900 hover:text-purple-700"
          >
            Blogs
          </Link>
          <Link
            href="#contact"
            className="text-purple-900 hover:text-purple-700"
          >
            Community
          </Link>
          <Link
            href="#contact"
            className="text-purple-900 hover:text-purple-700"
          >
            Find Service
          </Link>
          <Link
            href="#contact"
            className="text-purple-900 hover:text-purple-700"
          >
            Author
          </Link>
        </nav>
        <button className="mt-6 bg-purple-800 text-white px-4 py-2 rounded-full w-full">
          Sign In
        </button>
      </Drawer>
    </header>
  );
}
