import {
  Home,
  Building2,
  Store,
  Paintbrush,
  Hammer,
  Lightbulb,
  Wrench,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "casas",
    title: "Remodelação de Casas",
    description:
      "Transformamos a sua casa num espaço moderno, funcional e personalizado às suas necessidades.",
    icon: Home,
    features: [
      "Projeto completo de arquitetura",
      "Remodelação estrutural",
      "Acabamentos premium",
      "Gestão total da obra",
    ],
  },
  {
    id: "apartamentos",
    title: "Remodelação de Apartamentos",
    description:
      "Maximizamos o espaço e valorizamos o seu apartamento com soluções inteligentes e design sofisticado.",
    icon: Building2,
    features: [
      "Otimização de espaços",
      "Modernização completa",
      "Isolamento acústico",
      "Eficiência energética",
    ],
  },
  {
    id: "comercial",
    title: "Espaços Comerciais",
    description:
      "Criamos ambientes comerciais únicos que refletem a identidade da sua marca e atraem clientes.",
    icon: Store,
    features: [
      "Design corporativo",
      "Lojas e escritórios",
      "Restaurantes e cafés",
      "Conformidade legal",
    ],
  },
  {
    id: "pintura",
    title: "Pintura e Acabamentos",
    description:
      "Acabamentos impecáveis com as melhores tintas e técnicas profissionais do mercado.",
    icon: Paintbrush,
    features: [
      "Preparação de superfícies",
      "Tintas premium",
      "Texturas especiais",
      "Revestimentos decorativos",
    ],
  },
  {
    id: "carpintaria",
    title: "Carpintaria à Medida",
    description:
      "Móveis e soluções em madeira personalizadas, desde armários embutidos a estantes únicas.",
    icon: Hammer,
    features: [
      "Armários embutidos",
      "Cozinhas por medida",
      "Closets personalizados",
      "Móveis exclusivos",
    ],
  },
  {
    id: "eletricidade",
    title: "Instalações Elétricas",
    description:
      "Sistemas elétricos seguros, eficientes e preparados para as tecnologias do futuro.",
    icon: Lightbulb,
    features: [
      "Quadros elétricos modernos",
      "Iluminação LED",
      "Domótica",
      "Certificação CERTIEL",
    ],
  },
  {
    id: "canalizacao",
    title: "Canalização e Climatização",
    description:
      "Instalações hidráulicas e sistemas de climatização para máximo conforto e eficiência.",
    icon: Droplets,
    features: [
      "Redes de água e esgoto",
      "Ar condicionado",
      "Aquecimento central",
      "Piso radiante",
    ],
  },
  {
    id: "manutencao",
    title: "Manutenção e Reparações",
    description:
      "Serviço rápido de manutenção e reparações para manter o seu espaço sempre impecável.",
    icon: Wrench,
    features: [
      "Reparações urgentes",
      "Manutenção preventiva",
      "Pequenas obras",
      "Atendimento rápido",
    ],
  },
];
