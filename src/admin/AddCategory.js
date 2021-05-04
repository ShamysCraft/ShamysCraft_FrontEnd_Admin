import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
    Card,
    MenuItem,
    TextField,
    Typography,
    Container,
    CssBaseline,
    FormLabel,
    Button,
    ButtonGroup
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { } from "@material-ui/icons"
import { isAuthenticated } from '../auth/helper';

const useStyles = makeStyles((theme) => ({
    qtybtn: {
        padding: '5px',
        border: '2px'

    },
    submit: {
        marginTop: '10px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.

    },

    card: {
        padding: '20px',
        marginTop: '10%',
        width: '50vh',
        marginLeft: '30%'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        "&:hover": {
            color: 'white',
            textDecoration: 'none'

        },
        "&:focus": {
            color: 'white',
            textDecoration: 'none'

        },
        "&:active": {
            color: 'white',
            textDecoration: 'none'

        },
    }
}));

function AddCategory() {
    const classes = useStyles();
    const [text, setText] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // user and token generated will be extracted
    const { user, token } = isAuthenticated()


    return (
        <div>
            <Container>
                <Card className={classes.card}>
                    <CssBaseline />
                    <Typography variant="h4">Add Category</Typography>
                    <form className={classes.form} >
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="title"
                            label="Category Name"
                            name="title"
                            fullWidth
                            onChange={event => setText(event.target.value)}
                        />
                        <div>
                            <ButtonGroup className={classes.submit} fullWidth disableRipple variant="contained">
                                <Button color="primary">Create Category</Button>
                                <Button color="secondary"><Link to="/" className={classes.link}>Cancel</Link></Button>
                            </ButtonGroup>
                        </div>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default AddCategory
