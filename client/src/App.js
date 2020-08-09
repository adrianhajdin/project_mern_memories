import React from 'react';
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

import Posts from "./components/Posts/Posts";

const App = () => (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Memories</Typography>
        </AppBar>
        <Posts />
        <ButterToast position={{vertical: POS_TOP ,horizontal: POS_RIGHT }}/>
    </Container>
);


export default App;
