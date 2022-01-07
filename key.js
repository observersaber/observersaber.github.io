var import_data = "", ACC = 0;

var main = document.getElementById('main')

var inputEvent = false;

// function SOS(e) {
//     if (e) {
//         document.addEventListener('keypress', input)
//         document.addEventListener('keydown', backspace)
//         main.className = "";
//     } else {
//         document.removeEventListener('keypress', input)
//         document.removeEventListener('keydown', backspace)
//     }
// }

document.addEventListener('keydown', backspace)
document.addEventListener('keypress', input)


function backspace(e) {
    var e = e || window.event;

    if (e.keyCode == 116) {
        e.preventDefault();
        timer.reset()
    }

    if (inputEvent == true) {
        if (e.keyCode == 8 && import_data != "") {
            import_data = import_data.substring(0, import_data.length - 1)
            demospan[save.N].className = ""
            save.N -= 1;
            demospan[save.N].className = "foc";
            position()
        }
    } else if (inputEvent !='stop' &&inputEvent != 'inputT' && menubar.className != 'on') {
        main.className = "";
        inputEvent = 'inputT'
    }
}

function input(e) {
    if (inputEvent == true) {
        var e = e || window.event;

        if (e.key == save.bit[save.N]) {
            demospan[save.N].className = "correct";
        } else {
            demospan[save.N].className = "wrong"
        }
        save.N += 1;
        demospan[save.N].className = "foc"
        position()
        import_data += e.key;
        ACC += 1;
        timer.start()
    } else if (inputEvent == 'inputT') {
        inputEvent = true
    }
}

window.addEventListener('resize', position);

function position() {
    demo.style.marginTop = getPosition(demo.getElementsByTagName('span')[0]).y - getPosition(document.getElementsByClassName('foc')[0]).y + 'px';
}

function getPosition(e) {
    var y = 0;
    while (e) {
        y += e.offsetTop - e.scrollLeft + e.clientTop;
        e = e.offsetParent
    }
    return { y: y }
}