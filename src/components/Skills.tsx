import { motion } from "framer-motion";
import { Code2, Brain, Database, Terminal, Cpu, Globe } from "lucide-react";

const technicalSkills = [
  { name: "Java", icon: Code2, color: "text-red-500" },
  { name: "C", icon: Terminal, color: "text-blue-500" },
  { name: "HTML/CSS", icon: Globe, color: "text-orange-500" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
  { name: "React", icon: Code2, color: "text-cyan-500" },
  { name: "MySQL", icon: Database, color: "text-blue-600" },
  { name: "IoT", icon: Cpu, color: "text-green-500" },
  { name: "Git", icon: Terminal, color: "text-orange-600" }
];

const softSkills = [
  "Problem Solving", "Team Collaboration",
  "Time Management", "Communication",
  "Adaptability", "Leadership"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Code2 className="text-primary" /> Technical Proficiency
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 text-center border-white/5 hover:border-primary/50"
                >
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Brain className="text-primary" /> Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-5 py-3 bg-secondary/30 rounded-full border border-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
