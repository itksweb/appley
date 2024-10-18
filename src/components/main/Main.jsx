import Clock from "./Clock";
import Countdown from "./Countdown";
import { useSelector } from "react-redux";
import CountdownTimer from "./CountDownTimer";

const Main = () => {
  const app = useSelector((state) => state.sidebar.app);
  return (
    <>
      {app === 1 && <Clock />}
      {app === 2 && <Countdown />}
      {app === 3 && <CountdownTimer />}
    </>
  );
};

export default Main;
