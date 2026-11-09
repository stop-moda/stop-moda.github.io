# Stop Moda Masculina: página do grupo VIP

Página estática (HTML + CSS + JS, sem build). Só a divulgação do grupo VIP: título, faixas de alerta, bloco vermelho e botões. **Sem fotos de produtos**, a pedido do cliente (2026-11-07).

## Como rodar

```bash
python -m http.server 5173
```

Abra http://localhost:5173.

## Estrutura

- `index.html`, `style.css`, `script.js`
- `assets/`: logo (SVG vetorial extraído do manual de marca), favicon, ícone do iPhone, imagem de compartilhamento (só logo e texto, sem foto), `fonts/` (Barlow, hospedada no próprio site)

## Como mexer

- **Link do grupo:** `CONFIG.GROUP_LINK` no topo do `script.js`. Vale para os 3 botões (topo, bloco vermelho e botão flutuante do celular).
- **Pixel da Meta (só neste site):** código no fim do `<head>` do `index.html` (pixel `1785734212644446`, evento PageView). O clique em qualquer botão do grupo envia o evento **Lead** (função `trackLead` em `script.js`), mas só depois que `CONFIG.GROUP_LINK` estiver preenchido. O site de Capitán Bado não tem pixel.
- **Botão flutuante:** só aparece no celular, depois que o botão do topo sai da tela e até o botão grande do bloco vermelho aparecer.
- **Texto das faixas de alerta:** atributo `data-words` das duas `.tape__track` no `index.html`, palavras separadas por `|`.
- Para quem pede menos movimento no aparelho, as faixas de alerta ficam paradas e os botões deixam de pulsar e brilhar.

## Pendências

- **Link do grupo VIP:** já configurado em `CONFIG.GROUP_LINK` (`script.js`) com o grupo de WhatsApp informado em 2026-11-09, que é o **mesmo grupo dos dois sites** (Ponta Porã e Capitán Bado). Se a Stop criar um grupo só de Ponta Porã, é só trocar o link ali.
- **Frase abaixo do botão grande:** "Grupo exclusivo, direto no seu WhatsApp." (igual nos dois sites, sem citar cidade, porque o grupo é o mesmo nas duas).
- **Cidade:** a página é só para Ponta Porã e isso aparece no topo, no texto principal, nas faixas, no bloco vermelho, no rodapé e no título. Não mencionar a outra unidade da Stop nesta página.
- **Endereço, telefone e Instagram:** não foram informados, então não aparecem no site nem nos dados estruturados.
- **Domínio próprio:** ainda não definido.
- **Textos:** conferir se o cliente aprova "Pare tudo.", "Não fique de fora." e as frases de apoio.
- **Fotos:** o cliente não gostou das fotos e todas foram retiradas. Uma cópia fica fora do site, em `sites\_arquivo-fotos-removidas`, caso ele mude de ideia. Elas continuam no histórico público do repositório no GitHub.
