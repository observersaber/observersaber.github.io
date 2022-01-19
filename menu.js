document.getElementById('menu_icon_box').addEventListener('click', function () {
    var menu = document.getElementById('menu');


    // menu.className = (menu.className == 'off' || menu.className == '') ? 'on' : 'off';


    if (menu.className == 'off' || menu.className == '') {
        menu.className = 'on'
    } else {
        menu.className = 'off'
    }

    if (inputEvent != 'stop') {
        timer.pause()
        inputEvent = 'false'
        main.className = "focus"
    }

    // var menu_icon_box = document.getElementById('menu_icon_box');
    // var menu_box = document.getElementById('menu_box');

    // if (menu_box.style.width == 0) {
    //     menu_box.style.width = ((menu.scrollWidth < 400) ? 400 : menu.scrollWidth) + "px";
    //     menu_icon_box.className = "open";
    //     SOS(false)
    //     timer.pause();
    // } else {
    //     menu_box.style.width = "";
    //     menu_icon_box.className = "off";
    //     SOS(true)
    // }
})

// document.addEventListener('click', function (e) {
//     var e = e || window.event,
//         target = event.srcElement || event.target;
//     switch (key) {
//         case value:

//             break;

//         default:
//             break;
//     }
// })

var fsRange = document.getElementById("fsRange");

fsRange.addEventListener("input", function () {
    listener();
    fsRange.addEventListener("change", listener);
});
// fsRange.addEventListener("change", function () {
//     listener();
//     fsRange.removeEventListener("input", listener);
// });

function listener() {
    main.style.fontSize = fsRange.value + "px";
}


document.addEventListener('click', function (e) {
    var e = e || window.event,
        target = e.srcElement || e.target;

    // if (target.className != "focus" && main.className == "") {
    //     main.className = "focus"
    // }

    if (target.className == "focus" && menu.className != "on") {
        main.className = ""
        inputEvent = 'true'
    }

    if (target.id == "BColor") {
        // console.log(body)
        document.getElementsByTagName('body')[0].className = (target.checked) ? "light" : "dark";
        // body.className=(target.checked==true)?"dark":"";
    }
    // console.log(target.hasAttribute('timeconfig'))

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