var buttonOpenMenu = document.getElementById("open-menu");
var buttonCloseMenu = document.getElementById("close-menu");
var header = document.getElementById("main-header");

buttonOpenMenu.addEventListener("click", openMenu);
function openMenu() {
    header.classList.add("menu-is-opened");
}

buttonCloseMenu.addEventListener("click", closeMenu);
function closeMenu() {
    header.classList.remove("menu-is-opened");
}
