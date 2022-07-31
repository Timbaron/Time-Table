import React, { useId, useEffect } from 'react'
import Each from './each';
import Cookie from "js-cookie"


export default function Courses({ totalcourses, Allcourses, setAllCourses }) {
  const rendered = [];
  const courses = '';
  // delete all cookies from the browser when component is unmounted
  useEffect(() => {
    // check is courses exist in local storage
    // courses = localStorage.getItem('courses');
  }
    , [])
  for (var i = 1; i <= totalcourses; i++) {
    rendered.push(<Each number={i} Allcourses={Allcourses} setAllCourses={setAllCourses} />);
  }
  return (
    <div>
      {Allcourses.length}
      {rendered}
    </div>
  )
}
