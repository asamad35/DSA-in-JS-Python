// add throttling.js file in the html script src to run this.
import "./styles.css";

const input = document.getElementsByTagName("input")[0];

function throttle(cb, delay) {
  let throttleFlag = false;

  return function (...args) {
    if (throttleFlag) return;

    throttleFlag = true;
    cb.apply(this, args);
    setTimeout(() => {
      throttleFlag = false;
    }, delay);
  };
}

function handleInput(test) {
  console.log("input has throttle", test);
}

const throttleInputHandler = throttle(handleInput, 2000);

input.addEventListener("input", function () {
  throttleInputHandler("abcd");
});
