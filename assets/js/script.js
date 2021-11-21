// View high scores link at top of page
// Create 5 multiple choice questions to be answered
// Display correct or incorrect upon answer
// Next question upon correct answer 
// 10 seconds off clock for inccorect answer
// Display high score after all questions answered
var timerEL = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

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


var buildQuiz = function() {}

var showResults = function() {}

startButton.addEventListener('click', function() {
    countDown()
    buildQuiz()
});

submitButton.addEventListener("click", showResults);