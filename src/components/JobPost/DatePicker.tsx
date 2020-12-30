import React from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'

const DateSelector = () => {
  const [day, setDay] = React.useState<DayValue>(null);


  return (
    <>
      <DatePicker value={day} onChange={setDay} />
    </>
  );
}

export default DateSelector;

/***  DatePicker Documentation 
https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/customization  
*/