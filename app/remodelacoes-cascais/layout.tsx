import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Remodelações em Cascais - Especialistas Locais",
  "Remodelações premium em Cascais, Estoril e região. Equipa especializada em casas, apartamentos e espaços comerciais. Orçamento grátis.",
  "/remodelacoes-cascais",
  [
    "remodelações cascais",
    "obras cascais",
    "remodelação estoril",
    "construção cascais",
    "renovação cascais",
    "remodelação apartamentos cascais",
    "remodelação casas cascais",
  ]
);

export default function CascaisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
