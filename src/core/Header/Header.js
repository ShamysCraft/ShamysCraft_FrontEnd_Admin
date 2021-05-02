import React, { useState } from "react"
import { Link } from "react-router-dom"
import { COLOURS } from "../../theme/colors"
import { makeStyles } from "@material-ui/core/styles"

//import material ui design 

import ProfileIcon from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'

import MenuItem from '@material-ui/core/MenuItem';

import {
    AppBar,
    Tab,
    Tabs,
    Typography,
    Toolbar,
    Menu

} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    Search: {
        margin: '10px',
        marginLeft: 'auto',
        /* padding: 15px; */
        backgroundColor: 'white',
        opacity: '0.4',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px',
        height: '20px',
        width: '300px'
    },
    tab:{
        marginLeft: 'auto'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    }
    const [anchrorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose1 = () => {
        setAnchorEl(null);
    }
    const [open, setOpen] = useState();
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    // const onChange =(e,value) => {
    //     setValue(value);
    // }
    return (
        <AppBar >
            <Toolbar className="Header" style={{ backgroundColor: COLOURS.darkBlue }}>
                <Typography className="Logo" variant="h5" noWrap>ShamysCraft.com</Typography>
                {/* <div className={classes.Search} variant="contained" style={{ padding: '15px' }}>
                    <InputBase
                        className="inputSearch"
                        style={{ color: COLOURS.darkBlue }}
                        placeholder="Search.."


                    />
                    <Button disableRipple style={{ margin: '-10px', justifyContent: 'end' }} ><SearchIcon style={{ color: COLOURS.darkBlue, }} /></Button>
                </div> */}

                <Tabs
                    onChange={handleClickTab}
                    indicatorColor="primary"
                    value={value}
                    className={classes.tab}
                    
                >
                    <Tab style={{ margin: '-10px', justifyContent: 'end' }}  disableRipple component={Link} to='/' label="Home" icon={<HomeIcon />} > </Tab>
                    {/* <Tab disableRipple component={Link} to='/becomeSeller' label="Become a Seller" > </Tab> */}
                    <Tab disableRipple icon={<ProfileIcon className="icons" />} label="Profile" onClick={handleClick}> </Tab>
                    <Tab disableRipple component={Link} to='/help' icon={<HelpIcon className="icons" />} label="Help"> </Tab>
                    {/* <Tab disableRipple component={Link} to='/cart' icon={<CartIcon className="icons" />} label="Cart"> </Tab> */}
                </Tabs>
                <div className="minion">
                    <Menu variant="popover"
                        id="dropDown"
                        anchorEl={anchrorEl}
                        keepMounted
                        open={Boolean(anchrorEl)}
                        onClose={handleClose1}
                        style={{ top: '50px', left: '25px' }}
                    >
                        <MenuItem onClick={handleClose1} component={Link} to='/profile'>Profile</MenuItem>
                        {/* <MenuItem onClick={handleClose1} component={Link} to='/orderHistory'>My Orders</MenuItem> */}
                        <MenuItem onClick={handleClose1} component={Link} to='/signOut'>Sign Out</MenuItem>
                    </Menu>
                </div>
                {/* <Button disableRipple endIcon = {<ProfileIcon className="icons"/>} component={Link} to ='/account' variant="contained" color="primary">Go to Account </Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;