import React from 'react';
import './styles.scss';

export function CalendarDay({ day, value }) {
  const isThisMonth = day.format('MMMM') === value.clone().format('MMMM');
  const dayName = day.format('dddd');
  const dayNumber = day.format('D');
  const date = day.format("MM/DD/YYYY");
  const isWeekendDay = (dayName === 'Saturday' || dayName === 'Sunday')

  return (
    <div className={`calendar-day ${isWeekendDay ? 'weekend-day' : ''} ${isThisMonth ? '' : 'not-from-this-month'}`}>
      <div className='day-container'>
        {dayNumber}
      </div>
      <div className='reminders-container'>
        <p className='reminder'>Get groceries</p>
        <p className='reminder'>Go to the pharmacy</p>
        <p className='reminder'>AOSDIh OISAD oAS dOIS dA IOShd OAISD</p>
        <p className='reminder'>OASID  OSIDOId SAd ASAD oiAS diASOdiASOidASOId AS</p>
        <p className='reminder'>oIAS HD AOSID AASO IDAOSIdhAISOD AOISHD AOSIdhAOSIdhASOdi</p>
        <p className='reminder'>Get groceries</p>
        <p className='reminder'>Go to the pharmacy</p>
        <p className='reminder'>AOSDIh OISAD oAS dOIS dA IOShd OAISD</p>
        <p className='reminder'>OASID  OSIDOId SAd ASAD oiAS diASOdiASOidASOId AS</p>
        <p className='reminder'>oIAS HD AOSID AASO IDAOSIdhAISOD AOISHD AOSIdhAOSIdhASOdi</p>
      </div>
    </div>
  )
}