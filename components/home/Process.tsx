"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  FileCheck,
  Hammer,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Reunimos com você para entender as suas necessidades, desejos e orçamento. A primeira consulta é totalmente gratuita.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Projeto e Design",
    description:
      "Desenvolvemos um projeto detalhado com renders 3D, plantas técnicas e escolha de materiais premium.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Aprovação e Planeamento",
    description:
      "Apresentamos o projeto, ajustamos detalhes e criamos um cronograma realista com todas as etapas da obra.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Execução da Obra",
    description:
      "Iniciamos os trabalhos com equipa profissional, gestão diária e atualizações constantes sobre o progresso.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Entrega Final",
    description:
      "Realizamos inspeção final, limpeza completa e entregamos o seu espaço totalmente pronto para uso.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            Como Trabalhamos
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6">
            O Nosso Processo
          </h2>
          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            Um método comprovado que garante resultados excecionais em todas as
            fases do seu projeto
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric/50 via-electric to-electric/50 hidden md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                className="relative mb-16 md:mb-24 last:mb-0"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`md:grid md:grid-cols-2 md:gap-12 ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <motion.div
                      className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-blue-500/20">
                          <Icon className="w-7 h-7 text-electric" />
                        </div>
                        <span className="font-display text-4xl font-bold text-electric/30">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ice mb-4">
                        {step.title}
                      </h3>
                      <p className="text-ice/60 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-electric to-blue-500 shadow-lg shadow-electric/30 z-10">
                    <Icon className="w-8 h-8 text-navy-950" />
                  </div>

                  {/* Number (Desktop) */}
                  <div
                    className={`hidden md:block ${
                      isEven
                        ? "md:col-start-2 md:pl-12"
                        : "md:col-start-1 md:text-right md:pr-12"
                    }`}
                  >
                    <span className="font-display text-8xl font-bold gradient-text opacity-20">
                      {step.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="/contacto" className="btn-primary">
            Iniciar o Meu Projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
