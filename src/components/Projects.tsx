import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechIcon from "./TechIcon";
import { Github, ExternalLink, Star, Sparkles } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management. Built with modern React patterns and featuring responsive design with advanced data visualization.",
    image: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true
  };

  const otherProjects = [
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["Next.js", "React", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, beautiful animations, and detailed weather metrics visualization.",
      techStack: ["React", "JavaScript", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      techStack: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog platform with markdown support, user authentication, and content management system.",
      techStack: ["Next.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my recent work, showcasing full-stack applications and innovative solutions
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <Card className="overflow-hidden bg-gradient-to-br from-card via-card/80 to-accent/30 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="h-80 md:h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent-blue/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <div className="relative z-10 text-center p-8">
                    <div className="mb-6 relative">
                      <Sparkles className="h-20 w-20 text-primary mx-auto mb-4 animate-pulse-glow" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
                      <Star className="h-4 w-4" />
                      <span className="font-bold">Featured Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredProject.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.techStack.map((tech) => (
                      <div key={tech} className="flex items-center gap-2 px-3 py-2 bg-background/80 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group/tech">
                        <TechIcon tech={tech} size="sm" showTooltip={false} />
                        <span className="text-sm font-medium text-foreground group-hover/tech:text-primary transition-colors duration-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 font-semibold">
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-6 py-3 font-semibold">
                      <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent-blue/10 flex items-center justify-center border-b border-border/50 group-hover:border-primary/20 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <ExternalLink className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-md hover:bg-primary/10 transition-all duration-300 group/tech">
                      <TechIcon tech={tech} size="sm" showTooltip={false} />
                      <span className="text-xs font-medium text-muted-foreground group-hover/tech:text-primary transition-colors duration-300">{tech}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground font-medium">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1 border-primary/30 hover:border-primary/60 hover:bg-primary/10 font-medium">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/10 group">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Explore All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
