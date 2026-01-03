/* Terminal Noir Design - Command Card Component
 * - Card display for command categories
 * - Hover animations
 * - Icon support
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CommandCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  commands: string[];
}

export function CommandCard({ title, description, icon, commands }: CommandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 
                 transition-all duration-300 terminal-glow"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                          text-primary group-hover:bg-primary/20 transition-colors shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {commands.map((cmd, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary 
                           font-mono text-xs text-muted-foreground"
              >
                {cmd}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CommandCard;
