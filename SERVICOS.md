# Padrão de páginas internas de serviço

As páginas são geradas por `scripts/generate-service-pages.mjs`.

## Criar ou editar um serviço

1. Abra o array `services` no gerador.
2. Adicione ou altere `slug`, `name`, `title`, `description`, `intro`, `deliverables`, `audience`, `process` e `faqs`.
3. Execute `npm run generate:services`.
4. Execute `npm run build` para atualizar o CSS.
5. Adicione a URL nova ao `sitemap.xml`.

Cada página gerada contém title, description, canonical, Open Graph, um único H1, breadcrumbs, schemas `Service`, `BreadcrumbList` e `FAQPage`, CTA rastreável e conteúdo próprio no HTML.
