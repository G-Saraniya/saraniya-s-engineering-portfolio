import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-card shadow-card rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg md:text-xl leading-relaxed text-card-foreground">
              I am an <span className="font-semibold text-primary">Electronics and Communication Engineering student</span> passionate about building real-world solutions through IoT, software development, and PCB design. I enjoy combining hardware and software to create efficient, meaningful systems.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-card-foreground mt-6">
              With experience in <span className="font-semibold text-primary">ESP32, KiCad, embedded systems, React, Java, and Python</span>, I focus on solving problems with clean engineering and impactful design. I seek opportunities to apply my skills in a dynamic environment and contribute to innovative projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
