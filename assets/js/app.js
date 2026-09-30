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
    if(e.target.classList.contains("search_popup_active")){
      searchPopup.classList.remove("search_popup_active");

  }
});
