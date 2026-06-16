# Configurações da campanha — Duetto Ateliê de Chocolate

**Data de criação:** 2026-06-16
**Objetivo:** cliques no WhatsApp (contato) a partir da landing page
**Tipo:** Rede de Pesquisa (Search) — somente Google search (sem parceiros de pesquisa no início)

---

## Estrutura

- **1 campanha:** Duetto - Search Eventos
- **6 grupos de anúncios** (1 por cluster de intenção):
  1. Bolos Personalizados
  2. Doces Finos e Mesa de Doces
  3. Batizado
  4. Chá Revelação
  5. Casamento
  6. Aniversário e Mesversário
- **59 palavras-chave positivas** (mix de frase + exata)
- **59 palavras-chave negativas** (34 globais da campanha + 25 cruzadas por grupo)
- **6 RSAs** (1 por grupo · 15 títulos + 4 descrições cada)
- **Extensões:** 4 sitelinks · 2 conjuntos de snippets estruturados · 8 frases de destaque · 1 chamada

---

## Lances e orçamento

- **Estratégia de lance:** começar em **"Maximizar conversões"**.
  Migrar para **"Maximizar conversões com tCPA"** só depois de **30+ conversões** acumuladas.
- **Orçamento diário sugerido:** R$ 30 a R$ 50/dia para começar (o CSV vem com R$ 40).
  Ajuste conforme o caixa. Rodar **10 a 14 dias** antes de avaliar.
- **Sobre custo por clique:** não dá pra cravar — depende do leilão real em Goiânia
  (concorrência ativa: Ana Guimarães, Giane Barros, Lui Doceria, Ateliê Patisserie, entre outras).
  Os valores reais aparecem nos primeiros dias; ajuste o orçamento a partir do CPC observado.

---

## Segmentação

- **Local:** Goiânia-GO. Comece pela cidade inteira; se quiser refinar para o público de alto
  padrão, use **raio de 8–12 km a partir do Parque Amazonas** (sede) e/ou ajuste de lance +
  para bairros nobres (Jardim Goiás, Setor Marista, Setor Bueno, Alphaville).
- **Opção de localização:** marcar **"Presença: pessoas que estão no local"** (não "interesse"),
  pra evitar cliques de fora de Goiânia.
- **Idioma:** Português
- **Dispositivos:** mobile +0%, desktop +0%, tablet −20% (rever após dados).
  O público vem majoritariamente de celular — a LP e o botão de WhatsApp já são mobile-first.
- **Programação:** começar o dia todo. Após 2 semanas, concentrar verba nos horários com mais
  cliques de WhatsApp (provável pico comercial 9h–21h).

---

## Conversões (CRÍTICO — configurar ANTES de ativar)

A LP **já dispara** o evento `whatsapp_click` no dataLayer a cada clique de WhatsApp,
e o **GTM já está instalado** (container `GTM-WWT354LJ`). Falta fechar o circuito:

1. **Google Ads → Metas → Conversões → Nova ação → Importar / Manual:**
   criar a conversão **"Clique no WhatsApp"** (categoria: Contato; contagem: Uma).
2. **No GTM:** criar um acionador de evento personalizado para `whatsapp_click` e
   uma tag de **Conversão do Google Ads** disparando nesse acionador (usar o ID de conversão
   e rótulo gerados no passo 1). Publicar o container.
3. **Validar** com o Modo de Visualização do GTM + Google Tag Assistant antes de ativar a campanha.

> Sem essa conversão registrando, "Maximizar conversões" não tem o que otimizar.
> Não ativar a campanha enquanto o teste de conversão não passar.

---

## Checklist antes de ativar

- [ ] Trocar `https://SEU-DOMINIO.com.br/` pela URL real da landing page em **anuncios.csv** e **extensoes-sitelinks.csv**
- [ ] Conferir se os âncoras dos sitelinks existem na LP (#kits, #diferenciais, #galeria, #cta)
- [ ] Conversão "Clique no WhatsApp" criada e testada (passos acima)
- [ ] Localização = Goiânia, opção "Presença: pessoas no local"
- [ ] Parceiros de pesquisa DESMARCADOS; Rede de Display DESMARCADA
- [ ] Orçamento diário definido
- [ ] Tudo importado como **Pausado** — revisar e ativar manualmente
