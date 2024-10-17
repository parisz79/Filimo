const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPreview: 2,
    },
    640: {
      slidesPreview: 3,
    },
    768: {
      slidesPreview: 3,
      loop: false,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// user idea swiper

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2.4,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPreview: 1,
    },
    640: {
      slidesPreview: 2,
    },
    768: {
      slidesPreview: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next  ",
  },
});
