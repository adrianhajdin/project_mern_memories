import React from 'react';
import { Container, AppBar, Typography } from "@material-ui/core";

import Posts from "./components/Posts/Posts";

const App = () => (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Memories</Typography>
        </AppBar>
        <Posts />
    </Container>
);


export default App;
