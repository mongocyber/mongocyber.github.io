class SiteNav extends HTMLElement {
  connectedCallback() {
    const root = this.normalizedRoot;
    const homeHref = this.getAttribute("data-home") || `${root}index.html`;
    const logoSrc = this.getAttribute("data-logo") || `${root}images/logo.png`;

    this.innerHTML = `
      <div class="nav-pill-wrapper">
        <nav class="nav-pill" aria-label="Primary navigation">
          <a href="${homeHref}" class="nav-logo" aria-label="Portfolio homepage">
            <img src="${logoSrc}" alt="LL Logo" />
          </a>
          <div class="nav-links">
            <a href="${homeHref}#capabilities" class="nav-item" data-en="Capabilities" data-zh="能力">Capabilities</a>
            <a href="${homeHref}#philosophy" class="nav-item" data-en="Philosophy" data-zh="理念">Philosophy</a>
            <a href="${homeHref}#projects" class="nav-item" data-en="Work" data-zh="作品">Work</a>
            <a href="${homeHref}#stats" class="nav-item" data-en="Clients" data-zh="评价">Clients</a>
            <a href="${homeHref}#contact" class="nav-item" data-en="Contact" data-zh="联系">Contact</a>
          </div>
          <div class="nav-actions">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" type="button">
              <svg class="t-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg>
              <span class="t-spacer"></span>
              <svg class="t-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <span class="theme-thumb"></span>
            </button>
            <button class="lang-switch" id="lang-btn" type="button">EN / 中</button>
          </div>
        </nav>
      </div>
    `;

    this.nav = this.querySelector(".nav-pill");
    this.langBtn = this.querySelector("#lang-btn");
    this.themeToggle = this.querySelector("#theme-toggle");
    this.systemDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    this.currentLang = localStorage.getItem("site_lang") || "en";
    const themeResetVersion = "light-default-20260508";
    if (localStorage.getItem("site_theme_reset") !== themeResetVersion) {
      localStorage.setItem("site_theme", "light");
      localStorage.setItem("site_theme_reset", themeResetVersion);
    }
    this.currentTheme = localStorage.getItem("site_theme") || "light";

    this.handleScroll = this.handleScroll.bind(this);
    this.handleLanguageToggle = this.handleLanguageToggle.bind(this);
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
    this.handleSystemThemeChange = this.handleSystemThemeChange.bind(this);

    this.updateLanguage();
    this.applyTheme(this.currentTheme);
    this.handleScroll();

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.langBtn.addEventListener("click", this.handleLanguageToggle);
    this.themeToggle.addEventListener("click", this.handleThemeToggle);
    this.systemDarkScheme.addEventListener("change", this.handleSystemThemeChange);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    this.langBtn?.removeEventListener("click", this.handleLanguageToggle);
    this.themeToggle?.removeEventListener("click", this.handleThemeToggle);
    this.systemDarkScheme?.removeEventListener("change", this.handleSystemThemeChange);
  }

  get normalizedRoot() {
    const root = this.getAttribute("data-root") || "./";
    return root.endsWith("/") ? root : `${root}/`;
  }

  handleScroll() {
    this.nav?.classList.toggle("scrolled", window.scrollY > 50);
  }

  handleLanguageToggle() {
    this.currentLang = this.currentLang === "en" ? "zh" : "en";
    this.updateLanguage();
  }

  handleThemeToggle() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    this.currentTheme = isDark ? "light" : "dark";
    this.applyTheme(this.currentTheme);
  }

  handleSystemThemeChange() {
    if (this.currentTheme === "auto") this.applyTheme("auto");
  }

  updateLanguage() {
    this.querySelectorAll("[data-en]").forEach((el) => {
      const text = el.getAttribute(`data-${this.currentLang}`);
      if (text !== null) el.textContent = text;
    });

    this.langBtn.textContent = this.currentLang === "en" ? "EN / 中" : "中 / EN";
    localStorage.setItem("site_lang", this.currentLang);
    this.dispatchEvent(new CustomEvent("site-language-change", {
      bubbles: true,
      detail: { language: this.currentLang }
    }));
  }

  applyTheme(themeMode) {
    const isDark = themeMode === "dark" || (themeMode === "auto" && this.systemDarkScheme.matches);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    this.themeToggle.classList.toggle("is-dark", isDark);
    localStorage.setItem("site_theme", themeMode);
  }
}

if (!customElements.get("site-nav")) {
  customElements.define("site-nav", SiteNav);
}
