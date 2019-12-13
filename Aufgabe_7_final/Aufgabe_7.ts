window.addEventListener("load", function(){
    document.querySelector("#button1").addEventListener("click", function (){ playsample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("click", function (){ playsample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("click", function (){ playsample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("click", function (){ playsample("F.mp3"); });
    document.querySelector("#button5").addEventListener("click", function (){ playsample("G.mp3"); });
    document.querySelector("#button6").addEventListener("click", function (){ playsample("A.mp3"); });
    document.querySelector("#button7").addEventListener("click", function (){ playsample("C.mp3"); });
    document.querySelector("#button8").addEventListener("click", function (){ playsample("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("click", function (){ playsample("laugh-2.mp3"); });
})
function playsample(mp3):void {
    var sound:HTMLAudioElement = new Audio("assets/" + mp3);
    sound.play();
}

//Aufgabe_7.2

function playBeat (myBeat: string){
    var sound:HTMLAudioElement = new Audio ("assets/" + myBeat);
    sound.play();
}
function startBeat(){
    var kick = setInterval(myBeat, 1000)
    var index: number = 0;
    var beat: string [] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/A.mp3", "assets/laugh-2.mp3"];
    function myBeat(){
        var myMusic:HTMLAudioElement = new Audio (beat[index]);
        myMusic.play();
        index += 1;
        if (index>=9) index = 0;
    };
}
window.addEventListener("load", function(){
    document.querySelector(".play").addEventListener("click", startBeat)
})
