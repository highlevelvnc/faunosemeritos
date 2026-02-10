"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-32 flex items-center justify-center overflow-hidden">
      {/* ✅ CAMADA 0: imagem */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/remodelacao-header.jpg"
          alt="Remodelação premium"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-135"
        />
      </div>

      {/* ✅ CAMADA 10: overlay para leitura */}
      <div className="absolute inset-0 z-10 bg-navy-950/75" />

      {/* ✅ CAMADA 20: gradiente + grid */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-navy-950/70 via-navy-900/40 to-navy-950/70" />
      <div className="absolute inset-0 z-20 grid-background opacity-10" />

      {/* ✅ CAMADA 30: orbs */}
      <motion.div
        className="absolute z-30 top-1/4 -left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-30 bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✅ CAMADA 40: conteúdo */}
      <div className="relative z-40 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
