for (var i = 0; i<document.querySelectorAll("#li").length; i++) {
    document.querySelectorAll("#li")[i].classList.add("highscorebtn", "btn-primary", "btn-sm", "btn");
}

for (var i = 0; i<document.querySelectorAll("ol.answers").length; i++) {
    document.querySelectorAll("ol.answers")[i].classList.add("col-4");
}


function start() {
    document.getElementById("q1").style.display = "block";
}

start();

