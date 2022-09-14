var menu = document.getElementById('menu');
var fsRange = document.getElementById("fsRange");

fsRange.addEventListener("input", function () {
    listener();
    fsRange.addEventListener("change", listener);
});

function listener() {
    main.style.fontSize = fsRange.value + "px";
}


document.addEventListener('click', function (e) {
    var e = e || window.event,
        target = e.srcElement || e.target;
    console.log(target)
    // if (target.className != "focus" && main.className == "") {
    //     main.className = "focus"
    // }

    if (target.className == "focus" && menu.className != "on") {
        main.className = ""
        inputEvent = 'true'
    }

    switch (target.id) {
        case "BColor":
            document.getElementsByTagName('body')[0].className = (target.checked) ? "light" : "dark";
            break;
        case "menu_icon":
            if (menu.className != 'on') {
                menu.className = 'on'
            } else {
                menu.className = 'off'
            }
            if (inputEvent != 'stop') {
                timer.pause()
                inputEvent = 'false'
            }
            break;
        case "PausePlay":
            if (timer._timer) {
                timer.pause()
            }
            break;
        case "midBox":
            if(menu.className=="on"){
                menu.className="off"
            }
            break;
        case "":
            break;
        default:
            break;
    }




    if (target.dataset.timeconfig != undefined && target.className != "selected") {
        document.getElementsByClassName('selected')[0].className = "";
        target.className = "selected";
    }

})

var keyboardMenu = document.getElementById('keyboardMenu')
keyboardMenu.addEventListener("change", function () {
    var switchValue = this.options[this.selectedIndex].value;
    switch (switchValue) {
        case "1":
            document.getElementById('alicekeyboard').style.display = "none"
            break;
        // case "2":
        //     option_02();
        //     break;
        case "3":
            console.log('123')
            document.getElementById('alicekeyboard').style.display = "block"
            break;
        default:
            return;
    }
});


window.addEventListener("blur", function () {
    if (inputEvent != 'stop') {
        timer.pause();
        inputEvent = 'false'
        main.className = "focus"
    }
})