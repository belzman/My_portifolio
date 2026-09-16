/**
 * Main Controller: Theme Switching, Navigation, Stat Counters, Active Scrollspy
 * Belayneh Endalamaw Dejene
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark/Light Theme Switching
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Navbar scroll styling
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Typing Animation for Hero Subtitle
  const phrases = [
    "Data Scientist & AI Researcher",
    "PhD Candidate in Data Science",
    "Clinical Decision Support & Explainable AI (XAI)",
    "Co-Investigator, March of Dimes Grant",
    "Research Fellow @ Armauer Hansen Research Institute"
  ];

  const typingEl = document.getElementById('hero-typed-text');
  if (typingEl) {
    let pIdx = 0;
    let cIdx = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentPhrase = phrases[pIdx];
      if (isDeleting) {
        typingEl.textContent = currentPhrase.substring(0, cIdx - 1);
        cIdx--;
      } else {
        typingEl.textContent = currentPhrase.substring(0, cIdx + 1);
        cIdx++;
      }

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && cIdx === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && cIdx === 0) {
        isDeleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(typeLoop, speed);
    }
    typeLoop();
  }

  // 5. Stat Counter Animation
  const statCounters = document.querySelectorAll('.stat-counter');
  let animated = false;

  function runCounters() {
    statCounters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = count + suffix;
        }
      }, 35);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        runCounters();
        animated = true;
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.getElementById('stats-banner');
  if (statsSection) observer.observe(statsSection);

  // 6. Active Nav Link Scrollspy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });
});\n