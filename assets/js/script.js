// instead of adding a class to all list in questions, i used a for loop
for (var i = 0; i<document.querySelectorAll("#li").length; i++) {
    document.querySelectorAll("#li")[i].classList.add("highscorebtn", "btn-primary", "btn-sm", "btn");
};

// i used another for loop to keep the answers in one column
for (var i = 0; i<document.querySelectorAll("ol.answers").length; i++) {
    document.querySelectorAll("ol.answers")[i].classList.add("col-4");
};

// variables for timer
var timerElement = document.querySelector(".timer-count");
var timerCount;
// variables for points
var points = document.querySelector(".points");
var highScore = 0;
// varibles for right and wrong
var correct = document.querySelector('.correct');
var wrong = document.querySelector('.wrong');
// variables for questions
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");

// this function is what allows the first question to appear and timer to start clocking down
function start() {
    q1.style.display = "block";
    timerCount = 75;
    timeStart();
    answer1();
};

// this counts the timer down
function timeStart (){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
      }, 1000);
};

function nextQuestion(){
    setInterval(function(){
        correct.style.display = "block";
    }, 0);
    setInterval(function(){
        q1.style.display = "none";
    }, 1000);
    setInterval(function(){
        q2.style.display = "block";
    }, 1000);
    setInterval(function(){
        correct.style.display = "none";
    }, 1000);

};

function answer1(){
    for (var i = 0; i<document.querySelectorAll("li.answer1").length; i++) {
            if ((document.querySelectorAll("li.answer1")[2].addEventListener("click", function(){
                nextQuestion();
            }))) {
        }   else if ((document.querySelectorAll("li.answer1")[0].addEventListener("click", function(){
            wrongNextQuestion();
        }))) {
        }   else if ((document.querySelectorAll("li.answer1")[1].addEventListener("click", function(){
            wrongNextQuestion();
        }))) {
        }   else if ((document.querySelectorAll("li.answer1")[3].addEventListener("click", function(){
            wrongNextQuestion();
        }))) {
        }
    };
};

function wrongNextQuestion(){
    setInterval(function(){
        wrong.style.display = "block";
    }, 0);
    setInterval(function(){
        q1.style.display = "none";
    }, 1000);
    setInterval(function(){
        q2.style.display = "block";
    }, 1000);
    setTimeout(function(){
        wrong.style.display = "none";
    }, 1000);
};

function addPoints(){
    highScore =+ 10;
    points.textContent = highScore;
};

function minusPoints(){
    highScore =- 10;
    points.textContent = highScore;
}

console.log(highScore);

// this function starts the quiz
start();

