import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-background">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
              <span className="text-primary text-sm font-medium">Available for Hire</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm <span className="text-gradient">Saraniya G</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Java Developer & Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about building scalable backend systems and robust applications.
              Specializing in Java, Spring Boot, and Full-stack development with a strong
              foundation in modern software architecture.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
                asChild
              >
                <a href="#contact">
                  Connect With Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/10 hover:bg-white/5 hover:text-white transition-all"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              {[
                { icon: Github, href: "https://github.com/g-saraniya" },
                { icon: Linkedin, href: "https://linkedin.com/in/saraniya-gopalakrishnan-a9a91b272" },
                { icon: Mail, href: "mailto:saraniyagopalakrishnan@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors transform hover:scale-110"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-[400px] h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[2px] opacity-70 animate-pulse" />
              <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center overflow-hidden border-4 border-background z-10">
                <img
                  src="/profile-placeholder.jpg"
                  alt="Saraniya G"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground/50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
