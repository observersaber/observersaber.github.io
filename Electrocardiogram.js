var eltd = document.getElementById('eltd').getElementsByTagName("path")[0];
var eltdD = eltd.getAttribute('d').split(' ');
var eltdUL = 0;
var eltdUD = true;

var yee = 0, yeee = true ,xxx;

document.addEventListener('keypress', function () {
    if (eltdUL <= 5) {
        eltdUL += 1;
    }
    eltdUD = (eltdUD == true) ? false : true;

    yee = eltdD.length - 1;

    if (yeee == true) {
        
        yeee = false;
        xxx = setInterval(sss, 50);
    }
})

function sss() {
    for (var i = eltdD.length - 1, item; item = eltdD[i - 5]; i -= 3) {
        eltdD[i] = eltdD[i - 3]
    }

    (eltdUD == true) ? eltdD[2] = 5 - eltdUL : eltdD[2] = 5 + eltdUL;

    eltd.setAttribute('d', eltdD.join(' '));

    eltdUL = 0;

    
    if (yee < 0) {
        yeee = true;
        clearInterval(xxx);
    }else{yee -= 3;}
}