import "./styles.css";
import { useCallback, useState } from "react";

export default function App() {
  const [typing, setTyping] = useState("false");

  function debounceCallback(args) {
    setTyping("false");
  }
  function debounce(debounceCallback, sec = 2000) {
    let timer;
    // all the argument will form the array as this is spread operator, so we have to use apply method to call the callback fucntion
    return function (...args) {
      // defining context for apply
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        debounceCallback.apply(context, args);
      }, sec);
    };
  }

  // memoizing function is very important as it will not be re-defined when the page will re-render due to state changes.
  const debouncedFunction = useCallback(debounce(debounceCallback), []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        onChange={() => {
          if (typing === "false") setTyping("true");
          // the returned memoized function will be here in the place of debounce Closure
          debouncedFunction();
        }}
      />
      <h2>typing:{typing}</h2>
    </div>
  );
}
