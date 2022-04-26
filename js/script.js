const button = document.querySelector("button");
const counterContainer = document.querySelector(".counter");
const inputContainer = document.querySelector(".inputs");

button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);

let intervalId;
let count;

function handleMouseDown() {
  count = 0;
  this.textContent = "Release to stop counting";
  counterContainer.innerHTML = count;
  inputContainer.innerHTML = "";

  intervalId = setInterval(function () {
    count++;
    counterContainer.innerHTML = count;
  }, 1000);
}

function handleMouseUp() {
  clearInterval(intervalId);
  this.textContent = "Press and hold to count";

  for (let i = 1; i <= count; i++) {
    inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
  }
}

// const btn = document.querySelector("button");
// const counter = document.querySelector(".counter");
// const inputs = document.querySelector(".inputs");
// let seconds = 0;

// btn.onpointerdown = startTimer;
// btn.onpointerup = stopTimer;

// function startTimer() {
//   const intervalTimer = setInterval(function () {
//     seconds++;
//     counter.innerHTML = "";
//     counter.innerHTML = seconds;
//   }, 1000);
// }
// function stopTimer() {
//   for (let i = 0; i < seconds.length; i++) {
//     inputs.innerHTML = `
//             <input class="input" type="text">
//             `;
//   }
//   clearInterval(intervalTimer);
//}
