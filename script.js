// === PRELOADER ===
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// === GLOBAL ELEMENTS ===
const nav = document.getElementById("main-nav");
const hero = document.getElementById("hero");
const zoomSection = document.getElementById("scroll-zoom");
const zoomBg = zoomSection.querySelector(".zoom-bg");
const fogText = zoomSection.querySelector(".foggy-text");
const aboutSection = document.getElementById("about");
const aboutGradient = aboutSection.querySelector(".gradient-bg");
const aboutTitle = aboutSection.querySelector(".about-title");
const aboutText = aboutSection.querySelector(".about-description");

// === SCROLL EVENTS ===
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollBottom = scrollY + window.innerHeight;

  // 🔽 Show nav after hero
  if (scrollY > hero.offsetHeight / 2) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }

  // ☁ Fade nav on scroll-zoom
  if (scrollY > zoomSection.offsetTop - 100) {
    nav.classList.add("fade-out");
  } else {
    nav.classList.remove("fade-out");
  }

  // 🔍 Zoom + Blur Background
  const zoomTop = zoomSection.offsetTop;
  if (scrollBottom > zoomTop + 100) {
    let scale = 1 + ((scrollBottom - zoomTop) / 2000);
    let blur = Math.min((scrollBottom - zoomTop) / 100, 10);
    zoomBg.style.transform = `scale(${scale})`;
    zoomBg.style.filter = `blur(${blur}px)`;
  } else {
    zoomBg.style.transform = `scale(1)`;
    zoomBg.style.filter = `blur(0px)`;
  }

  // 🌫 Reveal foggy text
  if (scrollBottom > zoomTop + 200) {
    fogText.classList.add("reveal");
  } else {
    fogText.classList.remove("reveal");
  }

  // 🌈 About gradient
  if (scrollBottom > aboutSection.offsetTop + 100) {
    aboutGradient.style.opacity = 1;
  } else {
    aboutGradient.style.opacity = 0;
  }

  // ✍ Reveal about title
  if (scrollBottom > aboutSection.offsetTop + 200) {
    aboutTitle.classList.add("reveal");
  } else {
    aboutTitle.classList.remove("reveal");
  }

  // ✍ Reveal about description
  if (scrollBottom > aboutSection.offsetTop + 300) {
    aboutText.classList.add("reveal");
  } else {
    aboutText.classList.remove("reveal");
  }
});
