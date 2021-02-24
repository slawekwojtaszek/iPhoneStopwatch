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
let flag = false;
let mainButton = (btnStart.textContent = "Start");

div.textContent = "00:00.00";

// Clear all laps
function deleteLaps() {
   lapsUl.remove();
   startTime = 0;
   div.textContent = "00:00.00";
}

// Update time
const updateStopper = () => {
   if (activeCounter === true) {
      startTime++;
      div.textContent = "00:" + 0.0 + (startTime / 100).toFixed(2);
   }
};

// Run timer
setInterval(updateStopper, 10);

// Create new lap and add to an array and DOM
const createNewLap = () => {
   const lapScore = (startTime / 100).toFixed(3);
   lapResults.push(lapScore);
   lapNumber++;
   let newLi = document.createElement("li");
   newLi.textContent = `Lap ${lapNumber}: ${lapScore}`;
   lapsUl.appendChild(newLi);
};

//Clear laps

const clearLaps = () => {
   if (lap.textContent === "Lap") {
      console.log("lap");
   } else if (lap.textContent === "Reset") {
      deleteLaps();
      btnStart.textContent = "Start";
   }
};

// Reset / Lap
const resetLap = () => {
   if (activeCounter === true) {
      btnStart.textContent = "Start";
      btnStart.style.backgroundColor = "rgb(34, 75, 34)";
      btnStart.style.color = "greenyellow";
      activeCounter = false;
   }

   console.log("elo");
};

// Handle Change

const handleChange = () => {
   if (activeCounter === true) {
      btnStart.textContent = "Stop";
      btnStart.style.backgroundColor = "rgb(106, 37, 37)";
      btnStart.style.color = "red";
   } else if (activeCounter === false) {
      btnStart.textContent = "Start";
      btnStart.style.backgroundColor = "rgb(106, 37, 37)";
      btnStart.style.color = "greem";
   }
};

//Handle start button
const startStoper = () => {
   if (activeCounter === false) {
      activeCounter = true;
      handleChange();
   } else if (activeCounter === true) {
      // lap.textContent === "LAP";
      resetLap();
   }
};

//Handle lap button
const addLap = () => {
   if (activeCounter === true) {
      createNewLap();
   }

   // clearLaps();
};

// Event Listeners

btnStart.addEventListener("click", startStoper);
lap.addEventListener("click", addLap);
