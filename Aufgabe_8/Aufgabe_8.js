window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("click", function () { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector("#button5").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#microphone").addEventListener("click", RecordBeat);
    document.querySelector("#trash").addEventListener("click", DeleteBeat);
    document.querySelector("#playbutton").addEventListener("click", playBeat);
});
var beat = ["kick.mp3", "snare.mp3", "hihat.mp3", "F.mp3", "G.mp3", "A.mp3", "C.mp3"];
var record = false;
//Audio Funktion//
function playSample(myMp3) {
    var sound = new Audio("assets/" + myMp3);
    sound.play();
    if (record == true) {
        beat.push(myMp3);
    }
}
var tempo;
var index = 0;
function playBeat() {
    if (document.getElementById("playbutton").classList.contains("fa-play")) {
        document.getElementById("playbutton").classList.remove("fa-play");
        document.getElementById("playbutton").classList.add("fa-pause");
        tempo = setInterval(newBeat, 300);
        record = false;
        console.log("play");
        //Stop//
    }
    else {
        document.getElementById("playbutton").classList.remove("fa-pause");
        document.getElementById("playbutton").classList.add("fa-play");
        clearInterval(tempo);
        console.log("pause");
    }
}
function newBeat() {
    playSample(beat[index]);
    index += 1;
    if (index > (beat.length - 1))
        index = 0;
}
function DeleteBeat() {
    beat.length = 0;
}
function RecordBeat() {
    record = true;
}
//# sourceMappingURL=Aufgabe8.js.map