import { useEffect, useState } from "react";
import React from "react";

const initialTime = { state: "start", hours: 0, minutes: 59, seconds: 55 };
const runTimer = (timer, setTimer) => {
  if (timer.seconds === 59) {
    const newSeconds = 0;
    let newMinutes = null;
    let newHours = null;

    if (timer.minutes === 59) {
      newMinutes = 0;
      newHours = timer.hours + 1;
    } else {
      newMinutes = timer.minutes + 1;
      newHours = timer.hours;
    }
    setTimer({
      ...timer,
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    });
    return;
  }
  setTimer({ ...timer, seconds: timer.seconds + 1 });
};
function App() {
  const [timer, setTimer] = useState(initialTime);
  const updateTimerState = state => {
    if (state === "reset") {
      setTimer({ ...timer, ...initialTime });
      return;
    }
    setTimer({ ...timer, state: state });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.state === "start") runTimer(timer, setTimer);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimer]);
  return (
    <div className="flex flex-col  items-center justify-center mt-10">
      <p>
        {`${timer.hours}`.padStart(2, 0)}:{`${timer.minutes}`.padStart(2, 0)}:
        {`${timer.seconds}`.padStart(2, 0)}
      </p>
      <div className="flex justify-center">
        <button
          className="bg-red-200 rounded-xl p-1 m-2"
          onClick={() => updateTimerState("start")}
        >
          Start
        </button>
        <button
          className="bg-green-200 rounded-xl p-1 m-2"
          onClick={() => updateTimerState("paused")}
        >
          pause
        </button>
        <button
          className="bg-blue-200 rounded-xl p-1 m-2"
          onClick={() => updateTimerState("reset")}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
