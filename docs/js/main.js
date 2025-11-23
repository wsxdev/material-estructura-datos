/* ============================================
   MAIN.JS - Funcionalidades Principales
   ============================================ */

// ============ UTILIDADES ============

const DOM = {
  html: document.documentElement,
  body: document.body,
  header: document.querySelector('header'),
  nav: document.querySelector('nav'),
  themeToggle: document.querySelector('.theme-toggle'),
  menuToggle: document.querySelector('.menu-toggle'),
  navList: document.querySelector('nav ul'),
  searchInput: document.querySelector('.search-input'),
};

const CONFIG = {
  themeKey: 'ed-site-theme',
  menuKey: 'ed-site-menu-open',
  prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

// ============ MODO OSCURO/CLARO ============

class ThemeManager {
  constructor() {
    this.isDark = false;
    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem(CONFIG.themeKey);
    const systemPreference = CONFIG.prefersDark ? 'dark' : 'light';
    const theme = savedTheme || systemPreference;
    
    this.setTheme(theme);
    this.attachListeners();
  }

  setTheme(theme) {
    this.isDark = theme === 'dark';
    
    if (this.isDark) {
      DOM.html.classList.add('dark-mode');
      DOM.body.classList.add('dark-mode');
    } else {
      DOM.html.classList.remove('dark-mode');
      DOM.body.classList.remove('dark-mode');
    }
    
    localStorage.setItem(CONFIG.themeKey, theme);
    this.updateThemeButton();
  }

  toggle() {
    const currentTheme = DOM.html.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateThemeButton() {
    // Actualizar botones de tema con iconos SVG
    const allThemeButtons = document.querySelectorAll('[data-action="toggle-theme"]');
    allThemeButtons.forEach(btn => {
      const svgs = btn.querySelectorAll('svg');
      if (svgs.length >= 2) {
        const sunIcon = svgs[0];
        const moonIcon = svgs[1];
        
        if (this.isDark) {
          sunIcon.classList.add('icon-hidden');
          sunIcon.classList.remove('icon-visible');
          moonIcon.classList.add('icon-visible');
          moonIcon.classList.remove('icon-hidden');
        } else {
          sunIcon.classList.add('icon-visible');
          sunIcon.classList.remove('icon-hidden');
          moonIcon.classList.add('icon-hidden');
          moonIcon.classList.remove('icon-visible');
        }
      }
    });
    
    // Actualizar atributos del botón principal
    if (DOM.themeToggle) {
      DOM.themeToggle.setAttribute('aria-label', this.isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
      DOM.themeToggle.setAttribute('title', this.isDark ? 'Modo claro' : 'Modo oscuro');
    }
  }

  attachListeners() {
    // Escuchar clics en todos los botones de tema
    document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    });

    // Detectar cambio de preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(CONFIG.themeKey)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// ============ MENÚ RESPONSIVE ============

class MenuManager {
  constructor() {
    this.init();
  }

  init() {
    this.attachListeners();
  }

  toggle() {
    if (DOM.navList) {
      DOM.navList.classList.toggle('active');
    }
  }

  close() {
    if (DOM.navList) {
      DOM.navList.classList.remove('active');
    }
  }

  attachListeners() {
    if (DOM.menuToggle) {
      DOM.menuToggle.addEventListener('click', () => this.toggle());
    }

    // Cerrar menú al hacer clic en un enlace
    if (DOM.nav) {
      DOM.nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          this.close();
        }
      });
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (DOM.navList && DOM.navList.classList.contains('active')) {
        if (!DOM.nav.contains(e.target) && !DOM.menuToggle.contains(e.target)) {
          this.close();
        }
      }
    });

    // Cerrar menú al cambiar el tamaño de la pantalla
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.close();
      }
    });
  }
}

// ============ NAVEGACIÓN ACTIVA ============

class NavigationHighlight {
  constructor() {
    this.init();
  }

  init() {
    this.updateActiveLink();
    window.addEventListener('hashchange', () => this.updateActiveLink());
  }

  updateActiveLink() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    navLinks.forEach((link) => {
      link.classList.remove('active');
      
      const href = link.getAttribute('href');
      
      // Verificar hash
      if (currentHash && href === currentHash) {
        link.classList.add('active');
      }
      // Verificar ruta
      else if (href && currentPath.includes(href.replace('/', ''))) {
        link.classList.add('active');
      }
      // Página de inicio
      else if (href === '/' || href === 'index.html') {
        if (currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('readme/')) {
          link.classList.add('active');
        }
      }
    });
  }
}

// ============ BÚSQUEDA ============

class SearchManager {
  constructor() {
    this.resultsContainer = document.getElementById('search-results');
    this.searchInput = DOM.searchInput;
    this.searchContainer = document.querySelector('.search-container');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', Utils.debounce((e) => this.search(e.target.value), 300));
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.searchInput.value = '';
          this.clearResults();
        }
      });
      
      // Cerrar resultados al hacer click fuera
      document.addEventListener('click', (e) => {
        if (this.searchContainer && !this.searchContainer.contains(e.target)) {
          this.clearResults();
        }
      });
    }
  }

  search(query) {
    if (!query.trim()) {
      this.clearResults();
      return;
    }

    const results = this.findResults(query.toLowerCase());
    this.displayResults(results, query);
  }

  findResults(query) {
    const results = [];
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const paragraphs = document.querySelectorAll('p, li');

    // Buscar en títulos
    headings.forEach((heading) => {
      const text = heading.textContent.toLowerCase();
      if (text.includes(query)) {
        results.push({
          type: 'heading',
          text: heading.textContent,
          element: heading,
          relevance: 10,
        });
      }
    });

    // Buscar en contenido
    paragraphs.forEach((para) => {
      const text = para.textContent.toLowerCase();
      if (text.includes(query)) {
        const snippet = this.extractSnippet(text, query, 100);
        results.push({
          type: 'content',
          text: snippet,
          element: para,
          relevance: 5,
        });
      }
    });

    return results.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
  }

  extractSnippet(text, query, length) {
    const index = text.indexOf(query);
    const start = Math.max(0, index - length / 2);
    const end = Math.min(text.length, index + length / 2);
    let snippet = text.substring(start, end);

    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';

    return snippet;
  }

  displayResults(results, query) {
    if (!this.resultsContainer) return;
    
    if (results.length === 0) {
      this.resultsContainer.innerHTML = '<div class="search-result-item">No se encontraron resultados para "' + this.escapeHtml(query) + '"</div>';
      this.resultsContainer.style.display = 'block';
      return;
    }

    const resultHTML = results.map(result => {
      const icon = result.type === 'heading' ? '📌' : '📄';
      const highlightedText = this.highlightQuery(result.text, query);
      return `
        <div class="search-result-item" data-relevance="${result.relevance}">
          <div class="result-icon">${icon}</div>
          <div class="result-content">
            <div class="result-text">${highlightedText}</div>
            <div class="result-type">${result.type === 'heading' ? 'Título' : 'Contenido'}</div>
          </div>
        </div>
      `;
    }).join('');

    this.resultsContainer.innerHTML = resultHTML;
    this.resultsContainer.style.display = 'block';

    // Agregar listeners a los resultados
    this.resultsContainer.querySelectorAll('.search-result-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        const result = results[index];
        if (result && result.element) {
          result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          result.element.classList.add('highlight');
          setTimeout(() => result.element.classList.remove('highlight'), 2000);
          this.clearResults();
          this.searchInput.value = '';
        }
      });
    });
  }

  highlightQuery(text, query) {
    const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  clearResults() {
    if (this.resultsContainer) {
      this.resultsContainer.style.display = 'none';
      this.resultsContainer.innerHTML = '';
    }
  }
}

// ============ SMOOTH SCROLL ============

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

// ============ ANIMACIONES AL SCROLL ============

class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .unit-card, .topic').forEach((el) => {
      observer.observe(el);
    });
  }
}

// ============ ACCESIBILIDAD ============

class A11y {
  constructor() {
    this.init();
  }

  init() {
    this.ensureAltText();
    this.improveKeyboardNavigation();
  }

  ensureAltText() {
    document.querySelectorAll('img:not([alt])').forEach((img) => {
      img.setAttribute('alt', 'Imagen del contenido');
    });
  }

  improveKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Alt + D para ir al contenido principal
      if (e.altKey && e.key === 'd') {
        const main = document.querySelector('main');
        if (main) {
          main.setAttribute('tabindex', '-1');
          main.focus();
        }
      }
    });
  }
}

// ============ UTILIDADES ============

class Utils {
  static throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        return func(...args);
      }
    };
  }

  static debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }

  static addClass(element, className) {
    if (element) element.classList.add(className);
  }

  static removeClass(element, className) {
    if (element) element.classList.remove(className);
  }

  static toggleClass(element, className) {
    if (element) element.classList.toggle(className);
  }

  static hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
  }
}

// ============ INICIALIZACIÓN ============

document.addEventListener('DOMContentLoaded', () => {
  const themeManager = new ThemeManager();
  const menuManager = new MenuManager();
  const navigationHighlight = new NavigationHighlight();
  const searchManager = new SearchManager();
  const smoothScroll = new SmoothScroll();
  const scrollAnimations = new ScrollAnimations();
  const a11y = new A11y();

  console.log('✓ Sitio web de Estructura de Datos cargado correctamente');
});

// Manejar errores globales
window.addEventListener('error', (event) => {
  console.error('Error:', event.error);
});

// Limpiar recursos al descargar
window.addEventListener('beforeunload', () => {
  // Guardar estado si es necesario
});
