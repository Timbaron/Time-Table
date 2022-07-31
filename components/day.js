import { Checkbox } from '@mui/material';
import React, { useState , useEffect } from 'react'

export default function Day({ day, readdays, setReadDays }) {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        if (event.target.checked) {
            setReadDays([...readdays, day]);
        } else {
            setReadDays(readdays.filter(d => d !== day));
        }
        setChecked(event.target.checked);
    };
    useEffect(() => {
        setReadDays([]);
    }, []);
    return (
        <div>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                value={day}
            />{day}
        </div>
    )
}
