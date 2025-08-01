import { Trophy, Award, Star, Medal, Zap, Target } from "lucide-react";
import { useState } from "react";

const Achievements = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const achievements = [
    {
      icon: Trophy,
      title: "Prompt Engineering & Programming with OpenAI",
      category: "Columbia University",
      year: "2025",
      description: "Completed a comprehensive course on prompt engineering and programming with OpenAI, mastering techniques to build AI applications.",
      details: "Learned advanced prompt design, API integration, and AI application development using OpenAI's tools.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      title: "Essentials in Generative AI",
      category: "Microsoft and LinkedIn",
      year: "2025",
      description: "Completed a certification in Generative AI, focusing on foundational concepts and practical applications.",
      details: "Gained insights into generative models, their applications in various domains, and hands-on experience with AI tools.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Star,
      title: "Introduction to Generative AI Studio",
      category: "Google Cloud Skills Boost",
      year: "2025",
      description: " Completed an introductory course on Google Cloud's Generative AI Studio, learning to build and deploy AI models.",
      details: "Explored Google Cloud's AI tools, focusing on model training, deployment, and integration with applications.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Medal,
      title: "Generative AI: The Evolution of Thoughtful Online Search",
      category: "LinkedIn Learning",
      year: "2025",
      description: "Completed a course on the evolution of online search with Generative AI, understanding its impact on information retrieval.",
      details: "Learned how Generative AI transforms search engines, enhancing user experience and information discovery and retrieval.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: Zap,
      title: "Advanced Software Engineering",
      category: "Company- Walmart USA",
      year: "2025",
      description: "Completed an advanced software engineering course focusing on modern development practices and tools.",
      details: "Covered topics like microservices, cloud-native development, and DevOps practices,  preparing for real-world software engineering challenges.",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: Target,
      title: "GenAI Powered Data Analytics ",
      category: "Company- Tata Group",
      year: "2025",
      description: "Completed a course on GenAI powered data analytics, learning to leverage AI for data-driven decision making.",
      details: "Explored AI techniques for data analysis, visualization, and predictive modeling, enhancing skills in data science and analytics using AI tools and frameworks.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Certifications that mark my journey in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative h-80 perspective-1000 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              {/* Card Container */}
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="tech-card h-full flex flex-col items-center justify-center text-center p-6 group cursor-pointer">
                    {/* Icon with gradient background */}
                    <div className={`p-4 rounded-full bg-gradient-to-br ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
                      {achievement.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    {/* Year */}
                    <div className="text-sm text-accent font-medium mb-3">{achievement.year}</div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Hover for details →
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="tech-card h-full flex flex-col justify-center p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-4 text-primary">{achievement.title}</h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.details}
                    </p>
                    
                    {/* Achievement Badge */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">Achievement Unlocked</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="tech-card">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Days Coding</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Competitions</div>
            </div>
            <div className="tech-card">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;