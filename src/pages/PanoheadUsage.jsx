import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function getSteps() {
    return ['Przygotowanie głowicy', 'Łączenie z urządzeniem', 'Kalibracja początkowa', 'Ustawienia fotografowania','Sesja zdjęciowa'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
        case 3:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 4:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        default:
            return 'Unknown step';
    }
}


export const PanoheadUsage=()=>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleGoToStep = (number) => {
        setActiveStep(number);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{backgroundColor:'transparent'}}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel className={classes.label} onClick={()=>handleGoToStep(index)}>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Wstecz
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    {/*<Typography>Wszystkie kroki zakończone sukcesem</Typography>*/}
                    <Button onClick={handleReset} className={classes.button} variant="contained" color="primary">
                        Zacznij od początku
                    </Button>
                </Paper>
            )}
        </div>

    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button:{
        marginTop:10,
        marginRight:10
    },
    resetContainer:{
        backgroundColor:'transparent',  justifyContent:'center', display:'flex'
    },

}));


