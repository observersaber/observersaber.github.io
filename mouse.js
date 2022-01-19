
var cursor = document.getElementById('cursor')
var cursorP = document.getElementById('cursorP')

document.addEventListener('DOMContentLoaded', function () {
    
})

function easeOutCirc(a, b, n) {
    var x = (1 - n) * a + n * b
    return (x == NaN) ? b : x
}

var x = 0, y = 0, leftx = 0, topx = 0
var btnmove = false;

function handleCurosr(e) {
    var e = e || window.event,
        target = e.srcElement || e.target;
    x = e.clientX;
    y = e.clientY;
    if (btnmove) {
        var x1 = e.offsetX,
            y1 = e.offsetY,
            width = target.offsetWidth,
            height = target.offsetHeight,
            walk = 20,
            xWalk = (x1 / width) * (walk * 2) - walk,
            yWalk = (y1 / height) * (walk * 2) - walk;
        target.style.transform = 'translate(' + xWalk + 'px,' + yWalk + 'px)'
    }
}

document.addEventListener("mousemove", handleCurosr);

requestAnimationFrame(Move);

function Move() {
    cursorP.style.left = x + 'px'
    cursorP.style.top = y + 'px'
    leftx = easeOutCirc(leftx, x, 0.2)
    topx = easeOutCirc(topx, y, 0.2)
    cursor.style.left = leftx + 'px'
    cursor.style.top = topx + 'px'
    window.requestAnimationFrame(Move);
}