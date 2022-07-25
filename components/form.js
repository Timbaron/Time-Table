import { TextField } from '@mui/material'
import React, { useState, useStyles } from 'react'

export default function Form({ name, courses, setName, setCourses }) {
    return (
        <div>
            {/* <input type="text" onChange={(e) => setName(e.target.value)} className={styles.input} placeholder="Enter your name" /> */}
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter First Name"
                style={{ width: '100%', marginBottom: '10px' }}
                placeholder="E.g Timothy Akiode"
                onChange={(e) => setName(e.target.value)}
                value={name}
                focused={(name !== '') ? true : false}
            />
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter Total Number of Courses"
                placeholder="E.g 3"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(e) => setCourses(e.target.value)}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={courses}
                focused={(courses > 0) ? true : false}
            />
            {/* <input type="number" onChange={(e) => setCourses(e.target.value)} className={styles.input} placeholder="Enter total Courses" /> */}
        </div>
    )
}
