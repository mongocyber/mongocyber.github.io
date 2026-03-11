(() => {
  document.documentElement.classList.add("js");
  const langBtn = document.getElementById("lang-btn");
  const navPill = document.querySelector(".nav-pill");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  let currentLang = localStorage.getItem("site_lang") || "en";

  function updateLanguage() {
    document.querySelectorAll("[data-en]").forEach((element) => {
      const nextText = element.getAttribute(`data-${currentLang}`);
      if (nextText !== null) element.textContent = nextText;
    });

    if (langBtn) {
      langBtn.textContent = currentLang === "en" ? "EN / 中" : "中 / EN";
    }

    const nextTitle = document.body.getAttribute(`data-title-${currentLang}`);
    const nextDescription = document.body.getAttribute(`data-description-${currentLang}`);

    if (nextTitle) document.title = nextTitle;
    if (descriptionMeta && nextDescription) descriptionMeta.setAttribute("content", nextDescription);

    document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";
    localStorage.setItem("site_lang", currentLang);
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "zh" : "en";
      updateLanguage();
    });
  }

  function syncNav() {
    if (!navPill) return;
    navPill.classList.toggle("scrolled", window.scrollY > 10);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".stagger-item").forEach((item) => observer.observe(item));

  updateLanguage();
  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });
})();
