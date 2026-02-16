import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "Saraniya demonstrates a structured engineering mindset and strong commitment to delivering quality work.",
        author: "Faculty Mentor",
        role: "Academic Guide"
    },
    {
        text: "Her ability to understand backend logic and implement clean database-driven solutions reflects strong technical maturity.",
        author: "Project Guide",
        role: "Technical Lead"
    },
    {
        text: "She is dependable, detail-oriented, and adapts quickly in collaborative environments.",
        author: "Hackathon Team Member",
        role: "Peer Collaborator"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-secondary/5">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span className="gradient-text">Testimonials</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl relative group"
                        >
                            <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                                <Quote className="w-8 h-8" />
                            </div>

                            <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{t.author}</h4>
                                    <p className="text-xs text-primary">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
