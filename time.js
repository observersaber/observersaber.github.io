var PausePlay = document.getElementById('PausePlay')
var wpm = document.getElementById('wpm')
var timeCD;

var timer = {
    input: document.getElementById('timing'),
    _countdown: null,
    _times: 0,
    _start: 0,
    _timer: null,
    _clearInterval: function () {
        if (this._timer) {
            this._timer = clearInterval(this._timer);
            this._times += (new Date).getTime() - this._start;
            PausePlay.className = "";
        }
    },
    onStop: null,
    start: function () {
        if (this._timer) { return; }
        var me = this;
        this._start = (new Date).getTime();
        this._timer = setInterval(function () {
            me.display(me.input, (((new Date).getTime() - me._start) + me._times) / 1000 >> 0);
        }, 100);
        PausePlay.className = "playing";
        
    },
    pause: function () {
        this._clearInterval();
    },
    stop: function (val) {
        this._clearInterval();
        if (this.onStop instanceof Function) {
            this.onStop();
        }
        inputEvent = 'stop'
        wpmshow(this._times);
    },
    reset: function () {
        this._clearInterval();
        this._times = 0;
        this.display(this.input, 0);
        wpm.style = "display:none";
    },
    display: function (el, val) {
        if (this._countdown == 'on') {
            val = timeCD - val;
        }
        var h = parseInt(val / 60 / 60),
            min = parseInt(val / 60) % 60,
            s = (val >> 0) % 60 % 60;
        this.input.innerHTML = ((h == 0) ? "" : h + ":") + bitT(min) + ":" + bitT(s);
        
        if (this._countdown == 'on' && val <= 0) {
            this.stop();
        }
    }
}

function bitT(e) {
    e = e.toString();
    return (e.length < 2) ? ("0" + e) : e
}

function wpmshow(times) {
    var x = 0, y = 0;

    var correct = 0, error = 0;

    var correct_word = 0, accX = 0;

    for (var i = 0, item; item = import_data[i]; i++) {

        if (item == " ") {
            if (y == 0) {
                correct_word += 1
            }
        }

        if (item == V_dataB[i]) {
            x += 1
            accX += 1
        } else {
            y += 1
        }

        if (item == " ") {
            if (y == 0) {
                correct += x
            } else {
                error += y
            }
            y = 0, x = 0
        }
    }

    wpm.innerHTML = 
    `<p><span>${parseInt(correct / 5 / (parseInt(times) / 1000) * 60)}WPM</span></p>
    <hr>
    正確字數：<span>${correct_word}</span><br>
    ACC：<span>${parseInt(accX / ACC * 100)}</span>%<br>
    錯誤字數：<span>${error}</span><br>
    `;

    wpm.style = "";
}