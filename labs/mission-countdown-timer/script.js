let timeoutDisplay = document.getElementById('timeout-display');
let intervalDisplay = document.getElementById('interval-display');
let repeatGo = document.querySelector('#repeat-go');
console.log(repeatGo);

let startTimeout = document.getElementById('start-timeout');
let startInterval = document.getElementById('start-interval');

document.getElementById('start-interval').disabled = true;

let count = 5;



startTimeout.addEventListener('click', timeout)

function timeout() {
    timeoutDisplay.textContent = 'Getting Ready...';
    timeoutDisplay.style = `
        color: red;
    `
    setTimeout(() => {
        document.getElementById('start-interval').disabled = false;
        timeoutDisplay.textContent = 'READY';
        timeoutDisplay.style = `
            color: green;
        `
    }, 5000
    );

}

startInterval.addEventListener('click', interval)

function interval() {

    setInterval(() => {
        intervalDisplay.textContent = `${count}`;
        count--
        if (count <= 0) {
            intervalDisplay.textContent = 'Go!'
            clearInterval(interval());
            if (isCountedDown = true) {
                repeatGoArray = document.querySelectorAll('#repeat-go');
                index = 0;


            }
        };
    }, 1000
    );
}
