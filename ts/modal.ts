const triggers: any = document.getElementsByClassName("event")

const modal: any = document.getElementById("modal")
const contents: any = document.getElementsByClassName("modal_content");

window.onclick = (event: Event): void => {
    /* Triggers */
    let e: any = event.target
    if(e == modal) closeModal();
    if(e.className == "event"){
        openModal(e)
    }
    else if(e.className == "info_event" || e.className == "img_container"){
        openModal(e.parentElement)
    }
    else if(e.className == "img_event"){
        openModal(e.parentElement.parentElement)
    }
}

function openModal(trigger: any): void{
    let idx: number = -1;
    for(let i = 0; i < triggers.length; i++){
        if(triggers[i] == trigger){
            idx = i;
        }
    }
    modal.style.display = "flex";
    contents[idx].style.display = "block";
}

function closeModal(): void{
    modal.style.display = "none";
    for(let i = 0; i < contents.length; i++){
        contents[i].style.display = "none";       
    }
}