import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "ekaagragupta",
      href: "https://github.com/ekaagragupta",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ekaagra@example.com",
      href: "mailto:ekaagra@example.com",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="tech-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and programming. Feel free to reach out through any 
                of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-full bg-gradient-tech text-primary-foreground group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.label}</div>
                      <div className={`text-sm ${contact.color}`}>{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="tech-card text-center">
                <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="tech-card text-center">
                <div className="text-2xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="tech-card">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full tech-glow group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Additional Contact Note */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Note:</strong> I usually respond within 24 hours. 
                For urgent matters, feel free to reach out directly via email or GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;