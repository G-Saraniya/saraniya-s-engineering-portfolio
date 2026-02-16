import { motion } from "framer-motion";
import { User, Lightbulb, Code, Quote } from "lucide-react";
import { useState } from "react";

const AboutCard = ({ icon: Icon, title, intro, fullContent, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden min-h-[200px]"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>

        {/* Intro Text - Fade out on hover */}
        <div className="group-hover:opacity-0 absolute top-[100px] left-6 right-6 transition-opacity duration-300 pointer-events-none">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {intro}
          </p>
          <p className="text-primary/70 text-xs mt-4 font-medium flex items-center gap-1">
            Hover to view more &rarr;
          </p>
        </div>

        {/* Full Content - Fade in and slide up on hover */}
        <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out mt-auto">
          <div className="text-muted-foreground leading-relaxed text-sm space-y-3">
            {fullContent}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
            Transforming complex requirements into robust, scalable software solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AboutCard
            icon={User}
            title="Who I Am"
            intro="I am Saraniya G, an Electronics & Communication Engineering graduate focused on software engineering."
            delay={0.1}
            fullContent={
              <>
                <p>I am Saraniya G, an Electronics and Communication Engineering graduate with a strong orientation toward software engineering and structured problem-solving.</p>
                <p>With proficiency in Java, SQL, and modern web technologies, I focus on building scalable, maintainable, and performance-driven systems.</p>
                <p>I am committed to continuous improvement, professional integrity, and delivering solutions that align with business objectives.</p>
              </>
            }
          />

          <AboutCard
            icon={Code}
            title="What I Do"
            intro="Specializing in backend-driven applications, database systems, and full-stack development."
            delay={0.2}
            fullContent={
              <>
                <p>Specializing in backend-driven applications and database-integrated systems.</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Backend logic with Java, JDBC, JPA</li>
                  <li>Database design (MySQL, SQL Server)</li>
                  <li>MVC Architecture & DAO Patterns</li>
                  <li>Secure interaction & Transaction Mgmt</li>
                  <li>Frontend structuring (React, HTML/CSS)</li>
                </ul>
              </>
            }
          />

          <AboutCard
            icon={Lightbulb}
            title="My Vision"
            intro="To establish myself as a competent software engineer contributing to high-impact enterprise systems."
            delay={0.3}
            fullContent={
              <>
                <p>My vision is to establish myself as a competent and reliable software engineer contributing to high-impact, enterprise-level systems.</p>
                <p>I aim to deepen my expertise in backend engineering while contributing to scalable solutions.</p>
                <p>I believe in aligning technical execution with business goals and continuously evolving with industry standards.</p>
              </>
            }
          />
        </div>

        {/* Professional Philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-2xl p-8 border border-primary/10 relative overflow-hidden text-center"
        >
          <div className="absolute top-4 left-4 opacity-10">
            <Quote className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Professional Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Scalable systems are built on clarity, discipline, and continuous learning.",
              "Technical excellence is achieved through structured thinking and consistent execution.",
              "Engineering is not just about solving problems, but about solving them responsibly and efficiently."
            ].map((quote, i) => (
              <div key={i} className="glass-card p-4 rounded-xl border-t-2 border-primary/50 hover:bg-primary/5 transition-colors">
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
