export default function displayList() {
  document.querySelectorAll('.section').forEach((section) => {
    if (!(section.id === 'book-list')) section.style.display = 'none';
  });
  const navBar = document.querySelector('.navBar');
  navBar.addEventListener('click', (e) => {
    if (e.target.classList.contains('navLink')) {
      const anchorHref = e.target.href.split('#')[1];
      document.querySelectorAll('.section').forEach((section) => {
        if (section.id === anchorHref) section.style.display = 'flex';
        else section.style.display = 'none';
      });
    }
  });
}