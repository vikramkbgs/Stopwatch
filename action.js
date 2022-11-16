// this is used for immediate execution of javascript after loading the whole page.
window.onload = function () {
  var seconds = 00;
  var minutes = 00;
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  // method for start button
  buttonStart.onclick = function () {
    clearInterval(Interval);

    // after each second  startTimer method will execute
    Interval = setInterval(startTimer, 1000);
  };

  // method for stop button
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // method for Reset button
  buttonReset.onclick = function () {
    clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };

  function startTimer() {
    seconds++;

    // when second is less than or equal to 9 time that time apending html text with 0.
    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    // when second is greater than 60 that time we increament the minutes hand.
    if (seconds > 60) {
      minutes++;

      // when minutes is less than or equal to 9 time that time apending html text with 0.
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;

      // starting second from 00
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendSeconds.innerHTML = minutes;
    }
  }
};
