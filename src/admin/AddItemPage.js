import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorOutline, CheckCircleOutline } from "@material-ui/icons"

import { Card, MenuItem, TextField, InputAdornment, Typography, Container, CssBaseline, FormLabel, Button, ButtonGroup } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { } from "@material-ui/icons"
import { createProduct, getCategories } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";


const AddItemPage = (props) => {
    const { user, token } = isAuthenticated()
    const Character_limit= 100;
    const classes = useStyles();

    const [success, setSuccess] = useState(false)
    const [values, setValues] = useState({
        prodname: "",
        description: "",
        price: "",
        photo: "",
        quantity: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getRedirect: false,
        formData: "",
    })

    const {
        prodname,
        description,
        price,
        quantity,
        categories,
        category,
        loading,
        error,
        createdProduct,
        getRedirect,
        formData } = values;



    // preLoad -> categories -> backend -> db
    const preLoad = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })

            } else {
                setValues({ ...values, categories: data, formData: new FormData() })
                console.log(categories)
            }
        })
    }

    useEffect(() => {
        preLoad();
    }, []);

    // onSubmit
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true })
        createProduct(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setSuccess(true);

                    setValues({
                        ...values,
                        prodname: "",
                        description: "",
                        price: "",
                        photo: "",
                        quantity: "",
                        loading: false,
                        createdProduct: data.prodname
                    });
                }
            });
    }

    // onHandleChange
    const onHandleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value })
    }

    // success
    const successMessage = () => {
        if (success) {
            return (
                <div className={classes.alertSuccess} style={{ display: success ? true : false }}>
                    <CheckCircleOutline />
                    <Typography style={{ marginLeft: '10px', width: 'auto' }} >Product Created Successfully </Typography>
                </div>
            )
        }
    }
    // error
    const errorMessage = () => {
        return (
            <div className={classes.alertError} style={{ display: error ? "" : "none" }}>
                <ErrorOutline />
                <Typography style={{ marginLeft: '10px', width: 'auto' }} >{error} </Typography>
            </div>
        )
    }

    return (
        <div>
            <Container component="main"  maxWidth="sm">
                <Card className={classes.card}>
                    <CssBaseline />
                    <Typography variant="h4" align="center">Add Item</Typography>
                    <form className={classes.form} >


                        <FormLabel >
                            {successMessage()}
                            {errorMessage()}
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="title"
                            label="Item Name"
                            name="title"
                            fullWidth
                            value={prodname}
                            autoFocus
                            onChange={onHandleChange("prodname")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="Category"
                            select
                            label="Category"

                            name="Category"
                            fullWidth
                            onChange={onHandleChange("category")}
                        >
                            {categories && categories.map((cate, index) => (
                                <MenuItem key={index} value={cate._id}>
                                    {cate.Name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="Price"
                            label="Price Per Item"
                            placeholder="Example: 20"
                            name="Price"
                            value={price}
                            type="tel"
                            onChange={onHandleChange("price")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                                inputProps: { min: 1, max:100 }
                              }}
                            fullWidth

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            multiline
                            rows={1}
                            id="Description"
                            label="Description"
                            name="Description"
                            placeholder=""
                            autoComplete="Description"
                            autoFocus
                            fullWidth
                            value={description}
                            inputProps={{
                                maxLength: Character_limit
                              }}
                            onChange={onHandleChange("description")}
                            helperText={`${description.length}/${Character_limit}`}
        
                        />
                        <TextField
                            id="outlined"
                            label="Image Upload"
                            name="photo"
                            type="file"
                            fullWidth
                            accept="image"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={onHandleChange("photo")}
                        />


                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="quantity"
                            label="Quantity"
                            name="quantity"
                            placeholder="Example: 10"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            fullWidth
                            value={quantity}
                            onChange={onHandleChange("quantity")}
                            type="tel"
                            className={classes.num}
                            InputProps={{ inputProps: { min: 1, max:100 } }}
                        />

                        <div>
                            <ButtonGroup className={classes.submit} fullWidth disableRipple variant="contained">
                                <Button color="primary" onClick={onSubmit}>Add Item</Button>
                                <Button color="secondary"><Link to="/" className={classes.link}>Cancel</Link></Button>
                            </ButtonGroup>
                        </div>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default AddItemPage;


const useStyles = makeStyles((theme) => ({
    qtybtn: {
        padding: '5px',
        border: '2px'

    },
    submit: {
        marginTop: '10px',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '20px'

    },

    card: {
        padding: '20px',
        margin: '20px',
        width: '60vh',
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

    }, alertError: {
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
    num:{
        '&[type=Number]': {
            '-moz-appearance': 'textfield',
          },
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
    }
}));