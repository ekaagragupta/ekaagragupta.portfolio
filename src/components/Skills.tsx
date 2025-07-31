import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-blue-500", icon: "🐍" },
    { name: "JavaScript", level: 85, color: "from-yellow-300 to-yellow-600", icon: "⚡" },
    { name: "C++", level: 80, color: "from-blue-400 to-blue-700", icon: "⚙️" },
    { name: "Java", level: 75, color: "from-orange-400 to-red-600", icon: "☕" },
    { name: "C", level: 70, color: "from-gray-400 to-gray-700", icon: "🔧" },
    { name: "SQL", level: 65, color: "from-green-400 to-teal-600", icon: "🗄️" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Programming Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey through different programming languages and technologies
          </p>
        </div>

        {/* Floating Skill Bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group animate-fade-in floating-tech"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationDuration: `${6 + index}s` 
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="tech-card text-center p-8 h-48 flex flex-col justify-center relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Skill Icon */}
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Level */}
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' 
                    }}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {hoveredSkill === skill.name ? `${skill.level}%` : 'Hover to see level'}
                </span>

                {/* Pulse ring on hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 border-2 border-primary rounded-lg pulse-ring" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Firebase', 'Linux', 'VS Code'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;