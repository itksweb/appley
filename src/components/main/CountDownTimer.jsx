import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  const handleSetCountdown = () => {
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const handleStopCountdown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display">
        <div className="countdown-value">
          {days.toString().padStart(2, "0")} <span>days</span>
        </div>
        <div className="countdown-value">
          {hours.toString().padStart(2, "0")} <span> hours</span>
        </div>
        <div className="countdown-value">
          {minutes.toString().padStart(2, "0")} <span>minutes</span>
        </div>
        <div className="countdown-value">
          {seconds.toString().padStart(2, "0")} <span>seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute top-[50%] left-[50%] min-w-[400px] min-h-[200px] -translate-x-1/2 -translate-y-1/2 after:content[''] after:w-[180px] after:h-[180px] after:bg-[#f41b75] after:rounded-[50%] after:absolute after:right-[-30px] after:bottom-[-50px] after:-z-1 before:content[''] before:w-[180px] before:h-[180px] before:bg-[#f41b75] before:rounded-[5px] before:absolute before:left-[-50px] before:top-[-50px] before:-z-1">
      <h2 className="uppercase text-center mb-5">
        {countdownStarted ? eventName : "Countdown Timer"}
      </h2>
      {!countdownStarted ? (
        <form className="countdown-form bg-[#EB00FF]/[0.11] flex flex-col justify-center w-80 outline-none border-none rounded-[10px] backdrop-blur-2xl p-5">
          <label htmlFor="title" className="mb-2 font-bold">
            Event Name
          </label>
          <input
            className="bg-[#d1f1ee]/[0.11] mb-3 p-3 w-full outline-none border-none rounded-[10px] shadow-gray-100"
            name="title"
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <label htmlFor="date-picker" className="mb-2 font-bold">
            Event Date
          </label>
          <input
            className="bg-[#d1f1ee]/[0.11] mb-3 p-3 w-full outline-none border-none rounded-[10px] shadow-gray-100"
            name="date-picker"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            onClick={(e) => (e.target.type = "date")}
          />
          <button
            className="cursor-pointer py-[10px] px-[15px] text-[0.8em] rounded-[10px] border-none font-medium uppercase bg-white text-[#800080]"
            onClick={handleSetCountdown}
          >
            Start Countdown
          </button>
        </form>
      ) : (
        <>
          {formatTime(timeRemaining)}
          <div className="control-buttons">
            <button onClick={handleStopCountdown}>Stop</button>
            <button onClick={handleResetCountdown}>Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
