"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HOW_IT_WORKS_STEPS } from "@/utils/constants";

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isLineInView = useInView(lineRef, { once: true, amount: 0.1 });

  return (
    <section
      id="como-funciona"
      className="section-padding bg-offwhite relative overflow-hidden"
      aria-labelledby="howitworks-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-16">
          <SectionTitle
            label="Como Funciona"
            title="Do primeiro contato à "
            highlight="evolução real"
            subtitle="Um processo estruturado, transparente e totalmente orientado ao desenvolvimento da sua criança."
          />

          {/* Timeline */}
          <div className="relative w-full max-w-4xl">
            {/* Vertical line (desktop only) */}
            <div
              ref={lineRef}
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, rgba(24,59,91,0.1) 0%, rgba(24,59,91,0.2) 50%, rgba(24,59,91,0.1) 100%)" }}
              aria-hidden="true"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isLineInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, #C8A96B, #7FA99B)",
                  originY: "top",
                }}
              />
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 lg:gap-12">
              {HOW_IT_WORKS_STEPS.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex items-center gap-0 ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:flex-none`}
                  >
                    {/* Card – left or right half */}
                    <div
                      className={`lg:w-[calc(50%-2.5rem)] ${
                        isLeft ? "lg:pr-0" : "lg:pl-0"
                      } w-full`}
                    >
                      <motion.div
                        whileHover={{ y: -4, boxShadow: "0 16px 50px rgba(24,59,91,0.12)" }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 group"
                        style={{ boxShadow: "0 4px 20px rgba(24,59,91,0.06)" }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step number */}
                          <div
                            className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-heading font-bold text-sm text-white shadow-md"
                            style={{ background: "linear-gradient(135deg, #183B5B 0%, #2e6399 100%)" }}
                            aria-label={`Passo ${step.step}`}
                          >
                            {step.step}
                          </div>

                          <div>
                            <h3 className="font-heading font-semibold text-base text-primary group-hover:text-secondary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-dark/60 leading-relaxed mt-1.5">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center node */}
                    <div className="lg:w-20 flex items-center justify-center shrink-0 py-2 lg:py-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        className="relative w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md"
                        style={{ background: "linear-gradient(135deg, #C8A96B 0%, #e8c98b 100%)" }}
                        aria-hidden="true"
                      >
                        <div className="w-3 h-3 rounded-full bg-white" />
                        {/* Pulse ring */}
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                          style={{ background: "rgba(200,169,107,0.3)" }}
                        />
                      </motion.div>

                      {/* Connector line for mobile */}
                      {index < HOW_IT_WORKS_STEPS.length - 1 && (
                        <div className="lg:hidden absolute bottom-0 left-5 w-0.5 h-8 bg-gold/20" aria-hidden="true" />
                      )}
                    </div>

                    {/* Empty space for opposite side (desktop) */}
                    <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
