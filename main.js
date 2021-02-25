const btnStart = document.querySelector("button.start");
const reset = document.querySelector(".reset");
const div = document.querySelector(".time div");
const lap = document.querySelector(".lap");
const lapsUl = document.querySelector(".laps");
const stop = document.querySelector(".stop");
const lapResults = [];

let activeCounter = false;
let startTime = 0;
let idI;
let lapNumber = 0;
let ms = 0;
let sec = 0;
let min = 0;

let timerFunction = () => {
   ms++;
   if (ms >= 100) {
      sec++;
      ms = 0;
   }
   if (sec === 60) {
      min++;
      sec = 0;
   }
   if (min === 60) {
      ms, sec, (min = 0);
   }
};

// Update time

const updateTime = () => {
   if (activeCounter === true) {
      timerFunction();
      let milli = ms < 10 ? `0` + ms : ms;
      let seconds = sec < 10 ? `0` + sec : sec;
      let minute = min < 10 ? `0` + min : min;
      startTime++;
      div.textContent = `${minute}:${seconds}:${milli}`;
   }
};

// Run timer

setInterval(updateTime, 10);

// Create new lap and add to an array and DOM

const createNewLap = () => {
   timerFunction();
   let milli = ms < 10 ? `0` + ms : ms;
   let seconds = sec < 10 ? `0` + sec : sec;
   let minute = min < 10 ? `0` + min : min;
   startTime++;
   let lapScore = (div.textContent = `${minute}:${seconds}:${milli}`);

   (startTime / 100).toFixed(3);
   lapResults.push(lapScore);
   lapNumber++;

   let newLi = document.createElement("li");
   newLi.innerHTML = `Lap ${lapNumber}: ${lapScore}`;
   lapsUl.appendChild(newLi);
   console.log(newLi);
};

// Handle Change

const handleLapButton = () => {
   if (lap.textContent === "Lap" && activeCounter === true) {
      createNewLap();
   } else if (lap.textContent === "Reset") {
      lapsUl.innerHTML = "";
      //Reset
      div.textContent = "00:00.00";
      startTime = 0;
      lapNumber = 0;
      ms = 0;
      sec = 0;
      min = 0;
   }
};

//Handle lap button

const handleStartButton = () => {
   if (btnStart.textContent === "Start") {
      //Change button
      btnStart.textContent = "Stop";
      btnStart.style.backgroundColor = "rgb(106, 37, 37)";
      btnStart.style.color = "red";
      lap.textContent = "Lap";
      //Start timer
      activeCounter = true;
   } else if (btnStart.textContent === "Stop") {
      //Change button
      btnStart.textContent = "Start";
      btnStart.style.backgroundColor = "green";
      btnStart.style.color = "white";
      lap.textContent = "Reset";
      //Stop timer
      activeCounter = false;
   }
};

// Event Listeners

btnStart.addEventListener("click", handleStartButton);
lap.addEventListener("click", handleLapButton);
