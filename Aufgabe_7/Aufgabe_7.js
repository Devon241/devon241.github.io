window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", play1);
});
window.addEventListener("load", function () {
    document.querySelector("#button2").addEventListener("click", play2);
});
window.addEventListener("load", function () {
    document.querySelector("#button3").addEventListener("click", play3);
});
window.addEventListener("load", function () {
    document.querySelector("#button4").addEventListener("click", play4);
});
window.addEventListener("load", function () {
    document.querySelector("#button5").addEventListener("click", play5);
});
window.addEventListener("load", function () {
    document.querySelector("#button6").addEventListener("click", play6);
});
window.addEventListener("load", function () {
    document.querySelector("#button7").addEventListener("click", play7);
});
window.addEventListener("load", function () {
    document.querySelector("#button8").addEventListener("click", play8);
});
window.addEventListener("load", function () {
    document.querySelector("#button9").addEventListener("click", play9);
});
function play1() {
    var sound = new Audio("assets/kick.mp3");
    sound.play();
}
function play2() {
    var sound = new Audio("assets/snare.mp3");
    sound.play();
}
function play3() {
    var sound = new Audio("assets/hihat.mp3");
    sound.play();
}
function play4() {
    var sound = new Audio("assets/F.mp3");
    sound.play();
}
function play5() {
    var sound = new Audio("assets/G.mp3");
    sound.play();
}
function play6() {
    var sound = new Audio("assets/A.mp3");
    sound.play();
}
function play7() {
    var sound = new Audio("assets/C.mp3");
    sound.play();
}
function play8() {
    var sound = new Audio("assets/laugh-1.mp3");
    sound.play();
}
function play9() {
    var sound = new Audio("assets/laugh-2.mp3");
    sound.play();
}
//Aufgabe_7.2
function playBeat(myBeat) {
    var sound = new Audio("assets/" + myBeat);
    sound.play();
}
function startBeat() {
    var kick = setInterval(myBeat, 300);
    var index = 0;
    var beat = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/A.mp3", "assets/laugh-2.mp3"];
    function myBeat() {
        var myMusic = new Audio(beat[index]);
        myMusic.play();
        index += 1;
        if (index < 9)
            index = 0;
    }
}
window.addEventListener("load", function () {
    document.querySelector(".play").addEventListener("click", startBeat);
});
//# sourceMappingURL=Aufgabe_7.js.map