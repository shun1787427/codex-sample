document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const globalNav = document.querySelector("#global-nav");

  if (navToggle && globalNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      globalNav.classList.toggle("is-open", !isOpen);
    });

    globalNav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      navToggle.setAttribute("aria-expanded", "false");
      globalNav.classList.remove("is-open");
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
});
