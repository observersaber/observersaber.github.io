var demo = document.getElementById('demo');
var form = document.getElementById('modinput');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    mod()
})

document.getElementById('reload').addEventListener('click', function () {
    timer.reset();
})

var data, save, t, demospan, num;
var V_word, V_dataB;

function mod() {
    var menuFrom = new FormData(form)
    timer._countdown = menuFrom.get('countdown')

    var article;
    if (menuFrom.get('countdown') != 'on') {
        article = document.getElementById("article").value;
        // 
    } else {
        article = 200
    }

    switch (menuFrom.get('mod')) {
        case 'mod1':
            getData(data.English, article)
            break;
        case 'mod2':
            var min = reMM('min'), max = reMM('max');
            if (min > max) {
                alert('數值錯誤 請重新輸入')
            } else {
                getData(data.Font, article, reMM('min'), reMM('max') + 1)
            }
            function reMM(e) {
                return parseInt(document.getElementById(e).value)
            }
            break;
        case 'mod3':
            getData(data.Chinese, article)
            break;
        default:
            break;
    }
}

function getData(data, article, min = 1, max = 1) {
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
        inputEvent = true
    }
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

get('txt.json')
    .then((res) => {
        data = res;
        mod();

    })
    .catch((res) => {
        console.error(res)
    })
