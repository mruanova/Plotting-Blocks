let arr = ["5px", "25px", "45px", "65px", "85px", "105px", "125px"],
    el = document.getElementById('selector'),
    i = 0;
function updateText() {
    el.style.top = arr[i];
    i++;
    if (i == arr.length) {
        i = 0;
    }
}
setInterval(updateText, 300);