//executes this function every second
const due_date: Date = new Date("Mar 20, 2022 12:00:00");
let date_txt: any;
date_txt = <HTMLParagraphElement> document.getElementById("date_txt");

let updateDate = setInterval(():void => {
    let now: Date = new Date();
    let delta_time: number = due_date.getTime() - now.getTime();

    //days = ms / 8.64e7;
    let days: number= delta_time / 8.64e7;
    let hours: number= (days - Math.floor(days)) * 24;
    let minutes: number= (hours - Math.floor(hours)) * 60;
    let seconds: number= (minutes - Math.floor(minutes)) * 60;
    
    let result: string = `${Math.floor(days)}:${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`;

    date_txt.innerHTML = result;
}, 1000);