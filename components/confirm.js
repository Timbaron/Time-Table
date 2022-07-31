import { Typography } from '@mui/material'
import React from 'react'

export default function Confirm({ Allcourses, name, readdays, totalcourses }) {
  
  return (
    <div>
      {/* display name and total number of courses*/}
      <Typography variant="h6" gutterBottom>
        Name: <div style={{ fontWeight: 'bold' }}>{name}</div>
        </Typography>
      <Typography variant="h6" gutterBottom>
        Total Courses: <div style={{ fontWeight: 'bold' }}>{totalcourses}</div>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Courses: {Allcourses.map((course, index) => {
          return <div style={{fontWeight: 'bold'}} key={index}>{course}</div>
        }
        )}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Courses: {readdays.map((day, index) => {
          return <div style={{ fontWeight: 'bold' }} key={index}>{day}</div>
        }
        )}
      </Typography>

    </div>
  )
}
