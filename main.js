//Import DOM elements
const btnStart = document.querySelector("button.start");
const btnLap = document.querySelector(".lap");
const screenTime = document.querySelector(".time div");
const lapsList = document.querySelector(".laps");
const lapResults = [];

//Variables
let activeCounter = false;
let startTime = 0;
let lapNumber = 0;
let ms = 0;
let sec = 0;
let min = 0;
let idI;

//Create timer format
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

// Update timer
const updateTime = () => {
   if (activeCounter === true) {
      timerFunction();
      let milli = ms < 10 ? `0` + ms : ms;
      let seconds = sec < 10 ? `0` + sec : sec;
      let minute = min < 10 ? `0` + min : min;
      startTime++;
      screenTime.textContent = `${minute}:${seconds}:${milli}`;
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
   let lapScore = (screenTime.textContent = `${minute}:${seconds}:${milli}`);
   lapNumber++;
   //Create single lap element
   let singleLap = document.createElement("screenTime");
   singleLap.classList.add("single-lap");
   let newLapNumber = document.createElement("li");
   let newLapResult = document.createElement("p");
   //Append single lap element
   newLapNumber.innerHTML = `Lap ${lapNumber}`;
   newLapResult.innerHTML = `${lapScore}`;
   singleLap.appendChild(newLapNumber);
   singleLap.appendChild(newLapResult);

   lapsList.appendChild(singleLap);
};

// Handle lap button
const handleLapButton = () => {
   if (btnLap.textContent === "Lap" && activeCounter === true) {
      createNewLap();
   } else if (btnLap.textContent === "Reset") {
      lapsList.innerHTML = "";
      btnLap.textContent = "Lap";
      //Variables reset
      screenTime.textContent = "00:00.00";
      startTime = 0;
      lapNumber = 0;
      ms = 0;
      sec = 0;
      min = 0;
   }
};

//Handle start button
const handleStartButton = () => {
   if (btnStart.textContent === "Start") {
      //Change button
      btnStart.textContent = "Stop";
      btnStart.style.backgroundColor = "rgb(106, 37, 37)";
      btnStart.style.color = "red";
      btnLap.textContent = "Lap";
      //Start timer
      activeCounter = true;
   } else if (btnStart.textContent === "Stop") {
      //Change button
      btnStart.textContent = "Start";
      btnStart.style.backgroundColor = "green";
      btnStart.style.color = "white";
      btnLap.textContent = "Reset";
      //Stop timer
      activeCounter = false;
   }
};

// Event Listeners
btnStart.addEventListener("click", handleStartButton);
btnLap.addEventListener("click", handleLapButton);
