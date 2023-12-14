import Clock from "./Clock";
import Countdown from "./Countdown";
import { useSelector } from "react-redux";

const Main = () => {
  const app = useSelector((state) => state.sidebar.app);
  return (
    <>
      {app === 1 && <Clock />}
      {app === 2 && <Countdown />}
    </>
  );
};

export default Main;
