import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Twitter, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's Next?
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out to me if you're looking for an excellent and dedicated developer, 
            have a question, or just want to connect.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="p-4 rounded-full bg-white/20 w-fit mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Me</h3>
              <p className="text-white/80 mb-6">
                Ready to start your next project? Let's discuss how I can help bring your ideas to life.
              </p>
              <Button 
                asChild 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <a href="mailto:your-email@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  your-email@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="p-4 rounded-full bg-white/20 w-fit mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Me</h3>
              <p className="text-white/80 mb-6">
                Prefer to talk? I'm always happy to discuss opportunities and answer any questions you might have.
              </p>
              <Button 
                asChild 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <a href="tel:+91-XXXXXXXXXX">
                  <Phone className="mr-2 h-4 w-4" />
                  +91-XXXXXXXXXX
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LeetCode Profile"
            >
              <ExternalLink className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/80 flex items-center justify-center gap-2 text-lg">
            Designed & Built with <Heart className="h-5 w-5 text-red-400 animate-pulse" /> by 
            <span className="font-bold text-white">Sachin Sisodia</span>
          </p>
          <p className="text-white/60 mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;