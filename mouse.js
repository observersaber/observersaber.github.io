var cursor = document.getElementById('cursor')
var cursorP = document.getElementById('cursorP')
var hasClass = function (elem, className) {
    var reg = new RegExp('(^|\\s+)' + className + '($|\\s+)');
    return reg.test(elem.className);
};


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

    if (hasClass(cursor, 'hidden')) {
        leftx = e.clientX
        topx = e.clientY
        cursor.classList.remove('hidden')
        cursorP.classList.remove('hidden')
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


document.addEventListener('mousedown', function () {
    cursor.classList.add('active')
})

document.addEventListener('mouseup', function () {
    cursor.classList.remove('active')
})

document.body.addEventListener('mouseleave', mouseAddHidden)

document.addEventListener('mouseover', function (e) {
    var e = e || window.event,
        target = e.srcElement || e.target;

    if (target.getAttribute("data-hover")) {
        cursor.classList.add(target.getAttribute('data-hover'))
        cursorP.classList.add(target.getAttribute('data-hover'))
    }
})

document.addEventListener('mouseout', function (e) {
    var e = e || window.event,
        target = e.srcElement || e.target;
    if (target.getAttribute("data-hover")) {
        cursor.classList.remove(target.getAttribute('data-hover'))
        cursorP.classList.remove(target.getAttribute('data-hover'))
    }
})

function mouseAddHidden() {
    cursor.classList.add('hidden')
    cursorP.classList.add('hidden')
}