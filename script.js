//Code is written by Amarpreet Singh.
//Toronto, Canada

//create HTML elements
let app = document.getElementById("app");

let watchFace;
let watchDial;
let minuteHand;
let formWrapper;
let taskInput;
let minuteInput;
let buttonStart;
var timerNode;
var doneTimer;
let taskProcessing = document.createElement("p");
taskProcessing.classList.add("timer");
var secToDegree;

createWatchFace();

//create watch face
function createWatchFace() {
  watchFace = document.createElement("div");
  watchDial = document.createElement("div");
  minuteHand = document.createElement("div");
  watchFace.classList.add("watchFace", "spacer");
  watchDial.classList.add("watchDial");
  minuteHand.classList.add("minuteHand");
  app.appendChild(watchFace).appendChild(minuteHand);
  watchFace.appendChild(watchDial);
}

function createFormWrapper() {
  formWrapper = document.createElement("div");
  formWrapper.classList.add("formWrapper");
}
createFormWrapper();

function createTaskInput() {
  taskInput = document.createElement("input");
  taskInput.classList.add("input", "input_task", "spacer");
  taskInput.placeholder = "What are you going to do?";
  app.appendChild(formWrapper).appendChild(taskInput);
}
createTaskInput();

function createMinuteInput() {
  minuteInput = document.createElement("input");
  formWrapper.appendChild(minuteInput);
  minuteInput.classList.add("input", "input_minute", "spacer");
  minuteInput.placeholder = "Minutes?";
  minuteInput.type = "text";
  minuteInput.addEventListener("input", function(e) {
    v = minuteInput.value;
    if (isNaN(v)) {
      minuteInput.value = "";
      return false;
    }
  });
}
createMinuteInput();

function createStartButton() {
  buttonStart = document.createElement("button");
  buttonStart.classList.add("buttonStart", "spacer");
  buttonStart.textContent = "START";
  formWrapper.appendChild(buttonStart);
  //buttonStart.disabled = true;
}
createStartButton();

buttonStart.addEventListener("click", function(e) {
  if (taskInput.value.length == 0 || minuteInput.value.length == 0) {
    return false;
  } else {
    formWrapper.replaceChild(taskProcessing, taskInput);
    taskProcessing.textContent = taskInput.value;
    formWrapper.replaceChild(timerNode, minuteInput);
    formWrapper.replaceChild(doneTimer, buttonStart);
    setInterval(startTimer, 1000);
    startTimer();
  }
});

function createTimer() {
  timerNode = document.createElement("p");
  timerNode.classList.add("timer");
  formWrapper.appendChild(timerNode);
}
createTimer();

var minuteStart = 0;
var secondStart = 0;
var counter = 0;
function startTimer() {
  if (minuteStart == minuteInput.value.trim()) {
    clearInterval();
    secondStart = 0;
  } else {
    if (secondStart < 60) {
      secondStart += 1;
      minuteHandRotate(secondStart);
    } else {
      secondStart = 0;
      minuteStart += 1;
    }
  }
  timerNode.textContent = minuteStart + " : " + secondStart;
}

function minuteHandRotate(val) {
  minuteHand.style.transform = "rotate(" + val + "deg)";
}

function doneTimer() {
  doneTimer = document.createElement("button");
  doneTimer.textContent = "DONE";
  doneTimer.classList.add("buttonDone");

}
doneTimer();

doneTimer.addEventListener('click', function() {
  location.reload();
});
