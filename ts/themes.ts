const doc = document.documentElement; //HTML document
let preferred_theme: any;
let theme_checkbox: any;

preferred_theme = window.matchMedia("(prefers-color-scheme: light)").matches;
theme_checkbox = <HTMLInputElement>document.getElementById("theme-cb");

preferred_theme = <string>(preferred_theme ? 'light' : 'dark');

function change_theme(menu: HTMLSelectElement): void{
    /* Possible menu values
    - dark
    - light
    - system
    */
    if(menu.value != "system"){
        doc.setAttribute("data-theme", menu.value);
        localStorage.setItem('theme', menu.value); 
    }
    else{
        doc.setAttribute("data-theme", preferred_theme);
        localStorage.setItem('theme', preferred_theme); 
    }
}


if(localStorage.getItem('theme') == null){
   localStorage.setItem('theme', preferred_theme); 
}

doc.setAttribute("data-theme", <string>localStorage.getItem('theme'));
