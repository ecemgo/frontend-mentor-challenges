var slider = tns({
  container: ".img-slider",
  items: 2,
  // gutter: 30,
  startIndex: 2,
  center: true,
  loop: true,
  swipeAngle: false,
  speed: 600,
  nav: false,
  controlsContainer: "#custom-control",
  controlsPosition: "bottom",
  mouseDrag: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      // nav: false,
    },
    768: {
      items: 2,
      // nav: false,
    },
    1440: {
      items: 3,
      // nav: false,
    },
  },
});
