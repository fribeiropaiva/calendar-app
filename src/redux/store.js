import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from './calendarSlice';

export default configureStore({
  reducer: {
    calendarDates: calendarReducer
  }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})