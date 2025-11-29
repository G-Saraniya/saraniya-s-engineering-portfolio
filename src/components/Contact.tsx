import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7012209989",
    href: "tel:+917012209989"
  },
  {
    icon: Mail,
    label: "Email",
    value: "saraniyagopalakrishnan@gmail.com",
    href: "mailto:saraniyagopalakrishnan@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/g-saraniya"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/g-saraniya"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-card shadow-card rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-center text-lg text-muted-foreground mb-12">
              I'm always open to discussing new opportunities, projects, or just connecting. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-card-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-card-foreground font-medium">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="shadow-card hover:shadow-hover transition-smooth"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="mr-2 h-5 w-5" />
                      {social.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
