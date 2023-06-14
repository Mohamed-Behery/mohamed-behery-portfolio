// Dark Mode

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

if (darkMode === "dark") enableDarkMode();

themeSwitcher.addEventListener("click", function () {
  darkMode = localStorage.getItem("theme");
  if (darkMode === "dark") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// window
// .matchMedia("(prefers-color-scheme: dark)")
// .addListener(e => (e.matches ? enableDarkMode() : disableDarkMode()))