import { Button } from "@/components/ui/button";
import { Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Transforming Ideas into Code";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 particle-bg" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Name with glow effect */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-fade-in">
            Ekaagra Gupta
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground animate-fade-in animation-delay-200">
            Computer science major | AI/ML Enthusiast | Open-source contributor
          </h2>
          
          {/* Animated subtitle */}
          <div className="text-xl md:text-2xl text-primary font-medium min-h-[2rem] animate-fade-in animation-delay-400">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in animation-delay-600">
            <Button size="lg" className="tech-glow group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <a href="src/components/resume_eg.pdf" download className="flex items-center">
              Download My CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
              <a href="#contact" className="flex items-center">
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8 animate-fade-in animation-delay-800">
            <a 
              href="https://github.com/ekaagragupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ekaagragupta/" 
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ekaagrag2006@gmail.com" 
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-1000">
        <a href="#about" className="scroll-indicator">
          <ChevronDown className="h-8 w-8 text-primary" />
        </a>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full floating-tech" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full floating-tech animation-delay-1000" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent/30 rounded-full floating-tech animation-delay-2000" />
      <div className="absolute bottom-60 right-10 w-5 h-5 bg-primary/20 rounded-full floating-tech animation-delay-500" />
    </section>
  );
};

export default Hero;