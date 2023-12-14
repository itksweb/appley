import { useState } from "react";

const Clock = () => {
  const [hrs, setHrs] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  setInterval(() => {
    let date = new Date();
    setSecs(date.getSeconds());
    setMins(date.getMinutes());
    setHrs(date.getHours());
  }, 1000);

  return (
    <div className="container">
      <div className="clock">
        <span id="hrs">{(hrs < 10 && hrs > 0 ? "0" : "") + hrs}</span>
        <span>:</span>
        <span id="mins">{(mins < 10 && mins > 0 ? "0" : "") + mins}</span>
        <span>:</span>
        <span id="secs">{(secs < 10 && secs > 0 ? "0" : "") + secs}</span>
      </div>
    </div>
  );
};

export default Clock;
