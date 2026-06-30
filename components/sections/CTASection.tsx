"use client";

import { motion } from "framer-motion";
import { WhatsAppButton, Button } from "@/components/ui/Button";
import { INSTAGRAM_URL } from "@/utils/constants";

export function CTASection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #183B5B 0%, #0d2236 50%, #122A4E 100%)" }}
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,169,107,0.15) 0%, transparent 70%)" }}
        />

        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Horizontal accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center gap-10 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(200,169,107,0.15)",
                border: "1px solid rgba(200,169,107,0.3)",
                color: "#C8A96B",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-gold"
              />
              Comece sua jornada hoje
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Cada avanço
              <br />
              <span className="text-gradient-gold">importa.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-white/60 font-heading font-light"
            >
              Comece hoje.
            </motion.p>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/55 leading-relaxed max-w-xl"
          >
            Não espere mais para investir no desenvolvimento da sua criança.
            Um primeiro contato pode mudar toda uma trajetória de vida.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* WhatsApp button with pulse */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl bg-gold"
                aria-hidden="true"
              />
              <WhatsAppButton size="xl" label="Agendar Atendimento via WhatsApp" />
            </div>

            <Button
              variant="ghost"
              size="lg"
              href={INSTAGRAM_URL}
              className="text-white/70 hover:text-white hover:bg-white/10 border border-white/20"
              aria-label="Seguir no Instagram"
            >
              Seguir no Instagram
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-white/10"
          >
            {[
              { icon: "🔒", label: "Atendimento sigiloso" },
              { icon: "✅", label: "ABPp registrado nº 730" },
              { icon: "🎓", label: "Especialista certificado" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-sm" aria-hidden="true">{item.icon}</span>
                <span className="text-xs text-white/50 font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
