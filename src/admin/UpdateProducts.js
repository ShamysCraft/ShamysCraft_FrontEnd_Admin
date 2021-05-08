import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorOutline, CheckCircleOutline } from "@material-ui/icons"

import { Card, MenuItem, TextField, InputAdornment,Form, Typography, Container, CssBaseline, FormLabel, Button, ButtonGroup } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { } from "@material-ui/icons"
import { getCategories, getProduct, updateProduct } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";


const UpdateProduct = ({ match }) => {
    const { user, token } = isAuthenticated()
    const Character_limit = 50;
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
    const preLoad = (productId) => {

        getProduct(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })

            } else {
                setValues({
                    ...values,
                    prodname: data.prodname,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    quantity: data.quantity,
                    formData: new FormData()
                })
                preLoadCategories();
                console.log("prod",productId)
            }
        })
    }

    const preLoadCategories =() =>{
        getCategories()
        .then(data => {
            if(data.error){
                setValues({ ...values, error: data.error })

            }
            else{
                setValues({
                    categories : data, formData: new FormData()
                 })

            }
        })
    }

    useEffect(() => {
        preLoad(match.params.productId);
    }, []);

    // onSubmit 
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true })

        updateProduct(match.params.productId,user._id, token, formData)
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
                    <Typography style={{ marginLeft: '10px', width: 'auto' }} >Product Updated Successfully </Typography>
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
            <Container component="main" maxWidth="xs">
                <Card className={classes.card}>
                    <CssBaseline />
                    <Typography variant="h4">Update Item</Typography>
                    <form className={classes.form} noValidate >


                        <FormLabel >
                            {successMessage()}
                            {errorMessage()}
                        </FormLabel>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="title"
                            name="title"
                            fullWidth
                            value={prodname}
                            autoFocus
                            label="Product Name"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            onChange={onHandleChange("prodname")}
                        />
                        <TextField
                            variant="standard"
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
                            variant="standard"
                            margin="normal"
                            required
                            id="Price"
                            label="Price Per Item"
                            placeholder="Example: 20"
                            name="Price"
                            value={price}
                            type="Number"
                            onChange={onHandleChange("price")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                            }}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            multiline
                            rows={1}
                            id="Description"
                            InputLabelProps={{
                                shrink: true,
                              }}
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
                            // helperText={`${description.length}/${Character_limit}`}

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
                            id="outlined-number"
                            variant="outlined"
                            margin="normal"
                            required
                            label="Quantity"
                            name="quantity"
                            placeholder="Example: 10"
                            autoFocus
                            fullWidth
                            value={quantity}
                            onChange={onHandleChange("quantity")}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                              }}
                        />

                        <div>
                            <ButtonGroup className={classes.submit} fullWidth disableRipple variant="contained">
                                <Button color="primary" onClick={onSubmit}>Update Item</Button>
                                <Button color="secondary"><Link to="/" className={classes.link}>Cancel</Link></Button>
                            </ButtonGroup>
                        </div>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default UpdateProduct;


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
}));