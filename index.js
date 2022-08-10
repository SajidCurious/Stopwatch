let time = document.querySelector('.time');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

// create and two empty variables
let seconds = 0;
let interval = 0;

let timer = () =>{
    seconds++;

    // format for the time
    let hrs = Math.floor(seconds/3600);
    let sec = Math.floor(seconds % 60);
    let min = Math.floor((seconds - (hrs * 3600))/60);

    if (hrs < 10){hrs = '0' + hrs};
    if (min < 10){min = '0' + min};
    if (sec < 10){sec = '0' + sec};

    time.innerText = `${hrs}:${min}:${sec}`;
}

let startTime = () =>{
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

stopTime = () =>{
    clearInterval(interval);
    interval = null;
}

resetTime = () =>{
    // stop();
    seconds = 0;
    time.innerText = `00:00:00`;
}

// event listeners
start.addEventListener('click',startTime);
stop.addEventListener('click',stopTime);
reset.addEventListener('click',resetTime);
