# Assets da Landing Page — Duetto

## Em uso (`assets/`)

Fotos reais da Duetto, curadas e convertidas para WebP (qualidade 80, otimizadas).
Origem: `Desktop/Duetto/Fotos/Batismo/Fotos/`.

| Arquivo | Origem | Onde aparece | Dimensão |
|---|---|---|---|
| `hero.webp` | IMG_7008 | S1 Hero (fundo) | 1400×2489 |
| `cta-bg.webp` | IMG_7014 | S8 CTA final (fundo) | 1400×2489 |
| `detalhe-bolo.webp` | IMG_6452 | S2 Posicionamento | 900×1600 |
| `kit-batizado.webp` | IMG_8255 | S5 Kit Batizado | 1000×1000 |
| `kit-cha-revelacao.webp` | IMG_7536 | S5 Chá Revelação | 1000×1000 |
| `detalhe-1.webp` | IMG_8256 | extra (não usado ainda) | 900×900 |
| `detalhe-2.webp` | IMG_8259 | extra (não usado ainda) | 900×900 |
| `boy-girl.webp` | IMG_6454 | extra — piruletas Boy/Girl | 900×1600 |

`detalhe-1`, `detalhe-2` e `boy-girl` ficaram disponíveis como reserva (ex: galeria
futura ou troca de imagem de kit).

## Galeria / Portfólio (`assets/galeria/`)

Seção **"Eventos que já fizemos"** (id `#galeria`) — abas por categoria, cada uma
com um carrossel autoplay. Fotos reais curadas e convertidas para WebP (qualidade
80, largura/altura máx. 1280px), faixa de ~32–112 KB cada.

| Categoria | Arquivos | Origem | Obs. |
|---|---|---|---|
| Casamentos | `casamento-01..10.webp` | `Fotos/Casamento/Fotos/` (IMG_7006, IMG_8131, IMG_6350, a1e2a6dc, IMG_6082, IMG_6081, 55123f22, IMG_7001, IMG_6997, IMG_6242) | **Fotos genuínas.** `casamento-01` (IMG_7006) também é a imagem do card "Casamento" em S5. |
| Batizados | `batizado-01..10.webp` | `Fotos/Batismo/Fotos/` (IMG_7477, 7476, 6322, 6453, 6326, 7473, 325D63CC, 7472, 6324, 111C1A9F) | **Tema: branco/elegante** — pombinhas, lírios, hortênsias. **Sem balões, sem ursinhos** (reservados p/ Chá Revelação). |
| Chá Revelação | `charevelacao-01..08.webp` | `Fotos/Chá-Revelação/Fotos/` (IMG_6297, 6461, 7895, 6459, 8257, 7537, 7540, F856E8E7) | Mesmo acervo de Batizado (ver nota), mas selecionando só os motivos de **revelação/bebê**: balões, figuras de bebê (azul+rosa), coelhinho e ursinhos em tons de azul. **Nenhum arquivo se repete entre as abas.** |

> **Separação temática:** como o acervo é comum, as abas foram divididas por
> "cara" de evento — balões + bebê + ursinho/coelho → Chá Revelação; branco
> elegante + pombinhas + lírios → Batizado. As 28 fotos são de arquivos distintos
> (verificado por hash) e nenhuma aparece em duas abas. Evitadas as imagens com
> texto/convite (E2CD04AA, 61B4358F) e com pessoas no quadro (IMG_7043, 7044).

## ⚠️ Observações importantes

1. **Pasta Chá-Revelação = cópia da Batismo.** As três pastas em `Fotos/` foram
   verificadas por hash: `Chá-Revelação` tem arquivos **idênticos** aos de `Batismo`.
   Não há fotos genuínas de chá revelação. Tanto o card de Chá Revelação (IMG_7536 +
   piruletas "Boy/Girl" IMG_6454) quanto a **aba Chá Revelação da galeria** usam fotos
   desse acervo, priorizando paleta azul/verde para diferenciar visualmente da aba
   Batizados. **Se tiver fotos reais de chá revelação, envie para substituir** os
   arquivos `assets/galeria/charevelacao-*.webp`.

2. **Casamento:** as 22 fotos genuínas de `Fotos/Casamento/` agora **estão em uso** —
   10 na galeria (`casamento-*.webp`) + a `casamento-01` no novo card de especialidade.

## Pendentes (substituir quando chegar)

- **Logo:** hoje é um *wordmark* em texto ("Duetto" em Cormorant + "Ateliê de
  Chocolate"). Quando tiver o logo oficial em **SVG/PNG fundo transparente**, salve
  como `assets/logo.svg` e troque o bloco `.logo` no `index.html` (nav e footer).
  O `identidade/logo.pdf` existe, mas PDF não embute bem inline.

- **Depoimentos (S3 Prova Social):** a seção está **comentada** no `index.html`
  (procure por `S3 · PROVA SOCIAL`). Para ativar: descomente o bloco, troque
  `[Nome real]` / `[Ocupação]` / `[Depoimento...]` pelos depoimentos **reais
  aprovados pela Lucianne** e os avatares (`.tcard__avatar`) por fotos circulares.

## Como regerar/otimizar uma imagem (ffmpeg)

```bash
# Imagem solta (hero, kit, etc.) — largura 1400
ffmpeg -y -i ORIGEM.JPG -vf "scale=1400:-1" -c:v libwebp -quality 80 assets/destino.webp

# Fotos da galeria — caixa máx. 1280×1280 mantendo proporção (retrato/paisagem)
ffmpeg -y -i ORIGEM.JPG -vf "scale=1280:1280:force_original_aspect_ratio=decrease" \
  -c:v libwebp -quality 80 assets/galeria/casamento-01.webp
```

## Nota de copy

O PRD usa "docinhos tradicionais" (S4), mas o checklist do próprio PRD bane
diminutivos ('docinho'/'bolinho'). Mantive a copy do PRD e deixei um comentário no
HTML marcando o conflito — decisão final é da Lucianne.
