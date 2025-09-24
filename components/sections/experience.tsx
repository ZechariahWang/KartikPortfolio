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
      title: "Board Executive",
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
      id: "design-assistant",
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
      id: "research-assistant",
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}