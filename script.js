// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const hamburgerContent = document.querySelector('.hamburger-content');

function setMenu(isOpen) {
  hamburgerContent.classList.toggle('is-open', isOpen);
  hamburger.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
}

hamburger.addEventListener('click', () => {
  const isOpen = !hamburgerContent.classList.contains('is-open');
  setMenu(isOpen);
});

hamburgerContent.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});