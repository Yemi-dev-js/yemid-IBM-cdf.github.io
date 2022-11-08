// const swiper = new Swiper('.slide-content', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
  
//   direct /////////////////////

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
////////////////////////////////////////



// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("navbar_11");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// } 

// document.getElementById("color_button").onclick = function(){execute()}

// var navbar_11 = document.getElementById("navbar_11");
// var menu = document.getElementById("menu");

// window.onscroll= function(){
//     if(window.scrollY >= menu.offsetTop){
//         navbar_11.classList.add("sticky");
//     }else {
//         navbar_11.classList.remove("sticky");
//     }
// };


  ///////////////////////////////

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints:{
    //     640: {
    //         slidesPerView: 2,
    //         // spaceBetween: 20,
    //     },

    //     768: {
    //         slidesPerView: 3,
    //         // spaceBetween: 0,
    //     },

    //     1024: {
    //         slidesPerView: 4,
    //         // spaceBetween: 0,
    //     },
    // },

    breakpoints:{
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },

        520: {
            slidesPerView: 2,
            // spaceBetween: 0,
        },

        950: {
            slidesPerView: 3,
            // spaceBetween: 0,
        },
    },

  });