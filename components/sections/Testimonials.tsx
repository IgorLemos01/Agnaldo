"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/utils/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} estrelas`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          style={{ color: i < rating ? "#C8A96B" : "#e5e7eb" }}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60, scale: 0.96, transition: { duration: 0.35 } }),
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="depoimentos"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-1/2 h-full opacity-20"
          style={{ background: "radial-gradient(ellipse at top left, rgba(24,59,91,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-14">
          <SectionTitle
            label="Depoimentos"
            title="O que as famílias "
            highlight="dizem"
            subtitle="Histórias reais de evolução, conquista e esperança. Cada depoimento representa uma jornada de transformação."
          />

          {/* Carousel */}
          <div
            className="relative w-full max-w-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: "280px" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={testimonial.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center"
                  aria-live="polite"
                >
                  <div
                    className="w-full rounded-3xl p-8 sm:p-10 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(24,59,91,0.03) 0%, rgba(127,169,155,0.06) 100%)",
                      border: "1px solid rgba(24,59,91,0.08)",
                    }}
                  >
                    {/* Quote icon */}
                    <svg
                      className="absolute top-6 right-8 w-16 h-16 opacity-5"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      style={{ color: "#183B5B" }}
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    {/* Stars */}
                    <StarRating rating={testimonial.rating} />

                    {/* Text */}
                    <blockquote className="mt-5 text-dark/75 text-base sm:text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{ background: "linear-gradient(135deg, #183B5B, #7FA99B)" }}
                        aria-hidden="true"
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <cite className="not-italic font-heading font-semibold text-primary text-sm">
                          {testimonial.name}
                        </cite>
                        <div className="text-xs text-dark/50 mt-0.5">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar depoimento">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Depoimento ${i + 1}`}
                    className="transition-all duration-400"
                  >
                    <motion.div
                      animate={{
                        width: i === current ? 28 : 8,
                        backgroundColor: i === current ? "#C8A96B" : "#d1d5db",
                      }}
                      transition={{ duration: 0.35 }}
                      className="h-2 rounded-full"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-4 border-t border-gray-100 w-full max-w-2xl"
          >
            {[
              { value: "5.0", label: "Avaliação média" },
              { value: "100+", label: "Famílias atendidas" },
              { value: "95%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">{stat.value}</div>
                <div className="text-sm text-dark/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
