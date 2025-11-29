import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import { 
  SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, 
  SiMysql, SiArduino, SiC
} from "react-icons/si";

const Hero = () => {
  const floatingIcons = [
    { Icon: SiReact, delay: 0, duration: 6, color: "#61DAFB" },
    { Icon: SiPython, delay: 0.5, duration: 7, color: "#3776AB" },
    { Icon: SiJavascript, delay: 1, duration: 6.5, color: "#F7DF1E" },
    { Icon: SiHtml5, delay: 1.5, duration: 7.5, color: "#E34F26" },
    { Icon: SiCss3, delay: 2, duration: 6, color: "#1572B6" },
    { Icon: SiMysql, delay: 2.5, duration: 7, color: "#4479A1" },
    { Icon: SiArduino, delay: 0.8, duration: 6.8, color: "#00979D" },
    { Icon: SiC, delay: 1.8, duration: 7.2, color: "#A8B9CC" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => {
          const angle = (index / floatingIcons.length) * 360;
          const radius = 250;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.6, 
                scale: 1,
                x: [x, x + 20, x],
                y: [y, y - 30, y],
              }}
              transition={{
                opacity: { delay: item.delay, duration: 0.5 },
                scale: { delay: item.delay, duration: 0.5 },
                x: { delay: item.delay + 0.5, duration: item.duration, repeat: Infinity, ease: "easeInOut" },
                y: { delay: item.delay + 0.5, duration: item.duration, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <item.Icon size={32} style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-foreground"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              Saraniya G
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            I'm passionate about{" "}
            <span className="text-primary">Building Websites and IoT solutions</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            I am an Electronics and Communication Engineering graduate focused on software development and real-world problem solving. 
            I specialize in building smart applications, integrating IoT and embedded systems with clean, 
            scalable software to deliver efficient and meaningful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:opacity-90 transition-smooth shadow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              asChild
            >
              <a href="#contact">
                Connect With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 mt-8"
          >
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-smooth"
              asChild
            >
              <a href="https://github.com/g-saraniya" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-smooth"
              asChild
            >
              <a href="https://linkedin.com/in/g-saraniya" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-primary transition-smooth"
              asChild
            >
              <a href="mailto:saraniyagopalakrishnan@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
        <ChevronDown className="h-6 w-6 text-primary mx-auto animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
