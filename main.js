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
   } else if (start.textContent === "Stop" && activeCounter === true) {
      activeCounter = undefined;
      start.textContent = "Start";
      // reset.textContent = "Reset";
      start.style.backgroundColor = "rgb(34, 75, 34)";
      start.style.color = "greenyellow";
      // reset.style.zIndex = "2";
   }
};

const changeBeh = () => {
   if (startTime > 0 && activeCounter === undefined) {
      lap.textContent = "Reset";
   }
};

// console.log(activeCounter);
const updateStopper = () => {
   if (activeCounter === true) {
      startTime++;
      div.textContent = "00:" + 0.0 + (startTime / 100).toFixed(2);
   }
};

function deleteLaps() {
   lapsUl.remove();
   startTime = 0;
   div.textContent = "00:00.00";
   // console.log("nie usuwam");
}

const addLap = () => {
   if (startTime > 0 && activeCounter === true) {
      const lapScore = (startTime / 100).toFixed(3);
      lapResults.push(lapScore);
      lapNumber++;
      let newLi = document.createElement("li");
      newLi.textContent = `Lap ${lapNumber}: ${lapScore}`;
      lapsUl.appendChild(newLi);
   }

   if (
      (lapResults.length > 0 && lap.textContent === "Reset") ||
      (lapResults.length < 0 && lap.textContent === "Reset")
   ) {
      // activeCounter = undefined;
      deleteLaps();

      div.textContent = "00:"(startTime / 100).toFixed(3);
      startTime = 0;
   } else if (lapResults.length > 0 && startTime > 0) {
      lap.textContent = "ero";
      startTime = 0;
   }
};

const btnReset = () => {
   activeCounter = undefined;
   startTime = 0;
   div.textContent = "00:00.00";
   start.textContent = "Start";
   // lapResults = [];
   clearInterval(idI);
};

setInterval(updateStopper, 10);

// const stopTimer = () => {
//    console.log("stop");
// };

start.addEventListener("click", startStoper);
start.addEventListener("click", changeBeh);
// reset.addEventListener("click", btnReset);
// reset.addEventListener("click", deleteLaps);
lap.addEventListener("click", addLap);
// lap.addEventListener("click", btnReset);
// stop.addEventListener("click", stopTimer);
