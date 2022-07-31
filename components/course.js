import React from 'react'
import Each from './each';


export default function Courses({ totalcourses, Allcourses, setAllCourses }) {
  const rendered = [];
  for (var i = 1; i <= totalcourses; i++) {
    rendered.push(<Each number={i} Allcourses={Allcourses} setAllCourses={setAllCourses} />);
  }
  return (
    <div>
      {rendered}
    </div>
  )
}
