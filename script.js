// script.js

function enterSite() {
  document.getElementById("entry-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("bg-music").play();
}

let isPlaying = true;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
}
