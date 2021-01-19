for (var i = 0; i<document.querySelectorAll("li").length; i++) {
    document.querySelectorAll("li")[i].classList.add("highscorebtn", "btn-primary", "btn-sm", "btn");
}

for (var i = 0; i<document.querySelectorAll("ol").length; i++) {
    document.querySelectorAll("ol")[i].classList.add("col-4");
}



// var timerElement = document.querySelector(".timer-count");

// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }
