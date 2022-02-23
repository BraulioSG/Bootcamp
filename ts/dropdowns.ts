let dropdowns: any;

dropdowns = document.getElementsByClassName("dropdown");

function toggle_panel(btn: HTMLButtonElement):void{
    btn.classList.toggle("active");
    let panel: any = <HTMLDivElement>btn.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}