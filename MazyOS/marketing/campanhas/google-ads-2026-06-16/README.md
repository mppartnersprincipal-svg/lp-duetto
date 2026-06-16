# Campanha Google Ads — Duetto (Search · WhatsApp) — 2026-06-16

Campanha de Rede de Pesquisa para Goiânia-GO, com objetivo de **cliques no WhatsApp** a partir
da landing page. Arquivos prontos pra importar no **Google Ads Editor**.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `campanhas.csv` | A campanha (orçamento, estratégia, rede, local) |
| `grupos.csv` | Os 6 grupos de anúncios |
| `keywords.csv` | 59 palavras-chave positivas (frase + exata) |
| `keywords-negativas.csv` | Negativas globais + cruzadas por grupo |
| `anuncios.csv` | 6 RSAs (15 títulos + 4 descrições cada) |
| `extensoes-sitelinks.csv` | 4 sitelinks |
| `extensoes-snippets.csv` | Snippets estruturados (Serviços, Tipos) |
| `extensoes-frases-destaque.csv` | 8 frases de destaque (callouts) |
| `extensoes-chamada.csv` | Extensão de chamada (WhatsApp/telefone) |
| `configuracoes.md` | Lances, segmentação, conversões e checklist |

## Antes de subir

1. **Trocar a URL placeholder.** Em `anuncios.csv` e `extensoes-sitelinks.csv`, substituir
   `https://SEU-DOMINIO.com.br/` pela URL real publicada da landing page.
2. **Configurar a conversão de WhatsApp** (ver `configuracoes.md` — seção Conversões). É o passo
   que faz a campanha existir de verdade; sem ele o Google não otimiza e não dá pra medir resultado.

## Como importar no Google Ads Editor

1. Abrir o **Google Ads Editor** (desktop) e baixar a conta.
2. **Conta → Importar → Importar de arquivo (CSV).**
3. Subir na ordem: `campanhas.csv` → `grupos.csv` → `keywords.csv` → `keywords-negativas.csv` → `anuncios.csv`.
4. Revisar o preview de cada importação (o Editor mapeia as colunas pelos cabeçalhos em inglês).
5. Extensões: subir os `extensoes-*.csv` ou recriar em **Anúncios e recursos → Recursos**
   (sitelinks, frases de destaque, snippets estruturados, chamada). São rápidas de colar à mão.
6. **Postar** as alterações (botão "Publicar").

## Depois de subir

1. Conferir que **tudo está Pausado**.
2. Conferir localização (Goiânia, "presença"), parceiros de pesquisa **desligados**, Display **desligada**.
3. Testar a conversão de WhatsApp (Modo de Visualização do GTM + Tag Assistant).
4. Ativar a campanha quando o teste passar.
5. Rodar 10–14 dias antes de avaliar. Primeiras otimizações: termos de pesquisa (adicionar
   negativas novas), pausar keywords sem clique de WhatsApp, reforçar as que convertem.

## Observações de posicionamento

Os anúncios seguem o tom da marca: luxo, personalização, pacote completo e entrega no local —
sem gritar preço nem usar superlativos. O cluster "Doces Finos" e termos como brigadeiro/docinhos
atraem mais curiosos de preço; monitorar nos primeiros dias e cortar termos que só trazem
"quanto custa" sem intenção real.
