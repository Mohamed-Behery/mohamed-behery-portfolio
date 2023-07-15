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

// Menu Toggle (Mobile Header)

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

// Blog Posts

const wrapper = document.querySelector(".blog"),
  carousel = document.querySelector(".carousel"),
  arrows = document.querySelectorAll(".blog i"),
  firstCardWidth = carousel.querySelector(".card").offsetWidth,
  carouselCards = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft,
  timeOutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// { Auto Play }

const autoPlay = () => {
  // returns if window is smaller than 800
  if (window.innerWidth < 800) return;
  // auto play after 1s
  timeOutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1000);
};

autoPlay();

// { Infinite Scrolling Effect }

const infiniteScroll = () => {
  // if the scroll is at the end, scroll to the beginning
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.classList.add("no-transition");
    carousel.scrollWidth - (2 * carousel.scrollWidth - carousel.offsetWidth);
    carousel.scrollLeft = carousel.classList.remove("no-transition");
  }
  // if the scroll is at the beginning, scroll to the end
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.scrollLeft = carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.scrollLeft = carousel.classList.remove("no-transition");
  }

  // remove auto play and start it agian if mouse is not hovering over carousel
  clearTimeout(timeOutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

// insert cards by reversing their order to appear like it is infinite

// insert copies of the last few cards to beginning of carousel
// carouselCards
//   .slice(-cardPerView)
//   .reverse()
//   .forEach((card) => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // insert copies of the first few cards to end of carousel
// carouselCards.slice(0, cardPerView).forEach((card) => {
//   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// { Next & Prev Buttons }

arrows.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

// { Sliding On Mouse Move }

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");

  // records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return it here
  // updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseup", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeOutId));
wrapper.addEventListener("mouseleave", autoPlay);
