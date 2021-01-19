// instead of adding a class to all list in questions, i used a for loop
for (var i = 0; i<document.querySelectorAll("#li").length; i++) {
    document.querySelectorAll("#li")[i].classList.add("highscorebtn", "btn-primary", "btn-sm", "btn");
}
// i used another for loop to keep the answers in one column
for (var i = 0; i<document.querySelectorAll("ol.answers").length; i++) {
    document.querySelectorAll("ol.answers")[i].classList.add("col-4");
}

var timerElement = document.querySelector(".timer-count");
var timerCount;

// this function is what allows the first question to appear and timer to start clocking down
function start() {
    document.getElementById("q1").style.display = "block";
    timerCount = 75;
    timeStart();
};

function timeStart (){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
      }, 1000);
};

// this function starts the quiz
start();

