"use strict";
let dropdowns;
dropdowns = document.getElementsByClassName("dropdown");
function toggle_panel(btn) {
    btn.classList.toggle("active");
    let panel = btn.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
