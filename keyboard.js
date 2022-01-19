document.addEventListener('keydown', function (e) {
    var e = e || window.event
    test(e, true)
})

document.addEventListener('keyup', function (e) {
    var e = e || window.event
    test(e, false)
})

function test(e, tf) {
    if(!document.getElementById('k' + e.keyCode + '_' + e.location)){return}
    var x = document.getElementById('k' + e.keyCode + '_' + e.location);
    (tf) ? x.classList.add('down') : x.classList.remove('down')
}