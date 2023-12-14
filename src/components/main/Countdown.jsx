import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countdownActions } from "../../store/countdownSlice";
import { sidebarActions } from "../../store/sidebarSlice";

const Countdown = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.app);
  const { timeLeft, play, timerLabel, schedule } = states;

  const [index, setIndex] = useState(0);

  let mins = Math.floor(timeLeft / 60);
  let secs = timeLeft % 60;
  const handleKeydown = (e) => {
    dispatch(
      countdownActions.keypress({
        timedout,
        keyCode: e.keyCode,
        key: e.key,
      })
    );
  };

  useEffect(() => {
    if (schedule.length > 0) {
      dispatch(countdownActions.setTimeLeft(schedule[index].time * 60));
      dispatch(countdownActions.setTimerLabel(schedule[index].label));
    }
    console.log(`${timeLeft} & ${timerLabel}`);
  }, [index, schedule]);

  const nextTimer = () => {
    setIndex((prev) => prev + 1);
    // dispatch(countdownActions.setTimeLeft(schedule[index].time * 60));
    // dispatch(countdownActions.setTimerLabel(schedule[index].label));
  };

  const timedout = setTimeout(() => {
    if (play) {
      if (!timeLeft && index < schedule.length - 1) {
        clearTimeout(timedout);
        setIndex((prev) => prev + 1);
      } else if (!timeLeft && index === schedule.length - 1) {
        clearTimeout(timedout);
        dispatch(countdownActions.setPlay(false));
      } else {
        dispatch(countdownActions.setTimeLeft(timeLeft - 1));
      }
    }
  }, 1000);

  const carryOn = () => {
    play ? timedout : clearTimeout(timedout);
  };

  useEffect(() => {
    carryOn();
  }, [play]);

  if (play && !timeLeft) {
    clearTimeout(timedout);
    dispatch(countdownActions.setTimeUp(true));
    dispatch(countdownActions.setPlay(false));
  }
  const openSidebar = () => {
    dispatch(sidebarActions.isSidebar(true));
  };
  let menuClass = !timerLabel ? "clicker" : "";

  const inputChange = (e) => {};

  return (
    <div className="container">
      <h3 onClick={!timerLabel ? openSidebar : () => {}} className={menuClass}>
        {timerLabel ? timerLabel : "MENU"}
      </h3>
      <div className="clock">
        <span id="mins">
          <input
            type="text"
            autoFocus
            id="timer"
            onChange={inputChange}
            onKeyDown={handleKeydown}
            value={(mins < 10 ? "0" : "") + mins}
          />
        </span>
        <span>:</span>
        <span id="secs">{(secs < 10 ? "0" : "") + secs}</span>
      </div>
    </div>
  );
};

export default Countdown;
