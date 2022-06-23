// show true when typing

import "./styles.css";
import { useState } from "react";
export default function App() {
  const [typing, setTyping] = useState("false");

  // define timer here to give same refrence across all the re renders
  let timer = null;

  function callBack() {
    setTyping("false");
  }

  function debounce(callBack, delay = 1000) {
    // dont define timer here because when react local state changes it will re render the component, and the new refrence in memory will be created
    // for timer. And that new refrence will timeout according to delay time.
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callBack();
      }, delay);
    };
  }

  // my function contains the function returned by debounce, and make closure with debounce (timer)
  // When myFunction is called again and again it will have the "timer" in closure
  // if timer is empty set a timer using timeout else clear timer so the previoys function will never run
  const myFunc = debounce(callBack, 1000);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        onKeyPress={() => {
          myFunc();
          if (typing === "false") setTyping("true");
        }}
      />
      <h2>Typing: {typing}</h2>
    </div>
  );
}
