import React from 'react'
import { isAuthenticated } from '../auth/helper'

import {Grid,Container, Card, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

// user is returen when authenticated and the properties are destructured



function AdminDashBoard() {
    // const root = useStyles()
const {user: {fname, lname, email, role}} = isAuthenticated();

    return (
        <div>
           <Container>
                <Card >
                    <Typography>Admin Information</Typography>
                    <Typography>{fname}</Typography>
                    <Typography>{lname}</Typography>
                    <Typography>{email}</Typography>
                    <Typography>{role}</Typography>
                </Card>
                </Container>
        </div>
    )
}

export default AdminDashBoard

const useStyles = makeStyles((theme)=>({
    card: {
        padding: '20px',
        margin: '20px',
        // height: '100vh'
    }
}))