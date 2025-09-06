import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light">Sachin Sisodia</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4 text-primary-light">
            Frontend Developer
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Building fast, modern, and user-focused applications that make a difference
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your-email@gmail.com" className="social-icon">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;