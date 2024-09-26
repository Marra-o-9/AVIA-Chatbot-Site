import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Schedule() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Agendamento</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Data selecionada: {date.toDateString()}</p>
    </div>
  );
}

export default Schedule;
