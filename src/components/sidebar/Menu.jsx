import { seeSchedule, setApp } from "../../store/sidebarSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let appId = e.target.id;
    if (appId > 0) {
      appId === "4" ? dispatch(seeSchedule()) : dispatch(setApp(+appId));
    }
  };

  return (
    <ul className="flex flex-col gap-[5px] ">
      <li
        className="cursor-pointer list-none py-[3px] px-[8px] border-[1px] border-[#ccc] border-solid "
        onClick={handleClick}
        id="1"
      >
        Clock
      </li>
      <li
        className="cursor-pointer list-none py-[3px] px-[8px] border-[1px] border-[#ccc] border-solid "
        onClick={handleClick}
        id="2"
      >
        Countdown Timer
      </li>
      <li
        className="cursor-pointer list-none py-[3px] px-[8px] border-[1px] border-[#ccc] border-solid "
        onClick={handleClick}
        id="3"
      >
        Countdown Timer 2
      </li>
      <li
        className="cursor-pointer list-none py-[3px] px-[8px] border-[1px] border-[#ccc] border-solid "
        onClick={handleClick}
        id="4"
      >
        Schedule Countdown Timer
      </li>
    </ul>
  );
};

export default Menu;
