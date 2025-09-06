import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management. Built with modern React patterns and featuring responsive design.",
    image: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true
  };

  const otherProjects = [
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["Next.js", "React", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, beautiful animations, and detailed weather metrics visualization.",
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog platform with markdown support, user authentication, and content management system.",
      techStack: ["Next.js", "MongoDB", "NextAuth.js", "MDX"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and creative solutions
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="project-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <div className="relative z-10 text-center">
                    <Star className="h-16 w-16 text-primary mx-auto mb-4" />
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Featured Project
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">
                    {featuredProject.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech) => (
                      <Badge key={tech} className="skill-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild className="bg-primary hover:bg-primary-dark">
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="project-card h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <ExternalLink className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
