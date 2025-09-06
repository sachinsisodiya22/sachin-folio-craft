import TechIcon from "./TechIcon";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"],
      gradient: "from-orange-500/20 to-blue-600/20"
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "Material-UI", "Styled Components"],
      gradient: "from-teal-400/20 to-purple-600/20"
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
      gradient: "from-green-600/20 to-blue-600/20"
    },
    {
      category: "Tools & Others",
      skills: ["Git/GitHub", "Docker", "AWS", "Figma", "Webpack", "Vite"],
      gradient: "from-orange-500/20 to-purple-500/20"
    },
    {
      category: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
      gradient: "from-blue-700/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies I wield to craft exceptional digital experiences
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {category.category}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
              
              {/* Tech Icons Grid */}
              <div className={`p-8 rounded-3xl border border-border/30 bg-gradient-to-br ${category.gradient} backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group`}>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group/item relative"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group-hover/item:scale-110">
                        <TechIcon tech={skill} size="lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent-blue/5 rounded-3xl border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group">
            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Always Learning
              </h4>
              <p className="text-muted-foreground text-lg">
                Currently exploring: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Three.js • Framer Motion • WebAssembly</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;