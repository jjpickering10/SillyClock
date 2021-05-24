const secondsHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hoursHand = document.getElementById("hours");

function setSecondsDate() {
  const time = new Date();
  const seconds = time.getSeconds();
  const secondsRotate = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsRotate}deg)`;
  //   console.log(seconds);
}
function setMinutesDate() {
  const time = new Date();
  const minutes = time.getMinutes();
  const minutesRotate = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesRotate}deg)`;
  //   console.log(minutes);
}
function setHoursDate() {
  const time = new Date();
  const hours = time.getHours();
  const hoursRotate = (hours / 60) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursRotate}deg)`;
  console.log(hours);
}

setInterval(setSecondsDate, 1000);
setInterval(setMinutesDate, 1000);
setInterval(setHoursDate, 1000);

console.log();
