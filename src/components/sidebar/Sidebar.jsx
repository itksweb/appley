import "./Sidebar.css";
import Schedule from "./schedule/Schedule";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../store/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { showMenu, showSchedule } = useSelector((state) => state.sidebar);

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sidebar w-[500px] max-h-[95vh] bg-[#800080] flex items-center justify-start flex-col text-black rounded-[10px] p-5 self-start mt-5 gap-5 ">
      <h2 onClick={handleClick} className="cursor-pointer">
        {(showMenu ? "Hide" : "Show") + " Menu"}
      </h2>
      {showMenu && <Menu />}
      {showSchedule && <Schedule />}
    </div>
  );
};

export default Sidebar;
