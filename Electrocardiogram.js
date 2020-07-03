var eltd = {
    arr: document.getElementById('eltd').getElementsByTagName("path")[0].getAttribute('d').split(' '),
    upperLimit: 0,
    direction: 'up',
    stop: 0,
    enable: true
}

document.addEventListener('keypress', function () {
    if (eltd.upperLimit <= 5) {
        eltd.upperLimit += 1;
    }
    eltd.direction = (eltd.direction == 'up') ? 'down' : 'up';

    eltd.stop = eltd.arr.length - 1;

    if (eltd.enable == true) {
        eltd.enable = false;

        var Electrocardiogram = setInterval(function () {
            for (var i = eltd.arr.length - 1, item; item = eltd.arr[i - 5]; i -= 3) {
                eltd.arr[i] = eltd.arr[i - 3]
            }

            (eltd.direction == 'up') ? eltd.arr[2] = 5 - eltd.upperLimit : eltd.arr[2] = 5 + eltd.upperLimit;

            document.getElementById('eltd').getElementsByTagName("path")[0].setAttribute('d', eltd.arr.join(' '));

            eltd.upperLimit = 0;

            if (eltd.stop < 0) {
                eltd.enable = true;
                clearInterval(Electrocardiogram);
            } else {
                eltd.stop -= 3;
            }
        }, 50)
    }
})
