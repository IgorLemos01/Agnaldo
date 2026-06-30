"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SPECIALTIES } from "@/utils/constants";

const colorMap = {
  primary: {
    bg: "rgba(24,59,91,0.07)",
    border: "rgba(24,59,91,0.12)",
    accent: "#183B5B",
    glow: "rgba(24,59,91,0.15)",
  },
  secondary: {
    bg: "rgba(127,169,155,0.1)",
    border: "rgba(127,169,155,0.2)",
    accent: "#7FA99B",
    glow: "rgba(127,169,155,0.2)",
  },
  gold: {
    bg: "rgba(200,169,107,0.08)",
    border: "rgba(200,169,107,0.18)",
    accent: "#C8A96B",
    glow: "rgba(200,169,107,0.15)",
  },
};

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="specialties-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          style={{ background: "radial-gradient(ellipse at top right, rgba(127,169,155,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-14">
          <SectionTitle
            label="Especialidades"
            title="Áreas de "
            highlight="atuação"
            subtitle="Serviços especializados para o desenvolvimento integral de crianças e adolescentes, baseados em metodologias científicas."
          />

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {SPECIALTIES.map((specialty) => {
              const colors = colorMap[specialty.color];

              return (
                <motion.article
                  key={specialty.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: `0 20px 60px ${colors.glow}` }}
                  className="group relative flex flex-col gap-5 p-7 rounded-2xl border bg-white cursor-default transition-all duration-400"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: "white",
                    boxShadow: "0 2px 16px rgba(24,59,91,0.05)",
                  }}
                  aria-label={specialty.title}
                >
                  {/* Top accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute top-0 left-0 h-0.5 w-full rounded-t-2xl origin-left"
                    style={{ backgroundColor: colors.accent }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: colors.bg }}
                    aria-hidden="true"
                  >
                    {specialty.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-heading font-semibold text-lg text-primary leading-snug">
                      {specialty.title}
                    </h3>
                    <p className="text-sm text-dark/60 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>

                  {/* Arrow on hover */}
                  <div
                    className="mt-auto flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1"
                    style={{ color: colors.accent }}
                    aria-hidden="true"
                  >
                    Saiba mais
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
