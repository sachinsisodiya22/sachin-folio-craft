import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Globe, Star } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {/* Frontend Developer */}
              <div className="relative flex items-center">
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="project-card group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <h3 className="text-xl font-bold text-foreground">Frontend Developer</h3>
                            <Badge variant="secondary" className="w-fit">2022 - Present</Badge>
                          </div>
                          <p className="text-muted-foreground font-medium mb-3">Full-time Development Role</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Developing responsive web applications using React, Next.js, and modern frontend technologies. 
                            Collaborating with design and backend teams to deliver exceptional user experiences.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="skill-badge">React</Badge>
                            <Badge className="skill-badge">TypeScript</Badge>
                            <Badge className="skill-badge">Tailwind CSS</Badge>
                            <Badge className="skill-badge">Next.js</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Freelance Developer */}
              <div className="relative flex items-center md:justify-end">
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                  <Card className="project-card group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <h3 className="text-xl font-bold text-foreground">Freelance Developer</h3>
                            <Badge variant="secondary" className="w-fit">2021 - 2022</Badge>
                          </div>
                          <p className="text-muted-foreground font-medium mb-3">Upwork • Fiverr • Remote Projects</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Successfully completed 25+ projects for international clients. Specialized in building 
                            custom web applications, landing pages, and e-commerce solutions with high client satisfaction rates.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="skill-badge">JavaScript</Badge>
                            <Badge className="skill-badge">HTML/CSS</Badge>
                            <Badge className="skill-badge">WordPress</Badge>
                            <Badge className="skill-badge">UI/UX</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Achievements */}
              <div className="relative flex items-center">
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-background shadow-lg z-10"></div>
                
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="project-card group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                          <Star className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <h3 className="text-xl font-bold text-foreground">Key Achievements</h3>
                            <Badge variant="secondary" className="w-fit">2021 - Present</Badge>
                          </div>
                          <div className="space-y-2 text-muted-foreground">
                            <p>• 98% Client Satisfaction Rate on Upwork</p>
                            <p>• Top Rated Freelancer Status</p>
                            <p>• 50+ Successful Project Deliveries</p>
                            <p>• Contributed to 10+ Open Source Projects</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;