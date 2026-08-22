"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const index = navItems.findIndex((item) => item.href === hash);
      if (index !== -1) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative">
          <div className="flex items-center justify-between backdrop-blur-xl bg-black/40 border border-red-500/20 rounded-full px-8 py-4 shadow-2xl shadow-red-500/20">
            
            {/* Logo */}
            <a
              href="#home"
              className="flex-shrink-0 font-bold text-lg bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Hashir
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-red-400 transition-colors duration-200 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {activeIndex === index && (
                    <motion.div
                      layoutId="navBg"
                      className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg border border-red-500/40"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-20 left-6 right-6 backdrop-blur-xl bg-black/40 border border-red-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20"
        >
          <div className="flex flex-col divide-y divide-red-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-500 text-white text-center hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}