import React, { useState } from "react";

import DatePicker, { utils, DayValue } from "react-modern-calendar-datepicker";
import "./style.scss";

const DateSelector = () => {
  // const [day, setDay] = React.useState<DayValue>(null);
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);

  const formatInputValue = () => {
    if (!selectedDay) return "";
    return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;
  };
  const dateFormating = ({ref : any[]}) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={selectedDay ? `✅: ${selectedDay.day}` : ""}
      style={{
        textAlign: "center",
        padding: "1rem 1.5rem",
        fontSize: "1.5rem",
        border: "1px solid #9c88ff",
        borderRadius: "100px",
        boxShadow: "0 1.5rem 2rem rgba(156, 136, 255, 0.2)",
        color: "#9c88ff",
        outline: "none",
      }}
      className="my-custom-input-class" // a styling class
    />
  );
  return (
    <>
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        formatInputText={formatInputValue}
        renderInput={dateFormating}
      />
    </>
  );
};
export default DateSelector;
