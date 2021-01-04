import React from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

const DateSelector = () => {
  const [day, setDay] = React.useState<DayValue>(null)

  const year = new Date().getFullYear.toString().substr(-2)
  const range = parseInt(year)

  const maximumDate = {
    year: range + 1,
    month: 12,
    day: 31,
  }

  return (
    <>
      <DatePicker
        value={day}
        onChange={setDay}
        inputPlaceholder="Select starting day"
        maximumDate={maximumDate}
        colorPrimary="#000"
      />
    </>
  )
}

export default DateSelector
