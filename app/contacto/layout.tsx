import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Contacto - Peça o Seu Orçamento Grátis",
  "Entre em contacto com a Faunos Eméritos para remodelações em Portugal. Orçamento gratuito e sem compromisso. WhatsApp: +351 938 004 032",
  "/contacto",
  [
    "contacto remodelações",
    "orçamento remodelação",
    "pedir orçamento obras",
    "contactar construção",
  ]
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
