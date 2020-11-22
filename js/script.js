AOS.init();

var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      400: {
        slidesPerView: 1.4,
        spaceBetween: 30,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1100: {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
    }
});

var scroll = new SmoothScroll('a[href*="#"]',{
  header: 'header',
});

var menuItems = document.querySelectorAll('.menu-item');
var mobileOverlay = document.querySelector('.mobile');

menuItems.forEach(link => {
  link.addEventListener('click', (event) => {
    mobileOverlay.classList.remove('active');
  });
});


var menuOpen = document.querySelector('.menu-trigger-open');
var menuClose = document.querySelector('.menu-trigger-close');

function addOverlay() {
  mobileOverlay.classList.add('active');
}

function removeOverlay() {
  mobileOverlay.classList.remove('active');
}

menuOpen.addEventListener('click', addOverlay);
menuClose.addEventListener('click', removeOverlay);