"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DIFFERENTIALS } from "@/utils/constants";

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="differentials-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-20"
          style={{ background: "radial-gradient(ellipse at bottom right, rgba(200,169,107,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <SectionTitle
              label="Diferenciais"
              title="Por que escolher "
              highlight="Agnaldo Oliveira?"
              align="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark/60 leading-relaxed"
            >
              Em um mercado onde a seriedade importa, Agnaldo se destaca pela combinação de
              formação técnica de excelência com um atendimento genuinamente humano e personalizado.
            </motion.p>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #183B5B 0%, #1a4a6e 100%)" }}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-3" aria-hidden="true">🎯</div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Foco em resultados reais
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Cada plano de intervenção é construído com metas claras e mensuráveis,
                  garantindo que o progresso seja real, visível e significativo.
                </p>
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #C8A96B, transparent)" }}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Right – differential cards */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-4"
          >
            {DIFFERENTIALS.map((diff) => (
              <motion.div
                key={diff.number}
                variants={cardVariants}
                whileHover={{ x: 6, boxShadow: "0 8px 32px rgba(24,59,91,0.1)" }}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-white cursor-default transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(24,59,91,0.04)" }}
              >
                {/* Number */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-base text-primary transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,169,107,0.12) 0%, rgba(200,169,107,0.06) 100%)",
                    border: "1.5px solid rgba(200,169,107,0.25)",
                  }}
                  aria-hidden="true"
                >
                  {diff.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-semibold text-base text-primary group-hover:text-secondary transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">{diff.description}</p>
                </div>

                {/* Hover accent */}
                <div
                  className="shrink-0 w-1 h-full rounded-full self-stretch opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to bottom, #C8A96B, #7FA99B)" }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
