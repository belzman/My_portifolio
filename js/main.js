/**
 * Belayneh Endalamaw Dejene Portfolio Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
  }

  // Dark/Light Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  // Expandable About Section (See More / See Less)
  const readMoreBtn = document.getElementById('read-more-btn');
  const expandableContent = document.getElementById('expandable-content');

  if (readMoreBtn && expandableContent) {
    readMoreBtn.addEventListener('click', () => {
      if (expandableContent.style.display === 'block') {
        expandableContent.style.display = 'none';
        readMoreBtn.textContent = 'See More';
      } else {
        expandableContent.style.display = 'block';
        readMoreBtn.textContent = 'See Less';
      }
    });
  }

  // Typing Animation in Hero
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const phrases = [
      "Data Scientist & AI Researcher",
      "PhD Candidate in Data Science",
      "Clinical Decision Support & Explainable AI Specialist",
      "Co-Investigator, March of Dimes Research Grant",
      "Research Fellow @ Armauer Hansen Research Institute"
    ];
    let pIdx = 0, cIdx = 0, isDeleting = false;
    function typeEffect() {
      const curr = phrases[pIdx];
      if (isDeleting) {
        typedEl.textContent = curr.substring(0, cIdx - 1);
        cIdx--;
      } else {
        typedEl.textContent = curr.substring(0, cIdx + 1);
        cIdx++;
      }

      let speed = isDeleting ? 30 : 60;
      if (!isDeleting && cIdx === curr.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && cIdx === 0) {
        isDeleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        speed = 400;
      }
      setTimeout(typeEffect, speed);
    }
    typeEffect();
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      const mailtoUrl = `mailto:belzman2011@gmail.com,Belaynehendalamaw2008@gmail.com?subject=${encodeURIComponent('[Portfolio Message] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

      if (formMsg) {
        formMsg.style.display = 'block';
        formMsg.style.padding = '12px';
        formMsg.style.borderRadius = '8px';
        formMsg.style.backgroundColor = '#d4edda';
        formMsg.style.color = '#155724';
        formMsg.textContent = 'Opening your email client to send message to Belayneh...';
      }

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    });
  }
});
