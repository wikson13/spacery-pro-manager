import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Step01 from "./instructions/panoheadHandling/Step01";
import {
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import {Presets} from "./pages/Presets";
import {VirtualTours} from "./pages/VirtualTours";
import {Valuation} from "./pages/Valuation";
import {CameraInstallation} from "./pages/CameraInstallation";
import {PanoheadUsage} from "./pages/PanoheadUsage";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const activeStyle={
    color: 'black',
    fontWeight:'bold'
}

const  App=()=> {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Spacery-wirtualne.pro
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List
                    component="nav"
                >
                    <NavLink
                        to="/virtual-tours"
                        activeStyle={activeStyle}
                    >
                    <ListItem button >
                        <ListItemIcon>
                            <ThreeSixtyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Spacery" />
                    </ListItem></NavLink>
                    <NavLink
                        to="/valuation"
                        activeStyle={activeStyle}
                    >
                    <ListItem button >
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Wycena" />
                    </ListItem></NavLink>

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Instrukcje" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>



                            <NavLink
                                to="/panohead-usage"
                                activeStyle={activeStyle}

                            >
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <TapAndPlayIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Obsługa głowicy" />
                                </ListItem>
                            </NavLink>


                            <NavLink
                                to="/camera-installation"
                                activeStyle={activeStyle}

                            >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <CameraAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="Montaż aparatów" />
                            </ListItem>
                            </NavLink>
                        </List>
                    </Collapse>
                    <NavLink
                    to="/presets"
                    activeStyle={activeStyle}

                    >
                    <ListItem button >
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Generator prestów" />
                    </ListItem></NavLink>
                </List>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path="/presets">
                        <Presets />
                    </Route>
                    <Route path="/virtual-tours">
                        <VirtualTours />
                    </Route>
                    <Route path="/valuation">
                        <Valuation />
                    </Route>
                    <Route path="/camera-installation">
                        <CameraInstallation />
                    </Route>
                    <Route path="/panohead-usage">
                        <PanoheadUsage />
                    </Route>
                    <Route path="/">
                        home
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
export default App;
