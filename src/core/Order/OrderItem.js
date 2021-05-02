
import React ,{useState, useEffect} from 'react'
import {
    Card,
    CardContent,
    Typography,
    Button,
    

} from "@material-ui/core"
import {} from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles"
import Alert from "../alertBox/Alert"

const useStyle = makeStyles((theme)=>({
    block :{
        marginTop: '20px'
    },
    row:{
        display:'flex',
        width: '700px',
        margin: '5px',
        
    },
    row1:{
        width:'200px'
    },
    row2:{
        width:'225px'
    },
    row3:{
        width:'225px',
    },
    btnGroup:{
    display: 'flex',
    
    },
    
    accept:{
        backgroundColor: '#00a137',
        color: "white",
        marginRight: '10px',
        "&:hover":{
            backgroundColor: '#ffb703',
            color: "black",
        }
        
    },
    decline:{
        backgroundColor: '#d62828',
            color: "white",

        "&:hover":{
            
            backgroundColor: '#b80c09',
            color: "white",
        }
    }
    
    
}))
const OrderItem = (props)=> {
    const classes = useStyle();
    
    //get order return type
    const [OrderStatus, setOrderStatus] = useState(props.status)
    useEffect(()=> setOrderStatus(props.status),[props.status]);

    const [Open, setOpen] = useState(false)
    const setHandleOpen = () => {
        setOpen(true)
    }
    const setHandleClose = () => {
        setOpen(false)
    }
    const [OpenReject, setOpenReject] = useState(false)
    const setHandleOpenReject = () => {
        setOpenReject(true)
    }
    const setHandleRejectClose = () => {
        setOpenReject(false)
    }

    
    const orderType = () => {
        if(!OrderStatus || OrderStatus === "Pending")
            return (
                <div  className={classes.btnGroup}>
                    
                    <Button
                        onClick={setHandleOpen}
                        
                        variant='contained'
                        className={classes.accept}
                    >Accept
                    </Button>
                    <Alert
                        open={Open}
                        Type = {props.status}
                        btnType = {"Confirm"}
                        onClose = {setHandleClose}
                    />

                    <Button
                        onClick={setHandleOpenReject}
                        
                        variant='contained'
                        className={classes.decline}


                    >Decline
                    </Button>
                    <Alert
                        open={OpenReject}
                        Type = {props.status}
                        btnType = {"Reject"}
                        onClose = {setHandleRejectClose}
                    />
                </div>
            )
        if (OrderStatus === "Accepted") return null;  
    }
    
    
        
    return (
        <div className={classes.block}>
            <Card className={classes.row} >
                
                <CardContent className={classes.row1}>
                    <Typography>{"User Name "+props.userName}</Typography>
                </CardContent>
                <CardContent className={classes.row2}>
                    <Typography>{`Name: ${props.prodName}`}</Typography>
                    <Typography>{`Quantity: ${props.qty}`}</Typography>
                    <Typography>{`Price(LKR): ${props.price}`}</Typography>
                    <Typography>{`Total Cost(LKR): ${props.price*props.qty}`}</Typography>
                </CardContent>
                <CardContent className={classes.row3}>
                    <Typography>{` ${props.date}`}</Typography>
                    
                    <Typography>{`State: ${props.status}`}</Typography>
                    {orderType()}
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderItem
