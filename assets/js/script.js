// instead of adding a class to all list in questions, i used a for loop
for (var i = 0; i<document.querySelectorAll("#li").length; i++) {
    document.querySelectorAll("#li")[i].classList.add("highscorebtn", "btn-primary", "btn-sm", "btn");
}

// i used another for loop to keep the answers in one column
for (var i = 0; i<document.querySelectorAll("ol.answers").length; i++) {
    document.querySelectorAll("ol.answers")[i].classList.add("col-4");
}

// variables for timer
var timerElement = document.querySelector(".timer-count");
var timerCount;

var highScore = 0;

// this function is what allows the first question to appear and timer to start clocking down
function start() {
    document.getElementById("q1").style.display = "block";
    timerCount = 75;
    timeStart();
    correct();
};

function timeStart (){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
      }, 1000);
};

function nextQuestion(){
    setInterval(function(){
        document.querySelector('.correct').style.display = "block";
    }, 0);
    setInterval(function(){
        document.getElementById("q1").style.display = "none";
    }, 1000);
    setInterval(function(){
        document.getElementById("q2").style.display = "block";
    }, 1000);
    setInterval(function(){
        document.querySelector('.correct').style.display = "none";
    }, 1000);
    
}

function correct(){
    for (var i = 0; i<document.querySelectorAll("li.answer1").length; i++) {
            document.querySelectorAll("li.answer1")[2].addEventListener("click", function(){
            nextQuestion();
        })
    }
    highScore += 10;
};


// this function starts the quiz
start();

