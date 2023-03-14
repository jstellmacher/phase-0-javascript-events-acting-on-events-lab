//JAIS CODEEEEEE
const dodger = document.getElementById("dodger");
//LETS MAKE IT MY OWN UNIQUE ONE
dodger.style.backgroundColor = "green";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("360px", "");
    const right = parseInt(rightNumbers, 10)
    if (right > 0) {
        dodger.style.left = `${right + 4}px`
    }
  }

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
  });