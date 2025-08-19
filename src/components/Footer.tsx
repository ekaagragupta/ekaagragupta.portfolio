import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Ekaagra Gupta</h3>
            <p className="text-muted-foreground leading-relaxed">
              CSE Undergrad passionate about AI/ML and creating innovative solutions 
              through code. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ekaagragupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ekaagragupta/" 
                className="p-2 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ekaagrag2006@gmail.com" 
                className="p-2 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 tech-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Contact", "Experience", "Achievements"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Github className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">github.com/ekaagragupta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">ekaagrag2006@gmail.com</span>
              </div>
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Open for internships, collaborations, and exciting projects!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>by Ekaagra Gupta</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
