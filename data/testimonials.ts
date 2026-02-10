export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Santos",
    location: "Cascais",
    text: "A Faunos Eméritos transformou completamente a nossa casa. O profissionalismo e atenção ao detalhe foram excecionais. Recomendo vivamente!",
    rating: 5,
    project: "Remodelação de Vivenda",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: "2",
    name: "João Pereira",
    location: "Lisboa",
    text: "Excelente trabalho! Cumpriram todos os prazos e o resultado superou as nossas expectativas. A equipa é muito profissional e dedicada.",
    rating: 5,
    project: "Apartamento T3",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: "3",
    name: "Ana Costa",
    location: "Oeiras",
    text: "Desde o primeiro contacto até à entrega final, tudo foi perfeito. A nossa cozinha ficou um sonho! Muito obrigada a toda a equipa.",
    rating: 5,
    project: "Remodelação de Cozinha",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    id: "4",
    name: "Pedro Rodrigues",
    location: "Sintra",
    text: "Profissionais de excelência! Remodelaram a nossa moradia com muito cuidado e qualidade. O resultado é fantástico e a relação qualidade-preço ótima.",
    rating: 5,
    project: "Moradia Tradicional",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    id: "5",
    name: "Sofia Martins",
    location: "Estoril",
    text: "A equipa da Faunos Eméritos é simplesmente incrível. Transformaram o nosso apartamento num espaço moderno e funcional. 5 estrelas!",
    rating: 5,
    project: "Penthouse",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
  {
    id: "6",
    name: "Carlos Almeida",
    location: "Lisboa",
    text: "Recomendo sem hesitação. Fizeram a remodelação do nosso escritório e o resultado ficou espetacular. Equipa profissional e pontual.",
    rating: 5,
    project: "Escritório Corporativo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
];
