import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isSidebar } from "../../store/sidebarSlice";
import {
  keypress,
  setPlay,
  setTimeLeft,
  setTimerLabel,
  setTimeUp,
} from "../../store/countdownSlice";

const Countdown = () => {
  const dispatch = useDispatch();
  const { timeLeft, play, timerLabel, schedule } = useSelector(
    (state) => state.app
  );
  const [index, setIndex] = useState(0);

  let mins = (Math.floor(timeLeft / 60) + "").padStart(2, "0");
  let secs = ((timeLeft % 60) + "").padStart(2, "0");

  const timedout = setTimeout(() => {
    if (play) {
      if (!timeLeft && index < schedule.length - 1) {
        clearTimeout(timedout);
        setIndex((prev) => prev + 1);
      } else if (!timeLeft && index === schedule.length - 1) {
        clearTimeout(timedout);
        dispatch(setPlay(false));
      } else {
        dispatch(setTimeLeft(timeLeft - 1));
      }
    }
  }, 1000);

  const handleKeydown = (e) => {
    dispatch(
      keypress({
        timedout,
        keyCode: e.keyCode,
        key: e.key,
      })
    );
  };

  useEffect(() => {
    if (schedule.length > 0) {
      dispatch(setTimeLeft(schedule[index].time * 60));
      dispatch(setTimerLabel(schedule[index].label));
    }
    console.log(`${timeLeft} & ${timerLabel}`);
  }, [index, schedule]);

  const nextTimer = () => {
    setIndex((prev) => prev + 1);
  };

  const carryOn = () => {
    play ? timedout : clearTimeout(timedout);
  };

  useEffect(() => {
    carryOn();
  }, [play]);

  if (play && !timeLeft) {
    clearTimeout(timedout);
    dispatch(setTimeUp(true));
    dispatch(setPlay(false));
  }
  const openSidebar = () => {
    dispatch(isSidebar(true));
  };
  let menuClass = !timerLabel ? "cursor-pointer" : "";

  const inputChange = (e) => {};

  return (
    <div className="absolute top-[50%] left-[50%] min-w-[400px] min-h-[200px] -translate-x-1/2 -translate-y-1/2 after:content[''] after:w-[180px] after:h-[180px] after:bg-[#f41b75] after:rounded-[50%] after:absolute after:right-[-30px] after:bottom-[-50px] after:-z-1 before:content[''] before:w-[180px] before:h-[180px] before:bg-[#f41b75] before:rounded-[5px] before:absolute before:left-[-50px] before:top-[-50px] before:-z-1">
      <h3
        onClick={!timerLabel ? openSidebar : () => {}}
        className={`${menuClass} uppercase text-center mb-5`}
      >
        {timerLabel ? timerLabel : "MENU"}
      </h3>
      <div className="clock bg-[#EB00FF]/[0.11] flex justify-center items-center outline-none border-none rounded-[10px] backdrop-blur-2xl p-5">
        <span
          id="mins"
          className="w-[100px] text-[80px] inline-block text-center relative after:content-['MINUTES'] after:text-base after:absolute after:bottom-[-5px] after:left-[50%] after:-translate-x-1/2 "
        >
          <input
            type="text"
            autoFocus
            id="timer"
            className="caret-transparent w-full outline-none text-center border-none bg-transparent text-inherit"
            onChange={inputChange}
            onKeyDown={handleKeydown}
            value={mins}
          />
        </span>
        <span className="text-[80px] inline-block text-center w-[100px]">
          :
        </span>
        <span
          id="secs"
          className="text-[80px] inline-block text-center relative after:content-['SECONDS'] after:text-base after:absolute after:bottom-[-5px] after:left-[50%] after:-translate-x-1/2 w-[100px]"
        >
          {secs}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
