class SiteFooter extends HTMLElement {
  connectedCallback() {
    const email = this.getAttribute("data-email") || "liuliu.dna@qq.com";

    this.innerHTML = `
      <footer id="contact" class="big-footer">
        <div class="noise-overlay"></div>

        <div class="footer-marquee-wrapper" aria-hidden="true">
          <div class="footer-marquee-text">
            SAY HELLO · CONTACT · SAY HELLO · CONTACT · SAY HELLO · CONTACT · SAY HELLO · CONTACT ·
          </div>
          <div class="footer-marquee-text">
            SAY HELLO · CONTACT · SAY HELLO · CONTACT · SAY HELLO · CONTACT · SAY HELLO · CONTACT ·
          </div>
        </div>

        <div class="container footer-content">
          <div class="footer-cta-section">
            <h2 class="footer-cta-title">
              <span data-en="Let complex technology," data-zh="让复杂技术，">Let complex technology,</span><br>
              <span data-en="become clear, reliable, sustainable product experiences."
                data-zh="成为清晰、可靠、可持续的产品体验。">become clear, reliable, sustainable product experiences.</span>
            </h2>
            <p class="footer-specialties"
              data-en="AI Products · Complex Platforms · Agent Workflows · Enterprise SaaS"
              data-zh="AI 产品 · 复杂平台 · Agent 工作流 · Enterprise SaaS">
              AI Products · Complex Platforms · Agent Workflows · Enterprise SaaS
            </p>
            <a class="footer-contact-link" id="contact-btn" href="mailto:${email}"
              aria-label="Email Liu Lu" data-en="Contact Me" data-zh="联系我">
              Contact Me
            </a>
            <a href="mailto:${email}" class="footer-email">${email}</a>
          </div>

          <div class="footer-info-panel">
            <div class="footer-bottom">
              <div class="footer-meta">
                <div data-en="Liu Lu · Product / UX Designer" data-zh="Liu Lu · Product / UX Designer">
                  Liu Lu · Product / UX Designer
                </div>
                <div data-en="Based in Shenzhen · GMT+8" data-zh="Based in Shenzhen · GMT+8">
                  Based in Shenzhen · GMT+8
                </div>
                <div class="footer-copyright"
                  data-en="© 2026 Liu Lu. All rights reserved."
                  data-zh="© 2026 Liu Lu. All rights reserved.">
                  © 2026 Liu Lu. All rights reserved.
                </div>
              </div>
              <div class="studio-time" id="studio-time">
                Design Studio · 09:48 AM GMT+8
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;

    this.currentLang = localStorage.getItem("site_lang") || "en";
    this.timeEl = this.querySelector("#studio-time");

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
    this.updateStudioTime = this.updateStudioTime.bind(this);

    this.updateLanguage();
    this.updateStudioTime();
    this.timeTimer = window.setInterval(this.updateStudioTime, 1000);

    document.addEventListener("site-language-change", this.handleLanguageChange);
    window.addEventListener("storage", this.handleStorage);
  }

  disconnectedCallback() {
    document.removeEventListener("site-language-change", this.handleLanguageChange);
    window.removeEventListener("storage", this.handleStorage);
    window.clearInterval(this.timeTimer);
  }

  handleLanguageChange(event) {
    this.currentLang = event.detail?.language || localStorage.getItem("site_lang") || this.currentLang || "en";
    this.updateLanguage();
  }

  handleStorage(event) {
    if (event.key !== "site_lang") return;
    this.currentLang = event.newValue || "en";
    this.updateLanguage();
  }

  updateLanguage() {
    this.querySelectorAll("[data-en]").forEach((element) => {
      const nextText = element.getAttribute(`data-${this.currentLang}`);
      if (nextText !== null) element.textContent = nextText;
    });
  }

  updateStudioTime() {
    if (!this.timeEl) return;
    const timeStr = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Shanghai"
    });
    this.timeEl.textContent = `Design Studio · ${timeStr} GMT+8`;
  }
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
