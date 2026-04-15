const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// open button
menuOpenButton.addEventListener("click", ()=> {
    document.body.classList.toggle("show-mobile-menu");
});

// close button
menuCloseButton.addEventListener("click", ()=>
    menuOpenButton.click());


// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    // loop: true,
    grabCursor: true,
    spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   responsive breakpoint

  breakpoints: {
    0: {
        slidesPreView: 1
    },
    768: {
        slidesPreView: 2
    },
    1024: {
        slidesPreView: 3
    },
  }

});

let sign_up_btn = document.querySelector(".sign_up_btn");
let sign_in_btn = document.querySelector(".sign_in_btn");
let name_field = document.querySelector(".name_field");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");

// sign in button
sign_in_btn.addEventListener("click", ()=> {
    name_field.style.maxHeight = "0";
    title.innerHTML = "sign In"
    sign_up_btn.classList.add("disable");
    sign_in_btn.classList.remove("disable");
    underline.style.transform = "translateX(35px)"
})

// sign Up
sign_up_btn.addEventListener("click", ()=> {
    name_field.style.maxHeight = "60px";
    title.innerHTML = "sign up"
    sign_up_btn.classList.remove("disable");
    sign_in_btn.classList.add("disable");
    underline.style.transform = "translateX(0)"
})