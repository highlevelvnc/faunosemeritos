"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { phoneDisplay, whatsappUrl } from "@/lib/utils";

const services = [
  { name: "Remodelações Cascais", href: "/remodelacoes-cascais" },
  { name: "Remodelações Lisboa", href: "/remodelacoes-lisboa" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Contacto", href: "/contacto" },
];

const locations = ["Cascais", "Lisboa", "Oeiras", "Sintra", "Estoril"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 border-t border-white/5">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold gradient-text mb-4">
              Faunos Eméritos
            </h3>
            <p className="text-ice/60 mb-6">
              Especialistas em remodelações de casas, apartamentos e espaços
              comerciais em Portugal.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="glass p-3 rounded-full hover:bg-electric/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-ice" />
              </a>
              <a
                href="#"
                className="glass p-3 rounded-full hover:bg-electric/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-ice" />
              </a>
              <a
                href="#"
                className="glass p-3 rounded-full hover:bg-electric/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-ice" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-ice mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-ice/60 hover:text-electric transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-ice mb-6">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li
                  key={location}
                  className="flex items-center gap-2 text-ice/60"
                >
                  <MapPin className="w-4 h-4 text-electric" />
                  {location}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-ice mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ice/60 hover:text-electric transition-colors group"
                >
                  <div className="glass p-2 rounded-lg group-hover:bg-electric/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@faunosemeritos.pt"
                  className="flex items-center gap-3 text-ice/60 hover:text-electric transition-colors group"
                >
                  <div className="glass p-2 rounded-lg group-hover:bg-electric/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@faunosemeritos.pt
                </a>
              </li>
              <li className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Pedir Orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-ice/40 text-sm">
            © {currentYear} Faunos Eméritos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacidade"
              className="text-ice/40 hover:text-electric transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-ice/40 hover:text-electric transition-colors"
            >
              Termos e Condições
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
