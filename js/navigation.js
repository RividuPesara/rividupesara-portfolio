const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

export function initNavigation() {
  navToggle?.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });

  //smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      //Skip if its inside project detail
      if (this.closest(".project-detail")) return;

      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
