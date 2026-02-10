"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { whatsappUrl, phoneDisplay } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-electric/30 rounded-full blur-3xl"
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
        className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
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

      <div className="relative container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm font-medium text-ice">
              Transforme o Seu Espaço Hoje
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pronto para Começar o Seu{" "}
            <span className="gradient-text">Projeto dos Sonhos?</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-ice/60 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Entre em contacto connosco hoje e receba um orçamento gratuito sem
            compromisso. A primeira consulta é por nossa conta!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
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

          {/* Contact Info */}
          <motion.div
            className="glass rounded-2xl p-8 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric to-blue-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-navy-950" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-ice/60">Ligue-nos</div>
                  <a
                    href={whatsappUrl}
                    className="font-display text-xl font-bold text-electric hover:text-electric/80 transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/10" />

              <div className="text-ice/60">
                <div className="text-sm mb-1">Horário de atendimento</div>
                <div className="font-semibold text-ice">
                  Seg-Sex: 9h - 18h
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-ice/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric" />
              Orçamento Gratuito
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric" />
              Sem Compromisso
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric" />
              Resposta em 24h
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
