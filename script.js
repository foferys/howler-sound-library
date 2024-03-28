
var sound = new Howl({
    src: ['leap-motiv-113893.mp3']
});
const linesCont = document.querySelector(".music-lines2")
const lines = document.querySelectorAll(".line2")

let playing = false;
linesCont.addEventListener("click", function() {
    lines.forEach(line => {
        if(playing==false) {
            line.classList.toggle("animate2")
            sound.play();
            playing=true;
        }else{
            line.classList.toggle("animate2")
            sound.pause();
            playing=false;
        }
    });
})


  