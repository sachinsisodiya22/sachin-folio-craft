import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"]
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "Material-UI", "Styled Components"]
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git/GitHub", "Docker", "AWS", "Figma", "Webpack", "Vite"]
    },
    {
      category: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    className="skill-badge text-base px-6 py-3"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <div className="text-left">
              <h4 className="text-xl font-bold text-foreground mb-2">Always Learning</h4>
              <p className="text-muted-foreground">
                Currently exploring: <span className="font-medium text-primary">Three.js, Framer Motion, WebAssembly</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;