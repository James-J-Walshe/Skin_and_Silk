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

      // 🔹 FIX: only hide level-3 menus inside THIS dropdown-submenu
      if (drop.classList.contains('dropdown-submenu')) {
        const nestedLevel3s = drop.querySelectorAll('.submenu-content ul');
        nestedLevel3s.forEach(sm => sm.style.display = 'none');
      }
    });

    drop.addEventListener('mouseleave', () => {
      const submenu = drop.querySelector('ul');
      if (!submenu) return;

      if (drop.classList.contains('dropdown-submenu')) {
        // 🔹 Level 2: apply 1s delay
        timeout = setTimeout(() => {
          submenu.style.display = 'none';
        }, 1000);
      } else {
        // 🔹 Level 1 & Level 3: hide immediately
        submenu.style.display = 'none';
      }
    });
  });
}
