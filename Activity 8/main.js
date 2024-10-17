/* const audio = document.querySelector('audio');
const playButton = document.querySelector('.play');
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.fordward');
const musics = ['music1.mp3', 'music2.mp3', 'music3.mp3'];
let currentMusic = 0;

function loadTrack(elem) {
    audio.src = musics[elem];
    audio.load();
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa fa-pause"></i>';
    }
}

/* function goBackward() {
    if(currentMusic >= musics.length - 1){
        currentMusic = 0;
        loadTrack(currentMusic);
        audio.play();
    }else{
    loadTrack(currentMusic);
    audio.play();
    }
} */

/* function goBackward() {
currentMusic = (currentMusic + musics.length - 1 ) % musics.length;
    loadTrack(currentMusic);
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
} *

function goBackward() {
    currentMusic = currentMusic - 1;
    if(currentMusic === -1){
        currentMusic = songs.length -1;
        loadTrack(currentMusic);
    }
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
}

function goForward() {
    currentMusic = (currentMusic + 1) % musics.length;
    loadTrack(currentMusic);
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
}

// Si la canción está en play y acaba, ir a la siguiente
audio.addEventListener('ended', goForward);

/**
 * El evento se llama ended, el método onended
 * 
 * audio.onended = function() {
 * currentMusic = ++currentMusic % musics.length
 * audio.src = musics[currentMusic];
 * audio.play();
 * }
 *
playButton.addEventListener('click', togglePlay);
backwardButton.addEventListener('click', goBackward);
forwardButton.addEventListener('click', goForward);

function playSong(songNumber = 0, forcePlay = false){
    const paused = audio.paused;
    audio.src = musics[songNumber];
    (!paused || forcePlay) && player.play();

    const songsList = document.querySelectorAll('#playlist li')
}

backward.onclick = function(){
    currentMusic--;
    if(currentMusic === -1){
        currentMusic = musics.length - 1;
    }
    playSong(currentMusic);
}

forwardButton.onclick = function(){
    currentMusic = ++currentMusic % musics.length;
    playSong(currentMusic);
}

playButton.onended = function(){
    currentMusic = ++currentMusic % musics.length;
    playSong(currentMusic, true);
}


















// Asignar eventos a los botones
playButton.addEventListener('click', togglePlay); //Reproducir/Pausar
backwardButton.addEventListener('click', goBackward); //Retroceder
forwardButton.addEventListener('click', goForward); //Avanzar

loadTrack(currentMusic);
 */

/* <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Activity 8: the audio tag + events</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
      .controls div{
        float: left;
        margin: 10px;
        border: 3px solid #000;
        font-size: 2em;
        text-align: center;
        width: 50px;
        border-radius: 5px;
      }
      git rem
    </style>
  </head>
  <body>
    <h1>Activity 8: the audio tag + events</h1>
    <p>This is a music player with a playlist</p>
    <ul>
      <li>Add a play icon to the item in the playlist that is currently playing.</li>
      <li>Add controls to <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/audio">audio tag</a>: play/pause, go back, go forward.</li>
      <li>When 1 audio ends the following one must estart playing automatically</li>
    </ul>

    <ol id="playlist">
      <li>music1.mp3 <i class="fa fa-play"></i></li>
      <li>music2.mp3 <i class="fa fa-play hidden"></i></li>
      <li>music3.mp3 <i class="fa fa-play hidden"></i></li>
    </ol>
    <audio controls id="audioPlayer" src="">
     Your browser does not support the audio tag.
    </audio>
    <div class="controls">
      <div class="play"><i class="fa fa-play"></i></div>
      <div class="backward"><i class="fa fa-step-backward"></i></div>
      <div class="forward"><i class="fa fa-step-forward"></i></div>
    </div>
    <script> */
      const songs = ["brasil.ogg", "colombia.ogg", "espana.ogg"];
      const player = document.getElementById('audioPlayer');
      const play = document.querySelector('.play');
      const backward = document.querySelector('.backward');
      const forward = document.querySelector('.forward');

      let currentSong = 0;

      player.src= songs[currentSong];

      play.onclick =  function(e){
        if(player.paused ){
          player.play();
          e.target.classList.replace('fa-play', 'fa-pause');
        } else {
          player.pause();
          e.target.classList.replace('fa-pause', 'fa-play');
        } 
      }

      function playSong(songNumber = 0, forcePlay = false){
        const paused = player.paused;
        player.src= songs[songNumber];
        (!paused || forcePlay) && player.play();
        
        const playIcons = document.querySelectorAll('#playlist li i.fa-play');

        playIcons.forEach(playIcon => playIcon.classList.add('hidden'));
        playIcons[songNumber].classList.remove('hidden');
      }

      backward.onclick = function(){
        currentSong--;
        if(currentSong === -1){
          currentSong = songs.length - 1;
        }
        playSong(currentSong);
      }

      forward.onclick = function(){
        currentSong = ++currentSong % songs.length;
        playSong(currentSong);
      }

      player.onended = function(){
        currentSong = ++currentSong % songs.length;
        playSong(currentSong, true);
      }
