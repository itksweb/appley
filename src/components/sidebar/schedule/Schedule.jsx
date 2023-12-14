import ScheduleForm from "./ScheduleForm";
import ItemInSchedule from "./ItemInSchedule";
import { useSelector } from "react-redux";
import Actions from "./Actions";

const Schedule = () => {
  const items = useSelector((state) => state.app.items);

  return (
    <>
      <ScheduleForm />
      {items.length > 0 && (
        <ul className="listed">
          {items.map((item) => (
            <ItemInSchedule
              label={item.label}
              time={item.time}
              key={item.label}
            />
          ))}
        </ul>
      )}
      <Actions />
    </>
  );
};

export default Schedule;
