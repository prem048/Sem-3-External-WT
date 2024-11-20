let menu = document.querySelector(".menu");
let toggle = false;
function toggleMenuState() {
    if (toggle) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    toggle = !toggle;
}