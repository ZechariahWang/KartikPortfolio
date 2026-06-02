"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Download, Mail, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/k_BackgroundImage.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
        priority
        sizes="100vw"
      />

      {/* Dark Opacity Layer */}
      <div className="absolute inset-0 z-10 bg-black/80" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span
            className="text-[#d4af37]"
            style={{ textShadow: "0 0 30px rgba(212, 175, 55, 0.55), 0 0 30px rgba(212, 175, 55, 0.3)" }}
          >
            Kartik
          </span>
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
        >
          Systems Design Engineering @ UWaterloo
        </motion.h2>

        <div className="flex flex-col gap-4 items-center mb-16">
          {/* Top row - Text buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#e8c766]"
              onClick={() => scrollToSection("documents")}
            >
              Resume
            </Button>
          </div>

          {/* Bottom row - Icon buttons */}
          <div className="flex gap-4">
            <Button
              size="icon"
              className="w-10 h-10 rounded-full border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#e8c766]"
              variant="outline"
              onClick={() => { window.location.href = 'mailto:kramacha@uwaterloo.ca'; }}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="w-10 h-10 rounded-full border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#e8c766]"
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/kartik-ramachandran-b25aa8290/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="w-10 h-10 rounded-full border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#e8c766]"
              variant="outline"
              onClick={() => window.open('https://github.com/kartik-ram07', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}