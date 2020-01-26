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
let taskProcessing = document.createElement("p");
taskProcessing.classList.add("timer");

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
    var v = minuteInput.value;
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
function startTimer() {
  if (secondStart < 5) {
    secondStart += 1;
  } else {
    if (minuteStart == minuteInput.value.trim() - 1) {
      clearInterval();
    } else {
      secondStart = 1;
      minuteStart += 1;
    }
  }

  timerNode.textContent = minuteStart + " : " + secondStart;
}

/*
var STEP = 1;
function changeRotate(item, val)
{
    item.style.transform = "rotate(" + val + "deg)";
    item.style.webkitTransform = "rotate(" + val + "deg)";
    item.style.mozTransform = "rotate(" + val + "deg)";
    //alert(item.style.transform);
}
makeCircle(minuteHand, 0);
function makeCircle(item, targetAngle) {
    changeRotate(item, targetAngle);

    
        setTimeout(function (){
            makeCircle(item, targetAngle + STEP);
        }, 100);
    
}

*/
