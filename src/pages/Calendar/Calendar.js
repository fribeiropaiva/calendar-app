import React from 'react';
import './calendar.scss';

function Calendar(props) {
  // your calendar implementation Goes here!
  // Be creative
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className="container">
      <header>
        {weekDays.map((day => <p className='week-day'>{day}</p>))}
      </header>
      <section className='calendar'>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
        <div className='calendar-day'>1</div>
      </section>
    </div>
  )
}

export default Calendar;