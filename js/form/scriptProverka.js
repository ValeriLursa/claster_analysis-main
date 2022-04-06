function proverka() {
    if (globalFlagOnload) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
            tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
        }
        
        

        
    }
}


function provColor(func, ev) {
    if (!func) {
        ev.className += " w3-red";
    } else ev.className += " w3-red";
}

