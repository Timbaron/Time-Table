import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'

export default function Each({ number, Allcourses, setAllCourses}) {
    const [old, setOld] = useState('')
    const [status,setStatus] = useState('unsaved')
    const [cache,setCache] = useState('')
    
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
        if(status === 'saved'){
            if (Allcourses.includes(cache)) {
                setAllCourses(Allcourses.filter(course => course !== cache))
            }
        }
        setStatus('unsaved')
        setOld('')
        setOld(code)
    }
    const check = (code) =>{
        if (Allcourses.includes(code)) {
            setStatus('saved')
        }
    }

    useEffect(() => {
        check(old)
    },[old]);
    return (
        <div>
            <TextField
                id="demo-helper-text-misaligned"
                label="Enter Course Title"
                style={{ width: '100%', marginBottom: '10px' }}
                placeholder="E.g CMP 124"
                value={old}
                onChange={(e) => changeHandler(e.target.value)}
                onClick={(e) => setCache(e.target.value)}
                InputProps={{ endAdornment: <Button variant="outlined" onClick={() => saveHandler(old)} disabled={(status == 'saved') ? true : false}>{status}</Button> }}
            />
        </div>
    )
}
