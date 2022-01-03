import React from 'react';
import './styles.scss';

export function Reminder({ reminder }) {
  return (
    <div className='reminder-container'>
      <p key={reminder + Math.floor(Math.random() * 10000)} className='reminder'>{reminder.content}</p>
      <span className='city-time'>In {reminder.city} at {reminder.time}</span>
    </div>
  )
}