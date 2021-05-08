import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import pic from "./pot.jpg"
import Dialog from '@material-ui/core/Dialog';
// import ViewItem from "../../../user/ViewItemPage"
// import logo from "src/assets/pot.jpg"
import { Button, Card, CardContent, CardMedia, DialogActions, DialogContent, Typography } from "@material-ui/core"
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
const useStyles = makeStyles(theme => ({

    card: {
        width: '240px',
        height: '400px',
        margin: '10px',
        padding: '10px',
    },
    cardContent: {
        display: "block",


    },
    img: {
        height: '180px',
        width: '180px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    price: {
        fontWeight: 'bold',


    },
    cross: {
        "&:hover": {
            backgroundColor: 'white'
        },
        "&:focus": {
            backgroundColor: 'white'
        },
        "&:active": {
            backgroundColor: 'white'
        },
    }
}));
function Item(props) {
    

    const classes = useStyles()

    const title = props.title;
    const price = props.price;
    const description = props.description;
    const category = props.category;
    
    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.img} image={pic} />
                    {/* <img src={pic} alt="" srcset=""/> */}
                </CardContent>
                <CardContent >
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography fontWeight="fontWeightMedium" className={classes.price}>LKR {props.price}</Typography>
                    <Typography color="textSecondary" variant="body1">{props.title}</Typography>
                    <Typography variant="body1">{props.title}</Typography>
                </CardContent>
                <cardContent>
                    <Button fullWidth variant="contained" color="secondary">Remove</Button>
                </cardContent>
            </Card>

        </div>
    )
}

export default Item
