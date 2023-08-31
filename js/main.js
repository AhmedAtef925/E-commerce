/*start the asidebar*/
var menubar = document.getElementById("menu-bar"),
  aside = document.getElementById("aside"),
  xclose = document.getElementById("xclose"),
  themeToggler = document.getElementById("theme-toggler");

menubar.onclick = () => {
  aside.classList.toggle("active");
};
xclose.onclick = () => {
  aside.classList.remove("active");
};
themeToggler.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("theme-toggle");
});
/*end the asidebar*/

/*start the feacture */
/*
var SmallImg = Array.from(document.querySelectorAll("#small-img")),
    BigImg = Array.from(document.querySelectorAll("#big-img"));
    console.log(SmallImg);

for (var i = 0; i < SmallImg.length; i++){

    SmallImg[i].addEventListener("click", function () {
           var imgAttribute = this.getAttribute("src");

           BigImg[0].setAttribute("src", imgAttribute);
        // BigImg[i].src = this.src
        
    })
}
*/
//طريقه تانيه باستخدام forEach
document.querySelectorAll("#small-image-1").forEach((images) => {
  images.onclick = () => {
    document.querySelector("#big-image-1").src = images.getAttribute("src");
  };
});

document.querySelectorAll("#small-image-2").forEach((images) => {
  images.onclick = () => {
    document.querySelector("#big-image-2").src = images.getAttribute("src");
  };
});

document.querySelectorAll("#small-image-3").forEach((images) => {
  images.onclick = () => {
    document.querySelector("#big-image-3").src = images.getAttribute("src");
  };
});

/*end the feacture*/

//swiper libary

var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
