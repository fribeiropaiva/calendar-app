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
    if (calendarState.length && calendarState[0].date === date) {
      setReminders([...calendarState[0].reminders])
    }
  }, [date, calendarState])

  // function addReminderToCalendarDay(date) {
  //   const newReminder = {
  //     content,
  //     id: generateId()
  //   }

  //   calendarDayContent.reminders.push(newReminder);

  //   addToCalendar((oldstate) => [...oldstate, calendarDayContent]);
  //   setReminders((oldstate) => [...oldstate, newReminder])
  //   setContent('');
  // }

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