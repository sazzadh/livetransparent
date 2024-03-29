import { CountUp } from './countup.min.js';


// Side Navigation JS Code //
let menuButton = document.getElementById('menuButton');
let cancelButton = document.querySelector('.cancel-button');
let navBar = document.getElementById('navbar');
let body = document.querySelector('body');


menuButton.addEventListener('click', function() {
  menuButton.style.opacity = '0';
  menuButton.style.pointerEvents = 'none';
  navBar.classList.add('active');
  body.style.overflow = 'hidden';
  console.log('mobile menu clicked');
});

cancelButton.onclick = function () {
  menuButton.style.opacity = '1';
  menuButton.style.pointerEvents = 'auto';
  navBar.classList.remove('active');
  body.style.overflow = 'auto';
};

// Sticky Navigation Menu JS Code //
// let val;
//     let nav = document.querySelector("nav");
//     window.onscroll = function() {
//         if (document.documentElement.scrollTop > 20) {
//             nav.classList.add("sticky");
//         } else {
//             nav.classList.remove("sticky");
//         }
//     }

// Navigation Close When Links Clicked JS Code //
let navLinks = document.querySelectorAll('.menu li a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    menuButton.style.opacity = '1';
    menuButton.style.pointerEvents = 'auto';
    navBar.classList.remove('active');
    body.style.overflow = 'auto';
  });
}

// Swiper JS Code //
// slider was broken so just quick dirty fix
// to delay the init of the slider
setTimeout(() => {
  var swiper = new Swiper('.mySwiper', {
    fadeEffect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      enabled: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 500);

var swiper = new Swiper('.myClientSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function isInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

const brandSection = document.getElementById('brand-section');
const brandNumber = document.getElementById('brand-number');
const adSection = document.getElementById('ad-section');
const adSpend = document.getElementById('ad-spend');

let brandFired = 0;
let adFired = 0;

document.addEventListener('scroll', () => {
  if (isInViewport(brandSection)) {
    if (brandFired !== 1) {
      var countUp = new CountUp(brandNumber, 20);
      countUp.start();
      brandFired = 1;
    }
  }

  if (isInViewport(adSection)) {
    if (adFired !== 1) {
      var countUp = new CountUp(adSpend, 50);
      countUp.start();
      adFired = 1;
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the header element
  var header = document.getElementById('myheader');

  // Add scroll event listener
  window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;

      // Check if header hits the top
      if (currentScroll === 0) {
          if (header) {
              header.classList.remove('small');
          }
      } else {
          // Downscroll code
          if (header) {
              header.classList.add('small');
          }
      }
  });
});




(function() {
  var myVideo_1 = document.getElementById("myVideo-1");
  var myVideo_2 = document.getElementById("myVideo-2");
  var myVideo_3 = document.getElementById("myVideo-3");
  var myVideo_4 = document.getElementById("myVideo-4");
  var myVideo_5 = document.getElementById("myVideo-5");
  var videoNav = document.getElementById("masthead_videoNav");

  var VideoThumb0 = document.getElementById('firstVideoHandle');
  var VideoThumb1 = document.getElementById('myVideoThumb-1');
  var VideoThumb2 = document.getElementById('myVideoThumb-2');
  var VideoThumb3 = document.getElementById('myVideoThumb-3');
  var VideoThumb4 = document.getElementById('myVideoThumb-4');

  var videoSizePlaceholder = document.getElementById('masthead_videoSizePlaceholder');

  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var desktopVideo_holder = document.getElementById('video-container');
  var mobileVideo_holder = document.getElementById('mobile_video_holder');

  myVideo_1.addEventListener("ended", function() {
      myVideo_1.style.display = "none";
      videoSizePlaceholder.style.display = "block";
      videoNav.style.display = "flex";
  });
  myVideo_2.addEventListener("ended", function() {
    myVideo_2.style.display = "none";
    videoSizePlaceholder.style.display = "block";
    videoNav.style.display = "flex";
  });
  myVideo_3.addEventListener("ended", function() {
    myVideo_3.style.display = "none";
    videoSizePlaceholder.style.display = "block";
    videoNav.style.display = "flex";
  });
  myVideo_4.addEventListener("ended", function() {
    myVideo_4.style.display = "none";
    videoSizePlaceholder.style.display = "block";
    videoNav.style.display = "flex";
  });
  myVideo_5.addEventListener("ended", function() {
    myVideo_5.style.display = "none";
    videoSizePlaceholder.style.display = "block";
    videoNav.style.display = "flex";
  });


  VideoThumb0.addEventListener('click', function() {
    videoNav.style.display = "none";
    videoSizePlaceholder.style.display = "none";
    VideoThumb0.style.display = "none";
    myVideo_1.play();
  });

  VideoThumb1.addEventListener('click', function() {
    videoNav.style.display = "none";
    videoSizePlaceholder.style.display = "none";
    myVideo_2.style.display = "block";
    myVideo_2.play();
  });
  VideoThumb2.addEventListener('click', function() {
    videoNav.style.display = "none";
    videoSizePlaceholder.style.display = "none";
    myVideo_3.style.display = "block";
    myVideo_3.play();
  });
  VideoThumb3.addEventListener('click', function() {
    videoNav.style.display = "none";
    videoSizePlaceholder.style.display = "none";
    myVideo_4.style.display = "block";
    myVideo_4.play();
  });
  VideoThumb4.addEventListener('click', function() {
    videoNav.style.display = "none";
    videoSizePlaceholder.style.display = "none";
    myVideo_5.style.display = "block";
    myVideo_5.play();
  });

  if (screenWidth < 768) {
     mobileVideo_holder.appendChild(desktopVideo_holder);
     mobileVideo_holder.appendChild(videoSizePlaceholder);
     mobileVideo_holder.appendChild(videoNav);
  }
})();