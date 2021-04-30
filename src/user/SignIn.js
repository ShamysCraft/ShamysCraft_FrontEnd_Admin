import React from 'react'
import {Link} from "react-router-dom"
import {
    Button,
    CssBaseline,
    TextField,
    Grid,
    Container,
    Typography,
} from '@material-ui/core'
import Avatar from "@material-ui/core/Avatar"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import {makeStyles} from "@material-ui/core/styles"
import {COLOURS} from "../theme/colors"

const useStyle = makeStyles((theme)=>({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: COLOURS.darkBlue,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      name:{
          marginRight: theme.spacing(2)
      }
}));

function SignIn() {
    const root = useStyle();

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={root.paper}>
                    <Avatar className={root.avatar}><LockOutlinedIcon/></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={root.form} noValidate>
                        <div  style={{display:'flex'}}>
                      
                        </div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                        />
                        
                        {/* <FormControlLabel/> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{backgroundColor :COLOURS.btnColor}}
                            className={root.submit}
                        >Sign Up</Button>
                        <Grid item>
                           <Link to ='/signup' >
                                {"Don't have an Account? Sign Up"}
                           </Link> 
                        </Grid>
                    </form>
                </div>
            </Container>
          
        </div>
    )
}

export default SignIn
