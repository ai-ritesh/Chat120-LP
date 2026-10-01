(() => {
  "use strict";

  const GITHUB_URL = "https://github.com/ai-ritesh/ChatWave";
  const APP_URL = "https://chat120-sable.vercel.app/";

  // Fixes the top message icon and every other Lucide icon on the page.
  const initIcons = () => {
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIcons, { once: true });
  } else {
    initIcons();
  }

  document.querySelectorAll("[data-open-repo]").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-launch]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.assign(APP_URL);
    });
  });
})();
