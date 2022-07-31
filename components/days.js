import React, { useState } from 'react'
import Day from './day';

export default function Days({ setReadDays, readdays }) {
  // days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div>
      {days.map((day, index) => {
        return <Day key={index} day={day} readdays={readdays} setReadDays={setReadDays} />
      })}
    </div>
  )
}
