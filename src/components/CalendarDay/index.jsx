import React, { useEffect, useState } from 'react';
import { Reminder } from '../Reminder';
import moment from 'moment';
import axios from 'axios';
import './styles.scss';

export function CalendarDay({ day, value, calendarDates }) {
  const [reminders, setReminders] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const today = moment(new Date()).format('MM/DD/YYYY');

  const dayName = day.format('dddd');
  const dayNumber = day.format('D');
  const date = day.format('MM/DD/YYYY');
  const isThisMonth = day.format('MMMM') === value.clone().format('MMMM');
  const isWeekendDay = (dayName === 'Saturday' || dayName === 'Sunday');
  const isToday = today === date;

  useEffect(() => {
    function getReminders() {
      console.log(calendarDates)
      const filteredReminders = calendarDates.filter(entry => entry.date === date);

      if (filteredReminders.length) {
        setReminders([...filteredReminders[0].reminders])
      }

    }

    if (isThisMonth) {
      getReminders();
    }
  }, [date, calendarDates, isThisMonth]);

  function handleCalendarDayEditing() {
    setEditMode(true)
  }

  return (
    <div
      onClick={handleCalendarDayEditing}
      className={`calendar-day ${isWeekendDay ? `weekend-day ${dayName.toLowerCase()}` : ''}
                ${isThisMonth ? '' : 'not-from-this-month'}
                ${editMode ? 'edit-mode' : ''}
                ${isToday ? 'today' : ''}`}
      onMouseLeave={() => setEditMode(false)}
    >
      <div className='day-header'>
        <div className='day-container'>
          {dayNumber}
        </div>
        <div className='controls'>
        </div>
      </div>
      <article className='reminders-container'>
        {reminders && !!reminders.length && reminders.map((reminder) => {
          return <Reminder reminder={reminder} />
        }) }
      </article>
    </div>
  )
}