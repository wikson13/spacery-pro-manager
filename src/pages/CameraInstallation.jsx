import React, {useState} from 'react'
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import fujiXt20 from '../assets/img/fuji_xt20.png'; // Tell webpack this JS file uses this image
import nikonD5200 from '../assets/img/nikon_D5200.png';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";




function getSteps(camera) {
    switch(camera){
        case 'fuji_xt20':
            return ['krok1' ,'krok2'];
        case 'nikon_d5200':
            return ['krok1' ,'krok2'];


    }
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';

        default:
            return 'Unknown step';
    }
}

export const CameraInstallation=()=>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeCamera,setActiveCamera]=useState(null);

    const steps = getSteps(activeCamera);

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

    return (<>
        <div className={classes.camerasWrapper}>
            <Card className={[classes.cameraCard, activeCamera==='fuji_xt20'&&classes.active]} variant="outlined" onClick={()=>setActiveCamera('fuji_xt20')}>
                <CardContent>
                    <img className={classes.img}  src={fujiXt20} alt='Fuji xt20' />

                </CardContent>
                <CardActions>
                    <Typography variant="h6">Fuji xt20</Typography>
                </CardActions>
            </Card>
            <Card className={[classes.cameraCard, activeCamera==='nikon_d5200'&&classes.active]} variant="outlined" onClick={()=>setActiveCamera('nikon_d5200')}>
                <CardContent>
                    <img className={classes.img}  src={nikonD5200} alt='Fuji xt20' />

                </CardContent>
                <CardActions>
                    <Typography variant="h6">Nikon D5200</Typography>
                </CardActions>
            </Card>
        </div>
            {activeCamera==='fuji_xt20'&&<div className={classes.contentCard}>
                <Typography variant='h4' style={{textAlign:'center', marginTop:10}}>Fuji XT20</Typography>



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



            </div>}
            {activeCamera==='nikon_d5200'&&<Card className={classes.contentCard}>
                <CardContent>
                    <Typography variant='h4' style={{textAlign:'center', marginTop:10}}>Nikon D5200</Typography>
                </CardContent>
            </Card>}
        </>
    )
}

const useStyles = makeStyles({
    contentCard:{margin:'1%'},
    cameraCard: {
        width:'50%',
        display:"flex",alignItems:'center',flexDirection:'column',margin:'1%', borderBottomWidth:5,
        "&:hover, &:focus": {backgroundColor:'rgba(0, 74, 209, .1)'}
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },img:{width:'100%'},
    camerasWrapper:{
        display:'flex',
    },active:{borderBottomColor:'#004AD1', borderBottomWidth:5},

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
});
// #2ecc71
