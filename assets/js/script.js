// View high scores link at top of page
// Create 5 multiple choice questions to be answered
// Display correct or incorrect upon answer
// Next question upon correct answer 
// 10 seconds off clock for inccorect answer
// Display high score after all questions answered
var timerEL = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var questionEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");

// Create a countdown in the length of 60 seconds
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

var questionEl = function() {
    listEl.setAttribute("style", "padding 10px");
    listEl.appendChild(li1);
    li1.setAttribute()
};
