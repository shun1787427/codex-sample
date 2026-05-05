document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const backToTop = document.querySelector(".back-to-top");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (loadingScreen) {
    document.body.classList.add("is-loading");
    window.setTimeout(() => {
      loadingScreen.classList.add("is-fading");
      document.body.classList.remove("is-loading");

      window.setTimeout(() => {
        loadingScreen.classList.add("is-hidden");
        document.body.classList.add("is-loaded");
      }, prefersReducedMotion ? 0 : 800);
    }, prefersReducedMotion ? 0 : 3000);
  } else {
    document.body.classList.add("is-loaded");
  }

  const navToggle = document.querySelector(".nav-toggle");
  const globalNav = document.querySelector("#global-nav");

  if (navToggle && globalNav) {
    const setNavOpen = (shouldOpen) => {
      navToggle.setAttribute("aria-expanded", String(shouldOpen));
      globalNav.classList.toggle("is-open", shouldOpen);
      document.body.classList.toggle("is-nav-open", shouldOpen);
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!isOpen);
    });

    globalNav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      setNavOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (navToggle.getAttribute("aria-expanded") === "true") {
        setNavOpen(false);
        navToggle.focus();
      }
    });
  }

  const accordion = document.querySelector("[data-accordion]");

  if (accordion) {
    accordion.addEventListener("click", (event) => {
      const button = event.target instanceof Element
        ? event.target.closest("button[aria-controls]")
        : null;

      if (!button) {
        return;
      }

      const targetId = button.getAttribute("aria-controls");
      const panel = targetId ? document.getElementById(targetId) : null;

      if (!panel) {
        return;
      }

      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  }

  const revealTargets = document.querySelectorAll(`
    .section-heading,
    .section--intro .container,
    .service-card,
    .trust-layout__image,
    .trust-layout__content,
    .flow-list > li,
    .gallery-list > li,
    .voice-card,
    .faq-layout > div,
    .faq-item,
    .reserve-panel
  `);

  if (revealTargets.length > 0 && !prefersReducedMotion) {
    revealTargets.forEach((target) => {
      target.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    });

    revealTargets.forEach((target) => {
      revealObserver.observe(target);
    });
  }

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 80);
    };

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }
});
