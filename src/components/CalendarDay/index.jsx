import React from 'react';
import './styles.scss';

export function CalendarDay({ date, showModal }) {
  return (
    <div className='calendar-day'>
      <div className="day-container">
        {date}
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