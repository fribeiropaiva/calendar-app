import React from 'react';
import './styles.scss';

export function AddNewReminderForm({
  city,
  setCity,
  handleCloseModal,
  reminderContent,
  setReminderContent,
  newReminderDate,
  setNewReminderDate,
  handleSubmitNewReminder
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button className='close-modal-button' onClick={handleCloseModal}>X</button>
      <label for='add-new-reminder'>Reminder:
        <input id='add-new-reminder' className='add-new-reminder-input' type='text' value={reminderContent}  maxlength="30" onChange={(e) => setReminderContent(e.target.value)} />
      </label>
      <label for='new-reminder-date'>Date:
        <input id='new-reminder-date' className='new-reminder-date' type='datetime-local' value={newReminderDate} onChange={(e) => setNewReminderDate(e.target.value)} />
      </label>
      <label>City:
        <input id='city' className='city' type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
      </label>
      <button className='submit-button' type='submit' onClick={() => handleSubmitNewReminder()}>Save</button>
    </form>
  )
}