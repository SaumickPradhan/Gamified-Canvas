import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
// import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div class="calendar-setup">
      <h1>Calendar</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default Calender;
