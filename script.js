// ------------------------------
// Load header + footer
// ------------------------------
fetch('header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header').innerHTML = data)
  .then(() => initMenu()); // re-initialize menu after header is loaded

fetch('footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer').innerHTML = data);

// ------------------------------
// Initialise menu interactions
// ------------------------------
function initMenu() {
  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // Dropdowns with 1s hide delay
  const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

  dropdowns.forEach(drop => {
    let timeout;

    drop.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      const submenu = drop.querySelector('ul');
      if (submenu) submenu.style.display = 'block';
    });

    drop.addEventListener('mouseleave', () => {
      const submenu = drop.querySelector('ul');
      if (submenu) {
        timeout = setTimeout(() => {
          submenu.style.display = 'none';
        }, 1000); // 1 second delay
      }
    });
  });
}
