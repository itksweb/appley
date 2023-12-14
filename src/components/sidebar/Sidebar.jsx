import "./Sidebar.css";
import Schedule from "./schedule/Schedule";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { showMenu, showSchedule } = useSelector((state) => state.sidebar);

  const handleClick = () => {
    dispatch(sidebarActions.toggleMenu());
  };

  return (
    <div className="sidebar">
      <h2 onClick={handleClick} className="clicker">
        {(showMenu ? "Hide" : "Show") + " Menu"}
      </h2>
      {showMenu && <Menu />}
      {showSchedule && <Schedule />}
    </div>
  );
};

export default Sidebar;
