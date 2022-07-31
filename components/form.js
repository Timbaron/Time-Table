import { TextField } from '@mui/material'
import React from 'react'

export default function Form({ name, courses, setName, setCourses }) {
    return (
        <div>
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter your Name"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter Total Number of Courses"
                // placeholder="E.g 3"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(e) => setCourses(e.target.value)}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={courses}
                type="number"
                helperText="E.g 3"
            />
        </div>
    )
}
