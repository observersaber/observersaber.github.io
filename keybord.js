
document.addEventListener('keydown', function (e) {
    var e = e || window.event;
    var a = "k" + e.keyCode;
    if (document.getElementById(a)) {
        document.getElementById(a).className = "active"
    }
})
document.addEventListener('keyup', function (e) {
    var e = e || window.event;
    var a = "k" + e.keyCode;
    if (document.getElementById(a)) {
        document.getElementById(a).className = ""
    }
})