import { useState } from "react";

const ScheduleForm = ({ items, setItems }) => {
  const [input, setInput] = useState({
    label: "",
    time: "",
  });

  const inputChangedHandler = (e) => {
    let { id, value } = e.target;
    setInput((prev) => {
      return { ...prev, [id]: value };
    });
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (input.label && input.time) {
      let labelsArray = items.map((i) => i.label);
      if (labelsArray.includes(input.label)) {
        alert(`${input.label} ALREADY EXISTS`);
      } else {
        setItems((prev) => [...prev, input]);
        setInput({ label: "", time: "" });
      }
    }
  };

  return (
    <div className="w-[400px] p-5 bg-white rounded-[7px] shadow-bxs ">
      <form
        className="flex items-center justify-between bg-white rounded-xl"
        onSubmit={formSubmissionHandler}
      >
        <div className="flex gap-[10px] w-[80%]">
          <input
            type="text"
            id="label"
            className="p-[7px] text-[#474747] border-solid border-[#ccc] border-[1px] rounded-[5px] bg-inherit inline-block text-[0.8em] w-[180px] "
            placeholder="item of schedule"
            value={input.label}
            onChange={inputChangedHandler}
            required
          />
          <input
            type="number"
            id="time"
            className="p-[7px] text-[#474747] border-solid border-[#ccc] border-[1px] rounded-[5px] bg-inherit inline-block text-[0.8em] w-[70px]"
            min="0.1"
            onChange={inputChangedHandler}
            placeholder="minutes"
            step="0.05"
            value={input.time}
            required
          />
        </div>
        <button className="text-white py-[7px] px-5 rounded-[5px] bg-[#800080] uppercase border-none font-medium text-[0.8em] ">
          add
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
