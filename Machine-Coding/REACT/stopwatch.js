import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(3600);
  const [buttonState, setButtonState] = useState("start");
  const getFormattedTime = () => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(((time % 3600) % 60) % 60)
      .toString()
      .padStart(2, "0");

    if (time < 0) return `00:00:00`
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (buttonState === "stop") return;
    const interval = setInterval(() => {
      console.log(getFormattedTime());
      setTime((prev) => prev - 1); // prev + 1 stop watch
    }, 1000);

    return () => clearInterval(interval);
  }, [time, buttonState]);

  return (
    <>
      <div>{getFormattedTime()}</div>
      <div onClick={() => setButtonState("start")}>Start</div>
      <div onClick={() => setButtonState("stop")}>Stop</div>
      <div onClick={() => setButtonState("reset")}>Reset</div>
    </>
  );
}
