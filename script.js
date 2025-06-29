document.addEventListener("DOMContentLoaded", function () {
  const hamburguer = document.getElementById("hamburguer");
  const navMobile = document.getElementById("navMobile");

  if (hamburguer && navMobile) {
    // Abre/fecha menu mobile ao clicar no hamburguer
    hamburguer.addEventListener("click", () => {
      navMobile.classList.toggle("active");
      hamburguer.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link do menu mobile
    const navLinks = navMobile.querySelectorAll("a.mobile-nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("active");
        hamburguer.classList.remove("active");
        hamburguer.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Rolamento suave para links com .smooth-scroll
  const smoothLinks = document.querySelectorAll('a.smooth-scroll[href^="#"]');
  smoothLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const yOffset = -70; // altura do header fixo
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    });
  });
});
