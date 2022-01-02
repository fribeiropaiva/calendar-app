import React from 'react';
import { CalendarDay } from '../../components/CalendarDay';
import './calendar.scss';

function Calendar(props) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className="container">
      <header>
        {weekDays.map((day => <p className='week-day'>{day}</p>))}
      </header>
      <section className='calendar'>
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
        <CalendarDay date={1} />
      </section>
    </div>
  )
}

export default Calendar;