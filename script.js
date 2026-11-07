// Stop Moda Masculina
// Quando o grupo VIP existir, cole o link entre as aspas de GROUP_LINK.
// Exemplo: "https://chat.whatsapp.com/XXXXXXXX"
const CONFIG = {
  GROUP_LINK: "",
};

/* ---------- botões do grupo ---------- */
(function () {
  const buttons = document.querySelectorAll("[data-group-link]");
  const toast = document.querySelector(".toast");
  let timer;

  buttons.forEach((btn) => {
    if (CONFIG.GROUP_LINK) {
      btn.href = CONFIG.GROUP_LINK;
      btn.target = "_blank";
      btn.rel = "noopener";
      return;
    }
    // Sem link ainda: o botão avisa em vez de levar a lugar nenhum.
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      toast.textContent = "O link do grupo VIP ainda não foi configurado.";
      toast.hidden = false;
      clearTimeout(timer);
      timer = setTimeout(() => { toast.hidden = true; }, 3500);
    });
  });
})();

/* ---------- botão flutuante (celular) ---------- */
// Aparece quando o botão do topo, o botão grande do bloco vermelho e o rodapé estão fora da tela.
(function () {
  const float = document.querySelector(".float-cta");
  const watch = [
    document.querySelector(".hero .btn"),
    document.querySelector(".vip .btn"),
    document.querySelector(".foot"),
  ].filter(Boolean);
  if (!float || !("IntersectionObserver" in window)) return;

  const inView = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? inView.add(e.target) : inView.delete(e.target)));
    float.classList.toggle("is-visible", inView.size === 0);
  });
  watch.forEach((el) => io.observe(el));
})();

/* ---------- faixas de alerta (texto que corre) ---------- */
(function () {
  const ICON =
    '<svg class="warn" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M12 2.5 23 21.5H1Z" fill="currentColor"/>' +
    '<path class="ex" d="M11 9h2v6h-2zM11 16.5h2v2h-2z"/></svg>';

  document.querySelectorAll(".tape__track").forEach((track) => {
    const words = (track.dataset.words || "").split("|").filter(Boolean);
    if (!words.length) return;

    const unit = words
      .map((w) => '<span class="tape__item"><span>' + w + "</span>" + ICON + "</span>")
      .join("");

    const group = document.createElement("div");
    group.className = "tape__group";
    track.appendChild(group);

    // repete o texto até uma metade passar da largura da tela
    let guard = 0;
    group.innerHTML = unit;
    while (group.offsetWidth < window.innerWidth * 1.2 && guard++ < 20) {
      group.insertAdjacentHTML("beforeend", unit);
    }
    track.appendChild(group.cloneNode(true));
  });
})();
