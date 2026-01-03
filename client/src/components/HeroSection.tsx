/* Terminal Noir Design - Hero Section
 * - Typewriter effect for headline
 * - Terminal-style visual elements
 * - Animated cursor blink
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "gh --help";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/hero-terminal.png')" }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">GitHub CLI Reference</span>
          </div>
          
          {/* Main heading with typewriter */}
          <div className="mb-6">
            <div className="inline-block bg-card/80 backdrop-blur-sm rounded-lg px-6 py-4 border border-border terminal-glow">
              <div className="flex items-center gap-3 text-left">
                <span className="text-primary font-mono text-2xl md:text-4xl">$</span>
                <span className="font-mono text-2xl md:text-4xl text-foreground">
                  {displayText}
                  <span className={`inline-block w-3 h-8 md:h-10 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </span>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Master the <span className="gradient-text">GitHub CLI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            An interactive reference guide for GitHub CLI commands. 
            Browse commands, copy examples, and streamline your workflow.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContent}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium
                         hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Explore Commands
              <ChevronDown className="w-4 h-4" />
            </button>
            <a
              href="https://cli.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium
                         hover:bg-card transition-colors"
            >
              Install GitHub CLI
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
