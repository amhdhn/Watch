const secTop = document.querySelector('#secTop');
const secBottom = document.querySelector('#secBottom');
const secChangeTop = document.querySelector('#secChangeTop');
const secChangeBottom = document.querySelector('#secChangeBottom');

const minTop = document.querySelector('#minTop');
const minBottom = document.querySelector('#minBottom');
const minChangeTop = document.querySelector('#minChangeTop');
const minChangeBottom = document.querySelector('#minChangeBottom');

const hourTop = document.querySelector('#hourTop');
const hourBottom = document.querySelector('#hourBottom');
const hourChangeTop = document.querySelector('#hourChangeTop');
const hourChangeBottom = document.querySelector('#hourChangeBottom');
const timeSection = document.querySelector('.timeSection');
let time = new Date();
setFirst();
let secend = time.getSeconds();
let min = time.getMinutes();

let minChange = false;
let hour = time.getHours();
let hourChange = false;
setInterval(() => {
    settime();
}, 1000);



function settime() {
    time = new Date();
    secend = time.getSeconds();
    min = time.getMinutes();
    hour = time.getHours();
    calculateZero(secTop, secend + 1);
    calculateZero(secChangeBottom, secend + 1);
    calculateZero(secChangeTop, secend);
    secChangeTop.style.opacity = '1';
    secChangeTop.style.transform = 'rotateX(90deg)';
    secChangeTop.style.backgroundColor = '#34364f';
    secend++;
    if (secend == 60) {
        secend = 0;
        min++;
        minChange = true;
        calculateZero(secChangeBottom, 0);
        calculateZero(secTop, 0);
        if (min == 60) {
            min = 0;
            hour++;
            hourChange = true;
            calculateZero(minChangeBottom, 0);
            calculateZero(minTop, 0);
            if (hour == 24) {
                hour = 0;
                hourChange = true;
                calculateZero(hourChangeBottom, 0);
                calculateZero(hourTop, 0);
            }
        }
    }
    if (minChange) {
        calculateZero(minTop, min);
        calculateZero(minChangeBottom, min);
        calculateZero(minChangeTop, min);
        minChangeTop.style.opacity = '1';
        minChangeTop.style.transform = 'rotateX(90deg)';
        minChangeTop.style.backgroundColor = '#34364f';
    }
    if (hourChange) {
        calculateZero(hourTop, hour);
        calculateZero(hourChangeBottom, hour);
        calculateZero(hourChangeTop, hour);
        hourChangeTop.style.opacity = '1';
        hourChangeTop.style.transform = 'rotateX(90deg)';
        hourChangeTop.style.backgroundColor = '#34364f';
    }
    setTimeout(() => {
        secChangeBottom.style.opacity = '1';
        secChangeBottom.style.transform = 'rotateX(0)';
        secChangeBottom.style.backgroundColor = '#34364f';
        if (minChange) {
            minChangeBottom.style.opacity = '1';
            minChangeBottom.style.transform = 'rotateX(0)';
            minChangeBottom.style.backgroundColor = '#34364f';
        }
        if (hourChange) {
            hourChangeBottom.style.opacity = '1';
            hourChangeBottom.style.transform = 'rotateX(0)';
            hourChangeBottom.style.backgroundColor = '#34364f';
        }
    }, 200);
    setTimeout(() => {
        secChangeTop.style.opacity = '0';
        secChangeTop.style.transform = 'rotateX(0)';
        secChangeTop.style.backgroundColor = '#2e2b44';
        if (minChange) {
            minChangeTop.style.opacity = '0';
            minChangeTop.style.transform = 'rotateX(0)';
            minChangeTop.style.backgroundColor = '#2e2b44';
        }
        if (hourChange) {
            hourChangeTop.style.opacity = '0';
            hourChangeTop.style.transform = 'rotateX(0)';
            hourChangeTop.style.backgroundColor = '#2e2b44';
        }
    }, 300);
    setTimeout(() => {
        calculateZero(secBottom, secend);
        secChangeBottom.style.opacity = '0';
        secChangeBottom.style.transform = 'rotateX(-90deg)';
        secChangeBottom.style.backgroundColor = '#2e2b44';
        if (minChange) {
            calculateZero(minBottom, min);
            minChangeBottom.style.opacity = '0';
            minChangeBottom.style.transform = 'rotateX(-90deg)';
            minChangeBottom.style.backgroundColor = '#2e2b44';
            minChange = false;
        }
        if (hourChange) {
            calculateZero(hourBottom, hour);
            hourChangeBottom.style.opacity = '0';
            hourChangeBottom.style.transform = 'rotateX(-90deg)';
            hourChangeBottom.style.backgroundColor = '#2e2b44';
            hourChange = false;
        }
    }, 600);
}

function calculateZero(element, t) {
    if (t < 10)
        element.innerText = '0' + t;
    else
        element.innerText = t;
}
//set secend and minute depend real time
function setFirst() {
    let time = new Date();
    let s = time.getSeconds();
    if (s + 1 <= 10) {
        secTop.innerText = '0' + s + 1;
        secChangeBottom.innerText = '0' + s + 1;
        secBottom.innerText = '0' + s;
        secChangeTop.innerText = '0' + s;
    } else {
        secTop.innerText = s + 1;
        secChangeTop.innerText = s + 1;
        secBottom.innerText = s;
        secChangeTop.innerText = s;
    }
    s = time.getMinutes();
    if (s + 1 <= 10) {
        minTop.innerText = '0' + s + 1;
        minChangeBottom.innerText = '0' + s + 1;
        minBottom.innerText = '0' + s;
        minChangeTop.innerText = '0' + s;
    } else {
        minTop.innerText = s + 1;
        minChangeTop.innerText = s + 1;
        minBottom.innerText = s;
        minChangeTop.innerText = s;
    }
    s = time.getHours();
    if (s + 1 <= 10) {
        hourTop.innerText = '0' + s + 1;
        hourChangeBottom.innerText = '0' + s + 1;
        hourBottom.innerText = '0' + s;
        hourChangeTop.innerText = '0' + s;
    } else {
        hourTop.innerText = s + 1;
        hourChangeTop.innerText = s + 1;
        hourBottom.innerText = s;
        hourChangeTop.innerText = s;
    }
}

function fullScreen() {
    if (timeSection.requestFullscreen) {
        timeSection.requestFullscreen();
    } else if (timeSection.webkitRequestFullscreen) { /* Safari */
        timeSection.webkitRequestFullscreen();
    } else if (timeSection.msRequestFullscreen) { /* IE11 */
        timeSection.msRequestFullscreen();
    }
}