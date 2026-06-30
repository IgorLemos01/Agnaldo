"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/utils/constants";

const CREDENTIALS_BADGES = [
  { label: "Pedagogo" },
  { label: "Psicopedagogo ABPp/SE nº 730" },
  { label: "Especialista ABA" },
  { label: "Neuropsicopedagogo" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-hero"
        aria-hidden="true"
      />

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large circle top-right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/8"
        />

        {/* Glowing blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(127,169,155,0.25) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,169,107,0.2) 0%, transparent 70%)" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/50"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Overlay gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(247,248,250,0.15), transparent)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-custom relative z-10 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/20 text-white/80"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
              >
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                Atendimento Especializado
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <span className="block text-sm font-medium tracking-[0.25em] uppercase text-white/50 mb-1">
                Bem-vindo ao consultório de
              </span>
              <h1 className="font-heading font-bold text-white leading-none">
                <span className="block text-5xl sm:text-6xl lg:text-7xl">Agnaldo</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient-gold">Oliveira</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-heading font-semibold text-white/90 leading-snug"
            >
              Transformando desenvolvimento em{" "}
              <em className="not-italic text-secondary">possibilidades reais</em>
            </motion.p>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/65 leading-relaxed max-w-lg"
            >
              Atendimento especializado em psicopedagogia, ABA e neuropsicopedagogia
              para promover desenvolvimento, aprendizagem e autonomia.
            </motion.p>

            {/* Credential badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {CREDENTIALS_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg text-white/80 border border-white/15"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
              <WhatsAppButton size="lg" label="Agendar Avaliação" />
              <Button
                variant="outline"
                size="lg"
                href="#especialidades"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                aria-label="Conhecer especialidades de Agnaldo Oliveira"
              >
                Conhecer Serviços
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["MF", "CE", "AP", "RT"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `hsl(${190 + i * 20}, 40%, ${40 + i * 5}%)`,
                    }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-white/55 mt-0.5">
                  +100 famílias atendidas
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative"
            aria-hidden="true"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                background: "conic-gradient(from 0deg, rgba(200,169,107,0.0) 0%, rgba(200,169,107,0.2) 30%, rgba(200,169,107,0.0) 60%, rgba(127,169,155,0.2) 90%, rgba(200,169,107,0.0) 100%)",
              }}
            />

            {/* Inner glow */}
            <div
              className="w-80 h-80 rounded-full flex items-center justify-center relative"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Profile area */}
              <div className="text-center">
                <div
                  className="w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-5xl font-heading"
                  style={{
                    background: "linear-gradient(135deg, rgba(127,169,155,0.3) 0%, rgba(24,59,91,0.6) 100%)",
                    border: "3px solid rgba(200,169,107,0.4)",
                    boxShadow: "0 0 40px rgba(200,169,107,0.15), inset 0 0 40px rgba(24,59,91,0.3)",
                  }}
                >
                  AO
                </div>
              </div>

              {/* Floating credential tags */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 px-3 py-2 rounded-xl text-xs font-semibold text-primary"
                style={{
                  background: "rgba(200,169,107,0.95)",
                  boxShadow: "0 4px 20px rgba(200,169,107,0.3)",
                }}
              >
                🧠 Neuropsicopedagogo
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-10 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                }}
              >
                🧩 Especialista ABA
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-16 -translate-y-1/2 px-3 py-2 rounded-xl text-xs font-semibold text-white"
                style={{
                  background: "rgba(127,169,155,0.9)",
                  boxShadow: "0 4px 20px rgba(127,169,155,0.3)",
                }}
              >
                📚 Psicopedagogo
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
