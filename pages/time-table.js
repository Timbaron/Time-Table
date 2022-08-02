import { Button, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useState, useEffect } from 'react'

export default function TimeTable() {
    // get items from localStorage
    const name = localStorage.getItem('name');
    const totalcourses = localStorage.getItem('totalcourses');
    const [title, setTitle] = useState('Generating....');
    const Allcourses = JSON.parse(localStorage.getItem('Allcourses'));
    const readdays = JSON.parse(localStorage.getItem('readdays'));
    const [isLoading, setIsLoading] = useState(true);
    const [timetable, setTimeTable] = useState([]);
    function GenerateTable() {
        setIsLoading(true);
        setTimeout(() => {
            const table = [];
            setTimeTable(table);
            readdays.forEach(day => {
                const courses = Allcourses.sort(() => Math.random() - 0.5).slice(0, 3);
                table.push({
                    day,
                    courses
                });
            }, []);
            setIsLoading(false);
            setTimeTable(table);
            setTitle('Time Table');
        }, 3000);
        // return table;
    }
    // genrate time-table
    useEffect(() => {
        GenerateTable();
    }, []);
    // sort courses by day
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {(isLoading) ? (
                <div>
                    <LinearProgress color="secondary" />
                    <Typography variant="h4" align="center" mt={3} gutterBottom>{name}, Kindly Hold on while we generate your Time Table</Typography>
                </div>
            ) : (
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <TableContainer>
                        <Table sx={{ maxWidth: '90%', margin: 10 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell variant="head">Reading Days</TableCell>
                                    <TableCell align="center">Course 1</TableCell>
                                    <TableCell align="center">Course 2</TableCell>
                                    <TableCell align="center">Course 3</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {timetable.map(table => (
                                    <TableRow key={table.day}>
                                        <TableCell>{table.day}</TableCell>
                                        <TableCell align="center">{table.courses[0]}</TableCell>
                                        <TableCell align="center">{table.courses[1]}</TableCell>
                                        <TableCell align="center">{table.courses[2]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    {/* Button to regenrate */}
                    <Typography variant="h4" align="center" mt={3} gutterBottom>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setTitle('Re-Generating....');
                                GenerateTable();
                            }}>Regenerate Time Table</Button>
                    </Typography>

                </div>
            )}
        </div>
    )
}