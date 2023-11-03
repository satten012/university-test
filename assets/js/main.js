var swiper = new Swiper(".mySwiper", {
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
/*     mousewheel: true,
    keyboard: true, */
  });

  var swiper = new Swiper(".mySwiper-2", {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });