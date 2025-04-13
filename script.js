function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function scrollToClass() {
  document.querySelector(".about").scrowIntoView({
    behavior: "smooth",
  });
}
