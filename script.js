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
  const hamburger = document.getElementById('hamburger');  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

 
