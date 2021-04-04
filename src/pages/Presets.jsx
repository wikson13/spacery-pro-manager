import React, {useEffect} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {makeStyles} from "@material-ui/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import {ExposureNeg1, PlusOne} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";

export const Presets=()=>{
    const classes = useStyles();
    const [values, setValues] = React.useState({
        focalLength: '',
        sensorMultiply: '',
        cameraOrientation:'portrait'
    });

    const [frameAngle, setFrameAngle] = React.useState({x:0,y:0});
    const [rows, setRows] = React.useState(0);
    const [columns, setColumns] = React.useState(0);
    const sensorMultiplyTemplates = [
        { title: 'FullFrame (x 1.00)', value: 1 },
        { title: 'Nikon APS-C (x 1.53)', value: 1.53 },
        { title: 'Canon APS-C (x 1.62)', value: 1.62 },
        { title: 'Canon APS-H (x 1.29)', value: 1.29 },

]
    useEffect(()=>{
        if(!!values.focalLength&&!!values.sensorMultiply){
            console.log('changeVakues')
            calcAngleOfView(values.focalLength,values.sensorMultiply)

        }
    },[values])

    const calcAngleOfView=(_ogniskowa, _matryca)=> {
        const ogniskowa=Number(_ogniskowa)
        const matryca=Number(_matryca)
        let pi = Math.PI;
        let angleRadH = 2 * Math.atan((36 / matryca) / (2 * ogniskowa));
        let angleDegH = (angleRadH * (180 / pi)).toFixed(2);

        let angleRadV = 2 * Math.atan((24 / matryca) / (2 * ogniskowa));
        let angleDegV = (angleRadV * (180 / pi)).toFixed(2);
        setFrameAngle({x:angleDegH,y:angleDegV})
        setColumns(calcMinNumbOfPhotos(360/(values.cameraOrientation!=='portrait'?angleDegH:angleDegV)))
        setRows(calcMinNumbOfPhotos(180/(values.cameraOrientation==='portrait'?angleDegH:angleDegV)))
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const generateFrame=()=>{
        return <div style={{width: values.cameraOrientation==='portrait'?266:400, height: values.cameraOrientation==='portrait'?400:266, backgroundColor: 'red'}}>
            <p>{frameAngle.x}°</p>
            <p>{frameAngle.y}°</p>
        </div>
    }

    const calcMinNumbOfPhotos=(value)=>{
        console.log(value)
        return Math.ceil(value)
    }

    return (<>
        <div style={{display:'flex'}}>
            <FormControl  className={classes.input} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Ogniskowa obiektywu</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('focalLength')}
                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
            <Autocomplete
                className={classes.input}
                id="sensor-multiply"
                freeSolo
                onChange={(event, value) => console.log({event: event, value: value, e:event.target.dataset.optionIndex, val:sensorMultiplyTemplates[event.target.dataset.optionIndex].value})}
                // onChange={(event, value) => setValues({ ...values, sensorMultiply: value })}
                onInputChange={(event, value) => setValues({ ...values, sensorMultiply: sensorMultiplyTemplates[event.target.dataset.optionIndex].value })}
                options={sensorMultiplyTemplates.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField {...params} label="Mnożnik matrycy"  variant="outlined"  />
                )}
            />
            <FormControl variant="outlined" className={classes.input}>
                <InputLabel id="camera-orientation-label">Ustawienie aparatu</InputLabel>
                <Select
                    labelId="camera-orientation-label"
                    id="camera-orientation"
                    value={values.cameraOrientation}
                    onChange={(event)=> setValues({ ...values, cameraOrientation: event.target.value })}
                    label="Ustawienie aparatu"
                >
                    <MenuItem value='portrait'>Pionowe </MenuItem>
                    <MenuItem value='landscape'>Poziome  </MenuItem>
                    {/*<CameraAltOutlinedIcon />*/}
                </Select>
            </FormControl>

        </div>
        <div>
            <h1>focalLength: {values.focalLength}</h1>
            <h1>sensorMultiply: {values.sensorMultiply}</h1>
            <h1>cameraOrientation: {values.cameraOrientation}</h1>
        </div>
            <div>
                {generateFrame()}
            </div>
            <div className={classes.sliderContainer}>
                <IconButton onClick={()=>setRows(rows-1)} disabled={rows===1}  className={classes.iconButton}>
                    <ExposureNeg1  />
                </IconButton>
                <TextField  label="Wiersze" variant="outlined" value={rows} onChange={e=>setRows(e.target.value)}/>
                <IconButton onClick={()=>setRows(rows+1)}  className={classes.iconButton}>
                    <PlusOne  />
                </IconButton>
            </div>
            <div className={classes.sliderContainer}>
                <IconButton onClick={()=>setColumns(columns-1)} disabled={columns===1}  className={classes.iconButton}>
                    <ExposureNeg1  />
                </IconButton>
                <TextField  label="Kolumny" variant="outlined" value={columns} onChange={e=>setColumns(e.target.value)}/>
                <IconButton onClick={()=>setColumns(columns+1)}  className={classes.iconButton}>
                    <PlusOne  />
                </IconButton>
            </div>
    </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input:{flexGrow:3, margin:10},
    sliderContainer:{
        display:'flex', alignItems:'center'
    },
    iconButton:{margin:'1%'}
}));
