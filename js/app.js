function openLeftNav() {
    document.getElementById("sidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
}

function closeLeftNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openRightNav() {
    document.getElementById("rightnav").style.width = "365px";
    document.getElementById("main").style.marginRight = "365px";
}

function closeRightNav() {
    document.getElementById("rightnav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}