var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");




mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("map-show")) {
            mapPopup.classList.remove("map-show");
        }
    }
});