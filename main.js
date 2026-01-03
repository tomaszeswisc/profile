document.addEventListener("DOMContentLoaded", () => {
  // ===== YEAR (footer) =====
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Scroll Navigation Buttons =====
  const scrollUpBtn = document.getElementById("scrollUp");
  const scrollDownBtn = document.getElementById("scrollDown");

  // Se os botões não existirem na página, não quebra o site
  if (!scrollUpBtn || !scrollDownBtn) return;

  function updateScrollButtons() {
    const currentScroll = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    scrollUpBtn.classList.toggle("show", currentScroll > 200);
    scrollDownBtn.classList.toggle("show", currentScroll < maxScroll - 200);
  }

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollDownBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateScrollButtons);
  updateScrollButtons();
});
