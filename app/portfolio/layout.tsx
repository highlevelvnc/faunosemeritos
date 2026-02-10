import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Portfólio de Remodelações",
  "Veja os nossos projetos realizados de remodelação de casas, apartamentos e espaços comerciais em Portugal. Trabalhos com qualidade premium.",
  "/portfolio",
  [
    "portfólio remodelações",
    "projetos remodelação",
    "obras realizadas portugal",
    "galeria projetos",
  ]
);

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
