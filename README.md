# Stop Moda Masculina: página do grupo VIP

Página estática (HTML + CSS + JS, sem build). Uma tela de entrada, 4 fotos e o botão do grupo VIP.

## Como rodar

```bash
python -m http.server 5173
```

Abra http://localhost:5173.

## Estrutura

- `index.html`, `style.css`, `script.js`
- `assets/`: logo (SVG vetorial extraído do manual de marca), favicon, ícone do iPhone, imagem de compartilhamento
- `public/images/`: fotos otimizadas em WebP

## Como mexer

- **Link do grupo:** `CONFIG.GROUP_LINK` no topo do `script.js`. Vale para os 3 botões (topo, bloco vermelho e botão flutuante do celular).
- **Fotos da faixa:** os `<li class="strip__item">` do único grupo em `.strip`, no `index.html`. O `script.js` copia o grupo 2 vezes sozinho para a faixa girar sem emenda e ajusta a velocidade (12 s por foto, em `script.js`). Para adicionar uma foto, é só incluir mais um `<li>` e o arquivo em `public/images/`.
- **Botão flutuante:** só aparece no celular, depois que o botão do topo sai da tela e até o botão grande do bloco vermelho aparecer.
- **Texto das faixas de alerta:** atributo `data-words` das duas `.tape__track` no `index.html`, palavras separadas por `|`.
- A faixa de fotos pausa com o mouse em cima. Para quem pede menos movimento no aparelho, ela para e vira uma fileira que se arrasta com o dedo, e os botões deixam de pulsar.

## Pendências

- **Link do grupo VIP:** colar em `script.js`, em `CONFIG.GROUP_LINK`. Enquanto estiver vazio, o botão mostra um aviso em vez de abrir algo. **Não divulgar a página antes disso.**
- **Cidade:** a página é só para Ponta Porã e isso aparece no topo, no texto principal, nas faixas, no bloco vermelho, no rodapé e no título. Não mencionar a outra unidade da Stop nesta página.
- **Endereço, telefone e Instagram:** não foram informados, então não aparecem no site nem nos dados estruturados.
- **Domínio próprio:** ainda não definido.
- **Textos:** conferir se o cliente aprova "Pare tudo.", "Não fique de fora." e as frases de apoio.
- **Fotos:** a logo que vinha dentro da foto dos bonés foi cortada para não duplicar com a logo do topo.
