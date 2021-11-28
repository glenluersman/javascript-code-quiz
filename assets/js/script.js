// View high scores link at top of page


 


var timerEL = document.getElementById("time-counter");
var alert = document.getElementById("alert");
var info = document.getElementById("info");
var titleItem = document.getElementById("title-item");
var quizQuestions = document.getElementById("quiz-questions");
var btnStart = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var questionAnswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var displayScore = document.getElementById("display-score");
var btnSubmit = document.getElementById("btn-submit");
var btnRestart = document.getElementById("btn-restart");
var currentIndex = 0;
var timeLeft = 75;
var nextQuestion
var scoresArray = [];

// Create array of questions
var myQuestions = [
    {
        question: "What are variables used for in Javascript Programs?",
        answers: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
        correctAnswer: "Storing numbers, dates, or other values"
    },
    {
        question: "_______ tag is an extension to HTML that caan enclose any number of Javascript statements.",
        answers: ["<script>", "<body>", "<head>", "<title>"],
        correctAnswer: "<script>"
    },
    {
        question: "Using ______ statement is how you test for a specific condition.",
        answers: ["Select", "If", "Switch", "For"],
        correctAnswer: "If"
    },
    {
        question: "In Javascript, Window.prompt() method return true or false value?",
        answers: ["False", "True"],
        correctAnswer: "False"
    },
    {
        question: "What is the correct Javascript syntax to write 'Hello World'?",
        answers: ["System.out.printIn('Hello World')", "printIn ('Hello World')", "document.write('Hello World')", "response.write('Hello World')"],
        correctAnswer: "document.write('Hello World')"
    }
];

btnStart.addEventListener("click", startQuiz);

function startQuiz() {
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timer.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestion = myQuestions[currentIndex]
    console.log(nextQuestion.question);
    
    displayQuestion(nextQuestion)
    
    countDown()
};

function countDown() {
    
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
        timer.innerText = timeLeft
        timeLeft--;
        } else {
            endgame()
        }
    },1000);
};

// Display first question
function displayQuestion(myQuestions) {
    titleItem.innerText = myQuestions.question
    Array.from(myQuestions.answers).forEach(element => {
      var button = document.createElement("button")
    button.className = "answerbtn btn-primary btn-block text-left"
    button.innerText = element
    questionAnswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
};

// Next question upon answer
function displaynextQuestion(event) {
    currentIndex++
    if(currentIndex < myQuestions.length){
        correction(event.target.innerText == nextQuestion.correctAnswer)
        questionAnswers.innerHTML=""
        if(currentIndex < myQuestions.length){    
            nextQuestion= myQuestions[currentIndex]
            displayQuestion(nextQuestion)  
        }else {
            currentIndex = 0
            displayQuestion(nextQuestion)  
        }   
    }else{
        endgame()    
    }
};

// Display correct or incorrect upon answer
function correction(response) {
    
    if(response){
        alert.innerText= "Correct"
    }else {
        alert.innerText="Incorrect"
        // 10 seconds off clock for inccorect answer
        timeLeft = timeLeft -10
        timer.innerHTML = timeLeft
    }
    setTimeout(function(){
        alert.innerText=""
    }, 1000);
    
};
function endgame() {
    myScore.innerText = timeLeft
    displayScore.classList.remove("d-none")
    timer.classList.add("d-none")
    quizQuestions.classList.add("d-none")
};

var highScores = function(a, b) {
    var userInput = {
        initials: a,
        userScore: b
    };
    scoresArray.push(userInput);

    localStorage.setItem("userInput", JSON.stringify(scoresArray));
};

btnSubmit.addEventListener("click", function() {
    var name = document.getElementById("input-score").value
    
    highScores(name, timeLeft)
});

btnRestart.addEventListener("click", function() {
    location.href = "index.html";
});