import React from 'react'
import Cookie from "js-cookie"
import { Checkbox, Typography } from '@mui/material'

export default function Confirm({Allcourses}) {
  
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {/* map throught allcourses array */}
        {Allcourses.map((course, index) => {
          return <div key={index}>{course}</div>
        }
        )}
      </Typography>
    </div>
  )
}
