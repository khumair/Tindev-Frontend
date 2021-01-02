import React from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

const DatePick = () => {
  const [day, setDay] = React.useState<DayValue>(null)

  const year = new Date().getFullYear.toString().substr(-2)
  const range = parseInt(year + 1)

  const maximumDate = {
    year: range,
    month: 5,
    day: 30,
  }

  return (
    <>
      <DatePicker
        value={day}
        onChange={setDay}
        inputPlaceholder="Select earliest starting day"
        maximumDate={maximumDate}
      />
    </>
  )
}

export default DatePick
