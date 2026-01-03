/* Terminal Noir Design - Section Component
 * - Consistent section layout
 * - Section headers with icons
 * - Animated entrance
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function Section({ id, title, description, icon, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            {icon && (
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          </div>
          {description && (
            <p className="text-muted-foreground text-lg max-w-3xl">{description}</p>
          )}
        </div>
        
        {/* Section content */}
        <div className="space-y-8">
          {children}
        </div>
      </motion.div>
    </section>
  );
}

export default Section;
