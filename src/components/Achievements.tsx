import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  "3D Printing & Designing Workshop – Karpagam College of Engineering",
  "Smart India Hackathon – Internal Round (Himachal Pradesh Bus Tracking System)",
  "PYEXPO Project Presentation – Chatbot Application",
  "Paper Presentation – Decentralized Banking Application (SONA College, Salem)",
  "SkillRack Certifications – C, Python, MySQL"
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-card shadow-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Highlights</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth"
                >
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
