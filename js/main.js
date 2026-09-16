/**
 * Belayneh Endalamaw Dejene Portfolio Scripts
 * Tab-Based Single-Page Navigation Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.nav-tab-link, [data-switch-tab]');
  const tabSections = document.querySelectorAll('.tab-content');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');

  // Function to switch active tab
  function switchTab(targetTabId) {
    if (!targetTabId) return;
    targetTabId = targetTabId.replace('#', '');

    const targetSection = document.getElementById(targetTabId);
    if (!targetSection) return;

    // 1. Hide all tab contents
    tabSections.forEach(sec => {
      sec.classList.remove('active');
    });

    // 2. Show only target tab content
    targetSection.classList.add('active');

    // 3. Update active state on nav links
    document.querySelectorAll('.nav-tab-link').forEach(link => {
      const linkTab = link.getAttribute('data-tab') || link.getAttribute('href').replace('#', '');
      if (linkTab === targetTabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 4. Update browser URL hash without reload
    history.replaceState(null, null, '#' + targetTabId);

    // 5. Scroll smoothly to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6. Close mobile menu if open
    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
      navLinksContainer.classList.remove('active');
    }
  }

  // Click listeners for all tab triggers
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-tab') || link.getAttribute('data-switch-tab') || link.getAttribute('href');
      switchTab(targetId);
    });
  });

  // Handle URL hash on initial page load
  const initialHash = window.location.hash ? window.location.hash.replace('#', '') : 'home';
  if (document.getElementById(initialHash)) {
    switchTab(initialHash);
  } else {
    switchTab('home');
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash ? window.location.hash.replace('#', '') : 'home';
    if (document.getElementById(hash)) {
      switchTab(hash);
    }
  });

  // Mobile Hamburger Toggle
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
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

  // Typing Animation in Hero
  const phrases = [
    "Data Scientist & AI Researcher",
    "PhD Candidate in Data Science",
    "Clinical Decision Support & Explainable AI Specialist",
    "Co-Investigator, March of Dimes Research Grant",
    "Research Fellow @ Armauer Hansen Research Institute"
  ];

  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
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
