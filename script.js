document.addEventListener("DOMContentLoaded", function () {
  // Menu Hambúrguer
  const hamburguer = document.getElementById("hamburguer");
  const navMobile = document.getElementById("navMobile");

  hamburguer.addEventListener("click", function () {
    navMobile.classList.toggle("active");
    hamburguer.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll(".nav-mobile a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMobile.classList.remove("active");
      hamburguer.classList.remove("active");
    });
  });

  // Scroll suave
  document.querySelectorAll("a.smooth-scroll").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Botão fixo "Início"
  const buttonFixed = document.querySelector("#buttonFixed a");
  if (buttonFixed) {
    buttonFixed.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
