/* Terminal Noir Design - Command Block Component
 * - Monospace font with syntax highlighting
 * - Copy-to-clipboard with visual feedback
 * - Terminal-style prompt indicator
 */

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandBlockProps {
  command: string;
  description?: string;
  output?: string;
}

export function CommandBlock({ command, description, output }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {description && (
        <p className="text-muted-foreground text-sm mb-2">{description}</p>
      )}
      <div className="code-block terminal-glow overflow-hidden">
        {/* Command header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Terminal</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium
                       text-muted-foreground hover:text-foreground hover:bg-secondary
                       transition-all duration-200"
            aria-label="Copy command"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5 text-primary"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        
        {/* Command content */}
        <div className="p-4 font-mono text-sm">
          <div className="flex items-start gap-2">
            <span className="text-primary select-none">$</span>
            <code className="text-foreground break-all">{command}</code>
          </div>
        </div>
        
        {/* Output section */}
        {output && (
          <div className="border-t border-border bg-background/50 p-4 font-mono text-xs">
            <pre className="text-muted-foreground whitespace-pre-wrap overflow-x-auto">
              {output}
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CommandBlock;
