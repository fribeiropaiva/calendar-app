import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'calendar',
  initialState: [],
  reducers: {
    addNewDate(state, { payload }) {
      // const date = payload.date;
      // if (state.date) {
      //   const reminders = state.date.reminders.slice();
      //   reminders.push(...payload.reminders);
      //   const updatedDate = {
      //     date,
      //     reminders
      //   }
      //   return [...state, updatedDate]
      // }
      return [ ...state, payload]
    },
    addReminder(state, { payload }) {
      // const date = payload.date;
      // const reminders = payload.reminders;
      return [...payload]
    },
    editReminder(state, { payload }) {
      const updatedReminders = state.map(date => {
        if (date.date === payload.date) {
          const reminders = date.reminders.map(reminder => {
            if (reminder.id === payload.updatedReminder.id) {
              return { ...payload.updatedReminder }
            }
            return reminder;
          })
          return {...date, reminders };
        }
        return date;
      });

      return [...updatedReminders];
    },
    deleteReminder(state, { payload }) {
      const date = payload.date;
      const updatedReminders = date.reminders.filter(reminder => reminder.id !== payload.id);
      const updatedDate = {
        date,
        reminders: updatedReminders
      }

      return [...state, updatedDate]
    }
  }
})

export const { addNewDate, addReminder, editReminder, deleteReminder } = slice.actions;

export const selectDay = state => state.day;

export default slice.reducer;

// if (dateExists) {
//   const updatedCalendarDay = state.map(entry => {
//     if (entry.date === chosenDate) {
//       entry.reminders.push(payload.reminder)
//     }
//       return entry;
//     });
//   return [...state, updatedCalendarDay]
// }

// const newEntry = {
//   date: chosenDate,
//   reminders: [
//     payload.reminder
//   ]
// }

// return [...state, newEntry];