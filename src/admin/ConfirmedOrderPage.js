import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import OrderItem from "../core/Order/OrderItem"
import { OrderData } from "./orderData/OrderData"
const ConfirmedOrderPage = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}>

            {OrderData.map((val, key) => {
                if (val.Status === "Accepted") {
                    return (
                        <OrderItem key={key} userName={val.userName} prodName={val.ProductName} qty={val.Quantity} price={val.Price} date={val.date} status={val.Status} />
                    )
                }
                else {
                    return ""
                }
            })}

        </Grid>
    )
}

export default ConfirmedOrderPage;