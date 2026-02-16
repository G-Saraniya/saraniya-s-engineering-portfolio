import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Smart India Hackathon Participant",
    company: "KGiSL Institute of Technology",
    period: "Competition",
    description: [
      "Participated in the 24-Hour Smart India Hackathon (Internal Round)",
      "Worked on the problem statement: Himachal Pradesh Bus Tracking System",
      "Gained experience in rapid prototyping and teamwork under time pressure"
    ]
  },
  {
    title: "Paper Presenter",
    company: "SONA College, Salem",
    period: "Presentation",
    description: [
      "Presented a paper on Decentralized Banking Application",
      "Demonstrated research and communication skills"
    ]
  },
  {
    title: "Workshop Participant",
    company: "Karpagam College of Engineering",
    period: "Workshop",
    description: [
      "Participated in the 3D Printing and Designing Workshop",
      "Learned about additive manufacturing technologies and design principles"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Exposure</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-11px] md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass-card p-6 rounded-2xl border-l-4 border-primary hover:translate-x-2 transition-transform duration-300 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}>
                    <div className="flex items-center gap-3 mb-2 text-primary">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold tracking-wider text-sm uppercase">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground/90 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Space for Grid alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
