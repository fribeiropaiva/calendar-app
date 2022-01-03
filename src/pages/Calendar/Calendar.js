import React, { useEffect, useState } from 'react';
import { CalendarDay } from '../../components/CalendarDay';
import './calendar.scss';
import moment from 'moment';
import { buildCalendar } from '../../utils/buildCalendar';

function Calendar(props) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [reminderContent, setReminderContent] = useState('');
  const [calendarState, setCalendarState] = useState([]);
  const [newReminderDate, setNewReminderDate] = useState(null);
  const [city, setCity] = useState('');

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const newCalendar = buildCalendar(value)
    setCalendar(newCalendar)
  }, [value]);

  function generateId() {
    return Math.floor(Math.random() * 100)
  }

  function handleAddNewReminder() {
    setIsAddingNew(true);
  }

  function handleCloseNewReminderInput() {
    setIsAddingNew(false);
  }

  function handleSubmitNewReminder() {
    const dateObject = new Date(newReminderDate);
    const chosenDate = moment(dateObject).format('MM/DD/YYYY');
    const chosenTime = moment(dateObject).format('HH.mm.ss')

    const calendarStateAtDate = calendarState.find(entry => entry.date === chosenDate);

    if (!calendarStateAtDate) {
      const newCalendarDayContent = {
        date: chosenDate,
        reminders: [{
          content: reminderContent,
          id: generateId(),
          city,
          time: chosenTime
        }]
      }

      setCalendarState(calendarState.concat(newCalendarDayContent))
    } else {
      const updatedCalendarState = calendarState.map(entry => {
        if (entry.date === chosenDate) {
          entry.reminders.push({
            content: reminderContent,
            id: generateId(),
            city,
            time: chosenTime
          });
        }
        return entry;
      });

      setCalendarState(updatedCalendarState)
    }

    setReminderContent('');
    setNewReminderDate('');
    setCity('');
  }

  return (
    <div className="container">
      <header>
        {isAddingNew ?
            <form onSubmit={(e) => e.preventDefault()}>
              <button className='close-new-reminder-input' onClick={handleCloseNewReminderInput}>X</button>
              <label for='add-new-reminder'>Reminder:
                <input id='add-new-reminder' className='add-new-reminder-input' type='text' value={reminderContent}  maxlength="30" onChange={(e) => setReminderContent(e.target.value)} />
              </label>
              <label for='new-reminder-date'>Date:
                <input id='new-reminder-date' className='new-reminder-date' type='datetime-local' value={newReminderDate} onChange={(e) => setNewReminderDate(e.target.value)} />
              </label>
              <label>City:
                <input id='city' className='city' type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
              </label>
              <button type='submit' onClick={() => handleSubmitNewReminder()}>Save</button>
            </form>
            :
            <button className='add-new-reminder-button' onClick={handleAddNewReminder}>+</button>
          }
      </header>
      <div className='weekdays'>
        {weekDays.map((day => <p className='week-day'>{day}</p>))}
      </div>
      <section className='calendar'>
        {calendar.map((day) => <CalendarDay key={day.format('MM/DD/YYYY')} day={day} value={value} calendarState={calendarState} />)}
      </section>
    </div>
  )
}

export default Calendar;