import React, { useState, Fragment } from "react"
import { Link, useHistory } from "react-router-dom"
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
import { signout, isAuthenticated } from "../../auth/helper"
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
    tab: {
        marginLeft: 'auto'
    }
}));

const Header = (props) => {
    const history = useHistory()
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

                <Tabs
                    onChange={handleClickTab}
                    indicatorColor="primary"
                    value={value}
                    className={classes.tab}

                >
                    <Tab style={{ margin: '-10px', justifyContent: 'end' }} disableRipple component={Link} to='/' label="Home" icon={<HomeIcon />} > </Tab>
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

                        {/* not authenticated */}
                        {!isAuthenticated() && (
                            <MenuItem onClick={handleClose1} component={Link} to='/signin'><Typography color="primary">Sign In</Typography></MenuItem>
                        )}
                        {/* authenticated */}
                        {isAuthenticated() && (
                            <MenuItem onClick={handleClose1}>
                                <Typography color="secondary"
                                    onClick={() => {
                                        signout(() => {
                                            history.push("/admin/dashboard");
                                        })
                                    }}
                                >Sign Out</Typography>
                            </MenuItem>
                        )}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;