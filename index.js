// Your code here
// Grab the dodger and save a reference to it in a variable.
const dodger = document.getElementById("dodger");
// Change dodger color.
dodger.style.backgroundColor = "#FF69B4";
// Move dodger to the left side of the page.
// Add a check on the current position of the dodger.
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  // Ensure that the dodger's left edge hasn't reached the edge of it's container.
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

// Move the dodger to the right side of the page.
// Check on the current dodger position.
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(rightNumbers, 10);
// Ensure that the right edge of the dodger is not positioned at the edge of it's container.
  if ( left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
// Add an event listener's callback function to call moveDodgerRight().
document.addEventListener('keydown', function(e) {
  if ( e.key === "ArrowRight" ) {
    moveDodgerRight();
  }
 });
