var import_data = "", ACC = 0;

var main = document.getElementById('main')

var inputEvent = 'false';

document.addEventListener('keydown', backspace)
document.addEventListener('keypress', input)


function backspace(e) {
    var e = e || window.event;

    if (e.keyCode == 116) {
        e.preventDefault();
        timer.reset()
        getData(save.data, save.article, save.min, save.max)
    }

    if (inputEvent == 'true') {
        if (e.keyCode == 8 && import_data != "") {
            import_data = import_data.substring(0, import_data.length - 1)
            demospan[save.N].className = ""
            save.N -= 1;
            demospan[save.N].className = "foc";
            position()
        }
    } else if (inputEvent != 'stop' && inputEvent != 'inputT' && menu.className != 'on') {

        main.className = "";
        inputEvent = 'inputT'
    }
}

function input(e) {
    if (inputEvent == 'true') {
        timer.start()
        Electrocardiogram()
        mouseAddHidden()
        var e = e || window.event;


        import_data += e.key;
        ACC += 1;

        if (e.key == save.bit[save.N]) {
            demospan[save.N].className = "correct";
        } else {
            demospan[save.N].className = "wrong"
        }
        
        save.N += 1;
        if (!demospan[save.N]) {
            timer.stop();
            return
        }
        demospan[save.N].className = "foc";
        position()
    } else if (inputEvent == 'inputT') {
        inputEvent = 'true'
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