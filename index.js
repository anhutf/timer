const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const permeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", permeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (permeter * timeRemaining) / duration - permeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
    setTimeout(() => {
      circle.setAttribute("stroke-dashoffset", 0);
    }, 500);
  },
});
