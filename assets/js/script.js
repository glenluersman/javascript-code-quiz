var timerEL = document.querySelector("#timer");
var startEl = document.querySelector("#start");

var countDown = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if(timeLeft > 0) {
            timerEL.innerText = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            timerEL.innerText = "";
            clearInterval(timeInterval);
        }
    },1000);
};

startEl.addEventListener('click', function() {
    countDown()
});
