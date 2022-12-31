
let button = document.querySelector('button');
let song = document.querySelector('audio');

let play = document.querySelector('.fa-play');
let pause = document.querySelector('.fa-pause');

song.duration = 0;

button.addEventListener('click', () => {
    if(song.paused) {
        song.play();
        play.style.display = 'none';
        pause.style.display = 'inline';
    }
    else {
        song.pause();
        play.style.display = 'inline';
        pause.style.display = 'none';
    }

});
