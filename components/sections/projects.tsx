"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: 'mechanical' | 'design' | 'community';
  aspect: 'square' | 'portrait' | 'landscape';
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  links?: {
    github?: string;
    live?: string;
    documentation?: string;
  };
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "Girl Powered Robotics Workshop",
      title: "Girl Powered Robotics Workshop",
      description: "Co-lead annual robotics workshop alongside UCalgary and Google.",
      fullDescription: "Co-lead annual robotics workshop alongside UCalgary and Google to provide opportunities for girls to explore STEM in an accessible way.",
      image: "/kartikpresent.png",
      category: "community",
      aspect: "landscape",
      technologies: ["Talking"],
      challenges: ["Print orientation optimization", "Support structure design", "Surface finish requirements"],
      outcomes: ["Functional prototype achieved", "3 design iterations completed", "Ready for production scaling"]
    },
    {
      id: "2025 Calgary Youth Award Finalist",
      title: "2025 Calgary Youth Award Finalist",
      description: "Finalist for Calgary wide Penny Hume Volunteer Award through leadership efforts to create opportunities for the community.",
      fullDescription: "Finalist for Calgary wide Penny Hume Volunteer Award through leadership efforts to create opportunities for the community.",
      image: "/kartikfam.jpg",
      category: "community",
      aspect: "landscape",
      technologies: ["Talking"],
      challenges: ["Complex boundary conditions", "Mesh optimization", "Convergence issues"],
      outcomes: ["20% efficiency improvement", "Hotspot elimination", "Design validation completed"]
    },
    {
      id: "2024 World Championships Robot",
      title: "2024 World Championships Robot",
      description: "Finished top 16 within our division at VEX Robotics World Championships hosted in Dallas Texas, finishing the year in the top 1.7%.",
      fullDescription: "Finished top 16 within our division at VEX Robotics World Championships hosted in Dallas Texas, finishing the year in the top 1.7%.",
      image: "/k_mech3.png",
      category: "mechanical",
      aspect: "landscape",
      technologies: ["AutoCAD", "Inventor Pro"],
      challenges: ["Tolerance stack-up analysis", "Manufacturing constraints", "Drawing clarity"],
      outcomes: ["Zero manufacturing queries", "Improved production efficiency", "Cost-effective tolerancing"]
    },
    {
      id: "robot-rodeo",
      title: "Robot Rodeo Champions",
      description: "Won $3500.",
      fullDescription: "Won $3500.",
      image: "/rr.png",
      category: "mechanical",
      aspect: "landscape",
      technologies: ["Winning"],
      challenges: ["Weight optimization", "Impact resistance", "Manufacturing complexity"],
      outcomes: ["40% weight reduction", "Competition requirements met", "Successful field testing"]
    },
    {
      id: "Alberta Masterpiece Art Piece",
      title: "Alberta Masterpiece Art Piece",
      description: "Created art piece to honor Alberta’s rich history through a more light tone, later gifted to Alberta regional MLA for his retirement.",
      fullDescription: "This project involved creating a detailed CAD model of a precision gear assembly for a mechanical transmission system. The focus was on understanding gear ratios, load distribution, and material stress points under various operating conditions.",
      image: "/battleofab2.jpg",
      category: "design",
      aspect: "square",
      technologies: ["Painting"],
      challenges: ["Complex geometry modeling", "Stress concentration analysis", "Manufacturing feasibility"],
      outcomes: ["15% weight reduction", "Improved stress distribution", "Manufacturing cost reduction"]
    },
    {
      id: "2023 Canadian National VEX Robotics Champions",
      title: "2023 Canadian National VEX Robotics Champions",
      description: "Champions of Canadian international tournament, Mecha Mayhem, defeating top teams from across all of North America.",
      fullDescription: "Champions of Canadian international tournament, Mecha Mayhem, defeating top teams from across all of North America.",
      image: "/replacement210Z.jpg",
      category: "mechanical",
      aspect: "landscape",
      technologies: ["AutoCAD"],
      challenges: ["Sample preparation", "Test standardization", "Data interpretation"],
      outcomes: ["Material properties database", "Testing protocol established", "Research publication submitted"]
    },
    {
      id: "2023 Alberta Provincial Finalists",
      title: "2023 Alberta Provincial Finalists",
      description: "Placed 2nd in Alberta in our first year of robotics, competing as a middle school team against senior high school teams.",
      fullDescription: "Placed 2nd in Alberta in our first year of robotics, competing as a middle school team against senior high school teams.",
      image: "/k_mech5.png",
      category: "mechanical",
      aspect: "square",
      technologies: ["CNC Machining", "Quality Control", "AutoCAD"],
      challenges: ["Tolerance achievement", "Surface finish optimization", "Tool wear management"],
      outcomes: ["±0.001\" tolerance achieved", "Excellent surface finish", "Zero defect production"]
    },
    {
      id: "2024 Provincial Absolute Champions",
      title: "2024 Provincial Absolute Champions",
      description: "2024 Alberta Provincial Champions, Skills Challenge Champions and Design Excellence Champions.",
      fullDescription: "2024 Alberta Provincial Champions, Skills Challenge Champions and Design Excellence Champions.",
      image: "/k_community1.png",
      category: "mechanical",
      aspect: "landscape",
      technologies: ["Design Thinking", "Prototyping", "User Testing", "CAD Modeling"],
      challenges: ["User requirement interpretation", "Design constraint balance", "Iteration management"],
      outcomes: ["User satisfaction improved", "Manufacturing cost reduced", "Design process documented"]
    },
    {
      id: "robotics-summer-camp-leader-2",
      title: "Robotics Summer Camp Leader",
      description: "Taught summer camps for 150+ kids from grades 2 - 12, introducing them to basics of the design process, coding and hands on engineering.",
      fullDescription: "Taught summer camps for 150+ kids from grades 2 - 12, introducing them to basics of the design process, coding and hands on engineering.",
      image: "/k_community2.png",
      category: "community",
      aspect: "landscape",
      technologies: ["Educational Design", "Workshop Planning", "Community Engagement", "STEM Outreach"],
      challenges: ["Resource accessibility", "Diverse learning needs", "Sustainable program design"],
      outcomes: ["250+ students reached", "Increased STEM interest", "Program sustainability achieved"]
    },
    {
      id: "mentorship-program",
      title: "Calgary Stampede Build a Bot Lead",
      description: "Led a robotics booth at the Calgary Stampede.",
      fullDescription: "Led a robotics booth at the Calgary Stampede.",
      image: "/k_community3.jpg",
      category: "community",
      aspect: "landscape",
      technologies: ["Event Organization"],
      challenges: ["Matching mentors with mentees", "Program scalability", "Progress measurement"],
      outcomes: ["50+ students mentored", "90% program completion rate", "Leadership skills improved"]
    },
    {
      id: "Silicon Valley Robot",
      title: "Silicon Valley Robot",
      description: "Robot designed over three months for a competition in the San Franscisco Bay Area.",
      fullDescription: "Robot designed over three months for a competition in the San Franscisco Bay Area.",
      image: "/IMG_4007.JPEG",
      category: "mechanical",
      aspect: "landscape",
      technologies: ["Inventor Pro", "AutoCAD"],
      challenges: ["Matching mentors with mentees", "Program scalability", "Progress measurement"],
      outcomes: ["50+ students mentored", "90% program completion rate", "Leadership skills improved"]
    },
  ];

  // Preload all images on component mount
  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image;
    });
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mechanical': return 'bg-blue-500/20 text-blue-300';
      case 'design': return 'bg-purple-500/20 text-purple-300';
      case 'community': return 'bg-green-500/20 text-green-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getAspectRatio = (aspect: string) => {
    switch (aspect) {
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'landscape': return 'aspect-[4/3]';
      default: return 'aspect-square';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Project Gallery
          </motion.h2>
        </div>

        {/* VSCO-style Masonry Grid */}
        <div className="flex justify-center">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-5xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                {/* Image */}
                <div className={`relative ${getAspectRatio(project.aspect)} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-[center_30%] scale-105 group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="text-white text-center">
                      <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className={`${getCategoryColor(project.category)} text-xs mb-3 font-medium`}
                  >
                    {project.category.toUpperCase()}
                  </Badge>

                  {/* Title & Description */}
                  <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25, duration: 2 }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Modal Header */}
            <div className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-[center_10%]"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Title and Category */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge
                    variant="secondary"
                    className={`${getCategoryColor(selectedProject.category)} text-xs mb-2`}
                  >
                    {selectedProject.category.toUpperCase()}
                  </Badge>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-500/30 bg-blue-500/10 text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Challenges</h3>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Outcomes & Results</h3>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Links */}
              {selectedProject.links && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.documentation && (
                    <a
                      href={selectedProject.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                    </a>
                  )}
                </div>
              )}
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}