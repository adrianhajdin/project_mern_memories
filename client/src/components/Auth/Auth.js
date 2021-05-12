import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import useStyles from './style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Auth = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon/> 
                </Avatar>
            </Paper>
        </Container>
    )
}

export default Auth
