// Ano atual
document.getElementById('year').textContent = new Date().getFullYear();

// Header com sombra ao rolar
const header = document.querySelector('.site-header');
const setScrolled = () => header?.setAttribute('data-scrolled', window.scrollY > 4);
setScrolled();
window.addEventListener('scroll', setScrolled, { passive: true });

// Menu mobile acessível
const menu = document.getElementById('menu');
const toggleBtn = document.querySelector('.mobile-toggle');
if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Links fixos das avaliações (mantidos)
const REVIEW_LIST_URL = 'https://www.google.com/search?q=lux+eletrica+e+ilumina%C3%A7%C3%A3o&sca_esv=490573eed39ba66d&authuser=0&sxsrf=AE3TifOfpAD4H4KQml5i5YbsKzkyXfwwWA%3A1761839703742&source=hp&ei=V4oDaYnRJYH31sQPq5vcsAY&iflsig=AOw8s4IAAAAAaQOYZwTf60n0KaOJdUVunnTX2UEZfHka&gs_ssp=eJzj4tVP1zc0LCwwrjLKKEkzYLRSNqiwTE00NjROsUxKM7Q0MLYyqEhOtTQ1TDY0TTVOTkoysDDyks4prVBIzUktKcpMTlRIVcjMKc3NzEs8vPzw4nwA0rIapA&oq=lux&gs_lp=Egdnd3Mtd2l6IgNsdXgqAggAMhMQLhiABBjHARgnGIoFGI4FGK8BMgQQIxgnMgoQIxiABBgnGIoFMgoQABiABBhDGIoFMhAQLhiABBhDGMcBGIoFGK8BMggQLhiABBixAzIQEAAYgAQYsQMYgwEYFBiHAjIIEAAYgAQYsQMyCBAAGIAEGLEDMg0QLhiABBixAxgUGIcCSI0QUABYmQZwAHgAkAEAmAGpAaAB7QOqAQMwLjO4AQHIAQD4AQGYAgOgAosEwgILEC4YgAQYsQMYgwHCAhAQIxjwBRiABBgnGMkCGIoFmAMAkgcDMC4zoAfPNLIHAzAuM7gHiwTCBwUyLTIuMcgHGA&sclient=gws-wiz#lrd=0x9ea313d9bf1903:0xce951c15e3cbb082,1,,,,';
const WRITE_REVIEW_URL = 'https://www.google.com/search?q=lux+eletrica+e+ilumina%C3%A7%C3%A3o&sca_esv=490573eed39ba66d&authuser=0&sxsrf=AE3TifOfpAD4H4KQml5i5YbsKzkyXfwwWA%3A1761839703742&source=hp&ei=V4oDaYnRJYH31sQPq5vcsAY&iflsig=AOw8s4IAAAAAaQOYZwTf60n0KaOJdUVunnTX2UEZfHka&gs_ssp=eJzj4tVP1zc0LCwwrjLKKEkzYLRSNqiwTE00NjROsUxKM7Q0MLYyqEhOtTQ1TDY0TTVOTkoysDDyks4prVBIzUktKcpMTlRIVcjMKc3NzEs8vPzw4nwA0rIapA&oq=lux&gs_lp=Egdnd3Mtd2l6IgNsdXgqAggAMhMQLhiABBjHARgnGIoFGI4FGK8BMgQQIxgnMgoQIxiABBgnGIoFMgoQABiABBhDGIoFMhAQLhiABBhDGMcBGIoFGK8BMggQLhiABBixAzIQEAAYgAQYsQMYgwEYFBiHAjIIEAAYgAQYsQMyCBAAGIAEGLEDMg0QLhiABBixAxgUGIcCSI0QUABYmQZwAHgAkAEAmAGpAaAB7QOqAQMwLjO4AQHIAQD4AQGYAgOgAosEwgILEC4YgAQYsQMYgwHCAhAQIxjwBRiABBgnGMkCGIoFmAMAkgcDMC4zoAfPNLIHAzAuM7gHiwTCBwUyLTIuMcgHGA&sclient=gws-wiz#lrd=0x9ea313d9bf1903:0xce951c15e3cbb082,3,,,,';

document.addEventListener('DOMContentLoaded', () => {
  const abrir = document.getElementById('btnAbrirAvaliacoes');
  const escrever = document.getElementById('btnEscreverAvaliacao');
  if (abrir) abrir.href = REVIEW_LIST_URL;
  if (escrever) escrever.href = WRITE_REVIEW_URL;
  const nojsAll = document.getElementById('nojsAllReviews');
  if (nojsAll) nojsAll.href = REVIEW_LIST_URL;
});



