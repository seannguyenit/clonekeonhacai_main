document.addEventListener("DOMContentLoaded", function() {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      click: function () {
        this.slideNext();
      }
    }
  });
});

