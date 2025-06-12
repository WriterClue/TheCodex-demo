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
