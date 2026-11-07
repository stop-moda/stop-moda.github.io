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
- **Botão flutuante:** só aparece no celular, depois que o botão do topo sai da tela e até o botão grande do bloco vermelho aparecer.
- **Texto das faixas de alerta:** atributo `data-words` das duas `.tape__track` no `index.html`, palavras separadas por `|`.
- Para quem pede menos movimento no aparelho, as faixas de alerta ficam paradas e os botões deixam de pulsar e brilhar.

## Pendências

- **Link do grupo VIP:** colar em `script.js`, em `CONFIG.GROUP_LINK`. Enquanto estiver vazio, o botão mostra um aviso em vez de abrir algo. **Não divulgar a página antes disso.**
- **Cidade:** a página é só para Ponta Porã e isso aparece no topo, no texto principal, nas faixas, no bloco vermelho, no rodapé e no título. Não mencionar a outra unidade da Stop nesta página.
- **Endereço, telefone e Instagram:** não foram informados, então não aparecem no site nem nos dados estruturados.
- **Domínio próprio:** ainda não definido.
- **Textos:** conferir se o cliente aprova "Pare tudo.", "Não fique de fora." e as frases de apoio.
- **Fotos:** o cliente não gostou das fotos e todas foram retiradas. Uma cópia fica fora do site, em `sites\_arquivo-fotos-removidas`, caso ele mude de ideia. Elas continuam no histórico público do repositório no GitHub.
