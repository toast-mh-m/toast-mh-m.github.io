const start_button = document.getElementById('power_start');
const text_under_button = document.getElementById('goaway');
const main_window = document.getElementById('entire_box');
const wrapper = document.querySelector(`.window1`);
const ntpd_window = document.querySelector(`.notepadwindow`);
const screen = document.getElementById(`screen`);
const screen_icon = document.getElementsByClassName('web_img');
const windowoneheader = document.getElementById('windowoneheader');
const notepadheader = document.getElementById('notepadheader');
const notif_MINI = document.getElementById(`MINInotif`);
const notif_MINI_ntpd = document.getElementById(`MINInotif_ntpd`);
var opening = new Audio('audio/opening.mp3');

console.log("Script loaded");

function powerBTN(){
    console.log("Power button clicked!");
    start_button.classList.add('die');
    text_under_button.classList.add('die2');
    main_window.style.display = "flex";
    main_window.classList.add('entire_box');

    const bootingMessages = ["booting(! . .)", "booting(* . .)", "booting(* ! .)", "booting(* * .)", "booting(* * !)"];
    let delay = 1000;

    bootingMessages.forEach((message) => {
        setTimeout(() => {
            document.getElementById('booting').textContent = message;
        }, delay);
        delay += 1500;
    });
    setTimeout(() => {
        setTimeout(() => {
                setTimeout(() => {
                    opening.play();
                    setTimeout(() => {
                    document.getElementById('booting').textContent = "booting(* * *)";
                    screen.classList.add('SCREENON');
                    const textoverthingy = document.getElementsByClassName('text');
                    for (let i = 0; i < textoverthingy.length; i++) {
                        textoverthingy[i].classList.add('opacityno-full');
                    }
                    for (let i = 0; i < screen_icon.length; i++) {
                        screen_icon[i].classList.add('opacityno-full');
                    }
                    document.getElementById('booting').classList.add('opno');
                    document.getElementById('exit').style.display = "flex";
                    document.getElementById('windowstuff').style.display = "flex";
                    document.getElementById('under_webic').style.display = "flex";
                    document.getElementById('under_notesic').style.display = "flex";
                    document.getElementById(`powerbutton`).style.display = "none";
                    }, 1000);
                }, delay + 1000);
        });
    });
};
function exit_screen() {
    window.open("index.html", "_self");
};

// drag window stuff below
//webwindow
function onDragwebwindow({movementX, movementY}){
    let wrapperSTYLE = window.getComputedStyle(wrapper);
    let left = parseInt(wrapperSTYLE.left);
    let top = parseInt(wrapperSTYLE.top);
    if(!wrapper.classList.contains(`fullscreenNOW`)){
    wrapper.style.top = `${top + movementY}px`;
    wrapper.style.left = `${left + movementX}px`;}
};
windowoneheader.addEventListener("mousedown", (event)=>{
    event.preventDefault();
    windowoneheader.classList.add(`active`);
    wrapper.style.zIndex = "10000";
    ntpd_window.style.zIndex = "10";
    document.addEventListener("mousemove", onDragwebwindow);
});
windowoneheader.addEventListener("mouseup", ()=>{
    windowoneheader.classList.remove(`active`);
    document.removeEventListener("mousemove", onDragwebwindow);
});
//notepadwindow
function onDragntpd({movementX, movementY}){
    let notepadheaderSTYLE = window.getComputedStyle(ntpd_window);
    let left = parseInt(notepadheaderSTYLE.left);
    let top = parseInt(notepadheaderSTYLE.top);
    if(!ntpd_window.classList.contains(`fullscreenNOW`)){
        ntpd_window.style.top = `${top + movementY}px`;
        ntpd_window.style.left = `${left + movementX}px`;}
};
notepadheader.addEventListener("mousedown", (event)=>{
    event.preventDefault();
    notepadheader.classList.add("active");
    ntpd_window.style.zIndex = "10000";
    wrapper.style.zIndex = "10";
    document.addEventListener("mousemove", onDragntpd);
});
document.addEventListener("mouseup", ()=>{
    notepadheader.classList.remove(`active`);
    document.removeEventListener("mousemove", onDragntpd);
});


//window for web icon thingys i dunno the name
function webwindow(){
    if(wrapper.classList.contains(`hidden`)){
        wrapper.style.display = "flex";
        wrapper.classList.remove(`hidden`);
        notif_MINI.style.display = "none";
    } else{
    wrapper.style.display = "flex";
    wrapper.style.transform = "translate(-50%, -50%)";
    wrapper.style.top = "50%";
    wrapper.style.left = "50%";
    notif_MINI.style.display = "none";
    wrapper.style.zIndex = "10000";
    ntpd_window.style.zIndex = "10";
    }
};
function toggleMINIMIZEweb(){
    wrapper.style.display = "none";
    wrapper.classList.add(`hidden`);
    notif_MINI.style.display = "flex";
    wrapper.style.zIndex = "10000";
    ntpd_window.style.zIndex = "10";
};
function toggleRESIZEweb(){
    let getStyle = window.getComputedStyle(wrapper);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
    if(wrapper.classList.contains(`fullscreenNOW`)){
        wrapper.classList.remove(`fullscreenNOW`);
        wrapper.style.top = '50%';
        wrapper.style.left = '50%';
    } else {
        wrapper.classList.add(`fullscreenNOW`);
        wrapper.style.top = '50%';
        wrapper.style.left = '50%';
        wrapper.style.zIndex = "10000";
        ntpd_window.style.zIndex = "10";
    }};
function toggleDISCARDweb(){
    wrapper.classList.add(`discardWINDOW`);
    setTimeout(() => {
        wrapper.classList.remove(`discardWINDOW`);
        wrapper.style.display = "none";
        wrapper.classList.remove(`fullscreenNOW`);
    }, 1)
};
//window for notepad :))
let isScrolling;
let lastScrollTop = 0;
let scrollDirection = "";
const scrollContainer = document.getElementById("notepadwriting");
const scrollStatus = document.getElementById("scrollStatus");

function noteswindow(){
    if(ntpd_window.classList.contains(`hidden`)){
        ntpd_window.style.display = "flex";
        ntpd_window.classList.remove(`hidden`);
        notif_MINI_ntpd.style.display = "none";
    } else{
    ntpd_window.style.display = "flex";
    ntpd_window.style.transform = "translate(-50%, -50%)";
    ntpd_window.style.top = "50%";
    ntpd_window.style.left = "50%";
    notif_MINI_ntpd.style.display = "none";
    ntpd_window.style.zIndex = "10000";
    wrapper.style.zIndex = "10";
    }
}
function toggleMINIMIZE_ntpd(){
    ntpd_window.style.display = "none";
    ntpd_window.classList.add(`hidden`);
    notif_MINI_ntpd.style.display = "flex";
    ntpd_window.style.zIndex = "10000";
    wrapper.style.zIndex = "10";
};
function toggleRESIZE_ntpd(){
    let getnotepadStyle = window.getComputedStyle(ntpd_window);
        let left = parseInt(getnotepadStyle.left);
        let top = parseInt(getnotepadStyle.top);
    let scrollnotif = document.getElementById(`scrollingnotifs_ntpd`);
    if(ntpd_window.classList.contains(`fullscreenNOW`)){
        ntpd_window.classList.remove(`fullscreenNOW`);
        ntpd_window.style.top = '50%';
        ntpd_window.style.left = '50%';
        ntpd_window.style.height = "500px";
        ntpd_window.style.width = "500px";
        scrollnotif.classList.remove(`ntpdscrollnotifs_fullscreen`);
        scrollnotif.style.borderBottom = "inherit";
        scrollnotif.style.borderLeft = "0px solid black";
        scrollnotif.style.right = "-49.97px";
        scrollnotif.style.top = "103.2px";
        scrollnotif.style.bottom = "0";
    } else {
        ntpd_window.classList.add(`fullscreenNOW`);
        ntpd_window.style.top = '50%';
        ntpd_window.style.left = '50%';
        ntpd_window.style.height = "100%";
        ntpd_window.style.width = "100%";
        ntpd_window.style.zIndex = "10000";
        wrapper.style.zIndex = "10";
        scrollnotif.classList.add(`ntpdscrollnotifs_fullscreen`);
        scrollnotif.style.borderBottom = "0px solid black";
        scrollnotif.style.borderLeft = "inherit";
        scrollnotif.style.right = "25px";
        scrollnotif.style.top = '93.3%';
        scrollnotif.style.bottom = "10px";


}};
function toggleDISCARD_ntpd(){
    ntpd_window.classList.add(`discardWINDOW`);
    setTimeout(() => {
        ntpd_window.classList.remove(`discardWINDOW`);
        ntpd_window.style.display = "none";
        ntpd_window.classList.remove(`fullscreenNOW`);
        loadnotepadtext();
    }, 1)
};

scrollContainer.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    const scrollTop = scrollContainer.scrollTop;
    if (scrollTop > lastScrollTop) {
        scrollDirection = "Scrolling down";
        document.getElementById(`scrollarrow`).style.color = "white";
        document.getElementById(`scrollarrow`).textContent = "↓";
        document.getElementById(`scrollarrow`).style.fontSize = "x-large";
    } else if (scrollTop < lastScrollTop) {
        scrollDirection = "Scrolling up";
        document.getElementById(`scrollarrow`).style.color = "white";
        document.getElementById(`scrollarrow`).textContent = "↑";
        document.getElementById(`scrollarrow`).style.fontSize = "x-large";
    }
    lastScrollTop = scrollTop;
    isScrolling = setTimeout(() => {
        scrollDirection = "Not scrolling";
        document.getElementById(`scrollarrow`).style.color = "rgb(60, 60, 60)";
        document.getElementById(`scrollarrow`).textContent = "↕";
        document.getElementById(`scrollarrow`).style.fontSize = "xx-large";
    }, 200); // adjust time as needed (200ms is typical)
});
let isbold = false;
function bold_ntpd(){
    if (isbold){
        document.execCommand("bold", false, null);
        document.getElementById(`notepadwriting`).focus();
    } else {
        document.execCommand("bold", false, null);
        document.getElementById(`notepadwriting`).focus();
    }
    isbold = !isbold;
}
let isitalic = false;
function italic_ntpd(){
    if (isitalic){
        document.execCommand("italic", false, null);
        document.getElementById(`notepadwriting`).focus();
    } else {
        document.execCommand("italic", false, null);
        document.getElementById(`notepadwriting`).focus();
    }
}
let isunderline = false;
function underline_ntpd(){
    if (isunderline){
        document.execCommand(`underline`, false, null);
        document.getElementById(`notepadwriting`).focus();
    } else {
        document.execCommand(`underline`, false, null);
        document.getElementById(`notepadwriting`).focus();
    }
}
let isorderedlist = false;
function orderedlist_ntpd(){
    if (isorderedlist){
        document.execCommand(`insertOrderedList`, false, null);
        document.getElementById(`notepadwriting`).focus();
    } else {
        document.execCommand(`insertOrderedList`, false, null);
        document.getElementById(`notepadwriting`).focus();
    }
}
let isUNorderedlist = false;
function UNorderedlist_ntpd(){
    if (isUNorderedlist){
        document.execCommand(`insertUnorderedList`, false, null);
        document.getElementById(`notepadwriting`).focus();
    } else {
        document.execCommand(`insertUnorderedList`, false, null);
        document.getElementById(`notepadwriting`).focus();
    }
}
function save_ntpd(){
    const savingmessages = ["saving", "saving.", "saving..", "saving..."];
    let delay = 0;

    if (typeof(Storage) !== "undefined") {
    if(localStorage.save_ntpd){
        savingmessages.forEach((message) => {
            setTimeout(() => {
                document.getElementById('storagenotifs_ntpd').textContent = message;
            }, delay);
            delay += 1250;
        });
        setTimeout(() => {
            document.getElementById('storagenotifs_ntpd').textContent = "done";
            localStorage.setItem('notepadtext', scrollContainer.innerHTML);
            setTimeout(() => {
                document.getElementById('storagenotifs_ntpd').textContent = "...";
            }, 5000)
        }, delay += 1250)
    } else {
        document.getElementById('storagenotifs_ntpd').textContent = "ERROR";
        alert("CANNOT SAVE ON NOTEPAD; PLEASE CONTACT THE OWNER OF THIS MACHINE FOR MORE INFO.");
    }
}}
function loadnotepadtext(){
    const savedtextforntpd = localStorage.getItem('notepadtext');
    if (savedtextforntpd) scrollContainer.innerHTML = savedtextforntpd;
}
function restart_ntpd(){
    const deletingmessages = ["deleting", "deleting.", "deleting..", "deleting..."];
    let delay = 0;

    deletingmessages.forEach((message) => {
        setTimeout(() => {
            document.getElementById('storagenotifs_ntpd').textContent = message;
        }, delay += 1250);
    });
    setTimeout(() => {
        document.getElementById('storagenotifs_ntpd').textContent = "done";
        scrollContainer.innerHTML = "";
        localStorage.removeItem("notepadtext");
        setTimeout(() => {
            document.getElementById('storagenotifs_ntpd').textContent = "...";
        }, 5000)
    }, delay += 1250)
}
let isinfobubble_ntpd = true;
function info_ntpd(){
    let infobubble = document.getElementById('infografic_ntpd');
    if(isinfobubble_ntpd){
        infobubble.style.display = "flex";
        isinfobubble_ntpd = false;
    } else {
        infobubble.style.display = "none";
        isinfobubble_ntpd = true;
    }
}
window.onload = loadnotepadtext;
