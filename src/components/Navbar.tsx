"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-[hsl(var(--medicastle-blue))]/5 via-white/80 to-[hsl(var(--medicastle-red))]/5 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center w-36 md:w-48 lg:w-64">
            <img src="/logo.png" alt="Medi Castle Logo" className="h-12 md:h-14 lg:h-16 w-full object-contain object-left scale-[2.5] md:scale-[3] lg:scale-[3.2] origin-left transition-transform hover:scale-[2.6] md:hover:scale-[3.1] lg:hover:scale-[3.3]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[hsl(var(--medicastle-blue))] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[hsl(var(--medicastle-blue))] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(var(--medicastle-blue))] p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[hsl(var(--medicastle-blue))] rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center items-center gap-2 bg-[hsl(var(--medicastle-blue))] text-white px-5 py-3 rounded-md font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
