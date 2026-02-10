# 🎯 INSTRUÇÕES DE INSTALAÇÃO - Faunos Eméritos

## ✅ O QUE FOI CRIADO

✨ **Projeto Next.js 14+ completo e pronto para uso!**

### 📦 Estrutura Completa
- ✅ 5 páginas completas (Home, Portfolio, Cascais, Lisboa, Contacto)
- ✅ 28 componentes TypeScript
- ✅ Sistema de navegação completo
- ✅ SEO otimizado em todas as páginas
- ✅ Animações com Framer Motion
- ✅ Design premium e responsivo
- ✅ 12 projetos de portfólio (imagens Unsplash)
- ✅ 8 serviços detalhados
- ✅ 6 depoimentos de clientes
- ✅ FAQ com 8 perguntas
- ✅ Formulário de contacto
- ✅ WhatsApp integrado

### 🎨 Design Implementado
- Paleta Navy Blue + Electric Blue
- Glassmorphism effects
- Gradientes premium
- Grid backgrounds
- Animações suaves
- Mobile-first e 100% responsivo

## 🚀 COMO INSTALAR E RODAR

### Passo 1: Abrir o Terminal

Abra o terminal na pasta do projeto.

### Passo 2: Instalar Dependências

```bash
npm install
```

Aguarde a instalação (pode demorar 1-2 minutos).

### Passo 3: Rodar em Desenvolvimento

```bash
npm run dev
```

### Passo 4: Abrir no Navegador

Acesse: **http://localhost:3000**

🎉 Pronto! O site está rodando!

## 📱 NAVEGAÇÃO DO SITE

O site possui as seguintes páginas:

1. **/** - Home (página inicial)
   - Hero com CTA WhatsApp
   - 8 serviços
   - Portfólio em destaque
   - Timeline do processo
   - Depoimentos (slider)
   - FAQ (accordion)
   - CTA final

2. **/portfolio** - Portfólio Completo
   - 12 projetos
   - Filtros por categoria
   - Lightbox ao clicar

3. **/remodelacoes-cascais** - Página SEO Cascais
   - Otimizada para busca local
   - Projetos de Cascais
   - Benefícios locais

4. **/remodelacoes-lisboa** - Página SEO Lisboa
   - Otimizada para busca local
   - Zonas de Lisboa
   - Projetos da capital

5. **/contacto** - Contacto
   - Formulário funcional
   - WhatsApp
   - Informações

## 🛠️ PERSONALIZAÇÕES COMUNS

### Alterar Número de WhatsApp

Edite: `lib/utils.ts`

```typescript
export const whatsappUrl = "https://wa.me/+351SEUNUMERO";
export const phoneNumber = "+351SEUNUMERO";
```

### Alterar Cores

Edite: `tailwind.config.ts`

```typescript
colors: {
  navy: { ... },
  electric: "#00d4ff", // ← Altere aqui
}
```

### Adicionar/Remover Serviços

Edite: `data/services.ts`

### Adicionar/Remover Projetos

Edite: `data/portfolio.ts`

### Alterar Depoimentos

Edite: `data/testimonials.ts`

### Atualizar Metadata/SEO

Edite: `lib/metadata.ts`

## 🌐 PUBLICAR NA VERCEL

### Opção 1: Interface Vercel (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Crie uma conta (gratuita)
3. Clique em "Add New Project"
4. Faça upload da pasta do projeto
5. Clique em "Deploy"
6. Pronto! Seu site está no ar 🎉

### Opção 2: Via GitHub (Recomendado)

Siga as instruções detalhadas em `DEPLOYMENT.md`

## 📊 VERIFICAR SEO

Após publicar, teste:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)

## ⚡ COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm run dev

# Build (testar antes de publicar)
npm run build

# Rodar versão de produção localmente
npm start

# Verificar erros TypeScript
npx tsc --noEmit

# Verificar erros ESLint
npm run lint
```

## 🐛 PROBLEMAS COMUNS

### "Module not found"
Solução:
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 já está em uso"
Solução:
```bash
npm run dev -- -p 3001
```
(Rodará na porta 3001)

### Imagens não aparecem
- Verifique a conexão com internet (imagens do Unsplash)
- Em produção, todas funcionarão normalmente

## 📞 CONTACTOS DO SITE

**Configurados no site:**
- WhatsApp: +351 938 004 032
- Email: info@faunosemeritos.pt
- Áreas: Cascais, Lisboa, Oeiras, Sintra, Estoril

## 📁 ARQUIVOS IMPORTANTES

```
faunos-emeritos/
├── README.md           ← Documentação do projeto
├── DEPLOYMENT.md       ← Guia de publicação detalhado
├── INSTRUÇÕES.md       ← Este arquivo
├── package.json        ← Dependências
├── app/                ← Páginas do site
├── components/         ← Componentes React
├── data/               ← Dados (serviços, portfolio, etc)
└── lib/                ← Utilitários e SEO
```

## ✨ FUNCIONALIDADES ESPECIAIS

1. **Loading Screen** - Animação elegante ao carregar
2. **Header com Blur** - Navbar moderno que muda ao scroll
3. **WhatsApp Fixo** - Botão flutuante no canto
4. **Lightbox** - Visualizar imagens em tamanho grande
5. **Filtros Portfolio** - Filtrar por categoria
6. **Slider Depoimentos** - Carrossel automático
7. **FAQ Accordion** - Expandir/recolher perguntas
8. **Formulário Toast** - Confirmação visual ao enviar
9. **Animações Suaves** - Framer Motion em tudo
10. **SEO Completo** - Metadata + JSON-LD

## 🎓 PRÓXIMOS PASSOS

1. ✅ Instalar dependências (`npm install`)
2. ✅ Rodar em desenvolvimento (`npm run dev`)
3. ✅ Explorar o site em `localhost:3000`
4. ✅ Personalizar conteúdos em `/data`
5. ✅ Testar build (`npm run build`)
6. ✅ Publicar na Vercel
7. ✅ Configurar domínio próprio (opcional)
8. ✅ Submeter ao Google Search Console

## 💡 DICAS PROFISSIONAIS

- **Sempre teste localmente antes de publicar**
- **Faça backup regular do código (Git)**
- **Monitore performance com Google Analytics**
- **Atualize imagens para suas próprias fotos**
- **Teste em diferentes dispositivos**
- **Mantenha SEO atualizado**

---

## 🎉 TUDO PRONTO!

O projeto está **100% completo e funcional**.

**Problemas?** Verifique:
1. Node.js instalado (v18+)
2. Dependências instaladas
3. Porta 3000 livre
4. Conexão internet (para Unsplash)

**Está funcionando?** 
Ótimo! Agora é só personalizar e publicar! 🚀

---

**Criado com ❤️ para Faunos Eméritos**
*Especialistas em Remodelações Premium 🇵🇹*
