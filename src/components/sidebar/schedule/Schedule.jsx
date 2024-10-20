import ScheduleForm from "./ScheduleForm";
import ItemInSchedule from "./ItemInSchedule";
import Actions from "./Actions";
import { useState } from "react";

const Schedule = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <ScheduleForm items={items} setItems={setItems} />
      {items.length > 0 && (
        <ul className="w-[400px] p-5 bg-white rounded-[7px] shadow-bxs ">
          {items.map((item) => (
            <ItemInSchedule
              label={item.label}
              time={item.time}
              key={item.label}
              items={items}
              setItems={setItems}
            />
          ))}
        </ul>
      )}
      <Actions items={items} setItems={setItems} />
    </>
  );
};

export default Schedule;
