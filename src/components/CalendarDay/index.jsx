import React, { useEffect, useState } from 'react';
import './styles.scss';

export function CalendarDay({ day, value, calendarState }) {
  const [reminders, setReminders] = useState([]);

  const isThisMonth = day.format('MMMM') === value.clone().format('MMMM');
  const dayName = day.format('dddd');
  const dayNumber = day.format('D');
  const date = day.format("MM/DD/YYYY");
  const isWeekendDay = (dayName === 'Saturday' || dayName === 'Sunday');

  useEffect(() => {
    function getReminders() {
      const filteredReminders = calendarState.filter(entry => entry.date === date);

      if (filteredReminders.length) {
        setReminders([...filteredReminders[0].reminders])
      }
    }

    if (isThisMonth) {
      getReminders();
    }
  }, [date, calendarState, isThisMonth]);

  return (
    <div className={`calendar-day ${isWeekendDay ? 'weekend-day' : ''} ${isThisMonth ? '' : 'not-from-this-month'}`}>
      <div className='day-header'>
        <div className='day-container'>
          {dayNumber}
        </div>
        <div className='controls'>
        </div>
      </div>
      <article className='reminders-container'>
        {reminders && !!reminders.length && reminders.map((reminder) => {
          return <p key={reminder + Math.floor(Math.random() * 10000)} className='reminder'>{reminder.content}</p>
        }) }
      </article>
    </div>
  )
}