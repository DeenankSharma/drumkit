const img = document.querySelectorAll("img");
const crash = new Audio('crash.mp3');
const snare = new Audio('snare.mp3');
const kick = new Audio('kick-bass.mp3');
const tomone = new Audio('tom-1.mp3');
const tomsec = new Audio('tom-2.mp3');
const tomthird = new Audio('tom-3.mp3');
const tomfour = new Audio('tom-4.mp3');

document.addEventListener("keypress", (e) => {
    // Pause all audio
    crash.pause();
    snare.pause();
    kick.pause();
    tomone.pause();
    tomsec.pause();
    tomthird.pause();
    tomfour.pause();
    for(i=0;i<img.length;i++){
        img[i].style.height="20vh";
        img[i].style.width="20vb";
    }
    // Play corresponding audio
    switch (e.key) {
        case 'a':
            crash.currentTime = 0; // Reset audio to start
            crash.play();
            img[0].style.height="22vh";
            img[0].style.width="22vb";
            break;
        case 's':
            kick.currentTime = 0;
            kick.play();
            img[1].style.height="22vh";
            img[1].style.width="22vb";
            break;
        case 'd':
            snare.currentTime = 0;
            snare.play();
            img[2].style.height="22vh";
            img[2].style.width="22vb";
            break;
        case 'f':
            tomone.currentTime = 0;
            tomone.play();
            img[3].style.height="22vh";
            img[3].style.width="22vb";
            break;
        case 'g':
            tomsec.currentTime = 0;
            tomsec.play();
            img[4].style.height="22vh";
            img[4].style.width="22vb";
            break;
        case 'h':
            tomthird.currentTime = 0;
            tomthird.play();
            img[5].style.height="22vh";
            img[5].style.width="22vb";
            break;
        case 'j':
            tomfour.currentTime = 0;
            tomfour.play();
            img[6].style.height="22vh";
            img[6].style.width="22vb";
            break;
        default:
            break;
    }
});
