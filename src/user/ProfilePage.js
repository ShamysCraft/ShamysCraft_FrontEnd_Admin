import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";

import {
    Card,
    CardContent,
    Typography,
    TextField,
    FormLabel,
    Button

} from "@material-ui/core"
import { COLOURS } from "../theme/colors"
import { makeStyles } from "@material-ui/core/styles"




const useStyle = makeStyles(() => ({
    profile: {
        padding: '50px'
    },
    column: {
        display: 'flex',
        justifyContent: 'center'

    },
    row: {
        display: 'flex',
        margin: '10px'
    },
    Button: {
        backgroundColor: COLOURS.btnColor,
        color: 'black',
        marginTop: '20px'
    },
    formLabel: {
        width: '120px',
        textAlign: 'end',
        marginRight: '5px'
    },
    fields: {
        backgroundColor: COLOURS.darkWhite,
        width: '300px',
        textAlign: 'center',
        height: '30px'
    },
    input: {
        padding: '0 2px 0 5px'
    }
}))

const ProfilePage = (props) => {
const { user } = isAuthenticated();
const fname = user.fname;
const lname = user.lname;
const email = user.email;
const role = user.role;

    const urole = isAuthenticated().user.role;

    const roleCheck = (urole) => {
        
        if( role === 45){
          const  urole = "Admin"
          return urole
        }
    }


    const classes = useStyle();
    return (
        <div className={classes.profile}>
            <Card className={classes.column}>
                <CardContent >
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>First Name</FormLabel>
                        <Typography className={classes.fields}>{fname}</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Last Name</FormLabel>
                        <Typography className={classes.fields}>{lname}</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Email</FormLabel>
                        <Typography className={classes.fields}>{email}</Typography>
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Role</FormLabel>
                        <Typography className={classes.fields}>{roleCheck()}</Typography>
                    </div>

                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Old Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password" />
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>New Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password" />
                    </div>
                    <div className={classes.row}>
                        <FormLabel className={classes.formLabel}>Confirm Password</FormLabel>
                        <TextField className={`${classes.fields} ${classes.input}`} type="password" />
                    </div>
                    <Button variant="contained" color="primary" fullWidth className={classes.Button}>Update Password</Button>
                </CardContent>

            </Card>
        </div>
    )
}

export default ProfilePage;