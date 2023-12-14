import { sidebarActions } from "../../store/sidebarSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let appId = e.target.id;
    if (appId > 0) {
      appId === "3"
        ? dispatch(sidebarActions.seeSchedule())
        : dispatch(sidebarActions.setApp(+appId));
    }
  };

  return (
    <>
      <ul>
        <li className="clicker" onClick={handleClick} id="1">
          Clock
        </li>
        <li className="clicker" onClick={handleClick} id="2">
          Countdown Timer
        </li>
        <li className="clicker" onClick={handleClick} id="3">
          Schedule Countdown Timer
        </li>
      </ul>
    </>
  );
};

export default Menu;
