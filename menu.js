document.getElementById('menu_icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var menu_icon_box = document.getElementById('menu_icon_box');
    var menu_box = document.getElementById('menu_box');

    if (menu_box.style.width == 0) {
        menu_box.style.width = ((menu.scrollWidth < 400) ? 400 : menu.scrollWidth) + "px";
        menu_icon_box.className = "open";
        SOS(false)
        timer.pause();
    } else {
        menu_box.style.width = "";
        menu_icon_box.className = "off";
        SOS(true)
    }
})