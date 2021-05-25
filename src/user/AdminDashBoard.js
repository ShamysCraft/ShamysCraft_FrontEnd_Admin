import React, {useState, useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'

import {Grid,Container, Card, Typography, CardContent} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { getTotProdCount, getUserCount, getCategoryCount } from '../admin/helper/adminapicall'

// user is returen when authenticated and the properties are destructured

// getProductsCount
// getUserCount




function AdminDashBoard() {
    const classes = useStyles()
    const [productCount, setProductCount] = useState("")
    const [userCount, setUserCount] = useState("")
    const [categoryCount, setCategoryCount] = useState("")
    const [reload, setreload] = useState("")
    const {user , token} = isAuthenticated()
    // userCount

    // productCount
    // preload
    const preLoadPC = (userId, token) =>{
        getTotProdCount(userId, token)
        .then(data=>{
            if(data.error){
                console.log("Cannot load the prod count")
            }else{
                setProductCount(data)
                console.log(data)
            }
        })

        getUserCount(userId, token)
        .then(data=>{
            if(data.error){
                console.log("Cannot load the prod count")
            }else{
                setUserCount(data)
                console.log(data)
            }
        })

        getCategoryCount(userId, token)
        .then(data=>{
            if(data.error){
                console.log("Cannot load the prod count")
            }else{
                setCategoryCount(data)
                console.log(data)
            }
        })

        


    }
    // useEffect
    useEffect(() => {
        preLoadPC(user._id, token)
    }, [reload])

    return (
        <div>
           
                <Grid container className={classes.root} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    >
                    
                    
                   <CardContent className={classes.column}>
                    <Typography variant="h5" color="primary" className={classes.heading}>Users</Typography>
                   <Typography variant="h5" className={classes.heading}>Total Number of Users Registered</Typography>
                   <Typography variant="h5" align="center" className={classes.count}> {userCount} </Typography>
                   </CardContent>
                   
                   <CardContent className={classes.column}>
                    <Typography variant="h5" color="primary" className={classes.heading}>Products</Typography>
                   <Typography variant="h5" className={classes.heading}>Total Handcraft Products</Typography>
                   <Typography variant="h5" className={classes.count}> {productCount} </Typography>
                   </CardContent>

                   <CardContent className={classes.column}>
                    <Typography variant="h5" color="primary" className={classes.heading}>Categories</Typography>
                   <Typography variant="h5" className={classes.heading}>Total Categories Created</Typography>
                   <Typography variant="h5" className={classes.count}> {categoryCount} </Typography>
                   </CardContent>
                   </Grid>
                </Grid>
        </div>
    )
}

export default AdminDashBoard

const useStyles = makeStyles((theme)=>({
    
    root: {
        // flexGrow: 1,
        padding: '5%',
        // margin: '2%',
      },
      column:{
          width: '300px',
          textAlign: 'center',
          margin: '10px',
          backgroundColor: '#f0efeb',
          borderRadius: '5px',
      },
      heading:{
        margin: '10px',

      },
      count:{
        margin: '40px',
        padding: '10px',
        backgroundColor: "white",
        borderRadius: '5px',
        fontWeight: 'bold'

      }
}))