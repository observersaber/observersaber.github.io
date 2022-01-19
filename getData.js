var demo = document.getElementById('demo');
var form = document.getElementById('modinput');


form.addEventListener("submit", function (e) {
    e.preventDefault();
    mod()
})

document.getElementById('reload').addEventListener('click', function () {
    getData(save.data, save.article, save.min, save.max)
})

var data, save, t, demospan, num;
var V_word, V_dataB;

function mod() {
    timeCD = document.getElementsByClassName('selected')[0].dataset.timeconfig;
    
    var menuFrom = new FormData(form)
    timer._countdown = menuFrom.get('countdown')

    // var TimeCD = document.getElementById('TimeCD').getElementsByTagName('span')

    var modNumber = menuFrom.get('mod'),
        json = "",
        article = 0

    if (menuFrom.get('countdown') != 'on') {
        article = document.getElementById("article").value;
    } else {
        article = 300
    }

    var min = 1, max = 1;

    switch (modNumber) {
        case 'mod1':
            json = 'data/english.json'
            break;
        case 'mod2':
            json = 'data/font.json'
            min = menuFrom.get('min')
            max = menuFrom.get('max')
            break;
        case 'mod3':
            json = 'data/chinese.json'
            break;
        default:
            break;
    }

    get(json)
        .then((res) => {
            getData(res.word, article, min, max)
        })
        .catch((res) => {
            console.error(res)
        })
}

function getData(data, article, min, max) {
    import_data = "", ACC = 0;
    t = false
    save = { data: data, article: article, min: min, max: max, N: 0 }

    var word = [], bit = "", all = ""

    for (var j = 0; j < article; j++) {
        word[j] = "";

        for (var i = 0; i < Math.floor(Math.random() * (max - min)) + min; i++) {
            var x = Math.floor(Math.random() * data.length);
            word[j] += data[x];
        }
        bit += word[j] + " ";
    }

    bit = [].slice.call(bit);
    V_word = word
    V_dataB = bit

    for (var i = 0, item; item = bit[i]; i++) {
        all += "<span>" + bit[i] + "</span>"
    }

    demo.style.marginTop = '0px';
    demo.innerHTML = all;
    demospan = demo.getElementsByTagName("span")
    demospan[0].className = "foc";
    save.bit = bit
    t = true

    if (menu.className != 'on') {
        main.className = ''
    }

    inputEvent = 'true'
    timer.reset()
}

function get(url) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            } else {
                reject(new Error(req))
            }
        };
        req.send();
    });
}
mod()