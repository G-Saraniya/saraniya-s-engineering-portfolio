import { motion } from "framer-motion";
import { Droplet, Cpu, MessageSquare } from "lucide-react";

const projects = [
 {
    title: "Chatbot Application",
    description:
      "Developed a Flask-powered chatbot application with automated response workflows, a clean responsive UI, and optional IoT integration to trigger safety alerts based on real-time sensor inputs.",
    icon: MessageSquare,
    tags: ["Flask", "JavaScript", "APIs", "Automation", "UI/UX"],
    color: "text-purple-400"
  }, 
  {
    title: "Smart Saline Bottle Monitoring System",
    description:
      "Developed an IoT-based medical monitoring system using ESP32, load cell, and HX711 to track saline levels in real time, featuring automated solenoid valve control and instant alerts through LCD and Blynk Cloud for enhanced patient safety.",
    icon: Droplet,
    tags: ["ESP32", "IoT", "Embedded C", "Blynk", "Sensors"],
    color: "text-blue-400"
  },
  {
    title: "Sensor Interface Board",
    description:
      "Engineered a complete multi-sensor interface PCB in KiCad, including schematic design, footprint mapping, PCB routing, signal conditioning, and Gerber file generation, enabling seamless integration with embedded systems.",
    icon: Cpu,
    tags: ["KiCad", "PCB Design", "Hardware", "Signal Processing", "Electronics"],
    color: "text-green-400"
  } 
 
];

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building solutions that combine hardware and software innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-smooth group"
            >
              <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${project.color}`}>
                <project.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
