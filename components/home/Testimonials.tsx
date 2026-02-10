"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 grid-background opacity-5" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-electric font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Depoimentos
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6">
            O Que Dizem os Nossos Clientes
          </h2>

          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-electric" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-electric text-electric" />
                  ))}
                </div>

                {/* Text (✅ corrigido: sem aspas não-escapadas) */}
                <p className="text-xl md:text-2xl text-ice leading-relaxed text-center mb-8 italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-electric/30">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <div className="font-display font-bold text-ice text-lg">
                      {current.name}
                    </div>
                    <div className="text-ice/60">
                      {current.location} • {current.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="glass p-3 rounded-full hover:bg-electric/20 transition-colors group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-ice group-hover:text-electric transition-colors" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-electric w-8" : "bg-ice/30 hover:bg-ice/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="glass p-3 rounded-full hover:bg-electric/20 transition-colors group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-ice group-hover:text-electric transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center glass p-6 rounded-2xl">
            <div className="font-display text-4xl font-bold gradient-text mb-2">
              5.0
            </div>
            <div className="text-ice/60">Avaliação Média</div>
          </div>

          <div className="text-center glass p-6 rounded-2xl">
            <div className="font-display text-4xl font-bold gradient-text mb-2">
              98%
            </div>
            <div className="text-ice/60">Taxa de Satisfação</div>
          </div>

          <div className="text-center glass p-6 rounded-2xl">
            <div className="font-display text-4xl font-bold gradient-text mb-2">
              450+
            </div>
            <div className="text-ice/60">Avaliações Positivas</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
