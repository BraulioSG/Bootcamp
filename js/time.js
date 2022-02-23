"use strict";
//executes this function every second
const due_date = new Date("Mar 20, 2022 12:00:00");
let date_txt;
date_txt = document.getElementById("date_txt");
let updateDate = setInterval(() => {
    let now = new Date();
    let delta_time = due_date.getTime() - now.getTime();
    //days = ms / 8.64e7;
    let days = delta_time / 8.64e7;
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;
    let result = `${Math.floor(days)}:${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`;
    date_txt.innerHTML = result;
}, 1000);
