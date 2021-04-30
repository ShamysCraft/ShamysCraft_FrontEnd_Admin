import React, {useState} from "react";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    FormLabel,
    Button
    
} from "@material-ui/core"
import {COLOURS} from "../theme/colors"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles(()=>({
    profile:{
        padding: '50px'
    },
    column:{
        display: 'flex',
        justifyContent: 'center'
        
    },
    row: {
        display: 'flex',
        margin: '10px'
    },
    Button:{
        backgroundColor :COLOURS.btnColor,
        color: 'black',
        marginTop: '20px'
    },
    formLabel:{
        width: '120px',
        textAlign: 'end',
        marginRight: '5px'
    },
    fields:{
        backgroundColor: COLOURS.darkWhite,
        width: '200px',
        textAlign: 'center',
        height: '30px'
    },
    input:{
        padding: '0 2px 0 5px'
    }
}))

const ProfilePage = (props)=>{
    const classes = useStyle();
    return(
        <div className={classes.profile}>
            <Card className={classes.column}>
                <CardContent >
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>First Name</FormLabel>
                        <Typography className={classes.fields}>Shameera</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Last Name</FormLabel>
                        <Typography className={classes.fields}>Carrim</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Address</FormLabel>
                        <Typography className={classes.fields}>Shameera</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Old Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password"/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>New Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password"/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Confirm Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password"/>
                    </div>
                    <Button variant="contained" color="primary" fullWidth className={classes.Button}>Update Password</Button>
                </CardContent>
                <CardContent>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Line 1</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`}/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>City</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`}/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>District</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`}/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Province</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`}/>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Postal Code</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`}/>
                    </div>
                    <Button variant="contained" color="primary" fullWidth className={classes.Button}>Add/Update Address</Button>
                
                </CardContent>
                
            </Card>
        </div>
    )
}

export default ProfilePage;