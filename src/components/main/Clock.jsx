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
  const formatTime =(time)=> time.toString().padStart(2,"0");

  return (
    <div className="container">
      <div className="clock">
        <span id="hrs">{formatTime(hrs)}</span>
        <span>:</span>
        <span id="mins">{formatTime(mins)}</span>
        <span>:</span>
        <span id="secs">{formatTime(secs)}</span>
      </div>
    </div>
  );
};

export default Clock;
