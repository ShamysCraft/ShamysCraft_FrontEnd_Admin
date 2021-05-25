import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Card, MenuItem, TextField, Typography, Container, CssBaseline, Button, ButtonGroup, CardContent } from "@material-ui/core"
import { ErrorOutline, CheckCircleOutline } from "@material-ui/icons"

import { makeStyles } from "@material-ui/core/styles"
import { } from "@material-ui/icons"
import { isAuthenticated } from '../auth/helper';
import { createCategory, getCategories } from './helper/adminapicall';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex'
    },
    qtybtn: {
        padding: '5px',
        border: '2px'

    },
    submit: {
        marginTop: '10px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '20px'

    },

    card: {
        padding: '20px',
        marginTop: '10%',
        width: '50vh',

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
    },
    alertError: {
        padding: '7px',
        backgroundColor: '#d62828',
        color: 'white',
        borderRadius: '3px',
        width: 'auto',
        display: 'flex',
        marginBottom: '2px'
    },
    alertSuccess: {
        padding: '7px',
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '3px',
        width: 'auto',
        display: 'flex',
        marginBottom: '2px',
    },
    alert: {
        fontSize: '10px'
    },
    cat: {
        padding: '5px'
    },
    heading: {
        backgroundColor: '#f0efeb',
        borderRadius: '5px',
        padding: '2px'
    }
}));

function AddCategory() {
    const classes = useStyles();

    const [Name, setName] = useState("")

    const [error, setError] = useState("")

    const [success, setSuccess] = useState(false)

    const [Categories, setCategories] = useState([])

    const [values, setValues] = useState({
        errors: "",
        categories: [],
        formData: ""
    })

    const { errors, categories, formData } = values;
    // preload data
    const preLoadCategories = () => {
        getCategories()
            .then(data => {
                if (data.err) {
                    setValues({ ...values, errors: data.error })
                } else {
                    console.log(categories)

                    setValues({ ...values, categories: data })
                    console.log(categories)
                }
            })

    }

    useEffect(() => {
        preLoadCategories()
    }, [categories])

    // user and token generated will be extracted
    const { user, token } = isAuthenticated()

    //onHandlechange
    const onHandleChange = event => {
        setError("")
        setName(event.target.value)
    }

    // onSubmit
    const onSubmit = event => {
        event.preventDefault();
        setError("")
        setSuccess(false)

        // backend request fired
        createCategory(user._id, token, { Name })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setError("")
                    setSuccess(true)
                    setName("")
                }
            })
    }

    // success
    const successMessage = () => {
        if (success) {
            return (
                <div className={classes.alertSuccess} style={{ display: success ? true : false }}>
                    <CheckCircleOutline />
                    <Typography style={{ marginLeft: '10px', width: 'auto' }} >Category Created Successfully</Typography>
                </div>
            )
        }
    }
    // error
    const errorMessage = () => {

        return (
            <div className={classes.alertError} style={{ display: error ? "" : "none" }}>
                <ErrorOutline />
                <Typography style={{ marginLeft: '10px', width: 'auto' }} >{error}</Typography>
            </div>
        )

    }
    return (
        <div>
            <Container className={classes.container}>
                <CardContent>
                    <Card className={classes.card}>
                        <CssBaseline />
                        <CardContent>
                            <Typography variant="h4">Add Category</Typography>
                        </CardContent>

                        <form className={classes.form} >

                            {errorMessage()}
                            {successMessage()}



                            <CardContent>
                                <Typography variant="h6" >Enter the category name.</Typography>


                                <TextField
                                    variant="standard"
                                    margin="normal"
                                    required
                                    id="title"
                                    label="Ex: Wood Craft"
                                    name="title"
                                    fullWidth
                                    value={Name}
                                    autoComplete={Name}
                                    onChange={onHandleChange}
                                />

                            </CardContent>

                            <div>
                                <ButtonGroup className={classes.submit} fullWidth disableRipple variant="contained">
                                    <Button color="primary" onClick={onSubmit}>Add Category</Button>
                                    <Button color="secondary"><Link to="/" className={classes.link}>Cancel</Link></Button>
                                </ButtonGroup>
                            </div>
                        </form>
                    </Card>
                </CardContent>
                <CardContent>
                    {/* list all categories */}
                    <Card className={classes.card}>
                        <Typography align="center" variant="h5" className={classes.heading} component="p"> Categories Created </Typography>
                        {categories && categories.map((category, index) => (
                            <Typography className={classes.cat} variant="h6" align="center" color="primary" key={index} value={category._id}>
                                {category.Name}
                            </Typography>
                        ))}
                    </Card>
                </CardContent>
            </Container>
        </div>
    )
}

export default AddCategory
