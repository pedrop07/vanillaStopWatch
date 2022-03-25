window.onload = function () {
    let sec = 00;
    let milli = 00;
    let min = 00;
    const seconds = document.getElementById('seconds');
    const milliseconds = document.getElementById('milliseconds');
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    let Interval;
    const minutes = document.getElementById('minutes');

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        milli = '00';
        sec = '00:';
        milliseconds.innerHTML = milli;
        seconds.innerHTML = sec;
        minutes.remove();
    }

    function startTime() {
        milli++;
        
        if (milli <= 9){
            milliseconds.innerHTML = '0' + milli;
        } else if (milli > 9) {
            milliseconds.innerHTML = milli;
        } else if (milli > 99) {
            sec++;
            seconds.innerHTML = '0' + sec + ':';
            milli = 0;
            milliseconds.innerHTML = '0' + milli;
        } 
        
        if (sec === 0) {
            seconds.innerHTML = sec + '0:';
        } else if (sec > 9) {
            seconds.innerHTML = sec + ':';
        } else if (sec > 60) {
            min++;
            minutes.innerHTML = '0' + min + ':';
            sec = 0;
            seconds.innerHTML = '0' + sec;
        }
    }
}
