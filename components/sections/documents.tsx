"use client";

import { useState } from "react";
import { FileText, FolderOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type DocKey = "resume" | "portfolio";

const DOCS: Record<DocKey, { label: string; file: string; icon: typeof FileText }> = {
  resume: { label: "Resume", file: "/resume.pdf", icon: FileText },
  portfolio: { label: "Portfolio", file: "/portfolio.pdf", icon: FolderOpen },
};

export default function Documents() {
  const [active, setActive] = useState<DocKey>("resume");
  const current = DOCS[active];

  return (
    <section id="documents" className="py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 text-white"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Resume <span className="text-[#d4af37]">&</span> Portfolio
          </motion.h2>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex gap-1 p-1 rounded-full border border-[#d4af37]/30 bg-white/5">
            {(Object.keys(DOCS) as DocKey[]).map((key) => {
              const Icon = DOCS[key].icon;
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 ${
                    isActive ? "text-black" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="docToggle"
                      className="absolute inset-0 rounded-full bg-[#d4af37]"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">{DOCS[key].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PDF viewer */}
        <div className="relative rounded-2xl border border-[#d4af37]/25 bg-white/5 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#d4af37]/20">
            <span className="text-sm font-medium text-gray-300">{current.label}.pdf</span>
            <a
              href={current.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#e8c766] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open in new tab
            </a>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <iframe
                src={`${current.file}#view=FitH`}
                title={current.label}
                className="w-full h-[70vh] md:h-[85vh] bg-white"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
