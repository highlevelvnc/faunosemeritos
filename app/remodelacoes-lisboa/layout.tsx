import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Remodelações em Lisboa - Especialistas na Capital",
  "Remodelações premium em Lisboa e área metropolitana. Especialistas em apartamentos, escritórios e prédios históricos. Orçamento grátis.",
  "/remodelacoes-lisboa",
  [
    "remodelações lisboa",
    "obras lisboa",
    "renovação apartamentos lisboa",
    "construção lisboa",
    "remodelação avenidas novas",
    "remodelação parque nações",
    "obras chiado",
  ]
);

export default function LisboaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
