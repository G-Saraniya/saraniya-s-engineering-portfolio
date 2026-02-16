import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70122 09989",
    href: "tel:+917012209989",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: Mail,
    label: "Email",
    value: "saraniyagopalakrishnan@gmail.com",
    href: "mailto:saraniyagopalakrishnan@gmail.com",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    href: null,
    color: "bg-purple-500/10 text-purple-500"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations or opportunities!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl glass-card transition-transform hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground font-medium">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-semibold hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button size="lg" className="rounded-full flex-1" asChild>
                <a href="https://linkedin.com/in/saraniya-gopalakrishnan-a9a91b272" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full flex-1" asChild>
                <a href="https://github.com/g-saraniya" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available for new projects and roles.
              </p>
              <Button className="w-full h-12 text-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity" asChild>
                <a href="mailto:saraniyagopalakrishnan@gmail.com">
                  Say Hello
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
