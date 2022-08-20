function allWatch() {
const watch = document.querySelector('.watch');
let seconds2 = 0;
let timer;

function startSecond() {
    timer = setInterval(function() {
        seconds2++;
        watch.innerHTML = getNewSeconds(seconds2)
    }, 1000)
}

function getNewSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

document.addEventListener('click', function(e) {
    const element = e.target;

    if (element.classList.contains('start')) {
        clearInterval(timer);
        startSecond();
    }
    if (element.classList.contains('pause')) {
        clearInterval(timer);
    }
    if (element.classList.contains('stopW')) {
        clearInterval(timer);
        watch.innerHTML = '00:00:00';
        seconds2 = 0;
    }
});
}

allWatch();

