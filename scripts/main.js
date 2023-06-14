// Dark Theme

const themeSwitcher = document.getElementById("theme-switcher");
let darkMode = localStorage.getItem("theme");

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
  themeSwitcher.innerHTML = "☀️";
}
function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("theme", "light");
  themeSwitcher.innerHTML = "🌒";
}

themeSwitcher.addEventListener("click", function () {
  darkMode = localStorage.getItem("theme");
  if (darkMode === "dark") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

if (darkMode === "dark") enableDarkMode();

// Menu Toggle (Responsive Header)

const menuToggle = document.querySelector(".menutoggle");
const navMenu = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (menuToggle.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
