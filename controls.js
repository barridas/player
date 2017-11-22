var mytrack = document.getElementById('mytrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');
var volumeslider = document.getElementById('volumeslider');
mytrack.play();
playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click',muteOrUnmute,false);
volumeslider.addEventListener('change',setVolume,false);

function playOrPause() {
    if (!mytrack.paused && !mytrack.ended) {
        mytrack.pause();
        playButton.style.backgroundImage = 'url(../img/play.png)';
    } else {
        mytrack.play();
        playButton.style.backgroundImage = 'url(../img/pause.png)';
    }
}

function muteOrUnmute(){
    if(mytrack.muted == true){
        mytrack.muted = false;
        muteButton.style.backgroundImage = 'url(../img/unmute.png)';
        volumeslider.value = 20; 
    }
    else{
        mytrack.muted = true;
        muteButton.style.backgroundImage = 'url(https://drive.google.com/file/d/1IqO-G_x4t_XUcSzP-emkwPftTHYK1vFb/view?usp=sharing)';
        volumeslider.value = 0;
    }
}

function setVolume(){
    mytrack.volume = volumeslider.value / 100;
}

