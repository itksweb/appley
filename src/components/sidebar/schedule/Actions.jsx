import { useSelector, useDispatch } from "react-redux";
import { countdownActions } from "../../../store/countdownSlice";
import { sidebarActions } from "../../../store/sidebarSlice";

const Actions = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.items);

  const clearItems = () => {
    dispatch(countdownActions.setItem([]));
  };

  const updateSchedule = () => {
    dispatch(countdownActions.setSchedule([...items]));
    dispatch(sidebarActions.setApp(2));
  };

  let myUpdate = items.length > 0 ? "update" : "hide";

  return (
    <div className={myUpdate}>
      <button
        type="input"
        className="btn"
        id="leftbtn"
        onClick={updateSchedule}
      >
        update schedule
      </button>
      <button className="btn" id="rightbtn" onClick={clearItems}>
        clear all
      </button>
    </div>
  );
};

export default Actions;
