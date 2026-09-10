# Mintcode — Instruções para o Codex

## Contexto

O site `https://mintcode.com.br/` é construído em **HTML puro + CSS + JavaScript**, sem framework.

O objetivo desta implementação é otimizar o site para:

- conversão;
- SEO;
- AEO;
- GEO;
- performance;
- acessibilidade;
- mobile;
- campanhas de Google Ads, principalmente Performance Max.

A Mintcode deve se posicionar como uma operação enxuta e especializada em criação de sites profissionais, landing pages e projetos web orientados a resultado.

A Mintcode também oferece gestão de tráfego para campanhas de aquisição, integrada à estratégia das páginas e à mensuração de conversões.

---

# 1. Regras obrigatórias

## Manter

- HTML puro;
- CSS puro;
- JavaScript puro;
- URLs existentes sempre que possível;
- Google Tag Manager;
- GA4;
- Meta Pixel;
- formulários;
- integrações;
- scripts de mensuração;
- funcionalidades já existentes.

## Não fazer

- não migrar para React;
- não migrar para Next.js;
- não migrar para Vue;
- não migrar para Angular;
- não migrar para Astro;
- não instalar CMS;
- não adicionar frameworks desnecessários;
- não adicionar bibliotecas pesadas para animações simples;
- não remover tracking existente;
- não inventar clientes;
- não inventar cases;
- não inventar depoimentos;
- não inventar métricas;
- não inventar preços;
- não inventar prazos;
- não inventar localizações.

Priorizar HTML semântico, CSS eficiente e JavaScript mínimo.

---

# 2. Auditoria inicial

Antes de modificar o projeto, mapear:

- arquivos `.html`;
- arquivos `.css`;
- arquivos `.js`;
- imagens;
- fontes;
- favicon;
- robots.txt;
- sitemap.xml;
- arquivos de configuração.

Verificar:

- Google Tag Manager;
- Google Analytics;
- Meta Pixel;
- JSON-LD;
- canonical;
- Open Graph;
- headings;
- formulários;
- links quebrados;
- imagens sem `alt`;
- erros no console;
- responsividade;
- status HTTP;
- página 404.

Não realizar grande refatoração antes desta auditoria.

---

# 3. P0 — Rastreamento e indexação

Existe indício de que mecanismos de busca podem não estar interpretando corretamente o conteúdo da homepage.

Investigar primeiro.

O conteúdo comercial principal deve existir diretamente no HTML entregue pelo servidor.

Não depender de JavaScript para renderizar:

- H1;
- proposta de valor;
- serviços;
- links;
- conteúdo principal;
- CTAs.

---

# 4. Homepage — SEO

## Title

```html
<title>Criação de Sites Profissionais e Landing Pages | Mintcode</title>
```

## Meta description

```html
<meta
  name="description"
  content="Criamos sites profissionais e landing pages rápidas, modernas e preparadas para Google, campanhas de tráfego e geração de clientes."
>
```

## Canonical

```html
<link rel="canonical" href="https://mintcode.com.br/">
```

## Idioma

```html
<html lang="pt-BR">
```

---

# 5. H1 e estrutura semântica

A homepage deve possuir apenas um H1.

```html
<h1>Criação de sites profissionais que transformam visitas em clientes</h1>
```

Estrutura sugerida:

```txt
H1 Criação de sites profissionais que transformam visitas em clientes

H2 Sites criados para gerar resultados

H2 Serviços de criação de sites

H2 Projetos desenvolvidos pela Mintcode

H2 Como funciona a criação do seu site

H2 Perguntas frequentes sobre criação de sites

H2 Solicite um orçamento
```

Usar H3 dentro das respectivas seções.

Não utilizar H1, H2 ou H3 apenas por questões visuais.

---

# 6. Hero

O hero deve responder imediatamente:

1. o que a Mintcode faz;
2. para quem;
3. qual benefício;
4. qual ação o usuário deve realizar.

## H1

**Criação de sites profissionais que transformam visitas em clientes**

## Texto

**Sites institucionais e landing pages rápidas, modernas e preparadas para Google, campanhas de tráfego e geração de oportunidades.**

## CTA principal

**Solicitar orçamento**

## CTA secundário

**Ver projetos**

## Microcopy

```txt
Sites institucionais • Landing Pages • WordPress • SEO • Performance
```

Não utilizar slider no hero.

Não utilizar vídeo pesado de background.

---

# 7. Direção visual

A Mintcode deve parecer:

**estúdio enxuto + especialista + técnico + premium + comercial**

Priorizar:

- screenshots reais;
- projetos reais;
- mockups desktop/mobile;
- tipografia forte;
- espaços em branco;
- interfaces;
- composição limpa;
- boa hierarquia;
- contraste.

Evitar:

- banco de imagens genérico;
- pessoas olhando notebook;
- excesso de cards;
- excesso de gradientes;
- ícones 3D;
- partículas;
- animações decorativas;
- efeitos sem função comercial.

O próprio trabalho da Mintcode deve ser o principal elemento visual.

---

# 8. Serviços

Não apresentar uma lista enorme de serviços.

Priorizar aproximadamente quatro ou cinco.

## Sites institucionais

Sites profissionais para empresas que precisam melhorar presença digital, autoridade e geração de contatos.

## Landing pages

Páginas desenvolvidas especificamente para campanhas de aquisição, como Google Ads e Meta Ads.

## Sites WordPress

Sites administráveis, rápidos e preparados para crescimento.

## SEO e performance

Estrutura técnica, velocidade, rastreabilidade e otimização para mecanismos de busca.

## Desenvolvimento sob medida

Adicionar somente se realmente fizer parte dos serviços da Mintcode.

## Gestão de tráfego

Planejamento, gestão e otimização de campanhas para atrair públicos qualificados, gerar oportunidades e acompanhar conversões.

---

# 9. Projetos

Adicionar uma seção com aproximadamente 3 a 6 projetos reais.

Estrutura recomendada:

```html
<article class="project-card">
  <img
    src="/assets/images/projeto.webp"
    alt="Descrição real do projeto"
  >

  <h3>Nome do projeto</h3>

  <p>Segmento</p>

  <p>Tipo de projeto</p>

  <p>Objetivo do projeto</p>

  <a href="/projetos/nome-do-projeto/">
    Ver projeto
  </a>
</article>
```

Informações úteis:

- cliente;
- segmento;
- projeto;
- objetivo;
- solução.

Não inventar resultados.

---

# 10. Criar páginas individuais de serviço

Criar apenas páginas referentes aos serviços realmente oferecidos.

Estrutura recomendada:

```txt
/criacao-de-sites/
/landing-pages/
/sites-wordpress/
/seo-para-sites/
/manutencao-de-sites/
```

Cada página deve possuir:

- title exclusivo;
- meta description exclusiva;
- canonical;
- apenas um H1;
- conteúdo específico;
- CTA;
- FAQ;
- links internos;
- breadcrumbs;
- Open Graph;
- schema apropriado.

---

# 11. Página prioritária `/criacao-de-sites/`

Criar uma landing page específica:

```txt
/criacao-de-sites/
```

Esta deve ser preparada para receber tráfego de Google Ads e Performance Max.

## H1

**Criação de sites profissionais para empresas**

## CTA

**Solicitar orçamento**

## Estrutura

1. Hero
2. Benefícios
3. Projetos
4. Tipos de sites
5. Processo
6. Prazo
7. Investimento
8. FAQ
9. Formulário
10. CTA final

---

# 12. Benefícios

Utilizar somente itens realmente entregues pela Mintcode.

Exemplos:

- design responsivo;
- carregamento rápido;
- estrutura preparada para SEO;
- integração com Analytics;
- integração com GTM;
- formulário;
- WhatsApp;
- código otimizado;
- suporte;
- integração com ferramentas externas.

---

# 13. Processo

Estrutura sugerida:

```txt
1. Briefing
2. Planejamento
3. Design
4. Desenvolvimento
5. Revisão
6. Publicação
```

Adaptar ao processo real da Mintcode.

---

# 14. Investimento

Não inventar valores.

Caso não exista preço fixo, explicar que o orçamento depende de:

- quantidade de páginas;
- funcionalidades;
- integrações;
- conteúdo;
- complexidade;
- tecnologia;
- necessidades específicas.

---

# 15. AEO

O site deve responder diretamente às principais perguntas comerciais.

Criar FAQs como:

- Quanto custa criar um site profissional?
- Quanto tempo demora para criar um site?
- Preciso pagar mensalidade?
- O site vai aparecer no Google?
- O site será responsivo?
- Posso editar meu próprio site?
- Qual a diferença entre site e landing page?
- WordPress é uma boa opção para empresas?
- Vocês fazem hospedagem?
- O domínio fica no nome do cliente?
- O site pode receber campanhas de Google Ads?
- O site terá Google Analytics?
- Vocês oferecem manutenção depois da publicação?

Responder somente o que puder ser confirmado.

Utilizar o formato:

**resposta direta primeiro → explicação depois.**

Exemplo:

```html
<h3>Quanto custa criar um site profissional?</h3>

<p>
O valor depende da quantidade de páginas, funcionalidades,
integrações, conteúdo e complexidade do projeto.
</p>

<p>
Após entender as necessidades da empresa, a Mintcode prepara
um orçamento de acordo com a estrutura necessária.
</p>
```

---

# 16. GEO

O objetivo é criar conteúdo que mecanismos generativos consigam compreender, reutilizar e citar.

Priorizar:

- experiência real;
- projetos reais;
- metodologia;
- processos;
- tecnologias;
- critérios de decisão;
- comparações;
- exemplos;
- autoria;
- informações verificáveis.

Evitar conteúdo genérico.

---

# 17. Conteúdos futuros

Criar gradualmente:

```txt
/quanto-custa-criar-um-site/

/quanto-tempo-demora-criar-site/

/site-institucional-o-que-e/

/site-wordpress-vale-a-pena/

/landing-page-ou-site/

/landing-page-para-google-ads/

/como-escolher-empresa-criacao-site/

/por-que-meu-site-nao-gera-clientes/

/como-saber-se-preciso-refazer-meu-site/
```

Não gerar todos automaticamente.

Qualidade é prioridade.

---

# 18. Cases

Criar:

```txt
/projetos/

/projetos/nome-do-projeto/
```

Cada case pode conter:

- cliente;
- segmento;
- cidade;
- problema;
- objetivo;
- solução;
- tecnologia;
- período;
- screenshots;
- integrações;
- resultados.

Só utilizar métricas reais.

---

# 19. Página Sobre

Criar ou melhorar:

```txt
/sobre/
```

Explicar:

- o que é a Mintcode;
- quem está por trás;
- especialização;
- atuação;
- atendimento;
- tecnologias;
- formas de contato.

Não inventar dados.

---

# 20. Organization Schema

Adicionar JSON-LD na homepage.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mintcode",
  "url": "https://mintcode.com.br/",
  "logo": "URL_REAL_DO_LOGO"
}
</script>
```

Adicionar somente informações reais.

---

# 21. Outros schemas

Utilizar quando apropriado:

```txt
Organization
WebSite
WebPage
Service
BreadcrumbList
Article
Person
```

Usar `LocalBusiness` somente se existir presença física/local real.

Não utilizar apenas por tentativa de ranqueamento.

---

# 22. Open Graph

Configurar em todas as páginas importantes.

```html
<meta property="og:type" content="website">

<meta
  property="og:title"
  content="Criação de Sites Profissionais e Landing Pages | Mintcode"
>

<meta
  property="og:description"
  content="Criamos sites profissionais e landing pages rápidas, modernas e preparadas para geração de clientes."
>

<meta
  property="og:url"
  content="https://mintcode.com.br/"
>

<meta
  property="og:image"
  content="URL_DA_IMAGEM"
>
```

Imagem recomendada:

```txt
1200x630
```

---

# 23. Links internos

Estrutura recomendada:

```txt
Home
├── Criação de Sites
├── Landing Pages
├── WordPress
├── SEO
├── Projetos
├── Conteúdos
├── Sobre
└── Contato
```

Evitar links com âncoras excessivamente genéricas:

```txt
clique aqui
veja aqui
saiba mais
```

Preferir:

```txt
conheça nosso serviço de criação de sites

veja projetos desenvolvidos pela Mintcode

conheça nosso serviço de landing pages
```

---

# 24. Imagens

Priorizar:

- WebP;
- AVIF;
- compressão;
- tamanhos adequados;
- `width`;
- `height`;
- `loading="lazy"`;
- alt descritivo.

Exemplo:

```html
<img
  src="/assets/images/projeto-clinica.webp"
  alt="Site institucional desenvolvido pela Mintcode para uma clínica"
  width="1200"
  height="800"
  loading="lazy"
>
```

Não utilizar lazy loading na principal imagem LCP.

Não fazer keyword stuffing no `alt`.

---

# 25. Performance

Priorizar Core Web Vitals.

## CSS

- remover CSS morto;
- evitar `@import`;
- minificar produção;
- evitar bibliotecas grandes;
- utilizar `font-display: swap`.

## JavaScript

- usar `defer`;
- remover scripts desnecessários;
- evitar render-blocking;
- evitar bibliotecas para animações simples;
- JavaScript mínimo.

## Imagens

- compressão;
- dimensões corretas;
- lazy loading;
- formatos modernos;
- não carregar imagens 4K para exibição pequena.

---

# 26. Mobile-first

Testar em:

```txt
320px
360px
375px
390px
414px
768px
1024px
1440px
```

Garantir:

- CTA visível;
- títulos legíveis;
- formulário responsivo;
- navegação funcional;
- cards adequados;
- sem scroll horizontal;
- botões com área de toque adequada.

---

# 27. Formulários

Todo campo deve possuir:

- label;
- name;
- type;
- validação;
- mensagem de erro;
- mensagem de sucesso;
- autocomplete quando aplicável.

Não depender apenas de placeholder.

Exemplo:

```html
<label for="name">Nome</label>

<input
  id="name"
  name="name"
  type="text"
  autocomplete="name"
  required
>
```

Preservar endpoints e integrações existentes.

---

# 28. Conversões

Não remover eventos existentes.

Mapear, quando necessário:

```txt
click_whatsapp
form_start
form_submit
click_email
click_phone
view_portfolio
view_service
```

Quando GTM estiver instalado, preferir `dataLayer`.

Exemplo:

```js
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: 'form_submit',
  form_name: 'orcamento'
});
```

Não duplicar eventos existentes.

---

# 29. CTA

Manter consistência.

Principal:

**Solicitar orçamento**

Alternativas aceitáveis:

- Quero criar meu site
- Falar sobre meu projeto
- Solicitar proposta

Evitar muitos CTAs diferentes na mesma página.

---

# 30. Robots.txt

Criar ou revisar:

```txt
User-agent: *
Allow: /

Sitemap: https://mintcode.com.br/sitemap.xml
```

Verificar se não existem bloqueios acidentais.

---

# 31. Sitemap

Criar ou revisar:

```txt
/sitemap.xml
```

Incluir apenas URLs:

- válidas;
- canônicas;
- indexáveis;
- relevantes.

Não incluir páginas:

- duplicadas;
- de teste;
- de obrigado;
- vazias.

---

# 32. Contato

Criar ou melhorar:

```txt
/contato/
```

Incluir:

- formulário;
- WhatsApp;
- e-mail;
- redes sociais;
- localização, se aplicável;
- horário, se aplicável.

Explicar o que acontece depois do envio.

---

# 33. Página 404

Criar uma página 404 funcional.

```html
<h1>Página não encontrada</h1>

<p>
A página que você tentou acessar não existe ou foi movida.
</p>

<a href="/">
  Voltar para a página inicial
</a>
```

Garantir retorno HTTP `404`, não `200`.

---

# 34. Footer

Adicionar:

- logo;
- descrição curta;
- serviços;
- links institucionais;
- contato;
- privacidade;
- termos;
- copyright;
- redes sociais.

---

# 35. Segurança

Como é um projeto HTML puro:

- não expor API keys;
- não versionar credenciais;
- revisar endpoints;
- usar HTTPS;
- evitar JavaScript inline quando possível;
- remover scripts desconhecidos;
- não inserir HTML não sanitizado.

---

# 36. Ordem de execução

## P0 — Crítico

1. auditar projeto;
2. corrigir rastreamento;
3. corrigir H1;
4. corrigir title;
5. corrigir description;
6. canonical;
7. robots;
8. sitemap;
9. HTML semântico;
10. responsividade.

## P1 — Conversão

1. reformular hero;
2. melhorar proposta de valor;
3. reorganizar serviços;
4. adicionar projetos;
5. melhorar CTA;
6. melhorar formulário;
7. criar `/criacao-de-sites/`.

## P2 — SEO / AEO / GEO

1. páginas de serviços;
2. FAQ;
3. Organization schema;
4. Service schema;
5. breadcrumbs;
6. página Sobre;
7. cases;
8. links internos;
9. conteúdos específicos.

## P3 — Conteúdo

Construir cluster editorial gradualmente.

---

# 37. Checklist final

- [ ] Projeto continua em HTML/CSS/JS puro.
- [ ] Homepage possui apenas um H1.
- [ ] Title está correto.
- [ ] Meta description está correta.
- [ ] Canonical está correto.
- [ ] Não existe `noindex` indevido.
- [ ] Robots.txt está correto.
- [ ] Sitemap está válido.
- [ ] Conteúdo comercial existe no HTML inicial.
- [ ] Conteúdo principal não depende de JavaScript.
- [ ] Navegação mobile funciona.
- [ ] Não existe scroll horizontal.
- [ ] Imagens possuem dimensões.
- [ ] Imagens relevantes possuem alt.
- [ ] Lazy load está configurado.
- [ ] LCP não usa lazy load.
- [ ] CTA principal aparece no hero.
- [ ] Formulários funcionam.
- [ ] GTM foi preservado.
- [ ] GA4 foi preservado.
- [ ] Meta Pixel foi preservado, caso exista.
- [ ] `/criacao-de-sites/` foi criada.
- [ ] FAQ está implementada.
- [ ] Organization schema está válido.
- [ ] Breadcrumbs funcionam.
- [ ] Open Graph está configurado.
- [ ] Não existem links quebrados.
- [ ] 404 funciona corretamente.
- [ ] Não existem erros críticos no console.
- [ ] Nenhuma dependência pesada foi adicionada sem necessidade.

---

# 38. Validação final

Executar:

1. Lighthouse Mobile;
2. Lighthouse Desktop;
3. teste responsivo;
4. validação do HTML;
5. validação de schema;
6. teste dos formulários;
7. teste dos CTAs;
8. teste dos links;
9. teste da página 404;
10. inspeção do HTML inicial;
11. inspeção do console;
12. busca por recursos 404;
13. análise de CLS;
14. teste dos eventos de conversão.

---

# 39. Relatório final

Ao concluir, retornar:

```txt
Arquivos alterados:
- ...

Arquivos criados:
- ...

Principais melhorias:
- ...

Pendências:
- ...

Conteúdos reais ainda necessários:
- ...
```

---

# 40. Direção estratégica

A Mintcode deve comunicar:

**estúdio enxuto + especialista + atendimento próximo + execução técnica + foco em resultado**

Priorizar a percepção de:

- criação de sites;
- sites institucionais;
- landing pages;
- SEO;
- performance;
- geração de oportunidades.

Evitar posicionamento de agência digital genérica 360º.

O principal produto deve ser percebido como:

**sites profissionais desenvolvidos para ajudar empresas a gerar presença, autoridade, contatos e oportunidades comerciais.**

---

# 41. Regra final para o Codex

Não executar alterações cegamente.

Antes de substituir código:

1. entender a implementação atual;
2. preservar funcionalidades;
3. preservar integrações;
4. preservar tracking;
5. preservar URLs;
6. melhorar incrementalmente.

Quando uma implementação exigir informação que não existe no repositório, utilizar:

```txt
[CONTEÚDO PENDENTE]
```

Nunca inventar informações.

Ao encontrar conflito entre estas instruções e uma funcionalidade existente, preservar a funcionalidade e documentar o conflito no relatório final.
::: ​​
