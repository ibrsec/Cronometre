//stopwatch

const startBtnstopwatch = document.getElementById("start-stopwatch");
const stopBtnstopwatch = document.getElementById("stop-stopwatch");
const resetBtnstopwatch = document.getElementById("reset-stopwatch");
let dispayedTime_stopWatch = document.querySelector(".time-stopwatch");


let timer;

//button events =
startBtnstopwatch.addEventListener("click", function () {
  timer = setInterval(timeInterval_stopwatch, 1000);
  resetBtnstopwatch.disabled = true;
  startBtnstopwatch.disabled = true;
});

stopBtnstopwatch.addEventListener("click", function () {
  timer = clearInterval(timer);
  resetBtnstopwatch.disabled = false;
  startBtnstopwatch.disabled = false;
});
resetBtnstopwatch.addEventListener("click", function () {
  resetBtnstopwatch.disabled = true;

  timer = clearInterval(timer);

  sec = 0;
  min = 0;
  hour = 0;
  dispayedTime_stopWatch.innerHTML = "00:00:00";
});

let sec = 0;
let min = 0;
let hour = 0;

function timeInterval_stopwatch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
  }
  display_stopwatch();
  console.log(hour + ":" + min + ":" + sec);
}

function display_stopwatch() {
  let pretty_sec = sec;
  let pretty_min = min;
  let pretty_hour = hour;

  if (sec < 10) {
    pretty_sec = "0" + sec;
  }
  if (min < 10) {
    pretty_min = "0" + min;
  }
  if (hour < 10) {
    pretty_hour = "0" + hour;
  }

  time_displayed = pretty_hour + ":" + pretty_min + ":" + pretty_sec;
  dispayedTime_stopWatch.innerHTML = time_displayed;
}





//count down

const startBtn_countdown = document.getElementById("start-countdown");
const stopBtn_countdown = document.getElementById("stop-countdown");
let dispayedTime_countdown = document.querySelector(".time-countdown");
const resetBtn_countdown = document.getElementById("reset-countdown");

const inputHour = document.querySelector(".hour-input");
const inputMin = document.querySelector(".min-input");

let count_sec = 0;
let count_min;
let count_hour;



let timerCountDown;
startBtn_countdown.addEventListener("click", function () {
  

  const isDisabled = inputHour.disabled && inputMin.disabled;

  
  console.log("---- 3 ----");
  console.log(count_hour);
  console.log(count_min);
  console.log(count_sec);

  if (!isDisabled) {
   
    count_min = isNaN(Math.floor(inputMin.value))
      ? 5
      : inputMin.value == ""
      ? 5
      : Math.floor(inputMin.value) == 0
      ? 0
      : Math.floor(inputMin.value);



    if (inputHour.value != "" && inputMin.value == "") {
      count_min = 0;
    }

    if (Math.floor(inputMin.value) >= 60) {
      alert("invalid min");
      inputMin.value = "";
      return;
    }
    count_hour =
      // isNaN(Math.floor(inputHour.value)) ||
      Math.floor(inputHour.value) == 0 ? 0 : Math.floor(inputHour.value);

    console.log(Math.floor(inputMin.value));
    console.log(Math.floor(inputHour.value));

 


    inputHour.disabled = true;
    inputMin.disabled = true;

    inputMin.placeholder = "";
    inputHour.placeholder = "";
    inputMin.value = "";
    inputHour.value = "";

    display_countdown();
  }

  timerCountDown = setInterval(timeInterval_countdown, 1000);
  resetBtn_countdown.disabled = true;
  startBtn_countdown.disabled = true;

});

stopBtn_countdown.addEventListener("click", function () {
  timerCountDown = clearInterval(timerCountDown);
  resetBtn_countdown.disabled = false;
  startBtn_countdown.disabled = false;
 
});

resetBtn_countdown.addEventListener("click", function () {
  resetBtn_countdown.disabled = true;

  timerCountDown = clearInterval(timerCountDown);

 

  count_sec = 0;
  count_min = 5;
  count_hour = 0;
  dispayedTime_countdown.innerHTML = "00:05:00";
  inputHour.disabled = false;
  inputMin.disabled = false;
  inputHour.placeholder = "Enter Hour";
  inputMin.placeholder = "Enter Min";

});

// --------------------

function timeInterval_countdown() {


  count_sec--;

  if (count_sec == -1) {
    count_min--;
    count_sec = 59;
  }
  if (count_min == -1) {
    count_hour--;
    count_min = 59;
  }

 

  console.log(count_hour + ":" + count_min + ":" + count_sec);

  display_countdown();

  if (
    (count_sec == 0 && count_hour == 0 && count_min == 0) ||
    count_hour == -1
  ) {
    alert("count down is over !!");
    timerCountDown = clearInterval(timerCountDown);
    count_hour = 0;
    count_min = 5;
    count_sec = 0;
    inputHour.disabled = false;
    inputMin.disabled = false;
    inputHour.placeholder = "Enter Hour";
    inputMin.placeholder = "Enter Min";
    resetBtn_countdown.disabled = false;
    display_countdown();
  }

  
}

function display_countdown() {
  let pretty_sec_count = count_sec;
  let pretty_min_count = count_min;
  let pretty_hour_count = count_hour;

  if (count_sec < 10) {
    pretty_sec_count = "0" + count_sec;
  }
  if (count_min < 10) {
    pretty_min_count = "0" + count_min;
  }
  if (count_hour < 10) {
    pretty_hour_count = "0" + count_hour;
  }

  let time_displayed_cd =
    pretty_hour_count + ":" + pretty_min_count + ":" + pretty_sec_count;
  dispayedTime_countdown.innerHTML = time_displayed_cd;

 
}
