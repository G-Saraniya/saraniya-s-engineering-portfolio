import { motion } from "framer-motion";
import { Droplet, Cpu, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "Smart Saline Bottle Monitoring System",
    description: "IoT-enabled saline monitoring system using ESP32, load cell, and HX711 with automated solenoid valve control and real-time alerts via LCD and Blynk.",
    icon: Droplet,
    tags: ["ESP32", "IoT", "C", "Blynk", "Hardware"],
    color: "text-blue-400"
  },
  {
    title: "Sensor Interface Board",
    description: "Complete PCB design in KiCad from schematic to Gerber files, enabling multi-sensor integration with signal conditioning and ADC interfacing.",
    icon: Cpu,
    tags: ["KiCad", "PCB Design", "Hardware", "Signal Processing"],
    color: "text-green-400"
  },
  {
    title: "Chatbot Application",
    description: "Chatbot system integrated with IoT sensing to automate responses and trigger safety alerts based on real-time environmental data.",
    icon: MessageSquare,
    tags: ["JavaScript", "IoT", "ESP32", "Automation"],
    color: "text-purple-400"
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
