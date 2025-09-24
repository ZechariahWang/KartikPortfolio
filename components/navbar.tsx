"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(() => [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
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
    <nav className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="bg-black/80 backdrop-blur-md rounded-full border border-gray-700 px-3 md:px-6 py-2 md:py-3 shadow-2xl">
        <div className="flex items-center justify-between md:space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-extrabold text-white hover:text-gray-300 transition-colors tracking-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-semibold transition-colors hover:text-white tracking-wide px-3 py-1 rounded-full ${
                  activeSection === item.id
                    ? "text-white bg-white/20"
                    : "text-gray-300"
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/20 rounded-full p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 px-4 py-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-center px-4 py-2 text-sm font-semibold transition-colors hover:text-white tracking-wide rounded-full ${
                  activeSection === item.id ? "text-white bg-white/20" : "text-gray-300"
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}