import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
        </div>

        <div className="-space-y-5">
          {/* First combo - Image left-center, text box right-center, overlapping */}
          <div className="relative flex justify-center items-center min-h-[200px]">
            <div className="relative flex items-center justify-center w-full max-w-5xl">
              {/* Image Container - Positioned left of center, offset upward */}
              <div className="relative w-[550px] lg:w-[700px] h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl -mr-12 lg:-mr-16 z-0 -mt-8 lg:-mt-12">
                <Image
                  src="/210Z.jpg"
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
              <div className="relative w-[450px] lg:w-[900px] z-10 mt-8 lg:mt-60">
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl min-h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-6">Background</h3>
                  <div className="space-y-2 text-gray-300 text-base">
                    <p className="leading-loose">
                      Currently pursuing a Bachelor's degree in Mechanical Engineering with a focus on understanding fundamental engineering principles, design methodologies, and problem-solving approaches.
                    </p>
                    <p className="leading-loose">
                      Eager to gain hands-on experience in the field through internships and practical applications of classroom knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second combo - Text box left-center, image right-center, overlapping */}
          <div className="relative flex justify-center items-center min-h-[200px]">
            <div className="relative flex items-center justify-center w-full max-w-5xl">
              {/* Passion & Vision Text Box - Positioned left of center, wider */}
              <div className="relative w-[450px] lg:w-[750px] z-10 -mr-12 lg:-mr-16 -mt-16 lg:mt-55">
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl min-h-[280px]">
                  <h3 className="text-2xl font-bold text-white mb-6">Passion & Vision</h3>
                  <div className="space-y-2 text-gray-300 text-base">
                    <p className="leading-loose">
                      My interests span across mechanical design, manufacturing processes, and sustainable engineering practices. I believe in the power of engineering to create positive change in the world.
                    </p>
                    <p className="leading-loose">
                      Always looking for opportunities to collaborate on innovative projects and contribute to meaningful solutions that can make a difference in people's lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-[550px] lg:w-[700px] h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl z-0 mt-8 lg:mt-12">
                <Image
                  src="/210Z.jpg"
                  alt="Kartik"
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}