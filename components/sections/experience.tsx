import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

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
      id: "engineering-intern",
      title: "Mechanical Engineering Intern",
      organization: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "June 2024 - August 2024",
      description: [
        "Assisted in the design and development of mechanical components for automated manufacturing systems",
        "Conducted stress analysis and thermal simulations using ANSYS and SolidWorks Simulation",
        "Collaborated with cross-functional teams to optimize product designs and reduce manufacturing costs by 15%",
        "Created technical documentation and engineering drawings for production teams"
      ],
      technologies: ["SolidWorks", "ANSYS", "AutoCAD", "MATLAB", "3D Printing"]
    },
    {
      id: "design-assistant",
      title: "CAD Design Assistant",
      organization: "Innovative Design Studio",
      location: "Austin, TX",
      period: "January 2024 - May 2024",
      description: [
        "Developed 3D models and technical drawings for various mechanical components and assemblies",
        "Performed design validation through finite element analysis and prototype testing",
        "Streamlined the design process by creating standardized templates and part libraries",
        "Supported senior engineers in project planning and design reviews"
      ],
      technologies: ["SolidWorks", "Fusion 360", "KeyShot", "GD&T"]
    },
    {
      id: "research-assistant",
      title: "Research Assistant",
      organization: "University Engineering Lab",
      location: "College Station, TX",
      period: "September 2023 - December 2023",
      description: [
        "Conducted research on sustainable materials for automotive applications under faculty supervision",
        "Designed and executed experimental procedures to test material properties and performance",
        "Analyzed data using statistical methods and presented findings to research team",
        "Co-authored research paper on composite materials published in undergraduate engineering journal"
      ],
      technologies: ["MATLAB", "LabVIEW", "Data Analysis", "Technical Writing"]
    },
    {
      id: "workshop-technician",
      title: "Workshop Technician",
      organization: "MakerSpace Community Lab",
      location: "Houston, TX",
      period: "June 2023 - August 2023",
      description: [
        "Operated and maintained various manufacturing equipment including CNC machines and 3D printers",
        "Assisted community members with project design and manufacturing process optimization",
        "Implemented safety protocols and conducted equipment training sessions for new users",
        "Troubleshot mechanical issues and performed preventive maintenance on workshop tools"
      ],
      technologies: ["CNC Machining", "3D Printing", "Laser Cutting", "Hand Tools", "Safety Protocols"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/60 via-purple-400/60 to-transparent"></div>

          <div className="space-y-6">
            {workExperiences.map((experience) => (
              <div key={experience.id} className="relative flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 shadow-xl hover:border-gray-700 transition-all duration-300">
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

                    {experience.technologies && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-800">
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
                    )}
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