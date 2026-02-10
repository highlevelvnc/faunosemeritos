"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm font-medium text-ice">
              Especialistas Premium em Remodelações 🇵🇹
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="gradient-text">Faunos Eméritos</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-ice/80 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transformamos Espaços em Obras de Arte
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-ice/60 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            🏠 Casas • Apartamentos • Espaços Comerciais
            <br />
            Do projeto à entrega, com excelência em cada detalhe
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 flex items-center gap-3 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Pedir Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="btn-secondary text-lg px-10 py-5 flex items-center gap-3"
            >
              Ver Projetos Realizados
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="font-display text-4xl font-bold gradient-text mb-2">
                500+
              </div>
              <div className="text-ice/60">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold gradient-text mb-2">
                15+
              </div>
              <div className="text-ice/60">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-ice/60">Clientes Satisfeitos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-electric rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
