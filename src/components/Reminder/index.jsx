import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaRegWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { editReminder } from '../../redux/calendarSlice';
import './styles.scss';

export function Reminder({ reminder, date, expandedMode }) {
  const [editMode, setEditMode] = useState(false);
  const [newReminderContent, setNewReminderContent] = useState(reminder.content);
  const [newReminderCity, setNewReminderCity] = useState(reminder.city);
  const [newReminderTime, setNewReminderTime] = useState(reminder.time);
  const appState = useSelector(state => state);
  const dispatch = useDispatch();

  function handleEditReminder() {
    const id = reminder.id;
    const updatedReminder = {
      content: newReminderContent,
      id,
      city: newReminderCity,
      time: newReminderTime
    }
    dispatch(editReminder({ date, updatedReminder }));
    setEditMode(false);
  }

  return (
    <div className='reminder-container'>
      {editMode && expandedMode ?
        <form>
          <input id='edit-content-input' type='text' onChange={(e) => setNewReminderContent(e.target.value)} value={newReminderContent}/>
          <input id='edit-city-input' type='text' onChange={(e) => setNewReminderCity(e.target.value)} value={newReminderCity}/>
          <input id='edit-time-input' type='time' onChange={(e) => setNewReminderTime(e.target.value)} value={newReminderTime}/>
          <div className='controls'>
            <button onClick={handleEditReminder}><FaCheck /></button>
            <button onClick={() => setEditMode(false)}><FaRegWindowClose /></button>
          </div>
        </form>
      :
      <p key={reminder + Math.floor(Math.random() * 10000)} className='reminder'>{newReminderContent}</p>
      }
      {expandedMode && !editMode ?
          <div className='controls'>
            <button onClick={() => setEditMode(true)} className='edit-button'><FaEdit /></button>
            <button className='delete-button'><FaTrash /></button>
          </div>
          :
          null
      }
      <span className='city-time'>In {newReminderCity} at {newReminderTime}</span>
    </div>
  )
}