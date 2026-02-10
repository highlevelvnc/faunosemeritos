export interface PortfolioItem {
  id: string;
  title: string;
  category: "casas" | "apartamentos" | "comerciais" | "cozinhas" | "casas-de-banho";
  location: string;
  image: string;
  description: string;
  year: string;
  area?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Vivenda Moderna em Cascais",
    category: "casas",
    location: "Cascais",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Remodelação completa de vivenda com 300m², incluindo jardim e piscina.",
    year: "2024",
    area: "300m²",
  },
  {
    id: "2",
    title: "Apartamento de Luxo em Lisboa",
    category: "apartamentos",
    location: "Lisboa",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Transformação total de apartamento T3 em Avenidas Novas.",
    year: "2024",
    area: "150m²",
  },
  {
    id: "3",
    title: "Cozinha Contemporânea",
    category: "cozinhas",
    location: "Oeiras",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description: "Cozinha moderna com ilha central e acabamentos premium.",
    year: "2024",
    area: "35m²",
  },
  {
    id: "4",
    title: "Casa de Banho Spa",
    category: "casas-de-banho",
    location: "Estoril",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Suite com banheira de hidromassagem e acabamentos de luxo.",
    year: "2023",
    area: "20m²",
  },
  {
    id: "5",
    title: "Escritório Corporativo",
    category: "comerciais",
    location: "Lisboa",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Espaço corporativo moderno com salas de reunião e open space.",
    year: "2024",
    area: "400m²",
  },
  {
    id: "6",
    title: "Moradia em Sintra",
    category: "casas",
    location: "Sintra",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Recuperação e modernização de moradia tradicional.",
    year: "2023",
    area: "250m²",
  },
  {
    id: "7",
    title: "Loft Industrial",
    category: "apartamentos",
    location: "Lisboa",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    description: "Conversão de espaço industrial em loft moderno.",
    year: "2024",
    area: "180m²",
  },
  {
    id: "8",
    title: "Restaurante Gourmet",
    category: "comerciais",
    location: "Cascais",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Design completo de restaurante de alta gastronomia.",
    year: "2024",
    area: "200m²",
  },
  {
    id: "9",
    title: "Cozinha Minimalista",
    category: "cozinhas",
    location: "Oeiras",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description: "Cozinha com design escandinavo e eletrodomésticos integrados.",
    year: "2023",
    area: "28m²",
  },
  {
    id: "10",
    title: "Suite Master Premium",
    category: "casas-de-banho",
    location: "Cascais",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    description: "Casa de banho com duche panorâmico e mármore português.",
    year: "2024",
    area: "25m²",
  },
  {
    id: "11",
    title: "Penthouse Vista Mar",
    category: "apartamentos",
    location: "Estoril",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    description: "Remodelação de penthouse com terraço e vista para o mar.",
    year: "2024",
    area: "220m²",
  },
  {
    id: "12",
    title: "Boutique de Moda",
    category: "comerciais",
    location: "Lisboa",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Loja conceito com design exclusivo e iluminação premium.",
    year: "2023",
    area: "120m²",
  },
];

export const categories = [
  { id: "all", label: "Todos os Projetos" },
  { id: "casas", label: "Casas" },
  { id: "apartamentos", label: "Apartamentos" },
  { id: "comerciais", label: "Comerciais" },
  { id: "cozinhas", label: "Cozinhas" },
  { id: "casas-de-banho", label: "Casas de Banho" },
];
