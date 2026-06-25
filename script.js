/* =========================================================================
   CONTEÚDO - edite somente este bloco.
   ========================================================================= */

// 1) PROJETOS EM VÍDEO (YouTube). id = código depois de "v=" ou "youtu.be/"
const VIDEOS = [
  { id: "A4WgT0QOXhs", title: "The Weeknd: São Paulo Livestream", tag: "DIT · 2024" },
  { id: "7SaKNpUIeBE", title: "Ogiva: O Mundo Não é Mais Nosso", tag: "Trailer · DIT" },
  { id: "wVqwoGwmR_I", title: "Caramelo", tag: "Trailer · Netflix · DIT" },
  { id: "zBlSoB8dsL0", title: "Os Farofeiros 2", tag: "Trailer · 2024" },
  { id: "jKZshDw6HUY", title: "Kasa Branca", tag: "Trailer · DIT · Festival do Rio" },
  { id: "5DA2O8qc-DI", title: "Eu Sou Maria", tag: "Trailer oficial · DIT" },
  { id: "bX9xa5xs1KY", title: "Case Alelo com Luan Santana", tag: "Publicidade · DIT" },
  { id: "EuLU7fRfOjg", title: "GNT Vamos Combinar - Renner", tag: "Programa · GNT/Globoplay · DIT · Data Management Technician" },
  { id: "G80Gvr4-Z5M", title: "Tônia, A Diva no Espelho", tag: "2021" },
  { id: "Ujh52JjdViw", title: "Amar é para os Fortes", tag: "Teaser · Prime Video" },
  { id: "3CS9Qj-T9is", title: "Caravana das Drags", tag: "Trailer · Prime Video" },
  { id: "bqNEizJJzKQ", title: "Dona Beja", tag: "Trailer · HBO Max" },
  { id: "GE2jLGrN5Ss", title: "Vestidas de Amor", tag: "Série · Globoplay" },
  { id: "xyE3Mf5INZE", title: "De Maria - Uma Mulher, Uma Represa", tag: "Clipe" },
  { id: "0jJakBm6q4Q", title: "Julio Secchin - Pra Que Ser Tão Normal", tag: "Clipe oficial" },
  { id: "f3z_pgQ4UkA", title: "Stuarts - Dreams Over", tag: "Clipe" },
  { id: "6ZnDK-0y094", title: "Caio Nunez - Ancorar", tag: "#Hangar" },
  { id: "c8Kbv04-4L0", title: "Balé Dinossauro - Corpo e Alma", tag: "Clipe oficial" },
  { id: "kc0SZMyTEzQ", title: "Bryan Behr - Não Vejo a Hora", tag: "Acústico" },
  { id: "_WfZiiHuBUo", title: "Roberta Sá - A Roda (Sambasá)", tag: "Ao vivo" },
  { id: "LCNlM08OnIs", title: "Falas de Orgulho - Flutua", tag: "Clipe · 2021" },
  { id: "EG_RX0GdoiM", title: "DNA do Crime - Teaser oficial", tag: "Netflix · Data Management Technician (3ª Temporada · Unidade 01)" },
  // { id: "CODIGO", title: "Nome do projeto", tag: "Trailer" },
];

// 2) BASTIDORES (galeria) - arquivos em assets/gallery/
const GALLERY = [
  { src: "assets/gallery/g01.jpg", alt: "DIT em produção virtual (LED volume)" },
  { src: "assets/gallery/g34.jpg", alt: "Eduardo Kozlowski em set" },
  { src: "assets/gallery/g35.jpg", alt: "DIT na monitoração on-set" },
  { src: "assets/gallery/g02.jpg", alt: "Equipamento KOZ DIT" },
  { src: "assets/gallery/g03.jpg", alt: "DIT cart em locação ao anoitecer" },
  { src: "assets/gallery/g04.jpg", alt: "Parede de LED em Virtual Production" },
  { src: "assets/gallery/g05.jpg", alt: "Color e data management em workflow noturno" },
  { src: "assets/gallery/g06.jpg", alt: "Bastidores de filmagem ao entardecer" },
  { src: "assets/gallery/g07.jpg", alt: "Estação de DIT com monitores de referência" },
  { src: "assets/gallery/g36.jpg", alt: "Bastidores em set externo" },
  { src: "assets/gallery/g37.jpg", alt: "Monitoração multi-câmeras" },
  { src: "assets/gallery/g09.jpg", alt: "Equipe de câmera em locação urbana" },
  { src: "assets/gallery/g10.jpg", alt: "Operação de câmera em estúdio" },
  { src: "assets/gallery/g11.jpg", alt: "Monitoração on-set em evento ao vivo" },
  { src: "assets/gallery/g12.jpg", alt: "Acompanhamento de cena em Virtual Production" },
  { src: "assets/gallery/g13.jpg", alt: "Transmissão de vídeo sem fio (Bolt)" },
  { src: "assets/gallery/g14.jpg", alt: "DIT cart ao lado da unidade móvel" },
  { src: "assets/gallery/g18.jpg", alt: "DIT cart em locação externa" },
  { src: "assets/gallery/g21.jpg", alt: "DIT em evento ao vivo" },
  { src: "assets/gallery/g27.jpg", alt: "Rack de DIT em set" },
  { src: "assets/gallery/g28.jpg", alt: "Estação de trabalho on-set" },
  { src: "assets/gallery/g29.jpg", alt: "Equipamento em case de transporte" },
  { src: "assets/gallery/g31.jpg", alt: "Câmera em car mount" },
  { src: "assets/gallery/g33.jpg", alt: "Equipe de câmera em movimento" },
];

// 3) FILMOGRAFIA (IMDb) - mais recente primeiro
const CREDITS = [
  { year: "2027", title: "DNA do Crime (3ª Temporada)", role: "Data Management Technician · Netflix" },
  { year: "2026", title: "Fúria", role: "Data Management Technician · Série Netflix · estreia jul" },
  { year: "2026", title: "Madam Beja", role: "Data Management Technician · Série (40 ep.)" },
  { year: "2026", title: "Os Farofeiros 3", role: "Data Management Technician" },
  { year: "2025", title: "Caramelo", role: "DIT · 2ª unidade" },
  { year: "2025", title: "Vini Jr.", role: "Data Management Technician (extra) · Documentário · Netflix" },
  { year: "2024", title: "GNT Vamos Combinar - Renner", role: "DIT · Data Management Technician · Cloud Upload · Programa GNT/Globoplay" },
  { year: "2024", title: "City of God: The Fight Rages On", role: "Data Management Technician · 2ª unidade" },
  { year: "2024", title: "A Cerca", role: "Data Management Technician" },
  { year: "2024", title: "Ogiva: O Mundo Não é Mais Nosso", role: "DIT" },
  { year: "2024", title: "Kasa Branca", role: "DIT · Melhor Fotografia no Festival do Rio + diversos prêmios" },
  { year: "2024", title: "The Weeknd: São Paulo Livestream", role: "DIT · Livestream YouTube" },
  { year: "2024", title: "Desperate Lies", role: "Data Management Technician · Minissérie" },
  { year: "2024", title: "Os Farofeiros 2", role: "Data Management Technician" },
  { year: "2023", title: "A Vampire in the Family", role: "Data Management Technician" },
  { year: "2023", title: "Amar é para os Fortes", role: "Video Assist Operator · Série" },
  { year: "2023", title: "Eu Sou Maria", role: "Data Management Technician" },
  { year: "2023", title: "Impuros", role: "Video Assist Operator · Série (10 ep.)" },
  { year: "2023", title: "Rich in Love 2", role: "Video Assist Operator" },
  { year: "2023", title: "Queens on the Run", role: "Data Management Technician · Série (7 ep.)" },
  { year: "2023", title: "Vestidas de Amor", role: "Data Management Technician · Série" },
  { year: "2022", title: "Família Paraíso", role: "Data Management Technician · Série" },
  { year: "2021", title: "Falas de Orgulho", role: "Assistente de Câmera · TV Special" },
  { year: "2021", title: "Boa sorte, Bernardo", role: "Direção de Fotografia · Curta" },
  { year: "2020", title: "Ziraldo - Uma Obra que pede Socorro", role: "Assistente de Pós-produção" },
];

// 4) LINKS ÚTEIS
const LINKS = [
  { label: "Instagram pessoal", url: "https://www.instagram.com/edukoz_/" },
  { label: "Instagram Ekoz Tech", url: "https://www.instagram.com/ekoz.tech/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardo-kozlowski-293a231a4" },
  { label: "IMDb", url: "https://www.imdb.com/name/nm12542369/" },
  { label: "BRLISTAS", url: "https://brlistas.com" },
  { label: "Tiê AV", url: "https://tieav.com" },
  { label: "E-mail", url: "mailto:contato@eduardokoz.com" },
];

// 5) MARCAS (marquee de logos) - arquivos SVG em assets/brands/
const BRANDS = [
  "sony", "red", "arri", "blackmagicdesign", "panasonic", "dji", "apple",
  "nvidia", "pomfort", "davinciresolve", "unrealengine", "netflix", "hbomax",
];

/* =========================================================================
   Renderização e interações - não precisa editar daqui pra baixo.
   ========================================================================= */

const $ = (s, r = document) => r.querySelector(s);
const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Menu + rodapé compartilhados (edite só aqui; valem para todas as páginas)
const NAV = [
  { label: "Sobre", hash: "#sobre" },
  { label: "Ekoz Tech", hash: "#ekoz" },
  { label: "Projetos", page: "projetos.html" },
  { label: "Bastidores", page: "bastidores.html" },
  { label: "Filmografia", page: "filmografia.html" },
  { label: "Links", hash: "#links" },
];

const SUN = '<svg class="ico ico--sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg class="ico ico--moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';

function renderChrome() {
  const page = location.pathname.split("/").pop() || "index.html";
  const home = page === "" || page === "index.html";

  const links = NAV.map((it) => {
    let href, active = false;
    if (it.page) { href = it.page; active = page === it.page; }
    else { href = home ? it.hash : "index.html" + it.hash; }
    return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${it.label}</a>`;
  }).join("");

  const nav = $("#nav");
  if (nav) {
    nav.innerHTML = `
      <div class="wrap nav__inner">
        <a class="nav__brand" href="${home ? "#top" : "index.html"}" aria-label="Início">
          <img src="assets/ekoz-symbol.png" alt="" class="nav__mark" />
          <span>Eduardo Kozlowski</span>
        </a>
        <nav class="nav__links">${links}</nav>
        <button class="theme-toggle" id="themeToggle" aria-label="Alternar tema" title="Alternar tema">${SUN}${MOON}</button>
      </div>`;
  }

  const foot = $("#site-footer");
  if (foot) {
    foot.innerHTML = `
      <div class="wrap footer__inner">
        <span>© <span id="year"></span> Eduardo Kozlowski · Ekoz Tech</span>
        <a href="mailto:contato@eduardokoz.com">contato@eduardokoz.com</a>
      </div>`;
  }
}

function renderVideos() {
  const root = $("#videos");
  if (!root) return;
  root.innerHTML = VIDEOS.map((v, i) => `
    <div class="video reveal tilt" style="--d:${i}">
      <div class="video__frame" data-id="${esc(v.id)}">
        <img loading="lazy" src="${ytThumb(v.id)}" alt="${esc(v.title)}" />
        <div class="video__play" role="button" aria-label="Reproduzir ${esc(v.title)}"></div>
      </div>
      <div class="video__meta">
        <p class="video__title">${esc(v.title)}</p>
        <p class="video__tag">${esc(v.tag)}</p>
      </div>
    </div>`).join("");

  root.querySelectorAll(".video__frame").forEach((frame) => {
    frame.querySelector(".video__play").addEventListener("click", () => {
      frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${frame.dataset.id}?autoplay=1"
        title="YouTube" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    });
  });
}

function renderGallery() {
  const root = $("#gallery");
  if (!root) return;
  root.innerHTML = GALLERY.map((g, i) => `
    <button class="gallery__item" type="button" data-i="${i}" aria-label="Ampliar: ${esc(g.alt)}">
      <img loading="lazy" src="${g.src}" alt="${esc(g.alt)}" />
    </button>`).join("");

  const box = $("#lightbox");
  if (!box) return;
  const img = box.querySelector(".lightbox__img");
  const count = box.querySelector(".lightbox__count");
  let cur = 0;

  const show = (i) => {
    cur = (i + GALLERY.length) % GALLERY.length;
    img.src = GALLERY[cur].src;
    img.alt = GALLERY[cur].alt;
    if (count) count.textContent = `${cur + 1} / ${GALLERY.length}`;
  };
  const open = (i) => { show(i); box.hidden = false; document.body.style.overflow = "hidden"; };
  const close = () => { box.hidden = true; img.src = ""; document.body.style.overflow = ""; };

  root.querySelectorAll(".gallery__item").forEach((b) =>
    b.addEventListener("click", () => open(+b.dataset.i)));
  box.querySelector(".lightbox__close")?.addEventListener("click", close);
  box.querySelector(".lightbox__nav--prev")?.addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
  box.querySelector(".lightbox__nav--next")?.addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
  });

  // swipe no celular
  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) show(dx < 0 ? cur + 1 : cur - 1);
    x0 = null;
  }, { passive: true });
}

function renderCredits() {
  const root = $("#credits");
  if (!root) return;
  root.innerHTML = CREDITS.map((c) => `
    <li class="credit">
      <span class="credit__year">${esc(c.year)}</span>
      <span class="credit__title">${esc(c.title)}</span>
      <span class="credit__role">${esc(c.role)}</span>
    </li>`).join("");
}

function renderLinks() {
  const root = $("#links-grid");
  if (!root) return;
  root.innerHTML = LINKS.map((l) => {
    const ext = l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : "";
    return `<a class="link tilt" href="${l.url}" ${ext}>${esc(l.label)} <span class="link__arrow">↗</span></a>`;
  }).join("");
}

function renderMarquee() {
  const root = $("#marquee");
  if (!root) return;
  const items = BRANDS.map((b) =>
    `<span class="marquee__brand${b === "arri" ? " marquee__brand--arri" : ""}" role="img" aria-label="${b}" style="--logo:url(assets/brands/${b}.svg)"></span>`
  ).join("");
  root.innerHTML = items + items; // duplicado para loop contínuo
}

// Tema claro/escuro
function initTheme() {
  const btn = $("#themeToggle");
  const meta = document.querySelector('meta[name="theme-color"]');
  const apply = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    if (meta) meta.content = t === "dark" ? "#0a0c0d" : "#ffffff";
  };
  btn?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

// Revelação no scroll
function initReveal() {
  const els = document.querySelectorAll(".reveal:not(.is-in)");
  const revealAll = () => els.forEach((e) => e.classList.add("is-in"));
  if (!("IntersectionObserver" in window)) { revealAll(); return; }
  try {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    els.forEach((e) => io.observe(e));
  } catch (e) {
    revealAll(); // se o observer falhar, mostra tudo em vez de deixar a página invisível
  }
}

// Barra de progresso + nav scrolled (throttle com rAF)
function initScroll() {
  const bar = $("#progress");
  const nav = $("#nav");
  let ticking = false;
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (bar) bar.style.width = p + "%";
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

// Parallax do brilho do hero seguindo o mouse (profundidade futurista)
function initParallax() {
  const aura = $(".hero__aura");
  if (!aura || reduceMotion()) return;
  let raf = null, cx = 0, cy = 0;
  window.addEventListener("mousemove", (e) => {
    cx = e.clientX / window.innerWidth - 0.5;
    cy = e.clientY / window.innerHeight - 0.5;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      aura.style.transform = `translate3d(${(cx * 28).toFixed(1)}px, ${(cy * 28).toFixed(1)}px, 0)`;
      raf = null;
    });
  }, { passive: true });
}

// Tilt 3D nos cards (.tilt) acompanhando o cursor — só desktop, sem reduced-motion
function initTilt() {
  if (reduceMotion() || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.querySelectorAll(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(720px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // cada passo isolado: um erro não pode travar os demais (nem deixar a página invisível)
  const safe = (fn) => { try { fn(); } catch (e) { console.error(e); } };
  [renderChrome, renderVideos, renderGallery, renderCredits, renderLinks, renderMarquee,
   initTheme, initScroll, initReveal, initParallax, initTilt].forEach(safe);
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
});
