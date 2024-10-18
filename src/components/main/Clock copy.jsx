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
  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="absolute top-[50%] left-[50%] min-w-[400px] min-h-[200px] -translate-x-1/2 -translate-y-1/2 after:content[''] after:w-[180px] after:h-[180px] after:bg-[#f41b75] after:rounded-[50%] after:absolute after:right-[-30px] after:bottom-[-50px] after:-z-1 before:content[''] before:w-[180px] before:h-[180px] before:bg-[#f41b75] before:rounded-[5px] before:absolute before:left-[-50px] before:top-[-50px] before:-z-1">
      <div className="clock bg-[#EB00FF]/[0.11] flex justify-center items-center outline-none border-none rounded-[10px] backdrop-blur-2xl p-5 ">
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
