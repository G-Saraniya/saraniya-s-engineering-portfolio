import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, CircuitBoard, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "Smart Saline Bottle Monitoring System",
    description: "IoT-based medical monitoring system using ESP32, HX711, and solenoid valve automation. Sends real-time alerts via LCD and Blynk for safer hospital monitoring.",
    icon: Cpu,
    tech: ["ESP32", "IoT", "C", "Blynk Cloud", "HX711"],
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Sensor Interface Board – PCB Design",
    description: "Designed a full hardware platform in KiCad, from schematic to Gerber files, enabling multi-sensor integration and signal conditioning. Debugged using oscilloscopes & multimeters.",
    icon: CircuitBoard,
    tech: ["KiCad", "PCB Design", "Hardware", "Testing"],
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Chatbot Application",
    description: "Built a chatbot system integrated with IoT sensing to automate responses and trigger safety alerts. Combines real-time data processing with user interaction.",
    icon: MessageSquare,
    tech: ["JavaScript", "ESP32", "IoT", "Cloud"],
    color: "bg-purple-500/10 text-purple-500"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full shadow-card hover:shadow-hover transition-smooth border-border group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <project.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
