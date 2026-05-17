"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
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
      className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-auto"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="rounded-full px-2 md:px-3 py-2 md:py-2.5"
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
        <div className="flex items-center justify-between md:space-x-2">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-extrabold text-white hover:text-gray-300 transition-colors tracking-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer text-xs font-semibold tracking-wide px-2 py-1 rounded-full transition-colors duration-150 ${
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

          {/* Mobile Navigation Button */}
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-[#d4af37] hover:bg-[#d4af37]/15 rounded-full p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 bg-black/95 backdrop-blur-md rounded-2xl border border-[#d4af37]/25 px-4 py-4 shadow-2xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer text-center px-4 py-2 text-sm font-semibold transition-colors duration-150 tracking-wide rounded-full ${
                    activeSection === item.id ? "text-[#d4af37]" : "text-gray-300 hover:text-[#d4af37]"
                  }`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03, ease: "easeOut" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}