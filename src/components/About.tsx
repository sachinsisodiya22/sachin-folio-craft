import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Introduction Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Introduction</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Frontend Developer with a keen eye for creating intuitive and visually appealing user interfaces. 
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community through freelance work and mentoring.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating seamless user experiences that make a real impact.
            </p>
          </div>

          {/* Cards Section */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="project-card group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground font-medium">Bachelor of Technology</p>
                    <p className="text-muted-foreground">Computer Science Engineering</p>
                    <p className="text-sm text-muted-foreground mt-1">Final Year • Expected 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profession Card */}
            <Card className="project-card group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">Profession</h4>
                    <p className="text-muted-foreground font-medium">Frontend Developer</p>
                    <p className="text-muted-foreground">Specializing in React & Modern Web Technologies</p>
                    <p className="text-sm text-muted-foreground mt-1">2+ Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;