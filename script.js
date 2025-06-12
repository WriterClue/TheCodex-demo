window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// ===== SCROLL ZOOM + FOG TEXT ANIMATION =====
window.addEventListener("scroll", () => {
  const zoomSection = document.getElementById("scroll-zoom");
  const zoomBg = zoomSection.querySelector(".zoom-bg");
  const fogText = zoomSection.querySelector(".foggy-text");

  const sectionTop = zoomSection.offsetTop;
  const scrollPos = window.scrollY + window.innerHeight;

  // Zoom effect as we scroll into view
  if (scrollPos > sectionTop + 100) {
    let scaleAmount = 1 + ((scrollPos - sectionTop) / 2000);
    zoomBg.style.transform = `scale(${scaleAmount})`;
  }

  // Fade in foggy text
  if (scrollPos > sectionTop + 200) {
    fogText.classList.add("reveal");
  }
});
// ===== SCROLL NAV CONTROL + ZOOM + BLUR EFFECT =====
const nav = document.getElementById("main-nav");
const hero = document.getElementById("hero");
const zoomSection = document.getElementById("scroll-zoom");
const zoomBg = zoomSection.querySelector(".zoom-bg");
const fogText = zoomSection.querySelector(".foggy-text");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight;
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const zoomTop = zoomSection.offsetTop;

  // === NAV LOGIC ===
  if (window.scrollY > hero.offsetHeight / 2) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }

  if (window.scrollY > zoomTop - 100) {
    nav.classList.add("fade-out");
  } else {
    nav.classList.remove("fade-out");
  }

  // === ZOOM + BLUR LOGIC ===
  if (scrollPos > zoomTop + 100) {
    let scaleAmount = 1 + ((scrollPos - zoomTop) / 2000);
    let blurAmount = Math.min((scrollPos - zoomTop) / 100, 10); // cap blur at 10px
    zoomBg.style.transform = `scale(${scaleAmount})`;
    zoomBg.style.filter = `blur(${blurAmount}px)`;
  }

  // === REVEAL TEXT ===
  if (scrollPos > zoomTop + 200) {
    fogText.classList.add("reveal");
  }
});

// ===== ABOUT SECTION SCROLL LOGIC =====
const aboutSection = document.getElementById("about");
const aboutGradient = aboutSection.querySelector(".gradient-bg");
const aboutTitle = aboutSection.querySelector(".about-title");
const aboutText = aboutSection.querySelector(".about-description");

window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.offsetTop;
  const scrollY = window.scrollY + window.innerHeight;

  // Show background gradient
  if (scrollY > aboutTop + 100) {
    aboutGradient.style.opacity = 1;
  }

  // Reveal the "About" title
  if (scrollY > aboutTop + 200 && !aboutTitle.classList.contains("reveal")) {
    aboutTitle.classList.add("reveal");
  }

  // Reveal paragraph text
  if (scrollY > aboutTop + 300 && !aboutText.classList.contains("reveal")) {
    aboutText.classList.add("reveal");
  }
});
