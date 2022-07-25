import { TextField } from '@mui/material'
import React from 'react'

export default function Each({number}) {
  return (
      <TextField
          id="demo-helper-text-misaligned"
          label="Enter Course Title"
          style={{ width: '100%', marginBottom: '10px' }}
          placeholder="E.g Timothy Akiode"
        //   onChange={(e) => setName(e.target.value)}
      />
  )
}
