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

  // Dropdowns with 1s hide delay only on mouse leave
  const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

  dropdowns.forEach(drop => {
    let timeout;

    drop.addEventListener('mouseenter', () => {
      // Cancel hide timer if user comes back
      clearTimeout(timeout);
      const submenu = drop.querySelector('ul');
      if (submenu) submenu.style.display = 'block';
    });

    drop.addEventListener('mouseleave', () => {
      const submenu = drop.querySelector('ul');
      if (submenu) {
        // Start hide timer
        timeout = setTimeout(() => {
          submenu.style.display = 'none';
        }, 100); // 0.1 second delay
      }
    });
  });
}
