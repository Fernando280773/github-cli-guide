/* Terminal Noir Design - Navigation Component
 * - Left-anchored sidebar navigation
 * - File tree style section links
 * - Active section highlighting
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  GitBranch, 
  Search, 
  Settings, 
  Zap,
  FolderGit2,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "intro", label: "Introduction", icon: <Terminal className="w-4 h-4" /> },
  { id: "auth", label: "Authentication", icon: <Settings className="w-4 h-4" /> },
  { id: "repos", label: "Repository Management", icon: <FolderGit2 className="w-4 h-4" /> },
  { id: "issues", label: "Issues & PRs", icon: <GitBranch className="w-4 h-4" /> },
  { id: "search", label: "Search & API", icon: <Search className="w-4 h-4" /> },
  { id: "advanced", label: "Advanced Features", icon: <Zap className="w-4 h-4" /> },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border
                   text-foreground hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border
                    z-40 transform transition-transform duration-300 ease-in-out
                    lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-mono font-bold text-foreground">gh</h1>
                <p className="text-xs text-muted-foreground">CLI Reference</p>
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-3 mb-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3">
                Sections
              </span>
            </div>
            <ul className="space-y-1 px-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                               transition-all duration-200 group
                               ${activeSection === item.id 
                                 ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                                 : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'}`}
                  >
                    <span className={activeSection === item.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}>
                      {item.icon}
                    </span>
                    <span className="flex-1 text-left">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <a
              href="https://cli.github.com/manual"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground
                         hover:text-foreground hover:bg-sidebar-accent/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <span>Official Docs</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
