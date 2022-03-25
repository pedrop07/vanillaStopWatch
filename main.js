window.onload = function () {
    let sec = 0;
    let milli = 0;
    let min = 0;
    
    const seconds = document.getElementById('seconds');
    const milliseconds = document.getElementById('milliseconds');
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    
    let interval;
    const minutes = document.getElementById('minutes');

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTime, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
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
        }

        if (milli > 9){
            milliseconds.innerHTML = milli;
        }

        if (milli > 99){
            sec++;
            seconds.innerHTML = '0' + sec + ':';
            milli = 0;
            milliseconds.innerHTML = '0' + milli;
        }

        if (sec === 0){
            seconds.innerHTML = sec + '0:';
        }

        if (sec > 9){
            seconds.innerHTML = sec + ':';
        }

        if (sec > 60){
            min++;
            minutes.innerHTML = '0' + min + ':';
            sec = 0;
            seconds.innerHTML = '0' + sec;
        }
    }
}
