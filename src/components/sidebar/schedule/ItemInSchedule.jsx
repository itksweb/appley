import img from "../../../assets/images/close-circle-outline.svg";
import { useSelector, useDispatch } from "react-redux";
import { countdownActions } from "../../../store/countdownSlice";

const ItemInSchedule = ({ label, time }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.items);

  const removeItem = (e) => {
    let itemId = e.target.closest(".list-item").id;
    dispatch(countdownActions.unsetItem(itemId));
  };
  const swell = (e) => {
    e.target.classList.add("newc");
  };
  const shrink = (e) => {
    e.target.classList.remove("newc");
  };

  let timeFormatted;
  if (time >= 1) {
    timeFormatted =
      Math.floor(time) +
      (time < 2 ? " min " : " mins ") +
      ((time * 60) % 60 ? ((time * 60) % 60) + " secs " : "");
  } else {
    timeFormatted = time * 60 + " secs";
  }

  return (
    <li className="list-item" draggable="true" id={label}>
      <div className="details">
        <span className="label">{label}</span>
        <span className="time">{timeFormatted}</span>
      </div>
      <img
        src={img}
        className="close-button"
        onClick={removeItem}
        onMouseOver={swell}
        onMouseOut={shrink}
      />
    </li>
  );
};

export default ItemInSchedule;
