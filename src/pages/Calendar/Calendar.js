import React, { useEffect, useState } from 'react';
import { CalendarDay } from '../../components/CalendarDay';
import './calendar.scss';
import moment from 'moment';
import { buildCalendar } from '../../utils/calendarHelpers';

function Calendar(props) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const newCalendar = buildCalendar(value)
    setCalendar(newCalendar)
  }, [value])

  return (
    <div className="container">
      <header>
        {weekDays.map((day => <p className='week-day'>{day}</p>))}
      </header>
      <section className='calendar'>
        {calendar.length && calendar.map((day) => <CalendarDay day={day} value={value}/>)}
      </section>
    </div>
  )
}

export default Calendar;