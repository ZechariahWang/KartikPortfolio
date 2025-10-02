"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface WorkExperience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export default function Experience() {
  const workExperiences: WorkExperience[] = [
    {
      id: "west-mech",
      title: "Club Executive",
      organization: "Western Mechatronics",
      location: "Calgary, AB",
      period: "August 2021 – Present",
      description: [
        "Co-Leader of a globally recognized robotics education company with $240,000 ARR, 156 members and a 7,000+ sqft workshop dedicated to creating robotics and leadership opportunities for students",
        "Secured partnerships with Google, TC Energy, Telus and Garmin to host classes and events for underrepresented groups in robotics, leading to a 250% increase in Alberta Robotics Participation since 2019",
        "Organized 8 annual outreach programs with 1000+ attendees, hosting workshops at The Telus Spark Sciences Center, various schools and festivals in Alberta",
        "Led Calgary Stampede’s first robotics booth, engaging and promoting STEM to 3 million+ visitors through two weeks, participants building 3100+ robots"
      ],
      technologies: []
    },
    {
      id: "next",
      title: "Robotics Teacher",
      organization: "NEXT Robotics",
      location: "Calgary, AB",
      period: "June 2021 – April 2024",
      description: [
        "Designed and built multiple STEM based curriculums taught to students ranging from Grades 2 – 12, focusing on engineering principles and coding basics",
        "Facilitated full-time summer camps and year-round classes, allowing students to explore robotics and prepare for competitive teams, impacting 350+ students in total",
      ],
      technologies: []
    },
    {
      id: "gp",
      title: "Event Co-Lead",
      organization: "Google Girl Powered",
      location: "Calgary, AB",
      period: "May 2023 – Present",
      description: [
        "Co-led Canada’s first Girl Powered Robotics Workshop alongside Google and University of Calgary, providing girls in middle and high school the opportunity to engage with STEM regardless of their circumstances",
        "Created curriculums, contacted robotics experienced presenters, and contacted guest speakers with experiences and inspirations to share",
        "Designed custom blueprints each year for 250+ students, helping construct, code and operate the robots to participate in friendly competitions",
      ],
      technologies: ["MATLAB", "LabVIEW", "Data Analysis", "Technical Writing"]
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line - Liquid Glass */}
          <div className="absolute left-[1.125rem] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-transparent backdrop-blur-sm rounded-full shadow-lg shadow-blue-500/20"></div>

          <div className="space-y-6">
            {workExperiences.map((experience) => (
              <div key={experience.id} className="relative flex items-start gap-6">
                {/* Timeline Dot - Liquid Glass */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/40 via-purple-500/40 to-pink-400/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <Briefcase className="h-4 w-4 text-white relative z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                    {/* Liquid glass blob effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                    {/* Content wrapper */}
                    <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-base text-blue-400 font-medium mb-1">
                          {experience.organization}
                        </p>
                      </div>
                      <div className="flex flex-col lg:text-right gap-1">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description with bullet points */}
                    <ul className="space-y-2 text-gray-300">
                      {experience.description.map((item, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-snug text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* {experience.technologies && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs hover:bg-blue-500/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}