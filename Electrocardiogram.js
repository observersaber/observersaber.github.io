var svg1 = document.getElementById('svg1').getElementsByTagName("path")[0];
var svgob = svg1.getAttribute('d').split(' ');
var svgVariable = 0;
var updown = true;

document.addEventListener('keypress', function () {
    if (svgVariable <= 4) {
        svgVariable += 1;
    }
    (updown == true) ? updown = false : updown = true;
})
var sss = setInterval(function () {
    for (var i = svgob.length - 1, y = i - 2, item; item = svgob[y - 1]; i -= 2, y -= 2) {
        svgob[i] = svgob[y]
    }
    (updown == true) ? svgob[1] = 0 - svgVariable : svgob[1] = 0 + svgVariable;
    svg1.setAttribute('d', svgob.join(' '));
    svgVariable = 0;
}, 50)