
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    timeDisplay.textContent = dateString;
}
setInterval(refreshTime, 1000);
