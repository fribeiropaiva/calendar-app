import React, { useEffect, useState } from 'react';
import './calendar.scss';
import moment from 'moment';
import Modal from 'react-modal';
import axios from 'axios';
import { buildCalendar } from '../../utils/buildCalendar';
import { CalendarDay } from '../../components/CalendarDay';
import { AddNewReminderForm } from '../../components/AddNewReminderForm';

function Calendar(props) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [reminderContent, setReminderContent] = useState('');
  const [calendarState, setCalendarState] = useState([]);
  const [newReminderDate, setNewReminderDate] = useState(null);
  const [city, setCity] = useState('');
  const [cityName, setCityName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [temperature, setTemperature] = useState();

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const newCalendar = buildCalendar(value);
    setCalendar(newCalendar);
  }, [value]);

  useEffect(() => {
    async function getWeatherForecastForToday() {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a0816844868c865a8774b875e09b5295`)
      setTemperature(res.data.main.temp);
    }

    if (cityName) {
      getWeatherForecastForToday();
    }
  }, [cityName]);

  function generateId() {
    return Math.floor(Math.random() * 100)
  }

  function handleAddNewReminder() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
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

  function handleSaveCity() {
    setCityName(city);
  }

  function handleEditReminder() {
    console.log('editing');
  }

  return (
    <div className="container">
      <header>
        <button className='add-new-reminder-button' onClick={handleAddNewReminder}>+</button>
        <div>
          {cityName
            ?
            <p>It is {temperature}ºC today in {city}</p>
            :
            <label htmlFor='city-input'>
              Your city:
              <input id='city-input' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
              <button type='button' onClick={handleSaveCity}>Save</button>
            </label>
          }
        </div>
      </header>
      <div className='weekdays'>
        {weekDays.map((day => <p className='week-day'>{day}</p>))}
      </div>
      <section className='calendar'>
        {calendar.map((day) => <CalendarDay key={day.format('MM/DD/YYYY')} day={day} value={value} calendarState={calendarState} />)}
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className='Modal'
        overlayClassName='Overlay'
        ariaHideApp={false}
        >
          <AddNewReminderForm
            city={city}
            setCity={setCity}
            handleCloseModal={handleCloseModal}
            reminderContent={reminderContent}
            setReminderContent={setReminderContent}
            newReminderDate={newReminderDate}
            setNewReminderDate={setNewReminderDate}
            handleSubmitNewReminder={handleSubmitNewReminder}
          />
        </Modal>
    </div>
  )
}

export default Calendar;