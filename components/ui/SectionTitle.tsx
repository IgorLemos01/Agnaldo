"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const isDark = theme === "dark";

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full w-fit",
            isDark
              ? "bg-white/10 text-gold-300 border border-white/20"
              : "bg-primary/8 text-secondary border border-secondary/20"
          )}
          style={{ background: isDark ? "rgba(200,169,107,0.15)" : "rgba(127,169,155,0.12)" }}
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-heading font-bold leading-tight",
          "text-3xl sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-primary"
        )}
      >
        {parts[0]}
        {highlight && (
          <span className="text-gradient-gold">{highlight}</span>
        )}
        {parts[1]}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            isDark ? "text-white/70" : "text-dark/60"
          )}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ originX: align === "center" ? 0.5 : align === "left" ? 0 : 1 }}
        className={cn(
          "h-0.5 w-16 rounded-full mt-1",
          isDark ? "bg-gold" : "bg-gold"
        )}
      />
    </div>
  );
}
