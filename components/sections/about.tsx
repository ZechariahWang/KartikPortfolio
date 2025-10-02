"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="-space-y-12">
          {/* First combo - Image left-center, text box right-center, overlapping */}
          <div className="relative flex flex-col md:flex-row justify-center items-center min-h-[200px]">
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
              {/* Image Container - Positioned left of center, offset upward */}
              <div className="relative w-80 md:w-[450px] lg:w-[700px] h-64 md:h-80 lg:h-[400px] overflow-hidden shadow-2xl md:-mr-12 lg:-mr-16 z-0 md:mt-10 lg:mt-5 mb-6 md:mb-0">
                <Image
                  src="/k_about3.jpg"
                  alt="Kartik"
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Background Text Box - Positioned right of center, wider */}
              <div className="relative w-80 md:w-[500px] lg:w-[1000px] z-10 md:mt-16 lg:mt-50 mb-20 md:mb-0 order-2 md:order-1">
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 p-4 md:p-2 lg:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
                  <div className="space-y-4 text-gray-300 text-base">
                    <p className="leading-relaxed">
                      I&apos;m Kartik, a Systems Design Engineering student at the University of Waterloo with a passion for robotics, hardware design, and mechanical engineering.
                    </p>
                    <p className="leading-relaxed">
                      With over 4 years of hands-on experience in robotics and CAD, I specialize in mechanical design, prototyping, and hardware integration. I thrive on tackling challenging projects that push the boundaries of what&apos;s possible.
                    </p>
                      <p className="leading-relaxed">
                      In my spare time, I&apos;m giving back to my community, through STEM workshops, summer camps, and coaching initatives at Canada&apos;s leading robotics club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second combo - Text box left-center, image right-center, overlapping */}
          <div className="relative flex flex-col md:flex-row justify-center items-center min-h-[200px]">
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
              {/* Passion & Vision Text Box - Positioned left of center, wider */}
              <div className="relative w-80 md:w-[500px] lg:w-[850px] z-0 md:-mr-12 lg:-mr-16 md:-mt-16 lg:mt-55 mb-40 md:mb-30 order-2 md:order-1">
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 p-4 md:p-6 lg:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Currently Working On: Canada&apos;s largest Robotics Tournament</h3>
                  <div className="space-y-4 text-gray-300 text-base">
                    <p className="leading-relaxed">
                      As Event Co-Lead for Mecha Mayhem 2025, Canada&apos;s largest high school robotics competition, I led a team of over 160 volunteers in organizing an event that brings together hundreds of participants from across the country.
                    </p>
                    <p className="leading-relaxed">
                      From venue logistics to sponsor relations, this role has sharpened my skills in large-scale coordination and team leadership while creating an experience that inspires the next generation of engineers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-80 md:w-[450px] lg:w-[700px] h-64 md:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10 md:mt-8 lg:mt-12 order-1 md:order-2 mb-8 md:mb-0 opacity-80 md:translate-x-7 lg:translate-x-12 lg:translate-y-25">
                <iframe
                  src="https://www.youtube.com/embed/e-PBs0b2zsc?start=6"
                  title="Current Project Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}