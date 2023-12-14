import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countdownActions } from "../../../store/countdownSlice";

const ScheduleForm = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.items);
  const [input, setInput] = useState({
    label: "",
    time: "",
  });

  const inputChangedHandler = (e) => {
    let { name, value } = e.target;
    let altInput = { ...input };
    altInput[name] = value;
    setInput(altInput);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    let item = {
      label: input.label,
      time: +input.time,
    };
    let labelsArray = items.map((item) => item.label);
    if (labelsArray.includes(item.label)) {
      alert(`${item.label} ALREADY EXISTS`);
    } else {
      if (item.label !== "" || item.time !== "") {
        dispatch(countdownActions.setItem([...items, item]));
      } else {
        alert(`THE FORM IS EMPTY. PLEASE ENTER VALID INPUT`);
      }
    }
    setInput({
      label: "",
      time: "",
    });
  };

  return (
    <div className="listed">
      <form className="list-item" onSubmit={formSubmissionHandler}>
        <div className="details">
          <input
            type="text"
            id="label"
            name="label"
            className="input"
            placeholder="item of schedule"
            value={input.label}
            onChange={inputChangedHandler}
          />
          <input
            type="number"
            id="time"
            name="time"
            className="input"
            min="0.1"
            onChange={inputChangedHandler}
            placeholder="minutes"
            step="0.05"
            value={input.time}
          />
        </div>
        <button className="add-item">add</button>
      </form>
    </div>
  );
};

export default ScheduleForm;
