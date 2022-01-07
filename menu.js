document.getElementById('menu_icon_box').addEventListener('click', function () {
    var menu = document.getElementById('menu');


    // menu.className = (menu.className == 'off' || menu.className == '') ? 'on' : 'off';


    if (menu.className == 'off' || menu.className == '') {
        menu.className = 'on'
    } else {
        menu.className = 'off'
    }

    timer.pause()
    inputEvent = false
    main.className = "focus"

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
fsRange.addEventListener("change", function () {
    listener();
    fsRange.removeEventListener("input", listener);
});

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
        inputEvent = true
    }
})

window.addEventListener("blur", function () {
    timer.pause();
    inputEvent = false
    main.className = "focus"
})