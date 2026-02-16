import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Cpu, MessageSquare, Code, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Bus Reservation System",
    period: "Sept 2025 – Oct 2025",
    shortDesc: "A console-based system managing bus reservations, passenger data, and scheduling with structured MVC architecture.",
    description: "Designed and implemented a console-based Bus Reservation System following structured MVC architecture principles. Focused on clean architectural practices and transactional integrity.",
    contributions: [
      "Developed complete CRUD functionality for passenger and booking management",
      "Implemented dynamic seat allocation logic with real-time validation",
      "Integrated transaction management using commit and rollback mechanisms",
      "Ensured secure database interaction using PreparedStatement to prevent SQL injection",
      "Applied DAO design pattern to maintain clean separation of concerns"
    ],
    tech: ["Java", "JDBC", "MySQL", "MVC Architecture"],
    icon: MessageSquare,
    color: "text-purple-400"
  },
  {
    title: "Smart Saline Bottle & Patient Monitoring",
    period: "June 2025 – Oct 2025",
    shortDesc: "IoT healthcare solution for real-time saline level tracking and automated alerts using ESP32.",
    description: "Engineered an IoT-enabled healthcare monitoring solution to track saline levels in real time and automate alerts, demonstrating capability in integrating hardware with software.",
    contributions: [
      "Integrated ESP32 with load cell sensor and HX711 module for precise weight measurement",
      "Designed automated valve control logic",
      "Developed real-time alert system via LCD display and Blynk mobile application",
      "Ensured accurate monitoring and improved reliability of patient support systems"
    ],
    tech: ["ESP32", "Load Cell", "HX711", "Blynk", "Embedded Systems"],
    icon: Droplet,
    color: "text-blue-400"
  },
  {
    title: "Restaurant Recommendation Interface",
    period: "Nov 2025 – Dec 2025",
    shortDesc: "Responsive front-end web interface for dining options with intuitive UI and clean design.",
    description: "Developed a responsive front-end web interface focused on clean design and structured user experience, enhancing proficiency in UI structuring.",
    contributions: [
      "Designed intuitive UI layouts with clear content hierarchy",
      "Implemented responsive styling principles",
      "Structured maintainable and readable front-end code"
    ],
    tech: ["HTML", "CSS", "Front-End Development"],
    icon: Code,
    color: "text-green-400"
  },
  {
    title: "Portfolio Website",
    period: "Ongoing",
    shortDesc: "Modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion featuring dynamic interactions.",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dynamic animations, dark mode, and glassmorphism design elements.",
    contributions: [
      "Implemented responsive and interactive UI components",
      "Integrated dark/light mode theming",
      "Optimized for performance and accessibility"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Cpu,
    color: "text-pink-400"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer ${isOpen ? 'col-span-1 md:col-span-2 row-span-2 shadow-2xl ring-1 ring-primary/20' : 'hover:scale-[1.02]'}`}
    >
      <motion.div layout className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${project.color}`}>
          <project.icon className="w-6 h-6" />
        </div>
        {project.period && (
          <span className="text-xs font-mono bg-secondary px-2 py-1 rounded text-muted-foreground">
            {project.period}
          </span>
        )}
      </motion.div>

      <motion.h3 layout="position" className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </motion.h3>

      <motion.div layout>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {isOpen ? project.description : project.shortDesc}
        </p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {project.contributions && (
              <div className="mb-6 pt-4 border-t border-border/50">
                <h4 className="font-semibold text-sm mb-3 text-foreground/90">Key Contributions:</h4>
                <ul className="space-y-2">
                  {project.contributions.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-muted rounded-md text-[10px] font-medium uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-primary font-medium flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
          {isOpen ? (
            <>Show Less <ChevronUp className="w-3 h-3" /></>
          ) : (
            <>Click to know more <ChevronDown className="w-3 h-3" /></>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Applying engineering principles to build robust solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-min">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
