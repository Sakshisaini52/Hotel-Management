
// navbar js
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menu-btn');
    const navbar = document.querySelector('.header .navbar');

    menuButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuButton.querySelector('i').classList.toggle('fa-bars');
        menuButton.querySelector('i').classList.toggle('fa-times');
    });
    window.onscroll = () => {
        ~menuButton.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});



// home slider js
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
});



// room slider js
var swiper = new Swiper(".room-slider", {
    spaceBetween:20,
    grabCursor:true,
    slidesPerView: 3,
    // loop:true,
    centeredSlides:false,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
    },
});


// gallery slider js
var swiper = new Swiper(".gallery-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:false,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView:3,
        },
        991: {
            slidesPerView:4,
        },
    },
});


// review slider js
var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// faqs expanding
let accord = document.querySelectorAll(".faqs .row .content .box");

accord.forEach((acc) => {
    acc.onclick = () => {
        accord.forEach((subAcc) => {
            if (subAcc !== acc) {
                subAcc.classList.remove('active');
            }
        });
        acc.classList.toggle('active');
    };
});

// acc is clicked element
// subAcc is the current clicked element
