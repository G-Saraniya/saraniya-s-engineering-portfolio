import { motion } from "framer-motion";
import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Electronics and Communication Engineering graduate with a passion for innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-smooth"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              An ECE graduate passionate about IoT, embedded systems, and PCB design. 
              I specialize in combining hardware and software to build innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-smooth"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build IoT solutions using ESP32, design PCBs in KiCad, develop web applications 
              with React, and create automation systems that bridge hardware and software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-smooth"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">My Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create meaningful technology that solves real-world problems through 
              innovative engineering, continuous learning, and collaborative teamwork.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
