"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: "about", label: "About" },
    { id: "documents", label: "Resume" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ], []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar style
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="rounded-full px-1.5 py-1.5 md:px-3 md:py-2.5"
        animate={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)",
          borderColor: scrolled ? "rgba(212, 175, 55, 0.45)" : "rgba(212, 175, 55, 0.2)"
        }}
        style={{
          backdropFilter: "blur(12px)",
          border: "1px solid"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer whitespace-nowrap text-[11px] sm:text-xs font-semibold tracking-wide px-2.5 sm:px-3 py-1.5 rounded-full transition-colors duration-150 ${
                activeSection === item.id
                  ? "text-[#d4af37]"
                  : "text-gray-300 hover:text-[#d4af37]"
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.04, ease: "easeOut" }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
