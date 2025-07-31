import { Button } from "@/components/ui/button";
import { Code, Brain, Database, Sparkles } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Brain, title: "Machine Learning", desc: "Deep learning, neural networks, and AI algorithms" },
    { icon: Code, title: "Web Development", desc: "Full-stack development with modern frameworks" },
    { icon: Database, title: "Data Science", desc: "Data analysis and visualization techniques" },
    { icon: Sparkles, title: "Problem Solving", desc: "Competitive programming and algorithmic thinking" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="tech-card">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">2nd-year Computer Science Engineering student</span> with 
                a specialization in <span className="text-accent font-semibold">Artificial Intelligence and Machine Learning</span>. 
                Currently pursuing my B.Tech degree, I'm deeply fascinated by the intersection of technology and innovation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech started with curiosity about how machines can think and learn. Today, I'm actively 
                exploring various domains including machine learning algorithms, web development, and competitive programming. 
                I believe in learning by doing and constantly challenging myself with new projects and technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="tech-glow">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" className="border-secondary/50 hover:border-secondary">
                  View My Work
                </Button>
              </div>
            </div>
          </div>

          {/* Interest Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="tech-card group hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-gradient-tech text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <interest.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm">{interest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text">2+</div>
            <div className="text-muted-foreground">Years Coding</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text">6+</div>
            <div className="text-muted-foreground">Languages</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text">∞</div>
            <div className="text-muted-foreground">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;