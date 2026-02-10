"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { whatsappUrl, phoneDisplay } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ice mb-6">
            Entre em <span className="gradient-text">Contacto</span>
          </h1>
          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            Estamos prontos para transformar o seu espaço. Contacte-nos hoje e
            receba um orçamento gratuito
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* WhatsApp */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ice mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-ice/60 mb-3">
                    A forma mais rápida de nos contactar
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-electric hover:text-electric/80 transition-colors text-lg font-semibold"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-navy-950" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ice mb-2">
                    Email
                  </h3>
                  <p className="text-ice/60 mb-3">
                    Envie-nos um email a qualquer momento
                  </p>
                  <a
                    href="mailto:info@faunosemeritos.pt"
                    className="font-display text-electric hover:text-electric/80 transition-colors text-lg font-semibold"
                  >
                    info@faunosemeritos.pt
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-electric" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ice mb-2">
                    Horário
                  </h3>
                  <div className="space-y-2 text-ice/60">
                    <p>Segunda a Sexta: 9h - 18h</p>
                    <p>Sábado: Sob marcação</p>
                    <p>Domingo: Encerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Localizações */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-electric" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ice mb-2">
                    Áreas de Atuação
                  </h3>
                  <p className="text-ice/60">
                    Cascais • Lisboa • Oeiras • Sintra • Estoril
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-display text-2xl font-bold text-ice mb-6">
              Envie-nos uma Mensagem
            </h2>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-navy-950" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ice mb-3">
                  Mensagem Enviada!
                </h3>
                <p className="text-ice/60">
                  Obrigado pelo seu contacto. Responderemos em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-ice/80 font-medium mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ice focus:border-electric focus:outline-none transition-colors"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-ice/80 font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ice focus:border-electric focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-ice/80 font-medium mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ice focus:border-electric focus:outline-none transition-colors"
                    placeholder="+351 123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-ice/80 font-medium mb-2"
                  >
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ice focus:border-electric focus:outline-none transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="casa">Remodelação de Casa</option>
                    <option value="apartamento">Remodelação de Apartamento</option>
                    <option value="comercial">Espaço Comercial</option>
                    <option value="cozinha">Cozinha</option>
                    <option value="banho">Casa de Banho</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-ice/80 font-medium mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ice focus:border-electric focus:outline-none transition-colors resize-none"
                    placeholder="Descreva o seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </button>

                <p className="text-sm text-ice/40 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
