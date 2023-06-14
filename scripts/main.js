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

// Projects Filter

let projectsList = document.querySelectorAll(".projects-list");
let projectCard = document.querySelectorAll(".project-card");

for (let i = 0; i < projectsList.length; i++) {
  projectsList[i].addEventListener("click", function () {
    for (let j = 0; j < projectsList.length; j++) {
      projectsList[j].classList.remove("active");
    }

    this.classList.add("active");

    let projectsFilter = this.getAttribute("data-filter");

    for (let k = 0; k < projectCard.length; k++) {
      projectCard[k].classList.add("hide");
      projectCard[k].classList.remove("active");
      if (
        projectCard[k].getAttribute("data-item") == projectsFilter ||
        projectsFilter == "all"
      ) {
        projectCard[k].classList.add("active");
        projectCard[k].classList.remove("hide");
      }
    }
  });
}
