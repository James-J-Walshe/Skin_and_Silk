// ------------------------------
// Load header + footer
// ------------------------------
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    initMenu(); // re-initialize menu after header loads
  });

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

  // Dropdowns
  const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

  dropdowns.forEach(drop => {
    let timeout;

    drop.addEventListener('mouseenter', () => {
      clearTimeout(timeout);

      // Show this submenu
      const submenu = drop.querySelector('ul');
      if (submenu) submenu.style.display = 'block';

      // 🔹 When hovering a level 2 menu, hide all its deeper level 3s
      if (drop.classList.contains('dropdown-submenu')) {
        const allSubmenus = drop.querySelectorAll('.submenu-content ul');
        allSubmenus.forEach(sm => sm.style.display = 'none');
      }
    });

    drop.addEventListener('mouseleave', () => {
      const submenu = drop.querySelector('ul');
      if (!submenu) return;

      if (drop.classList.contains('dropdown-submenu')) {
        // 🔹 Level 2: apply 1s delay
        timeout = setTimeout(() => {
          submenu.style.display = 'none';
        }, 100);
      } else {
        // 🔹 Level 1 and deeper than level 2: hide immediately
        submenu.style.display = 'none';
      }
    });
  });
}
