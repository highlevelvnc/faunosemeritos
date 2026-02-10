"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quanto tempo demora uma remodelação completa?",
    answer:
      "O tempo varia consoante a dimensão e complexidade do projeto. Uma remodelação de apartamento T2/T3 demora tipicamente entre 6 a 12 semanas. Fornecemos sempre um cronograma detalhado na fase de planeamento.",
  },
  {
    question: "Fornecem orçamento gratuito?",
    answer:
      "Sim! A primeira consulta e orçamento são completamente gratuitos e sem compromisso. Visitamos o local, analisamos as suas necessidades e apresentamos uma proposta detalhada.",
  },
  {
    question: "Quais as zonas que cobrem em Portugal?",
    answer:
      "Atuamos principalmente na região de Lisboa, incluindo Cascais, Oeiras, Sintra, Estoril e toda a área metropolitana. Para projetos de maior dimensão, podemos avaliar outras regiões do país.",
  },
  {
    question: "Precisam de licenças para as obras?",
    answer:
      "Tratamos de todos os processos legais e licenciamentos necessários junto das entidades competentes. Garantimos que a sua obra está em total conformidade com as normas e regulamentos em vigor.",
  },
  {
    question: "Oferecem garantia nos trabalhos realizados?",
    answer:
      "Sim, todos os nossos trabalhos incluem garantia de 5 anos para questões estruturais e de 2 anos para acabamentos. Utilizamos apenas materiais premium de fornecedores certificados.",
  },
  {
    question: "Posso acompanhar o progresso da obra?",
    answer:
      "Absolutamente! Fornecemos atualizações regulares através de fotografias, relatórios de progresso e está sempre disponível um gestor de projeto para esclarecer qualquer dúvida. Pode visitar a obra sempre que desejar.",
  },
  {
    question: "Fazem projetos comerciais?",
    answer:
      "Sim, temos vasta experiência em remodelações de espaços comerciais, incluindo escritórios, lojas, restaurantes e cafés. Criamos ambientes que refletem a identidade da sua marca.",
  },
  {
    question: "Quais as formas de pagamento aceites?",
    answer:
      "Aceitamos transferência bancária, cheque e pagamento faseado de acordo com as etapas da obra. Fornecemos sempre um plano de pagamento claro e transparente antes do início dos trabalhos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding relative overflow-hidden">
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
            Perguntas Frequentes
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice mb-6">
            Tire as Suas Dúvidas
          </h2>
          <p className="text-xl text-ice/60 max-w-3xl mx-auto">
            Respostas às perguntas mais comuns sobre os nossos serviços
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-display text-lg md:text-xl font-semibold text-ice pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-electric" />
                  ) : (
                    <Plus className="w-5 h-5 text-electric" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-ice/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ice/60 mb-6 text-lg">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <a href="/contacto" className="btn-primary">
            Fale Connosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
