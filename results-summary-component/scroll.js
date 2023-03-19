// common reveal options to create reveal animations
ScrollReveal({ reset: true, distance: "8rem", duration: 2500, delay: 400 });

// target elements, and specify options to create reveal animations
ScrollReveal().reveal(".section-title, .result-info", {
  delay: 200,
  origin: "left",
});
ScrollReveal().reveal(".button", {
  delay: 200,
  origin: "right",
});
ScrollReveal().reveal(".result-score, .summary-item", {
  delay: 800,
  origin: "top",
  interval: 200,
});
