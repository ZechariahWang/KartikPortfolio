"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import Image from "next/image";

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
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-[#ff34a1] to-[#00ffc3] bg-clip-text text-transparent">Kartik</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          System Design @ Waterloo
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
            onClick={() => { window.location.href = 'mailto:kramacha@uwaterloo.ca'; }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}