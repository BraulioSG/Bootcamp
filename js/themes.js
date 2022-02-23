"use strict";
const doc = document.documentElement; //HTML document
let preferred_theme;
let theme_checkbox;
preferred_theme = window.matchMedia("(prefers-color-scheme: light)").matches;
theme_checkbox = document.getElementById("theme-cb");
preferred_theme = (preferred_theme ? 'light' : 'dark');
function change_theme(menu) {
    /* Possible menu values
    - dark
    - light
    - system
    */
    if (menu.value != "system") {
        doc.setAttribute("data-theme", menu.value);
        localStorage.setItem('theme', menu.value);
    }
    else {
        doc.setAttribute("data-theme", preferred_theme);
        localStorage.setItem('theme', preferred_theme);
    }
}
if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', preferred_theme);
}
doc.setAttribute("data-theme", localStorage.getItem('theme'));
