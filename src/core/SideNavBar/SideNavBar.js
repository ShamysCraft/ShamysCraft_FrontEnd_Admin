
import React from "react"
import { Link } from 'react-router-dom'

import { Typography } from "@material-ui/core"
import { MonetizationOn, Storefront, LibraryAdd, DoneAll, HourglassEmpty, DeleteOutline } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles"
import { COLOURS } from "../../theme/colors"
const useStyles = makeStyles((theme) => ({
    sidebar: {
        position: 'fixed',
        height: '80%',
        width: '200px',
        backgroundColor: 'white',
        margin: '50px 0 25px 0',
        borderRadius: '5px',
    },

    sidebarList: {
        height: 'auto',
        marginTop: '20px',
        width: '100%',
        padding: '8px'
        
    },

    row: {
        width: '100%',
        height: '60px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        outline: '0 !important',
        backgroundColor: '#E3E3E3',
        paddingLeft: '10px',
        borderRadius: '6px 0 0 2px',
        boxShadow: 'rgba(0,0,0,0.5)',
        "&:active": {
            outline: 'none'
        },
        "&:focus": {
            outline: 'none'
        },

    },

    title: {
        flex: '70%',
        display: 'grid',
        placeItems: 'center',
        padding: '20px',
        textDecoration: 'none',
        color: 'black',
        outline: 0,
        "&:active": {
            color: 'black',
            outline: 'none'
        },
        "&:focus": {
            color: 'black',
            outline: 'none'

        },
        "&:hover": {
            textDecoration: ` 2px underline ${COLOURS.darkBlue}`,
            outline: 'none'
            // width: '100px',
            // backgroundColor: '#d8e2dc',
            // boxShadow: '0px 0px 10px 8px #d8e2dc'
        }
        ,
        "&:visited": {
            color: 'black',
            textDecoration: 'none',
            outline: 'none'

        }
    }

}));
const SideNavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            {/* <Typography variant="h4" style={{}} className={classes.category}>Category</Typography> */}
            <ul className={classes.sidebarList}>
                <li className={classes.row} ><Storefront /><Link style={{ textDecoration: 'none' }} to='/'><Typography className={classes.title}>Visit Shop</Typography></Link></li>
                <li className={classes.row} ><MonetizationOn /><Link style={{ textDecoration: 'none' }} to='/shopSales'><Typography className={classes.title}>Sales</Typography></Link></li>
                <li className={classes.row} ><LibraryAdd /><Link style={{ textDecoration: 'none' }} to='/addCategory'><Typography className={classes.title}>Add Category</Typography></Link></li>
                <li className={classes.row} ><LibraryAdd /><Link style={{ textDecoration: 'none' }} to='/addItem'><Typography className={classes.title}>Add Item</Typography></Link></li>
                <li className={classes.row} ><HourglassEmpty /><Link style={{ textDecoration: 'none' }} to='/pendingOrder'><Typography className={classes.title}>Pending Orders</Typography></Link></li>
                <li className={classes.row} ><DoneAll /><Link style={{ textDecoration: 'none' }} to='/confirmOrder'><Typography className={classes.title}>Confirm Orders</Typography></Link></li>
                <li className={classes.row} ><DeleteOutline /><Link style={{ textDecoration: 'none' }} to='/rejectedOrder'><Typography className={classes.title}>Rejected Orders</Typography></Link></li>
            </ul>
        </div>
    )
}

export default SideNavBar