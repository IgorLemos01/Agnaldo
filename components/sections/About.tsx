"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CREDENTIALS } from "@/utils/constants";

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-offwhite relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(127,169,155,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(200,169,107,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            {/* Main profile card */}
            <div className="relative">
              {/* Background shape */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #183B5B 0%, #7FA99B 100%)" }}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-card overflow-hidden">
                {/* Top bar decoration */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: "linear-gradient(90deg, #183B5B, #7FA99B, #C8A96B)" }}
                />

                {/* Avatar area */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-4">
                    {/* Avatar placeholder */}
                    <div
                      className="w-32 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-4xl font-heading shadow-lg"
                      style={{ background: "linear-gradient(135deg, #183B5B 0%, #2e6399 100%)" }}
                    >
                      AO
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-primary">Agnaldo Oliveira</h3>
                  <p className="text-secondary text-sm font-medium mt-1">
                    Psicopedagogo • ABA • Neuropsicopedagogo
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "10+", label: "Anos de\nExperiência" },
                    { value: "100+", label: "Famílias\nAtendidas" },
                    { value: "4", label: "Áreas de\nEspecialização" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-heading font-bold text-2xl text-primary">{stat.value}</div>
                      <div className="text-xs text-dark/50 mt-0.5 leading-tight whitespace-pre-line">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mission quote */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "linear-gradient(135deg, rgba(24,59,91,0.04) 0%, rgba(127,169,155,0.08) 100%)" }}
                >
                  <p className="text-sm text-dark/70 italic leading-relaxed">
                    &ldquo;Minha missão é ajudar cada criança a descobrir e desenvolver todo o seu potencial, transformando dificuldades em conquistas.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-0.5 w-6 bg-gold rounded-full" />
                    <span className="text-xs font-semibold text-gold">Agnaldo Oliveira</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating achievement badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 bg-white rounded-2xl px-4 py-3 shadow-card border border-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-primary leading-none">ABPp</div>
                  <div className="text-[10px] text-dark/50 leading-none mt-0.5">nº 730</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – text content */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              label="Sobre"
              title="Quem é "
              highlight="Agnaldo Oliveira"
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 text-dark/70 leading-relaxed"
            >
              <p>
                Com formação sólida e vasta experiência em psicopedagogia, ABA e neuropsicopedagogia,
                Agnaldo Oliveira dedica sua carreira ao desenvolvimento pleno de crianças e adolescentes.
              </p>
              <p>
                Sua abordagem combina o rigor científico das metodologias mais avançadas com
                um atendimento profundamente humano e acolhedor, onde cada família encontra
                escuta ativa, respeito e esperança.
              </p>
              <p>
                Acredita que todo ser humano tem um potencial único a ser descoberto — e que
                o papel do especialista é criar as condições para que esse potencial floresça,
                seja na escola, em casa ou na vida.
              </p>
            </motion.div>

            {/* Credentials grid */}
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {CREDENTIALS.map((credential) => (
                <motion.div
                  key={credential.title}
                  variants={cardVariants}
                  whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(24,59,91,0.12)" }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 cursor-default transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(24,59,91,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(24,59,91,0.08) 0%, rgba(127,169,155,0.12) 100%)" }}
                    aria-hidden="true"
                  >
                    {credential.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-primary leading-tight">
                      {credential.title}
                    </h3>
                    <p className="text-xs text-dark/55 mt-1 leading-relaxed">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
