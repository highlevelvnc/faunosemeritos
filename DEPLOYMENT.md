# 🚀 Guia de Deployment - Faunos Eméritos

## Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

1. ✅ Todas as dependências estão instaladas (`npm install`)
2. ✅ O projeto compila sem erros (`npm run build`)
3. ✅ Tem uma conta na [Vercel](https://vercel.com)
4. ✅ Tem um repositório Git (GitHub, GitLab ou Bitbucket)

## 📋 Checklist Pré-Deploy

### 1. Verificar Build Local

```bash
npm run build
npm start
```

Acesse `http://localhost:3000` e verifique:
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens aparecem
- [ ] Animações funcionam
- [ ] Links WhatsApp funcionam
- [ ] Formulário de contacto valida corretamente
- [ ] SEO metadata aparece no código fonte

### 2. Atualizar Informações

Antes do deploy, atualize em `lib/metadata.ts`:

```typescript
const baseUrl = "https://faunosemeritos.pt"; // ← SEU DOMÍNIO REAL
```

### 3. Configurar Domínio Customizado (Opcional)

Se você tem um domínio próprio:
1. Adicione o domínio nas configurações do projeto na Vercel
2. Configure os DNS do seu registrador:
   - Tipo: A
   - Nome: @
   - Valor: 76.76.21.21
   
   - Tipo: CNAME
   - Nome: www
   - Valor: cname.vercel-dns.com

## 🌐 Deploy na Vercel (Recomendado)

### Método 1: Via GitHub (Recomendado)

1. **Criar Repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Faunos Eméritos"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/faunos-emeritos.git
   git push -u origin main
   ```

2. **Importar na Vercel**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Clique em "Import Git Repository"
   - Selecione o repositório `faunos-emeritos`
   - Clique em "Deploy"

3. **Configurações do Projeto**
   - Framework Preset: `Next.js` (detectado automaticamente)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)

### Método 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## 📊 Após o Deploy

### 1. Verificar Performance

Use as ferramentas:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Targets esperados:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 2. Testar Funcionalidades

- [ ] Todas as páginas acessíveis
- [ ] WhatsApp button funciona
- [ ] Formulário de contacto
- [ ] Portfolio com filtros
- [ ] Lightbox das imagens
- [ ] Navegação mobile
- [ ] Animações suaves

### 3. Verificar SEO

Use [Google Search Console](https://search.google.com/search-console):
- Submeta o sitemap: `https://seudominio.pt/sitemap.xml`
- Solicite indexação das páginas principais
- Monitore erros de rastreamento

### 4. Analytics (Opcional)

Adicione Google Analytics:

```typescript
// app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição da atualização"
git push

# Vercel faz deploy automático!
```

## 🐛 Troubleshooting

### Build Falha

1. Limpe o cache:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. Verifique erros TypeScript:
   ```bash
   npx tsc --noEmit
   ```

### Imagens Não Carregam

Certifique-se que `next.config.js` tem:
```javascript
images: {
  domains: ['images.unsplash.com'],
}
```

### Performance Baixa

1. Otimize imagens (já está usando next/image)
2. Ative compressão na Vercel (automático)
3. Use Vercel Analytics para identificar problemas

## 📞 Suporte

Se tiver problemas:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Next.js](https://nextjs.org/docs)
- [Discord Next.js](https://discord.gg/nextjs)

## ✅ Checklist Final

- [ ] Site no ar e acessível
- [ ] Domínio customizado configurado (se aplicável)
- [ ] SSL/HTTPS ativo (automático na Vercel)
- [ ] Sitemap submetido ao Google
- [ ] Performance 90+
- [ ] Todas as funcionalidades testadas
- [ ] WhatsApp funcionando
- [ ] Analytics configurado (opcional)
- [ ] Backups configurados (Git)

---

🎉 **Parabéns!** O site da Faunos Eméritos está no ar!
