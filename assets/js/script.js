// View high scores link at top of page
// Display first question
// Display correct or incorrect upon answer
// Next question upon correct answer 
// 10 seconds off clock for inccorect answer
// Display high score after end of quiz
var timerEL = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
// Create array of questions
var myQuestions = [
    {
        question: "What are variables used for in Javascript Programs?",
        answers: {
            a: "Storing numbers, dates, or other values",
            b: "Varying randomly",
            c: "Causing high-school algebra flashbacks",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "_______ tag is an extension to HTML that caan enclose any number of Javascript statements.",
        answers: {
            a: "<script>",
            b: "<body>",
            c: "<head>",
            d: "<title>"
        },
        correctAnswer: "a"
    },
    {
        question: "Using ______ statement is how you test for a specific condition.",
        answers: {
            a: "Select",
            b: "If",
            c: "Switch",
            d: "For"
        },
        correctAnswer: "b"
    },
    {
        question: "In Javascript, Window.prompt() method return true or false value?",
        answers: {
            a: "False",
            b: "True"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct Javascript syntax to write 'Hello World'?",
        answers: {
            a: "System.out.printIn('Hello World')",
            b: "printIn ('Hello World')",
            c: "document.write('Hello World')",
            d: "response.write('Hello World')"
        },
        correctAnswer: "c"
    }
];

// Create a countdown in the length of 60 seconds
var countDown = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if(timeLeft > 0) {
            timerEL.innerText = timeLeft + " Seconds Remaining";
            timeLeft--;
        } else {
            timerEL.innerText = "0 Seconds Remaining";
        }
    },1000);
};


var buildQuiz = function() {}

var showResults = function() {}

startButton.addEventListener('click', function() {
    countDown()
    buildQuiz()
});