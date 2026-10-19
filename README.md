# ELVANO Agency — Reconstrução e Reformulação Visual do Site Oficial

Site institucional, catálogo de serviços e canal de atendimento comercial para a **ELVANO Agency**, sob responsabilidade de **Guilherme Lousada Loureiro**.

---

## 1. Conceito Visual & Tipografia Aprimorada
- **Fundo Principal (Grafite Quente):** `#141311`
- **Fundo Secundário:** `#201C18`
- **Superfícies & Cards Translúcidos:** `rgba(32, 28, 24, 0.78)` com desfoque de fundo e bordas luminosas champagne
- **Champagne Principal:** `#E3C8B2`
- **Champagne Luminoso:** `#F4E2D2`
- **Bronze Suave:** `#A88769`
- **Texto Principal Claro:** `#F7F5F2` (máximo contraste, anti-aliasing e legibilidade)
- **Texto Secundário:** `#DDD4CB` (alto contraste sobre superfícies escuras)
- **Tipografia:** Serifada editorial (*Cormorant Garamond*) para títulos com kerning e pesos balanceados (400, 500, 600, 700) e sem serifa moderna (*Manrope*) para corpo e controles.

---

## 2. Fundo Animado Global em 3 Camadas
Componente: `src/components/AnimatedBackground.tsx` & `src/context/AnimationContext.tsx`
- **Camada 1 (Profundidade):** Gradientes amplos em grafite, bronze e champagne com respiração e deslocamento contínuo.
- **Camada 2 (Principal - Fitas de Seda & Metal Champagne):** Fitas curvas largas com gradientes metálicos, reflexos especulares e ondulação fluida atravessando a composição superior e inferior do site todo.
- **Camada 3 (Luz & Partículas):** Halos difusos respirando suavemente e pontos luminosos com cintilação discreta.
- Presente em todas as páginas e durante a rolagem até o rodapé.
- Botão "Pausar animações" / "Ativar animações" com persistência em `localStorage`.
- Respeita `prefers-reduced-motion` e economiza CPU com aba em segundo plano (`visibilityState`).

---

## 3. Painéis Interativos do Mercado Livre (Página de Resultados)
Componente: `src/components/MercadoLivreGraph.tsx` & `src/pages/ResultsPage.tsx`
- **Dois gráficos interativos autênticos do ecossistema Mercado Livre**, desenvolvidos sob sigilo comercial com nomes de loja anônimos ("Operação Automotiva A" e "Operação Automotiva B"):
  1. **Caso 01 (Operação Madura · MercadoLíder Platinum):**
     - Vendas nos 30 dias: **R$ 1.211.706**
     - Pedidos: 3.148
     - Ticket Médio: R$ 384,91
     - Média Diária: R$ 40.390,20
     - Curva diária e gráfico de barras com interatividade por ponto (dia, valor e pedidos).
  2. **Caso 02 (Operação em Tração · MercadoLíder):**
     - Vendas nos 30 dias: **R$ 167.709**
     - Pedidos: 524
     - Ticket Médio: R$ 320,05
     - Média Diária: R$ 5.590,30
     - Curva diária e gráfico de barras com interatividade por ponto.
- Alternância entre visualização em **Curva** e **Barras**.
- Indicadores de reputação, pontualidade de envio e notas éticas de faturamento bruto vs. lucro líquido.

---

## 4. Imagens Autorais dos 8 Serviços & Hero Master
Geradas em proporção 4:3 com enquadramentos de estúdio fotográfico de luxo:
1. **Hero Master:** `/src/assets/images/elvano_hero_master_1791984967773.jpg` (Notebook, iPhone com grade do Instagram, caixas de produtos, cartões flutuantes e fita champagne entrelaçada).
2. **Meta Ads:** `/src/assets/images/meta_ads_custom_1791984969301.jpg`
3. **Google Ads:** `/src/assets/images/google_ads_custom_1791984969152.jpg`
4. **Meta + Google:** `/src/assets/images/meta_google_custom_1791984971326.jpg`
5. **Marketplace Performance:** `/src/assets/images/marketplace_perf_custom_1791984972341.jpg`
6. **Design para Instagram:** `/src/assets/images/design_instagram_custom_1791984971502.jpg`
7. **Design de Loja Virtual:** `/src/assets/images/design_loja_custom_1791984974722.jpg`
8. **Site Completo e Funcional:** `/src/assets/images/site_completo_custom_1791984977344.jpg`
9. **Gestão Completa ELVANO:** `/src/assets/images/gestao_completa_custom_1791984974536.jpg`

---

## 5. Preços & Mensalidades Oficiais (Inalterados)
- **Meta Ads:** a partir de R$ 690/mês
- **Google Ads:** a partir de R$ 790/mês
- **Meta + Google:** a partir de R$ 1.190/mês *(Estratégia integrada)*
- **Marketplace Performance:** a partir de R$ 790/mês
- **Gestão Completa ELVANO:** a partir de R$ 1.690/mês *(Multi-canal)*
- **Design para Instagram:** a partir de R$ 590 por projeto
- **Design de Loja Virtual:** a partir de R$ 790 por projeto
- **Site Completo e Funcional:** a partir de R$ 1.290 por projeto

---

## 6. Contato Comercial
- **Telefone:** `(11) 91202-2007`
- **WhatsApp Internacional:** `5511912022007`
- **Link Direto:** `https://wa.me/5511912022007`
