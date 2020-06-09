var slider = document.getElementById("myRange");
var output = document.getElementById("yee");
output.innerHTML = slider.value;

// slider.oninput = function () {
//     output.innerHTML = this.value;
// }
// slider.onchange = function () {
//     output.innerHTML = this.value;
// }

slider.addEventListener("input", function () {
    listener();
    slider.addEventListener("change", listener);
});
slider.addEventListener("change", function () {
    listener();
    slider.removeEventListener("input", listener);
}); 

function listener() {
    output.innerHTML = slider.value;
    document.getElementById("demo").style.fontSize=slider.value+"px";
    
}