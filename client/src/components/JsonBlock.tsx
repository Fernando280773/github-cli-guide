/* Terminal Noir Design - JSON Block Component
 * - Syntax highlighted JSON display
 * - Collapsible sections
 * - Copy functionality
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ChevronDown, ChevronRight, Code2 } from "lucide-react";

interface JsonBlockProps {
  data: object;
  title?: string;
  collapsible?: boolean;
}

export function JsonBlock({ data, title, collapsible = false }: JsonBlockProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(!collapsible);
  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting
  const highlightJson = (json: string) => {
    return json
      .replace(/"([^"]+)":/g, '<span class="text-accent">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-primary">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-amber-400">$1</span>')
      .replace(/: (true|false|null)/g, ': <span class="text-purple-400">$1</span>');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-border overflow-hidden terminal-glow"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
        <div className="flex items-center gap-2">
          {collapsible && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          )}
          <Code2 className="w-4 h-4 text-accent" />
          <span className="text-xs text-muted-foreground font-mono">{title || "JSON Output"}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium
                     text-muted-foreground hover:text-foreground hover:bg-secondary
                     transition-all duration-200"
          aria-label="Copy JSON"
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

      {/* Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <pre className="p-4 bg-background/50 font-mono text-xs overflow-x-auto">
              <code
                dangerouslySetInnerHTML={{ __html: highlightJson(jsonString) }}
                className="text-foreground"
              />
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default JsonBlock;
