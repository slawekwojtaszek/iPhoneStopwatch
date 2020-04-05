const start = document.querySelector("button.start");
const reset = document.querySelector(".reset");
const div = document.querySelector(".time div");
const lap = document.querySelector(".lap");
const lapsUl = document.querySelector(".laps");
const stop = document.querySelector(".stop");
const lapResults = [];

let activeCounter;
let startTime = 0;
let idI;
let lapNumber = 0;
let lapFlag = true;
let mainButton = (start.textContent = "Start");

div.textContent = "00:00.00";

const startStoper = () => {
  if (activeCounter === undefined) {
    activeCounter = true;
    start.textContent = "Stop";
    start.style.backgroundColor = "rgb(106, 37, 37)";
    start.style.color = "red";
  } else if (start.textContent === "Stop") {
    activeCounter = undefined;
    start.textContent = "Start";
    reset.textContent = "Reset";
    start.style.backgroundColor = "rgb(34, 75, 34)";
    start.style.color = "greenyellow";
    reset.style.zIndex = "2";
  }
};
const updateStopper = () => {
  if (activeCounter === true) {
    startTime++;
    div.textContent = "00:" + 0.0 + (startTime / 100).toFixed(2);
  }
};

const btnReset = () => {
  activeCounter = undefined;
  startTime = 0;
  div.textContent = "00:00.00";
  start.textContent = "Start";
  lapResults = [];
  clearInterval(idI);
};

setInterval(updateStopper, 10);

const addLap = () => {
  if (startTime > 0) {
    const lapScore = (startTime / 100).toFixed(3);
    lapResults.push(lapScore);
    lapNumber++;
    let newLi = document.createElement("li");
    newLi.textContent = `Lap ${lapNumber}: ${lapScore}`;
    lapsUl.appendChild(newLi);
  }
  console.log(lapResults);
  if (lapResults.length > 0) {
    // activeCounter = undefined;
    start.textContent = "Stop";
    div.textContent = "00:"(startTime / 100).toFixed(3);
    startTime = 0;
  }
};

const stopTimer = () => {
  console.log("stop");
};

start.addEventListener("click", startStoper);
reset.addEventListener("click", btnReset);
lap.addEventListener("click", addLap);
stop.addEventListener("click", stopTimer);
