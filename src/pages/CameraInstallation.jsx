import React, {useState} from 'react'
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import fujiXt20 from '../assets/img/fuji_xt20.png'; // Tell webpack this JS file uses this image
import nikonD5200 from '../assets/img/nikon_D5200.png'; // Tell webpack this JS file uses this image


export const CameraInstallation=()=>{
    const classes = useStyles();
const [activeCamera,setActiveCamera]=useState(null);
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
            {activeCamera==='fuji_xt20'&&<Card className={classes.contentCard}>
                <CardContent> Fuji</CardContent>
            </Card>}
            {activeCamera==='nikon_d5200'&&<Card className={classes.contentCard}>
                <CardContent> Nikon</CardContent>
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
    },active:{borderBottomColor:'#004AD1', borderBottomWidth:5}
});
// #2ecc71
