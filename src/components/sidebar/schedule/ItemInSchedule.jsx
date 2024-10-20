import img from "../../../assets/images/close-circle-outline.svg";

const ItemInSchedule = ({ label, time, setItems }) => {
  const removeItem = (e) => {
    setItems((prev) => prev.filter((item) => item.label !== e.target.id));
  };
  const swell = (e) => {
    e.target.classList.add("scale-125");
  };
  const shrink = (e) => {
    e.target.classList.remove("scale-125");
  };

  let timeFormatted;
  if (time >= 1) {
    let mins = Math.floor(time);
    let secs = (time * 60) % 60;
    const min = time < 2 ? " min " : " mins ";
    timeFormatted = `${mins}${min} ${secs ? `${secs} secs` : ""} `;
  } else {
    timeFormatted = time * 60 + " secs";
  }

  return (
    <li
      className=" flex items-center justify-between bg-white rounded-xl hover:bg-[#f3f3f3] "
      draggable="true"
      id={label}
    >
      <div className="flex gap-[10px] w-[80%] ">
        <span className="w-[60%] text-[0.9em]  ">{label}</span>
        <span className="text-[0.8em] self-center w-[40%] ">
          {timeFormatted}
        </span>
      </div>
      <img
        src={img}
        className="w-[16px] h-[16px] transition duration-200 "
        onClick={removeItem}
        onMouseOver={swell}
        onMouseOut={shrink}
        id={label}
      />
    </li>
  );
};

export default ItemInSchedule;
