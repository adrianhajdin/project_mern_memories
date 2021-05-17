import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField, Grow} from '@material-ui/core'
import useStyles from './style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import {GoogleLogin} from 'react-google-login';
import Icon from './icon'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {signin, signup} from '../../actions/auth'

const initialState = {
    firstName: '',
    lastName:  '',
    email: '',
    password: '',
    confirmPassword: ''
}


const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword]=useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);


    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(formData)
        if(isSignup){
            dispatch(signup(formData, history))
        } else{
            dispatch(signin(formData, history))
        }

    }
    const handleChange= (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleShowPassword= () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => { 
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }
    const googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type:'AUTH', data:{result, token}})
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful, Try Again Later")
    }
    

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon/> 
                </Avatar>
                <Typography variant="h5"> {isSignup ? 'Sign up' : 'Sign in'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>  
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half/>
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Signup' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="189700698381-vn9ik009f5je405ugjf0c7vsjauevn5k.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                                Google Sign In
                            </Button> )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
