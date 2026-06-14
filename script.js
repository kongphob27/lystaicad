// ========================================
// Developer Dropdown & Global Scripts
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  const devBtn = document.getElementById('developer-btn');
  const devDropdown = document.getElementById('developer-dropdown');

  if (devBtn && devDropdown) {
    // Toggle dropdown on click
    devBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = devDropdown.classList.contains('show');
      if (isOpen) {
        devDropdown.classList.remove('show');
        devBtn.classList.remove('active');
      } else {
        devDropdown.classList.add('show');
        devBtn.classList.add('active');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!devBtn.contains(e.target) && !devDropdown.contains(e.target)) {
        devDropdown.classList.remove('show');
        devBtn.classList.remove('active');
      }
    });
  }

  // Animate progress bars on project pages
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach((fill) => {
    const target = fill.getAttribute('data-width');
    if (target) {
      setTimeout(() => {
        fill.style.width = target;
      }, 500);
    }
  });
});
