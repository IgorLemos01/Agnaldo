"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQ_ITEMS } from "@/utils/constants";
import { WhatsAppButton } from "@/components/ui/Button";

interface FAQItemProps {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
      style={{ boxShadow: isOpen ? "0 8px 32px rgba(24,59,91,0.08)" : "0 2px 10px rgba(24,59,91,0.04)" }}
    >
      {/* Header button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="font-heading font-semibold text-base text-primary leading-snug flex-1">
          {item.question}
        </span>
        <div
          className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, #183B5B, #2e6399)"
              : "rgba(24,59,91,0.07)",
            color: isOpen ? "white" : "#183B5B",
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div
                className="h-px w-full mb-5"
                style={{ background: "linear-gradient(90deg, rgba(24,59,91,0.1), transparent)" }}
                aria-hidden="true"
              />
              <p className="text-sm text-dark/65 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="section-padding bg-offwhite relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-30"
          style={{ background: "radial-gradient(ellipse at bottom right, rgba(127,169,155,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <SectionTitle
              label="FAQ"
              title="Perguntas "
              highlight="frequentes"
              align="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark/60 leading-relaxed"
            >
              Tire suas dúvidas sobre o processo de atendimento, avaliação e intervenção.
              Se precisar de mais informações, entre em contato diretamente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-6 bg-white border border-gray-100"
              style={{ boxShadow: "0 4px 20px rgba(24,59,91,0.06)" }}
            >
              <p className="text-sm text-dark/60 leading-relaxed mb-4">
                Não encontrou a resposta que precisa? Fale diretamente pelo WhatsApp.
              </p>
              <WhatsAppButton size="md" label="Tirar dúvidas pelo WhatsApp" />
            </motion.div>
          </div>

          {/* Right – FAQ accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
