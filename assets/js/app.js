$(function () {
  let searchInput = document.querySelector(".search_input");
  let searchPopup = document.querySelector(".search_popup");
  let searchClose = document.querySelector(".search_close");

  searchInput.addEventListener("click", function () {
    searchPopup.classList.add("search_popup_active");
  });

  searchClose.addEventListener("click", function () {
    searchPopup.classList.remove("search_popup_active");
  });
  searchPopup.addEventListener("click", function (e) {
    if (e.target.classList.contains("search_popup_active")) {
      searchPopup.classList.remove("search_popup_active");
    }
  });

  //* Hero

  $(".sliders").slick({
    arrows: true,
    nextArrow: `<span class="next-btn"><i class="fa-solid fa-arrow-right"></i></span>`,
    prevArrow: `<span class ="prev-btn"><i class="fa-solid fa-arrow-left"></i></span>`,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // product mixitup filter
  mixitup("#Grid", {
    selectors: {
      control: ".filter",
    },
  });
  // footer_year

  let footerYear = document.querySelector(".footer_year span");
  const presentYear = new Date().getFullYear();

  footerYear.innerHTML = presentYear;

  // Newsletter_Popup

  let addPopup = document.querySelector("#addpopup");
  let popupIcon = document.querySelector(".content .icon");
  window.addEventListener("load" ,function(){
    setTimeout(
      function () {
        addPopup.classList.add("addpopup_active")
      }, 900
    )
  })

  popupIcon.addEventListener("click", function () {
    addPopup.classList.remove("addpopup_active");
  });

  addPopup.addEventListener("click", function (e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("container")) {
      addPopup.classList.remove("addpopup_active");
    }
  });
  // product item card
});
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  vertical: true,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  nextArrow: `<span class="product_details_downarrow"><i class="fa-solid fa-chevron-down"></i></span>`,
  prevArrow: `<span class ="product_details_toparrow"><i class="fa-solid fa-chevron-up"></i></span>`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        arrows: false,
      },
    },
  ],
});
// zoom
$(function () {
  $(".example").imagezoomsl();
});

let productDisincrease = document.querySelector(".product_count .disincrease");
let productIncrease = document.querySelector(".product_count .increase");
let productCountInput = document.querySelector(".product_count input");

productIncrease.addEventListener("click", function (i) {
  i.preventDefault();
 
  if (productCountInput.value < 5) {
    productCountInput.value++;
  }
});
productDisincrease.addEventListener("click", function (i) {
  i.preventDefault();
  if (productCountInput.value > 0){
    productCountInput.value--;

  }
});
let product_cart_love = document.querySelector(".product-cart-love")

product_cart_love.addEventListener("click" ,function () {
  product_cart_love.innerHTML = `<i class="fa-solid fa-heart"></i>`
})