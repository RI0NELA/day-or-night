let time = document.getElementById("time");

timeChecker = new Date();

// Set the initial values
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(function () {
  updateTime();
}, 1000);

function updateTime() {
  var timeChecker = new Date();

  document.getElementById("year").textContent = timeChecker.getFullYear();
  document.getElementById("hour").textContent = timeChecker.getHours();
  document.getElementById("minute").textContent = timeChecker.getMinutes();
  document.getElementById("second").textContent = timeChecker.getSeconds();
}

let hour = timeChecker.getHours();

if (hour === 19 || hour > 19) {
  time.innerText = `Oh no its night, and plus its ${hour} AM!!`;
  time.style.fontSize = "32px";

  document.getElementById("grass").style.display = "none";

  document.getElementById("sun").style.opacity = 0;
} else if (hour === 6 || hour > 6) {
  time.textContent = "Day :)";

  document.getElementById("moon").style.opacity = 0;

  document.getElementById("spaceship").style.opacity = 0;

  document.body.style.backgroundColor = "#0084ff";
}

console.log("The current time is " + hour);
