import React, { useEffect, useState } from 'react'

import { makeStyles } from "@material-ui/core/styles"
import { Button, ButtonGroup, CardActions, CardActionArea, Card, CardContent, CardMedia, FormLabel, Grid, Typography } from "@material-ui/core"
import { isAuthenticated } from "../auth/helper/index"
import { deleteProduct, getProducts } from './helper/adminapicall'
import { Link } from 'react-router-dom'
import ImageHelper from './helper/ImageHelper'

function Home() {
  const classes = useStyles()
  const [Products, setProducts] = useState([])

  const { user, token } = isAuthenticated()


  const preLoad = () => {
    getProducts()
      .then(data => {
        if (data.error) {
          console.log(data.error + "error error")
        } else {
          setProducts(data)

        }
      })

  }

  useEffect(() => {
    preLoad();
  }, [])

  const deleteTheProduct = productId => {
    deleteProduct(productId, user._id, token)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        } else {
          preLoad()
        }
      })
      .catch()
  }



  return (
    <React.Fragment>
      <Typography align="center" style={{ height: '80px',paddingTop: '15px', backgroundColor: '#d8e2dc' }} variant="h4">Welcome to Admin Home!</Typography>
      <Grid className={classes.root} spacing={3}>
        <Grid
          container
          direction="row"
          justify="start"
          alignItems="center"
        >
          {Products.map((product, index) => {
            return (
              <div key={index} >
                <Card className={classes.card}>
                <Typography className={classes.title} gutterBottom align="center" variant="h5" component="h1">{product.prodname}</Typography>
                  <div className={classes.img} >
                  <ImageHelper   product={product} />
                  </div>
                  <CardContent>
                    <Typography align="center" variant="h5" component="h2">LKR {product.price}</Typography>
                    <Typography align="center" gutterBottom variant="body2" color="textSecondary">Category: {product.category.Name}</Typography>
                    <div className={classes.desc}>
                      <Typography align="justify" gutterBottom variant="body2" component="p">{product.description}</Typography>
                    </div>
                    <ButtonGroup variant="contained" fullWidth>
                      <Button className={classes.btn2}  ><Link className={classes.link} to={`/product/update/${product._id}`}>Update</Link></Button>
                      <Button className={classes.btn} variant="contained" onClick={() => {
                        deleteTheProduct(product._id);
                      }}  >Remove</Button>
                    </ButtonGroup>
                  </CardContent>
                </Card>

              </div>
            )
          })}

        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  card: {
    width: '300px',
    height: '400px',
    margin: '10px',
    padding: '5px',
  },
  title:{
    backgroundColor: '#f0efeb',
    borderRadius: '5px',
    height: '35px'
    },
    img: {
      height: '150px'
    },
  desc: {
    height: '60px'

  },
  
  price: {
    fontWeight: 'bold',


  },
  link: {
    textDecoration: 'none',
    color: 'white'
    ,
    "&:hover": {
      color: 'white'
    },
    "&:focus": {
      color: 'white'
    },
    "&:active": {
      color: 'white'
    },
  },
  btn: {
    backgroundColor: '#e63946',
    color: 'white',

    "&:hover": {
      backgroundColor: '#e63946',
      color: 'white',
    },
    "&:focus": {
      backgroundColor: '#e63946',
      color: 'white',
    },
    "&:active": {
      backgroundColor: '#e63946',
      color: 'white',
    },
  },
  btn2: {
    backgroundColor: '#38b000',
    color: 'white',

    "&:hover": {
      backgroundColor: '#38b000',
      color: 'white',
    },
    "&:focus": {
      backgroundColor: '#38b000',
      color: 'white',
    },
    "&:active": {
      backgroundColor: '#38b000',
      color: 'white',
    },
  },
  cross: {
    "&:hover": {
      backgroundColor: 'white'
    },
    "&:focus": {
      backgroundColor: 'white'
    },
    "&:active": {
      backgroundColor: 'white'
    },
  }
}));