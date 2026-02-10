"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const featuredProjects = portfolioItems.slice(0, 6);

  return (
    <section className="section-padding relative overflow-hidden bg-navy-900">
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
            Portfólio
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6">
            Projetos que Inspiram
          </h2>
          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos recentes e veja a qualidade que
            entregamos
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block text-xs font-semibold text-electric uppercase tracking-wider mb-2 px-3 py-1 glass rounded-full">
                    {project.category.replace("-", " ")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ice mb-2 group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ice/60 mb-1">{project.location}</p>
                  {project.area && (
                    <p className="text-sm text-ice/40">{project.area}</p>
                  )}
                </motion.div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-electric/0 group-hover:border-electric/40 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center gap-3 group"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
