var fsRange = document.getElementById("fsRange");

fsRange.addEventListener("input", function () {
    listener();
    fsRange.addEventListener("change", listener);
});
fsRange.addEventListener("change", function () {
    listener();
    fsRange.removeEventListener("input", listener);
});

function listener() {
    document.getElementsByClassName("main")[0].style.fontSize = fsRange.value + "px";
    focPosition();
}