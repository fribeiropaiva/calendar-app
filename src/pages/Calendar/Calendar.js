import React, { useEffect, useState } from "react";
import "./calendar.scss";
import moment from "moment";
import Modal from "react-modal";
import axios from "axios";
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';
import { buildCalendar } from "../../utils/buildCalendar";
import { CalendarDay } from "../../components/CalendarDay";
import { AddNewReminderForm } from "../../components/AddNewReminderForm";
import { useDispatch, useSelector } from "react-redux";
import { addReminder, addNewDate } from "../../redux/calendarSlice";

function Calendar(props) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [reminderContent, setReminderContent] = useState("");
  const [newReminderDate, setNewReminderDate] = useState(null);
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [temperature, setTemperature] = useState();
  const { calendarDates } = useSelector((state) => state);
  const dispatch = useDispatch();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  useEffect(() => {
    const newCalendar = buildCalendar(value);
    setCalendar(newCalendar);
  }, [value]);

  useEffect(() => {
    async function getWeatherForecastForToday() {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a0816844868c865a8774b875e09b5295`
      );
      setTemperature(res.data.main.temp);
    }

    if (cityName) {
      getWeatherForecastForToday();
    }
  }, [cityName]);

  function generateId() {
    return Math.floor(Math.random() * 100);
  }

  function handleAddNewReminder() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSubmitNewReminder() {
    const dateObject = new Date(newReminderDate);
    const date = moment(dateObject).format("MM/DD/YYYY");
    const chosenTime = moment(dateObject).format("HH:mm:ss");

    const calendarStateAtDate = calendarDates.find(
      (entry) => entry.date === date
    );

    if (!calendarStateAtDate) {
      const newCalendarDayContent = {
        date,
        reminders: [
          {
            content: reminderContent,
            id: generateId(),
            city,
            time: chosenTime
          }
        ]
      };

      return dispatch(addNewDate(newCalendarDayContent));
    }

    const updatedCalendarDates = calendarDates.map((entry) => {
      if (entry.date === date) {
        const newReminder = {
          content: reminderContent,
          id: generateId(),
          city,
          time: chosenTime
        };
        return {
          date,
          reminders: [...entry.reminders, newReminder]
        };
      }
      return entry;
    });

    dispatch(addReminder(updatedCalendarDates));
    setReminderContent("");
    setNewReminderDate("");
    setCity("");
  }

  function handleSaveCity() {
    setCityName(city);
  }

  return (
    <div className="container">
      <header>
        <button
          className="add-new-reminder-button"
          onClick={handleAddNewReminder}
        >
          +
        </button>
        <div className='city-month-name-container'>
          <p>{moment().format('MMMM')}</p>
          <div>
            {cityName ? (
              <>
                <p>
                  It is {temperature}ºC today in {city}
                </p>
                <button type="button" onClick={() => setCityName('')}>
                  <FaRegWindowClose />
                </button>
              </>
            ) : (
              <>
                <label htmlFor="city-input">
                  Your city:
                  <input
                    id="city-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
                <button type="button" onClick={handleSaveCity}>
                  <FaCheck />
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <div className="weekdays">
        {weekDays.map((day) => (
          <p className="week-day">{day}</p>
        ))}
      </div>
      <section className="calendar">
        {calendar.map((day) => (
          <CalendarDay
            key={day.format("MM/DD/YYYY")}
            day={day}
            value={value}
            calendarDates={calendarDates}
          />
        ))}
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
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
  );
}

export default Calendar;
