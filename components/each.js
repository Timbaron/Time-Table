import { Button, TextField } from '@mui/material'
import React, { useState, useId, useEffect } from 'react'
import Cookie from "js-cookie"

export default function Each({ number, Allcourses, setAllCourses}) {
    const [course, setCourse] = useState('')
    const [old, setOld] = useState('')
    const id = useId();
    const [status,setStatus] = useState('unsaved')
    
    function saveHandler(code){
        if(code !== ''){
            if(Allcourses.includes(code)){
                setStatus('saved')
            }else{
                setAllCourses([...Allcourses, code])
                setStatus('saved')
            }
        }

    }
    function changeHandler(code){
        setStatus('unsaved')
        setOld(code)
    }
    return (
        <div>
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter Course Title"
                style={{ width: '100%', marginBottom: '10px' }}
                placeholder="E.g CMP 124"
                onChange={(e) => changeHandler(e.target.value)}
                InputProps={{ endAdornment: <Button variant="outlined" onClick={() => saveHandler(old)} disabled={(status == 'saved') ? true : false}>{status}</Button> }}
            />
        </div>
    )
}
