"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Wrench } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
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
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
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
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
        >
          Systems Design Engineering @ UWaterloo
        </motion.h2>

        <div className="flex flex-col gap-5 items-center mb-12 sm:mb-16">
          <Button
            size="lg"
            variant="outline"
            className="border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#e8c766]"
            onClick={() => scrollToSection("documents")}
          >
            Resume
          </Button>

          {/* Icon buttons - stay in a row on all screen sizes */}
          <div className="flex flex-row gap-4">
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
              onClick={() => window.open('https://photos.google.com/share/AF1QipOySdEoza_XDxhapGdnIvXCKlWl0o3yhdiPr_cTGLThv8lvPqJ6ynddTAyWNePr3w?key=Tmk5NzVvRUNrSnRuSDJIamRrMHU5RkhEZ05oYnVn', '_blank')}
            >
              <Wrench className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}