import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E Electronics and Communication Engineering",
    institution: "KGiSL Institute of Technology",
    period: "2022 – 2026",
    location: "Coimbatore"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "GBHSS Nemmara",
    period: "2021 – 2022",
    location: "Kerala"
  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "GGVHSS Nemmara",
    period: "2019 – 2020",
    location: "Kerala"
  }
];

const certifications = [
  "Introduction to Web Development (HTML, CSS, JS) – IBM",
  "React Basics – IBM",
  "Blockchain Basics – Meta",
  "Introduction to IoT – IBM",
  "Embedded Software & Hardware Architecture – University of Colorado Boulder"
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="bg-card shadow-card rounded-xl p-6 border border-border hover:shadow-hover transition-smooth"
                  >
                    <h4 className="font-bold text-lg text-card-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.period} • {edu.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
                className="bg-card shadow-card rounded-xl p-6 border border-border"
              >
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-card-foreground"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
