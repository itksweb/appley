import { useDispatch } from "react-redux";
import { setSchedule } from "../../../store/countdownSlice";
import { setApp } from "../../../store/sidebarSlice";

const Actions = ({ items, setItems }) => {
  const dispatch = useDispatch();
  const clearItems = () => setItems([]);

  const updateSchedule = () => {
    dispatch(setSchedule([...items]));
    dispatch(setApp(3));
  };

  return (
    <>
      {items.length > 0 && (
        <div className=" flex items-center justify-between rounded-[10px] w-[400px] mt-[30px] ">
          <button
            type="input"
            className="cursor-pointer py-[10px] px-[15px] text-[0.8em] rounded-[10px] border-none font-medium uppercase bg-white text-[#800080] "
            id="leftbtn"
            onClick={updateSchedule}
          >
            update schedule
          </button>
          <button
            className="py-[10px] px-[15px] text-[0.8em] rounded-[10px] border-none font-medium uppercase bg-white text-[#800080] cursor-pointer "
            id="rightbtn"
            onClick={clearItems}
          >
            clear all
          </button>
        </div>
      )}
    </>
  );
};

export default Actions;
