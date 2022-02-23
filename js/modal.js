"use strict";
let triggers = document.getElementsByClassName("event");
console.log(triggers);
for (let i = 0; i < triggers.length; i++) {
    triggers.onclick = () => {
        console.log("hello");
    };
    console.log(triggers[i].children);
}
window.onclick = (event) => {
    /* Triggers */
    let e = event.target;
    if (e.className == "event") {
        openModal(e);
    }
    else if (e.className == "info_event" || e.className == "img_container") {
        openModal(e.parentElement);
    }
    else if (e.className == "img_event") {
        openModal(e.parentElement.parentElement);
    }
};
function openModal(trigger) {
    console.log(trigger);
}
