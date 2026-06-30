"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppButton } from "@/components/ui/Button";
import { FOR_WHOM_ITEMS } from "@/utils/constants";

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ForWhom() {
  return (
    <section
      id="atendimento"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #183B5B 0%, #0F2840 55%, #122A4E 100%)" }}
      aria-labelledby="forwhom-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-white/5"
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,107,0.8), transparent)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text content */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              label="Para Quem"
              title="O atendimento é"
              highlight=" para você"
              subtitle="Se a sua criança ou adolescente apresenta alguma dessas situações, Agnaldo pode ajudar."
              align="left"
              theme="dark"
            />

            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {FOR_WHOM_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={tagVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl border cursor-default transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  <span className="text-base" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm font-medium text-white/85">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="text-white/60 text-sm leading-relaxed">
                Não espere a situação se agravar. Quanto mais cedo a intervenção, melhores
                e mais rápidos são os resultados. Dê o primeiro passo hoje.
              </p>
              <WhatsAppButton size="lg" label="Agendar Avaliação Gratuita" />
            </motion.div>
          </div>

          {/* Right – visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-sm">
              {/* Central card */}
              <div
                className="rounded-3xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
                }}
              >
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Cada criança é única
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  O desenvolvimento não segue um padrão único. Cada história merece
                  um cuidado personalizado e especializado.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  {[
                    { value: "3+", label: "Anos de atendimento" },
                    { value: "95%", label: "Evolução dos pacientes" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-heading font-bold text-2xl text-gold">{stat.value}</div>
                      <div className="text-xs text-white/50 mt-0.5 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orbit tags */}
              {[
                { top: "-16px", left: "50%", translate: "-50%", label: "TDAH" },
                { top: "30%", right: "-20px", label: "TEA" },
                { bottom: "-16px", left: "50%", translate: "-50%", label: "Dislexia" },
                { top: "30%", left: "-20px", label: "Desenvolvimento" },
              ].map((tag, i) => (
                <motion.div
                  key={tag.label}
                  animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="absolute px-3 py-1.5 rounded-xl text-xs font-semibold text-white"
                  style={{
                    ...tag,
                    background: "rgba(200,169,107,0.85)",
                    color: "#183B5B",
                    boxShadow: "0 4px 16px rgba(200,169,107,0.25)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
