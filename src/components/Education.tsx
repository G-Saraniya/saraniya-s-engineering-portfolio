import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Trophy } from "lucide-react";

const education = [
  {
    degree: "B.E Electronics and Communication Engineering",
    institution: "KGiSL Institute of Technology",
    period: "2022 – 2026",
    location: "Coimbatore, Tamil Nadu",
    grade: "CGPA: 7.65"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Government Boys Higher Secondary School",
    period: "2022",
    location: "Nemmara",
    grade: "86.3%"
  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "Government Girls Vocational Higher Secondary School",
    period: "2020",
    location: "Nemmara",
    grade: "93.3%"
  }
];

const certifications = [
  "SkillRack Certified – C Programming, Python, MySQL",
  "IBM Certified – Web Development & React Basics",
  "Meta Certified – Blockchain Basics",
  "Completed 3D Printing & Designing Workshop"
];

const achievements = [
  "Participant – Smart India Hackathon (Internal Round)",
  "Research Presenter – Decentralized Banking Application (SONA College, Salem)",
  "Maintained consistent academic performance (CGPA: 7.65)"
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary w-8 h-8" /> Academic Journey
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-50" />
                <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {edu.period}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.location}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  {edu.grade}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-primary w-8 h-8" /> Certifications
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="font-medium text-foreground/90 text-sm">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="text-primary w-8 h-8" /> Achievements
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <ul className="space-y-4">
                  {achievements.map((ach, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trophy className="w-3 h-3 text-yellow-500" />
                      </div>
                      <span className="font-medium text-foreground/90 text-sm">{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
