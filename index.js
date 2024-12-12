let player = document.querySelector('.myplayer');
let medaio = player.querySelector('video');
let controls = player.querySelector('.myplayer__controls');
let play = controls.querySelector('.play');
let rewind = controls.querySelector('.rewind');
let forward = controls.querySelector('.forward');
let timeArea = controls.querySelector('.timer');
let currentTime = timeArea.querySelector('.currentTime ');
let videoTime = timeArea.querySelector('.videoTime');
let timerbar = document.querySelector('.controls__progressbar-current');
let volumeicon = controls.querySelector('.volume .icon');
let volumebar = controls.querySelector('.volume .volume__progress');
let volumeinput = volumebar.querySelector('input');
let fullscreen = controls.querySelector('.fullscreen');




// play the video 
function playVideo() {
    videoTime.textContent = gettime(medaio.duration);
    if (medaio.paused) {
        medaio.play();
        changeicon();
    } else {
        changeicon1();
        medaio.pause();
    }
}

// rewind the video 
function rewindVideo() {
    medaio.currentTime = medaio.currentTime - 5;
}
// forward the video 
function forwardVideo() {
    medaio.currentTime = medaio.currentTime + 5;
}
timerbar.addEventListener('input', function () {
    medaio.currentTime = (this.value / 100) * medaio.duration
})
// change the icon ofthe play video 

function changeicon() {
    let icon = play.querySelector('#full');
    icon.src = 'icons/pause.png';
}
function changeicon1() {
    let icon = play.querySelector('#full');
    icon.src = 'icons/play-button-arrowhead.png';
}
// progress bar 
medaio.addEventListener('timeupdate', function () {
    currentTime.textContent = gettime(medaio.currentTime)
    let barlenght = (medaio.currentTime / medaio.duration) * 100;
    timerbar.style = `background:linear-gradient(90deg, rgba(230,126,34,1) ${barlenght}%, #e1e1e1 0%);`
    timerbar.value = barlenght;

})




// get orginal time of video
function gettime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time - (min * 60));
    let minvalue;
    let secvalue;
    if (min < 10) {
        minvalue = '0' + min;
    } else {
        minvalue = min;
    }
    if (sec < 10) {
        secvalue = '0' + sec;
    } else {
        secvalue = sec;
    }
    return minvalue + ':' + secvalue;
}



//  working with value of voumlen   5
volumeicon.addEventListener('click', function () {
    volumebar.classList.toggle('active');
})

volumeinput.addEventListener('input', function () {
    medaio.volume = this.value / 100;
    this.style = `    background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%);`

})
// full screen
fullscreen.addEventListener('click', function () {
    if (!document.fullscreenElement) {
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.mozFullScreeenElement) {
            player.mozFullScreeenElement
        } else if (player.msFullScreeenElement) {
            player.msFullScreeenElement
        } else if (player.webkitFullScreeenElement) {
            player.webkitFullScreeenElement
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.exitFullscreen) {
            document.mozCancelFullscreen();
        } else if (document.exitFullscreen) {
            document.webkitCancelFullscreen();
        } else if (document.exitFullscreen) {
            document.msCancelFullscreen();
        }
    }
})