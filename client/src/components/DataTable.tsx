/* Terminal Noir Design - Data Table Component
 * - Terminal-style table display
 * - Responsive design
 * - Hover effects
 */

import { motion } from "framer-motion";

interface Column {
  key: string;
  header: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string | number>[];
  title?: string;
}

export function DataTable({ columns, data, title }: DataTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg border border-border terminal-glow"
    >
      {title && (
        <div className="px-4 py-3 bg-card border-b border-border">
          <h4 className="font-mono text-sm text-muted-foreground">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-left text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, index) => (
              <tr
                key={index}
                className="bg-card hover:bg-secondary/30 transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 text-sm font-mono text-foreground ${col.className || ''}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default DataTable;
