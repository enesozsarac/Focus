let number = 0;

function increase() {
  number++;
  document.getElementById("number").textContent = number;
}

// Muzik Kontrolleri

let audio = document.getElementById("music");
let playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  isPlaying = !isPlaying;
});
