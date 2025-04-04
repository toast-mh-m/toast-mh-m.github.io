const start_button = document.getElementById('power_start');
const text_under_button = document.getElementById('pbtxt');
const main_window = document.getElementById('entire_box');
const wrapper = document.querySelector(`.testwindow`);
const ntpd_window = document.querySelector(`.notepadwindow`);
const screen = document.getElementById(`screen`);
const screen_icon = document.getElementsByClassName('web_img');
const windowoneheader = document.getElementById('testwindowoneheader');
const notepadheader = document.getElementById('notepadheader');
const notif_MINI = document.getElementById(`MINInotif`);
const notif_MINI_ntpd = document.getElementById(`MINInotif_ntpd`);
var opening = new Audio('audio/opening.mp3');
const startBTN = document.getElementById('switch');
const infografic_ntpdd = document.getElementById('infografic_ntpd');
const blackscrn = document.getElementById('blackscrn');

function exit_screen() {
    document.querySelectorAll('.screen *').forEach(el => {
        el.style.display = 'none';
    });
    document.getElementById('screen').classList.add('screenshutdown');
    document.getElementById('fnue1').style.display = "flex";
    document.getElementById('fnue1').classList.add('opacityno-full');
    document.title = "shutting down...";
    setTimeout(() => {
        window.close();
    }, 15000);
};
startBTN.addEventListener("click", function() {
    startBTN.classList.add('die'); //animation
    text_under_button.classList.add('die2'); //animation
    main_window.style.display = "flex";
    main_window.classList.add('entire_box'); //animation

    const bootingMessages = ["booting( ! . . )", "booting( * . . )", "booting( * ! . )", "booting( * * . )", "booting( * * ! )"];
    let delay = 1000;

    bootingMessages.forEach((message) => { //technically animation
        setTimeout(() => {
            document.getElementById('booting').textContent = message;
            document.title = message;
        }, delay);
        delay += 2000;
    });
    setTimeout(() => {
        setTimeout(() => {
                setTimeout(() => {
                    opening.play();
                    setTimeout(() => {
                    document.getElementById('booting').textContent = "booting( * * * )";
                    screen.classList.add('SCREENON');
                    document.getElementById('booting').classList.add('opno');
                    blackscrn.classList.add("opacityno-full");
                    document.getElementById('exit').style.display = "flex";
                    document.getElementById('windowstuff').style.display = "flex";
                    document.getElementById('under_webic').style.display = "flex";
                    document.getElementById('under_notesic').style.display = "flex";
                    document.getElementById('under_settingsic').style.display = "flex";
                    document.getElementById(`switch`).style.display = "none";
                    document.title = "the highway";
                    }, 1000);
                }, delay + 1000);
        });
    });
});

function skip_beginning(){
    opening.play();
    screen.classList.add('SCREENON');
    main_window.style.display = "flex";
    document.getElementById('skippingbutton').style.display = "none";
    document.getElementById('booting').classList.add('opno');
    blackscrn.classList.add("opacityno-full");
    document.getElementById('exit').style.display = "flex";
    document.getElementById('windowstuff').style.display = "flex";
    document.getElementById('under_webic').style.display = "flex";
    document.getElementById('under_notesic').style.display = "flex";
    document.getElementById('under_settingsic').style.display = "flex";
    document.getElementById(`switch`).style.display = "none";
    document.title = "the highway";
}
// drag window stuff below
//webwindow
function onDragwebwindow({movementX, movementY}){
    let wrapperSTYLE = window.getComputedStyle(wrapper);
    let left = parseInt(wrapperSTYLE.left);
    let top = parseInt(wrapperSTYLE.top);
    if(!wrapper.classList.contains(`fullscreenNOW`)){
        wrapper.style.top = `${top + movementY}px`;
        wrapper.style.left = `${left + movementX}px`;
    }};

windowoneheader.addEventListener("mousedown", (event)=>{
    event.preventDefault();
    windowoneheader.classList.add(`active`);
    wrapper.style.zIndex = "10000";
    ntpd_window.style.zIndex = "10";
    document.addEventListener("mousemove", onDragwebwindow);
});
windowoneheader.addEventListener("mouseup", ()=>{
    for (let i = 0; i < 5; i++) {
        windowoneheader.classList.remove(`active`);
        document.removeEventListener("mousemove", onDragwebwindow);
    }
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
function manageWindow(windowElement, action){
    switch(action){
        case "minimize":
            windowElement.style.display = "none";
            windowElement.classList.add(`hidden`);
            windowElement.style.zIndex = "10000";
            break;
        case "resize":
            if(windowElement.classList.contains("fullscreenNOW")) {
                windowElement.classList.remove("fullscreenNOW");
                document.querySelector('.testicons').classList.remove('highwayheaders');
                windowElement.style.top = "50%";
                windowElement.style.left = "50%";
            } else {
                if(windowElement == wrapper){
                    document.querySelector('.testicons').classList.add('highwayheaders');
                }
                windowElement.classList.add("fullscreenNOW");
                windowElement.style.top = "50%";
                windowElement.style.left = "50%";
            }
            break;
        case "discard":
            windowElement.classList.add("discardWINDOW");
            setTimeout(() => {
                windowElement.classList.remove(`discardWINDOW`);
                windowElement.style.display = "none";
                windowElement.classList.remove(`fullscreenNOW`);
            }, 1);
            break;
    }
}
let scrollnotif = document.getElementById(`scrollingnotifs_ntpd`);

function toggleMINIMIZEweb() { manageWindow(wrapper, "minimize");notif_MINI.style.display = "flex"; }
function toggleRESIZEweb() { manageWindow(wrapper, "resize"); }
function toggleDISCARDweb() { manageWindow(wrapper, "discard"); }

function toggleMINIMIZE_ntpd() { manageWindow(ntpd_window, "minimize"); notif_MINI_ntpd.style.display = "flex"; }
function toggleRESIZE_ntpd() {
    manageWindow(ntpd_window, "resize");
    if(ntpd_window.classList.contains("fullscreenNOW")){
        scrollnotif.classList.add(`ntpdscrollnotifs_fullscreen`);
        scrollnotif.classList.remove(`scrollingnotifs_ntpd`);
        infografic_ntpdd.classList.add('infografic_ntpd-fullscreen');
        infografic_ntpdd.classList.add("infografic_ntpd_before-fullscreen");
    } else{
        scrollnotif.classList.remove(`ntpdscrollnotifs_fullscreen`);
        scrollnotif.classList.add(`scrollingnotifs_ntpd`);
        infografic_ntpdd.classList.remove('infografic_ntpd-fullscreen');
        infografic_ntpdd.classList.remove("infografic_ntpd_before-fullscreen");
    }
}
function toggleDISCARD_ntpd() {
    manageWindow(ntpd_window, "discard");
    loadnotepadtext();
    info_ntpd();

}

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


function toggleTextFormat(command) {
    document.execCommand(command, false, null);
    document.getElementById("notepadwriting").focus();
}
function bold_ntpd() { toggleTextFormat("bold"); }
function italic_ntpd() { toggleTextFormat("italic"); }
function underline_ntpd() { toggleTextFormat("underline"); }
function orderedlist_ntpd() { toggleTextFormat("insertOrderedList"); }
function UNorderedlist_ntpd() { toggleTextFormat("insertUnorderedList"); }

function showProgressMessages(elementId, messages, callback) {
    let delay = 0;
    messages.forEach((message) => {
        setTimeout(() => {
            document.getElementById(elementId).textContent = message;
        }, delay);
        delay += 1250;
    });
    setTimeout(callback, delay);
}
function save_ntpd() {
    if (typeof Storage !== "undefined") {
        document.getElementById('ntpd_save').disabled = true;
        document.getElementById('ntpd_save').classList.add("disabled_ntpd");
        document.getElementById('ntpd_restart').disabled = true;
        document.getElementById('ntpd_restart').classList.add("disabled_ntpd");
        showProgressMessages("storagenotifs_ntpd", ["saving", "saving.", "saving..", "saving..."], () => {
            document.getElementById("storagenotifs_ntpd").textContent = "done";
            localStorage.setItem("notepadtext", scrollContainer.innerHTML);
            setTimeout(() => {
                document.getElementById('storagenotifs_ntpd').textContent = "...";
                document.getElementById('ntpd_save').disabled = false;
                document.getElementById('ntpd_save').classList.remove("disabled_ntpd");
                document.getElementById('ntpd_restart').disabled = false;
                document.getElementById('ntpd_restart').classList.remove("disabled_ntpd");
            }, 5000)
        });
    } else {
        document.getElementById('storagenotifs_ntpd').textContent = "ERROR";
        alert("CANNOT SAVE ON NOTEPAD; PLEASE CONTACT THE OWNER OF THIS MACHINE FOR MORE INFO.");
    }
}
function restart_ntpd() {
    document.getElementById('ntpd_save').disabled = true;
    document.getElementById('ntpd_save').classList.add("disabled_ntpd");
    document.getElementById('ntpd_restart').disabled = true;
    document.getElementById('ntpd_restart').classList.add("disabled_ntpd");
    showProgressMessages("storagenotifs_ntpd", ["deleting", "deleting.", "deleting..", "deleting..."], () => {
        document.getElementById("storagenotifs_ntpd").textContent = "done";
        scrollContainer.innerHTML = "";
        localStorage.removeItem("notepadtext");
        setTimeout(() => {
            document.getElementById('storagenotifs_ntpd').textContent = "...";
            document.getElementById('ntpd_save').disabled = false;
            document.getElementById('ntpd_save').classList.remove("disabled_ntpd");
            document.getElementById('ntpd_restart').disabled = false;
            document.getElementById('ntpd_restart').classList.remove("disabled_ntpd");
        }, 5000)
    });
}
let isinfobubble_ntpd = false;
function info_ntpd(){
    let infobubble = infografic_ntpd;
    if(isinfobubble_ntpd){
        infobubble.style.display = "none";
        isinfobubble_ntpd = false;
    } else {
        infobubble.style.display = "flex";
        isinfobubble_ntpd = true;
    }
    if(ntpd_window.classList.contains("discardWINDOW")){
        infobubble.style.display = "none";
        isinfobubble_ntpd = false;
    }
}
function loadnotepadtext(){
    var savedtextforntpd = window.localStorage.getItem('notepadtext');
    if(savedtextforntpd){
        scrollContainer.innerHTML = savedtextforntpd;
    }
}
window.onload = loadnotepadtext;
