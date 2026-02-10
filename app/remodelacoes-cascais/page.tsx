"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const benefits = [
  "Equipa local em Cascais",
  "Conhecimento profundo da região",
  "Materiais premium selecionados",
  "Gestão completa do projeto",
  "Garantia de 5 anos",
  "Orçamento transparente",
];

const projects = [
  {
    title: "Vivenda Moderna",
    location: "Cascais Centro",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Apartamento Vista Mar",
    location: "Estoril",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Moradia de Luxo",
    location: "Quinta da Marinha",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function RemodelacoesCascais() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 grid-background opacity-20" />

        <div className="relative container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-electric" />
                <span className="text-sm font-medium text-ice">
                  Cascais e Região
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ice mb-6">
                Remodelações em <span className="gradient-text">Cascais</span>
              </h1>

              <p className="text-xl text-ice/70 mb-8 leading-relaxed">
                Especialistas em remodelações premium em Cascais, Estoril e toda
                a região. Transformamos o seu espaço com qualidade,
                profissionalismo e atenção ao detalhe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Pedir Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/portfolio" className="btn-secondary text-center">
                  Ver Projetos
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-navy-950 bg-gradient-to-br from-electric/30 to-blue-500/30"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-electric text-electric"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-ice/60">
                    +150 clientes satisfeitos em Cascais
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                  alt="Remodelação em Cascais"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-custom mb-20">
        <motion.div
          className="glass rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ice mb-8 text-center">
            Porque Escolher a Faunos Eméritos em Cascais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-electric/20 to-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-electric" />
                </div>
                <span className="text-ice/80 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="container-custom mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ice mb-4">
            Projetos em Cascais
          </h2>
          <p className="text-xl text-ice/60">
            Veja alguns dos nossos trabalhos realizados na região
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-60" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-xl font-bold text-ice mb-1">
                  {project.title}
                </h3>
                <p className="text-ice/60 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom">
        <motion.div
          className="glass rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ice mb-6">
            Pronto para Remodelar em Cascais?
          </h2>
          <p className="text-xl text-ice/60 mb-8 max-w-2xl mx-auto">
            Contacte-nos hoje e receba um orçamento gratuito sem compromisso
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Contactar Agora
          </a>
        </motion.div>
      </section>
    </div>
  );
}
