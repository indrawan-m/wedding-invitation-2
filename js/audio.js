var myAudio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
    playIcon.style.display = "block";  // Tampilkan ikon Play
    pauseIcon.style.display = "none";  // Sembunyikan ikon Pause
  } else {
    myAudio.play();
    playIcon.style.display = "none";  // Sembunyikan ikon Play
    pauseIcon.style.display = "block";  // Tampilkan ikon Pause
  }
}

myAudio.onplaying = function() {
  isPlaying = true;
  playIcon.style.display = "none";  // Sembunyikan ikon Play saat audio diputar
  pauseIcon.style.display = "block";  // Tampilkan ikon Pause saat audio diputar
};

myAudio.onpause = function() {
  isPlaying = false;
  playIcon.style.display = "block";  // Tampilkan ikon Play saat audio dijeda
  pauseIcon.style.display = "none";  // Sembunyikan ikon Pause saat audio dijeda
};