let number = 0;

const numberText = document.getElementById("number");

function increase() {
  number++;
  numberText.textContent = number;
}

function reset() {
  number = 0;
  numberText.textContent = number;
}

// Muzik Kontrolleri

let audio = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
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

nextBtn.addEventListener("click", function () {
  audio.src = `/mp3/rain.mp3`
  audio.play();
});

backBtn.addEventListener("click", function () {
  audio.src = `/mp3/empty.mp3`
  audio.play();
});
