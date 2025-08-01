import { GraduationCap, Code, Trophy, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      year: "2024 - Present",
      title: "B.Tech CSE (AI/ML)",
      subtitle: "Manipal University Jaipur ",
      description: "Pursuing Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. Currently in 2nd year with focus on core programming concepts and AI fundamentals.",
      icon: GraduationCap,
      color: "primary"
    },
    {
      year: "2024",
      title: "Innovation Ambassador",
      subtitle: "Innovation cell ,Ministry of Education",
      description: "Selected as an Innovation Ambassador to promote innovation and entrepreneurship among students. Engaged in workshops, hackathons, and mentoring sessions to foster a culture of innovation.",
      icon: Trophy,
      color: "secondary"
    },
    {
      year: "2025",
      title: "Tech-Contributor at GSSoC",
      subtitle: "Open Source Contributions",
      description: "Contributed to open source projects during GSSoC, enhancing skills in collaboration, version control, and real-world software development practices.",
      icon: Code,
      color: "accent"
    },
    {
      year: "2025",
      title: "Internshala Student Partner",
      subtitle: "Company- Internshala",
      description: "Served as an Internshala Student Partner, promoting online learning and internships among peers. Organized workshops and webinars to help students gain practical skills.",
      icon: BookOpen,
      color: "primary"
    },
     {
      year: "2025",
      title: "Technical Joint head",
      subtitle: "DevForge Club ",
      description: "Leading the technical team of DevForge Club, focusing on organizing coding events, workshops, and hackathons to enhance technical skills among club members.",
      icon: Code,
      color: "primary"
    },
    {
      year: "2025",
      title: "Deputy Secretary",
      subtitle: "Teach for India Club",
      description: " Bridging cross domains—coordinating efforts in managing the Teach for India Club, focusing on educational initiatives and community outreach programs to promote quality education.",
      icon: BookOpen,
      color: "secondary"
    },
    {
      year: "2025",
      title: "Joint head of Sponsorship & Curations",
      subtitle: "IEEE Computational Intelligence Society, MUJ",
      description: "Managing sponsorships and curations for IEEE CIS, ensuring successful events and collaborations. Focused on enhancing the society's outreach and engagement through strategic partnerships.",
      icon: Trophy,
      color: "accent"
    },
    {
      year: "2025",
      title: "Marketing Senior Working Team Member",
      subtitle: "AI-ML Community, MUJ",
      description: "Contributing to the AI-ML Community's marketing efforts, promoting events and initiatives through social media and outreach programs. Focused on increasing community engagement and awareness.",
      icon: GraduationCap,
      color: "primary"
    },
    {
      year: "2025",
      title: "Corporate Core Committee Member",
      subtitle: "Genesis Tech Fest, MUJ",
      description: "Assisting in organizing the Genesis Tech Fest, focusing on corporate partnerships and sponsorships. Aimed at enhancing the fest's industry connections and providing students with networking opportunities.",
      icon: Code,
      color: "secondary"
    }

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My learning journey and milestones in the world of technology
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div 
                className={`w-5/12 ${
                  visibleItems.includes(index) 
                    ? 'animate-fade-in' 
                    : 'opacity-0 transform translate-x-8'
                } transition-all duration-700`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="tech-card group">
                  <div className="flex items-start space-x-4">
                    <div 
                      className={`p-3 rounded-full bg-gradient-tech text-primary-foreground group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="text-accent font-medium mb-3">{item.subtitle}</div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div 
                  className={`w-6 h-6 rounded-full bg-gradient-tech border-4 border-background transition-all duration-500 ${
                    visibleItems.includes(index) ? 'scale-125 shadow-glow' : 'scale-100'
                  }`}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="tech-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Currently Working On</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span>Advanced Python Programming</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-200" />
                <span>Machine Learning Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-400" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse animation-delay-600" />
                <span>Open Source Contributions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;