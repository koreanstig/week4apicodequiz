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
var q1 = document.querySelector("#q1");
var q2 = document.getElementById("q2");
var q3 = document.querySelector("#q3");
var q4 = document.querySelector("#q4");
var q5 = document.querySelector("#q5");
var q6 = document.querySelector("#q6");
var user = document.querySelector(".userEntry");
// variables for answers
var lianswer1 = document.querySelectorAll("li.answer1")
var lianswer2 = document.querySelectorAll("li.answer2")
var lianswer3 = document.querySelectorAll("li.answer3")
var lianswer4 = document.querySelectorAll("li.answer4")
var lianswer5 = document.querySelectorAll("li.answer5")
// this function is what allows the first question to appear and timer to start clocking down
function start() {
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
function correctOn(){
    correct.classList.add("surprise");  
    setTimeout(function(){
        correct.classList.remove("surprise");
    }, 1000);  
    highScore =+ 10;
    points.innerHTML = highScore;
};
function wrongOn(){
    wrong.classList.add("surprise");  
    setTimeout(function(){
        wrong.classList.remove("surprise");
    }, 1000);
    timer = setInterval(function() {
        newTimer = timerCount - 10;
        timerElement.textContent = newTimer;
    }, 0);
    highScore =- 10;
    points.innerHTML = highScore;       
};
function q1displayoff(){
    setInterval(function(){
        q1.classList.add("byebye");
    }, 1000);       
};
function q2displayon(){
    setInterval(function(){
        q2.classList.add("surprise");
    }, 1000);
};
function q2displayoff(){
    setInterval(function(){
        q2.classList.add("byebye");
    }, 1000);
};
function q3displayon(){
    setInterval(function(){
        q3.classList.add("surprise");
    }, 1000);
};
function q3displayoff(){
    setInterval(function(){
        q3.classList.add("byebye");
    }, 1000);
};
function q4displayon(){
    setInterval(function(){
        q4.classList.add("surprise");
    }, 1000);
};
function q4displayoff(){
    setInterval(function(){
        q4.classList.add("byebye");
    }, 1000);
};
function q5displayon(){
    setInterval(function(){
        q5.classList.add("surprise");
    }, 1000);
};
function q5displayoff(){
    setInterval(function(){
        q5.classList.add("byebye");
    }, 1000);
};
function q6displayon(){
    setInterval(function(){
        q6.classList.add("surprise");
    }, 1000);
    setInterval(function(){
        user.classList.add("surprise");
    }, 1000);
};
function answer1(){
    for (var i = 0; i < lianswer1.length; i++) {
            if ((lianswer1[2].addEventListener("click", function(){
                q1displayoff();
                nextQuestion1();
            }))) {
        }   else if ((lianswer1[0].addEventListener("click", function(){
                wrongNextQuestion1();
                q1displayoff();
        }))) {
        }   else if ((lianswer1[1].addEventListener("click", function(){
                wrongNextQuestion1();
                q1displayoff();
        }))) {
        }   else if ((lianswer1[3].addEventListener("click", function(){
                wrongNextQuestion1();
                q1displayoff();
        }))) {
        }
    };
};
function nextQuestion1(){
    q2displayon();
    correctOn();
    answer2();
};
function wrongNextQuestion1(){
    q2displayon();
    wrongOn();
    answer2();
};
function answer2(){
    for (var i = 0; i < lianswer2.length; i++) {
            if ((lianswer2[2].addEventListener("click", function(){
                nextQuestion2();
                q2displayoff();
            }))) {
        }   else if ((lianswer2[0].addEventListener("click", function(){
                wrongNextQuestion2();
                q2displayoff();
        }))) {
        }   else if ((lianswer2[1].addEventListener("click", function(){
                wrongNextQuestion2();
                q2displayoff();
        }))) {
        }   else if ((lianswer2[3].addEventListener("click", function(){
                wrongNextQuestion2();    
                q2displayoff();
        }))) {
        }
    };
};
function nextQuestion2(){
    q3displayon();
    correctOn();
    answer3();
};
function wrongNextQuestion2(){
    q3displayon();
    wrongOn();
    answer3();
};
function answer3(){
    for (var i = 0; i < lianswer3.length; i++) {
            if ((lianswer3[3].addEventListener("click", function(){
                nextQuestion3();
                q3displayoff();
            }))) {
        }   else if ((lianswer3[0].addEventListener("click", function(){
                wrongNextQuestion3();
                q3displayoff();
        }))) {
        }   else if ((lianswer3[1].addEventListener("click", function(){
                wrongNextQuestion3();
                q3displayoff();
        }))) {
        }   else if ((lianswer3[2].addEventListener("click", function(){
                wrongNextQuestion3();
                q3displayoff();
        }))) {
        }
    };
};
function nextQuestion3(){
    q4displayon();
    correctOn();
    answer4();
};
function wrongNextQuestion3(){
    q4displayon();
    wrongOn();
    answer4();
};
function answer4(){
    for (var i = 0; i < lianswer4.length; i++) {
            if ((lianswer4[2].addEventListener("click", function(){
                nextQuestion4();
                q4displayoff();
            }))) {
        }   else if ((lianswer4[0].addEventListener("click", function(){
                wrongNextQuestion4();
                q4displayoff();
        }))) {
        }   else if ((lianswer4[1].addEventListener("click", function(){
                wrongNextQuestion4();
                q4displayoff();
        }))) {
        }   else if ((lianswer4[3].addEventListener("click", function(){
                wrongNextQuestion4();
                q4displayoff();
        }))) {
        }
    };
};
function nextQuestion4(){
    q5displayon();
    correctOn();
    answer5();
};
function wrongNextQuestion4(){
    q5displayon();
    wrongOn();
    answer5();
};
function answer5(){
    for (var i = 0; i < lianswer5.length; i++) {
            if ((lianswer2[3].addEventListener("click", function(){
                nextQuestion5();
                q5displayoff();
            }))) {
        }   else if ((lianswer5[0].addEventListener("click", function(){
                wrongNextQuestion5();
                q5displayoff();
        }))) {
        }   else if ((lianswer5[1].addEventListener("click", function(){
                wrongNextQuestion5();
                q5displayoff();
        }))) {
        }   else if ((lianswer5[2].addEventListener("click", function(){
                wrongNextQuestion5();
                q5displayoff();
        }))) {
        }
    };
};
function nextQuestion5(){
    correctOn();
    q6displayon();
};
function wrongNextQuestion5(){
    wrongOn();
    q6displayon();
};   
// this function starts the quiz
start();