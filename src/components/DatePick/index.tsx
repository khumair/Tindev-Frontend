import React from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

const DatePick = () => {
  const [day, setDay] = React.useState<DayValue>(null)

  const year = new Date().getFullYear.toString().substr(-2)
  const currentYear = parseInt(year)

  const maximumDate = {
    year: currentYear,
    month: 12,
    day: 31,
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
