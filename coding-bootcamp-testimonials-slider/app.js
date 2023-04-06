const slides = document.getElementsByClassName("slides");
// const prev = document.getElementsByClassName("prev");
// const next = document.getElementsByClassName("next");
const quote = document.getElementsByClassName("testimonial-quote");
const profile = document.getElementsByClassName("testimonial-profile");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
    return animateSlides();
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
  }
}

// prev.addEventListener("click", () => {
//   plusSlides(-1);
// });

// next.addEventListener("click", () => {
//   plusSlides(1);
// });

//! Enable use of slider with keyboard right and left arrows
document.body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    return plusSlides(-1);
  }

  if (event.key === "ArrowRight") {
    return plusSlides(1);
  }

  return;
});

//! Animate the slides
function animateSlides() {
  document.body.classList.remove("animate");

  void document.body.offsetWidth;

  document.body.classList.add("animate");
}
