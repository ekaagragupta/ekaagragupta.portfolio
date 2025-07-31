import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate visitor count - In real app, you'd use an API like countapi.xyz
    const getVisitorCount = () => {
      // Check if visitor has been here before
      const existingCount = localStorage.getItem('portfolioVisitorCount');
      let count = existingCount ? parseInt(existingCount) : Math.floor(Math.random() * 1000) + 500;
      
      // If new visitor, increment count
      const lastVisit = localStorage.getItem('lastVisit');
      const today = new Date().toDateString();
      
      if (lastVisit !== today) {
        count += 1;
        localStorage.setItem('portfolioVisitorCount', count.toString());
        localStorage.setItem('lastVisit', today);
      }
      
      return count;
    };

    const count = getVisitorCount();
    
    // Animate counter
    setIsAnimating(true);
    let currentCount = 0;
    const increment = Math.ceil(count / 50);
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= count) {
        currentCount = count;
        clearInterval(timer);
        setIsAnimating(false);
      }
      setVisitorCount(currentCount);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in">
      <div className="tech-card p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Eye className={`h-5 w-5 text-primary ${isAnimating ? 'animate-pulse' : ''}`} />
            {isAnimating && (
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 pulse-ring" />
            )}
          </div>
          <div className="text-sm">
            <div className="text-muted-foreground font-medium">Visitors</div>
            <div className={`text-xl font-bold gradient-text ${isAnimating ? 'animate-pulse' : ''}`}>
              {visitorCount.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;