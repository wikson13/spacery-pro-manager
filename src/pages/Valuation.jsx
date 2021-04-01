import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {PlusOne, ExposureNeg1} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";


export const Valuation=()=>{
    // eslint-disable-next-line no-undef
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div>

        <Typography id="continuous-slider" gutterBottom>
            Liczba punktów 360°
        </Typography>

        <div className={classes.sliderContainer}>
                <IconButton onClick={()=>setValue(value-1)} disabled={value===1}  className={classes.iconButton}>
                    <ExposureNeg1  />
                </IconButton>

                <Slider value={value} onChange={handleChange} step={1}

                        min={1}
                        max={150}         defaultValue={20}        valueLabelDisplay="auto"

                />
                <IconButton onClick={()=>setValue(value+1)} disabled={value===150} className={classes.iconButton}>
                    <PlusOne  />
                </IconButton>
        </div>

    </div>)
}

const useStyles = makeStyles({
    sliderContainer:{
        display:'flex', alignItems:'center'
    },
    iconButton:{margin:'1%'}
});
