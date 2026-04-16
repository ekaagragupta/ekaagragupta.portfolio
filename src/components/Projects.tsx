import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI-ML", "Web Dev"];

  const projects = [
{
  title: "MemoRAG: Memory-Augmented RAG Framework",
  description: "Designed a memory-augmented retrieval-augmented generation (RAG) system that builds global context representations for improved long-context reasoning. Implemented a multi-stage pipeline (memory → query rewriting → retrieval → generation) to enhance multi-hop question answering and summarization.",
  tech: ["Python", "HuggingFace", "FAISS", "LangChain", "LLMs", "RAG", "Vector DB"],
  category: "AI / LLM System",
  github: "https://github.com/ekaagragupta/mem0RAG",
  live: "#",
  image: "🧠",
  status: "Completed"
},

{
  title: "SEVAS: Satellite Environmental Violation Analysis System",
  description: "Developed a spatio-temporal AI system for detecting and forecasting environmental violations using satellite imagery. Combined CNNs, Vision Transformers, and LSTM models with NDVI/NDWI spectral analysis to predict violations 2–3 weeks in advance.",
  tech: ["Python", "TensorFlow", "OpenCV", "Geospatial AI", "LSTM", "CNN", "Vision Transformer"],
  category: "AI / Computer Vision",
  github: "https://github.com/ekaagragupta/sevas",
  live: "#",
  image: "🌍",
  status: "Completed"
},

{
  title: "GETHER: Explainable AQI Forecasting System",
  description: "Built a spatio-temporal machine learning system for air quality prediction using LSTM-based models and causal analysis. Integrated SHAP for explainability and developed counterfactual simulations to evaluate emission reduction strategies.",
  tech: ["Python", "TensorFlow", "SHAP", "Time Series", "LSTM", "Pandas", "NumPy"],
  category: "AI / Data Science",
  github: "https://github.com/ekaagragupta/gether",
  live: "#",
  image: "🤖",
  status: "Completed"
},
    {
  "title": "MCA e-Consultation Sentiment Analyzer",
  "description": "Developed an AI-powered dashboard for the Ministry of Corporate Affairs that classifies citizen feedback into sentiments (positive, negative, neutral), extracts key themes with word clouds, and generates concise summaries to assist policymakers in decision-making.",
  "tech": ["React", "TypeScript", "Tailwind CSS", "Vite", "Recharts", "Lucide-react", "Python", "scikit-learn", "NLP"],
  "category": "Data analysis system",
  "github": "https://github.com/ekaagragupta/MCA_e-_Consultation",
  "live": "#",
  "image": "📊",
  "status": "Hackathon Prototype"
    },
    
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website built with modern web technologies and smooth animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Dev",
      github: "https://github.com/ekaagragupta/ekaagra-code-flow",
      live: "#",
      image: "💼",
      status: "Completed"
    },
    
    {
      title: "IEEE Computational Intelligence Society Website",
      description: "Contributed to the development of the IEEE CIS website, enhancing user experience and functionality with modern web technologies.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      category: "Web Dev",
      github: "https://github.com/ekaagragupta/IEEE_CIS_25",
      live: "https://ieee-cis-muj.vercel.app/",
      image: "🌐",
      status: "Completed"
    },
    
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my coding journey through various projects and implementations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter 
                  ? "tech-glow" 
                  : "border-border/50 hover:border-primary/50"
              } transition-all duration-300`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="tech-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-dark rounded-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Completed" 
                    ? "bg-secondary/20 text-secondary" 
                    : "bg-accent/20 text-accent"
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border/50 hover:border-primary/50 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="tech-glow flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary group">
            <a 
              href="https://github.com/ekaagragupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View More on GitHub
            </a>
          </Button>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">{projects.length}+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
