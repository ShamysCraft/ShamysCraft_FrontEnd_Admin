import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import OrderItem from "../core/Order/OrderItem"
import { makeStyles } from "@material-ui/core/styles"
import { isAuthenticated } from "../auth/helper";
import { getOrders } from "./helper/adminapicall";

// import user
// import orders

const OrderReceived = (props) => {

    const classes = useStyle();
    const [Orders, setOrders] = useState([])
    const [reload, setreload] = useState("")

    const {user, token} = isAuthenticated()

    // preLoadOrders
    const preLoad = (userId, token) =>{
        getOrders(userId, token)
        .then(data => {
            if(data.error){
                console.log("cannoot load orders")
            }else{
                setOrders(data)
                console.log(Orders)
            }
        })
        
    }
    // call orders
    useEffect(() => {
        preLoad(user._id, token)
    }, [])
    return (

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}>

            {Orders.map((order, index) => {
                return (
                    <OrderItem key={index} userName={order.user.fname} prodName={order.products[0].prodname} date={order.products[0].createdAt} price={order.products[0].price} />
                )
            })}

        </Grid>
    )
}

export default OrderReceived;

const useStyle = makeStyles(() => ({
    row: {

    }
}));