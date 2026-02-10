# Faunos Eméritos - Website de Remodelações Premium 🏠

Website moderno e sofisticado para a construtora **Faunos Eméritos**, especializada em remodelações premium em Portugal.

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **lucide-react**

## 🎨 Design

- Estilo premium, minimalista e high-tech
- Paleta de cores: Navy blue, branco gelo, cinza grafite, azul elétrico
- Efeitos: glassmorphism, gradientes, blur, grid backgrounds
- Totalmente responsivo e mobile-first

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
faunos-emeritos/
├── app/                          # App Router (Next.js)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Home page
│   ├── portfolio/               # Página de portfólio
│   ├── remodelacoes-cascais/    # Página Cascais
│   ├── remodelacoes-lisboa/     # Página Lisboa
│   └── contacto/                # Página de contacto
├── components/
│   ├── home/                    # Componentes da home
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── layout/                  # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── shared/                  # Componentes compartilhados
│       ├── LoadingScreen.tsx
│       └── WhatsAppButton.tsx
├── data/                        # Dados estáticos
│   ├── services.ts
│   ├── portfolio.ts
│   └── testimonials.ts
├── lib/                         # Utilitários
│   ├── utils.ts
│   └── metadata.ts
└── public/                      # Arquivos estáticos
```

## 🌟 Funcionalidades

### Home Page
- ✅ Loading screen animado
- ✅ Hero section premium com CTA WhatsApp
- ✅ 8 serviços com cards interativos
- ✅ Galeria de portfólio (6 projetos em destaque)
- ✅ Timeline do processo (5 etapas)
- ✅ Slider de depoimentos (6 clientes)
- ✅ FAQ com accordion (8 perguntas)
- ✅ CTA final com contactos
- ✅ Botão WhatsApp fixo

### Portfólio
- ✅ Grid responsivo de projetos
- ✅ Filtros por categoria (5 categorias)
- ✅ Lightbox/modal ao clicar nas imagens
- ✅ 12 projetos reais (Unsplash)

### Páginas de Localização
- ✅ Remodelações Cascais (SEO otimizado)
- ✅ Remodelações Lisboa (SEO otimizado)
- ✅ Hero sections únicas
- ✅ Benefícios e projetos locais

### Contacto
- ✅ Formulário funcional com validação
- ✅ Informações de contacto
- ✅ Toast de confirmação
- ✅ WhatsApp integrado

## 🎯 SEO

Metadata completa implementada em todas as páginas:
- Title tags otimizados
- Meta descriptions
- Keywords estratégicas
- OpenGraph tags
- Twitter cards
- Canonical URLs
- JSON-LD LocalBusiness schema

## 📱 Contacto

- **WhatsApp:** [+351 938 004 032](https://wa.me/+351938004032)
- **Email:** info@faunosemeritos.pt
- **Áreas:** Cascais, Lisboa, Oeiras, Sintra, Estoril

## 🚀 Deploy na Vercel

1. Fazer push do código para GitHub
2. Importar o repositório na Vercel
3. Configurar as variáveis de ambiente (se necessário)
4. Deploy automático!

## 📝 Notas Importantes

- Todas as imagens são do Unsplash (links válidos)
- Código 100% TypeScript sem erros
- Core Web Vitals otimizado
- Mobile-first e totalmente responsivo
- Animações suaves com Framer Motion

## 🛠️ Customização

Para personalizar o site:

1. **Cores:** Editar `tailwind.config.ts`
2. **Conteúdo:** Editar arquivos em `/data`
3. **Metadata:** Editar `lib/metadata.ts`
4. **Imagens:** Substituir links do Unsplash

## 📄 Licença

© 2024 Faunos Eméritos. Todos os direitos reservados.
