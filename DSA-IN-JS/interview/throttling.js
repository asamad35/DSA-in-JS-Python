import { useCallback } from "react";
import "./styles.css";

export default function App() {
  function cb() {
    console.log("a");
  }

  function throttle(cb) {
    let timer;
    return function () {
      if (timer) return;
      timer = setTimeout(() => {
        cb();
        timer = null;
      }, 1000);
    };
  }

  const throttleHandler = useCallback(throttle(cb), []);
  return (
    <div className="App">
      <input onChange={throttleHandler} />
    </div>
  );
}
