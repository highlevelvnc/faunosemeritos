"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-background opacity-10" />

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
            Os Nossos Serviços
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6">
            Soluções Completas para o Seu Espaço
          </h2>
          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            Da conceção à execução, oferecemos serviços integrados de
            remodelação com qualidade premium
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="card-premium group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-electric/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-electric" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-ice mb-3 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ice/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-ice/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-electric/0 group-hover:border-electric/20 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-ice/60 mb-6">
            Não encontrou o que procura? Contacte-nos para soluções
            personalizadas
          </p>
          <a href="/contacto" className="btn-primary">
            Fale Connosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
