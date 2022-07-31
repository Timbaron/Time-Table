import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Form from './form';
import Courses from './course';
import Cookie from "js-cookie"
import Confirm from './confirm';
import Days from './days';




export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const [name, setName] = useState('')
    const [totalcourses, setTotalCourses] = useState(0)
    const [Allcourses, setAllCourses] = useState([]);
    const [readdays, setReadDays] = useState([]);



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const steps = [
        {
            label: `Personal details:`,
            title: `Enter your name and total number of courses`,
            description: <Form name={name} courses={totalcourses} setName={setName} setCourses={setTotalCourses} />,
        },
        {
            label: 'Course Details',
            title: 'Enter Title for each course',
            description: <Courses totalcourses={totalcourses} Allcourses={Allcourses} setAllCourses={setAllCourses} />,
        },
        {
            label: 'Days',
            title: 'Select Reading days',
            description: <Days setReadDays={setReadDays} readdays={readdays} />,
        },
        {
            label: 'Confirm',
            title: 'Confirm your Enteries',
            description: <Confirm Allcourses={Allcourses} name={name} readdays={readdays} totalcourses={totalcourses} />,
        },
    ];

    return (
        <div className="box">
            <Box sx={{ maxWidth: 500 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <h2>{step.title}</h2>
                                {step.description}
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'GENERATE' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
        </div>
    );
}
