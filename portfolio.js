window.onload = () =>
    document.body.classList.remove('loading');

// bg music
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bg-music");
    const icon = document.getElementById("javaUwu");

    icon.addEventListener("click", () => {
        if(music.paused) {
            music.play();
            icon.style.color = "lime";
        } else {
            music.pause();
            icon.style.color = "brown";
        }
    });

});