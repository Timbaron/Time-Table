import React from 'react'
import Each from './each';

export default function Courses({ courses }) {
  const rendered = [];
  for (var i = 1; i <= courses; i++) {
    rendered.push(<Each number={i} />);
  }
  return (
    <div>
      {rendered}
    </div>
  )
}
